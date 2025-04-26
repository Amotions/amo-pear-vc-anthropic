import Anthropic from "@anthropic-ai/sdk";

import genPrompt from "./genPrompt";

export default async function hitAnthro() {
  const anthropicApiKey = process.env["ANTHROPIC_API_KEY"];
  const modelKey = process.env["MODEL_KEY"];

  if (typeof anthropicApiKey !== "string") {
    throw new Error("Missing ANTHROPIC_API_KEY");
  }

  if (typeof modelKey !== "string") {
    throw new Error("Missing MODEL_KEY");
  }

  const anthropic = new Anthropic({
    apiKey: anthropicApiKey,
  });

  const prompt = genPrompt();

  const response = await anthropic.messages.create({
    model: modelKey,
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });

  console.log(`
Prompt:
    ${prompt}
Response:
    id: ${response.id},
    type: ${response.type},
    role: ${response.role},
    model: ${response.model},
    content:
      ${response.content.map((cnt) => {
        return cnt.type === "text"
          ? cnt.text
          : `UNKNOWN CONTENT TYPE: ${cnt.type}`;
      })}
    stop_reason: ${response.stop_reason},
    stop_sequence: ${response.stop_sequence},
`);
}
