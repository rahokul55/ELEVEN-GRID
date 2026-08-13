import test from'node:test';import assert from'node:assert/strict';import{players,boards}from'../js/data.mjs';import{boardIsPlayable,eligiblePlayers,winner}from'../js/engine.mjs';
test('all boards are playable',()=>{for(const b of boards)assert.equal(boardIsPlayable(b,players),true,b.name)});
test('Real Madrid x Juventus has answers',()=>assert.ok(eligiblePlayers(players,'real-madrid','juventus').length>=3));
test('winner detects a row',()=>assert.equal(winner([{owner:'human'},{owner:'human'},{owner:'human'},null,null,null,null,null,null]).owner,'human'));
