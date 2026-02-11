
"use client";
import { useState } from "react";
import { login } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Login(){
  const [u,setU]=useState("");
  const [p,setP]=useState("");
  const r = useRouter();
  return (
    <div style={{padding:40}} className="arcana-card">
      <h1 className="arcana-title">Login Arcana</h1>
      <input placeholder="user" onChange={e=>setU(e.target.value)} />
      <input placeholder="pass" type="password" onChange={e=>setP(e.target.value)} />
      <button className="arcana-btn" onClick={()=>{ if(login(u,p)) r.push("/"); }}>
        Entra
      </button>
    </div>
  );
}
