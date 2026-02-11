
"use client";
import { useState } from "react";

export default function Draft(){
  const [enemy,setEnemy] = useState("");
  const [res,setRes] = useState<any[]>([]);

  async function run(){
    const r = await fetch("/api/draft",{
      method:"POST",
      body: JSON.stringify({enemy: enemy.split(",")})
    });
    setRes(await r.json());
  }

  return (
    <div style={{padding:40, display:"grid", gap:20}}>
      <h1 className="arcana-title">Draft Oracle</h1>
      <div className="arcana-card">
        <input value={enemy} onChange={e=>setEnemy(e.target.value)}
          placeholder="Enemy picks (zed,ashe,yasuo)" />
        <button onClick={run} className="arcana-btn">Calcola Pick</button>
      </div>
      {res.map(r=> (
        <div key={r.name} className="arcana-card">
          {r.name} — score {r.score}
        </div>
      ))}
    </div>
  );
}
