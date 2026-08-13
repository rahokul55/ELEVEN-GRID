const KEY='eleven_grid_profile_v1';
export const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const freshProfile=name=>({username:name,rating:1000,xp:0,wins:0,draws:0,losses:0,matches:[],daily:{}});
export function loadProfile(){try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch{return null}}
export function saveProfile(p){localStorage.setItem(KEY,JSON.stringify(p));return p}
export const levelOf=p=>Math.floor((p.xp||0)/450)+1;
export function recordMatch(p,result,opponent,boardName){const delta=result==='win'?24:result==='draw'?4:-16;p.rating=Math.max(100,p.rating+delta);p.xp+=result==='win'?110:result==='draw'?55:30;p.wins+=result==='win'?1:0;p.draws+=result==='draw'?1:0;p.losses+=result==='loss'?1:0;p.matches.unshift({at:new Date().toISOString(),result,opponent,boardName,delta});p.matches=p.matches.slice(0,25);saveProfile(p);return delta}
