import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { goal, background, timeCommitment, targetCountry, language } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY environment variable is not configured." },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const promptLang = language === 'np' ? 'Nepali (नेपाली)' : 'English';

    const prompt = `You are the Senior Academic Counselor at "Bar Academy Tarahara", Itahari, Nepal.
A prospective student is asking for personalized advice on choosing their training pathway:
- Goal / Career Vision: ${goal}
- Educational / Experience Background: ${background}
- Available Time Commitment: ${timeCommitment}
- Target Working Location: ${targetCountry} (e.g. Nepal, Dubai/UAE, Qatar, Europe, Cruise Ship, Australia)
- Output Language: ${promptLang}

Respond with an encouraging, professional, and actionable recommendation strictly in JSON format:
{
  "recommendedCourse": "Course Name (e.g. Professional Bartending & Mixology Diploma)",
  "fitScore": "98%",
  "summary": "Clear 2-3 sentence explanation why this course matches their goal.",
  "keySkillsToFocus": [
    "Skill 1 (e.g. Free Pouring Precision)",
    "Skill 2 (e.g. Cocktail Chemistry)",
    "Skill 3 (e.g. International Interview Prep)"
  ],
  "careerPath": "Expected career trajectory (e.g. Junior Bartender in Nepal -> 5-Star Resort in Dubai within 6 months)",
  "nextStep": "Step-by-step guidance on enrolling at Bar Academy Tarahara."
}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.6,
      },
    });

    const text = response.text || "";
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { text };
    }

    return NextResponse.json({ success: true, recommendation: data });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Internal Server Error";
    console.error("Gemini Career Advisor Error:", errMessage);
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
