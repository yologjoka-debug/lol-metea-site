
import { suggest } from "@/lib/draft-engine";
export async function POST(req:Request){
  const body = await req.json();
  return Response.json(suggest(body.enemy||[]));
}
