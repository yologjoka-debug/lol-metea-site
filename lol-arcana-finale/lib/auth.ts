
export function login(user:string,pass:string){
  if(user && pass){
    localStorage.setItem("arcana_user",user);
    return true;
  }
  return false;
}
export function currentUser(){
  if(typeof window==="undefined") return null;
  return localStorage.getItem("arcana_user");
}
export function logout(){
  localStorage.removeItem("arcana_user");
}
