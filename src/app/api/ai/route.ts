import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  // Placeholder response until an AI provider is connected
  return NextResponse.json({
    answer: `LuminousAI received your request: "${prompt}". AI integration is ready to be connected.`,
  });
}
