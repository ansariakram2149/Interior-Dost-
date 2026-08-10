import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client safely (lazy check or runtime check)
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is missing");
  }
  return new GoogleGenAI({ apiKey });
};

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/api/recommend", async (req, res) => {
  try {
    const { city, propertyType, area, budget, packageTitle, roomScope } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        error: "AI API key is not configured. Please set GEMINI_API_KEY in secrets." 
      });
    }

    const ai = getGeminiClient();

    const prompt = `
You are a senior Indian interior design expert consultant for 'InterioZom', a premier interior design discovery platform in India.
A homeowner has submitted the following requirements:
- City: ${city || "General Indian City"}
- Property Type: ${propertyType || "2 BHK"}
- Area: ${area || 1000} Sq. Ft.
- Selected Package: ${packageTitle || "Premium Interior"}
- User Preferred Budget: ${budget || "Standard"}
- Room Scope: ${roomScope || "Living Room, Kitchen, Bedrooms, Bathrooms"}

Provide a professional, tailored, encouraging interior design expert recommendation (in 3 structured paragraphs or bullet points):
1. Design & Aesthetic Strategy: How to best optimize this space in ${city} considering local climate, lifestyle, and storage needs.
2. Material & Finish Recommendations: What specific finishes (e.g., acrylic vs matte laminates, fluted panels, quartz vs granite) work best for this package tier.
3. Cost & Value Advice: Practical advice on budgeting, maximizing space efficiency, and avoiding common pitfalls.

Keep the tone expert, trustworthy, warm, and sophisticated. Do not give an exact binding contract price, but give helpful architectural guidance.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const advice = response.text || "Unable to generate AI recommendation at this moment.";
    res.json({ success: true, advice });
  } catch (error: any) {
    console.error("Gemini recommendation error:", error);
    res.status(500).json({ success: false, error: error.message || "Failed to generate AI recommendation" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`InterioZom Server running on http://localhost:${PORT}`);
  });
}

startServer();
