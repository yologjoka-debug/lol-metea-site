
import { getMeta } from "@/lib/meta";
export async function GET(_:Request,{params}:any){
  return Response.json(await getMeta(params.slug));
}
