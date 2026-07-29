import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

export async function POST(request: Request) {
  try {
    const { categoryLabel, countryName, indicators } = await request.json()

    const prompt = `You are writing a short, factual comparison summary for a data 
dashboard comparing India against another country.

Category: ${categoryLabel}
Comparing: India vs ${countryName}

Data:
${JSON.stringify(indicators, null, 2)}

Write a 4-5 sentence summary comparing India and ${countryName} on this category. 
Mention specific numbers where relevant. Keep the tone factual and neutral, like a 
data journalism piece. Do not make up any numbers not present in the data provided.
Even provide the source of data comparison.Add a bit about where does india leads if leading
or lags if less in metrics with a bit of ground level data.And even add the turing point for 
india like form which year did a drastic change occured in the process.`

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: prompt,
    })

    return Response.json({ insight: response.text })
  } catch (error) {
    console.error("Gemini API error:", error)
    return Response.json(
      { error: "Failed to generate insight" },
      { status: 500 }
    )
  }
}
