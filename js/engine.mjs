export const WIN_LINES=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
export function eligiblePlayers(players,a,b,used=new Set()){return players.filter(p=>!used.has(p.id)&&p.clubs.includes(a)&&p.clubs.includes(b))}
export function validPlayer(player,a,b,used=new Set()){return !!player&&!used.has(player.id)&&player.clubs.includes(a)&&player.clubs.includes(b)}
export function winner(cells){for(const line of WIN_LINES){const[a,b,c]=line;if(cells[a]?.owner&&cells[a].owner===cells[b]?.owner&&cells[a].owner===cells[c]?.owner)return{owner:cells[a].owner,line}}return null}
export function isDraw(cells){return cells.every(Boolean)&&!winner(cells)}
export function boardIsPlayable(board,players){return board.rows.every(r=>board.cols.every(c=>eligiblePlayers(players,r,c).length>0))}
export function seededIndex(seed,length){let h=2166136261;for(let i=0;i<seed.length;i++){h^=seed.charCodeAt(i);h=Math.imul(h,16777619)}return(h>>>0)%length}
