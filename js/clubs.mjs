const raw = [
['galatasaray','Galatasaray','GS','Türkiye','#f7c400','#a90432','Galatasaray S.K. (football)'],
['fenerbahce','Fenerbahçe','FB','Türkiye','#f5df00','#0a2a66','Fenerbahçe S.K. (football)'],
['besiktas','Beşiktaş','BJK','Türkiye','#ffffff','#111111','Beşiktaş J.K.'],
['real-madrid','Real Madrid','RMA','İspanya','#ffffff','#2f3a8f','Real Madrid CF'],
['barcelona','FC Barcelona','BAR','İspanya','#004d98','#a50044','FC Barcelona'],
['juventus','Juventus','JUV','İtalya','#ffffff','#111111','Juventus FC'],
['inter','Inter Milan','INT','İtalya','#0068a8','#111111','Inter Milan'],
['ac-milan','AC Milan','MIL','İtalya','#b51a2b','#111111','AC Milan'],
['chelsea','Chelsea','CHE','İngiltere','#034694','#ffffff','Chelsea F.C.'],
['arsenal','Arsenal','ARS','İngiltere','#ef0107','#ffffff','Arsenal F.C.'],
['man-united','Manchester United','MUN','İngiltere','#da291c','#fbe122','Manchester United F.C.'],
['man-city','Manchester City','MCI','İngiltere','#6cabdd','#ffffff','Manchester City F.C.'],
['bayern','Bayern Münih','FCB','Almanya','#dc052d','#0066b2','FC Bayern Munich'],
['dortmund','Borussia Dortmund','BVB','Almanya','#fde100','#111111','Borussia Dortmund'],
['psg','Paris Saint-Germain','PSG','Fransa','#004170','#da291c','Paris Saint-Germain F.C.']
];
export const clubs = raw.map(([id,name,short,country,c1,c2,wikiTitle]) => ({id,name,short,country,colors:[c1,c2],wikiTitle}));
export const clubById = Object.fromEntries(clubs.map(c => [c.id,c]));
