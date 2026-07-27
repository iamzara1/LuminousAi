import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { question, article } = await req.json();

    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      throw new Error("Missing Gemini API key");
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
You are LuminousAI, a crypto market intelligence assistant.

Article:
${article}

User question:
${question}

Give a clear professional crypto analysis.
`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const answer =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response generated.";

    return NextResponse.json({
      answer,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      answer: "AI service unavailable.",
    });
  }
}
