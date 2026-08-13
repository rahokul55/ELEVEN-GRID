const raw=[
['eden-hazard','Eden Hazard','Belçika','Kanat','Eden Hazard','chelsea real-madrid'],
['thibaut-courtois','Thibaut Courtois','Belçika','Kaleci','Thibaut Courtois','chelsea real-madrid'],
['arjen-robben','Arjen Robben','Hollanda','Kanat','Arjen Robben','chelsea real-madrid bayern'],
['cesc-fabregas','Cesc Fàbregas','İspanya','Orta saha','Cesc Fàbregas','arsenal barcelona chelsea'],
['aaron-ramsey','Aaron Ramsey','Galler','Orta saha','Aaron Ramsey','arsenal juventus'],
['ivan-perisic','Ivan Perišić','Hırvatistan','Kanat','Ivan Perišić','inter bayern']
];
export const playersC1=raw.map(([id,name,country,position,wikiTitle,clubList])=>({id,name,country,position,wikiTitle,clubs:clubList.split(' ')}));
