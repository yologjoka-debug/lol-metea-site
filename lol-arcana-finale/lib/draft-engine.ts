
export function suggest(enemy:string[]){
  const pool = [
    { name:"Ahri", good:["zed"], bad:["galio"] },
    { name:"Garen", good:["yasuo"], bad:["teemo"] },
    { name:"Jinx", good:["ashe"], bad:["zed"] }
  ];
  return pool.map(c=>{
    let score = 0;
    enemy.forEach(e=>{
      if(c.good.includes(e)) score+=2;
      if(c.bad.includes(e)) score-=2;
    });
    return {...c, score};
  }).sort((a,b)=>b.score-a.score);
}
