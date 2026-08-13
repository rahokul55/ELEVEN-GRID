import { clubs, clubById } from './clubs.mjs';
import { playersA } from './players-a.mjs';
import { playersB } from './players-b.mjs';
import { playersC1 } from './players-c1.mjs';
export { clubs, clubById };
export const players=[...playersA,...playersB,...playersC1];
export const playerById=Object.fromEntries(players.map(p=>[p.id,p]));
export const boards=[
{id:'europe-classic',name:'Avrupa Klasikleri',rows:['real-madrid','barcelona','psg'],cols:['juventus','inter','ac-milan']},
{id:'england-europe',name:'İngiltere × Avrupa',rows:['chelsea','arsenal','man-united'],cols:['real-madrid','barcelona','juventus']},
{id:'turkiye-legends',name:'Türkiye Bağlantıları',rows:['galatasaray','fenerbahce','besiktas'],cols:['inter','juventus','real-madrid']},
{id:'elite-mix',name:'Elit Karışım',rows:['bayern','psg','real-madrid'],cols:['barcelona','chelsea','inter']}
];
