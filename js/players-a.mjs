const raw=[
['felipe-melo','Felipe Melo','Brezilya','Orta saha','Felipe Melo','galatasaray juventus inter'],
['wesley-sneijder','Wesley Sneijder','Hollanda','Orta saha','Wesley Sneijder','real-madrid inter galatasaray'],
['mauro-icardi','Mauro Icardi','Arjantin','Forvet','Mauro Icardi','inter psg galatasaray'],
['hamit-altintop','Hamit Altıntop','Türkiye','Orta saha','Hamit Altıntop','bayern real-madrid galatasaray'],
['emre-belozoglu','Emre Belözoğlu','Türkiye','Orta saha','Emre Belözoğlu','galatasaray inter fenerbahce'],
['roberto-carlos','Roberto Carlos','Brezilya','Defans','Roberto Carlos','inter real-madrid fenerbahce'],
['nicolas-anelka','Nicolas Anelka','Fransa','Forvet','Nicolas Anelka','psg arsenal real-madrid man-city chelsea fenerbahce juventus'],
['ricardo-quaresma','Ricardo Quaresma','Portekiz','Kanat','Ricardo Quaresma','barcelona inter chelsea besiktas'],
['miralem-pjanic','Miralem Pjanić','Bosna-Hersek','Orta saha','Miralem Pjanić','juventus barcelona besiktas'],
['guti','Guti','İspanya','Orta saha','Guti (footballer)','real-madrid besiktas'],
['pepe','Pepe','Portekiz','Defans','Pepe (footballer, born 1983)','real-madrid besiktas'],
['ciro-immobile','Ciro Immobile','İtalya','Forvet','Ciro Immobile','juventus dortmund besiktas'],
['cristiano-ronaldo','Cristiano Ronaldo','Portekiz','Forvet','Cristiano Ronaldo','man-united real-madrid juventus'],
['zinedine-zidane','Zinedine Zidane','Fransa','Orta saha','Zinedine Zidane','juventus real-madrid'],
['sami-khedira','Sami Khedira','Almanya','Orta saha','Sami Khedira','real-madrid juventus'],
['alvaro-morata','Álvaro Morata','İspanya','Forvet','Álvaro Morata','real-madrid juventus chelsea'],
['gonzalo-higuain','Gonzalo Higuaín','Arjantin','Forvet','Gonzalo Higuaín','real-madrid juventus ac-milan chelsea'],
['fabio-cannavaro','Fabio Cannavaro','İtalya','Defans','Fabio Cannavaro','inter juventus real-madrid']
];
export const playersA=raw.map(([id,name,country,position,wikiTitle,clubList])=>({id,name,country,position,wikiTitle,clubs:clubList.split(' ')}));
