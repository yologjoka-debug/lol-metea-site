
import Link from "next/link";
export default function Page(){
  return (
    <div style={{padding:40, display:"grid", gap:20}}>
      <h1 className="arcana-title">LoL Meta Arcana</h1>
      <Link className="arcana-btn" href="/login">Login</Link>
      <Link className="arcana-btn" href="/draft">Draft Assistant</Link>
      <Link href="/champion/ahri">Ahri</Link>
      <Link href="/champion/garen">Garen</Link>
      <Link href="/champion/jinx">Jinx</Link>
    </div>
  );
}
