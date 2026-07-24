import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { category, baseIngredient, flavorProfile, language } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY environment variable is not configured." },
        { status: 500 },
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const promptLang = language === "np" ? "Nepali (नेपाली)" : "English";

    const prompt = `You are the Master Head Instructor at "Bar Academy Tarahara", Nepal's premier professional bartending and barista institute located in Tarahara, Itahari.
Generate a professional, high-end beverage recipe based on the user's choices:
- Category: ${category || "Cocktail / Mocktail / Coffee"}
- Base Ingredient/Spirit: ${baseIngredient || "Any"}
- Flavor Notes / Style: ${flavorProfile || "Balanced & Refreshing"}
- Respond in Language: ${promptLang}

Format your response strictly in structured JSON (with no surrounding markdown backticks if possible, or clean JSON object):
{
  "title": "Beverage Name (e.g. Tarahara Sunset Sparkler / Himalayan Mocha Velvet)",
  "category": "${category || "Cocktail"}",
  "prepTime": "3 mins",
  "glassware": "Glass type (e.g. Coupe / Highball / Double Wall Espresso Cup)",
  "garnish": "Garnish description",
  "ingredients": [
    "30ml Ingredient A",
    "60ml Ingredient B",
    "Garnish item"
  ],
  "steps": [
    "Step 1...",
    "Step 2...",
    "Step 3..."
  ],
  "proTip": "A professional tip from Bar Academy Tarahara master instructor (e.g. regarding ice temperature, pour angle, or milk micro-foam density)."
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.7,
      },
    });

    const text = response.text || "";
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { text };
    }

    return NextResponse.json({ success: true, recipe: data });
  } catch (error: unknown) {
    const errMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    console.error("Gemini Recipe Generation Error:", errMessage);
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
