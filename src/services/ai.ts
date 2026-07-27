export type AIAnalysis = {
  summary: string;
  sentiment: "Bullish" | "Bearish" | "Neutral";
  risk: "Low" | "Medium" | "High";
};

export async function analyseToken(name: string): Promise<AIAnalysis> {
  return {
    summary: `${name} analysis is not available yet. AI integration will be connected in the next phase.`,
    sentiment: "Neutral",
    risk: "Medium",
  };
}
