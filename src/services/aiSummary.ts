export async function generateNewsAnalysis(
  title: string,
  description: string
) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY") {
      return {
        summary: "AI analysis unavailable. Add Gemini API key.",
        sentiment: "Neutral",
        impact: "Unknown",
        coins: [],
        insight: "Configure AI to enable LuminousAI intelligence.",
      };
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
Analyze this crypto news.

Title:
${title}

Description:
${description}

Return JSON only:

{
 "summary": "",
 "sentiment": "Bullish/Bearish/Neutral",
 "impact": "",
 "coins": [],
 "insight": ""
}
`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("No AI response");
    }

    return JSON.parse(
      text.replace(/```json/g, "").replace(/```/g, "")
    );

  } catch (error) {
    console.error("AI ERROR:", error);

    return {
      summary: "Unable to generate analysis.",
      sentiment: "Neutral",
      impact: "Unknown",
      coins: [],
      insight: "Try again later.",
    };
  }
}
