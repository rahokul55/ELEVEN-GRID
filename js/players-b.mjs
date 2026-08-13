const raw=[
['luis-figo','Luís Figo','Portekiz','Kanat','Luís Figo','barcelona real-madrid inter'],
['ronaldo-nazario','Ronaldo Nazário','Brezilya','Forvet','Ronaldo (Brazilian footballer)','barcelona inter real-madrid ac-milan'],
['achraf-hakimi','Achraf Hakimi','Fas','Defans','Achraf Hakimi','real-madrid dortmund inter psg'],
['clarence-seedorf','Clarence Seedorf','Hollanda','Orta saha','Clarence Seedorf','real-madrid inter ac-milan'],
['kaka','Kaká','Brezilya','Orta saha','Kaká','ac-milan real-madrid'],
['david-beckham','David Beckham','İngiltere','Orta saha','David Beckham','man-united real-madrid ac-milan psg'],
['ronaldinho','Ronaldinho','Brezilya','Orta saha','Ronaldinho','psg barcelona ac-milan'],
['zlatan-ibrahimovic','Zlatan Ibrahimović','İsveç','Forvet','Zlatan Ibrahimović','juventus inter barcelona ac-milan psg man-united'],
['dani-alves','Dani Alves','Brezilya','Defans','Dani Alves','barcelona juventus psg'],
['arthur-melo','Arthur Melo','Brezilya','Orta saha','Arthur Melo','barcelona juventus'],
['samuel-etoo',"Samuel Eto'o",'Kamerun','Forvet',"Samuel Eto'o",'real-madrid barcelona inter chelsea'],
['arturo-vidal','Arturo Vidal','Şili','Orta saha','Arturo Vidal','juventus bayern barcelona inter'],
['gianluigi-buffon','Gianluigi Buffon','İtalya','Kaleci','Gianluigi Buffon','juventus psg'],
['adrien-rabiot','Adrien Rabiot','Fransa','Orta saha','Adrien Rabiot','psg juventus'],
['angel-di-maria','Ángel Di María','Arjantin','Kanat','Ángel Di María','real-madrid man-united psg juventus'],
['thiago-motta','Thiago Motta','İtalya','Orta saha','Thiago Motta','barcelona inter psg'],
['thiago-silva','Thiago Silva','Brezilya','Defans','Thiago Silva','ac-milan psg chelsea'],
['gianluigi-donnarumma','Gianluigi Donnarumma','İtalya','Kaleci','Gianluigi Donnarumma','ac-milan psg']
];
export const playersB=raw.map(([id,name,country,position,wikiTitle,clubList])=>({id,name,country,position,wikiTitle,clubs:clubList.split(' ')}));
