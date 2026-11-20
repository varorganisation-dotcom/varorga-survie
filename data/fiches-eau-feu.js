window.FICHES = window.FICHES || [];
window.FICHES.push(
{
  id: "eau-01",
  cat: "eau",
  titre: "Besoins en eau et déshydratation",
  resume: "Un adulte a besoin d'au moins 2 à 3 litres d'eau par jour, beaucoup plus par forte chaleur ou en effort. La déshydratation arrive vite et réduit vos capacités bien avant d'être dangereuse.",
  urgence: false,
  etapes: [
    "Comptez au minimum 2 à 3 litres par jour au repos, et jusqu'à 5 ou 6 litres par forte chaleur ou effort.",
    "Buvez par petites gorgées régulières plutôt qu'une grande quantité d'un coup.",
    "Surveillez la couleur de vos urines : claires, tout va bien ; foncées, buvez davantage.",
    "Repérez les signes d'alerte : soif intense, bouche sèche, maux de tête, fatigue, vertiges.",
    "Réduisez vos pertes : restez à l'ombre, couvrez votre tête, évitez l'effort entre 12 h et 16 h.",
    "Si la personne devient confuse, ne transpire plus ou perd connaissance, appelez le 15 ou le 112."
  ],
  conseils: [
    "Ne rationnez pas l'eau que vous avez déjà : mieux vaut la boire que la garder pendant que vous vous affaiblissez.",
    "Sans eau, mangez très peu : la digestion, surtout des aliments salés ou riches en protéines, consomme de l'eau.",
    "En Provence l'été, un simple trajet à pied de deux heures demande facilement 1,5 litre."
  ],
  erreurs: [
    "Attendre d'avoir soif pour boire : la soif arrive déjà en retard.",
    "Boire de l'alcool ou beaucoup de café pour tenir : ils font perdre de l'eau.",
    "Sucer des cailloux en croyant remplacer l'eau : cela trompe la soif, pas le corps."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M60 30 C60 30 25 75 25 100 a35 35 0 0 0 70 0 C95 75 60 30 60 30 Z" fill="var(--eau)"/><text x="60" y="155" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">2 à 3 L / jour</text><text x="60" y="172" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">plus si chaleur</text><text x="215" y="25" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Couleur des urines</text><rect x="140" y="40" width="40" height="60" rx="4" fill="var(--fill)"/><rect x="195" y="40" width="40" height="60" rx="4" fill="var(--accent)"/><rect x="250" y="40" width="40" height="60" rx="4" fill="var(--sol)"/><text x="160" y="120" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Bien</text><text x="215" y="120" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Buvez</text><text x="270" y="120" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Danger</text><path d="M140 140 H290"/><path d="M280 134 L290 140 L280 146"/><text x="215" y="162" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">déshydratation</text></svg>`,
  legende: "Visez environ 2 à 3 litres par jour et surveillez la couleur des urines : plus elles sont foncées, plus vous manquez d'eau.",
  motscles: ["déshydratation", "boire", "litres", "soif", "urine", "chaleur", "besoins"]
},
{
  id: "eau-02",
  cat: "eau",
  titre: "Trouver de l'eau",
  resume: "L'eau suit la pente et fait pousser une végétation plus verte. Lisez le relief, les plantes et les animaux pour la localiser, puis traitez toujours l'eau trouvée.",
  urgence: false,
  etapes: [
    "Descendez : l'eau s'accumule au fond des vallons, des ravins et au pied des falaises.",
    "Cherchez une végétation plus verte et dense : roseaux, joncs, saules, peupliers, figuiers, menthe sauvage.",
    "Suivez les traces d'animaux qui convergent vers un même point, souvent en descente.",
    "Observez les oiseaux qui volent bas et droit à l'aube ou au crépuscule, et les nuages de moustiques ou d'abeilles.",
    "Dans un lit de rivière à sec, creusez à l'extérieur d'un virage, là où le sol est le plus humide.",
    "Attendez que le trou se remplisse, puis laissez l'eau se décanter avant de la recueillir.",
    "Filtrez puis faites bouillir ou désinfectez toute eau trouvée, même si elle paraît claire."
  ],
  conseils: [
    "Dans le Var, pensez aux sources, lavoirs, fontaines de village et anciens puits indiqués sur les cartes IGN.",
    "Les citernes de défense contre les incendies (DFCI) contiennent de l'eau non potable : en vraie urgence seulement, et toujours traitée.",
    "Le matin, la rosée sur l'herbe est une source facile à récolter (voir la fiche rosée)."
  ],
  erreurs: [
    "Monter vers les crêtes en cherchant de l'eau : vous vous épuisez pour rien.",
    "Boire directement au ruisseau parce que l'eau semble pure.",
    "Creuser au soleil aux heures chaudes : vous perdez plus d'eau en sueur que vous n'en gagnez."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 60 L70 40 L130 130 L190 130 L250 50 L320 70 L320 200 L0 200 Z" fill="var(--sol)"/><path d="M135 132 Q160 140 185 132 L185 138 Q160 146 135 138 Z" fill="var(--eau)"/><path d="M120 125 l-6 -18 M126 126 l0 -20 M132 127 l6 -17" stroke="var(--vert)"/><path d="M190 128 l-4 -18 M196 126 l2 -20 M202 124 l7 -17" stroke="var(--vert)"/><circle cx="114" cy="104" r="7" fill="var(--vert)"/><circle cx="204" cy="104" r="7" fill="var(--vert)"/><path d="M70 30 L120 110" stroke-dasharray="4 5"/><path d="M110 104 L120 112 L122 100"/><path d="M250 40 L200 110" stroke-dasharray="4 5"/><path d="M198 98 L200 112 L210 104"/><path d="M150 70 q6 -6 12 0 q6 -6 12 0"/><text x="160" y="60" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">oiseaux</text><circle cx="160" cy="170" r="9"/><text x="160" y="174" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">1</text><text x="160" y="194" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Fond de vallon</text><text x="60" y="25" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Descendez</text><text x="265" y="25" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Plantes vertes</text></svg>`,
  legende: "L'eau se trouve au point bas du relief, là où la végétation est la plus verte et où convergent les animaux.",
  motscles: ["trouver", "source", "vallon", "végétation", "animaux", "rivière à sec", "creuser"]
},
{
  id: "eau-03",
  cat: "eau",
  titre: "Récupérer l'eau de pluie",
  resume: "La pluie est l'une des eaux les plus sûres en pleine nature. Une bâche ou un poncho tendu en pente vers un récipient en récolte beaucoup en peu de temps.",
  urgence: false,
  etapes: [
    "Préparez à l'avance tous vos récipients propres : gourdes, casseroles, sacs plastiques, bâche.",
    "Tendez une bâche, un poncho ou une couverture de survie entre deux arbres ou deux bâtons, en pente douce.",
    "Créez un point bas au bord de la bâche, avec un caillou ou une ficelle, pour concentrer l'écoulement.",
    "Placez un récipient sous ce point bas, calé pour ne pas se renverser.",
    "Laissez couler les premières minutes de pluie pour rincer la surface, puis récoltez.",
    "Couvrez l'eau récoltée et désinfectez-la si elle est stockée plus d'un jour ou récoltée en ville."
  ],
  conseils: [
    "Un simple trou tapissé de plastique devient un réservoir au sol.",
    "Les grandes feuilles, les creux de rochers et les troncs creux retiennent aussi l'eau après l'averse.",
    "Les orages méditerranéens sont courts mais violents : soyez prêt avant qu'ils éclatent."
  ],
  erreurs: [
    "Récolter l'eau qui ruisselle d'un toit en zinc, d'une toiture ancienne ou d'une route sans la traiter.",
    "Laisser l'eau récoltée à découvert, où insectes et saletés la contaminent.",
    "Se mettre à l'abri sous un arbre isolé pendant un orage pour surveiller ses récipients."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M60 20 l-6 14 M100 15 l-6 14 M140 20 l-6 14 M180 15 l-6 14 M220 20 l-6 14 M260 15 l-6 14" stroke="var(--eau)"/><path d="M40 60 V180 M270 100 V180"/><path d="M40 60 L270 100 L255 125 L40 85 Z" fill="var(--accent)"/><path d="M262 118 V140" stroke="var(--eau)" stroke-dasharray="3 4"/><path d="M245 145 H280 L275 180 H250 Z" fill="var(--eau)"/><path d="M20 180 H300"/><circle cx="110" cy="50" r="9"/><text x="110" y="54" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">1</text><text x="150" y="58" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Bâche en pente</text><circle cx="200" cy="150" r="9"/><text x="200" y="154" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">2</text><text x="130" y="175" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Point bas</text><text x="232" y="196" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Récipient</text></svg>`,
  legende: "Une bâche tendue en pente concentre la pluie vers un point bas, juste au-dessus du récipient.",
  motscles: ["pluie", "bâche", "poncho", "récolte", "orage", "récipient"]
},
{
  id: "eau-04",
  cat: "eau",
  titre: "Rosée et sac sur branche",
  resume: "Même sans source, vous pouvez récolter de l'eau grâce à la rosée du matin et à la transpiration des feuilles, en enfermant une branche dans un sac plastique.",
  urgence: false,
  etapes: [
    "Avant le lever du soleil, passez un tissu propre ou un tee-shirt sur l'herbe et les feuillages mouillés.",
    "Essorez le tissu dans un récipient, puis recommencez jusqu'à ce que la rosée disparaisse.",
    "Pour le sac sur branche, choisissez un arbre ou arbuste feuillu, non toxique, en plein soleil.",
    "Enfilez un sac plastique transparent sur une branche bien garnie de feuilles.",
    "Fermez l'ouverture autour de la branche avec une ficelle, sans écraser les feuilles.",
    "Lestez un coin du sac avec un petit caillou pour qu'il soit le point le plus bas.",
    "En fin de journée, percez ou videz délicatement ce coin pour récupérer l'eau, puis changez de branche."
  ],
  conseils: [
    "Installez plusieurs sacs sur plusieurs arbres pour multiplier le rendement.",
    "Attachez le tissu à vos chevilles et marchez dans l'herbe haute : vous récoltez sans vous baisser.",
    "Comptez quelques décilitres par sac et par journée ensoleillée."
  ],
  erreurs: [
    "Utiliser le laurier-rose, très courant en Provence et extrêmement toxique, ou toute plante inconnue.",
    "Laisser le sac plusieurs jours sur la même branche, qui finit par ne plus rien donner.",
    "Récolter la rosée sur des plantes traitées, au bord des routes ou des cultures."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="280" cy="35" r="18" fill="var(--accent)"/><path d="M20 40 L160 70"/><path d="M100 55 Q90 110 140 160 Q190 175 200 130 Q205 85 150 66" fill="var(--fill)"/><ellipse cx="135" cy="95" rx="12" ry="6" fill="var(--vert)"/><ellipse cx="160" cy="110" rx="12" ry="6" fill="var(--vert)"/><ellipse cx="140" cy="125" rx="12" ry="6" fill="var(--vert)"/><path d="M120 60 L135 64" stroke-width="4"/><path d="M150 150 Q160 158 172 152" fill="var(--eau)"/><circle cx="165" cy="168" r="6" fill="var(--sol)"/><circle cx="60" cy="110" r="9"/><text x="60" y="114" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">1</text><text x="20" y="135" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Sac fermé</text><circle cx="240" cy="150" r="9"/><text x="240" y="154" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">2</text><text x="215" y="178" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Eau + caillou</text><text x="235" y="80" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Plein soleil</text></svg>`,
  legende: "Un sac transparent fermé sur une branche feuillue au soleil recueille l'eau des feuilles dans son coin lesté.",
  motscles: ["rosée", "condensation", "sac plastique", "branche", "transpiration", "feuilles"]
},
{
  id: "eau-05",
  cat: "eau",
  titre: "Construire un puits solaire",
  resume: "Un trou couvert d'un film plastique condense l'humidité du sol grâce au soleil. Le rendement est faible : c'est une solution de dernier recours, utile surtout pour distiller une eau impropre.",
  urgence: false,
  etapes: [
    "Choisissez un sol humide en plein soleil, par exemple un fond de vallon ou un lit de rivière à sec.",
    "Creusez un trou d'environ 90 cm de large et 60 cm de profondeur.",
    "Posez un récipient au centre du fond du trou.",
    "Tapissez les côtés de végétation verte non toxique écrasée, ou versez autour du récipient de l'eau de mer ou de l'urine.",
    "Couvrez le trou d'un film plastique transparent et bloquez tout le tour avec de la terre et des pierres.",
    "Placez un petit caillou au centre du film, juste au-dessus du récipient, pour former un cône.",
    "Attendez plusieurs heures : la vapeur se condense sous le film et goutte dans le récipient."
  ],
  conseils: [
    "Glissez un tuyau ou une paille jusqu'au récipient pour boire sans ouvrir le puits.",
    "L'eau obtenue est distillée, donc sans sel ni microbes, même à partir d'eau de mer ou d'urine.",
    "Creusez tôt le matin ou le soir pour limiter la transpiration."
  ],
  erreurs: [
    "Compter sur un seul puits solaire pour survivre : il donne souvent moins d'un demi-litre par jour.",
    "Laisser le film toucher les bords du trou ou le récipient : l'eau coule à côté.",
    "Mal sceller les bords : l'air humide s'échappe et le puits ne produit rien."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="285" cy="30" r="16" fill="var(--accent)"/><path d="M0 70 H70 Q80 160 160 165 Q240 160 250 70 H320 V200 H0 Z" fill="var(--sol)"/><path d="M60 68 L160 115 L260 68"/><circle cx="160" cy="108" r="6" fill="var(--sol)"/><path d="M140 140 H180 L176 162 H144 Z" fill="var(--eau)"/><path d="M160 122 V134" stroke="var(--eau)" stroke-dasharray="2 4"/><path d="M90 120 q6 -12 12 0 M215 120 q6 -12 12 0" stroke="var(--vert)"/><path d="M50 62 h20 M250 62 h20" stroke-width="6"/><circle cx="35" cy="40" r="9"/><text x="35" y="44" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">1</text><text x="50" y="44" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Film scellé</text><text x="175" y="105" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Caillou</text><circle cx="210" cy="150" r="9"/><text x="210" y="154" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">2</text><text x="225" y="154" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Récipient</text><text x="60" y="190" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Plantes ou eau salée</text></svg>`,
  legende: "Le soleil évapore l'humidité du trou, la vapeur se condense sous le film et coule vers le caillou puis dans le récipient.",
  motscles: ["puits solaire", "distillation", "condensation", "film plastique", "eau de mer", "désert"]
},
{
  id: "eau-06",
  cat: "eau",
  titre: "Filtrer une eau trouble",
  resume: "Filtrer retire la boue, le sable et une partie des saletés, mais pas tous les microbes. Après filtration, faites toujours bouillir ou désinfectez l'eau.",
  urgence: false,
  etapes: [
    "Laissez d'abord reposer l'eau une heure ou plus pour que la boue tombe au fond.",
    "Versez doucement l'eau du dessus à travers un tissu propre plié plusieurs fois.",
    "Pour aller plus loin, coupez le fond d'une bouteille plastique et retournez-la, bouchon percé ou couvert de tissu.",
    "Remplissez-la de bas en haut : tissu, charbon de bois écrasé, sable fin, sable grossier, puis gravier.",
    "Versez l'eau par le haut et jetez le premier litre, qui rince le filtre.",
    "Récupérez l'eau filtrée et passez à l'ébullition ou à la désinfection."
  ],
  conseils: [
    "Le charbon de bois du feu de la veille, bien noir et réduit en petits morceaux, retient goût et odeurs.",
    "Repassez l'eau plusieurs fois si elle reste trouble.",
    "Une gourde filtrante du commerce retient bactéries et parasites : un bon investissement pour un sac de randonnée."
  ],
  erreurs: [
    "Croire qu'une eau claire après filtration est potable.",
    "Utiliser de la cendre à la place du charbon : elle passe à travers et rend l'eau imbuvable.",
    "Garder le même filtre bricolé plusieurs jours : il devient lui-même un nid à microbes."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M80 20 H160 V130 L130 150 H110 L80 130 Z"/><rect x="81" y="30" width="78" height="20" fill="var(--sol)"/><rect x="81" y="50" width="78" height="22" fill="var(--fill)"/><rect x="81" y="72" width="78" height="22" fill="var(--accent)"/><rect x="81" y="94" width="78" height="22" fill="currentColor"/><path d="M82 116 H158 L158 130 L130 148 H110 L82 130 Z" fill="var(--fill)"/><path d="M120 152 V170" stroke="var(--eau)" stroke-dasharray="3 4"/><path d="M95 172 H145 L140 195 H100 Z" fill="var(--eau)"/><path d="M170 40 H185 M170 61 H185 M170 83 H185 M170 105 H185 M170 128 H185"/><text x="190" y="44" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Gravier</text><text x="190" y="65" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Sable grossier</text><text x="190" y="87" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Sable fin</text><text x="190" y="109" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Charbon de bois</text><text x="190" y="132" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Tissu</text><text x="160" y="188" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Puis bouillir</text><path d="M120 5 V18" stroke="var(--eau)"/></svg>`,
  legende: "Une bouteille retournée remplie de couches de plus en plus fines retient les particules, avant ébullition ou désinfection.",
  motscles: ["filtrer", "filtre", "charbon", "sable", "bouteille", "eau trouble"]
},
{
  id: "eau-07",
  cat: "eau",
  titre: "Faire bouillir l'eau",
  resume: "L'ébullition est la méthode la plus sûre pour tuer bactéries, virus et parasites. Une minute à gros bouillons suffit, trois minutes en haute montagne.",
  urgence: false,
  etapes: [
    "Filtrez d'abord l'eau si elle est trouble.",
    "Versez-la dans un récipient métallique : casserole, gamelle, boîte de conserve vide et propre.",
    "Posez-la sur le feu ou les braises et couvrez si possible pour chauffer plus vite.",
    "Attendez de gros bouillons, avec des bulles qui remontent sans arrêt.",
    "Maintenez l'ébullition au moins 1 minute, 3 minutes au-dessus de 2 000 mètres d'altitude.",
    "Laissez refroidir à couvert, puis transvasez plusieurs fois entre deux récipients pour retrouver le goût."
  ],
  conseils: [
    "Sans récipient métallique, chauffez des pierres sèches au feu et plongez-les dans un récipient en bois, en écorce ou une poche en plastique épais.",
    "Faites bouillir le soir pour avoir de l'eau froide le lendemain matin.",
    "Une bouteille plastique pleine d'eau peut chauffer au bord des braises sans fondre tant qu'elle reste pleine, mais elle déforme vite : surveillez-la."
  ],
  erreurs: [
    "Arrêter dès les premières petites bulles : il faut une vraie ébullition.",
    "Croire que l'ébullition retire les pesticides, les métaux ou le sel : elle ne retire que les microbes.",
    "Plonger dans l'eau des pierres de rivière : humides à l'intérieur, elles peuvent éclater au feu."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M60 70 H180 L170 140 H70 Z" fill="var(--fill)"/><path d="M70 85 H170 L166 138 H74 Z" fill="var(--eau)"/><circle cx="100" cy="110" r="5"/><circle cx="125" cy="98" r="6"/><circle cx="148" cy="115" r="5"/><circle cx="115" cy="125" r="4"/><path d="M90 60 q5 -15 0 -30 M120 60 q5 -15 0 -30 M150 60 q5 -15 0 -30"/><path d="M75 175 Q90 140 100 160 Q110 130 120 158 Q130 135 140 160 Q152 140 165 175 Z" fill="var(--feu)"/><path d="M60 180 H180" stroke-width="4" stroke="var(--sol)"/><circle cx="250" cy="90" r="40"/><path d="M250 90 V62 M250 90 L270 100"/><text x="250" y="150" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">1 minute</text><text x="250" y="166" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">gros bouillons</text><text x="250" y="182" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">3 min en altitude</text></svg>`,
  legende: "Portez l'eau à gros bouillons et maintenez l'ébullition au moins une minute.",
  motscles: ["bouillir", "ébullition", "potable", "microbes", "casserole", "altitude"]
},
{
  id: "eau-08",
  cat: "eau",
  titre: "Désinfecter sans feu",
  resume: "Pastilles, eau de Javel ou soleil permettent de rendre l'eau claire buvable sans feu. Respectez toujours le dosage et le temps d'attente.",
  urgence: false,
  etapes: [
    "Commencez par filtrer l'eau : ces méthodes marchent mal sur une eau trouble.",
    "Pastilles de purification : suivez la notice, en général 1 pastille par litre et 30 minutes d'attente, le double par eau froide ou douteuse.",
    "Eau de Javel non parfumée à 2,6 % : environ 4 gouttes par litre, 8 si l'eau est trouble, puis 30 minutes d'attente.",
    "Après le délai, une légère odeur de chlore doit rester. Sinon, refaites une dose et attendez encore 15 minutes.",
    "Méthode du soleil : remplissez une bouteille plastique transparente de 2 litres maximum avec de l'eau claire.",
    "Couchez-la en plein soleil au moins 6 heures, ou 2 jours si le ciel est couvert.",
    "Avec une lampe UV de randonnée, suivez la notice : remuez l'eau le temps indiqué, dans un récipient de petite taille."
  ],
  conseils: [
    "Gardez des pastilles dans votre trousse, votre voiture et votre kit d'urgence : elles pèsent quelques grammes.",
    "Posez la bouteille au soleil sur une tôle ou une surface sombre pour accélérer la méthode solaire.",
    "Notez l'heure sur la bouteille avec un feutre pour respecter le temps d'attente."
  ],
  erreurs: [
    "Utiliser de la Javel parfumée, avec détergent, ou de la Javel concentrée sans adapter la dose.",
    "Boire avant la fin du temps d'attente.",
    "Utiliser une bouteille en verre teinté, rayée ou de plus de 2 litres pour la méthode solaire."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="20" width="95" height="140" rx="8"/><rect x="115" y="20" width="95" height="140" rx="8"/><rect x="220" y="20" width="95" height="140" rx="8"/><circle cx="57" cy="70" r="20" fill="var(--fill)"/><path d="M45 70 H69"/><text x="57" y="120" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Pastille</text><text x="57" y="138" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">30 min</text><path d="M150 40 H175 V55 L180 62 V100 H145 V62 L150 55 Z" fill="var(--fill)"/><path d="M162 108 q-4 6 0 8 q4 -2 0 -8 Z" fill="var(--eau)"/><text x="162" y="134" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Javel</text><text x="162" y="150" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">4 gouttes/L</text><circle cx="290" cy="45" r="12" fill="var(--accent)"/><rect x="235" y="80" width="65" height="24" rx="10" fill="var(--eau)"/><path d="M300 86 h8 v12 h-8"/><text x="267" y="134" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Soleil</text><text x="267" y="150" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">6 heures</text><text x="160" y="185" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Toujours sur eau claire</text></svg>`,
  legende: "Trois méthodes sans feu : pastille et 30 minutes, quelques gouttes de Javel, ou bouteille transparente 6 heures au soleil.",
  motscles: ["désinfecter", "pastilles", "javel", "chlore", "UV", "soleil", "SODIS"]
},
{
  id: "eau-09",
  cat: "eau",
  titre: "Eaux à ne jamais boire",
  resume: "Certaines eaux aggravent la déshydratation ou empoisonnent, même bouillies. Apprenez à les reconnaître et à ne pas céder à la tentation.",
  urgence: false,
  etapes: [
    "Ne buvez jamais d'eau de mer : le sel oblige les reins à perdre encore plus d'eau.",
    "Ne buvez pas votre urine : elle est concentrée en déchets et en sels et vous déshydrate davantage.",
    "Évitez l'eau stagnante près des vignes, champs et vergers : pesticides et engrais ne partent pas à l'ébullition.",
    "Fuyez l'eau verte, couverte d'une pellicule colorée ou d'écume : certaines algues produisent des toxines.",
    "N'utilisez jamais l'eau d'un radiateur de voiture : l'antigel est un poison mortel.",
    "Écartez l'eau proche d'une mine, d'une usine, d'une décharge ou d'un animal mort.",
    "Après une inondation, considérez toute l'eau du robinet et des puits comme contaminée jusqu'à avis officiel."
  ],
  conseils: [
    "L'eau de mer et l'urine peuvent devenir buvables par distillation dans un puits solaire.",
    "Si une eau sent l'essence, le produit chimique ou l'œuf pourri, ne la buvez pas, même traitée.",
    "Dans le Var, les crues éclair charrient égouts et hydrocarbures : prudence avec toute eau après un orage."
  ],
  erreurs: [
    "Penser que faire bouillir rend toute eau potable : cela ne retire ni sel ni produits chimiques.",
    "Boire de l'alcool pour remplacer l'eau.",
    "Faire confiance à une eau parce que des animaux la boivent."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="20" width="70" height="120" rx="8"/><rect x="90" y="20" width="70" height="120" rx="8"/><rect x="170" y="20" width="70" height="120" rx="8"/><rect x="250" y="20" width="60" height="120" rx="8"/><path d="M20 80 q10 -10 20 0 t20 0 t20 0 M20 95 q10 -10 20 0 t20 0" stroke="var(--eau)"/><path d="M110 60 H140 L136 110 H114 Z" fill="var(--accent)"/><path d="M180 100 Q205 85 230 100 Z" fill="var(--vert)"/><path d="M190 60 V85 M205 55 V85 M220 60 V85" stroke="var(--vert)"/><rect x="262" y="60" width="36" height="45" rx="4" fill="var(--feu)"/><path d="M280 50 V60"/><path d="M15 25 L75 135 M75 25 L15 135 M95 25 L155 135 M155 25 L95 135 M175 25 L235 135 M235 25 L175 135 M255 25 L305 135 M305 25 L255 135" stroke="var(--feu)" stroke-width="3"/><text x="45" y="165" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Mer</text><text x="125" y="165" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Urine</text><text x="205" y="165" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Près cultures</text><text x="280" y="165" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Antigel</text><text x="160" y="192" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Même bouillies : non</text></svg>`,
  legende: "Eau de mer, urine, eau stagnante près des cultures et liquide de radiateur ne se boivent jamais, même bouillis.",
  motscles: ["eau de mer", "urine", "pesticides", "antigel", "algues", "inondation", "danger"]
},
{
  id: "eau-10",
  cat: "eau",
  titre: "Stocker l'eau à la maison",
  resume: "Une coupure d'eau peut durer plusieurs jours après une inondation, un incendie ou une panne. Gardez une réserve d'au moins 3 jours pour tout le foyer, animaux compris.",
  urgence: false,
  etapes: [
    "Comptez par personne et par jour au moins 2 litres pour boire et 1 litre pour cuisiner et se laver.",
    "Constituez une réserve pour 3 jours minimum, idéalement une semaine.",
    "Privilégiez les bouteilles du commerce, scellées, que vous faites tourner selon leur date.",
    "Rangez-les dans un endroit frais, sombre, loin des produits chimiques et de l'essence.",
    "Pour de l'eau du robinet, utilisez des jerricans alimentaires propres, fermés, et renouvelez-la tous les 6 mois.",
    "Si une coupure est annoncée, remplissez baignoire, seaux et casseroles pour les toilettes et le ménage.",
    "Après une coupure, attendez l'avis de la mairie avant de reboire l'eau du robinet."
  ],
  conseils: [
    "Le ballon d'eau chaude contient plusieurs dizaines de litres utilisables en dernier recours : coupez-le avant de le vider.",
    "Ajoutez la ration de vos animaux : un chien moyen boit environ 1 litre par jour.",
    "Notez la date de remplissage sur chaque jerrican avec un marqueur."
  ],
  erreurs: [
    "Réutiliser des bidons ayant contenu des produits chimiques, du lait ou du jus.",
    "Stocker l'eau en plein soleil ou dans un garage brûlant l'été.",
    "Boire l'eau de la baignoire sans la traiter."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 150 H220 M20 90 H220 M25 150 V180 M215 150 V180"/><path d="M40 100 h18 v6 l4 6 v38 h-26 v-38 l4 -6 Z" fill="var(--eau)"/><path d="M72 100 h18 v6 l4 6 v38 h-26 v-38 l4 -6 Z" fill="var(--eau)"/><path d="M104 100 h18 v6 l4 6 v38 h-26 v-38 l4 -6 Z" fill="var(--eau)"/><path d="M140 105 H200 V150 H140 Z" fill="var(--eau)"/><path d="M180 105 V95 H195 V105 M150 115 H170"/><path d="M40 40 h18 v6 l4 6 v38 h-26 v-38 l4 -6 Z" fill="var(--eau)"/><path d="M72 40 h18 v6 l4 6 v38 h-26 v-38 l4 -6 Z" fill="var(--eau)"/><text x="170" y="60" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Lieu frais</text><text x="170" y="76" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">et sombre</text><circle cx="250" cy="60" r="9"/><text x="250" y="64" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">1</text><text x="240" y="90" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">3 L / pers.</text><text x="240" y="106" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">par jour</text><circle cx="250" cy="130" r="9"/><text x="250" y="134" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">2</text><text x="240" y="160" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">3 jours</text><text x="240" y="176" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">minimum</text></svg>`,
  legende: "Une étagère de bouteilles et un jerrican alimentaire, au frais, couvrent 3 litres par personne et par jour pendant au moins 3 jours.",
  motscles: ["stocker", "réserve", "coupure", "jerrican", "bouteilles", "maison", "crise"]
},
{
  id: "feu-01",
  cat: "feu",
  titre: "Le triangle du feu",
  resume: "Un feu a besoin de trois éléments : un combustible, de l'oxygène et de la chaleur. Pour l'allumer, réunissez-les. Pour l'éteindre, retirez-en un.",
  urgence: false,
  etapes: [
    "Combustible : préparez des matières sèches, des plus fines aux plus grosses.",
    "Oxygène : laissez de l'air circuler entre les morceaux de bois, sans les tasser.",
    "Chaleur : apportez une flamme ou une braise au cœur des matières les plus fines.",
    "Si le feu faiblit, demandez-vous lequel des trois manque : bois trop gros, trop serré, ou pas assez chaud.",
    "Pour éteindre, retirez un élément : l'eau enlève la chaleur, la terre coupe l'oxygène, écarter les bûches retire le combustible."
  ],
  conseils: [
    "Soufflez doucement à la base d'un feu qui démarre : vous apportez de l'oxygène.",
    "Un feu étouffé par trop de bois repart souvent si vous en retirez un peu.",
    "Le même principe vaut à la maison : un couvercle sur une poêle en feu coupe l'oxygène."
  ],
  erreurs: [
    "Poser tout de suite de grosses bûches sur une petite flamme.",
    "Jeter de l'eau sur de l'huile en feu : couvrez plutôt avec un couvercle ou un linge humide.",
    "Tasser le bois au point de bloquer l'air."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M160 20 L270 170 H50 Z" fill="var(--fill)"/><path d="M160 150 Q130 120 150 95 Q152 110 160 112 Q158 85 175 70 Q172 100 185 115 Q195 135 160 150 Z" fill="var(--feu)"/><path d="M160 138 Q148 125 158 112 Q165 122 168 128 Q172 136 160 138 Z" fill="var(--accent)"/><text x="160" y="190" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Combustible (bois)</text><text x="70" y="85" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Oxygène</text><text x="70" y="101" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">(air)</text><text x="250" y="85" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Chaleur</text><text x="250" y="101" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">(flamme)</text><path d="M95 90 L115 95 M225 90 L205 95"/><path d="M160 175 V160"/></svg>`,
  legende: "Combustible, oxygène et chaleur forment le triangle du feu : sans l'un des trois côtés, le feu meurt.",
  motscles: ["triangle du feu", "combustible", "oxygène", "chaleur", "principe", "éteindre"]
},
{
  id: "feu-02",
  cat: "feu",
  titre: "Préparer amadou, petit bois, bûches",
  resume: "Un feu réussi se prépare avant de frotter l'allumette. Rassemblez trois tas bien secs : l'amadou qui prend la flamme, le petit bois qui la grandit, les bûches qui la font durer.",
  urgence: false,
  etapes: [
    "Amadou : récoltez une grosse poignée de matière très fine et très sèche, herbes sèches, écorce fine, aiguilles de pin, duvet de plantes.",
    "Formez avec l'amadou un nid lâche, de la taille de deux poings.",
    "Petit bois : ramassez des brindilles de l'épaisseur d'une allumette jusqu'à celle d'un crayon.",
    "Bois moyen : ajoutez des branches de l'épaisseur d'un pouce à celle d'un poignet.",
    "Bûches : prévoyez du bois plus gros pour la durée, cassé ou fendu.",
    "Rangez les trois tas à portée de main, à l'abri de l'humidité, avant d'allumer.",
    "Préparez deux fois plus de petit bois que ce qui vous paraît nécessaire."
  ],
  conseils: [
    "Une branche sèche casse net avec un claquement. Si elle plie, elle est humide ou vivante.",
    "Prenez le bois mort encore accroché aux arbres, plus sec que celui posé au sol.",
    "Des cotons imbibés de vaseline, gardés dans une petite boîte, font un amadou de secours excellent."
  ],
  erreurs: [
    "Allumer avant d'avoir tout préparé, puis courir chercher du bois pendant que la flamme meurt.",
    "Couper des branches vertes sur des arbres vivants : elles brûlent mal et c'est interdit.",
    "Ramasser du bois pourri qui s'effrite : il fume et chauffe peu."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="55" cy="120" rx="40" ry="22" fill="var(--accent)"/><path d="M25 115 q15 -12 30 0 q15 -12 30 0 M30 125 q12 -8 25 0 q12 -8 25 0"/><path d="M125 140 L190 100 M130 145 L195 108 M135 150 L200 116 M122 132 L185 95" stroke="var(--sol)"/><rect x="225" y="125" width="80" height="18" rx="9" fill="var(--sol)"/><rect x="225" y="103" width="80" height="18" rx="9" fill="var(--sol)"/><rect x="235" y="81" width="60" height="18" rx="9" fill="var(--sol)"/><circle cx="55" cy="50" r="9"/><text x="55" y="54" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">1</text><circle cx="160" cy="50" r="9"/><text x="160" y="54" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">2</text><circle cx="265" cy="50" r="9"/><text x="265" y="54" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">3</text><text x="55" y="175" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Amadou</text><text x="160" y="175" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Petit bois</text><text x="265" y="175" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Bûches</text><text x="160" y="193" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">du plus fin au plus gros</text><path d="M95 50 H145 M175 50 H250"/></svg>`,
  legende: "Trois tas préparés à l'avance, dans l'ordre d'utilisation : amadou, petit bois, puis bûches.",
  motscles: ["amadou", "petit bois", "bûches", "préparer", "bois sec", "brindilles"]
},
{
  id: "feu-03",
  cat: "feu",
  titre: "Monter et allumer un feu",
  resume: "Le montage en tipi démarre vite et chauffe fort, le montage en cabane dure longtemps et fait de belles braises. Les deux partent d'un nid d'amadou bien placé.",
  urgence: false,
  etapes: [
    "Vérifiez que le feu est autorisé, puis choisissez un sol nu, abrité du vent, loin des herbes, des arbres et de votre abri.",
    "Dégagez un cercle d'un mètre et entourez le foyer de pierres sèches.",
    "Placez le nid d'amadou au centre.",
    "Tipi : dressez le petit bois en cône autour du nid, en laissant une ouverture face au vent.",
    "Cabane : posez deux bâtons parallèles de chaque côté du nid, puis deux autres en travers, et montez ainsi en carré en réduisant la taille.",
    "Allumez l'amadou par l'ouverture, côté vent, au ras du sol.",
    "Ajoutez du bois de plus en plus gros à mesure que les flammes prennent, sans écraser le montage."
  ],
  conseils: [
    "Combinez les deux : un petit tipi à l'intérieur d'une cabane démarre vite et tient longtemps.",
    "Protégez la flamme avec votre corps ou votre sac le temps qu'elle prenne.",
    "Gardez toujours de l'eau ou de la terre à côté du feu."
  ],
  erreurs: [
    "Utiliser des pierres de rivière autour du foyer : l'eau qu'elles contiennent peut les faire éclater.",
    "Allumer au pied d'un arbre ou sous des branches basses.",
    "Monter le feu trop serré, sans passage pour l'air."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 160 H300"/><ellipse cx="85" cy="150" rx="22" ry="8" fill="var(--accent)"/><path d="M85 40 L45 158 M85 40 L65 158 M85 40 L105 158 M85 40 L125 158" stroke="var(--sol)"/><path d="M70 150 Q85 125 100 150 Z" fill="var(--feu)"/><rect x="190" y="148" width="100" height="10" rx="5" fill="var(--sol)"/><rect x="200" y="134" width="10" height="14" fill="var(--sol)"/><rect x="270" y="134" width="10" height="14" fill="var(--sol)"/><rect x="195" y="124" width="90" height="10" rx="5" fill="var(--sol)"/><rect x="210" y="110" width="10" height="14" fill="var(--sol)"/><rect x="260" y="110" width="10" height="14" fill="var(--sol)"/><rect x="205" y="100" width="70" height="10" rx="5" fill="var(--sol)"/><ellipse cx="240" cy="141" rx="18" ry="6" fill="var(--accent)"/><circle cx="85" cy="20" r="9"/><text x="85" y="24" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">1</text><circle cx="240" cy="70" r="9"/><text x="240" y="74" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">2</text><text x="85" y="182" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Tipi : rapide</text><text x="240" y="182" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Cabane : durable</text><text x="160" y="198" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">amadou au centre</text></svg>`,
  legende: "À gauche le tipi, cône de petit bois autour de l'amadou ; à droite la cabane, bâtons croisés en carré.",
  motscles: ["allumer", "tipi", "cabane", "montage", "foyer", "flamme"],
  source: { nom: "Alerte Survie", url: "https://alerte-survie.com/competences-de-survie/allumage-feu-conditions/" }
},
{
  id: "feu-04",
  cat: "feu",
  titre: "Allumer par temps humide",
  resume: "Même après la pluie, du bois sec existe : au cœur des branches, sous les conifères, sur les bois morts encore debout. Isolez le feu du sol mouillé et préparez beaucoup de petit bois.",
  urgence: false,
  etapes: [
    "Cherchez le bois mort encore debout ou accroché aux arbres, et les brindilles sous les conifères denses.",
    "Fendez les branches avec un couteau : le cœur reste souvent sec même si l'écorce est trempée.",
    "Taillez des bâtons à copeaux : grattez de fines boucles de bois qui restent attachées au bâton.",
    "Construisez une plateforme de branches sèches côte à côte pour isoler le feu du sol mouillé.",
    "Repérez le bois gras des souches de pin, chargé de résine, qui brûle même humide.",
    "Allumez sous un abri naturel ou derrière votre sac, avec trois fois plus de petit bois que d'habitude.",
    "Faites sécher les bûches suivantes en les posant autour du feu, pas dessus."
  ],
  conseils: [
    "L'écorce de bouleau et la résine de pin s'enflamment même mouillées.",
    "Gardez toujours un allume-feu et un briquet dans un sachet étanche.",
    "Transportez votre amadou contre vous, sous vos vêtements, pour le garder sec."
  ],
  erreurs: [
    "Allumer directement sur la terre détrempée ou la neige.",
    "Utiliser de l'essence ou de l'alcool pour forcer le feu : risque de brûlure grave.",
    "Mettre trop vite du gros bois humide qui étouffe la flamme sous la vapeur."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M40 15 l-5 12 M80 10 l-5 12 M120 15 l-5 12 M200 10 l-5 12 M240 15 l-5 12" stroke="var(--eau)"/><path d="M10 170 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="var(--eau)"/><path d="M10 160 H300 V170 H10 Z" fill="var(--sol)"/><path d="M40 150 H250 M40 156 H250 M40 144 H250" stroke="var(--sol)" stroke-width="4"/><path d="M110 140 Q125 95 145 140 Z" fill="var(--feu)"/><path d="M95 140 L130 70 L165 140" stroke="var(--sol)"/><path d="M230 40 L290 120" stroke-width="5" stroke="var(--sol)"/><path d="M245 60 q-12 4 -10 14 M255 74 q-12 4 -10 14 M265 88 q-12 4 -10 14" stroke="var(--accent)"/><circle cx="30" cy="120" r="9"/><text x="30" y="124" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">1</text><text x="20" y="194" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Plateforme sèche</text><circle cx="290" cy="50" r="9"/><text x="290" y="54" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">2</text><text x="200" y="140" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Copeaux</text></svg>`,
  legende: "Une plateforme de branches isole le feu du sol mouillé, et un bâton à copeaux fournit un petit bois sec.",
  motscles: ["humide", "pluie", "copeaux", "plateforme", "résine", "bois gras"]
},
{
  id: "feu-05",
  cat: "feu",
  titre: "Allumer sans briquet",
  resume: "Le ferrocérium est la solution la plus fiable, la loupe marche par grand soleil, l'archet demande de l'entraînement. Dans tous les cas, l'amadou doit être parfaitement sec.",
  urgence: false,
  etapes: [
    "Ferrocérium : posez l'extrémité de la tige dans l'amadou et appuyez le grattoir dessus.",
    "Tirez la tige vers l'arrière d'un geste ferme, en gardant le grattoir immobile : les étincelles tombent dans le nid sans le disperser.",
    "Loupe : par plein soleil, concentrez la lumière sur l'amadou en cherchant le point le plus petit et le plus brillant, puis attendez la fumée et soufflez doucement.",
    "Archet : taillez une planchette en bois tendre et sec, avec un creux et une encoche en V sur le bord.",
    "Enroulez la corde d'un arc autour d'un fuseau droit, posez-le dans le creux et tenez-le en haut avec une pierre ou un morceau de bois.",
    "Faites des va-et-vient réguliers avec l'arc, de plus en plus vite, jusqu'à obtenir une poudre noire fumante dans l'encoche.",
    "Faites tomber cette braise dans le nid d'amadou, refermez-le doucement et soufflez jusqu'à la flamme."
  ],
  conseils: [
    "Entraînez-vous chez vous ou au jardin avant d'en avoir besoin, surtout pour l'archet.",
    "Les verres de lunettes de presbyte, une bouteille d'eau bien ronde ou le fond d'une canette poli peuvent servir de loupe.",
    "Une pile de 9 volts frottée sur de la paille de fer très fine produit aussi une braise."
  ],
  erreurs: [
    "Frapper le ferrocérium contre le nid en le dispersant.",
    "Utiliser du bois humide ou résineux pour l'archet : il glisse sans chauffer.",
    "S'entraîner avec une loupe ou un ferrocérium dans une zone sèche où le feu est interdit."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="60" y="150" width="200" height="16" rx="3" fill="var(--sol)"/><path d="M150 150 l6 16 h-12 Z" fill="var(--fill)"/><path d="M150 40 V150" stroke-width="6" stroke="var(--sol)"/><rect x="130" y="25" width="40" height="15" rx="6" fill="var(--fill)"/><path d="M40 70 Q150 40 270 70"/><path d="M40 70 L150 95 L270 70" stroke-dasharray="2 3"/><ellipse cx="150" cy="176" rx="24" ry="8" fill="var(--accent)"/><path d="M60 110 H40 M260 110 H280"/><path d="M45 104 L35 110 L45 116 M275 104 L285 110 L275 116"/><text x="185" y="37" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Pierre</text><text x="235" y="58" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Arc</text><text x="165" y="125" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Fuseau</text><text x="20" y="145" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Planchette</text><text x="180" y="190" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Amadou</text><text x="20" y="100" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">va-et-vient</text></svg>`,
  legende: "L'archet fait tourner le fuseau dans la planchette : la friction produit une braise qui tombe dans l'amadou.",
  motscles: ["sans briquet", "ferrocérium", "loupe", "archet", "friction", "étincelles", "braise"]
},
{
  id: "feu-06",
  cat: "feu",
  titre: "Le feu en trou dakota",
  resume: "Le trou dakota est un foyer enterré relié à une prise d'air. Il brûle fort, fume peu, résiste au vent et consomme moins de bois.",
  urgence: false,
  etapes: [
    "Choisissez un sol ferme et minéral, sans racines ni couche épaisse d'humus.",
    "Creusez un premier trou d'environ 25 cm de large et 30 cm de profondeur, un peu plus large au fond.",
    "À 25 cm de lui, côté d'où vient le vent, creusez un second trou plus étroit, en biais vers le bas du premier.",
    "Reliez les deux par un tunnel au fond : c'est l'arrivée d'air.",
    "Allumez le feu au fond du grand trou avec amadou et petit bois, puis alimentez par le haut.",
    "Posez une gamelle sur deux bâtons verts ou une grille au-dessus du trou pour cuisiner.",
    "Après usage, noyez le feu, remuez, puis rebouchez les trous avec la terre retirée."
  ],
  conseils: [
    "Gardez de côté la motte de surface pour la remettre en place à la fin et ne laisser aucune trace.",
    "Idéal par vent fort, quand un feu ouvert serait trop dangereux.",
    "Un petit bois bien sec suffit : la combustion est très efficace."
  ],
  erreurs: [
    "Creuser dans un sol plein de racines ou de tourbe : le feu peut couver sous terre et repartir plus loin.",
    "Placer la prise d'air sous le vent : le feu manque d'air.",
    "Croire que ce feu discret est autorisé là où le feu est interdit."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 60 H100 V150 Q100 165 115 165 H175 L230 60 H320 V200 H0 Z" fill="var(--sol)"/><path d="M175 165 L230 60 H250 L195 165 Z" fill="var(--fill)"/><path d="M100 60 H160 V160 L100 160 Z" fill="var(--fill)"/><path d="M110 158 Q130 110 150 158 Z" fill="var(--feu)"/><path d="M118 156 Q130 130 142 156 Z" fill="var(--accent)"/><path d="M95 55 H165" stroke-width="4"/><path d="M110 45 H150 V55 H110 Z" fill="var(--fill)"/><path d="M290 40 H245 M255 32 L245 40 L255 48"/><path d="M235 85 L190 150" stroke-dasharray="4 4"/><path d="M188 138 L190 150 L200 144"/><text x="270" y="25" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Vent</text><text x="20" y="100" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Foyer</text><text x="20" y="116" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">30 cm</text><text x="245" y="120" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Prise d'air</text><text x="115" y="30" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Gamelle</text><text x="110" y="190" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Tunnel au fond</text></svg>`,
  legende: "Coupe du sol : le vent entre par le trou en biais, passe par le tunnel et alimente le foyer enterré.",
  motscles: ["dakota", "foyer enterré", "discret", "vent", "fumée", "trou"]
},
{
  id: "feu-07",
  cat: "feu",
  titre: "Entretenir et transporter les braises",
  resume: "Un bon lit de braises chauffe mieux qu'une grande flamme et vous évite de rallumer. Bien protégées, les braises peuvent même voyager plusieurs heures.",
  urgence: false,
  etapes: [
    "Ajoutez le bois progressivement, une ou deux bûches à la fois, avant que le feu ne baisse trop.",
    "Repoussez les morceaux à moitié brûlés vers le centre pour garder un foyer compact.",
    "Pour la nuit, posez de grosses bûches de bois dur, puis couvrez en partie de cendres pour ralentir la combustion.",
    "Le matin, écartez les cendres, ajoutez de l'amadou et soufflez doucement sur les braises.",
    "Pour transporter, prenez une boîte métallique percée de quelques petits trous.",
    "Placez au fond un peu de cendre, puis une braise bien rouge, entourée de mousse sèche ou de champignon amadouvier.",
    "Fermez la boîte et ouvrez-la de temps en temps pour vérifier et souffler sur la braise."
  ],
  conseils: [
    "Le bois de chêne, très présent dans le Var, donne des braises longues et régulières.",
    "Un champignon amadouvier sec peut garder une braise vivante pendant des heures.",
    "Ne laissez jamais le feu sans surveillance, même endormi sous la cendre."
  ],
  erreurs: [
    "Charger le feu de bois humide qui étouffe les braises.",
    "Transporter une braise dans une boîte totalement fermée : sans air, elle s'éteint.",
    "Porter une boîte chaude contre soi ou près d'un sac en tissu synthétique."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 160 H140"/><ellipse cx="80" cy="150" rx="55" ry="12" fill="var(--sol)"/><circle cx="60" cy="146" r="7" fill="var(--feu)"/><circle cx="80" cy="150" r="8" fill="var(--feu)"/><circle cx="100" cy="146" r="6" fill="var(--feu)"/><path d="M40 130 L120 140 M45 140 L115 128" stroke-width="6" stroke="var(--sol)"/><path d="M60 110 q4 -10 0 -20 M90 110 q4 -10 0 -20"/><path d="M150 120 H190 M180 112 L190 120 L180 128"/><rect x="200" y="80" width="100" height="80" rx="8" fill="var(--fill)"/><rect x="195" y="72" width="110" height="14" rx="4" fill="var(--fill)"/><circle cx="220" cy="79" r="2"/><circle cx="250" cy="79" r="2"/><circle cx="280" cy="79" r="2"/><path d="M205 140 H295 V155 H205 Z" fill="var(--sol)"/><path d="M225 140 Q250 105 275 140 Z" fill="var(--accent)"/><circle cx="250" cy="132" r="8" fill="var(--feu)"/><text x="80" y="185" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Lit de braises</text><text x="250" y="185" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Boîte percée</text><text x="250" y="60" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">trous d'air</text></svg>`,
  legende: "Un lit de braises bien entretenu, puis une braise posée sur la cendre et entourée de mousse sèche dans une boîte percée.",
  motscles: ["braises", "entretenir", "transporter", "nuit", "amadouvier", "boîte"]
},
{
  id: "feu-08",
  cat: "feu",
  titre: "Cuisiner sur le feu",
  resume: "On cuisine sur les braises, pas dans les flammes. Une chaleur régulière cuit les aliments à cœur sans les brûler à l'extérieur.",
  urgence: false,
  etapes: [
    "Allumez le feu au moins 30 à 45 minutes avant de cuisiner pour obtenir un bon lit de braises.",
    "Étalez les braises sur un côté du foyer et gardez une petite flamme de l'autre pour en refaire.",
    "Posez la gamelle sur deux pierres sèches ou deux bûches vertes placées en parallèle.",
    "Ou suspendez-la à un trépied de trois bâtons liés au sommet, au-dessus des braises.",
    "Pour griller, tenez l'aliment sur une branche verte pointue, au-dessus des braises, en tournant souvent.",
    "Enveloppez poisson ou légumes dans de grandes feuilles comestibles ou du papier aluminium et enterrez-les sous les braises.",
    "Cuisez toujours viande et poisson à cœur : plus de partie rosée ni de jus rouge."
  ],
  conseils: [
    "Une pierre plate sèche, chauffée au bord du feu, fait une plancha naturelle.",
    "Faites bouillir l'eau de cuisson comme l'eau de boisson.",
    "Lavez-vous les mains avant de manipuler la nourriture, même en pleine nature."
  ],
  erreurs: [
    "Cuisiner dans les grandes flammes : extérieur carbonisé, intérieur cru.",
    "Utiliser des branches de laurier-rose, d'if ou de bois inconnu comme brochette : ils sont toxiques.",
    "Laisser des restes de nourriture près du campement : ils attirent les animaux."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 175 H310"/><path d="M90 175 L160 30 L230 175 M160 30 L160 175" stroke="var(--sol)"/><path d="M150 25 L170 35 M150 35 L170 25"/><path d="M160 30 V80"/><path d="M135 80 H185 L180 115 H140 Z" fill="var(--fill)"/><path d="M140 90 H180 L178 113 H142 Z" fill="var(--eau)"/><ellipse cx="160" cy="165" rx="45" ry="9" fill="var(--sol)"/><circle cx="140" cy="162" r="6" fill="var(--feu)"/><circle cx="160" cy="165" r="7" fill="var(--feu)"/><circle cx="180" cy="162" r="6" fill="var(--feu)"/><path d="M250 150 L300 100"/><ellipse cx="272" cy="128" rx="12" ry="6" fill="var(--accent)" transform="rotate(-45 272 128)"/><text x="40" y="60" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Trépied</text><text x="20" y="150" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Braises,</text><text x="20" y="166" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">pas flammes</text><text x="240" y="85" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Brochette</text><text x="205" y="195" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Cuire à cœur</text></svg>`,
  legende: "La gamelle pend à un trépied au-dessus des braises, et une brochette de bois vert grille à côté.",
  motscles: ["cuisiner", "braises", "trépied", "gamelle", "griller", "papillote"]
},
{
  id: "feu-09",
  cat: "feu",
  titre: "Éteindre complètement un feu",
  resume: "Un feu mal éteint peut repartir des heures plus tard, surtout avec le vent. Noyez, remuez, noyez encore, et ne partez que lorsque tout est froid au toucher.",
  urgence: false,
  etapes: [
    "Arrêtez d'ajouter du bois une heure avant de partir pour laisser le feu diminuer.",
    "Écartez les bûches restantes et versez beaucoup d'eau sur toutes les braises.",
    "Remuez cendres et braises avec un bâton pour mouiller aussi le dessous.",
    "Versez de nouveau de l'eau jusqu'à ce que plus aucun sifflement ni fumée n'apparaisse.",
    "Approchez le dos de la main au-dessus des cendres, puis touchez-les : tout doit être froid.",
    "Sans assez d'eau, mélangez longuement terre minérale ou sable avec les braises, puis vérifiez au toucher.",
    "Inspectez les alentours pour repérer une braise qui aurait sauté dans l'herbe."
  ],
  conseils: [
    "Retenez la règle : trop chaud pour la main, trop chaud pour partir.",
    "Prévoyez dès l'allumage un bidon d'eau réservé à l'extinction.",
    "Rendez le lieu tel que vous l'avez trouvé : dispersez les cendres froides et les pierres."
  ],
  erreurs: [
    "Simplement recouvrir le feu de terre : les braises couvent dessous pendant des heures.",
    "Partir parce qu'il n'y a plus de flammes visibles.",
    "Laisser le feu à un enfant ou partir en pensant que le vent va tomber."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 150 H310"/><ellipse cx="55" cy="142" rx="35" ry="8" fill="var(--sol)"/><path d="M40 60 L70 60 L75 75 L35 75 Z" fill="var(--eau)"/><path d="M45 85 V100 M55 85 V110 M65 85 V100" stroke="var(--eau)"/><ellipse cx="135" cy="142" rx="35" ry="8" fill="var(--sol)"/><path d="M115 80 L150 140" stroke-width="4" stroke="var(--sol)"/><path d="M125 120 q10 -8 20 0"/><ellipse cx="215" cy="142" rx="35" ry="8" fill="var(--sol)"/><path d="M200 70 L230 70 L235 85 L195 85 Z" fill="var(--eau)"/><path d="M205 95 V110 M215 95 V115 M225 95 V110" stroke="var(--eau)"/><ellipse cx="285" cy="142" rx="25" ry="7" fill="var(--fill)"/><path d="M270 120 Q285 95 300 120 L300 130 H270 Z" fill="var(--fill)"/><circle cx="55" cy="175" r="9"/><text x="55" y="179" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">1</text><circle cx="135" cy="175" r="9"/><text x="135" y="179" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">2</text><circle cx="215" cy="175" r="9"/><text x="215" y="179" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">3</text><circle cx="285" cy="175" r="9"/><text x="285" y="179" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">4</text><text x="55" y="40" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Noyer</text><text x="135" y="40" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Remuer</text><text x="215" y="40" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Renoyer</text><text x="285" y="40" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Toucher</text></svg>`,
  legende: "Quatre gestes dans l'ordre : noyer, remuer, noyer encore, puis vérifier à la main que tout est froid.",
  motscles: ["éteindre", "extinction", "noyer", "braises", "cendres", "sécurité"]
},
{
  id: "feu-10",
  cat: "feu",
  titre: "Feu et risque incendie en Provence",
  resume: "Dans le Var, la végétation sèche et le mistral transforment une étincelle en incendie en quelques minutes. Hors vraie situation de survie, n'allumez jamais de feu en forêt ou à proximité.",
  urgence: false,
  etapes: [
    "Retenez la règle : en forêt, dans la garrigue et le maquis, et à moins de 200 mètres de ces espaces, le public n'a pas le droit d'allumer de feu.",
    "Barbecues, réchauds à flamme, feux de camp et lanternes volantes sont concernés : renseignez-vous avant toute sortie.",
    "En été, de juin à septembre environ, l'accès aux massifs est réglementé chaque jour selon le danger : consultez la carte de la préfecture la veille au soir ou le matin.",
    "Par mistral ou fort vent, renoncez à tout feu, même en jardin, même petit.",
    "Ne jetez jamais de mégot, ni par la fenêtre d'une voiture, ni sur un sentier.",
    "Si vous voyez une fumée ou un départ de feu, appelez immédiatement le 18 ou le 112 en donnant le lieu le plus précis possible.",
    "Éloignez-vous du feu en vous dirigeant vers une zone déjà brûlée, une route ou un espace dégagé, jamais vers le haut d'une pente."
  ],
  conseils: [
    "Notez sur votre téléphone le nom du massif et le point de départ de votre randonnée pour guider les secours.",
    "Le brûlage des déchets verts au jardin est en principe interdit : apportez-les en déchetterie ou compostez-les.",
    "En vraie détresse, préférez un signal visuel sans flamme : miroir, couverture de survie, tissu de couleur vive."
  ],
  erreurs: [
    "Penser qu'un petit feu bien surveillé ne risque rien : une seule escarbille suffit par vent fort.",
    "Fuir un incendie en remontant une pente ou vers une zone de végétation dense.",
    "Partir en randonnée l'été sans avoir vérifié si le massif est ouvert."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 160 H310"/><path d="M20 160 L35 110 L50 160 Z M45 160 L62 100 L80 160 Z M75 160 L90 115 L105 160 Z" fill="var(--vert)"/><path d="M110 140 H230"/><path d="M118 134 L110 140 L118 146 M222 134 L230 140 L222 146"/><text x="170" y="130" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">200 m</text><path d="M255 160 Q240 130 258 110 Q260 125 268 126 Q266 100 282 88 Q280 118 292 132 Q298 150 255 160 Z" fill="var(--feu)"/><circle cx="272" cy="125" r="40" stroke="var(--feu)" stroke-width="3"/><path d="M244 97 L300 153" stroke="var(--feu)" stroke-width="3"/><path d="M20 40 H120 M20 55 H100 M20 70 H120" /><path d="M110 32 L120 40 L110 48 M110 62 L120 70 L110 78"/><text x="70" y="25" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Mistral</text><text x="175" y="50" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Feu interdit</text><text x="175" y="66" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Alerte : 18 / 112</text><text x="60" y="185" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif" text-anchor="middle">Forêt, maquis</text></svg>`,
  legende: "Pas de feu en forêt, garrigue ou maquis, ni à moins de 200 mètres, surtout par mistral. En cas de départ de feu : 18 ou 112.",
  motscles: ["incendie", "réglementation", "Provence", "Var", "mistral", "interdiction", "forêt", "été"]
}
);
