import test from'node:test';import assert from'node:assert/strict';import{players,boards}from'../js/data.mjs';import{boardIsPlayable,eligiblePlayers,winner}from'../js/engine.mjs';
test('all boards are playable',()=>{for(const b of boards)assert.equal(boardIsPlayable(b,players),true,b.name)});
test('Real Madrid x Juventus has answers',()=>assert.ok(eligiblePlayers(players,'real-madrid','juventus').length>=3));
test('winner detects a row',()=>assert.equal(winner([{owner:'human'},{owner:'human'},{owner:'human'},null,null,null,null,null,null]).owner,'human'));
test('all boards have nine distinct usable players',()=>{for(const b of boards){const o=b.rows.flatMap(r=>b.cols.map(c=>eligiblePlayers(players,r,c).map(p=>p.id))),m=new Map();function add(cell,seen){for(const id of o[cell]){if(seen.has(id))continue;seen.add(id);if(!m.has(id)||add(m.get(id),seen)){m.set(id,cell);return true}}return false}let n=0;for(let i=0;i<9;i++)if(add(i,new Set()))n++;assert.equal(n,9,b.name)}});
