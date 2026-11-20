window.FICHES = window.FICHES || [];
window.FICHES.push(
{
  id: "abri-01",
  cat: "abri",
  titre: "Règle de trois et priorités",
  resume: "On tient environ 3 minutes sans air, 3 heures sans protection dans le froid ou la chaleur extrême, 3 jours sans eau et 3 semaines sans nourriture. L'abri passe donc avant l'eau et bien avant la nourriture.",
  urgence: false,
  etapes: [
    "Arrêtez-vous, respirez et faites le point avant de bouger.",
    "Traitez d'abord tout danger immédiat : blessure grave, feu, eau qui monte, chute.",
    "Protégez-vous du froid, de la pluie, du vent ou du soleil : c'est la priorité des premières heures.",
    "Cherchez ensuite de l'eau sûre pour les jours qui viennent.",
    "Préparez un moyen de vous signaler et de vous faire retrouver.",
    "Ne vous occupez de la nourriture qu'en dernier, une fois le reste assuré.",
    "Commencez votre abri au moins deux heures avant la nuit."
  ],
  conseils: [
    "Ces chiffres sont des ordres de grandeur : un enfant, une personne âgée ou blessée tient beaucoup moins longtemps.",
    "Dans le Var, la chaleur d'été tue aussi vite que le froid : l'ombre est un abri.",
    "Prévenez toujours quelqu'un de votre itinéraire et de votre heure de retour."
  ],
  erreurs: [
    "Partir chercher à manger alors que la nuit tombe et que vous n'avez pas d'abri.",
    "Marcher au hasard en état de panique et vous épuiser.",
    "Sous-estimer une nuit fraîche à 10 °C quand on est mouillé."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<rect x="20" y="20" width="60" height="30" rx="4" fill="var(--feu)"/>
<rect x="20" y="62" width="120" height="30" rx="4" fill="var(--accent)"/>
<rect x="20" y="104" width="190" height="30" rx="4" fill="var(--eau)"/>
<rect x="20" y="146" width="280" height="30" rx="4" fill="var(--vert)"/>
<text x="90" y="40" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">3 min sans air</text>
<text x="150" y="82" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">3 h sans abri</text>
<text x="220" y="124" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">3 j sans eau</text>
<text x="30" y="166" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">3 semaines sans nourriture</text>
</svg>`,
  legende: "Plus la barre est courte, plus le besoin est urgent : air, puis abri, puis eau, puis nourriture.",
  motscles: ["règle de trois", "priorités", "abri", "survie", "urgence", "chaleur", "froid"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/apprentissage-des-competences-de-survie-toutes-les-techniques-de-base/" }
},
{
  id: "abri-02",
  cat: "abri",
  titre: "Choisir l'emplacement",
  resume: "Un bon abri mal placé devient un piège. Évitez les lits de rivière, les arbres morts, les crêtes et les fonds de vallon, et préférez un replat abrité du vent.",
  urgence: false,
  etapes: [
    "Levez les yeux : repérez les branches mortes ou les arbres penchés et éloignez-vous d'au moins deux fois leur hauteur.",
    "Regardez le sol : fuyez les lits de rivière, même à sec, et les ravines. Un orage peut les remplir en quelques minutes.",
    "Évitez les crêtes et les sommets : vent fort et foudre.",
    "Évitez aussi le fond des vallons : l'air froid et l'humidité s'y accumulent la nuit.",
    "Choisissez un replat légèrement surélevé, sec, à l'abri du vent dominant.",
    "Restez à distance d'un pied de falaise ou d'un éboulis : chutes de pierres.",
    "Vérifiez l'absence de fourmilière, de guêpier ou de terriers."
  ],
  conseils: [
    "Placez-vous à proximité de l'eau mais pas à côté : à une cinquantaine de mètres au moins.",
    "En Provence, tournez l'ouverture de l'abri dos au mistral, qui souffle le plus souvent du nord-ouest.",
    "Un endroit visible depuis le ciel ou un chemin aide les secours à vous trouver."
  ],
  erreurs: [
    "Dormir dans un lit de torrent sec : les crues éclair du Var sont soudaines.",
    "S'installer sous un vieux pin aux branches sèches.",
    "Choisir un creux humide parce qu'il semble abrité."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M0 170 L40 160 L70 90 L95 60 L120 95 L160 120 L200 125 L230 160 L250 178 L270 160 L320 150 L320 200 L0 200 Z" fill="var(--sol)"/>
<path d="M238 172 Q250 182 262 172" stroke-width="3" fill="var(--eau)"/>
<path d="M95 60 L95 30"/><path d="M95 40 L85 32 M95 46 L106 38"/>
<path d="M290 150 L290 105 M290 118 L278 108 M290 125 L302 112"/>
<path d="M170 122 L180 104 L190 122 Z" fill="var(--vert)"/>
<g stroke-width="3"><path d="M85 12 L105 28 M105 12 L85 28"/><path d="M240 140 L260 156 M260 140 L240 156"/><path d="M280 82 L300 98 M300 82 L280 98"/></g>
<path d="M172 90 L178 97 L190 82" stroke-width="3"/>
<text x="20" y="20" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Crête</text>
<text x="206" y="134" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Lit de rivière</text>
<text x="250" y="72" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Arbre mort</text>
<text x="150" y="76" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Bon replat</text>
</svg>`,
  legende: "Croix : crête, arbre mort et lit de rivière à éviter. Coche : replat abrité, au sec, à l'écart de l'eau.",
  motscles: ["emplacement", "danger", "rivière", "crue", "arbre mort", "crête", "mistral", "campement"]
},
{
  id: "abri-03",
  cat: "abri",
  titre: "Abri appentis",
  resume: "L'appentis est un toit incliné posé sur une perche horizontale. Rapide à monter, il protège bien du vent et de la pluie, surtout avec un feu devant l'ouverture.",
  urgence: false,
  etapes: [
    "Trouvez deux arbres espacés d'un peu plus que votre taille, ou deux branches fourchues plantées dans le sol.",
    "Fixez une perche solide à hauteur de taille entre ces deux appuis.",
    "Appuyez des branches côte à côte sur la perche, inclinées à environ 45° vers le sol, côté vent.",
    "Entrecroisez des branches fines par-dessus pour former une grille.",
    "Couvrez avec une couche épaisse de feuilles, d'aiguilles ou de fougères, en partant du bas comme des tuiles.",
    "Ajoutez des branches posées sur le dessus pour que le vent n'emporte pas la couverture.",
    "Garnissez le sol d'un lit isolant avant de vous coucher."
  ],
  conseils: [
    "Plus la couche de feuillage est épaisse, mieux l'abri isole : visez au moins 30 cm.",
    "Un feu à un mètre de l'ouverture et un petit mur de bûches derrière lui renvoient la chaleur vers vous.",
    "Fermez les côtés avec des branches si le vent tourne."
  ],
  erreurs: [
    "Orienter l'ouverture face au vent.",
    "Faire un toit trop plat : la pluie passe au travers.",
    "Allumer le feu trop près d'un abri en feuilles sèches."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M0 180 L320 180" stroke="currentColor"/>
<rect x="0" y="180" width="320" height="20" fill="var(--sol)" stroke="none"/>
<path d="M60 180 L60 40 M240 180 L240 40" stroke-width="5"/>
<path d="M50 90 L250 90" stroke-width="4"/>
<path d="M70 90 L20 178 M110 90 L60 178 M150 90 L100 178 M190 90 L140 178 M230 90 L180 178"/>
<path d="M60 90 L230 90 L180 178 L12 178 Z" fill="var(--vert)" opacity="0.6"/>
<path d="M270 178 L280 160 L290 178 Z" fill="var(--feu)"/>
<path d="M30 30 L5 30 M15 22 L5 30 L15 38" stroke-width="2"/>
<circle cx="160" cy="30" r="11" fill="var(--accent)"/><text x="156" y="35" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text>
<circle cx="110" cy="130" r="11" fill="var(--accent)"/><text x="106" y="135" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text>
<text x="176" y="34" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Perche</text>
<text x="10" y="18" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Vent</text>
<text x="258" y="150" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Feu</text>
</svg>`,
  legende: "Une perche entre deux arbres (1), des branches inclinées couvertes de feuillage (2), le dos au vent et un feu devant.",
  motscles: ["appentis", "abri", "branches", "feuillage", "perche", "construction", "forêt"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/construction-abris-naturels/" }
},
{
  id: "abri-04",
  cat: "abri",
  titre: "Abri en A en branchages",
  resume: "L'abri en A est un petit tunnel de branches couvert d'une épaisse couche de feuilles. Juste assez grand pour une personne, il garde la chaleur du corps même sans feu.",
  urgence: false,
  etapes: [
    "Choisissez une longue perche d'environ une fois et demie votre taille.",
    "Posez une extrémité sur une souche, un rocher ou deux bâtons croisés à hauteur de genou, l'autre au sol.",
    "Allongez-vous dessous pour vérifier : il doit rester une main de place au-dessus de vous, pas plus.",
    "Appuyez des branches serrées des deux côtés de la perche, comme des côtes.",
    "Recouvrez de feuilles mortes, d'aiguilles ou d'herbes sèches sur au moins 50 cm d'épaisseur.",
    "Remplissez aussi l'intérieur de feuilles sèches pour le sol et pour vous couvrir.",
    "Bouchez l'entrée avec un tas de feuilles ou un fagot une fois à l'intérieur."
  ],
  conseils: [
    "Petit, c'est mieux : moins il y a d'air à réchauffer, plus vous aurez chaud.",
    "Placez l'entrée à l'opposé du vent.",
    "Pour plusieurs personnes, le tipi de branches appuyées autour d'un arbre fonctionne sur le même principe."
  ],
  erreurs: [
    "Construire trop grand : l'abri reste froid.",
    "Mettre une couverture trop fine : le vent et la pluie traversent.",
    "Oublier l'isolation du sol, qui vole plus de chaleur que l'air."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<rect x="0" y="170" width="320" height="30" fill="var(--sol)" stroke="none"/>
<path d="M0 170 L320 170"/>
<path d="M40 170 L50 120 L60 170 M40 135 L60 135" stroke-width="4"/>
<path d="M50 112 L290 168" stroke-width="4"/>
<path d="M50 112 L30 170 L290 170 Z" fill="var(--vert)" opacity="0.7"/>
<path d="M90 121 L72 170 M130 130 L116 170 M170 140 L160 170 M210 149 L202 170 M250 158 L246 170"/>
<path d="M30 108 Q50 92 70 108" stroke-dasharray="4 4"/>
<circle cx="160" cy="60" r="11" fill="var(--accent)"/><text x="156" y="65" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text>
<circle cx="250" cy="120" r="11" fill="var(--accent)"/><text x="246" y="125" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text>
<text x="176" y="64" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Perche faîtière</text>
<text x="200" y="104" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">50 cm de feuilles</text>
<text x="10" y="94" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Entrée</text>
<path d="M160 71 L150 125"/><path d="M250 131 L240 150"/>
</svg>`,
  legende: "Une perche posée sur un support bas (1), des branches en côtes et une très épaisse couche de feuilles (2).",
  motscles: ["abri en A", "tipi", "branchages", "feuilles", "abri naturel", "nuit", "froid"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/construction-abris-naturels/" }
},
{
  id: "abri-05",
  cat: "abri",
  titre: "Abri avec bâche ou poncho",
  resume: "Une bâche, un poncho ou un grand sac poubelle et une ficelle suffisent pour un abri étanche en quelques minutes. Tendez bien la toile pour que l'eau s'écoule.",
  urgence: false,
  etapes: [
    "Tendez une corde entre deux arbres, à hauteur de hanche, bien serrée.",
    "Posez la bâche à cheval sur la corde pour former un toit en V inversé.",
    "Fixez les coins au sol avec des piquets, des pierres ou des bâtons, en tendant bien la toile.",
    "Inclinez le côté exposé jusqu'au sol pour couper le vent et la pluie.",
    "Creusez une petite rigole autour pour évacuer l'eau de ruissellement.",
    "Mettez une couche isolante de feuilles ou de branches souples sous vous."
  ],
  conseils: [
    "Un poncho fait aussi un toit en appentis : une corde, deux coins attachés en haut, deux coins au sol.",
    "Si la bâche n'a pas d'œillets, enroulez un petit caillou dans le coin et nouez la ficelle autour.",
    "Gardez toujours une bâche légère et 10 m de ficelle dans votre sac."
  ],
  erreurs: [
    "Laisser la toile détendue : l'eau forme une poche et finit par couler sur vous.",
    "Percer la bâche pour l'attacher.",
    "Toucher la toile de l'intérieur sous la pluie : l'eau passe par capillarité."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<rect x="0" y="170" width="320" height="30" fill="var(--sol)" stroke="none"/>
<path d="M0 170 L320 170"/>
<path d="M30 170 L30 30 M290 170 L290 30" stroke-width="6"/>
<path d="M30 80 L290 80" stroke-dasharray="6 3"/>
<path d="M70 80 L250 80 L280 168 L40 168 Z" fill="var(--eau)" opacity="0.5"/>
<path d="M70 80 L40 168 M250 80 L280 168 M160 80 L160 168" stroke-dasharray="3 3"/>
<path d="M40 168 L34 178 M280 168 L286 178" stroke-width="3"/>
<circle cx="150" cy="40" r="11" fill="var(--accent)"/><text x="146" y="45" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text>
<circle cx="230" cy="185" r="11" fill="var(--accent)"/><text x="226" y="190" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text>
<text x="166" y="44" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Corde tendue</text>
<text x="100" y="130" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Bâche</text>
<text x="246" y="194" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Piquets</text>
<path d="M150 51 L150 78"/>
</svg>`,
  legende: "Une corde tendue entre deux arbres (1), la bâche posée dessus et fixée au sol par des piquets (2).",
  motscles: ["bâche", "poncho", "corde", "tarp", "pluie", "abri rapide", "sac poubelle"]
},
{
  id: "abri-06",
  cat: "abri",
  titre: "Abri dans la neige",
  resume: "La neige isole très bien. Un trou ou une petite grotte creusée dans une congère vous protège du vent glacial, à condition de garder un trou d'aération.",
  urgence: false,
  etapes: [
    "Cherchez une congère épaisse ou entassez la neige en un gros tas, puis laissez-la tasser 30 minutes à une heure.",
    "Creusez une entrée basse, puis remontez pour creuser la chambre au-dessus du niveau de l'entrée.",
    "Gardez des parois et un toit d'au moins 30 cm d'épaisseur.",
    "Façonnez une plateforme de couchage plus haute que l'entrée : l'air chaud monte et reste avec vous.",
    "Percez un trou d'aération dans le toit avec un bâton et laissez le bâton dedans pour le dégager régulièrement.",
    "Lissez le plafond en voûte pour que les gouttes coulent sur les côtés.",
    "Isolez le sol avec des branches de sapin, un sac ou un tapis avant de vous allonger."
  ],
  conseils: [
    "Travaillez lentement pour ne pas transpirer : des habits mouillés de sueur vous refroidiront ensuite.",
    "Plantez un bâton ou un objet coloré dehors pour signaler votre abri.",
    "Gardez une pelle ou un outil à l'intérieur au cas où l'entrée se boucherait."
  ],
  erreurs: [
    "Boucher complètement l'abri : risque d'asphyxie, surtout avec une bougie ou un réchaud.",
    "Creuser au pied d'une pente chargée : risque d'avalanche.",
    "Dormir directement sur la neige sans isolation."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M0 180 L320 180"/>
<path d="M20 180 Q160 0 300 180 Z" fill="var(--fill)"/>
<path d="M80 180 L80 150 Q160 60 240 150 L240 180 L190 180 L190 150 L130 150 L130 165 L80 165" fill="var(--eau)" opacity="0.4"/>
<path d="M130 150 L230 150" stroke-width="4"/>
<path d="M160 72 L160 40" stroke-width="3"/>
<path d="M200 130 Q190 115 200 100 M175 130 Q165 115 175 100" stroke-dasharray="3 3"/>
<path d="M40 172 L80 172" />
<circle cx="45" cy="140" r="11" fill="var(--accent)"/><text x="41" y="145" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text>
<circle cx="250" cy="110" r="11" fill="var(--accent)"/><text x="246" y="115" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text>
<circle cx="190" cy="40" r="11" fill="var(--accent)"/><text x="186" y="45" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">3</text>
<text x="20" y="196" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Entrée basse</text>
<text x="230" y="196" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Couchage haut</text>
<text x="206" y="30" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Aération</text>
</svg>`,
  legende: "Entrée basse (1), plateforme de couchage plus haute où l'air chaud s'accumule (2), trou d'aération dans le toit (3).",
  motscles: ["neige", "igloo", "congère", "trou dans la neige", "froid", "montagne", "aération"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/comment-se-preparer-a-une-tempete-de-neige-survivre-a-la-tempete-de-neige/" }
},
{
  id: "abri-07",
  cat: "abri",
  titre: "Isoler le sol",
  resume: "Le sol froid ou humide vole la chaleur du corps bien plus vite que l'air. Un lit épais de feuilles, d'herbes ou de branches souples est indispensable, même l'été.",
  urgence: false,
  etapes: [
    "Ramassez une grande quantité de matériaux secs : feuilles mortes, aiguilles de pin, herbes, fougères.",
    "Posez d'abord une couche de branches souples ou de petit bois pour vous décoller du sol humide.",
    "Entassez par-dessus les feuilles sur 20 à 30 cm d'épaisseur.",
    "Allongez-vous pour vérifier : une fois tassé, il doit rester au moins 10 cm entre vous et le sol.",
    "Encadrez le lit avec des bûches ou des pierres pour éviter qu'il ne s'étale.",
    "Rajoutez des feuilles chaque soir, car elles se tassent."
  ],
  conseils: [
    "Un sac à dos vide, une couverture de survie pliée ou du carton complètent bien le lit.",
    "Si vous avez peu de matière, isolez en priorité le dos et les hanches.",
    "Dans un sac de couchage, le tapis de sol compte autant que le sac lui-même."
  ],
  erreurs: [
    "Dormir à même la terre ou sur la roche.",
    "Utiliser des feuilles mouillées sans couche de branches en dessous.",
    "Faire un lit trop mince qui s'écrase en quelques minutes."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<rect x="0" y="160" width="320" height="40" fill="var(--sol)" stroke="none"/>
<path d="M0 160 L320 160"/>
<rect x="40" y="145" width="240" height="15" fill="var(--sol)" opacity="0.7"/>
<rect x="40" y="100" width="240" height="45" fill="var(--vert)" opacity="0.6"/>
<ellipse cx="160" cy="88" rx="110" ry="14" fill="var(--accent)"/>
<circle cx="60" cy="80" r="12" fill="var(--accent)"/>
<path d="M300 100 L300 160 M294 106 L300 100 L306 106 M294 154 L300 160 L306 154"/>
<path d="M120 190 L120 172 M114 178 L120 172 L126 178 M200 190 L200 172 M194 178 L200 172 L206 178" stroke-dasharray="3 3"/>
<text x="110" y="128" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Feuilles sèches</text>
<text x="100" y="157" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Branches souples</text>
<text x="268" y="92" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">20-30 cm</text>
<text x="136" y="196" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Froid du sol</text>
</svg>`,
  legende: "Une couche de branches souples puis 20 à 30 cm de feuilles sèches séparent le corps du froid du sol.",
  motscles: ["isolation", "sol", "lit de feuilles", "matelas", "froid", "humidité", "nuit"]
},
{
  id: "abri-08",
  cat: "abri",
  titre: "S'abriter en ville ou en voiture",
  resume: "En ville comme sur la route, un bâtiment solide ou votre voiture sont souvent le meilleur abri. Restez-y en sécurité et faites-vous repérer.",
  urgence: false,
  etapes: [
    "En voiture bloquée par la neige ou un orage, restez dans le véhicule sauf danger immédiat : il vous protège et il est plus facile à repérer.",
    "Signalez-vous : feux de détresse, gilet ou tissu coloré à l'antenne ou à la fenêtre.",
    "Si vous faites tourner le moteur pour le chauffage, dégagez d'abord le pot d'échappement de la neige, ne le faites tourner que 10 minutes par heure et entrouvrez une vitre côté abrité.",
    "Couvrez-vous de tout ce que vous avez : vêtements, tapis, couverture de survie. Serrez-vous à plusieurs.",
    "Si l'eau monte autour de la voiture, sortez tout de suite et montez sur un point haut. Ne roulez jamais sur une route inondée.",
    "En ville, choisissez un bâtiment solide, montez à l'étage en cas d'inondation, et évitez caves et parkings souterrains.",
    "Repérez à l'avance les lieux d'accueil de votre commune : mairie, gymnase, salle polyvalente."
  ],
  conseils: [
    "Gardez dans le coffre une couverture, de l'eau, une lampe, des gants et un chargeur de téléphone.",
    "Dans le Var, les épisodes méditerranéens transforment des routes en torrents : 30 cm d'eau suffisent à emporter une voiture.",
    "Bougez régulièrement bras et jambes pour garder la circulation."
  ],
  erreurs: [
    "Laisser le moteur tourner en continu avec un pot bouché : risque d'intoxication au monoxyde de carbone, gaz sans odeur.",
    "Quitter la voiture dans le blizzard pour chercher de l'aide à pied.",
    "Se réfugier au sous-sol pendant une crue."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M0 160 L320 160"/>
<path d="M40 150 L40 120 L80 120 L110 85 L210 85 L240 120 L280 120 L280 150 Z" fill="var(--fill)"/>
<path d="M118 90 L155 90 L155 118 L92 118 Z M165 90 L205 90 L230 118 L165 118 Z" fill="var(--eau)" opacity="0.5"/>
<path d="M175 82 L205 82" stroke-width="3"/>
<circle cx="90" cy="155" r="16" fill="var(--sol)"/><circle cx="230" cy="155" r="16" fill="var(--sol)"/>
<path d="M30 145 L18 145" stroke-width="4"/>
<path d="M14 135 Q6 125 14 115 M4 138 Q-4 125 4 112" stroke-dasharray="3 3"/>
<rect x="280" y="124" width="10" height="8" fill="var(--accent)"/>
<circle cx="190" cy="40" r="11" fill="var(--accent)"/><text x="186" y="45" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text>
<circle cx="40" cy="185" r="11" fill="var(--accent)"/><text x="36" y="190" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text>
<text x="206" y="44" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Vitre entrouverte</text>
<text x="56" y="190" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Pot dégagé</text>
<path d="M190 51 L190 80"/>
</svg>`,
  legende: "Dans une voiture bloquée : vitre légèrement entrouverte (1) et pot d'échappement toujours dégagé (2) si le moteur tourne.",
  motscles: ["voiture", "ville", "neige", "inondation", "monoxyde de carbone", "bâtiment", "bloqué"]
},
{
  id: "abri-09",
  cat: "abri",
  titre: "Bien utiliser la couverture de survie",
  resume: "La couverture de survie renvoie la chaleur du corps et coupe le vent. Elle n'est efficace que si vous vous enveloppez bien, tête comprise, et que vous vous isolez du sol.",
  urgence: false,
  etapes: [
    "Dépliez-la à l'abri du vent, elle est légère et s'envole facilement.",
    "Isolez d'abord le sol : sac, feuilles, carton ou une deuxième couverture.",
    "Enveloppez la personne de la tête aux pieds en laissant le visage libre, par-dessus ses vêtements secs.",
    "Fermez bien les bords pour emprisonner l'air chaud, rentrez-les sous le corps.",
    "Couvrez la tête et la nuque, par où l'on perd beaucoup de chaleur.",
    "Sur un blessé, enveloppez-le sans le déplacer inutilement et appelez le 15 ou le 112."
  ],
  conseils: [
    "La couleur tournée vers vous compte peu : ce qui compte, c'est de bien vous envelopper et de rester au sec.",
    "Retirez si possible les vêtements mouillés avant de vous envelopper, ou mettez la couverture par-dessus un vêtement de pluie.",
    "Elle peut aussi servir de toit, de signal brillant pour les secours ou de pare-soleil contre la chaleur."
  ],
  erreurs: [
    "Simplement la poser sur les épaules comme une cape : la chaleur s'échappe.",
    "L'utiliser près d'une ligne électrique ou pendant un orage : elle conduit l'électricité.",
    "La jeter après usage alors qu'elle peut resservir si elle n'est pas déchirée."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<rect x="0" y="170" width="320" height="30" fill="var(--sol)" stroke="none"/>
<path d="M0 170 L320 170"/>
<rect x="30" y="155" width="260" height="15" fill="var(--vert)" opacity="0.7"/>
<path d="M45 150 Q40 110 80 108 L270 118 Q295 135 270 152 Z" fill="var(--accent)"/>
<circle cx="70" cy="128" r="12" fill="var(--fill)"/>
<path d="M95 112 L95 150 M150 114 L150 152 M210 116 L210 152" stroke-dasharray="3 3"/>
<path d="M160 70 L160 100 M154 94 L160 100 L166 94"/>
<circle cx="40" cy="60" r="11" fill="var(--accent)"/><text x="36" y="65" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text>
<circle cx="200" cy="60" r="11" fill="var(--accent)"/><text x="196" y="65" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text>
<circle cx="250" cy="190" r="11" fill="var(--accent)"/><text x="246" y="195" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">3</text>
<text x="56" y="64" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Tête couverte</text>
<text x="216" y="64" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Bords fermés</text>
<text x="100" y="194" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Isolation du sol</text>
<path d="M60 70 L68 112"/>
</svg>`,
  legende: "Tête couverte (1), bords bien fermés autour du corps (2) et isolation sous la personne (3).",
  motscles: ["couverture de survie", "hypothermie", "chaleur", "blessé", "froid", "signal"]
},
{
  id: "nourriture-01",
  cat: "nourriture",
  titre: "Combien de temps sans manger",
  resume: "Un adulte en bonne santé tient plusieurs semaines sans manger, mais seulement quelques jours sans boire. La faim est pénible, pas urgente : économisez votre énergie.",
  urgence: false,
  etapes: [
    "Rassurez-vous et rassurez les autres : quelques jours sans manger ne mettent pas la vie en danger chez un adulte en bonne santé.",
    "Assurez d'abord l'abri, l'eau et le signalement.",
    "Faites l'inventaire de ce que vous avez et rationnez en partageant de façon égale.",
    "Si l'eau manque, mangez très peu : digérer consomme de l'eau, surtout les aliments salés ou protéinés.",
    "Limitez les efforts, restez au chaud ou à l'ombre pour économiser vos réserves.",
    "Ne cherchez de la nourriture sauvage que si l'attente risque de durer, et seulement des espèces que vous connaissez avec certitude."
  ],
  conseils: [
    "Les enfants, les femmes enceintes, les diabétiques et les personnes âgées doivent être nourris en priorité.",
    "Une boisson sucrée ou un aliment sucré redonne vite un peu d'énergie et de moral.",
    "Une dépense d'énergie pour chercher à manger doit rapporter plus qu'elle ne coûte."
  ],
  erreurs: [
    "Manger une plante ou un champignon douteux par peur de la faim.",
    "S'épuiser à chasser ou à pêcher au lieu de se protéger.",
    "Manger toutes les provisions le premier jour."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<circle cx="40" cy="70" r="24" fill="var(--accent)"/>
<circle cx="120" cy="70" r="24" fill="var(--eau)"/>
<circle cx="200" cy="70" r="24" fill="var(--feu)"/>
<circle cx="280" cy="70" r="24" fill="var(--vert)"/>
<path d="M64 70 L94 70 M88 64 L94 70 L88 76 M144 70 L174 70 M168 64 L174 70 L168 76 M224 70 L254 70 M248 64 L254 70 L248 76"/>
<path d="M28 78 L40 62 L52 78 Z"/>
<path d="M120 58 Q108 74 120 82 Q132 74 120 58 Z" fill="var(--fill)"/>
<path d="M200 82 Q188 70 200 56 Q212 70 200 82 Z" fill="var(--accent)"/>
<path d="M272 62 L272 82 M288 62 L288 82 M268 62 L276 62"/>
<text x="24" y="116" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Abri</text>
<text x="108" y="116" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Eau</text>
<text x="168" y="116" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Feu, signal</text>
<text x="250" y="116" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Nourriture</text>
<rect x="20" y="140" width="280" height="30" rx="6" fill="var(--fill)"/>
<text x="38" y="160" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Plusieurs semaines sans manger</text>
</svg>`,
  legende: "L'ordre des priorités : abri, eau, feu et signal, puis seulement la nourriture.",
  motscles: ["faim", "jeûne", "rationner", "priorités", "énergie", "provisions"]
},
{
  id: "nourriture-02",
  cat: "nourriture",
  titre: "Plantes comestibles de Provence",
  resume: "Ortie, pissenlit, plantain, pourpier, asperge sauvage, châtaigne, arbouse et figue de barbarie sont courants en Provence. Ne mangez qu'une plante que vous reconnaissez avec une certitude absolue.",
  urgence: false,
  etapes: [
    "Ortie : cueillez les jeunes feuilles du haut avec des gants, puis faites-les cuire ou blanchir, elles ne piquent plus.",
    "Pissenlit : feuilles en rosette au ras du sol, très dentées, avec un latex blanc. Jeunes feuilles crues, plus vieilles cuites.",
    "Plantain : feuilles à nervures bien parallèles. Jeunes feuilles crues ou cuites.",
    "Pourpier : petites feuilles charnues sur des tiges rougeâtres couchées au sol, crues en salade. Sans latex blanc.",
    "Asperge sauvage : au printemps, cassez les jeunes pousses fines là où elles cèdent facilement, crues ou cuites.",
    "Châtaigne : la bogue porte de très nombreux piquants fins et contient 2 à 3 fruits à pointe velue. Cuisez-les.",
    "Arbouse : fruit rond rouge à surface granuleuse, en automne. Mangez-la bien mûre, sans excès.",
    "Figue de barbarie : ramassez-la avec une pince ou un tissu épais, frottez les épines, puis épluchez."
  ],
  conseils: [
    "Cueillez loin des routes, des champs traités et des déjections d'animaux.",
    "Goûtez d'abord une petite quantité et attendez quelques heures avant d'en manger plus.",
    "Lavez et faites cuire dès que c'est possible : la cuisson réduit les risques."
  ],
  erreurs: [
    "Confondre la châtaigne avec le marron d'Inde, toxique : bogue à piquants courts et espacés, gros fruit unique et rond.",
    "Confondre le pourpier avec une euphorbe rampante, qui laisse couler un latex blanc irritant.",
    "Toucher une figue de barbarie à mains nues : ses minuscules épines sont très difficiles à retirer."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M45 90 L35 70 L45 65 L38 45 L50 50 L48 25 L58 50 L70 45 L62 65 L72 70 L60 90 Z" fill="var(--vert)"/>
<path d="M52 90 L52 30"/>
<path d="M130 90 Q100 50 130 15 Q160 50 130 90 Z" fill="var(--vert)"/>
<path d="M130 88 L130 20 M122 85 Q112 50 124 22 M138 85 Q148 50 136 22"/>
<circle cx="220" cy="55" r="28" fill="var(--accent)"/>
<path d="M200 35 L192 27 M220 27 L220 17 M240 35 L248 27 M195 55 L185 55 M245 55 L255 55 M200 75 L192 83 M240 75 L248 83"/>
<path d="M285 90 Q270 70 280 55 Q295 60 300 75 Q298 90 285 90 Z" fill="var(--sol)"/>
<path d="M281 60 L276 52 M286 58 L286 50"/>
<path d="M30 170 Q30 120 80 130 Q100 160 60 175 Z" fill="var(--vert)"/>
<circle cx="70" cy="150" r="5" fill="var(--feu)"/><circle cx="58" cy="140" r="5" fill="var(--feu)"/>
<path d="M170 180 Q160 140 190 125 Q215 150 200 180 Z" fill="var(--vert)"/>
<circle cx="190" cy="120" r="7" fill="var(--feu)"/><circle cx="205" cy="128" r="7" fill="var(--feu)"/>
<text x="30" y="108" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Ortie</text>
<text x="105" y="108" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Plantain</text>
<text x="190" y="108" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Châtaigne</text>
<text x="20" y="194" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Arbouses</text>
<text x="150" y="194" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Figue de barbarie</text>
</svg>`,
  legende: "Repères simples : feuille dentée de l'ortie, nervures parallèles du plantain, bogue très piquante de la châtaigne, arbouses rouges, figues sur raquette.",
  motscles: ["plantes", "cueillette", "ortie", "pissenlit", "plantain", "pourpier", "asperge", "châtaigne", "arbouse", "figue de barbarie", "Provence"]
},
{
  id: "nourriture-03",
  cat: "nourriture",
  titre: "Plantes toxiques à connaître",
  resume: "Laurier-rose, ciguë, arum, if et datura poussent en Provence et peuvent tuer. Apprenez à les reconnaître et, au moindre doute, ne mangez rien.",
  urgence: true,
  etapes: [
    "Laurier-rose : arbuste des jardins et des bords de route, longues feuilles étroites et coriaces, fleurs roses ou blanches. Tout est toxique, même la fumée de ses branches et une brochette taillée dedans.",
    "Ciguë : ressemble à la carotte sauvage, au persil ou au cerfeuil. Tige lisse tachée de pourpre, odeur désagréable de souris quand on froisse.",
    "Arum : grandes feuilles en fer de lance en sous-bois, puis grappes de baies rouges. Il brûle la bouche et peut se confondre avec l'oseille.",
    "If : conifère aux aiguilles plates et aux petites boules rouges. Les aiguilles et la graine sont mortelles.",
    "Datura : grandes fleurs blanches en trompette et fruit vert couvert d'épines. Hallucinations graves, parfois mortelles.",
    "En cas d'ingestion, appelez le 15 ou le 112, ou le centre antipoison, et gardez un morceau de la plante.",
    "Ne faites pas vomir et ne donnez ni lait ni eau en grande quantité sans avis médical."
  ],
  conseils: [
    "Règle d'or : toute plante de la famille de la carotte, à fleurs en ombrelles blanches, est à éviter si vous n'êtes pas expert.",
    "Les baies rouges ou blanches inconnues sont à fuir, en particulier avec des enfants.",
    "Apprenez ces cinq plantes avec un guide papier avant une sortie."
  ],
  erreurs: [
    "Utiliser des branches de laurier-rose pour cuire ou embrocher de la nourriture.",
    "Se fier au goût : certaines plantes mortelles ne sont pas amères.",
    "Croire qu'un animal qui mange une plante prouve qu'elle est sans danger pour vous."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M60 180 L60 70"/>
<circle cx="60" cy="140" r="3" fill="var(--feu)"/><circle cx="62" cy="120" r="3" fill="var(--feu)"/><circle cx="58" cy="100" r="3" fill="var(--feu)"/>
<path d="M60 70 L35 50 M60 70 L50 45 M60 70 L70 45 M60 70 L85 50"/>
<path d="M28 50 Q60 30 92 50" fill="var(--fill)"/>
<path d="M60 150 L35 130 L40 120 M60 130 L85 112 L80 102"/>
<path d="M180 120 Q150 90 175 60 L200 60 Q225 90 195 120 Z" fill="var(--vert)"/>
<path d="M160 60 L215 60 M168 50 L172 60 M188 46 L188 60 M206 50 L202 60"/>
<path d="M188 120 L188 180"/>
<ellipse cx="270" cy="150" rx="22" ry="28" fill="var(--vert)"/>
<path d="M248 140 L238 136 M250 160 L240 166 M292 140 L302 136 M290 160 L300 166 M270 122 L270 112 M260 126 L254 118 M280 126 L286 118"/>
<path d="M270 122 L270 80 Q245 50 260 40 L280 40 Q295 50 270 80" fill="var(--fill)"/>
<g stroke="var(--feu)" stroke-width="4"><path d="M10 10 L30 30 M30 10 L10 30"/></g>
<text x="40" y="24" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Ciguë : tige tachée</text>
<text x="160" y="194" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Arum</text>
<text x="240" y="30" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Datura</text>
</svg>`,
  legende: "Trois pièges : la ciguë à ombrelles blanches et tige tachée, l'arum à feuilles en fer de lance, le datura à fleur en trompette et fruit épineux.",
  motscles: ["toxique", "poison", "laurier-rose", "ciguë", "arum", "if", "datura", "intoxication", "antipoison"]
},
{
  id: "nourriture-04",
  cat: "nourriture",
  titre: "Test d'édibilité en dernier recours",
  resume: "Ce test long et progressif ne sert qu'en vraie survie prolongée, quand aucune plante connue n'est disponible. Il ne vaut rien pour les champignons et ne protège pas des plantes mortelles à petite dose.",
  urgence: false,
  etapes: [
    "Ne testez qu'une seule plante et une seule partie à la fois (feuille, tige, racine ou fruit), en abondance autour de vous, et ne mangez rien d'autre pendant le test.",
    "Écartez d'office les plantes à latex blanc, à ombrelles blanches, à baies inconnues, à odeur d'amande amère ou à graines dans des gousses.",
    "Frottez la plante sur l'intérieur du poignet et attendez 15 minutes : brûlure, rougeur ou démangeaison, abandonnez.",
    "Posez un morceau sur la lèvre 3 minutes, puis sur la langue 15 minutes, sans avaler.",
    "Mâchez un petit morceau 15 minutes sans avaler. Au moindre picotement, goût amer ou savonneux, crachez et rincez.",
    "Avalez un petit morceau et attendez 8 heures sans rien manger d'autre.",
    "Sans aucune réaction, mangez une petite poignée de la même partie préparée de la même façon et attendez encore 8 heures.",
    "En cas de malaise, vomissement, vertige ou troubles de la vue, arrêtez tout, buvez de l'eau et appelez le 15 ou le 112 si possible."
  ],
  conseils: [
    "Le test peut prendre une journée entière : il coûte de l'énergie, à réserver au cas où l'attente durera longtemps.",
    "Une plante cuite peut réagir différemment de la même plante crue : retestez si vous changez la préparation.",
    "Mieux vaut avoir faim quelques jours que de s'empoisonner."
  ],
  erreurs: [
    "Tester un champignon : certains tuent sans aucun symptôme pendant des heures.",
    "Tester plusieurs plantes en même temps.",
    "Faire le test sur un enfant."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M30 100 L290 100" stroke-dasharray="4 4"/>
<circle cx="30" cy="100" r="16" fill="var(--fill)"/><text x="26" y="105" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text>
<circle cx="95" cy="100" r="16" fill="var(--fill)"/><text x="91" y="105" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text>
<circle cx="160" cy="100" r="16" fill="var(--accent)"/><text x="156" y="105" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">3</text>
<circle cx="225" cy="100" r="16" fill="var(--accent)"/><text x="221" y="105" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">4</text>
<circle cx="290" cy="100" r="16" fill="var(--feu)"/><text x="286" y="105" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">5</text>
<text x="14" y="70" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Poignet</text>
<text x="14" y="140" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">15 min</text>
<text x="76" y="70" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Lèvre</text>
<text x="80" y="140" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">3 min</text>
<text x="140" y="70" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Langue</text>
<text x="140" y="140" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">15 min</text>
<text x="205" y="70" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Mâcher</text>
<text x="205" y="140" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">15 min</text>
<text x="264" y="70" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Avaler</text>
<text x="272" y="140" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">8 h</text>
<text x="60" y="185" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Jamais pour les champignons</text>
</svg>`,
  legende: "Les cinq paliers du test, du contact sur le poignet jusqu'à l'ingestion d'un petit morceau suivie de 8 heures d'attente.",
  motscles: ["test d'édibilité", "plante inconnue", "dernier recours", "comestible", "intoxication"]
},
{
  id: "nourriture-05",
  cat: "nourriture",
  titre: "Champignons : n'en mangez pas",
  resume: "En situation de survie, ne mangez aucun champignon que vous ne connaissez pas parfaitement. Ils apportent très peu d'énergie et certains tuent, parfois plusieurs jours après.",
  urgence: true,
  etapes: [
    "Considérez tout champignon sauvage inconnu comme dangereux.",
    "N'en goûtez jamais, même un petit morceau, et ne faites pas de test d'édibilité dessus.",
    "Si vous en avez cueilli, ne les mélangez pas aux autres aliments.",
    "En cas d'ingestion suivie de vomissements, diarrhée, sueurs ou malaise, même 6 à 24 heures plus tard, appelez le 15 ou le 112.",
    "Gardez les restes ou une photo du champignon pour aider les médecins.",
    "En temps normal, faites contrôler votre cueillette par un pharmacien ou une association mycologique."
  ],
  conseils: [
    "Les champignons sont pauvres en calories : le risque n'en vaut pas la peine en survie.",
    "Les amanites mortelles poussent dans les forêts du Var et peuvent ressembler à des espèces comestibles.",
    "Une application de reconnaissance par photo n'est pas fiable pour décider de manger."
  ],
  erreurs: [
    "Croire qu'un champignon mangé par un animal ou qui change de couleur à l'argent est sans danger.",
    "Penser que la cuisson détruit le poison.",
    "Attendre que les symptômes s'aggravent avant d'appeler les secours."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<rect x="0" y="170" width="320" height="30" fill="var(--sol)" stroke="none"/>
<path d="M0 170 L320 170"/>
<path d="M90 100 Q160 20 230 100 Z" fill="var(--fill)"/>
<circle cx="130" cy="75" r="6" fill="var(--sol)"/><circle cx="165" cy="60" r="6" fill="var(--sol)"/><circle cx="195" cy="80" r="6" fill="var(--sol)"/>
<path d="M145 100 L140 160 Q160 175 180 160 L175 100"/>
<path d="M138 125 Q160 135 182 125"/>
<path d="M135 160 Q160 180 185 160" fill="var(--fill)"/>
<circle cx="160" cy="100" r="95" stroke="var(--feu)" stroke-width="6"/>
<path d="M93 33 L227 167" stroke="var(--feu)" stroke-width="6"/>
<text x="10" y="20" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Inconnu</text>
<text x="258" y="20" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Jamais</text>
<text x="196" y="138" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Anneau</text>
<text x="190" y="166" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Volve</text>
</svg>`,
  legende: "Champignon à anneau et volve, comme les amanites : en survie, aucun champignon inconnu ne se mange.",
  motscles: ["champignons", "amanite", "intoxication", "cueillette", "poison", "forêt"]
},
{
  id: "nourriture-06",
  cat: "nourriture",
  titre: "Insectes et escargots",
  resume: "Sauterelles, grillons, larves de bois et escargots sont riches en protéines. Faites-les toujours cuire et évitez les espèces colorées, poilues ou malodorantes.",
  urgence: false,
  etapes: [
    "Ramassez sauterelles et grillons tôt le matin, quand ils sont engourdis par la fraîcheur.",
    "Cherchez les larves sous les écorces et dans le bois mort qui s'effrite.",
    "Retirez les ailes, les pattes et la tête des sauterelles : les pattes épineuses blessent la gorge.",
    "Faites griller ou bouillir les insectes plusieurs minutes pour tuer les parasites.",
    "Pour les escargots, faites-les jeûner plusieurs jours dans un récipient aéré pour qu'ils vident leur intestin.",
    "Faites bouillir les escargots au moins 10 minutes, retirez-les de la coquille et ôtez la partie sombre en spirale.",
    "Commencez par une petite quantité pour vérifier que vous ne faites pas d'allergie."
  ],
  conseils: [
    "Les personnes allergiques aux crustacés peuvent réagir aux insectes.",
    "Grillés et écrasés, les insectes se mélangent facilement à une soupe.",
    "Le ramassage de certains escargots, comme l'escargot de Bourgogne, est réglementé : réservez-le à une vraie situation de survie."
  ],
  erreurs: [
    "Manger des insectes ou des escargots crus : risque de parasites graves.",
    "Ramasser des chenilles poilues, des insectes aux couleurs vives, ceux qui piquent ou qui sentent fort.",
    "Manger des limaces, des escargots de mer à coquille conique ou des escargots trouvés morts."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="80" cy="70" rx="45" ry="14" fill="var(--vert)"/>
<circle cx="130" cy="66" r="9" fill="var(--vert)"/>
<path d="M60 80 L45 110 M80 82 L75 110 M100 80 L115 108 L125 110"/>
<path d="M135 58 L160 35"/>
<g stroke="var(--feu)" stroke-width="3"><path d="M40 98 L52 108 M52 98 L40 108 M110 96 L122 106 M122 96 L110 106"/></g>
<circle cx="240" cy="70" r="30" fill="var(--sol)"/>
<path d="M240 70 m0 -8 a8 8 0 1 1 -8 8 a16 16 0 1 1 16 -16"/>
<path d="M200 100 Q230 105 280 100 L290 90"/>
<path d="M210 100 L198 80 M218 100 L210 80"/>
<path d="M60 190 L100 140 L220 140 L260 190" fill="var(--fill)"/>
<path d="M70 140 L250 140"/>
<path d="M120 170 Q125 160 120 150 M160 170 Q165 160 160 150 M200 170 Q205 160 200 150" stroke="var(--feu)"/>
<circle cx="30" cy="160" r="11" fill="var(--accent)"/><text x="26" y="165" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text>
<circle cx="290" cy="160" r="11" fill="var(--accent)"/><text x="286" y="165" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text>
<text x="20" y="30" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Ôter pattes</text>
<text x="200" y="30" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Jeûne puis cuisson</text>
<text x="128" y="132" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Bien cuire</text>
</svg>`,
  legende: "Retirez pattes et ailes des sauterelles (1), faites jeûner les escargots puis faites tout bien cuire (2).",
  motscles: ["insectes", "sauterelle", "grillon", "larve", "escargot", "protéines", "cuisson", "parasites"]
},
{
  id: "nourriture-07",
  cat: "nourriture",
  titre: "Pêche improvisée",
  resume: "Une ligne, un hameçon de fortune et un appât suffisent pour pêcher. La pêche est réglementée en France : en temps normal, respectez permis, tailles et zones protégées.",
  urgence: false,
  etapes: [
    "Fabriquez un hameçon avec une épingle à nourrice pliée, un trombone, une arête ou une petite épine dure.",
    "Utilisez comme ligne du fil de pêche de votre trousse, du fil dentaire ou un brin de paracorde.",
    "Ajoutez un flotteur (bout de bois sec, bouchon) et un petit poids (caillou noué) pour tendre la ligne.",
    "Appâtez avec des vers, des larves, des insectes ou des restes de poisson.",
    "Pêchez à l'aube ou au crépuscule, à l'ombre, près des rochers, des racines et des remous calmes.",
    "En mer, cherchez à marée basse coquillages, crabes et oursins dans les rochers, en évitant les zones polluées et les ports.",
    "Tuez le poisson aussitôt d'un coup sec sur la tête et videz-le rapidement."
  ],
  conseils: [
    "Posez plusieurs lignes fixées à des branches et revenez les voir : vous économisez votre énergie.",
    "Un poisson frais a l'œil brillant, les ouïes rouges et la chair ferme.",
    "Faites toujours cuire les poissons d'eau douce, qui peuvent porter des parasites."
  ],
  erreurs: [
    "Manger un poisson à l'odeur forte, à la chair molle ou trouvé mort.",
    "Ramasser des coquillages près d'un égout, d'un port ou après une alerte sanitaire.",
    "Entrer dans l'eau froide ou dans le courant pour pêcher."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<rect x="0" y="110" width="320" height="90" fill="var(--eau)" opacity="0.5" stroke="none"/>
<path d="M0 110 Q40 104 80 110 T160 110 T240 110 T320 110"/>
<path d="M20 30 L120 70" stroke-width="5" stroke="var(--sol)"/>
<path d="M120 70 L180 120 L180 160"/>
<ellipse cx="180" cy="112" rx="6" ry="10" fill="var(--accent)"/>
<circle cx="180" cy="148" r="4" fill="currentColor"/>
<path d="M180 160 L180 178 Q180 188 172 186 Q166 183 168 176"/>
<path d="M240 160 Q260 145 285 160 Q260 175 240 160 Z M285 160 L298 150 L298 170 Z" fill="var(--fill)"/>
<path d="M240 40 L240 80 Q240 92 228 90 Q220 88 222 80" stroke-width="3"/>
<path d="M240 40 L236 46"/>
<circle cx="200" cy="60" r="11" fill="var(--accent)"/><text x="196" y="65" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text>
<text x="252" y="64" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Épingle</text>
<text x="192" y="116" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Flotteur</text>
<text x="192" y="152" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Poids</text>
<text x="100" y="190" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Hameçon appâté</text>
</svg>`,
  legende: "Une épingle pliée en hameçon (1), une ligne avec flotteur et petit poids, accrochée à une branche.",
  motscles: ["pêche", "hameçon", "ligne", "poisson", "coquillages", "bord de mer", "rivière"]
},
{
  id: "nourriture-08",
  cat: "nourriture",
  titre: "Piégeage : à savoir",
  resume: "En France, le piégeage est strictement réglementé et réservé aux piégeurs agréés. Il ne se justifie qu'en vraie situation de survie, et rapporte souvent moins que la cueillette ou la pêche.",
  urgence: false,
  etapes: [
    "En temps normal, ne posez aucun piège : c'est interdit sans agrément et la plupart des espèces sont protégées.",
    "En vraie survie, privilégiez d'abord plantes connues, insectes, escargots et pêche, plus sûrs et moins coûteux en énergie.",
    "Si l'attente dure, observez les passages des petits animaux : sentiers dans l'herbe, traces, crottes, terriers.",
    "Choisissez les rétrécissements naturels entre buissons ou rochers, loin de votre camp.",
    "Préférez les dispositifs qui capturent sans blesser, comme une nasse à poissons en branchages.",
    "Vérifiez vos dispositifs au moins une fois par jour pour éviter toute souffrance inutile, et démontez-les tous en partant."
  ],
  conseils: [
    "Lavez-vous les mains ou frottez-les de terre avant de toucher le matériel : les animaux sentent l'odeur humaine.",
    "Notez ou balisez chaque emplacement pour ne rien oublier sur place.",
    "Un animal qui semble malade ou peu farouche ne doit pas être consommé."
  ],
  erreurs: [
    "Poser des collets ou des pièges hors situation de survie réelle : c'est une infraction.",
    "Laisser des pièges en place qui blesseront un chien, un enfant ou une espèce protégée.",
    "Dépenser plus d'énergie à piéger que la prise n'en rapporte."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<rect x="0" y="0" width="320" height="200" fill="var(--fill)" stroke="none"/>
<path d="M20 180 Q80 140 120 120 Q150 105 160 100 Q190 85 300 30" stroke-dasharray="6 6" stroke-width="3" stroke="var(--sol)"/>
<path d="M120 100 Q100 60 140 70 Q150 90 140 100 Z" fill="var(--vert)"/>
<path d="M175 115 Q200 140 170 145 Q155 130 165 115 Z" fill="var(--vert)"/>
<circle cx="70" cy="155" r="3" fill="var(--sol)"/><circle cx="78" cy="150" r="3" fill="var(--sol)"/>
<path d="M220 70 L224 62 L228 70 M232 66 L236 58 L240 66"/>
<circle cx="290" cy="40" r="14" fill="var(--sol)"/>
<circle cx="155" cy="107" r="11" fill="var(--accent)"/><text x="151" y="112" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text>
<text x="40" y="190" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Crottes</text>
<text x="196" y="90" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Traces</text>
<text x="250" y="70" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Terrier</text>
<text x="190" y="160" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Passage étroit</text>
<text x="10" y="22" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Réglementé en France</text>
</svg>`,
  legende: "Lire les indices d'un passage d'animal : crottes, traces, terrier, et rétrécissement entre deux buissons (1).",
  motscles: ["piégeage", "pièges", "réglementation", "traces", "gibier", "survie réelle"]
},
{
  id: "nourriture-09",
  cat: "nourriture",
  titre: "Préparer et cuire une prise",
  resume: "Videz rapidement le poisson ou l'animal, travaillez proprement et faites cuire à cœur. Une viande mal cuite peut transmettre des maladies graves.",
  urgence: false,
  etapes: [
    "Lavez-vous les mains et, si possible, protégez-les avec des gants ou un sac plastique.",
    "Poisson : écaillez, ouvrez le ventre de l'anus vers la tête, retirez les viscères et les ouïes, rincez.",
    "Petit animal : retirez la peau, ouvrez le ventre sans percer les intestins, retirez tous les organes.",
    "Jetez tout organe taché, gonflé ou d'aspect anormal, et l'animal entier en cas de doute.",
    "Enterrez ou éloignez les déchets du camp pour ne pas attirer d'animaux.",
    "Faites cuire sur des braises plutôt que sur des flammes : brochette en bois vert, pierre plate chaude ou bouillon.",
    "Cuisez jusqu'à ce que la chair soit opaque et que plus aucun jus rose ne coule."
  ],
  conseils: [
    "Le bouillon garde toutes les graisses et les minéraux : buvez-le.",
    "Utilisez du bois connu et non toxique pour les brochettes, jamais du laurier-rose.",
    "Le sanglier doit toujours être très bien cuit, à cause d'un parasite fréquent."
  ],
  erreurs: [
    "Manger un animal trouvé mort ou qui avait l'air malade.",
    "Manipuler un lièvre ou un lapin à mains nues avec une plaie : certaines maladies passent par la peau.",
    "Cuire à grandes flammes : l'extérieur brûle et l'intérieur reste cru."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<rect x="0" y="170" width="320" height="30" fill="var(--sol)" stroke="none"/>
<path d="M0 170 L320 170"/>
<path d="M80 170 L90 80 M240 170 L230 80 M80 92 L100 72 M240 92 L220 72" stroke-width="4"/>
<path d="M60 86 L260 86" stroke-width="3"/>
<path d="M120 86 Q160 60 200 86 Q160 110 120 86 Z M200 86 L215 76 L215 96 Z" fill="var(--fill)"/>
<path d="M130 86 L190 86" stroke-dasharray="3 3"/>
<ellipse cx="160" cy="165" rx="55" ry="10" fill="var(--feu)"/>
<circle cx="140" cy="162" r="4" fill="var(--accent)"/><circle cx="165" cy="166" r="4" fill="var(--accent)"/><circle cx="185" cy="161" r="4" fill="var(--accent)"/>
<path d="M160 150 L160 104 M154 110 L160 104 L166 110" stroke-dasharray="3 3"/>
<circle cx="40" cy="40" r="11" fill="var(--accent)"/><text x="36" y="45" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text>
<circle cx="280" cy="140" r="11" fill="var(--accent)"/><text x="276" y="145" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text>
<text x="56" y="44" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Vidé, en brochette</text>
<text x="226" y="128" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Braises</text>
<text x="170" y="132" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Chaleur</text>
</svg>`,
  legende: "Le poisson vidé sur une broche de bois vert (1) cuit lentement au-dessus des braises, pas des flammes (2).",
  motscles: ["cuisson", "vider", "poisson", "gibier", "brochette", "braises", "hygiène", "parasites"]
},
{
  id: "nourriture-10",
  cat: "nourriture",
  titre: "Conserver la nourriture",
  resume: "Sans réfrigérateur, la viande et le poisson se gâtent en quelques heures, surtout par temps chaud. Le séchage et le fumage permettent de les garder plusieurs jours.",
  urgence: false,
  etapes: [
    "Découpez la chair en lanières fines, de l'épaisseur d'un doigt au maximum, en retirant le gras qui rancit.",
    "Montez un séchoir : une grille de branches vertes posée à hauteur de genou au-dessus d'un petit feu.",
    "Alimentez le feu avec du bois vert ou des feuilles humides non toxiques pour faire beaucoup de fumée et peu de flammes.",
    "Couvrez le séchoir de branches ou d'une toile pour garder la fumée autour de la viande.",
    "Laissez sécher et fumer de 12 à 24 heures : les lanières doivent être dures, cassantes et sèches au cœur.",
    "Par temps sec et ensoleillé, vous pouvez aussi sécher au soleil et au vent, à l'abri des mouches.",
    "Rangez dans un sac propre et sec, suspendu hors de portée des animaux."
  ],
  conseils: [
    "Le sel accélère la conservation : frottez les lanières si vous en avez.",
    "Les fruits comme les figues ou les arbouses se sèchent aussi en tranches fines au soleil.",
    "En été dans le Var, cuisez et mangez une prise fraîche le jour même."
  ],
  erreurs: [
    "Faire des morceaux trop épais : ils pourrissent au centre.",
    "Utiliser du bois résineux ou toxique : goût âcre et risque d'intoxication.",
    "Laisser la nourriture dans l'abri : elle attire rongeurs, sangliers et insectes."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<rect x="0" y="175" width="320" height="25" fill="var(--sol)" stroke="none"/>
<path d="M0 175 L320 175"/>
<path d="M60 175 L160 20 L260 175" fill="var(--fill)" opacity="0.6"/>
<path d="M90 120 L230 120 M80 135 L240 135" stroke-width="3" stroke="var(--sol)"/>
<path d="M110 120 L110 108 M135 120 L135 106 M160 120 L160 108 M185 120 L185 106 M210 120 L210 108" stroke-width="4" stroke="var(--feu)"/>
<path d="M140 175 L160 150 L180 175 Z" fill="var(--feu)"/>
<path d="M150 145 Q140 130 155 110 Q170 90 155 70 M170 145 Q180 125 168 100 Q158 80 172 60" stroke-dasharray="4 4"/>
<circle cx="40" cy="60" r="11" fill="var(--accent)"/><text x="36" y="65" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">1</text>
<circle cx="280" cy="110" r="11" fill="var(--accent)"/><text x="276" y="115" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">2</text>
<circle cx="280" cy="160" r="11" fill="var(--accent)"/><text x="276" y="165" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">3</text>
<text x="20" y="40" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Toile, fumée</text>
<text x="230" y="96" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Lanières</text>
<text x="200" y="192" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Petit feu fumant</text>
</svg>`,
  legende: "Un tipi couvert qui garde la fumée (1), des lanières fines sur une grille (2) au-dessus d'un petit feu qui fume beaucoup (3).",
  motscles: ["conservation", "séchage", "fumage", "viande séchée", "sel", "chaleur"]
},
{
  id: "nourriture-11",
  cat: "nourriture",
  titre: "Réserve de crise à la maison",
  resume: "Gardez chez vous de quoi tenir deux semaines sans courses, sans eau courante ni électricité. Choisissez des aliments que vous mangez déjà et renouvelez-les.",
  urgence: false,
  etapes: [
    "Prévoyez l'eau d'abord : environ 3 litres par personne et par jour pour boire et cuisiner, soit environ 40 litres par personne pour deux semaines.",
    "Stockez des aliments qui se mangent sans cuisson ou avec très peu : conserves de légumes, poisson, plats cuisinés, compotes.",
    "Ajoutez des aliments secs et énergétiques : riz, pâtes, lentilles, flocons d'avoine, biscuits, fruits secs, chocolat, miel.",
    "N'oubliez pas les besoins particuliers : lait infantile, régimes, croquettes des animaux, médicaments habituels.",
    "Ajoutez un ouvre-boîte manuel, un réchaud avec cartouches, des allumettes, une lampe, une radio à piles et des piles.",
    "Rangez le stock au frais, au sec et à l'abri de la lumière, idéalement à l'étage en zone inondable.",
    "Appliquez la règle du premier entré, premier sorti : consommez les plus anciens et remplacez-les au fur et à mesure."
  ],
  conseils: [
    "Notez les dates de péremption sur une feuille scotchée au placard et vérifiez tous les six mois.",
    "Pensez au moral : café, thé, sucreries et jeux de cartes comptent aussi.",
    "Dans le Var, coupures liées aux incendies ou aux inondations peuvent durer plusieurs jours : une réserve évite de prendre la route au pire moment."
  ],
  erreurs: [
    "Acheter des stocks que personne ne mange et qui finissent périmés.",
    "Compter sur le congélateur : il ne tient qu'un ou deux jours sans courant.",
    "Utiliser un réchaud ou un barbecue à l'intérieur : risque d'intoxication au monoxyde de carbone."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<rect x="20" y="20" width="280" height="165" fill="var(--fill)"/>
<path d="M20 75 L300 75 M20 130 L300 130"/>
<rect x="35" y="30" width="24" height="44" rx="5" fill="var(--eau)"/><rect x="65" y="30" width="24" height="44" rx="5" fill="var(--eau)"/><rect x="95" y="30" width="24" height="44" rx="5" fill="var(--eau)"/>
<rect x="140" y="45" width="22" height="29" fill="var(--accent)"/><rect x="168" y="45" width="22" height="29" fill="var(--accent)"/><rect x="196" y="45" width="22" height="29" fill="var(--accent)"/>
<rect x="40" y="90" width="40" height="39" fill="var(--sol)"/><rect x="90" y="90" width="40" height="39" fill="var(--sol)"/>
<rect x="150" y="100" width="30" height="29" fill="var(--vert)"/>
<rect x="40" y="148" width="40" height="36" fill="var(--feu)"/>
<rect x="100" y="152" width="30" height="20" rx="3"/><circle cx="110" cy="162" r="5"/>
<path d="M150 150 L150 184 L170 184 L170 150 Z M155 145 L165 145"/>
<circle cx="255" cy="102" r="26" fill="var(--accent)"/>
<text x="240" y="100" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">14</text>
<text x="236" y="114" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">jours</text>
<text x="230" y="60" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Eau, conserves</text>
<text x="186" y="160" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">Secs, radio</text>
<text x="186" y="176" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none">lampe, réchaud</text>
</svg>`,
  legende: "Un placard de crise pour 14 jours : eau en haut, conserves, aliments secs, réchaud, radio et lampe.",
  motscles: ["réserve", "stock", "provisions", "crise", "deux semaines", "eau", "conserves", "coupure", "kit d'urgence"]
}
);
