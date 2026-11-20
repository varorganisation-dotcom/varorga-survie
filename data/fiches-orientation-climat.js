window.FICHES = window.FICHES || [];
window.FICHES.push(
{
  id: "orientation-01",
  cat: "orientation",
  titre: "Perdu : la méthode STOP",
  resume: "Quand vous êtes perdu, la pire erreur est de marcher au hasard. Arrêtez-vous, réfléchissez, observez puis décidez d'un plan simple.",
  urgence: true,
  etapes: [
    "S comme Stop : arrêtez-vous tout de suite. Asseyez-vous, buvez un peu d'eau et respirez lentement.",
    "T comme Tête froide : réfléchissez. Par où êtes-vous passé ? Quel était le dernier endroit que vous reconnaissiez avec certitude ?",
    "O comme Observer : regardez autour de vous. Relief, rivière, route, lignes électriques, bruits de voitures, heure, météo, état du groupe, eau et nourriture disponibles.",
    "P comme Planifier : choisissez une seule option. Revenir sur vos pas si vous êtes sûr du chemin, ou rester sur place si quelqu'un connaît votre itinéraire.",
    "Si vous restez, rendez-vous visible : vêtement de couleur vive, sifflet, téléphone allumé par moments pour économiser la batterie.",
    "Si la nuit approche, préparez un abri et de la chaleur avant de chercher plus loin.",
    "Appelez le 112 dès que vous avez du réseau, même faible. Un SMS passe parfois quand l'appel ne passe pas."
  ],
  conseils: [
    "Avant de partir, dites toujours à un proche où vous allez et à quelle heure vous comptez rentrer.",
    "Apprenez aux enfants à « faire l'arbre » : s'arrêter près d'un arbre et ne plus bouger en attendant qu'on les trouve.",
    "Suivre une ligne évidente (sentier, piste, ruisseau qui descend) mène souvent vers des habitations, mais attention aux gorges et aux barres rocheuses."
  ],
  erreurs: [
    "Courir ou marcher vite sous l'effet de la panique : vous vous éloignez des secours et vous vous épuisez.",
    "Se séparer du groupe pour aller chercher le chemin chacun de son côté.",
    "Attendre la nuit pour réagir."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="45" cy="80" r="30" fill="var(--feu)"/><circle cx="125" cy="80" r="30" fill="var(--accent)"/><circle cx="205" cy="80" r="30" fill="var(--eau)"/><circle cx="285" cy="80" r="30" fill="var(--vert)"/><path d="M78 80h12M86 75l5 5-5 5M158 80h12M166 75l5 5-5 5M238 80h12M246 75l5 5-5 5"/><path d="M20 150h280" stroke-dasharray="4 6"/></g><g font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="middle"><text x="45" y="86" font-size="20">S</text><text x="125" y="86" font-size="20">T</text><text x="205" y="86" font-size="20">O</text><text x="285" y="86" font-size="20">P</text><text x="45" y="130">S'arrêter</text><text x="125" y="130">Réfléchir</text><text x="205" y="130">Observer</text><text x="285" y="130">Planifier</text><text x="160" y="175">Une étape après l'autre</text></g></svg>`,
  legende: "Les quatre étapes STOP à suivre dans l'ordre dès que vous ne savez plus où vous êtes.",
  motscles: ["perdu", "STOP", "égaré", "panique", "rester sur place", "randonnée"]
},
{
  id: "orientation-02",
  cat: "orientation",
  titre: "Le nord avec une montre",
  resume: "Avec une montre à aiguilles et le soleil, vous trouvez le sud en quelques secondes, donc le nord à l'opposé. La précision est approximative mais suffit pour garder un cap.",
  urgence: false,
  etapes: [
    "Tenez la montre bien à plat dans la main.",
    "Tournez la montre pour que la petite aiguille (celle des heures) pointe vers le soleil.",
    "En France, repérez le 1 en hiver et le 2 en été, à cause du décalage entre l'heure légale et l'heure solaire.",
    "La direction du sud se trouve à mi-chemin entre la petite aiguille et ce chiffre 1 ou 2.",
    "Le nord est exactement à l'opposé du sud. L'est est à droite quand vous regardez le nord.",
    "Repérez un point lointain dans la direction voulue (sommet, pylône, arbre isolé) et marchez vers lui."
  ],
  conseils: [
    "Avec une montre numérique, dessinez un cadran sur un papier ou au sol avec l'heure affichée.",
    "Le matin, le soleil est à l'est. À midi solaire, il est au sud. Le soir, il est à l'ouest.",
    "Refaites la mesure toutes les heures, le soleil bouge."
  ],
  erreurs: [
    "Utiliser la méthode autour de midi : le soleil est haut et l'erreur devient grande.",
    "Oublier qu'elle ne vaut que dans l'hémisphère nord, comme en France."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="130" cy="105" r="75" fill="var(--fill)"/><path d="M130 35v8M130 167v8M60 105h8M192 105h8M165 44l-4 7M95 44l4 7"/><path d="M130 105L80 60" stroke-width="4"/><path d="M130 105l35-61" stroke-dasharray="3 5"/><path d="M130 105L108 177" stroke="var(--feu)" stroke-width="3"/><path d="M130 105L152 33" stroke="var(--eau)" stroke-width="3"/><circle cx="45" cy="30" r="14" fill="var(--accent)"/><path d="M45 8v-4M45 52v4M23 30h-4M67 30h4"/><path d="M64 48l14 10"/><circle cx="130" cy="105" r="4" fill="var(--sol)"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><text x="168" y="42">1 (hiver)</text><text x="56" y="80">heures</text><text x="90" y="194">SUD</text><text x="158" y="28">NORD</text><text x="215" y="90">Aiguille vers</text><text x="215" y="105">le soleil, sud</text><text x="215" y="120">au milieu</text></g></svg>`,
  legende: "La petite aiguille vise le soleil. Le sud est entre elle et le 1 (hiver), le nord à l'opposé.",
  motscles: ["nord", "montre", "soleil", "sud", "direction", "boussole"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/orientation-sans-technologies/" }
},
{
  id: "orientation-03",
  cat: "orientation",
  titre: "Le bâton et l'ombre",
  resume: "Un bâton planté au soleil et deux cailloux suffisent pour tracer une ligne est-ouest fiable, puis le nord.",
  urgence: false,
  etapes: [
    "Plantez un bâton droit d'environ un mètre dans un sol plat et dégagé, au soleil.",
    "Posez un caillou au bout de l'ombre. C'est le point 1, il indique l'ouest.",
    "Attendez 15 à 20 minutes sans bouger le bâton.",
    "Posez un deuxième caillou au nouveau bout de l'ombre. C'est le point 2, il indique l'est.",
    "Tracez une ligne entre les deux cailloux : c'est l'axe ouest-est.",
    "Placez le pied gauche sur le point 1 et le pied droit sur le point 2 : vous regardez vers le nord."
  ],
  conseils: [
    "Plus vous attendez entre les deux marques, plus la ligne est précise.",
    "La méthode marche à toute heure tant qu'il y a une ombre nette.",
    "Gravez une flèche nord au sol pour le groupe avant de repartir."
  ],
  erreurs: [
    "Utiliser un bâton penché ou qui bouge avec le vent.",
    "Choisir un terrain en pente : l'ombre se déforme."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 170l60-60h220l-60 60z" fill="var(--sol)"/><path d="M160 140V40" stroke-width="4"/><path d="M160 140l-70 -10" stroke-dasharray="4 4"/><path d="M160 140l-30 -25" stroke-dasharray="4 4"/><path d="M90 130l140 -40" stroke="var(--accent)" stroke-width="3"/><path d="M110 124L92 60M84 72l8-12 6 13" stroke="var(--eau)" stroke-width="3"/><circle cx="90" cy="130" r="6" fill="var(--fill)"/><circle cx="130" cy="115" r="6" fill="var(--fill)"/><circle cx="270" cy="30" r="14" fill="var(--accent)"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><text x="62" y="152">1 Ouest</text><text x="118" y="104">2 Est</text><text x="235" y="80">axe O-E</text><text x="168" y="52">bâton</text><text x="70" y="55">N</text><text x="20" y="22">Attendre 15 min</text><text x="20" y="38">entre 1 et 2</text></g></svg>`,
  legende: "La première marque de l'ombre est à l'ouest, la seconde à l'est. Le nord est perpendiculaire à cette ligne.",
  motscles: ["bâton", "ombre", "nord", "soleil", "est", "ouest"]
},
{
  id: "orientation-04",
  cat: "orientation",
  titre: "Trouver l'étoile Polaire",
  resume: "La nuit, l'étoile Polaire indique le nord à peu près exactement. On la trouve grâce à la Grande Ourse, la grande « casserole » du ciel.",
  urgence: false,
  etapes: [
    "Cherchez la Grande Ourse : sept étoiles brillantes qui dessinent une casserole avec un manche.",
    "Repérez les deux étoiles qui forment le bord de la casserole, à l'opposé du manche.",
    "Prolongez la ligne qui les relie, du fond vers l'ouverture, environ cinq fois leur écart.",
    "Vous tombez sur une étoile moyennement brillante, assez isolée : c'est la Polaire.",
    "Baissez le regard droit vers l'horizon sous la Polaire : c'est le nord.",
    "Plantez deux bâtons alignés vers elle pour garder la direction au lever du jour."
  ],
  conseils: [
    "La Polaire est le bout du manche de la Petite Ourse, mais celle-ci est peu visible : fiez-vous à la Grande Ourse.",
    "Si la Grande Ourse est cachée, cherchez Cassiopée, un grand W de l'autre côté de la Polaire.",
    "La Polaire ne bouge presque pas pendant la nuit, contrairement aux autres étoiles."
  ],
  erreurs: [
    "Croire que la Polaire est l'étoile la plus brillante du ciel : elle est assez discrète.",
    "Marcher de nuit en terrain inconnu : repérez la direction et attendez le jour si possible."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="320" height="170" fill="var(--eau)" opacity="0.25"/><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M40 150l40-15 35 5 30 15 20 25M145 155l35 -10 8 30-38 5z"/><path d="M180 145l40 -110" stroke="var(--accent)" stroke-dasharray="5 5"/><path d="M225 30v120" stroke-dasharray="2 6"/><path d="M0 185h320" stroke="var(--sol)" stroke-width="4"/></g><g fill="var(--fill)" stroke="currentColor"><circle cx="40" cy="150" r="4"/><circle cx="80" cy="135" r="4"/><circle cx="115" cy="140" r="4"/><circle cx="145" cy="155" r="4"/><circle cx="180" cy="145" r="5"/><circle cx="188" cy="175" r="5"/><circle cx="150" cy="180" r="4"/><circle cx="222" cy="30" r="7" fill="var(--accent)"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><text x="236" y="34">Polaire</text><text x="210" y="100">x 5</text><text x="40" y="120">Grande Ourse</text><text x="232" y="160">NORD</text></g></svg>`,
  legende: "On prolonge le bord de la casserole de la Grande Ourse cinq fois pour trouver la Polaire, au-dessus du nord.",
  motscles: ["étoile polaire", "nuit", "Grande Ourse", "nord", "étoiles", "Cassiopée"]
},
{
  id: "orientation-05",
  cat: "orientation",
  titre: "Carte et boussole",
  resume: "Orienter la carte avec la boussole permet de faire correspondre le terrain et le papier, puis de choisir un cap sûr.",
  urgence: false,
  etapes: [
    "Posez la carte à plat, loin de tout objet métallique, téléphone ou voiture.",
    "Posez la boussole sur la carte, le bord de la plaque le long d'une ligne nord-sud de la carte.",
    "Tournez carte et boussole ensemble jusqu'à ce que l'aiguille rouge pointe vers le haut de la carte (le nord).",
    "La carte est orientée : ce qui est à votre gauche sur la carte est à votre gauche sur le terrain.",
    "Repérez deux ou trois éléments visibles (sommet, lac, village) et retrouvez-les sur la carte pour situer votre position.",
    "Lisez les courbes de niveau : serrées, la pente est raide. Écartées, le terrain est doux."
  ],
  conseils: [
    "En France, l'écart entre le nord de la carte et le nord de la boussole est très faible : vous pouvez le négliger en randonnée.",
    "Une carte IGN au 1:25 000 est idéale à pied : 1 cm sur la carte vaut 250 m sur le terrain.",
    "Rangez la carte dans une pochette plastique, la pluie la détruit vite."
  ],
  erreurs: [
    "Lire la boussole près d'une clôture, d'un bâton de marche métallique ou d'un téléphone.",
    "Forcer le terrain à « coller » à la carte quand rien ne correspond : arrêtez-vous et appliquez la méthode STOP."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="20" width="200" height="160" fill="var(--fill)"/><path d="M60 20v160M140 20v160" stroke-dasharray="3 5"/><path d="M40 150c30-40 60-50 90-30s50 0 70-40" stroke="var(--sol)"/><path d="M50 160c30-30 60-40 85-20s45 5 75-30" stroke="var(--sol)"/><path d="M30 60c40 10 80 0 110 20" stroke="var(--eau)" stroke-width="3"/><rect x="120" y="70" width="60" height="100" rx="6" fill="var(--fill)"/><circle cx="150" cy="105" r="22"/><path d="M150 85l5 20h-10z" fill="var(--feu)"/><path d="M150 125l5-20h-10z" fill="var(--fill)"/><path d="M150 145v18M145 150l5-5 5 5"/><path d="M260 150V40M250 55l10-15 10 15" stroke-width="3"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><text x="250" y="30">N</text><text x="236" y="170">Haut de</text><text x="236" y="185">la carte</text><text x="28" y="40">rivière</text><text x="40" y="196">courbes de niveau</text></g></svg>`,
  legende: "La boussole posée sur la carte : l'aiguille rouge et le haut de la carte pointent tous les deux vers le nord.",
  motscles: ["carte", "boussole", "IGN", "orienter", "courbes de niveau", "nord"]
},
{
  id: "orientation-06",
  cat: "orientation",
  titre: "Marcher droit vers un cap",
  resume: "Sans repère, on tourne en rond sans s'en rendre compte. Prenez un azimut à la boussole et avancez de point de repère en point de repère.",
  urgence: false,
  etapes: [
    "Visez votre destination sur la carte avec la boussole et tournez la bague pour lire l'azimut (un angle en degrés).",
    "Tenez la boussole devant vous, à plat, et tournez sur vous-même jusqu'à ce que l'aiguille soit dans la flèche de la bague.",
    "Regardez droit devant dans l'axe de la flèche de visée et choisissez un repère net : arbre, rocher, poteau.",
    "Marchez jusqu'à ce repère sans regarder la boussole, en contournant les obstacles comme vous voulez.",
    "Arrivé au repère, reprenez la visée et choisissez le repère suivant.",
    "En forêt dense, envoyez un équipier devant : guidez-le à la voix pour qu'il se place dans l'axe, puis rejoignez-le."
  ],
  conseils: [
    "Notez l'azimut sur un papier, ainsi que l'azimut inverse (ajoutez ou retirez 180) pour pouvoir revenir.",
    "Visez volontairement un peu à côté d'une route ou d'une rivière : vous saurez de quel côté tourner en l'atteignant.",
    "Sans boussole, utilisez le soleil ou un relief lointain comme repère principal."
  ],
  erreurs: [
    "Marcher les yeux rivés sur la boussole : on dévie et on trébuche.",
    "Choisir un repère qui ressemble aux autres (un arbre parmi cent arbres identiques)."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M30 175L290 30" stroke="var(--accent)" stroke-dasharray="6 6"/><circle cx="30" cy="175" r="8" fill="var(--feu)"/><path d="M110 112v20M95 112c0-20 30-20 30 0s-30 18-30 0" fill="var(--vert)"/><path d="M175 85c5-15 30-15 35 0z" fill="var(--sol)"/><path d="M240 30v30M240 30l20 8-20 8" fill="var(--feu)"/><path d="M150 105c-20 20 20 25 0 0" stroke-dasharray="2 4"/><path d="M80 160c20 15 60-30 30-40" stroke-dasharray="2 6"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><circle cx="110" cy="150" r="9" fill="var(--fill)" stroke="currentColor"/><text x="106" y="154">1</text><circle cx="192" cy="100" r="9" fill="var(--fill)" stroke="currentColor"/><text x="188" y="104">2</text><circle cx="262" cy="70" r="9" fill="var(--fill)" stroke="currentColor"/><text x="258" y="74">3</text><text x="20" y="196">Départ</text><text x="200" y="22">Arrivée</text><text x="200" y="160">Repère après</text><text x="200" y="175">repère</text></g></svg>`,
  legende: "On avance sur l'azimut en visant un repère après l'autre : arbre, rocher, puis l'arrivée.",
  motscles: ["azimut", "cap", "marcher droit", "boussole", "repère", "tourner en rond"]
},
{
  id: "orientation-07",
  cat: "orientation",
  titre: "Estimer distance et lumière",
  resume: "Savoir combien de temps il reste avant la nuit et quelle distance vous parcourez évite d'être surpris par l'obscurité loin de tout.",
  urgence: false,
  etapes: [
    "Tendez le bras face au soleil, main à plat, doigts serrés à l'horizontale, le petit doigt posé sur l'horizon.",
    "Comptez combien de doigts tiennent entre l'horizon et le bas du soleil, en empilant les mains si besoin.",
    "Chaque doigt vaut environ 15 minutes de soleil : une main de quatre doigts, environ une heure.",
    "Pour la distance, comptez vos doubles pas (chaque fois que le pied droit touche le sol) sur 100 m connus avant de partir.",
    "En moyenne, un adulte fait 60 à 70 doubles pas pour 100 m sur terrain plat. Faites un nœud sur une ficelle tous les 100 m.",
    "Pour le temps de marche, comptez environ 4 km par heure sur le plat et ajoutez une heure pour chaque 300 à 400 m de montée."
  ],
  conseils: [
    "Gardez au moins une heure de marge avant la nuit pour monter un abri et faire du feu si besoin.",
    "En montée, en descente raide ou dans les broussailles, vos pas raccourcissent : comptez plus de pas pour 100 m.",
    "En forêt et en fond de vallon, l'obscurité arrive plus tôt qu'en terrain découvert."
  ],
  erreurs: [
    "Regarder le soleil en face : visez à côté et seulement d'un coup d'œil.",
    "Se fier au temps « à vol d'oiseau » : les détours et le relief allongent beaucoup la marche."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 170h320" stroke="var(--sol)" stroke-width="4"/><path d="M0 170l60-30 50 30M200 170l60-40 60 40" fill="var(--sol)"/><circle cx="160" cy="58" r="18" fill="var(--accent)"/><rect x="120" y="80" width="80" height="88" rx="8" fill="var(--fill)"/><path d="M120 102h80M120 124h80M120 146h80"/><path d="M200 100c20 0 30 10 30 30" /><path d="M60 150l60-40" stroke-dasharray="4 4"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><text x="210" y="95">1 doigt</text><text x="210" y="110">= 15 min</text><text x="210" y="150">4 doigts</text><text x="210" y="165">= 1 heure</text><text x="10" y="195">bras tendu</text><text x="140" y="196">horizon</text><text x="186" y="40">soleil</text></g></svg>`,
  legende: "La main tendue, posée sur l'horizon, mesure le temps restant avant le coucher : un doigt vaut environ un quart d'heure.",
  motscles: ["coucher du soleil", "main", "doigts", "distance", "pas", "heure"]
},
{
  id: "orientation-08",
  cat: "orientation",
  titre: "Signaux de détresse",
  resume: "Tout signal répété trois fois, ou six fois par minute en montagne, signifie « j'ai besoin d'aide ». Des signes géants au sol se voient d'un avion.",
  urgence: true,
  etapes: [
    "Appelez d'abord le 112 si vous avez du réseau. Restez là où vous êtes une fois l'alerte donnée.",
    "Répétez votre signal trois fois : trois coups de sifflet, trois éclats de lampe, trois feux ou trois cris, puis une pause.",
    "En montagne, le signal de détresse est six signaux par minute (un toutes les dix secondes), une minute de pause, puis on recommence.",
    "En morse, SOS s'écrit trois courts, trois longs, trois courts. Faites-le avec une lampe la nuit.",
    "Dans une clairière ou sur une plage, tracez au sol des signes d'au moins 3 m de long avec des pierres, des branches ou en creusant.",
    "V veut dire « besoin d'aide ». X veut dire « besoin d'aide médicale ». Une flèche indique la direction dans laquelle vous êtes parti.",
    "Choisissez des couleurs qui contrastent avec le sol : branches sombres sur la neige, vêtements vifs sur l'herbe."
  ],
  conseils: [
    "Le jour, de la fumée épaisse (feuilles vertes sur un feu) se voit mieux. La nuit, une flamme vive se voit mieux.",
    "Si vous partez, laissez une flèche au sol et un message daté sous une pierre visible.",
    "Gardez la batterie du téléphone : éteignez-le et rallumez-le à heures fixes."
  ],
  erreurs: [
    "Allumer un feu de signal en période de risque d'incendie ou par vent fort, surtout dans le Var en été.",
    "Faire des signes trop petits ou cachés sous les arbres : personne ne les verra d'en haut."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="40" r="6" fill="currentColor"/><circle cx="50" cy="40" r="6" fill="currentColor"/><circle cx="70" cy="40" r="6" fill="currentColor"/><path d="M95 40h22M130 40h22M165 40h22" stroke-width="8"/><circle cx="210" cy="40" r="6" fill="currentColor"/><circle cx="230" cy="40" r="6" fill="currentColor"/><circle cx="250" cy="40" r="6" fill="currentColor"/><rect x="10" y="95" width="300" height="80" rx="6" fill="var(--vert)"/><path d="M40 110l25 50 25-50M120 110l50 50M170 110l-50 50M200 135h80M260 118l20 17-20 17" stroke-width="6"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><text x="110" y="70">SOS en morse</text><text x="30" y="192">Aide</text><text x="110" y="192">Médecin</text><text x="200" y="192">Partis par là</text></g></svg>`,
  legende: "En haut, SOS en morse. En bas, les signes au sol : V pour l'aide, X pour un médecin, flèche pour la direction prise.",
  motscles: ["SOS", "détresse", "signal", "trois", "signes au sol", "morse", "secours"]
},
{
  id: "orientation-09",
  cat: "orientation",
  titre: "Miroir et sifflet",
  resume: "Un éclat de miroir au soleil se voit à des kilomètres et un sifflet porte bien plus loin que la voix. Ce sont les deux meilleurs outils pour se faire repérer.",
  urgence: false,
  etapes: [
    "Prenez un miroir de signalisation, ou à défaut un miroir de poche, un CD, une boîte de conserve bien brillante ou l'écran du téléphone.",
    "Tendez un bras vers l'avion, le bateau ou les secouristes et faites un V avec deux doigts autour de la cible.",
    "Tenez le miroir près de l'œil et orientez-le pour que la tache de lumière tombe sur vos doigts.",
    "Balayez lentement la tache sur la cible en passant dans le V. Faites des séries de trois éclats.",
    "Pour le sifflet, soufflez trois coups longs et forts, puis faites une pause d'une minute et recommencez.",
    "Continuez jusqu'à ce qu'on vous réponde ou qu'on vous fasse signe que vous êtes repéré."
  ],
  conseils: [
    "Accrochez un sifflet à la bretelle du sac de chaque enfant et apprenez-lui à s'en servir.",
    "Balayez l'horizon avec le miroir même sans rien voir : un éclat peut être repéré de loin.",
    "Le sifflet demande peu d'effort, contrairement aux cris qui épuisent et cassent la voix."
  ],
  erreurs: [
    "Diriger l'éclat longtemps dans le cockpit d'un pilote proche : cela peut l'éblouir. Arrêtez dès qu'il vous a vu.",
    "Crier pendant des heures au lieu d'économiser son énergie."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="35" r="16" fill="var(--accent)"/><path d="M55 45l45 85" stroke="var(--accent)" stroke-dasharray="4 4"/><rect x="95" y="120" width="26" height="34" rx="3" fill="var(--eau)" transform="rotate(-25 108 137)"/><path d="M115 125l150-90" stroke="var(--accent)" stroke-width="3"/><path d="M180 92l15-25M188 96l18-21"/><path d="M250 40l30-10 10 6-30 10zM265 35l-5-12M268 38l8 10" fill="var(--fill)"/><rect x="200" y="150" width="40" height="18" rx="9" fill="var(--feu)"/><path d="M240 159h10M255 150l15-6M255 159h18M255 168l15 6"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><text x="60" y="180">miroir</text><text x="160" y="118">V des doigts</text><text x="250" y="65">avion</text><text x="200" y="194">sifflet : 3 coups</text></g></svg>`,
  legende: "Le reflet du soleil passe par le V des doigts vers l'avion. Le sifflet complète avec trois coups.",
  motscles: ["miroir", "sifflet", "signal", "avion", "reflet", "se faire repérer"]
},
{
  id: "orientation-10",
  cat: "orientation",
  titre: "Signaux à un hélicoptère",
  resume: "Les deux bras levés en Y veulent dire « oui, nous avons besoin d'aide ». Un bras levé et un bras baissé en N veulent dire « non, tout va bien ».",
  urgence: true,
  etapes: [
    "Placez-vous dans un endroit dégagé, face à l'hélicoptère, bien visible.",
    "Besoin d'aide : levez les deux bras en V au-dessus de la tête, votre corps forme la lettre Y (Yes).",
    "Pas besoin d'aide : un bras levé en biais vers le haut, l'autre en biais vers le bas, votre corps forme un N (No).",
    "Gardez la position sans bouger les bras dans tous les sens : un geste amical de la main peut être pris pour un « tout va bien ».",
    "Avant l'arrivée, rangez ou tenez fermement tout ce qui peut s'envoler : sacs, couvertures de survie, tentes, chapeaux.",
    "Quand l'hélicoptère se pose ou descend un secouriste, accroupissez-vous, protégez vos yeux et attendez son signe pour approcher.",
    "Approchez toujours par l'avant, dans le champ de vision du pilote, jamais par l'arrière où tourne le rotor de queue."
  ],
  conseils: [
    "Pour se rappeler : Y comme Yes (oui), N comme No (non).",
    "Une veste de couleur vive tenue à bout de bras rend le geste plus visible.",
    "Le souffle du rotor est très violent : protégez les blessés et les enfants."
  ],
  erreurs: [
    "Faire « coucou » avec une main : le pilote peut comprendre que vous n'avez besoin de rien.",
    "Courir vers l'appareil ou se tenir sur une pente au-dessus de lui."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="85" cy="70" r="12" fill="var(--fill)"/><path d="M85 82v50M85 132l-15 40M85 132l15 40M85 92l-30-50M85 92l30-50" stroke="var(--vert)" stroke-width="5"/><circle cx="235" cy="70" r="12" fill="var(--fill)"/><path d="M235 82v50M235 132l-15 40M235 132l15 40M235 92l35-35M235 92l-35 35" stroke="var(--feu)" stroke-width="5"/><path d="M10 175h300" stroke="var(--sol)"/></g><g font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="middle"><text x="85" y="22" font-size="18">Y</text><text x="235" y="22" font-size="18">N</text><text x="85" y="194">OUI, aide</text><text x="235" y="194">NON, ça va</text></g></svg>`,
  legende: "À gauche, les bras en Y pour demander de l'aide. À droite, le N pour dire que tout va bien.",
  motscles: ["hélicoptère", "Y", "N", "bras", "secours", "oui", "non"]
},
{
  id: "climat-01",
  cat: "climat",
  titre: "Hypothermie",
  resume: "Le corps se refroidit dangereusement, même au-dessus de zéro avec du vent et des habits mouillés. Isolez, séchez, couvrez et réchauffez le tronc, sans brusquer.",
  urgence: true,
  etapes: [
    "Reconnaissez les signes : frissons forts, mains maladroites, paroles confuses, fatigue, puis arrêt des frissons, ce qui est un signe grave.",
    "Appelez le 15 ou le 112 si la personne est confuse, somnolente ou ne frissonne plus.",
    "Mettez-la à l'abri du vent et de la pluie, et isolez-la du sol avec un sac, des branches ou un tapis de sol.",
    "Retirez les vêtements mouillés un par un et remplacez-les par des vêtements secs, ou enveloppez-la dans une couverture.",
    "Couvrez la tête et le cou. Ajoutez une couverture de survie par-dessus les couches.",
    "Réchauffez le tronc en douceur : bouillotte ou bouteille d'eau chaude entourée d'un tissu sous les aisselles et sur le ventre, ou contact peau à peau.",
    "Si elle est bien consciente et avale sans difficulté, donnez une boisson chaude et sucrée.",
    "Manipulez-la doucement et gardez-la allongée si elle est très froide. Surveillez sa respiration."
  ],
  conseils: [
    "Prévenez plutôt que guérir : système de couches, bonnet, gants, et vêtements de rechange dans un sac étanche.",
    "La couverture de survie garde mieux la chaleur si elle est sous une couche de vêtement ou de couverture.",
    "Mangez et buvez régulièrement par temps froid : le corps a besoin de carburant pour chauffer."
  ],
  erreurs: [
    "Donner de l'alcool : il donne une fausse sensation de chaleur et aggrave la perte de chaleur.",
    "Frotter vigoureusement les membres ou faire marcher une personne très froide.",
    "Chauffer directement contre un feu ou avec de l'eau brûlante : risque de brûlure."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="30" y="140" width="260" height="14" rx="4" fill="var(--sol)"/><circle cx="60" cy="118" r="16" fill="var(--fill)"/><path d="M44 112c4-14 28-14 32 0z" fill="var(--feu)"/><path d="M80 105h190c10 0 15 10 15 20s-5 15-15 15H80z" fill="var(--eau)"/><rect x="140" y="112" width="40" height="18" rx="6" fill="var(--accent)"/><path d="M30 40h40M20 55h50M35 70h30"/><path d="M120 60c10 10 30 10 40 0M180 60c10 10 30 10 40 0" stroke-dasharray="3 4"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><circle cx="150" cy="178" r="9" fill="var(--fill)" stroke="currentColor"/><text x="146" y="182">1</text><text x="164" y="182">isoler du sol</text><circle cx="60" cy="88" r="9" fill="var(--fill)" stroke="currentColor"/><text x="56" y="92">2</text><text x="10" y="30">vent, pluie</text><circle cx="250" cy="90" r="9" fill="var(--fill)" stroke="currentColor"/><text x="246" y="94">3</text><text x="200" y="76">couvrir</text><text x="140" y="104">chaleur</text></g></svg>`,
  legende: "La victime est isolée du sol (1), la tête couverte (2), le corps enveloppé (3), une source de chaleur douce sur le tronc.",
  motscles: ["hypothermie", "froid", "frissons", "couverture de survie", "réchauffer"]
},
{
  id: "climat-02",
  cat: "climat",
  titre: "Gelures",
  resume: "Le froid peut geler la peau et les tissus des doigts, des orteils, du nez et des oreilles. Réchauffez doucement dans l'eau tiède, jamais en frottant.",
  urgence: true,
  etapes: [
    "Reconnaissez les signes : peau blanche, grise ou cireuse, dure, insensible, avec des fourmillements puis plus aucune sensation.",
    "Mettez la personne à l'abri et traitez d'abord une éventuelle hypothermie, qui est plus grave.",
    "Retirez bagues, montre et chaussures serrées avant que la zone ne gonfle.",
    "Ne réchauffez que si la zone ne risque plus de geler à nouveau : un regel abîme davantage les tissus.",
    "Plongez la zone dans de l'eau tiède entre 37 et 39 °C (agréable au coude) pendant 30 minutes environ.",
    "Séchez en tamponnant, protégez avec un pansement sec et léger, en séparant les doigts avec de la gaze.",
    "Appelez le 15 pour tout avis : une gelure profonde demande un traitement à l'hôpital, souvent en urgence."
  ],
  conseils: [
    "En attendant l'eau tiède, mettez les mains sous les aisselles ou les pieds contre le ventre d'un équipier.",
    "Le réchauffement est douloureux : c'est normal, rassurez la personne.",
    "Bougez les doigts et les orteils souvent par grand froid et gardez les chaussettes sèches."
  ],
  erreurs: [
    "Frotter avec de la neige ou avec les mains : cela détruit la peau.",
    "Réchauffer près d'un feu, d'un radiateur ou d'un sèche-cheveux : la zone insensible brûle sans qu'on le sente.",
    "Percer les cloques qui apparaissent après le réchauffement.",
    "Marcher sur des pieds dégelés si on peut l'éviter."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M40 110h170l-15 70H55z" fill="var(--fill)"/><path d="M45 130h160l-10 50H55z" fill="var(--eau)"/><path d="M100 40v95M115 30v105M130 35v100M145 45v90" stroke-width="10"/><path d="M85 80l15 20" stroke-width="10"/><rect x="240" y="40" width="20" height="110" rx="10" fill="var(--fill)"/><circle cx="250" cy="160" r="16" fill="var(--feu)"/><path d="M250 150V80" stroke="var(--feu)" stroke-width="6"/><path d="M240 70h-8M240 100h-8M240 130h-8"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><text x="270" y="74">39</text><text x="270" y="104">37</text><text x="60" y="196">eau tiède 30 min</text><text x="160" y="30">pas de frottement</text></g></svg>`,
  legende: "Les doigts gelés trempent dans une eau tiède de 37 à 39 °C, sans frotter.",
  motscles: ["gelure", "froid", "doigts", "orteils", "neige", "réchauffer"]
},
{
  id: "climat-03",
  cat: "climat",
  titre: "Coup de chaleur",
  resume: "Le coup de chaleur est une urgence vitale : la personne a très chaud, la peau brûlante et devient confuse. Appelez le 15 et refroidissez-la immédiatement.",
  urgence: true,
  etapes: [
    "Reconnaissez les signes : peau très chaude, rouge, parfois sèche, maux de tête, nausées, propos incohérents, malaise ou convulsions.",
    "Appelez le 15 ou le 112 sans attendre.",
    "Mettez la personne à l'ombre ou dans une pièce fraîche, allongée, et retirez un maximum de vêtements.",
    "Mouillez tout le corps avec de l'eau fraîche (linge, brumisateur, bouteille) et faites de l'air avec un éventail ou un carton.",
    "Placez des linges froids ou des poches de glace entourées d'un tissu sur le cou, sous les aisselles et à l'aine.",
    "Si elle est consciente et avale bien, faites-la boire de l'eau fraîche par petites gorgées.",
    "Si elle perd connaissance et respire, mettez-la en position latérale de sécurité (PLS) et continuez à la refroidir."
  ],
  conseils: [
    "Les enfants, les personnes âgées et les travailleurs en plein air sont les plus exposés pendant les canicules.",
    "Un simple coup de chaleur commence souvent par crampes, fatigue et soif : réagissez tôt.",
    "Lors d'une vigilance canicule, prenez des nouvelles de vos voisins âgés ou isolés."
  ],
  erreurs: [
    "Donner du paracétamol ou de l'aspirine : ils ne font pas baisser ce type de fièvre.",
    "Forcer à boire une personne confuse ou inconsciente.",
    "Laisser un enfant ou un animal dans une voiture, même quelques minutes."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 60c40-40 240-40 280 0z" fill="var(--vert)"/><path d="M160 30v20"/><path d="M20 150h280" stroke="var(--sol)" stroke-width="4"/><circle cx="60" cy="128" r="14" fill="var(--fill)"/><path d="M76 120h180c8 0 12 6 12 12s-4 12-12 12H76z" fill="var(--fill)"/><circle cx="90" cy="128" r="6" fill="var(--eau)"/><circle cx="125" cy="122" r="6" fill="var(--eau)"/><circle cx="175" cy="136" r="6" fill="var(--eau)"/><path d="M110 80c5 8 5 16 0 24M140 80c5 8 5 16 0 24M170 80c5 8 5 16 0 24" stroke="var(--eau)"/><path d="M250 75l30-15v40z" fill="var(--accent)"/><path d="M240 85c-5 5-5 15 0 20M228 82c-8 8-8 20 0 26"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><text x="130" y="48">ombre</text><text x="40" y="175">froid : cou, aisselles, aine</text><text x="200" y="175">appelez le 15</text><text x="100" y="74">mouiller</text><text x="250" y="114">éventer</text></g></svg>`,
  legende: "La victime est allongée à l'ombre, mouillée, éventée, avec du froid au cou, aux aisselles et à l'aine.",
  motscles: ["coup de chaleur", "canicule", "chaleur", "insolation", "refroidir", "15"]
},
{
  id: "climat-04",
  cat: "climat",
  titre: "Se protéger du soleil",
  resume: "En Provence, l'été, le soleil et la chaleur fatiguent vite. Couvrez-vous, buvez souvent et adaptez vos horaires pour éviter les heures les plus chaudes.",
  urgence: false,
  etapes: [
    "Buvez régulièrement, sans attendre la soif : environ un demi-litre à un litre par heure d'effort au chaud.",
    "Portez un chapeau à larges bords, des vêtements amples et clairs, et des lunettes de soleil.",
    "Appliquez de la crème solaire toutes les deux heures et après chaque baignade.",
    "Évitez l'effort entre midi et 16 heures. Marchez tôt le matin ou en fin de journée.",
    "Faites des pauses à l'ombre et mouillez votre nuque, votre visage et vos avant-bras.",
    "Sans ombre, fabriquez-en avec une bâche, une couverture de survie ou un vêtement tendu entre des bâtons.",
    "À la maison, fermez volets et fenêtres le jour, aérez la nuit quand il fait plus frais."
  ],
  conseils: [
    "Mangez salé (fruits secs, biscuits salés) pendant un effort long : la sueur fait perdre du sel.",
    "Une urine foncée signifie que vous ne buvez pas assez.",
    "En été dans le Var, vérifiez avant de partir si l'accès aux massifs forestiers est autorisé ce jour-là."
  ],
  erreurs: [
    "Boire de l'alcool ou beaucoup de boissons très sucrées pour se rafraîchir.",
    "Partir en randonnée l'après-midi en plein été avec une seule petite bouteille d'eau.",
    "Croire que le vent protège : il rafraîchit la peau mais le coup de soleil et la déshydratation continuent."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="45" r="20" fill="var(--accent)"/><path d="M50 15V5M50 85V75M20 45H10M90 45H80M28 23l-7-7M72 67l7 7M72 23l7-7"/><path d="M110 90c10-30 60-30 70 0zM100 90h90" fill="var(--sol)"/><circle cx="145" cy="105" r="14" fill="var(--fill)"/><path d="M125 120h40l10 60h-60z" fill="var(--fill)"/><rect x="185" y="125" width="16" height="40" rx="4" fill="var(--eau)"/><circle cx="260" cy="120" r="40" fill="var(--fill)"/><path d="M260 120V88M260 120l26 12"/><path d="M260 80a40 40 0 0 1 40 40" stroke="var(--feu)" stroke-width="6"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><text x="100" y="196">chapeau, habits clairs</text><text x="206" y="150">eau</text><text x="236" y="178">éviter 12h-16h</text></g></svg>`,
  legende: "Chapeau, vêtements clairs et eau à portée, en évitant l'effort entre midi et 16 heures.",
  motscles: ["soleil", "chaleur", "crème solaire", "chapeau", "boire", "ombre", "été"]
},
{
  id: "climat-05",
  cat: "climat",
  titre: "Orage et foudre",
  resume: "Si vous entendez le tonnerre, la foudre peut vous atteindre. Quittez les sommets, l'eau et les arbres isolés, et abritez-vous dans un bâtiment ou une voiture.",
  urgence: true,
  etapes: [
    "Comptez les secondes entre l'éclair et le tonnerre, et divisez par 3 : vous obtenez la distance en kilomètres.",
    "Moins de 30 secondes, soit moins de 10 km : mettez-vous à l'abri tout de suite.",
    "Le meilleur abri est un bâtiment fermé ou une voiture fermée (toit en métal), vitres remontées.",
    "En montagne, quittez crêtes, sommets et câbles. Descendez vers un terrain plus bas et dégagé.",
    "Éloignez-vous de l'eau (lac, mer, rivière), des arbres isolés, des pylônes, des clôtures et des objets métalliques.",
    "Si vous êtes surpris dehors sans abri, accroupissez-vous pieds joints, tête baissée, mains sur les oreilles, sur un sac posé au sol si possible.",
    "En groupe, écartez-vous d'au moins 10 m les uns des autres.",
    "Attendez 30 minutes après le dernier coup de tonnerre avant de repartir."
  ],
  conseils: [
    "En Provence, les orages d'été éclatent souvent l'après-midi : partez tôt et soyez redescendu avant midi.",
    "Une personne foudroyée ne garde pas d'électricité : on peut la toucher et la secourir tout de suite (appel au 15, massage cardiaque si elle ne respire pas).",
    "Cheveux qui se dressent ou grésillement dans l'air : la foudre est imminente, accroupissez-vous."
  ],
  erreurs: [
    "S'abriter sous un arbre isolé ou sous un rocher en surplomb.",
    "S'allonger à plat sur le sol : le courant se propage dans le sol.",
    "Rester dans l'eau ou sur un bateau à découvert pendant l'orage."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M40 50c0-20 30-25 40-10 10-15 40-10 40 10 15 0 15 20 0 20H40c-15 0-15-20 0-20z" fill="var(--fill)"/><path d="M80 70l-12 30h15l-12 30" stroke="var(--accent)" stroke-width="4"/><path d="M0 175h320" stroke="var(--sol)" stroke-width="4"/><path d="M60 175v-35M45 145c0-25 30-25 30 0s-30 25-30 0" fill="var(--vert)"/><path d="M35 120l50 50M85 120l-50 50" stroke="var(--feu)" stroke-width="4"/><rect x="190" y="160" width="40" height="12" rx="3" fill="var(--sol)"/><circle cx="210" cy="118" r="10" fill="var(--fill)"/><path d="M200 130c-6 10-4 25 10 28 14-3 16-18 10-28z" fill="var(--vert)"/><path d="M200 112c-4 4-4 10 0 14M220 112c4 4 4 10 0 14"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><text x="20" y="196">sous un arbre : non</text><text x="170" y="196">accroupi, pieds joints</text><text x="150" y="40">secondes / 3</text><text x="150" y="56">= distance en km</text></g></svg>`,
  legende: "Jamais sous un arbre isolé. Sans abri, accroupi pieds joints sur un sac. Les secondes divisées par trois donnent la distance.",
  motscles: ["orage", "foudre", "éclair", "tonnerre", "montagne", "abri"]
},
{
  id: "climat-06",
  cat: "climat",
  titre: "Tempête de neige",
  resume: "Dans une tempête de neige, on perd vite ses repères et sa chaleur. Restez à l'abri, dans le véhicule si vous êtes sur la route, et faites-vous repérer.",
  urgence: false,
  etapes: [
    "Avant de partir, vérifiez la météo et l'état des routes. En vigilance neige, reportez le trajet si possible.",
    "Si vous êtes bloqué en voiture, restez dedans : c'est un abri visible et protégé du vent.",
    "Appelez le 112 et donnez votre position (route, point kilométrique, dernier village traversé).",
    "Dégagez régulièrement le pot d'échappement de la neige, sinon les gaz toxiques entrent dans l'habitacle.",
    "Faites tourner le moteur environ 10 minutes par heure pour chauffer, en entrouvrant légèrement une vitre côté abrité du vent.",
    "Couvrez-vous de toutes les couches disponibles, serrez-vous les uns contre les autres et bougez les bras et les jambes de temps en temps.",
    "Allumez les feux de détresse quand le moteur tourne et accrochez un tissu de couleur à l'antenne ou à la portière.",
    "À pied, ne partez pas dans le blanc. Abritez-vous derrière un rocher, un mur ou creusez un trou dans la neige à l'abri du vent."
  ],
  conseils: [
    "Gardez dans la voiture en hiver : couverture, eau, en-cas, lampe, pelle pliante, chargeur et vêtements chauds.",
    "Ne laissez pas le réservoir descendre sous la moitié pendant la saison froide.",
    "Mangez un peu et buvez régulièrement : le corps produit sa chaleur avec ce que vous lui donnez."
  ],
  erreurs: [
    "Laisser le moteur tourner en continu avec le pot d'échappement bouché par la neige.",
    "Quitter la voiture pour chercher de l'aide à pied dans la tempête.",
    "Manger de la neige pour s'hydrater : elle refroidit le corps. Faites-la fondre avant de la boire."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 160c60-15 260-15 320 0v40H0z" fill="var(--fill)"/><path d="M70 150v-30l25-25h90l30 25h35v30z" fill="var(--eau)"/><path d="M105 100h30v20h-45zM145 100h35l20 20h-55z" fill="var(--fill)"/><circle cx="105" cy="152" r="14" fill="var(--sol)"/><circle cx="220" cy="152" r="14" fill="var(--sol)"/><path d="M250 140h20" stroke-width="6"/><path d="M275 140c10-5 15-15 10-25" stroke-dasharray="3 4"/><path d="M160 80l5-12M170 82l8-10" stroke="var(--accent)"/><path d="M20 30l10 10M30 30l-10 10M60 60l8 8M68 60l-8 8M250 30l8 8M258 30l-8 8M200 50l8 8M208 50l-8 8"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><circle cx="270" cy="105" r="9" fill="var(--fill)" stroke="currentColor"/><text x="266" y="109">1</text><text x="236" y="190">dégager l'échappement</text><circle cx="165" cy="60" r="9" fill="var(--fill)" stroke="currentColor"/><text x="161" y="64">2</text><text x="182" y="64">vitre entrouverte</text><text x="10" y="190">moteur 10 min par heure</text></g></svg>`,
  legende: "Bloqué en voiture : dégagez le pot d'échappement (1), entrouvrez une vitre (2), moteur 10 minutes par heure.",
  motscles: ["neige", "tempête", "blizzard", "voiture bloquée", "hiver", "froid"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/comment-se-preparer-a-une-tempete-de-neige-survivre-a-la-tempete-de-neige/" }
},
{
  id: "climat-07",
  cat: "climat",
  titre: "Vent fort et mistral",
  resume: "Le mistral souffle du nord, sec et souvent violent. Il fait tomber branches et arbres, refroidit le corps et attise les incendies de forêt.",
  urgence: false,
  etapes: [
    "Consultez la vigilance vent avant une sortie en forêt, en mer ou en montagne.",
    "En forêt, éloignez-vous des arbres morts, des grosses branches et des pins penchés. Ne vous abritez pas dessous.",
    "En crête, restez bas, écartez les pieds et éloignez-vous des bords de falaise : une rafale peut déséquilibrer.",
    "Ajoutez une couche coupe-vent, un bonnet et des gants : le vent rend le froid ressenti bien plus fort.",
    "En mer ou sur un lac, rentrez au port ou au bord dès que le vent se lève. Le mistral pousse vers le large.",
    "À la maison, rentrez ou attachez les objets qui peuvent s'envoler : parasols, tables, poubelles, bâches.",
    "Signalez immédiatement au 18 ou au 112 toute fumée aperçue : par mistral, un feu avance très vite."
  ],
  conseils: [
    "Le mistral dure souvent trois jours ou plus, avec un ciel très bleu et un air sec.",
    "Il assèche la végétation et les lèvres : buvez et protégez votre peau.",
    "En voiture, réduisez la vitesse et tenez fermement le volant aux sorties de tunnel et sur les ponts."
  ],
  erreurs: [
    "Faire un feu, un barbecue ou fumer en pleine nature par jour de mistral.",
    "Monter une tente sous un arbre ou au sommet d'une crête exposée.",
    "Sortir en kayak ou en paddle en pensant rester près du bord."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 170h320" stroke="var(--sol)" stroke-width="4"/><path d="M20 40h70c10 0 10-15 0-15M20 60h100M30 80h60c10 0 10 15 0 15" stroke="var(--eau)" stroke-width="3"/><path d="M110 170v-60M90 120c0-35 40-35 40 0s-40 30-40 0" fill="var(--vert)"/><path d="M150 168l50-30M190 140l10-15M175 150l15-5" stroke="var(--sol)" stroke-width="4"/><path d="M240 170c-10-20 10-30 5-50 15 10 30 30 20 50" fill="var(--feu)"/><path d="M265 170c-5-15 10-20 8-35 10 10 15 25 10 35" fill="var(--accent)"/><path d="M280 110h30M300 100l10 10-10 10" stroke="var(--feu)"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><text x="20" y="18">mistral du nord</text><text x="140" y="190">chute d'arbres</text><text x="230" y="95">feu attisé</text></g></svg>`,
  legende: "Le mistral arrive du nord, fait tomber des arbres et pousse les flammes d'un incendie.",
  motscles: ["mistral", "vent", "rafales", "tempête", "Provence", "incendie"]
},
{
  id: "climat-08",
  cat: "climat",
  titre: "Lire le ciel",
  resume: "Les nuages et quelques signes simples annoncent souvent un changement de temps quelques heures à l'avance. Ils complètent la prévision, ils ne la remplacent pas.",
  urgence: false,
  etapes: [
    "Regardez le ciel plusieurs fois par jour et notez comment il évolue, c'est le changement qui compte.",
    "Des filaments blancs très hauts (cirrus) qui s'épaississent en voile, avec un halo autour du soleil ou de la lune : la pluie peut arriver dans les 12 à 24 heures.",
    "Des petits nuages blancs et plats bien séparés (cumulus de beau temps) : temps stable.",
    "Des cumulus qui gonflent vers le haut en tours le matin : risque d'orage l'après-midi.",
    "Un nuage très haut et sombre en forme d'enclume (cumulonimbus) : orage proche, mettez-vous à l'abri.",
    "Un voile gris bas et uniforme qui descend : pluie fine ou brouillard probable.",
    "Un vent qui tourne brusquement ou forcit, et une chute de température soudaine, annoncent souvent un orage ou un front."
  ],
  conseils: [
    "Rosée abondante le matin : en général signe de nuit claire et de beau temps.",
    "Le dicton « ciel rouge le soir, espoir » se vérifie souvent, le rouge le matin est moins bon signe.",
    "Avant de partir, consultez toujours la prévision officielle et les vigilances."
  ],
  erreurs: [
    "Partir loin en montagne l'après-midi quand les cumulus grossissent depuis le matin.",
    "Ne se fier qu'aux dictons sans regarder la prévision."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 35c20-10 40-10 60-15M20 50c25-8 45-6 65-14M30 62c15-5 30-4 45-10"/><path d="M110 140c-10 0-10-15 0-15 0-12 20-15 25-5 8-10 25-5 25 8 10 0 10 12 0 12z" fill="var(--fill)"/><path d="M215 165c-15 0-15-25 0-25 0-30 15-50 20-75-25 0-30-15-10-15h80c20 0 15 15-10 15 5 25 20 45 20 75 15 0 15 25 0 25z" fill="var(--fill)"/><path d="M240 170l-8 15M260 170l-8 15M280 170l-8 15" stroke="var(--eau)"/><path d="M250 120l-8 18h10l-8 18" stroke="var(--accent)" stroke-width="3"/><path d="M0 190h320" stroke="var(--sol)" stroke-width="4"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><text x="15" y="85">cirrus :</text><text x="15" y="100">pluie dans 24 h</text><text x="95" y="160">cumulus :</text><text x="95" y="175">beau temps</text><text x="200" y="35">cumulonimbus :</text><text x="230" y="20">orage</text></g></svg>`,
  legende: "De gauche à droite : cirrus qui annoncent la pluie, cumulus de beau temps, cumulonimbus en enclume d'orage.",
  motscles: ["météo", "nuages", "ciel", "prévoir", "cirrus", "cumulus", "orage"]
},
{
  id: "climat-09",
  cat: "climat",
  titre: "Brouillard en montagne",
  resume: "Dans le brouillard, on ne voit plus le relief et on peut marcher vers un ravin sans le savoir. Ralentissez, restez groupés et naviguez à la boussole, ou attendez.",
  urgence: false,
  etapes: [
    "Dès que le brouillard arrive, faites le point sur la carte : notez votre position tant que vous voyez encore des repères.",
    "Regroupez tout le monde. Chaque personne doit voir celle de devant et celle de derrière.",
    "Si vous connaissez bien le sentier, suivez-le pas à pas en repérant balisage, cairns et traces.",
    "Si le chemin n'est plus visible, arrêtez-vous dans un endroit sûr et attendez que ça se lève, souvent en quelques heures.",
    "Si vous devez bouger, prenez un azimut à la boussole et avancez en envoyant une personne en éclaireur à la limite de la visibilité.",
    "Comptez vos pas pour savoir quelle distance vous avez parcourue depuis le dernier point connu.",
    "Si vous ne savez plus où vous êtes, appliquez la méthode STOP et appelez le 112 si nécessaire."
  ],
  conseils: [
    "Couvrez-vous : le brouillard mouille les vêtements et refroidit vite.",
    "Une lampe frontale allumée ou une veste de couleur vive aide le groupe à rester ensemble.",
    "Le bruit d'un torrent ou d'une route peut aider à se situer, mais il trompe sur la distance."
  ],
  erreurs: [
    "Descendre au hasard dans un vallon : ces lignes de pente mènent souvent à des barres rocheuses.",
    "Laisser le plus rapide du groupe partir devant hors de vue.",
    "Traverser une zone d'éboulis ou un névé sans visibilité."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 170l80-60 80 30 70-50 90 70v30H0z" fill="var(--sol)"/><rect x="0" y="50" width="320" height="100" fill="var(--fill)" opacity="0.6" stroke="none"/><path d="M10 70h120M60 90h150M150 60h150M20 120h100M180 115h120" stroke-dasharray="6 8"/><circle cx="70" cy="128" r="6" fill="var(--feu)"/><path d="M70 134v18"/><circle cx="110" cy="132" r="6" fill="var(--accent)"/><path d="M110 138v18"/><circle cx="150" cy="134" r="6" fill="var(--vert)"/><path d="M150 140v18"/><path d="M80 145h20M120 148h20" stroke-dasharray="2 3"/><path d="M220 140l8-12 8 12z" fill="var(--fill)"/><path d="M215 152h26"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><text x="50" y="190">groupe serré</text><text x="200" y="175">cairn</text><text x="110" y="40">visibilité faible</text></g></svg>`,
  legende: "Dans le brouillard, le groupe reste serré, chacun voit les autres, et l'on avance de cairn en cairn.",
  motscles: ["brouillard", "montagne", "visibilité", "boussole", "groupe", "cairn"]
},
{
  id: "climat-10",
  cat: "climat",
  titre: "Pluies intenses et crues",
  resume: "En automne, les épisodes méditerranéens peuvent déverser en quelques heures l'équivalent de plusieurs mois de pluie. Ne traversez jamais une route inondée, à pied ou en voiture.",
  urgence: true,
  etapes: [
    "Surveillez la vigilance pluie-inondation et orages, surtout de septembre à novembre dans le Var et le Sud-Est.",
    "En vigilance orange ou rouge, limitez vos déplacements et éloignez-vous des cours d'eau, même petits ou à sec.",
    "Ne traversez jamais un gué, un radier ou une route sous l'eau : quelques dizaines de centimètres d'eau suffisent pour emporter une voiture, et moins encore pour faire tomber un adulte.",
    "Faites demi-tour devant une route inondée et prenez un autre itinéraire, ou attendez sur un point haut.",
    "Ne descendez pas dans les parkings souterrains ni dans les caves pour sauver la voiture ou des affaires.",
    "Chez vous, montez à l'étage avec eau, lampe, radio à piles, médicaments et téléphone chargé. Coupez l'électricité si l'eau entre.",
    "Ne cherchez pas les enfants à l'école : ils y sont mis en sécurité par les enseignants.",
    "En voiture prise par l'eau, détachez-vous, ouvrez ou cassez une vitre tant que c'est possible, sortez et montez sur le toit, puis appelez le 112."
  ],
  conseils: [
    "Repérez à l'avance les points hauts et les routes qui ne passent pas près d'un ruisseau autour de chez vous.",
    "Un ruisseau sec en été peut devenir un torrent en moins d'une heure après un orage en amont.",
    "Écoutez la radio locale et suivez les consignes de la mairie et de la préfecture."
  ],
  erreurs: [
    "Penser que son 4x4 ou un gros véhicule passera : l'eau soulève et emporte tous les véhicules.",
    "S'approcher des berges pour regarder ou filmer la crue.",
    "Camper ou se garer au bord d'un cours d'eau ou au fond d'un vallon quand des orages sont annoncés."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 150h320" stroke="var(--sol)" stroke-width="4"/><path d="M120 135c20-8 40 8 60 0s40 8 60 0v40H120z" fill="var(--eau)"/><path d="M150 135v-20l15-15h40l15 15v20" fill="var(--fill)" transform="rotate(-12 185 120)"/><path d="M140 160c10-4 20 4 30 0M200 165c10-4 20 4 30 0"/><path d="M40 120v-50M40 70l20 20-20 20" stroke="var(--accent)" stroke-width="3"/><path d="M85 150c0-30-40-30-40-5M45 145l0-12M45 145l12 -4" stroke="var(--vert)" stroke-width="3"/><path d="M280 175v-40M274 135h12M274 155h12" /><path d="M20 20l-6 14M50 15l-6 14M90 25l-6 14M240 15l-6 14M280 25l-6 14" stroke="var(--eau)"/><path d="M130 40l40 40M170 40l-40 40" stroke="var(--feu)" stroke-width="4"/></g><g font-size="12" fill="currentColor" font-family="sans-serif"><text x="10" y="175">demi-tour</text><text x="286" y="150">30 cm</text><text x="180" y="62">ne pas traverser</text></g></svg>`,
  legende: "Devant une route inondée, on ne traverse pas : demi-tour. Une trentaine de centimètres d'eau peut déjà emporter une voiture.",
  motscles: ["inondation", "épisode méditerranéen", "crue", "pluie", "vigilance", "route inondée", "orage cévenol"]
}
);
