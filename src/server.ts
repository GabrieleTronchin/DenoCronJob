import { handleRouting } from "./routing.ts";

async function handler(req: Request): Promise<Response> {
  return await handleRouting(req.url);
}

Deno.serve(handler);
