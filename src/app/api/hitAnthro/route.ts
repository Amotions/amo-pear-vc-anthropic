import { NextApiRequest } from "next";
import hitAnthro from "../../../lib/hitAnthro";

export async function GET(request: NextApiRequest) {
  await hitAnthro();

  return new Response(`hit em ${String(request).substring(0, 44)}`, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
