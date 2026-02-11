
export async function getMeta(champ:string){
  const patchRes = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
    { cache: "no-store" }
  );
  const patch = (await patchRes.json())[0];

  const stats:any = {
    ahri:{ winrate:51.8, pickrate:12, matchups:{ zed:54, galio:46 }},
    garen:{ winrate:50.4, pickrate:8, matchups:{ teemo:44, yasuo:55 }},
    jinx:{ winrate:52.3, pickrate:18, matchups:{ ashe:53, zed:41 }}
  };

  return { patch, ...(stats[champ] || null) };
}
