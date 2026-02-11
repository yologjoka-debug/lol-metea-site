
import { getMeta } from "@/lib/meta";

export default async function Page({params}:any){
  const meta = await getMeta(params.slug);
  if(!meta) return <div>Non trovato</div>;

  return (
    <div style={{padding:40, display:"grid", gap:20}}>
      <h1 className="arcana-title">{params.slug}</h1>
      <div className="arcana-card">
        <div>Patch: {meta.patch}</div>
        <div>Winrate: {meta.winrate}%</div>
        <div>Pickrate: {meta.pickrate}%</div>
      </div>
      <div className="arcana-card">
        <strong>Matchup winrate</strong>
        {Object.entries(meta.matchups||{}).map(([k,v]:any)=>(
          <div key={k}>{k}: {v}%</div>
        ))}
      </div>
    </div>
  );
}
