window.FICHES = window.FICHES || [];
window.FICHES.push(
{
  id: "catastrophes-01",
  cat: "catastrophes",
  titre: "Incendie de forêt",
  resume: "Ne fuyez jamais face au feu à pied ou sur une route enfumée. Une maison en dur ou une voiture arrêtée protègent mieux que la fuite au hasard : confinez-vous et appelez le 18 ou le 112.",
  urgence: true,
  etapes: [
    "Dès que vous voyez de la fumée, appelez le 18 ou le 112 et donnez un lieu précis.",
    "À pied, éloignez-vous du feu sur le côté, jamais dans le sens du vent qui pousse les flammes.",
    "Cherchez une zone déjà brûlée, une route large, un champ labouré, un parking ou un plan d'eau.",
    "En voiture, ne roulez pas dans la fumée. Garez-vous sur un espace dégagé, moteur coupé, phares allumés, vitres et aérations fermées.",
    "Dans la voiture, allongez-vous sous le niveau des vitres et couvrez-vous d'une couverture en laine ou en coton.",
    "À la maison, restez à l'intérieur : fermez portes, volets et fenêtres, bouchez les bas de porte avec des linges mouillés.",
    "Remplissez baignoire et seaux d'eau, éloignez les rideaux des fenêtres, restez dans la pièce la plus éloignée du feu.",
    "Ne sortez qu'une fois le front de flammes passé, avec des chaussures épaisses, et signalez-vous aux secours."
  ],
  conseils: [
    "Dans le Var, débroussaillez 50 mètres autour de la maison avant l'été : c'est une obligation dans de nombreuses communes et la meilleure protection.",
    "Les jours de mistral, l'accès aux massifs est souvent fermé : consultez la carte des massifs avant une sortie.",
    "Gardez un vêtement en coton et une gourde dans la voiture l'été."
  ],
  erreurs: [
    "Fuir à pied en montée ou vers le haut d'une colline : le feu monte plus vite que vous.",
    "Sortir de la voiture au passage des flammes.",
    "Porter des vêtements synthétiques qui fondent sur la peau."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 160 L310 160"/><path d="M30 160 L45 120 L60 160 Z" fill="var(--vert)"/><path d="M60 160 Q70 110 80 135 Q90 95 100 140 Q110 115 120 160 Z" fill="var(--feu)"/><path d="M140 70 L180 70" /><path d="M170 62 L180 70 L170 78"/><text x="135" y="60" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">vent</text><path d="M200 160 L200 120 L240 95 L280 120 L280 160 Z" fill="var(--fill)"/><rect x="230" y="135" width="20" height="25"/><text x="208" y="185" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">se confiner</text><circle cx="90" cy="30" r="12" fill="var(--accent)"/><text x="86" y="34" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text><text x="40" y="185" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">front de feu</text><path d="M130 175 Q165 190 200 175" stroke-dasharray="4 4"/><text x="140" y="110" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">pas de fuite</text></svg>`,
  legende: "Le vent pousse le feu : une maison fermée protège mieux qu'une fuite à découvert.",
  motscles: ["feu de forêt", "incendie", "mistral", "voiture", "confinement", "débroussaillage"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/comment-survivre-en-cas-de-grand-incendie-en-foret/" }
},
{
  id: "catastrophes-02",
  cat: "catastrophes",
  titre: "Incendie dans un immeuble",
  resume: "La fumée tue avant les flammes. Sortez si l'escalier est libre de fumée, sinon restez chez vous porte fermée et signalez-vous aux pompiers.",
  urgence: true,
  etapes: [
    "Appelez le 18 ou le 112 en donnant l'adresse, l'étage et ce que vous voyez.",
    "Avant d'ouvrir une porte, touchez-la du dos de la main : si elle est chaude, ne l'ouvrez pas.",
    "Si l'escalier est sans fumée, sortez en fermant les portes derrière vous, sans prendre l'ascenseur.",
    "S'il y a de la fumée dans l'escalier ou le couloir, restez dans votre logement.",
    "Fermez la porte et calfeutrez le bas avec des linges mouillés, arrosez la porte si possible.",
    "Placez-vous près d'une fenêtre et faites-vous voir des pompiers avec un tissu clair.",
    "Si la fumée entre, baissez-vous : l'air respirable reste près du sol."
  ],
  conseils: [
    "Installez un détecteur de fumée par étage et testez-le une fois par mois.",
    "Repérez à l'avance les sorties et l'escalier de votre immeuble, ou de votre hôtel en déplacement.",
    "Gardez clés, téléphone et lampe près de votre lit."
  ],
  erreurs: [
    "Prendre l'ascenseur.",
    "Traverser un couloir enfumé en espérant passer.",
    "Revenir chercher des affaires une fois sorti.",
    "Sauter par la fenêtre au-dessus du premier étage."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="20" width="130" height="170" fill="var(--fill)"/><path d="M20 77 L150 77 M20 133 L150 133"/><path d="M60 133 Q80 115 100 133 Q115 120 130 133" fill="var(--sol)"/><text x="30" y="110" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">fumée</text><path d="M85 75 L110 75" /><text x="28" y="65" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">porte fermée</text><path d="M40 77 L40 50 L60 50 L60 77"/><path d="M38 76 L62 76" stroke-width="4" stroke="var(--eau)"/><rect x="115" y="35" width="25" height="25" fill="var(--eau)"/><path d="M140 45 L160 40"/><text x="165" y="45" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">se signaler</text><circle cx="185" cy="90" r="12" fill="var(--accent)"/><text x="181" y="94" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text><text x="205" y="94" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">porte chaude ?</text><circle cx="185" cy="125" r="12" fill="var(--accent)"/><text x="181" y="129" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text><text x="205" y="129" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">calfeutrer</text><circle cx="185" cy="160" r="12" fill="var(--accent)"/><text x="181" y="164" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">3</text><text x="205" y="164" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">rester bas</text></svg>`,
  legende: "Fumée dans l'escalier : restez chez vous, porte calfeutrée, et faites-vous voir à la fenêtre.",
  motscles: ["immeuble", "incendie", "fumée", "appartement", "escalier", "pompiers"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/comment-survivre-a-un-incendie-dans-un-immeuble/" }
},
{
  id: "catastrophes-03",
  cat: "catastrophes",
  titre: "Incendie dans un tunnel",
  resume: "Dans un tunnel, ne restez pas dans votre véhicule. Arrêtez-vous, coupez le moteur, laissez la clé et rejoignez à pied l'abri ou la sortie de secours la plus proche.",
  urgence: true,
  etapes: [
    "Si vous voyez de la fumée devant vous, allumez les feux de détresse et arrêtez-vous sans faire demi-tour.",
    "Rangez-vous sur le côté, coupez le moteur et laissez la clé sur le contact pour que les secours puissent déplacer le véhicule.",
    "Sortez rapidement avec les passagers, sans chercher à emporter vos bagages.",
    "Marchez à l'opposé de la fumée vers la sortie de secours ou l'abri le plus proche, signalés par des panneaux verts.",
    "Si la fumée vous rattrape, baissez-vous, couvrez nez et bouche avec un tissu et longez la paroi.",
    "Une fois à l'abri, utilisez le poste d'appel d'urgence et suivez les consignes diffusées."
  ],
  conseils: [
    "En entrant dans un long tunnel, allumez la radio : les consignes y sont souvent diffusées.",
    "Gardez une distance de sécurité d'au moins 150 mètres avec le véhicule de devant.",
    "Repérez en roulant la distance jusqu'au prochain abri, indiquée sur les panneaux."
  ],
  erreurs: [
    "Rester dans la voiture en attendant que ça passe.",
    "Faire demi-tour en voiture dans le tunnel.",
    "Marcher vers la fumée pour voir ce qui se passe."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 150 L10 70 Q160 10 310 70 L310 150 Z" fill="var(--fill)"/><path d="M10 150 L310 150"/><rect x="230" y="120" width="45" height="22" fill="var(--sol)"/><path d="M235 115 Q250 80 265 112 Q275 90 290 110" fill="var(--feu)"/><path d="M200 60 Q230 45 260 60" stroke-dasharray="4 4"/><text x="200" y="85" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">fumée</text><rect x="150" y="125" width="40" height="18"/><text x="145" y="170" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">clé laissée</text><path d="M130 120 L60 120"/><path d="M70 112 L60 120 L70 128"/><rect x="25" y="95" width="30" height="45" fill="var(--vert)"/><text x="18" y="185" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">abri de secours</text><circle cx="95" cy="100" r="10" fill="var(--accent)"/><text x="91" y="104" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text><circle cx="170" cy="105" r="10" fill="var(--accent)"/><text x="166" y="109" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text></svg>`,
  legende: "Arrêtez-vous, laissez la clé, puis marchez à l'opposé de la fumée vers l'abri vert.",
  motscles: ["tunnel", "incendie", "voiture", "fumée", "abri", "sortie de secours"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/comment-survivre-a-un-incendie-dans-un-tunnel-2/" }
},
{
  id: "catastrophes-04",
  cat: "catastrophes",
  titre: "Inondation et crue éclair",
  resume: "L'eau monte parfois en quelques minutes. Montez en hauteur, ne prenez jamais la voiture sur une route inondée et n'allez pas chercher les enfants à l'école : ils y sont protégés.",
  urgence: true,
  etapes: [
    "En cas de vigilance orange ou rouge, suivez les consignes à la radio et sur les sites officiels.",
    "Montez à l'étage ou sur un point haut avec eau, lampe, téléphone chargé et médicaments.",
    "Coupez l'électricité et le gaz si vous pouvez le faire sans toucher l'eau.",
    "Ne descendez pas au sous-sol ni au parking souterrain pour sauver la voiture.",
    "Ne traversez jamais une route inondée, à pied ou en voiture, même si l'eau semble peu profonde.",
    "Si l'eau vous encercle, signalez-vous par la fenêtre ou le toit et attendez les secours.",
    "Après la crue, ne rentrez chez vous qu'avec l'accord des autorités et méfiez-vous de l'eau souillée."
  ],
  conseils: [
    "En Provence, les orages d'automne peuvent faire déborder un petit ruisseau en moins d'une heure : évitez de camper au bord des cours d'eau.",
    "30 centimètres d'eau suffisent à emporter une voiture, 50 centimètres à faire tomber un adulte.",
    "Gardez vos papiers importants dans une pochette étanche, en hauteur."
  ],
  erreurs: [
    "Franchir un gué ou un radier submergé.",
    "Aller chercher les enfants à l'école pendant l'alerte.",
    "S'abriter dans une cave ou un parking souterrain."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M180 180 L180 70 L240 30 L300 70 L300 180" fill="var(--fill)"/><path d="M180 110 L300 110"/><rect x="225" y="75" width="25" height="25"/><circle cx="237" cy="65" r="0"/><path d="M10 140 Q40 130 70 140 Q100 150 130 140 Q160 130 190 140 L300 140 L300 180 L10 180 Z" fill="var(--eau)"/><rect x="50" y="125" width="50" height="20" fill="var(--sol)"/><path d="M40 115 L110 155 M110 115 L40 155" stroke="var(--feu)" stroke-width="4"/><text x="25" y="100" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">jamais en voiture</text><path d="M260 125 L260 92"/><path d="M252 100 L260 92 L268 100"/><text x="200" y="20" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">monter à l'étage</text><text x="20" y="195" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">30 cm emportent une voiture</text></svg>`,
  legende: "Montez à l'étage et ne franchissez jamais une route inondée en voiture.",
  motscles: ["inondation", "crue", "orage", "pluie", "voiture", "vigilance"]
},
{
  id: "catastrophes-05",
  cat: "catastrophes",
  titre: "Séisme",
  resume: "Pendant la secousse, baissez-vous, abritez-vous sous un meuble solide et tenez bon. Après, sortez calmement en évitant les bâtiments, et attendez-vous à des répliques.",
  urgence: true,
  etapes: [
    "À l'intérieur, baissez-vous tout de suite, mettez-vous sous une table solide et tenez un pied de la table.",
    "Sans meuble, accroupissez-vous contre un mur intérieur et protégez votre tête et votre nuque avec les bras.",
    "Éloignez-vous des fenêtres, des miroirs et des meubles qui peuvent tomber.",
    "Dehors, éloignez-vous des bâtiments, des arbres et des lignes électriques.",
    "En voiture, arrêtez-vous loin des ponts et des bâtiments et restez à l'intérieur.",
    "Après la secousse, coupez gaz et électricité, sortez par l'escalier et rejoignez un espace dégagé.",
    "Ne rentrez pas dans un bâtiment fissuré et préparez-vous aux répliques."
  ],
  conseils: [
    "Fixez au mur les meubles hauts et les étagères lourdes.",
    "Si vous sentez une odeur de gaz, n'allumez ni flamme ni interrupteur.",
    "Si vous êtes coincé, tapez sur un tuyau ou un mur plutôt que de crier pour économiser vos forces."
  ],
  erreurs: [
    "Courir dehors pendant la secousse : les chutes de tuiles et de vitres blessent beaucoup.",
    "Prendre l'ascenseur après le séisme.",
    "Encombrer les lignes téléphoniques pour des appels non urgents."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 170 L310 170"/><circle cx="60" cy="125" r="12" fill="var(--fill)"/><path d="M60 137 L60 160 L45 168 M60 150 L80 165"/><text x="25" y="190" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">se baisser</text><rect x="130" y="110" width="80" height="8" fill="var(--sol)"/><path d="M138 118 L138 170 M202 118 L202 170"/><circle cx="160" cy="145" r="10" fill="var(--fill)"/><path d="M168 152 L195 165"/><path d="M152 140 Q160 128 172 140"/><text x="120" y="190" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">s'abriter</text><path d="M202 140 L196 150"/><text x="235" y="190" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">tenir bon</text><path d="M250 150 L270 150 M260 140 L260 160" /><path d="M20 40 L40 20 L60 40 L80 20 L100 40 L120 20 L140 40" stroke="var(--feu)"/><text x="150" y="35" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">secousse</text><circle cx="60" cy="90" r="10" fill="var(--accent)"/><text x="56" y="94" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text><circle cx="170" cy="90" r="10" fill="var(--accent)"/><text x="166" y="94" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text><circle cx="260" cy="120" r="10" fill="var(--accent)"/><text x="256" y="124" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">3</text></svg>`,
  legende: "Les trois réflexes : se baisser, s'abriter sous une table solide, tenir le pied de la table.",
  motscles: ["séisme", "tremblement de terre", "réplique", "abri", "table"]
},
{
  id: "catastrophes-06",
  cat: "catastrophes",
  titre: "Coupure de courant longue",
  resume: "Une panne de plusieurs jours, due à une tempête ou à une forte éruption solaire, se prépare : eau, lumière, radio à piles et nourriture sans cuisson. Restez calme et économisez vos réserves.",
  urgence: false,
  etapes: [
    "Débranchez les appareils sensibles pour éviter les dégâts au retour du courant, laissez une lampe branchée pour savoir quand il revient.",
    "Allumez une radio à piles ou à dynamo pour suivre les consignes officielles.",
    "Gardez le réfrigérateur et le congélateur fermés : un congélateur plein tient environ un jour et demi.",
    "Éclairez-vous à la lampe frontale plutôt qu'à la bougie pour éviter les incendies.",
    "Ne faites jamais tourner un groupe électrogène, un barbecue ou un chauffage d'appoint au gaz dans un lieu fermé.",
    "Économisez la batterie du téléphone : mode avion, luminosité basse, appels courts.",
    "En cas d'éruption solaire annoncée, gardez de l'argent liquide et des réserves pour plusieurs jours, car paiements et réseaux peuvent tomber."
  ],
  conseils: [
    "Prévoyez au moins 6 litres d'eau par personne pour 3 jours.",
    "Une batterie externe et un petit panneau solaire pliable suffisent à garder un téléphone et une radio en marche.",
    "Pensez aux voisins âgés ou dépendants d'un appareil médical."
  ],
  erreurs: [
    "Utiliser un groupe électrogène dans le garage : le monoxyde de carbone tue sans odeur.",
    "Ouvrir sans arrêt le congélateur pour vérifier.",
    "Vider la batterie du téléphone en surfant pour s'informer."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="45" cy="45" r="25" fill="var(--accent)"/><path d="M70 45 Q100 30 120 55 Q140 80 165 60" stroke="var(--feu)" stroke-dasharray="5 4"/><text x="15" y="90" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">éruption solaire</text><path d="M200 30 L200 120 M185 45 L215 45 M188 65 L212 65"/><path d="M190 80 L210 100 M210 80 L190 100" stroke="var(--feu)" stroke-width="3"/><text x="225" y="70" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">réseau coupé</text><rect x="25" y="130" width="50" height="35" rx="4" fill="var(--fill)"/><circle cx="40" cy="147" r="8"/><path d="M55 140 L68 140 M55 150 L68 150"/><text x="25" y="185" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">radio</text><rect x="110" y="125" width="25" height="45" fill="var(--eau)"/><text x="105" y="185" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">eau</text><circle cx="185" cy="148" r="12" fill="var(--fill)"/><path d="M173 148 L160 148"/><text x="160" y="185" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">frontale</text><rect x="240" y="130" width="50" height="35" fill="var(--vert)"/><text x="235" y="185" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">liquide</text></svg>`,
  legende: "Une éruption solaire ou une tempête peut couper le réseau : radio, eau, lampe et argent liquide prennent le relais.",
  motscles: ["coupure", "électricité", "panne", "éruption solaire", "tempête solaire", "black-out", "groupe électrogène"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/survivre-a-une-violente-eruption-solaire-cas-concret-et-strategies-efficaces/" }
},
{
  id: "catastrophes-07",
  cat: "catastrophes",
  titre: "Accident industriel ou nucléaire",
  resume: "À la sirène, mettez-vous à l'abri dans un bâtiment fermé et écoutez la radio. Ne prenez des comprimés d'iode que si les autorités le demandent.",
  urgence: true,
  etapes: [
    "À l'alerte, entrez dans le bâtiment le plus proche et restez-y.",
    "Fermez portes et fenêtres, arrêtez ventilation, climatisation et chauffage à air.",
    "Bouchez les entrées d'air avec du ruban adhésif et des linges humides.",
    "Allumez la radio et suivez les consignes officielles, n'en sortez pas avant la fin d'alerte.",
    "Si vous étiez dehors, retirez vos vêtements extérieurs en entrant, mettez-les dans un sac fermé et lavez-vous.",
    "Ne prenez des comprimés d'iode que sur consigne explicite du préfet, à la dose indiquée.",
    "N'allez pas chercher les enfants à l'école : les enseignants les mettent à l'abri."
  ],
  conseils: [
    "Le signal national d'alerte est un son montant et descendant de plus d'une minute, répété trois fois. La fin d'alerte est un son continu de 30 secondes.",
    "Si vous habitez près d'une centrale nucléaire, vos comprimés d'iode sont distribués en pharmacie : gardez-les avec le kit d'urgence.",
    "Gardez de l'eau en bouteille pour ne pas dépendre du réseau."
  ],
  erreurs: [
    "Prendre de l'iode par précaution sans consigne : c'est inutile contre d'autres produits et pas sans risque.",
    "Téléphoner pour avoir des nouvelles : laissez les lignes aux secours.",
    "Sortir pour voir ce qui se passe."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 160 L20 110 L40 110 L40 70 L55 70 L55 110 L90 110 L90 160 Z" fill="var(--sol)"/><path d="M47 60 Q60 40 80 45 Q100 30 130 45 Q150 40 170 55" stroke-dasharray="4 4"/><text x="80" y="30" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">nuage toxique</text><path d="M10 160 L310 160"/><path d="M190 160 L190 100 L245 65 L300 100 L300 160 Z" fill="var(--fill)"/><rect x="215" y="115" width="25" height="20"/><path d="M215 135 L240 115" /><rect x="260" y="120" width="25" height="40"/><path d="M180 100 L195 100" stroke="var(--feu)" stroke-width="3"/><text x="195" y="185" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">tout fermer</text><rect x="235" y="140" width="18" height="12" rx="2" fill="var(--accent)"/><text x="110" y="135" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">radio</text><path d="M150 132 L230 145"/><text x="20" y="185" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">usine</text></svg>`,
  legende: "Abritez-vous dans un bâtiment fermé, ventilation coupée, et suivez les consignes à la radio.",
  motscles: ["nucléaire", "industriel", "sirène", "confinement", "iode", "radio", "chimique"]
},
{
  id: "catastrophes-08",
  cat: "catastrophes",
  titre: "Sas de décontamination maison",
  resume: "Lors d'une épidémie ou d'une pollution, créez à l'entrée une zone où vous laissez chaussures, vêtements et objets venus de l'extérieur, puis lavez-vous les mains avant d'entrer.",
  urgence: false,
  etapes: [
    "Choisissez un espace près de la porte : entrée, garage ou buanderie.",
    "Délimitez une zone sale côté porte et une zone propre côté maison, avec un tapis ou du ruban au sol.",
    "Dans la zone sale, posez un bac pour les chaussures, une poubelle à couvercle et un sac pour le linge.",
    "En entrant, retirez chaussures et manteau dans la zone sale, posez clés et téléphone dans une boîte.",
    "Lavez-vous les mains au savon 30 secondes ou utilisez un gel hydroalcoolique.",
    "Nettoyez clés, téléphone et courses à l'aide d'un produit adapté si la situation l'exige.",
    "Passez dans la zone propre, puis lavez le linge exposé à 60 degrés."
  ],
  conseils: [
    "Gardez une paire de chaussons dans la zone propre.",
    "Aérez la pièce plusieurs fois par jour.",
    "Expliquez le parcours aux enfants avec un dessin collé à la porte."
  ],
  erreurs: [
    "Mélanger zone sale et zone propre en revenant sur ses pas.",
    "Mélanger eau de Javel et autres produits ménagers : cela dégage des gaz toxiques.",
    "Toucher son visage avant de s'être lavé les mains."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="40" width="300" height="130"/><rect x="10" y="40" width="140" height="130" fill="var(--sol)"/><rect x="160" y="40" width="150" height="130" fill="var(--fill)"/><path d="M155 40 L155 170" stroke-dasharray="5 4"/><path d="M10 80 L10 130" stroke-width="6"/><text x="20" y="30" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">zone sale</text><text x="200" y="30" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">zone propre</text><circle cx="45" cy="80" r="12" fill="var(--accent)"/><text x="41" y="84" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text><text x="30" y="110" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">chaussures</text><circle cx="110" cy="80" r="12" fill="var(--accent)"/><text x="106" y="84" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text><text x="85" y="140" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">linge</text><circle cx="200" cy="80" r="12" fill="var(--accent)"/><text x="196" y="84" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">3</text><path d="M185 110 Q200 100 215 110 L210 130 L190 130 Z" fill="var(--eau)"/><text x="180" y="150" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">mains</text><path d="M240 100 L290 100"/><path d="M280 92 L290 100 L280 108"/><text x="245" y="125" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">entrer</text></svg>`,
  legende: "On laisse l'extérieur dans la zone sale, on se lave les mains, puis on entre dans la zone propre.",
  motscles: ["sas", "décontamination", "épidémie", "pollution", "hygiène", "entrée"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/covid-19-creez-votre-propre-sas-de-decontamination-a-la-maison-en-toute-simplicite/" }
},
{
  id: "catastrophes-09",
  cat: "catastrophes",
  titre: "Kit d'urgence et sac d'évacuation",
  resume: "Préparez à la maison un kit pour tenir 3 jours sans aide, et un sac léger prêt à partir en 5 minutes si l'on vous demande d'évacuer.",
  urgence: false,
  etapes: [
    "Kit maison : 6 litres d'eau par personne, conserves et aliments sans cuisson pour 3 jours.",
    "Ajoutez une radio à piles, une lampe frontale, des piles, une trousse de secours et vos médicaments.",
    "Sac d'évacuation : eau, en-cas, vêtements chauds, couverture de survie, chargeur et batterie externe.",
    "Mettez les copies de vos papiers, un peu d'argent liquide et une liste de numéros utiles dans une pochette étanche.",
    "Prévoyez le nécessaire pour les enfants, les personnes âgées et les animaux.",
    "Rangez le sac près de la sortie et dites à toute la famille où il se trouve.",
    "Vérifiez le tout tous les 6 mois : dates de péremption, piles, tailles de vêtements."
  ],
  conseils: [
    "Choisissez avec la famille un point de rendez-vous en dehors du quartier.",
    "Un double des clés de la maison et de la voiture dans le sac fait gagner du temps.",
    "Dans le Var, préparez le sac avant l'été et avant la saison des orages d'automne."
  ],
  erreurs: [
    "Faire un sac trop lourd pour être porté longtemps.",
    "Oublier les médicaments quotidiens et les lunettes.",
    "Préparer le kit une fois et ne plus jamais le vérifier."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M40 60 Q40 40 75 40 Q110 40 110 60 L115 170 L35 170 Z" fill="var(--accent)"/><rect x="50" y="100" width="50" height="35" rx="4" fill="var(--fill)"/><path d="M60 40 Q75 25 90 40"/><text x="35" y="190" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">sac 5 minutes</text><rect x="150" y="40" width="22" height="50" fill="var(--eau)"/><text x="145" y="105" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">eau</text><rect x="195" y="55" width="35" height="35" fill="var(--sol)"/><text x="190" y="105" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">vivres</text><rect x="250" y="55" width="40" height="35" fill="var(--fill)"/><path d="M270 62 L270 83 M260 72 L280 72" stroke="var(--feu)" stroke-width="3"/><text x="245" y="105" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">secours</text><rect x="150" y="125" width="35" height="25" rx="3"/><circle cx="162" cy="137" r="5"/><text x="145" y="168" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">radio</text><circle cx="215" cy="137" r="12" fill="var(--fill)"/><text x="200" y="168" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">lampe</text><rect x="250" y="125" width="40" height="28" fill="var(--vert)"/><text x="245" y="168" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">papiers</text><text x="160" y="25" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">kit maison 3 jours</text></svg>`,
  legende: "Le kit maison pour 3 jours et le sac léger prêt à partir.",
  motscles: ["kit", "sac", "évacuation", "préparation", "réserves", "72 heures"]
},
{
  id: "mental-01",
  cat: "mental",
  titre: "Calmer panique et stress",
  resume: "La panique fait perdre ses moyens. Respirez lentement, avec une expiration plus longue que l'inspiration, puis réfléchissez à la prochaine petite action à faire.",
  urgence: false,
  etapes: [
    "Arrêtez-vous et dites-vous à voix basse : stop, je respire.",
    "Inspirez par le nez en comptant jusqu'à 4.",
    "Retenez l'air en comptant jusqu'à 4.",
    "Soufflez lentement par la bouche en comptant jusqu'à 6.",
    "Répétez 5 à 10 fois, en sentant vos pieds bien posés au sol.",
    "Nommez 3 choses que vous voyez et 2 que vous entendez pour revenir dans le présent.",
    "Choisissez une seule action simple et faisable maintenant, puis faites-la."
  ],
  conseils: [
    "Retenez la règle : s'arrêter, réfléchir, observer, planifier, avant d'agir.",
    "Parler calmement à quelqu'un d'autre vous calme aussi vous-même.",
    "Boire un peu d'eau et manger quelque chose aide à retrouver ses esprits."
  ],
  erreurs: [
    "Se mettre à courir sans savoir où aller.",
    "Respirer vite et fort : cela entretient l'angoisse et donne des vertiges.",
    "Vouloir tout régler d'un coup."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M40 150 L100 50 L160 50 L260 150 Z" fill="var(--fill)"/><path d="M40 150 L260 150"/><text x="25" y="100" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">inspirer</text><text x="105" y="40" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">retenir</text><text x="215" y="90" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">souffler</text><circle cx="70" cy="125" r="12" fill="var(--eau)"/><text x="66" y="129" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">4</text><circle cx="130" cy="75" r="12" fill="var(--accent)"/><text x="126" y="79" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">4</text><circle cx="205" cy="115" r="12" fill="var(--vert)"/><text x="201" y="119" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">6</text><path d="M270 150 Q290 120 270 90" /><path d="M262 98 L270 90 L278 96"/><text x="95" y="180" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">répéter 5 à 10 fois</text></svg>`,
  legende: "Respiration en 4, 4, 6 : inspirer, retenir, puis souffler plus longtemps.",
  motscles: ["panique", "stress", "respiration", "angoisse", "calme"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/apprentissage-des-competences-de-survie-toutes-les-techniques-de-base/" }
},
{
  id: "mental-02",
  cat: "mental",
  titre: "Garder le moral",
  resume: "Sur plusieurs jours, le moral compte autant que l'eau et la nourriture. Fixez-vous de petits objectifs, gardez une routine et restez en lien avec les autres.",
  urgence: false,
  etapes: [
    "Découpez la situation en petits objectifs pour aujourd'hui, pas pour toute la semaine.",
    "Gardez une routine : heures de lever, de repas et de coucher.",
    "Notez chaque soir ce qui a marché, même une petite chose.",
    "Occupez vos mains : entretien du camp, du matériel, de la maison.",
    "Parlez avec les autres, répartissez les rôles, encouragez-vous.",
    "Prenez soin de votre corps : boire, manger, dormir, se laver si possible.",
    "Accordez-vous un moment agréable chaque jour : un jeu, une chanson, un souvenir."
  ],
  conseils: [
    "L'humour détend le groupe, tant qu'il ne vise personne.",
    "Pensez à ceux qui vous attendent : c'est une raison forte de tenir.",
    "Acceptez les coups de fatigue, ils passent."
  ],
  erreurs: [
    "S'isoler et ruminer seul.",
    "Faire des projets trop grands qui découragent.",
    "Négliger le sommeil."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 170 L80 170 L80 140 L140 140 L140 110 L200 110 L200 80 L260 80 L260 50 L300 50"/><path d="M20 170 L80 170 L80 140 L140 140 L140 110 L200 110 L200 80 L260 80 L260 50 L300 50 L300 170 Z" fill="var(--fill)" stroke="none"/><circle cx="50" cy="155" r="10" fill="var(--accent)"/><text x="46" y="159" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text><circle cx="110" cy="125" r="10" fill="var(--accent)"/><text x="106" y="129" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text><circle cx="170" cy="95" r="10" fill="var(--accent)"/><text x="166" y="99" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">3</text><circle cx="230" cy="65" r="10" fill="var(--accent)"/><text x="226" y="69" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">4</text><path d="M285 50 L285 20 L305 28 L285 36" fill="var(--vert)"/><text x="20" y="40" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">petits objectifs</text><text x="20" y="60" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">un jour à la fois</text><text x="20" y="192" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">routine</text><text x="110" y="192" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">lien</text><text x="190" y="192" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">repos</text></svg>`,
  legende: "On avance marche après marche, avec routine, lien avec les autres et repos.",
  motscles: ["moral", "mental", "durée", "motivation", "routine", "groupe"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/comment-maintenir-un-mental-de-heros-et-tenir-le-coup-sur-la-duree-5-techniques-indispensables/" }
},
{
  id: "mental-03",
  cat: "mental",
  titre: "Éviter un conflit",
  resume: "Le meilleur combat est celui qu'on évite. Restez attentif, gardez vos distances, ne répondez pas aux provocations et partez dès que vous le pouvez.",
  urgence: false,
  etapes: [
    "Restez attentif à votre environnement, téléphone rangé, surtout le soir et dans les lieux isolés.",
    "Si une situation vous met mal à l'aise, éloignez-vous tout de suite sans attendre de preuve.",
    "Gardez une distance de plus de deux bras avec une personne agressive.",
    "Parlez calmement, voix posée, mains ouvertes et visibles.",
    "Ne répondez pas aux insultes, ne cherchez pas à avoir raison.",
    "Donnez ce qu'on vous réclame s'il s'agit d'un objet : rien ne vaut votre santé.",
    "Partez vers un lieu fréquenté et éclairé, puis appelez le 17 ou le 112."
  ],
  conseils: [
    "Votre fierté ne vaut pas une blessure : s'excuser ou partir n'est pas une défaite.",
    "Repérez toujours une sortie en entrant dans un lieu.",
    "L'alcool rend les disputes plus imprévisibles : quittez les lieux tôt."
  ],
  erreurs: [
    "Fixer l'autre dans les yeux avec défi ou le provoquer.",
    "Laisser la colère monter et vouloir répondre.",
    "Suivre quelqu'un dans un endroit isolé pour régler le problème."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 170 L310 170"/><circle cx="60" cy="80" r="14" fill="var(--feu)"/><path d="M60 94 L60 140 M60 140 L45 170 M60 140 L75 170 M60 110 L85 100 M60 110 L35 100"/><text x="25" y="55" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">agressif</text><circle cx="200" cy="80" r="14" fill="var(--fill)"/><path d="M200 94 L200 140 M200 140 L185 170 M200 140 L215 170 M200 110 L180 115 M200 110 L220 115"/><path d="M90 150 L170 150 M100 142 L90 150 L100 158 M160 142 L170 150 L160 158"/><text x="95" y="140" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">distance</text><path d="M230 120 L300 120" stroke="var(--vert)" stroke-width="3"/><path d="M290 112 L300 120 L290 128" stroke="var(--vert)" stroke-width="3"/><text x="240" y="105" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">partir</text><text x="170" y="55" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">calme</text><text x="110" y="192" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">plus de deux bras</text></svg>`,
  legende: "Gardez vos distances, restez calme, puis éloignez-vous.",
  motscles: ["conflit", "agression", "dispute", "sécurité", "désescalade", "rue"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/decouvrez-comment-les-5-regles-de-peyton-quinn-peuvent-vous-aider-a-prevenir-les-conflits/" }
},
{
  id: "mental-04",
  cat: "mental",
  titre: "Attentat ou prise d'otage",
  resume: "Face à une attaque, retenez trois réflexes : s'échapper, se cacher, alerter. Si vous êtes otage, restez calme, obéissez et laissez la négociation aux professionnels.",
  urgence: true,
  etapes: [
    "S'échapper : si vous pouvez fuir sans danger, partez à l'opposé de la menace, aidez les autres sans vous mettre en danger.",
    "Se cacher : sinon, enfermez-vous, barricadez la porte, éteignez lumières et sons, téléphone en silencieux.",
    "Alerter : quand vous êtes en sécurité, appelez le 17 ou le 112, ou envoyez un SMS au 114.",
    "À l'arrivée des forces de l'ordre, gardez les mains levées et visibles, ne faites aucun geste brusque.",
    "Si vous êtes otage, restez calme, obéissez aux ordres et ne regardez pas les preneurs d'otage dans les yeux.",
    "Ne tentez pas de négocier ni de les raisonner vous-même : des négociateurs formés s'en chargent.",
    "Lors de l'assaut, couchez-vous au sol, mains sur la tête, et attendez les ordres."
  ],
  conseils: [
    "Mémorisez discrètement ce que vous voyez : nombre, tenue, armes. Cela aidera les enquêteurs.",
    "Gardez votre énergie : buvez et mangez si on vous le propose.",
    "Dans un lieu public, repérez toujours deux sorties."
  ],
  erreurs: [
    "Filmer ou publier sur les réseaux : cela peut renseigner les agresseurs.",
    "Tenter de jouer les héros.",
    "Courir vers les forces de l'ordre en tenant un objet dans la main."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="55" cy="60" r="30" fill="var(--vert)"/><path d="M40 60 L70 60 M60 50 L70 60 L60 70"/><text x="20" y="115" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">s'échapper</text><circle cx="160" cy="60" r="30" fill="var(--accent)"/><rect x="148" y="48" width="24" height="26"/><path d="M144 61 L176 61"/><text x="128" y="115" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">se cacher</text><circle cx="265" cy="60" r="30" fill="var(--feu)"/><rect x="255" y="42" width="20" height="34" rx="3"/><path d="M262 70 L268 70"/><text x="240" y="115" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">alerter</text><path d="M90 60 L125 60 M195 60 L230 60" stroke-dasharray="4 4"/><rect x="20" y="135" width="280" height="50" rx="6" fill="var(--fill)"/><text x="35" y="157" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">otage : calme, obéir</text><text x="35" y="175" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">ne pas négocier soi-même</text></svg>`,
  legende: "Dans l'ordre : s'échapper, se cacher, alerter. Otage : calme et obéissance.",
  motscles: ["attentat", "otage", "menace", "s'échapper", "se cacher", "alerter", "négociation"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/les-methodes-de-negociation-du-fbi-pour-les-prises-dotages/" }
},
{
  id: "materiel-01",
  cat: "materiel",
  titre: "Choisir son matériel",
  resume: "Le bon matériel est celui qui répond à vos vrais besoins, que vous savez utiliser et que vous portez sans peine. Triez par priorités : vital, utile, confort.",
  urgence: false,
  etapes: [
    "Décrivez votre sortie : durée, lieu, saison, nombre de personnes.",
    "Listez les besoins vitaux dans l'ordre : se protéger du froid ou de la chaleur, boire, signaler, se soigner, manger.",
    "Classez chaque objet en trois tas : vital, utile, confort.",
    "Gardez tout le vital, une partie de l'utile, très peu de confort.",
    "Préférez les objets qui servent à plusieurs choses : foulard, couteau multifonction, sac poubelle.",
    "Pesez le sac : visez au plus un quart de votre poids pour une randonnée.",
    "Testez le matériel chez vous avant de partir."
  ],
  conseils: [
    "Un objet que vous ne savez pas utiliser ne vous sauvera pas.",
    "Deux moyens de faire du feu et deux sources de lumière valent mieux qu'un.",
    "Après chaque sortie, notez ce qui n'a pas servi."
  ],
  erreurs: [
    "Acheter le gadget à la mode au lieu de l'essentiel.",
    "Partir avec un sac trop lourd.",
    "Oublier la trousse de secours et la frontale."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="15" y="60" width="90" height="100" rx="6" fill="var(--feu)"/><rect x="115" y="80" width="90" height="80" rx="6" fill="var(--accent)"/><rect x="215" y="110" width="90" height="50" rx="6" fill="var(--fill)"/><text x="40" y="180" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">vital</text><text x="142" y="180" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">utile</text><text x="235" y="180" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">confort</text><text x="30" y="90" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">tout</text><text x="125" y="105" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">une partie</text><text x="230" y="135" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">très peu</text><circle cx="60" cy="30" r="12" fill="var(--fill)"/><text x="56" y="34" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text><circle cx="160" cy="45" r="12" fill="var(--fill)"/><text x="156" y="49" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text><circle cx="260" cy="75" r="12" fill="var(--fill)"/><text x="256" y="79" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">3</text></svg>`,
  legende: "Trois tas par ordre de priorité : on garde tout le vital, une partie de l'utile, très peu de confort.",
  motscles: ["matériel", "équipement", "sac", "priorités", "tri", "randonnée"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/debusquez-le-materiel-ideal-pour-vos-aventures-avec-la-methode-perle-%f0%9f%a6%aa/" }
},
{
  id: "materiel-02",
  cat: "materiel",
  titre: "Le couteau multifonction",
  resume: "Un couteau multifonction est l'outil le plus utile en sortie. Coupez toujours vers l'extérieur, refermez-le après usage, entretenez-le et transportez-le seulement avec un motif légitime.",
  urgence: false,
  etapes: [
    "Ouvrez la lame avec l'ongle, doigts loin du tranchant, et vérifiez qu'elle est bien en place.",
    "Coupez toujours en éloignant la lame de vous et des autres, jamais vers la main qui tient l'objet.",
    "Travaillez assis ou stable, avec un espace libre d'une longueur de bras autour de vous.",
    "Refermez la lame en poussant le dos, doigts hors du chemin du tranchant.",
    "Utilisez chaque outil pour son usage : scie pour le bois, ciseaux pour les tissus, tournevis pour les vis.",
    "Après usage, nettoyez, séchez et mettez une goutte d'huile sur les charnières.",
    "Aiguisez régulièrement sur une pierre : une lame émoussée glisse et blesse plus."
  ],
  conseils: [
    "En France, le port et le transport d'un couteau sans motif légitime (pique-nique, travail, randonnée) sont interdits et sanctionnés. Gardez-le dans le sac, pas dans la poche, et ne l'emportez pas en ville sans raison. Rappel général à vérifier selon votre situation.",
    "Tendez un couteau par le manche, lame fermée.",
    "Pour les enfants, choisissez un modèle à bout rond et apprenez-leur la règle de la bulle de sécurité."
  ],
  erreurs: [
    "Utiliser la lame comme tournevis ou levier : elle casse.",
    "Couper vers soi ou en tenant l'objet dans sa paume.",
    "Le mettre au lave-vaisselle."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="40" y="90" width="110" height="28" rx="14" fill="var(--feu)"/><path d="M150 96 L240 96 L215 112 L150 112 Z" fill="var(--fill)"/><path d="M60 90 L40 50 L52 46 L70 90" fill="var(--fill)"/><path d="M110 118 L130 160 L140 156 L124 118" fill="var(--fill)"/><text x="10" y="40" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">scie</text><text x="140" y="180" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">tournevis</text><text x="175" y="85" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">lame</text><path d="M200 140 L290 140" stroke="var(--vert)" stroke-width="3"/><path d="M280 132 L290 140 L280 148" stroke="var(--vert)" stroke-width="3"/><text x="205" y="160" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">couper vers</text><text x="205" y="175" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">l'extérieur</text><circle cx="270" cy="50" r="22" fill="var(--accent)"/><text x="257" y="54" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">huile</text></svg>`,
  legende: "Les outils principaux, le geste de coupe vers l'extérieur et l'entretien à l'huile.",
  motscles: ["couteau", "couteau suisse", "multifonction", "lame", "sécurité", "loi", "port d'arme"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/le-couteau-suisse-bien-plus-quun-simple-outil-multi-usage/" }
},
{
  id: "materiel-03",
  cat: "materiel",
  titre: "La paracorde et ses usages",
  resume: "La paracorde est une cordelette légère et très solide, faite d'une gaine et de fils intérieurs. Elle sert à tendre un abri, réparer, attacher, et ses fils peuvent servir de fil à coudre.",
  urgence: false,
  etapes: [
    "Emportez au moins 10 à 15 mètres, en bracelet, en écheveau ou en bobine.",
    "Coupez avec un couteau, puis brûlez légèrement l'extrémité pour qu'elle ne s'effiloche pas.",
    "Pour un abri, tendez une ligne entre deux arbres et posez la bâche dessus.",
    "Pour réparer, remplacez un lacet, une sangle de sac ou fixez une attelle.",
    "Pour coudre ou pêcher, ouvrez la gaine et sortez les fils intérieurs, plus fins.",
    "Après usage, enroulez-la en écheveau pour éviter les nœuds."
  ],
  conseils: [
    "La vraie paracorde type 550 supporte environ 250 kilos, les copies bon marché beaucoup moins.",
    "Une couleur vive se retrouve plus facilement et peut servir de balise.",
    "Ne l'utilisez jamais pour l'escalade ou pour vous assurer : ce n'est pas une corde de sécurité."
  ],
  erreurs: [
    "S'en servir pour porter une personne ou faire de l'escalade.",
    "La laisser frotter sur un rocher coupant.",
    "Approcher la flamme trop longtemps : la gaine fond et devient coupante."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="80" cy="80" rx="55" ry="25" fill="var(--accent)"/><ellipse cx="80" cy="80" rx="55" ry="25" transform="rotate(0)"/><path d="M135 80 L180 80"/><text x="45" y="125" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">gaine</text><circle cx="230" cy="80" r="40" fill="var(--fill)"/><circle cx="215" cy="70" r="6" fill="var(--sol)"/><circle cx="235" cy="65" r="6" fill="var(--sol)"/><circle cx="248" cy="85" r="6" fill="var(--sol)"/><circle cx="225" cy="95" r="6" fill="var(--sol)"/><circle cx="212" cy="88" r="6" fill="var(--sol)"/><circle cx="232" cy="82" r="6" fill="var(--sol)"/><text x="195" y="140" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">fils intérieurs</text><text x="20" y="170" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">abri</text><text x="90" y="170" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">réparer</text><text x="170" y="170" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">attacher</text><text x="250" y="170" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">coudre</text><text x="185" y="30" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">vue en coupe</text></svg>`,
  legende: "Vue en coupe : une gaine solide qui protège des fils intérieurs utilisables à part.",
  motscles: ["paracorde", "corde", "cordelette", "550", "bracelet", "abri"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/exploitez-votre-creativite-avec-les-noeuds-en-paracorde-de-la-survie-au-style/" }
},
{
  id: "materiel-04",
  cat: "materiel",
  titre: "Le nœud de chaise",
  resume: "Le nœud de chaise forme une boucle fixe qui ne se resserre pas et se défait facilement, même après avoir été tiré fort. Idéal pour attacher une corde autour d'un arbre ou d'un objet.",
  urgence: false,
  etapes: [
    "Faites une petite boucle sur le brin principal, le brin du dessus vers vous : c'est le puits.",
    "Passez le bout libre dans la boucle par en dessous : le lapin sort du puits.",
    "Faites passer le bout derrière le brin principal : le lapin tourne autour de l'arbre.",
    "Repassez le bout dans la petite boucle, par le même chemin en sens inverse : le lapin rentre dans le puits.",
    "Tenez le bout et la grande boucle d'une main, le brin principal de l'autre, et serrez.",
    "Vérifiez : la grande boucle ne doit pas coulisser quand vous tirez."
  ],
  conseils: [
    "Laissez dépasser un bout libre d'au moins 10 centimètres.",
    "Pour plus de sûreté, ajoutez un demi-nœud avec le bout libre.",
    "Entraînez-vous les yeux fermés : vous en aurez besoin de nuit."
  ],
  erreurs: [
    "Faire la petite boucle dans le mauvais sens : le nœud se défait.",
    "Laisser un bout libre trop court.",
    "L'utiliser pour porter une personne sans formation."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M160 10 L160 70" stroke="var(--sol)" stroke-width="6"/><ellipse cx="160" cy="85" rx="18" ry="14" stroke="var(--sol)" stroke-width="6"/><path d="M150 98 Q110 150 160 185 Q210 150 172 98" stroke="var(--sol)" stroke-width="6"/><path d="M170 75 Q190 60 175 50" stroke="var(--accent)" stroke-width="6"/><path d="M160 70 L160 72" stroke="currentColor"/><text x="175" y="25" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">brin principal</text><text x="190" y="90" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">puits</text><text x="190" y="55" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">bout libre</text><text x="200" y="160" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">boucle fixe</text><circle cx="40" cy="40" r="12" fill="var(--accent)"/><text x="36" y="44" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text><text x="58" y="44" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">puits</text><circle cx="40" cy="80" r="12" fill="var(--accent)"/><text x="36" y="84" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text><text x="58" y="84" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">sortir</text><circle cx="40" cy="120" r="12" fill="var(--accent)"/><text x="36" y="124" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">3</text><text x="58" y="124" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">contourner</text><circle cx="40" cy="160" r="12" fill="var(--accent)"/><text x="36" y="164" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">4</text><text x="58" y="164" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">rentrer</text></svg>`,
  legende: "Le lapin sort du puits, tourne autour de l'arbre et rentre dans le puits : on obtient une boucle fixe.",
  motscles: ["nœud", "chaise", "boucle", "corde", "amarrage"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/exploitez-votre-creativite-avec-les-noeuds-en-paracorde-de-la-survie-au-style/" }
},
{
  id: "materiel-05",
  cat: "materiel",
  titre: "Cabestan et nœud tendeur",
  resume: "Le cabestan accroche vite une corde à un arbre ou un piquet. Le nœud tendeur permet ensuite de régler la tension d'une bâche ou d'un hauban sans refaire le nœud.",
  urgence: false,
  etapes: [
    "Cabestan : faites un tour de corde autour de l'arbre.",
    "Croisez par-dessus le premier tour et faites un second tour.",
    "Glissez le bout sous ce second tour, entre les deux tours, puis serrez : les deux brins sortent au milieu en sens opposés.",
    "Tendeur : passez la corde autour du piquet, puis revenez vers le brin tendu.",
    "Avec le bout, faites deux tours autour du brin tendu, en allant vers le piquet.",
    "Faites un troisième tour plus loin, de l'autre côté des deux premiers, et serrez.",
    "Faites glisser le nœud le long du brin pour tendre ou détendre la bâche."
  ],
  conseils: [
    "Le cabestan peut glisser sur un objet qui tourne : ajoutez deux demi-clés pour le bloquer.",
    "Avec le mistral, retendez vos haubans le soir : la corde se détend à l'humidité.",
    "Un caillou dans un coin de bâche, entouré de corde, fait un point d'attache solide."
  ],
  erreurs: [
    "Tendre la bâche à plat : elle doit être en pente pour que la pluie s'écoule.",
    "Serrer le tendeur à fond sur une corde mouillée qui va encore rétrécir.",
    "Attacher la bâche à une branche morte."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="30" y="20" width="30" height="170" fill="var(--sol)"/><path d="M25 80 L65 92 M25 92 L65 80" stroke="var(--accent)" stroke-width="5"/><path d="M65 86 L170 60" stroke="var(--accent)" stroke-width="3"/><text x="10" y="15" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">cabestan</text><path d="M70 100 L170 60 L240 150 L120 165 Z" fill="var(--vert)"/><text x="120" y="120" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">bâche</text><path d="M240 150 L290 185" stroke="var(--accent)" stroke-width="3"/><path d="M255 152 L268 168 M262 150 L275 165 M275 162 L288 178" stroke-width="4"/><path d="M290 175 L298 195 L282 195 Z" fill="var(--sol)"/><text x="225" y="135" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">tendeur</text><path d="M260 115 L285 140"/><path d="M275 140 L285 140 L285 130"/><text x="255" y="105" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">glisser</text><text x="280" y="160" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">piquet</text></svg>`,
  legende: "Le cabestan fixe la corde à l'arbre, le nœud tendeur au piquet règle la tension de la bâche.",
  motscles: ["nœud", "cabestan", "tendeur", "taquet", "bâche", "hauban", "abri"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/exploitez-votre-creativite-avec-les-noeuds-en-paracorde-de-la-survie-au-style/" }
},
{
  id: "materiel-06",
  cat: "materiel",
  titre: "Nœud plat et nœud en huit",
  resume: "Le nœud plat relie deux bouts de même grosseur, par exemple pour fermer un bandage. Le nœud en huit forme un arrêt au bout d'une corde pour qu'elle ne glisse pas d'un passage.",
  urgence: false,
  etapes: [
    "Nœud plat : croisez le bout gauche sur le bout droit et faites un premier demi-nœud.",
    "Croisez cette fois le bout droit sur le bout gauche et faites un second demi-nœud.",
    "Serrez : les deux bouts doivent sortir du même côté, chacun le long de son brin.",
    "Nœud en huit : faites une boucle avec le bout de la corde.",
    "Passez le bout derrière le brin principal, puis faites-le entrer dans la boucle par devant.",
    "Serrez : le nœud dessine un 8 bien visible."
  ],
  conseils: [
    "Retenez le nœud plat avec la phrase : gauche sur droite, puis droite sur gauche.",
    "Le nœud plat est parfait pour une écharpe de bras ou un bandage, car il reste plat sur la peau.",
    "Le nœud en huit se défait facilement, même après avoir été chargé."
  ],
  erreurs: [
    "Croiser deux fois dans le même sens : on obtient un nœud de vache qui glisse.",
    "Utiliser le nœud plat pour relier deux cordes de grosseurs différentes.",
    "Compter sur le nœud plat pour une charge importante."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 80 L60 80 Q90 80 90 95 Q90 110 60 110 L40 110" stroke="var(--accent)" stroke-width="6"/><path d="M150 80 L100 80 Q70 80 70 95 Q70 110 100 110 L120 110" stroke="var(--eau)" stroke-width="6"/><text x="35" y="50" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">nœud plat</text><text x="10" y="140" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">bouts du même côté</text><path d="M180 30 L240 30" stroke="var(--sol)" stroke-width="6"/><path d="M240 30 Q275 30 275 60 Q275 90 245 90 Q215 90 215 120 Q215 150 245 150 Q275 150 275 120 Q275 95 250 95" stroke="var(--sol)" stroke-width="6"/><path d="M250 95 Q225 80 225 55" stroke="var(--sol)" stroke-width="6"/><text x="200" y="185" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">nœud en huit</text><text x="285" y="95" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">8</text><circle cx="20" cy="175" r="10" fill="var(--accent)"/><text x="35" y="179" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">G sur D</text><circle cx="110" cy="175" r="10" fill="var(--eau)"/><text x="125" y="179" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">D sur G</text></svg>`,
  legende: "À gauche, le nœud plat aux bouts du même côté. À droite, le nœud en huit d'arrêt.",
  motscles: ["nœud", "plat", "huit", "bandage", "arrêt", "corde"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/exploitez-votre-creativite-avec-les-noeuds-en-paracorde-de-la-survie-au-style/" }
},
{
  id: "materiel-07",
  cat: "materiel",
  titre: "Kit de survie de poche",
  resume: "Une petite boîte métallique bien remplie tient dans une poche et couvre l'essentiel : faire du feu, signaler, s'orienter, se soigner et transporter de l'eau.",
  urgence: false,
  etapes: [
    "Prenez une boîte métallique à couvercle, type boîte de pastilles : elle peut aussi servir de récipient sur le feu.",
    "Feu : un briquet, quelques allumettes tempête et du coton imbibé de vaseline dans une paille fermée.",
    "Signal : un sifflet et un petit miroir, ou le couvercle poli de la boîte.",
    "Orientation : une petite boussole.",
    "Soins : quelques pansements, une compresse et un comprimé de purification d'eau.",
    "Divers : un sac de congélation solide pour l'eau, du fil, deux épingles à nourrice, une couverture de survie pliée.",
    "Fermez la boîte avec un ruban adhésif résistant, utile lui aussi, et notez le contenu à l'intérieur du couvercle."
  ],
  conseils: [
    "Gardez le kit sur vous, pas dans le sac que vous pourriez perdre.",
    "Vérifiez chaque année le briquet, les pansements et la date des comprimés.",
    "Ajoutez une petite fiche avec vos contacts et le 112."
  ],
  erreurs: [
    "Y mettre des objets que vous ne savez pas utiliser.",
    "Remplir la boîte au point de ne plus pouvoir la fermer.",
    "Ajouter des objets interdits ou dangereux à transporter."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="40" width="200" height="130" rx="10" fill="var(--fill)"/><rect x="35" y="55" width="22" height="45" rx="3" fill="var(--feu)"/><text x="30" y="118" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">feu</text><circle cx="100" cy="75" r="18" fill="var(--eau)"/><path d="M100 62 L104 75 L100 88 L96 75 Z" fill="var(--feu)"/><text x="78" y="118" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">boussole</text><path d="M140 70 L170 70 Q180 70 180 80 Q180 90 170 90 L140 90 Z" fill="var(--accent)"/><text x="140" y="118" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">sifflet</text><rect x="35" y="130" width="50" height="25" rx="3" fill="var(--fill)"/><path d="M55 133 L55 152 M45 142 L65 142" stroke="var(--feu)" stroke-width="3"/><rect x="100" y="130" width="50" height="25" fill="var(--vert)"/><text x="102" y="147" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">sac eau</text><rect x="165" y="130" width="40" height="25" fill="var(--accent)"/><text x="240" y="75" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">soins</text><path d="M238 72 L90 142" stroke-dasharray="3 4"/><text x="240" y="150" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">couverture</text><path d="M238 146 L205 142" stroke-dasharray="3 4"/><text x="60" y="30" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">boîte métallique</text></svg>`,
  legende: "Le contenu type d'une boîte de survie de poche : feu, orientation, signal, soins, eau, chaleur.",
  motscles: ["kit", "poche", "boîte", "survie", "briquet", "sifflet", "boussole"]
}
);
