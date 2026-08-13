import { clubs, clubById } from './clubs.mjs';
import { playersA } from './players-a.mjs';
import { playersB } from './players-b.mjs';
import { playersC1 } from './players-c1.mjs';
export { clubs, clubById };
export const players=[...playersA,...playersB,...playersC1];
export const playerById=Object.fromEntries(players.map(p=>[p.id,p]));
