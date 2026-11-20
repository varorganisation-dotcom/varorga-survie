window.FICHES = window.FICHES || [];
window.FICHES.push(
{
  id: "secours-01",
  cat: "secours",
  titre: "Protéger, alerter, secourir",
  resume: "Devant un accident, suivez toujours cet ordre : évitez un nouvel accident, prévenez les secours avec un message clair, puis faites les gestes utiles en attendant leur arrivée.",
  urgence: true,
  etapes: [
    "Protégez : repérez les dangers (circulation, feu, gaz, courant électrique, chute de pierres) et supprimez-les si vous pouvez le faire sans risque. Sinon, balisez la zone et tenez les curieux à l'écart.",
    "Ne déplacez la victime que si un danger vital et immédiat la menace et que vous ne pouvez pas le supprimer.",
    "Regardez l'état de la victime : est-ce qu'elle répond, est-ce qu'elle respire, est-ce qu'elle saigne beaucoup ?",
    "Alertez : appelez le 15, le 18 ou le 112. Si quelqu'un est avec vous, envoyez-le appeler pendant que vous restez près de la victime.",
    "Au téléphone, donnez : le numéro d'où vous appelez, l'adresse ou le lieu exact, ce qui s'est passé, le nombre de victimes, leur état et les gestes déjà faits.",
    "Répondez aux questions et ne raccrochez jamais le premier : c'est le secours qui met fin à l'appel et qui vous guide.",
    "Secourez : faites les gestes adaptés à l'état de la victime, couvrez-la, rassurez-la et surveillez-la sans relâche jusqu'à l'arrivée des secours."
  ],
  conseils: [
    "En pleine nature, notez vos coordonnées GPS ou un repère précis (nom du sentier, borne, pylône) avant d'appeler.",
    "Parlez calmement à la victime et dites-lui ce que vous faites, même si elle semble ne pas entendre.",
    "Envoyez une personne accueillir et guider les secours à l'entrée du chemin ou de la route."
  ],
  erreurs: [
    "Se précipiter vers la victime sans regarder les dangers et devenir une victime de plus.",
    "Raccrocher trop vite : il manque souvent une information essentielle au secours.",
    "Donner à boire ou à manger à une victime : cela peut gêner une intervention ou la faire vomir."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M60 38 L96 100 L24 100 Z" fill="var(--accent)"/><line x1="60" y1="60" x2="60" y2="80"/><circle cx="60" cy="90" r="1.5"/><rect x="142" y="38" width="36" height="64" rx="6" fill="var(--fill)"/><line x1="153" y1="93" x2="167" y2="93"/><text x="160" y="72" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">112</text><rect x="238" y="48" width="44" height="44" rx="6" fill="var(--fill)"/><path d="M254 52 h12 v12 h12 v12 h-12 v12 h-12 v-12 h-12 v-12 h12 z" fill="var(--feu)"/><line x1="104" y1="70" x2="132" y2="70"/><path d="M126 64 L132 70 L126 76"/><line x1="188" y1="70" x2="228" y2="70"/><path d="M222 64 L228 70 L222 76"/><circle cx="60" cy="140" r="12" fill="var(--fill)"/><circle cx="160" cy="140" r="12" fill="var(--fill)"/><circle cx="260" cy="140" r="12" fill="var(--fill)"/><text x="60" y="144" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">1</text><text x="160" y="144" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">2</text><text x="260" y="144" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">3</text><text x="60" y="176" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Protéger</text><text x="160" y="176" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Alerter</text><text x="260" y="176" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Secourir</text></svg>`,
  legende: "Les trois temps du secours, toujours dans cet ordre : protéger, alerter, secourir.",
  motscles: ["accident", "alerte", "appel", "message", "protéger", "secourir", "téléphone", "15", "112"],
  source: { nom: "Croix-Rouge française", url: "https://www.croix-rouge.fr/" }
},
{
  id: "secours-02",
  cat: "secours",
  titre: "Les numéros d'urgence",
  resume: "Appelez le 15 pour un problème de santé, le 18 pour un incendie ou un accident, le 17 pour une agression, et le 112 partout en Europe. Les appels sont gratuits.",
  urgence: false,
  etapes: [
    "15, SAMU : urgence médicale, malaise, blessure grave, détresse vitale.",
    "18, sapeurs-pompiers : incendie, accident, personne coincée ou en danger, fuite de gaz.",
    "17, police ou gendarmerie : agression, violence, vol en cours, danger lié à une personne.",
    "112, numéro d'urgence européen : valable dans tous les pays de l'Union européenne, il vous oriente vers le bon service.",
    "114, par SMS ou application : pour les personnes sourdes, malentendantes ou qui ne peuvent pas parler sans se mettre en danger.",
    "196, sauvetage en mer : personne en difficulté en mer ou sur le littoral.",
    "En cas de doute sur le bon numéro, appelez le 15 ou le 112 : les services se transmettent l'appel entre eux."
  ],
  conseils: [
    "Le 112 peut passer par le réseau d'un autre opérateur si le vôtre ne capte pas, à condition qu'un réseau soit disponible.",
    "Apprenez ces numéros aux enfants et notez-les sur un papier dans votre trousse de secours.",
    "Pour une intoxication, le 15 peut vous mettre en relation avec un centre antipoison."
  ],
  erreurs: [
    "Hésiter à appeler par peur de déranger : en cas de doute, appeler est toujours la bonne décision.",
    "Raccrocher en pensant s'être trompé de numéro : restez en ligne, l'appel sera transféré."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="15" y="20" width="90" height="72" rx="8" fill="var(--feu)"/><rect x="115" y="20" width="90" height="72" rx="8" fill="var(--accent)"/><rect x="215" y="20" width="90" height="72" rx="8" fill="var(--eau)"/><rect x="15" y="108" width="90" height="72" rx="8" fill="var(--fill)"/><rect x="115" y="108" width="90" height="72" rx="8" fill="var(--fill)"/><rect x="215" y="108" width="90" height="72" rx="8" fill="var(--eau)"/><g font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle"><text x="60" y="52" font-size="12" fill="currentColor" font-family="sans-serif">15</text><text x="60" y="74" font-size="12" fill="currentColor" font-family="sans-serif">SAMU</text><text x="160" y="52" font-size="12" fill="currentColor" font-family="sans-serif">18</text><text x="160" y="74" font-size="12" fill="currentColor" font-family="sans-serif">Pompiers</text><text x="260" y="52" font-size="12" fill="currentColor" font-family="sans-serif">17</text><text x="260" y="74" font-size="12" fill="currentColor" font-family="sans-serif">Police</text><text x="60" y="140" font-size="12" fill="currentColor" font-family="sans-serif">112</text><text x="60" y="162" font-size="12" fill="currentColor" font-family="sans-serif">Europe</text><text x="160" y="140" font-size="12" fill="currentColor" font-family="sans-serif">114</text><text x="160" y="162" font-size="12" fill="currentColor" font-family="sans-serif">Par SMS</text><text x="260" y="140" font-size="12" fill="currentColor" font-family="sans-serif">196</text><text x="260" y="162" font-size="12" fill="currentColor" font-family="sans-serif">En mer</text></g></svg>`,
  legende: "Les six numéros d'urgence à connaître en France, gratuits depuis n'importe quel téléphone.",
  motscles: ["numéro", "urgence", "SAMU", "pompiers", "police", "gendarmerie", "112", "114", "196", "appel"]
},
{
  id: "secours-03",
  cat: "secours",
  titre: "Position latérale de sécurité",
  resume: "Une victime qui ne répond pas mais qui respire doit être mise sur le côté, bouche vers le sol, pour que sa langue ou ses vomissements ne bloquent pas sa respiration.",
  urgence: true,
  etapes: [
    "Vérifiez qu'elle ne répond pas : parlez-lui fort, prenez-lui les mains et demandez-lui de les serrer.",
    "Allongez-la sur le dos, basculez doucement sa tête en arrière et levez son menton pour libérer le passage de l'air.",
    "Regardez, écoutez et sentez sa respiration pendant 10 secondes au plus : le ventre et la poitrine se soulèvent, vous entendez ou sentez le souffle.",
    "Si elle respire, placez le bras le plus proche de vous à angle droit, puis amenez son autre main contre sa joue, paume contre paume, et gardez-la en place.",
    "Avec votre autre main, relevez son genou le plus éloigné, pied au sol, puis tirez sur ce genou pour la faire rouler doucement vers vous, d'un seul bloc.",
    "Dégagez doucement votre main de sous sa joue, ajustez la jambe du dessus à angle droit et ouvrez sa bouche, tournée vers le sol.",
    "Alertez le 15 ou le 112 si ce n'est pas déjà fait, couvrez la victime et vérifiez sa respiration régulièrement jusqu'à l'arrivée des secours."
  ],
  conseils: [
    "Une femme enceinte se place de préférence sur le côté gauche.",
    "Un nourrisson qui respire mais ne réagit pas peut être tenu dans vos bras, sur le côté, tête légèrement plus basse.",
    "Si la respiration s'arrête ou devient anormale (bruyante, rare, saccadée), remettez la victime sur le dos et commencez le massage cardiaque."
  ],
  erreurs: [
    "Laisser sur le dos une victime inconsciente qui respire : elle risque de s'étouffer.",
    "Lui glisser un oreiller sous la tête ou lui donner à boire.",
    "Ne plus surveiller sa respiration une fois la position faite."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="160" x2="310" y2="160"/><ellipse cx="145" cy="138" rx="58" ry="16" fill="var(--fill)"/><circle cx="68" cy="132" r="15" fill="var(--fill)"/><path d="M200 144 L290 156"/><path d="M196 132 L238 100 L252 156" fill="none"/><path d="M98 128 L112 150 L78 146"/><path d="M92 146 L70 158"/><path d="M58 144 L56 152" stroke="var(--eau)"/><circle cx="238" cy="100" r="4" fill="var(--accent)"/><circle cx="78" cy="146" r="4" fill="var(--accent)"/><text x="238" y="86" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">genou plié</text><text x="70" y="96" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">main sous la joue</text><text x="60" y="184" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">bouche vers le sol</text><text x="160" y="40" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Inconsciente et respire</text></svg>`,
  legende: "La victime est sur le côté, main sous la joue, genou du dessus plié au sol, bouche ouverte vers le sol.",
  motscles: ["PLS", "inconscient", "évanoui", "respire", "position latérale", "côté", "coma"],
  source: { nom: "Croix-Rouge française", url: "https://www.croix-rouge.fr/" }
},
{
  id: "secours-04",
  cat: "secours",
  titre: "Arrêt cardiaque chez l'adulte",
  resume: "Une personne qui ne répond pas et ne respire pas, ou respire de façon anormale, est en arrêt cardiaque : appelez, massez fort et vite, utilisez un défibrillateur dès que possible.",
  urgence: true,
  etapes: [
    "Constatez qu'elle ne répond pas et ne respire pas normalement : des mouvements respiratoires rares et bruyants (gasps) ne sont pas une respiration normale.",
    "Appelez immédiatement le 15 ou le 112, mettez le haut-parleur, et faites chercher un défibrillateur automatisé externe (DAE).",
    "Allongez la victime sur le dos, sur un sol dur. Placez le talon d'une main au centre de la poitrine, l'autre main par-dessus, bras tendus.",
    "Appuyez fort, en enfonçant la poitrine de 5 à 6 cm, au rythme de 100 à 120 compressions par minute, et laissez la poitrine remonter complètement entre chaque appui.",
    "Si vous êtes formé, faites 30 compressions puis 2 insufflations. Sinon, faites uniquement des compressions sans vous arrêter.",
    "Dès que le DAE arrive, allumez-le et suivez ses instructions vocales : collez les électrodes sur la peau nue comme indiqué sur le dessin, ne touchez pas la victime pendant l'analyse et le choc.",
    "Reprenez les compressions dès que l'appareil le demande. Ne vous arrêtez que si la victime se remet à respirer normalement ou si les secours prennent le relais."
  ],
  conseils: [
    "Si vous êtes plusieurs, relayez-vous toutes les 2 minutes environ : la fatigue rend le massage moins efficace.",
    "Comptez à voix haute, le rythme d'une chanson rapide aide à tenir la bonne cadence.",
    "Le DAE ne délivre un choc que si c'est nécessaire : vous ne pouvez pas faire d'erreur en l'utilisant.",
    "Rasez ou essuyez rapidement la poitrine si elle est très poilue ou mouillée, pour que les électrodes collent bien."
  ],
  erreurs: [
    "Perdre du temps à chercher le pouls : sans formation, il est trop difficile à trouver.",
    "Masser sur un matelas mou : glissez la victime au sol.",
    "Avoir peur de faire mal : sans massage, la victime n'a presque aucune chance. Une côte cassée est un moindre mal."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M30 40 Q85 24 140 40 L140 170 Q85 182 30 170 Z" fill="var(--fill)"/><line x1="85" y1="50" x2="85" y2="140" stroke-dasharray="4 4"/><ellipse cx="85" cy="112" rx="20" ry="10" fill="var(--accent)"/><ellipse cx="85" cy="104" rx="18" ry="8" fill="var(--accent)"/><line x1="160" y1="70" x2="160" y2="125"/><path d="M154 119 L160 125 L166 119"/><text x="162" y="145" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">5 à 6 cm</text><text x="85" y="192" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">100 à 120 par min</text><rect x="210" y="30" width="90" height="62" rx="8" fill="var(--fill)"/><path d="M258 38 L244 62 L256 62 L248 84 L268 56 L256 56 L264 38 Z" fill="var(--feu)"/><text x="230" y="66" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">DAE</text><path d="M220 118 Q255 108 290 118 L290 182 L220 182 Z" fill="var(--fill)"/><rect x="228" y="124" width="18" height="14" rx="2" fill="var(--accent)"/><rect x="266" y="150" width="18" height="14" rx="2" fill="var(--accent)"/><text x="255" y="110" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">électrodes</text></svg>`,
  legende: "Les mains au centre de la poitrine enfoncent de 5 à 6 cm ; les électrodes du DAE se collent sous la clavicule droite et sous l'aisselle gauche.",
  motscles: ["arrêt cardiaque", "massage cardiaque", "RCP", "défibrillateur", "DAE", "réanimation", "ne respire pas", "cœur"],
  source: { nom: "Croix-Rouge française", url: "https://www.croix-rouge.fr/" }
},
{
  id: "secours-05",
  cat: "secours",
  titre: "Arrêt cardiaque enfant et nourrisson",
  resume: "Chez l'enfant, l'arrêt cardiaque vient souvent d'un manque d'air : commencez par 5 insufflations si vous savez les faire, puis massez en adaptant la force à sa taille.",
  urgence: true,
  etapes: [
    "Constatez que l'enfant ne réagit pas et ne respire pas normalement. Criez à l'aide et faites appeler le 15 ou le 112.",
    "Si vous êtes seul et sans téléphone, faites d'abord environ 1 minute de réanimation, puis allez alerter.",
    "Basculez légèrement la tête en arrière (position neutre, sans basculer, chez le nourrisson) et faites 5 insufflations : bouche à bouche chez l'enfant, bouche sur la bouche et le nez chez le nourrisson.",
    "Enfant : appuyez au centre de la poitrine avec le talon d'une main (ou deux mains s'il est grand), en enfonçant d'environ un tiers de l'épaisseur du thorax.",
    "Nourrisson (moins d'un an) : appuyez avec la pulpe de deux doigts au centre de la poitrine, juste sous la ligne des mamelons, en enfonçant d'environ 4 cm.",
    "Gardez un rythme de 100 à 120 compressions par minute. Alternez 30 compressions et 2 insufflations. Si vous ne savez pas insuffler, faites les compressions seules sans arrêt.",
    "Utilisez un DAE dès qu'il arrive, avec des électrodes enfant si possible. Continuez jusqu'à la reprise d'une respiration normale ou l'arrivée des secours."
  ],
  conseils: [
    "Chez le nourrisson, si les électrodes du DAE sont trop grandes, collez-en une au milieu de la poitrine et l'autre au milieu du dos.",
    "Les insufflations doivent être douces : juste assez pour voir la poitrine se soulever.",
    "Un DAE adulte peut être utilisé sur un enfant si aucun modèle pédiatrique n'est disponible."
  ],
  erreurs: [
    "Appuyer avec toute la force d'un massage adulte sur un nourrisson.",
    "Trop basculer la tête d'un nourrisson : cela peut fermer le passage de l'air.",
    "Attendre de savoir parfaitement faire pour commencer : un massage imparfait vaut mieux qu'aucun massage."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="160" y1="20" x2="160" y2="180" stroke-dasharray="4 4"/><path d="M35 60 Q80 48 125 60 L125 160 Q80 170 35 160 Z" fill="var(--fill)"/><ellipse cx="80" cy="108" rx="18" ry="9" fill="var(--accent)"/><text x="80" y="36" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Enfant</text><text x="80" y="186" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">1 main, 1/3 thorax</text><path d="M205 80 Q240 72 275 80 L275 150 Q240 158 205 150 Z" fill="var(--fill)"/><line x1="214" y1="96" x2="266" y2="96" stroke-dasharray="3 3"/><rect x="230" y="102" width="8" height="22" rx="4" fill="var(--accent)"/><rect x="242" y="102" width="8" height="22" rx="4" fill="var(--accent)"/><text x="240" y="36" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Nourrisson</text><text x="240" y="186" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">2 doigts, 4 cm</text><text x="240" y="70" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">mamelons</text><text x="160" y="14" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">5 insufflations puis 30/2</text></svg>`,
  legende: "Chez l'enfant, le talon d'une main ; chez le nourrisson, deux doigts juste sous la ligne des mamelons.",
  motscles: ["enfant", "bébé", "nourrisson", "arrêt cardiaque", "massage cardiaque", "réanimation", "insufflation", "DAE"],
  source: { nom: "Croix-Rouge française", url: "https://www.croix-rouge.fr/" }
},
{
  id: "secours-06",
  cat: "secours",
  titre: "Étouffement chez l'adulte",
  resume: "Si la personne ne peut plus ni parler, ni tousser, ni respirer, donnez jusqu'à 5 claques dans le dos, puis jusqu'à 5 compressions abdominales, et recommencez.",
  urgence: true,
  etapes: [
    "Si la personne tousse, parle ou respire encore (obstruction partielle), encouragez-la à tousser, ne lui tapez pas dans le dos et appelez le 15 si la gêne persiste.",
    "Si elle ne peut plus parler, ni tousser, ni respirer, et porte souvent les mains à sa gorge, agissez tout de suite.",
    "Restez à côté d'elle, un peu en arrière, penchez-la en avant et donnez jusqu'à 5 claques vigoureuses entre les omoplates avec le talon de la main.",
    "Si l'objet ne sort pas, placez-vous derrière elle, mettez votre poing fermé au creux de son ventre, entre le nombril et le bas du sternum, l'autre main par-dessus.",
    "Tirez fort vers vous et vers le haut, jusqu'à 5 fois (compressions abdominales, méthode de Heimlich).",
    "Alternez 5 claques et 5 compressions jusqu'à ce que l'objet sorte. Si la personne perd connaissance, allongez-la au sol, appelez le 15 ou le 112 et commencez le massage cardiaque.",
    "Même si l'objet est sorti, faites toujours voir la personne par un médecin, ou appelez le 15 pour avis."
  ],
  conseils: [
    "Chez une femme enceinte ou une personne très corpulente, remplacez les compressions abdominales par des compressions au milieu de la poitrine.",
    "Seul, vous pouvez vous appuyer d'un coup sec sur le dossier d'une chaise ou le bord d'une table, au niveau du haut du ventre.",
    "Arrêtez dès que l'objet sort et que la personne respire."
  ],
  erreurs: [
    "Taper dans le dos d'une personne qui tousse encore : vous risquez de bloquer l'objet plus loin.",
    "Aller chercher l'objet avec les doigts au fond de la gorge.",
    "Faire boire la personne pour faire passer l'objet."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="160" y1="20" x2="160" y2="180" stroke-dasharray="4 4"/><circle cx="52" cy="68" r="11" fill="var(--fill)"/><path d="M62 78 L92 122"/><path d="M92 122 L86 172 M92 122 L104 172"/><path d="M70 90 L56 112"/><path d="M118 62 L88 94" stroke="var(--feu)"/><path d="M88 84 L88 94 L98 94" stroke="var(--feu)"/><circle cx="24" cy="40" r="12" fill="var(--fill)"/><text x="24" y="44" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">1</text><text x="80" y="192" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">5 claques dans le dos</text><circle cx="215" cy="46" r="11" fill="var(--fill)"/><path d="M215 57 L215 125 M215 125 L205 172 M215 125 L225 172"/><circle cx="252" cy="44" r="11"/><path d="M252 55 L254 130 M254 130 L246 172 M254 130 L264 172"/><path d="M252 72 L222 98"/><circle cx="220" cy="100" r="7" fill="var(--accent)"/><path d="M196 112 L210 98" stroke="var(--feu)"/><path d="M202 98 L210 98 L210 106" stroke="var(--feu)"/><circle cx="184" cy="40" r="12" fill="var(--fill)"/><text x="184" y="44" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">2</text><text x="240" y="192" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">5 compressions</text></svg>`,
  legende: "D'abord 5 claques entre les omoplates, personne penchée en avant, puis 5 compressions du poing vers l'arrière et le haut.",
  motscles: ["étouffement", "fausse route", "Heimlich", "claques dans le dos", "obstruction", "gorge", "avaler de travers"],
  source: { nom: "Croix-Rouge française", url: "https://www.croix-rouge.fr/" }
},
{
  id: "secours-07",
  cat: "secours",
  titre: "Étouffement chez le nourrisson",
  resume: "Un bébé qui ne peut plus crier, pleurer ni respirer s'étouffe : alternez 5 claques dans le dos, tête plus basse, et 5 compressions de la poitrine avec deux doigts.",
  urgence: true,
  etapes: [
    "Couchez le bébé à plat ventre sur votre avant-bras, tête plus basse que le corps, en tenant sa mâchoire entre vos doigts sans appuyer sur la gorge.",
    "Appuyez votre avant-bras sur votre cuisse et donnez jusqu'à 5 claques entre les omoplates avec le talon de l'autre main, sans brutalité mais franchement.",
    "Si l'objet ne sort pas, retournez le bébé sur le dos, sur l'autre avant-bras, en soutenant bien sa tête, toujours plus basse que le corps.",
    "Avec la pulpe de deux doigts, faites jusqu'à 5 compressions lentes et profondes au milieu de la poitrine, juste sous la ligne des mamelons.",
    "Regardez dans sa bouche : retirez l'objet seulement s'il est bien visible et facile à attraper.",
    "Recommencez 5 claques puis 5 compressions tant que l'objet n'est pas sorti. Faites appeler le 15 ou le 112 dès le début.",
    "Si le bébé perd connaissance, commencez la réanimation du nourrisson et appelez le 15 ou le 112 si ce n'est pas fait. Après tout étouffement, faites-le examiner par un médecin."
  ],
  conseils: [
    "Asseyez-vous si vous le pouvez : le bébé est mieux tenu et vous êtes plus stable.",
    "Pour un enfant plus grand, utilisez les mêmes gestes que pour l'adulte, en adaptant la force.",
    "Rangez hors de portée les petits objets, cacahuètes, grains de raisin entiers et morceaux durs."
  ],
  erreurs: [
    "Faire des compressions sur le ventre d'un nourrisson : chez lui, c'est sur la poitrine.",
    "Secouer le bébé ou le suspendre par les pieds.",
    "Fouiller sa bouche à l'aveugle avec le doigt."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="160" y1="20" x2="160" y2="180" stroke-dasharray="4 4"/><path d="M20 140 L145 108" stroke-width="10" stroke="var(--sol)"/><ellipse cx="92" cy="112" rx="38" ry="12" fill="var(--fill)" transform="rotate(-14 92 112)"/><circle cx="44" cy="130" r="13" fill="var(--fill)"/><path d="M118 56 L100 92" stroke="var(--feu)"/><path d="M98 82 L100 92 L108 86" stroke="var(--feu)"/><text x="40" y="164" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">tête basse</text><text x="80" y="40" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">1. 5 claques</text><path d="M180 140 L305 108" stroke-width="10" stroke="var(--sol)"/><ellipse cx="252" cy="112" rx="38" ry="12" fill="var(--fill)" transform="rotate(-14 252 112)"/><circle cx="204" cy="130" r="13" fill="var(--fill)"/><rect x="238" y="72" width="7" height="24" rx="3" fill="var(--accent)"/><rect x="248" y="70" width="7" height="24" rx="3" fill="var(--accent)"/><text x="200" y="164" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">tête basse</text><text x="240" y="40" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">2. 5 compressions</text></svg>`,
  legende: "Bébé à plat ventre sur l'avant-bras pour les claques, puis sur le dos pour les compressions à deux doigts, tête toujours plus basse.",
  motscles: ["bébé", "nourrisson", "étouffement", "fausse route", "claques dans le dos", "obstruction", "avaler"],
  source: { nom: "Croix-Rouge française", url: "https://www.croix-rouge.fr/" }
},
{
  id: "secours-08",
  cat: "secours",
  titre: "Arrêter une hémorragie",
  resume: "Un saignement abondant qui ne s'arrête pas tue en quelques minutes : appuyez fort et sans relâcher sur la plaie. Le garrot ne sert que si l'appui est impossible ou ne suffit pas.",
  urgence: true,
  etapes: [
    "Protégez vos mains : gants, sac plastique, ou demandez à la victime d'appuyer elle-même si elle le peut.",
    "Appuyez immédiatement et fortement sur la plaie avec la main, à travers un tissu propre si vous en avez un.",
    "Allongez la victime et gardez l'appui sans le relâcher pour regarder.",
    "Appelez ou faites appeler le 15 ou le 112.",
    "Pour libérer vos mains, posez un pansement compressif : une épaisseur de tissu propre sur la plaie, serrée par une bande, une écharpe ou un vêtement noué. Si le sang traverse, ajoutez une épaisseur par-dessus et serrez davantage.",
    "Uniquement sur un bras ou une jambe, et si l'appui est impossible ou ne suffit pas, posez un garrot : à quelques centimètres au-dessus de la plaie, jamais sur une articulation, serré jusqu'à l'arrêt du saignement.",
    "Notez l'heure de pose du garrot, ne le desserrez jamais vous-même, couvrez la victime et surveillez-la jusqu'à l'arrivée des secours."
  ],
  conseils: [
    "Un garrot improvisé se fait avec une bande de tissu large (pas une ficelle) et un bâton tourné pour serrer.",
    "Lavez-vous les mains après avoir été en contact avec du sang.",
    "Si la victime devient pâle, a froid, soif ou se sent partir, prévenez à nouveau les secours."
  ],
  erreurs: [
    "Retirer un objet planté dans la plaie : il bouche peut-être le vaisseau. Appuyez autour, pas dessus.",
    "Relâcher l'appui toutes les minutes pour vérifier si ça saigne encore.",
    "Poser un garrot en premier alors qu'un simple appui aurait suffi."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="92" width="280" height="40" rx="20" fill="var(--fill)"/><ellipse cx="220" cy="112" rx="16" ry="6" fill="var(--feu)"/><rect x="196" y="56" width="48" height="22" rx="10" fill="var(--accent)"/><line x1="220" y1="40" x2="220" y2="86"/><path d="M213 79 L220 86 L227 79"/><rect x="118" y="86" width="12" height="52" rx="3" fill="var(--accent)"/><circle cx="244" cy="30" r="11" fill="var(--fill)"/><text x="244" y="34" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">1</text><text x="270" y="60" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Appuyer</text><circle cx="196" cy="160" r="11" fill="var(--fill)"/><text x="196" y="164" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">2</text><text x="250" y="164" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Pansement</text><circle cx="124" cy="62" r="11" fill="var(--fill)"/><text x="124" y="66" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">3</text><text x="124" y="40" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Garrot si échec</text><text x="124" y="162" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">noter l'heure</text><text x="60" y="186" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">côté cœur</text><path d="M40 170 L20 170 M28 164 L20 170 L28 176"/></svg>`,
  legende: "D'abord l'appui direct sur la plaie, puis le pansement compressif ; le garrot, entre la plaie et le cœur, reste le dernier recours.",
  motscles: ["hémorragie", "saignement", "sang", "garrot", "pansement compressif", "plaie", "blessure", "compression"],
  source: { nom: "Croix-Rouge française", url: "https://www.croix-rouge.fr/" }
},
{
  id: "secours-09",
  cat: "secours",
  titre: "Saignement de nez",
  resume: "Asseyez la personne, tête penchée en avant, faites-la se moucher puis pincez le bas du nez pendant 10 minutes sans relâcher.",
  urgence: false,
  etapes: [
    "Faites asseoir la personne et penchez sa tête en avant pour que le sang ne coule pas dans la gorge.",
    "Demandez-lui de se moucher doucement pour évacuer les caillots.",
    "Pincez la partie molle du nez, juste sous l'os, avec le pouce et l'index, pendant 10 minutes sans relâcher.",
    "Faites-la respirer par la bouche et cracher le sang qui arrive dans la bouche plutôt que de l'avaler.",
    "Si ça saigne encore, recommencez 10 minutes de compression.",
    "Appelez le 15 si le saignement ne s'arrête pas après deux fois 10 minutes, s'il suit un coup sur la tête, s'il est très abondant ou si la personne prend un traitement qui fluidifie le sang."
  ],
  conseils: [
    "Une compresse froide sur la nuque ou le nez peut aider, mais ne remplace pas la compression.",
    "Après l'arrêt, évitez de vous moucher fort et de faire un effort pendant quelques heures.",
    "En climat sec ou en cas de mistral, humidifier l'intérieur du nez limite les saignements à répétition."
  ],
  erreurs: [
    "Pencher la tête en arrière : le sang coule dans la gorge et peut faire vomir.",
    "Allonger la personne à plat.",
    "Relâcher le nez toutes les minutes pour voir si ça saigne encore."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="160" cy="92" r="48" fill="var(--fill)"/><path d="M114 82 L100 106 L116 110"/><path d="M118 132 Q140 150 170 140"/><ellipse cx="108" cy="122" rx="4" ry="6" fill="var(--feu)"/><rect x="88" y="90" width="22" height="9" rx="4" fill="var(--accent)" transform="rotate(-30 99 94)"/><rect x="92" y="108" width="22" height="9" rx="4" fill="var(--accent)" transform="rotate(20 103 112)"/><path d="M200 30 Q240 40 236 80"/><path d="M228 72 L236 80 L244 70"/><text x="262" y="58" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">tête en avant</text><text x="60" y="60" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">pincer 10 min</text><text x="160" y="180" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">jamais la tête en arrière</text></svg>`,
  legende: "Pouce et index pincent la partie molle du nez, tête penchée en avant.",
  motscles: ["nez", "saignement de nez", "épistaxis", "sang", "pincer"]
},
{
  id: "secours-10",
  cat: "secours",
  titre: "Brûlures",
  resume: "Refroidissez la brûlure au plus vite sous l'eau tempérée pendant 10 à 20 minutes. Une brûlure étendue, profonde ou sur une zone sensible demande d'appeler le 15.",
  urgence: true,
  etapes: [
    "Éloignez la victime de la source de chaleur. Si ses vêtements brûlent, allongez-la et roulez-la au sol ou étouffez les flammes avec une couverture.",
    "Passez la brûlure sous l'eau tempérée, d'un robinet ou d'une douche, pendant 10 à 20 minutes, le plus vite possible.",
    "Pendant ce temps, retirez bagues, montres et vêtements autour de la zone, sauf s'ils collent à la peau.",
    "Pour un produit chimique, rincez abondamment et longtemps à l'eau en retirant les vêtements souillés, en protégeant vos propres mains.",
    "Appelez le 15 ou le 112 si la brûlure est plus grande que la moitié de la paume de la victime, si la peau est blanche, noire ou cartonnée, si elle touche le visage, le cou, les mains, les articulations ou les parties génitales, si elle est électrique ou chimique, ou si la victime est un enfant.",
    "Pour une petite brûlure simple, couvrez ensuite avec un pansement propre ou un film alimentaire posé sans serrer, et surveillez.",
    "Couvrez le reste du corps de la victime pour qu'elle ne prenne pas froid, surtout un enfant, et surveillez-la jusqu'à l'arrivée des secours."
  ],
  conseils: [
    "Si vous n'avez pas de robinet, de l'eau propre versée en continu, d'une bouteille ou d'un bidon, fait l'affaire.",
    "Un coup de soleil avec cloques ou fièvre chez un enfant doit être montré à un médecin.",
    "Vérifiez que votre vaccin contre le tétanos est à jour."
  ],
  erreurs: [
    "Mettre de la glace, du beurre, de l'huile, du dentifrice ou une pommade grasse sur la brûlure.",
    "Percer les cloques.",
    "Arracher un vêtement collé à la peau.",
    "Refroidir trop longtemps une grande surface, ce qui peut faire chuter la température du corps."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M60 30 L140 30 L140 52 L124 52" fill="var(--fill)"/><rect x="84" y="18" width="20" height="12" rx="3" fill="var(--fill)"/><path d="M118 56 L118 114 M128 56 L128 114 M138 56 L138 114" stroke="var(--eau)"/><rect x="40" y="118" width="240" height="36" rx="18" fill="var(--fill)"/><ellipse cx="128" cy="128" rx="22" ry="7" fill="var(--feu)"/><text x="232" y="60" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">eau tempérée</text><text x="232" y="80" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">10 à 20 min</text><text x="160" y="182" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">pas de glace, pas de corps gras</text></svg>`,
  legende: "La brûlure est refroidie sous un filet d'eau tempérée pendant 10 à 20 minutes.",
  motscles: ["brûlure", "feu", "eau chaude", "cloque", "chimique", "coup de soleil", "ébouillanté"],
  source: { nom: "Croix-Rouge française", url: "https://www.croix-rouge.fr/" }
},
{
  id: "secours-11",
  cat: "secours",
  titre: "Plaie simple et désinfection",
  resume: "Une petite plaie se lave, se désinfecte et se protège. Surveillez-la les jours suivants et vérifiez votre vaccin contre le tétanos.",
  urgence: false,
  etapes: [
    "Lavez-vous les mains à l'eau et au savon, ou avec une solution hydroalcoolique, et mettez des gants si vous en avez.",
    "Nettoyez la plaie à l'eau propre et au savon, en partant du centre vers l'extérieur, pour retirer terre et saletés.",
    "Rincez abondamment, puis séchez autour avec une compresse propre en tamponnant.",
    "Appliquez un antiseptique incolore adapté, en suivant sa notice.",
    "Protégez avec un pansement propre, à changer chaque jour ou dès qu'il est sale ou mouillé.",
    "Consultez un médecin ou appelez le 15 si la plaie est profonde, saigne beaucoup, est large, sale, due à une morsure, située près de l'œil, sur le visage, le ventre ou la poitrine, ou si un objet est planté."
  ],
  conseils: [
    "En France, les rappels du vaccin contre le tétanos se font à 25, 45 et 65 ans, puis tous les 10 ans. En cas de doute, demandez à un médecin ou un pharmacien.",
    "Une rougeur qui s'étend, de la chaleur, du pus, une douleur qui augmente ou de la fièvre sont des signes d'infection : consultez.",
    "En pleine nature sans eau sûre, de l'eau bouillie puis refroidie convient pour nettoyer."
  ],
  erreurs: [
    "Utiliser du coton, qui laisse des fibres dans la plaie : préférez des compresses.",
    "Mélanger plusieurs antiseptiques différents.",
    "Fermer hermétiquement une plaie sale ou une morsure sans avis médical."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="50" width="68" height="80" rx="8" fill="var(--fill)"/><rect x="88" y="50" width="68" height="80" rx="8" fill="var(--fill)"/><rect x="166" y="50" width="68" height="80" rx="8" fill="var(--fill)"/><rect x="244" y="50" width="68" height="80" rx="8" fill="var(--fill)"/><path d="M30 104 Q30 80 44 80 Q58 80 58 104 Z" fill="var(--accent)"/><circle cx="44" cy="70" r="4" fill="var(--eau)"/><path d="M122 70 Q110 88 110 98 A12 12 0 0 0 134 98 Q134 88 122 70 Z" fill="var(--eau)"/><rect x="190" y="74" width="20" height="36" rx="4" fill="var(--vert)"/><rect x="195" y="66" width="10" height="8"/><rect x="254" y="80" width="48" height="20" rx="10" fill="var(--accent)" transform="rotate(-20 278 90)"/><rect x="270" y="84" width="16" height="12" fill="var(--fill)" transform="rotate(-20 278 90)"/><text x="44" y="150" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">1 Mains</text><text x="122" y="150" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">2 Laver</text><text x="200" y="150" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">3 Désinfecter</text><text x="278" y="150" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">4 Protéger</text></svg>`,
  legende: "Les quatre temps du soin d'une petite plaie : se laver les mains, laver la plaie, désinfecter, protéger.",
  motscles: ["plaie", "coupure", "écorchure", "désinfecter", "antiseptique", "pansement", "tétanos", "infection"]
},
{
  id: "secours-12",
  cat: "secours",
  titre: "Fracture, entorse, immobiliser",
  resume: "Devant une douleur forte après un choc ou une torsion, ne cherchez pas à remettre en place : immobilisez le membre tel qu'il est, avec ce que vous avez sous la main.",
  urgence: false,
  etapes: [
    "Demandez à la victime de ne pas bouger le membre blessé et laissez-la dans la position où elle a le moins mal.",
    "Recherchez les signes inquiétants : déformation, os visible, membre froid, pâle ou insensible, douleur très vive. Dans ce cas, appelez le 15 ou le 112.",
    "Retirez bagues, montres et bracelets du membre blessé avant qu'il ne gonfle.",
    "Immobilisez avec les moyens du bord : bâton, planche, carton, magazine roulé ou bâton de randonnée, rembourré avec un vêtement, et fixé par des liens de part et d'autre de la blessure, sans serrer dessus.",
    "Bloquez toujours l'articulation au-dessus et l'articulation en dessous de la blessure. Un bras peut être maintenu contre le corps avec une écharpe.",
    "Pour une entorse ou une bosse, appliquez du froid, enveloppé dans un linge, pendant 20 minutes au plus, et surélevez le membre si cela ne fait pas plus mal.",
    "Vérifiez régulièrement que les doigts ou les orteils restent chauds et roses. S'ils deviennent froids, bleus ou engourdis, desserrez les liens et appelez le 15."
  ],
  conseils: [
    "Une jambe blessée peut être attachée à la jambe valide, avec un rembourrage entre les deux.",
    "Si la plaie d'une fracture ouverte saigne, couvrez-la d'un linge propre sans appuyer sur l'os.",
    "Dans le doute entre entorse et fracture, traitez comme une fracture."
  ],
  erreurs: [
    "Tirer sur le membre ou tenter de le remettre droit.",
    "Faire marcher la victime sur une cheville très douloureuse pour la ramener plus vite.",
    "Poser la glace directement sur la peau."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="30" y="112" width="260" height="14" rx="4" fill="var(--sol)"/><rect x="30" y="80" width="260" height="32" rx="16" fill="var(--fill)"/><path d="M160 82 L154 96 L166 98 L160 110" stroke="var(--feu)"/><circle cx="60" cy="96" r="6"/><circle cx="262" cy="96" r="6"/><path d="M90 74 L90 132 M230 74 L230 132 M60 74 L60 132 M262 74 L262 132" stroke="var(--accent)" stroke-width="4"/><text x="160" y="60" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">blessure</text><text x="60" y="156" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">articulation</text><text x="262" y="156" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">articulation</text><text x="160" y="150" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">attelle</text><text x="160" y="186" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">liens loin de la blessure</text></svg>`,
  legende: "Une attelle improvisée maintient le membre, avec des liens qui bloquent les articulations de part et d'autre de la blessure.",
  motscles: ["fracture", "entorse", "attelle", "immobiliser", "os cassé", "foulure", "cheville", "bras", "écharpe"]
},
{
  id: "secours-13",
  cat: "secours",
  titre: "Traumatisme de la tête et du dos",
  resume: "Après une chute de hauteur, un accident de la route, un plongeon ou un choc violent, ne bougez pas la victime : maintenez sa tête immobile et appelez le 15.",
  urgence: true,
  etapes: [
    "Demandez à la victime de ne pas bouger, surtout la tête et le cou, même si elle se sent bien.",
    "Ne la déplacez pas, sauf danger vital immédiat (feu, noyade, risque d'écrasement).",
    "Placez-vous à sa tête et maintenez-la avec vos deux mains posées de chaque côté, dans l'axe du corps, sans tirer.",
    "Faites appeler le 15 ou le 112 en précisant comment l'accident s'est produit.",
    "Si elle ne répond plus mais respire, mettez-la en position latérale de sécurité en gardant la tête, le cou et le dos dans le même axe, si possible à plusieurs.",
    "Si elle ne respire plus normalement, commencez le massage cardiaque sans attendre.",
    "Couvrez-la, parlez-lui, et surveillez sa conscience et sa respiration jusqu'à l'arrivée des secours."
  ],
  conseils: [
    "Après un coup sur la tête, appelez le 15 en cas de perte de connaissance, même brève, de vomissements, de somnolence, de maux de tête qui augmentent, de propos confus ou d'écoulement de sang ou de liquide par le nez ou une oreille.",
    "Surveillez une personne qui s'est cogné la tête pendant les 24 à 48 heures suivantes, et ne la laissez pas seule la première nuit.",
    "Ne retirez pas le casque d'un motard, sauf si c'est indispensable pour le faire respirer et avec l'aide des secours au téléphone."
  ],
  erreurs: [
    "Asseoir ou relever la victime pour voir si elle peut marcher.",
    "Lui tourner la tête pour lui parler.",
    "La transporter vous-même à l'hôpital."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="100" x2="310" y2="100" stroke-dasharray="6 5"/><circle cx="76" cy="100" r="18" fill="var(--fill)"/><rect x="98" y="82" width="120" height="36" rx="14" fill="var(--fill)"/><path d="M218 90 L296 86 M218 110 L296 114"/><ellipse cx="76" cy="74" rx="16" ry="8" fill="var(--accent)"/><ellipse cx="76" cy="126" rx="16" ry="8" fill="var(--accent)"/><path d="M40 74 L20 60 M40 126 L20 140"/><text x="76" y="46" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">mains de chaque côté</text><text x="210" y="66" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">tête, cou, dos</text><text x="210" y="146" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">dans le même axe</text><text x="160" y="184" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Ne pas bouger la victime</text></svg>`,
  legende: "Le sauveteur, placé à la tête, la maintient des deux mains pour garder la tête, le cou et le dos dans le même axe.",
  motscles: ["tête", "dos", "colonne", "cou", "chute", "traumatisme", "commotion", "plongeon", "accident", "ne pas bouger"],
  source: { nom: "Croix-Rouge française", url: "https://www.croix-rouge.fr/" }
},
{
  id: "secours-14",
  cat: "secours",
  titre: "Malaise et AVC",
  resume: "Un malaise se traite par le repos et l'appel au 15. Un visage qui se déforme, un bras qui tombe ou une parole troublée font penser à un AVC : appelez le 15 tout de suite.",
  urgence: true,
  etapes: [
    "Mettez la personne au repos, assise ou allongée, dans la position où elle se sent le mieux, et desserrez ce qui la gêne.",
    "Posez-lui des questions : depuis quand, est-ce la première fois, a-t-elle une maladie ou un traitement, s'est-elle blessée récemment ?",
    "Recherchez les signes d'AVC avec le mot VITE : Visage paralysé (bouche de travers quand elle sourit), Inertie d'un bras ou d'une jambe (elle ne peut pas lever les deux bras), Trouble de la parole (mots confus ou impossibles), En urgence : appelez le 15.",
    "Notez l'heure exacte du début des signes : c'est essentiel pour le traitement à l'hôpital.",
    "Appelez le 15 sans attendre en cas d'AVC suspecté, de douleur dans la poitrine, de gêne pour respirer, de sueurs, de pâleur, ou si le malaise ne passe pas.",
    "Si la personne est diabétique, consciente et capable d'avaler, donnez-lui du sucre (morceaux, jus de fruits, boisson sucrée) si elle le demande ou si le 15 vous le conseille.",
    "Suivez les consignes du 15, ne laissez pas la personne seule et surveillez-la jusqu'à l'arrivée des secours."
  ],
  conseils: [
    "Les signes d'un AVC peuvent disparaître en quelques minutes : appelez quand même le 15, c'est souvent l'annonce d'un AVC plus grave.",
    "Une douleur dans la poitrine qui serre, irradie dans le bras, la mâchoire ou le dos, peut être un infarctus : 15 immédiatement, même si elle s'atténue.",
    "Par forte chaleur en Provence, pensez aussi au coup de chaleur : mettez la personne à l'ombre et rafraîchissez-la."
  ],
  erreurs: [
    "Attendre que ça passe ou conduire soi-même la personne aux urgences.",
    "Donner de l'aspirine ou un médicament de sa propre initiative.",
    "Donner à boire ou à manger à une personne qui présente des signes d'AVC : elle risque de faire une fausse route."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="20" width="70" height="120" rx="8" fill="var(--fill)"/><rect x="86" y="20" width="70" height="120" rx="8" fill="var(--fill)"/><rect x="164" y="20" width="70" height="120" rx="8" fill="var(--fill)"/><rect x="242" y="20" width="70" height="120" rx="8" fill="var(--feu)"/><circle cx="43" cy="70" r="20"/><circle cx="36" cy="64" r="2"/><circle cx="50" cy="64" r="2"/><path d="M34 78 Q42 82 52 84"/><path d="M110 56 L110 40 M132 56 L132 90"/><circle cx="121" cy="66" r="8"/><path d="M178 60 Q188 50 196 62 Q204 74 212 60"/><path d="M182 80 L200 80 M190 86 L216 86" stroke-dasharray="3 4"/><text x="277" y="74" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">15</text><text x="43" y="124" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">V</text><text x="121" y="124" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">I</text><text x="199" y="124" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">T</text><text x="277" y="124" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">E</text><text x="43" y="164" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Visage</text><text x="121" y="164" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Inertie</text><text x="199" y="164" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Trouble parole</text><text x="277" y="164" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">En urgence</text></svg>`,
  legende: "Le mot VITE pour reconnaître un AVC : visage déformé, bras qui tombe, parole troublée, appel en urgence au 15.",
  motscles: ["malaise", "AVC", "attaque cérébrale", "VITE", "FAST", "paralysie", "infarctus", "douleur poitrine", "diabète", "hypoglycémie"],
  source: { nom: "Croix-Rouge française", url: "https://www.croix-rouge.fr/" }
},
{
  id: "secours-15",
  cat: "secours",
  titre: "Asthme et allergie grave",
  resume: "Lors d'une crise d'asthme, aidez la personne à prendre son traitement. Lors d'une réaction allergique grave, utilisez son stylo d'adrénaline s'il existe et appelez le 15 immédiatement.",
  urgence: true,
  etapes: [
    "Asthme : installez la personne assise, légèrement penchée en avant, au calme, loin de ce qui a pu déclencher la crise (fumée, pollen, effort, froid).",
    "Aidez-la à prendre son médicament de crise (inhalateur), selon ce que son médecin lui a prescrit.",
    "Appelez le 15 si la crise ne s'améliore pas rapidement, si elle a du mal à parler, si ses lèvres deviennent bleues ou si elle s'épuise.",
    "Allergie grave : reconnaissez les signes après une piqûre, un aliment ou un médicament : gonflement du visage, des lèvres ou de la langue, gêne pour respirer ou avaler, plaques sur la peau, malaise, vomissements.",
    "Si la personne a un stylo auto-injecteur d'adrénaline, aidez-la à l'utiliser tout de suite sur la face externe de la cuisse, même à travers le pantalon, en suivant la notice.",
    "Appelez le 15 ou le 112 immédiatement, même si l'injection semble avoir fonctionné.",
    "Laissez-la assise si elle respire mal, allongée jambes surélevées si elle se sent partir, et surveillez sa respiration jusqu'à l'arrivée des secours."
  ],
  conseils: [
    "Si les signes persistent, une seconde injection peut être prévue par l'ordonnance : suivez la notice et les consignes du 15.",
    "Les personnes allergiques ou asthmatiques devraient garder leur traitement de crise toujours sur elles, et le dire à leurs compagnons de randonnée.",
    "Si la personne perd connaissance et ne respire plus normalement, commencez le massage cardiaque."
  ],
  erreurs: [
    "Allonger à plat une personne qui a du mal à respirer.",
    "Hésiter à utiliser le stylo d'adrénaline par peur de mal faire : le retard est bien plus dangereux.",
    "Croire que tout est réglé après l'injection et ne pas appeler les secours."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="160" y1="20" x2="160" y2="180" stroke-dasharray="4 4"/><rect x="58" y="50" width="26" height="60" rx="6" fill="var(--eau)"/><path d="M58 96 L34 96 L34 116 L70 116 L70 110" fill="var(--fill)"/><path d="M30 106 L14 106 M30 112 L18 120" stroke-dasharray="2 4"/><text x="80" y="36" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Asthme</text><text x="80" y="150" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">assis, penché</text><text x="80" y="168" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">inhalateur</text><path d="M190 60 Q186 120 196 176 L246 176 Q256 120 250 60 Z" fill="var(--fill)"/><rect x="262" y="96" width="44" height="14" rx="5" fill="var(--accent)"/><rect x="252" y="99" width="10" height="8" fill="var(--feu)"/><path d="M300 80 L258 98"/><path d="M262 90 L258 98 L266 100"/><text x="240" y="36" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Allergie grave</text><text x="270" y="140" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">face externe</text><text x="270" y="156" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">de la cuisse</text></svg>`,
  legende: "À gauche, l'inhalateur de la personne asthmatique ; à droite, le stylo d'adrénaline appliqué sur la face externe de la cuisse.",
  motscles: ["asthme", "allergie", "anaphylaxie", "œdème", "adrénaline", "stylo auto-injecteur", "respiration", "gonflement"],
  source: { nom: "Croix-Rouge française", url: "https://www.croix-rouge.fr/" }
},
{
  id: "secours-16",
  cat: "secours",
  titre: "Piqûres, tiques et méduses",
  resume: "La plupart des piqûres se soignent sur place. Appelez le 15 en cas de piqûre dans la bouche ou la gorge, de piqûres nombreuses ou de signes d'allergie.",
  urgence: false,
  etapes: [
    "Abeille, guêpe, frelon : retirez le dard s'il est visible, le plus vite possible, en le grattant avec un ongle ou le bord d'une carte. Lavez à l'eau et au savon, puis appliquez du froid enveloppé dans un linge.",
    "Appelez le 15 si la piqûre est dans la bouche ou la gorge, si les piqûres sont nombreuses, ou en cas de gonflement du visage, de gêne pour respirer ou de malaise.",
    "Tique : retirez-la au plus tôt avec un tire-tique, en la saisissant au ras de la peau et en tournant doucement, sans tirer d'un coup. Désinfectez ensuite.",
    "Notez la date de la piqûre de tique et surveillez la zone pendant un mois : une rougeur qui s'étend en cercle, de la fièvre ou des douleurs doivent faire consulter un médecin.",
    "Méduse : sortez de l'eau, ne frottez pas, rincez à l'eau de mer et retirez les filaments restants avec une carte ou une pince, en protégeant vos doigts.",
    "Pour la méduse, du froid enveloppé dans un linge peut ensuite calmer la douleur. Appelez le 15 en cas de malaise, de gêne respiratoire ou de piqûre étendue chez un enfant."
  ],
  conseils: [
    "Après une balade dans la garrigue ou les hautes herbes, inspectez tout le corps, y compris le cuir chevelu, derrière les oreilles et les plis.",
    "Dans les régions où vivent les scorpions ou les araignées du Var, une piqûre douloureuse se soigne pareil : lavage, froid, et le 15 si l'état se dégrade.",
    "Ne buvez pas directement dans une canette ouverte dehors en été : une guêpe peut s'y cacher."
  ],
  erreurs: [
    "Mettre de l'éther, de l'alcool ou de l'huile sur une tique avant de la retirer.",
    "Rincer une piqûre de méduse à l'eau douce ou frotter avec du sable.",
    "Presser le sac à venin d'un dard entre deux doigts."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="110" y1="20" x2="110" y2="180" stroke-dasharray="4 4"/><line x1="214" y1="20" x2="214" y2="180" stroke-dasharray="4 4"/><line x1="14" y1="130" x2="96" y2="130"/><path d="M40 130 L54 96" stroke="var(--feu)"/><rect x="50" y="104" width="44" height="26" rx="3" fill="var(--fill)" transform="rotate(-20 72 117)"/><path d="M30 150 L80 150 M72 144 L80 150 L72 156"/><text x="56" y="40" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Dard</text><text x="56" y="176" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">gratter</text><line x1="122" y1="130" x2="204" y2="130"/><ellipse cx="162" cy="120" rx="9" ry="7" fill="var(--sol)"/><path d="M154 116 L146 110 M154 124 L146 128 M170 116 L178 110 M170 124 L178 128"/><path d="M152 106 L162 112 L172 106 L172 78 L152 78 Z" fill="var(--fill)"/><path d="M184 84 A16 16 0 1 1 180 66"/><path d="M176 62 L180 66 L174 70"/><text x="162" y="40" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Tique</text><text x="162" y="176" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">tourner</text><path d="M236 100 Q264 60 292 100 Z" fill="var(--fill)"/><path d="M244 100 Q240 120 248 136 M260 100 Q256 124 264 142 M276 100 Q272 120 280 136"/><path d="M250 64 L252 72 M266 58 L266 66 M282 64 L280 72" stroke="var(--eau)"/><text x="264" y="40" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Méduse</text><text x="264" y="176" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">eau de mer</text></svg>`,
  legende: "Gratter le dard avec une carte, tourner le tire-tique, rincer la piqûre de méduse à l'eau de mer.",
  motscles: ["piqûre", "guêpe", "abeille", "frelon", "tique", "Lyme", "méduse", "insecte", "dard", "scorpion"]
},
{
  id: "secours-17",
  cat: "secours",
  titre: "Morsure de vipère",
  resume: "Une morsure de vipère est rarement mortelle en France mais doit toujours être prise en charge : calmez, allongez, immobilisez le membre et appelez le 15.",
  urgence: true,
  etapes: [
    "Éloignez-vous du serpent et ne cherchez pas à le capturer ni à le tuer. Une photo prise de loin, sans risque, peut aider.",
    "Allongez la victime, rassurez-la et limitez ses mouvements : l'agitation et la marche favorisent la diffusion du venin.",
    "Retirez rapidement bagues, bracelets, montre et chaussure du membre mordu, avant qu'il ne gonfle.",
    "Nettoyez doucement la morsure à l'eau et au savon ou avec un antiseptique, sans frotter fort.",
    "Immobilisez le membre mordu, sans serrer, comme pour une fracture, et gardez-le au niveau du cœur.",
    "Notez l'heure de la morsure et surveillez l'apparition d'un gonflement, de vomissements, de diarrhée, d'un malaise ou d'une gêne respiratoire.",
    "Appelez le 15 ou le 112 dans tous les cas et suivez ses consignes. La victime doit être transportée par les secours, sans marcher si possible."
  ],
  conseils: [
    "Dans le Var, la vipère aspic vit dans les pierriers, murets et broussailles : marchez avec des chaussures montantes et regardez où vous posez les mains.",
    "La plupart des serpents fuient si on les laisse tranquilles : contournez-les largement.",
    "Les enfants et les personnes âgées sont plus sensibles au venin : ne tardez pas."
  ],
  erreurs: [
    "Inciser la plaie, aspirer le venin avec la bouche ou avec un appareil d'aspiration.",
    "Poser un garrot ou un lien serré.",
    "Mettre de la glace, donner de l'alcool ou faire marcher la victime pour rejoindre la voiture."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="96" x2="310" y2="96"/><rect x="20" y="58" width="220" height="30" rx="15" fill="var(--fill)"/><path d="M240 60 L278 52 L288 88 L240 88" fill="var(--fill)"/><circle cx="218" cy="70" r="3" fill="var(--feu)"/><circle cx="228" cy="70" r="3" fill="var(--feu)"/><rect x="20" y="88" width="250" height="6" fill="var(--sol)"/><text x="223" y="44" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">morsure</text><text x="110" y="44" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">allonger, immobiliser</text><circle cx="60" cy="146" r="22"/><path d="M46 132 L74 160"/><text x="60" y="190" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">inciser</text><circle cx="160" cy="146" r="22"/><path d="M146 132 L174 160"/><text x="160" y="190" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">aspirer</text><circle cx="260" cy="146" r="22"/><path d="M246 132 L274 160"/><text x="260" y="190" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">garrot</text><path d="M52 150 L68 140 M152 146 L168 146 M250 146 L270 146" stroke="var(--feu)"/></svg>`,
  legende: "Le membre mordu est allongé et immobilisé sans serrer ; on n'incise pas, on n'aspire pas, on ne pose pas de garrot.",
  motscles: ["vipère", "serpent", "morsure", "venin", "aspic", "couleuvre"]
},
{
  id: "secours-18",
  cat: "secours",
  titre: "Noyade",
  resume: "Ne vous mettez pas en danger : lancez un objet qui flotte plutôt que de plonger. Hors de l'eau, une victime qui ne respire pas reçoit 5 insufflations puis un massage cardiaque.",
  urgence: true,
  etapes: [
    "Faites appeler immédiatement le 18 ou le 112, ou le 196 en mer.",
    "Depuis le bord, tendez une perche, une branche ou un vêtement, ou lancez un objet qui flotte (bouée, glacière vide, bidon fermé). N'entrez dans l'eau que si vous êtes bon nageur et que c'est sans danger.",
    "Sortez la victime de l'eau et allongez-la sur le dos sur une surface dure. Vérifiez si elle répond et si elle respire.",
    "Si elle ne respire pas normalement, faites 5 insufflations, puis commencez le massage cardiaque : 30 compressions, 2 insufflations. Si vous ne savez pas insuffler, faites les compressions seules.",
    "Utilisez un DAE dès que possible, après avoir essuyé rapidement la poitrine.",
    "Si elle respire mais ne répond pas, mettez-la en position latérale de sécurité. Si elle vomit, tournez-la sur le côté.",
    "Retirez ses vêtements mouillés si possible, séchez-la et couvrez-la. Même si elle va bien, elle doit être examinée par un médecin : appelez le 15."
  ],
  conseils: [
    "En Méditerranée, le courant et le vent de terre (mistral) peuvent emporter un matelas ou un nageur au large : restez près du bord et dans les zones surveillées.",
    "Une personne qui se noie ne crie souvent pas et ne fait pas de grands gestes : elle s'enfonce en silence. Surveillez les enfants sans interruption.",
    "Dans une rivière en crue ou un torrent, ne descendez jamais dans l'eau pour secourir : appelez le 18."
  ],
  erreurs: [
    "Plonger pour secourir sans savoir nager ou sans objet flottant : on perd souvent deux vies au lieu d'une.",
    "Essayer de faire sortir l'eau des poumons en appuyant sur le ventre ou en suspendant la victime.",
    "Laisser repartir une personne qui a bu la tasse et tousse beaucoup sans avis médical."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 110 L120 110 L130 190 L10 190 Z" fill="var(--sol)"/><path d="M120 120 Q150 112 180 120 T240 120 T310 120 L310 190 L130 190 Z" fill="var(--eau)"/><circle cx="60" cy="48" r="10" fill="var(--fill)"/><path d="M60 58 L60 86 M60 86 L50 110 M60 86 L70 110 M60 66 L84 56"/><path d="M84 56 Q170 20 230 108" stroke-dasharray="5 5"/><circle cx="232" cy="114" r="12" fill="var(--accent)"/><circle cx="232" cy="114" r="5" fill="var(--fill)"/><circle cx="270" cy="114" r="9" fill="var(--fill)"/><path d="M262 104 L254 92 M278 104 L286 92"/><text x="160" y="16" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Lancer, ne pas plonger</text><text x="60" y="150" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">rester au bord</text><text x="230" y="160" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">objet qui flotte</text></svg>`,
  legende: "Depuis le bord, le sauveteur lance un objet qui flotte à la victime plutôt que d'entrer dans l'eau.",
  motscles: ["noyade", "noyé", "eau", "mer", "piscine", "baignade", "rivière", "sauvetage", "196"],
  source: { nom: "Croix-Rouge française", url: "https://www.croix-rouge.fr/" }
},
{
  id: "secours-19",
  cat: "secours",
  titre: "Intoxications et monoxyde de carbone",
  resume: "Devant une intoxication, ne faites pas vomir et appelez le 15 ou un centre antipoison. Si plusieurs personnes ont mal à la tête dans une même pièce chauffée, pensez au monoxyde de carbone : sortez et appelez.",
  urgence: true,
  etapes: [
    "Monoxyde de carbone : maux de tête, nausées, vertiges, fatigue, souvent chez plusieurs personnes au même endroit, près d'un chauffage, d'un poêle, d'un brasero ou d'un groupe électrogène. Ce gaz est invisible et sans odeur.",
    "Ouvrez portes et fenêtres, arrêtez l'appareil si possible, sortez tout le monde à l'air libre et ne revenez pas à l'intérieur. Appelez le 18, le 15 ou le 112.",
    "Champignons : appelez le 15 ou un centre antipoison dès les premiers troubles (vomissements, diarrhée, malaise), surtout s'ils apparaissent plus de 6 heures après le repas, ce qui fait craindre une espèce mortelle.",
    "Gardez les restes de champignons, crus ou cuits, et les épluchures pour les montrer aux secours. Prévenez toutes les personnes qui ont partagé le repas.",
    "Produit ménager ou médicament avalé : ne faites pas vomir, ne donnez rien à boire, pas même du lait. Gardez l'emballage pour lire le nom du produit aux secours.",
    "Produit dans les yeux ou sur la peau : rincez abondamment à l'eau pendant au moins 15 minutes.",
    "Si la victime ne répond plus mais respire, position latérale de sécurité. Si elle ne respire plus, massage cardiaque. Dans tous les cas, appelez le 15 ou le 112 et suivez ses consignes."
  ],
  conseils: [
    "Ne faites jamais tourner un groupe électrogène, un barbecue ou un brasero dans un logement, un garage ou une tente, même porte ouverte.",
    "Pour le Var, le centre antipoison de référence est celui de Marseille. Si vous ne connaissez pas le numéro, le 15 vous oriente.",
    "Ne consommez jamais un champignon que vous n'avez pas fait identifier avec certitude : les pharmaciens peuvent vous aider."
  ],
  erreurs: [
    "Faire vomir la victime ou lui donner du lait.",
    "Rester dans la pièce pour aérer ou chercher l'origine du gaz.",
    "Attendre que les symptômes d'une intoxication aux champignons passent seuls."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="110" y1="20" x2="110" y2="180" stroke-dasharray="4 4"/><line x1="214" y1="20" x2="214" y2="180" stroke-dasharray="4 4"/><path d="M26 100 Q56 52 86 100 Z" fill="var(--feu)"/><rect x="48" y="100" width="16" height="36" rx="4" fill="var(--fill)"/><text x="56" y="40" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Champignon</text><text x="56" y="164" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">garder les restes</text><rect x="146" y="70" width="32" height="66" rx="6" fill="var(--fill)"/><rect x="154" y="58" width="16" height="12" fill="var(--accent)"/><path d="M152 92 L172 112 M172 92 L152 112" stroke="var(--feu)"/><text x="162" y="40" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Produit</text><text x="162" y="164" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">ne pas faire vomir</text><path d="M226 90 L254 64 L282 90 L282 136 L226 136 Z" fill="var(--fill)"/><rect x="246" y="104" width="16" height="32" fill="var(--sol)"/><text x="254" y="86" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">CO</text><path d="M266 120 L306 120 M298 112 L306 120 L298 128"/><text x="264" y="40" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">Gaz CO</text><text x="264" y="164" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">sortir, aérer</text></svg>`,
  legende: "Champignons : garder les restes ; produit avalé : ne pas faire vomir ; monoxyde de carbone : sortir et aérer.",
  motscles: ["intoxication", "poison", "champignon", "monoxyde de carbone", "CO", "produit ménager", "antipoison", "médicament", "groupe électrogène"],
  source: { nom: "Croix-Rouge française", url: "https://www.croix-rouge.fr/" }
},
{
  id: "secours-20",
  cat: "secours",
  titre: "Trousse de secours de survie",
  resume: "Une trousse compacte, étanche et vérifiée chaque année permet de soigner les petits bobos et de tenir en attendant les secours.",
  urgence: false,
  etapes: [
    "Protection : gants jetables, solution hydroalcoolique, masque de bouche à bouche si vous en avez un.",
    "Soins des plaies : compresses stériles, antiseptique incolore en unidoses, sérum physiologique, pansements de plusieurs tailles, sparadrap, bandes.",
    "Saignements : pansement compressif ou coussin hémostatique, et un garrot tourniquet si vous avez été formé à son usage.",
    "Petits outils : ciseaux à bouts ronds, pince à écharde, tire-tique, épingles de nourrice, écharpe triangulaire pour soutenir un bras.",
    "Chaleur et froid : couverture de survie, poche de froid instantané, thermomètre.",
    "Médicaments : votre traitement personnel en quantité suffisante, un antidouleur courant comme le paracétamol, et ce que votre médecin vous conseille.",
    "Infos utiles : liste des numéros d'urgence, groupes sanguins, allergies et traitements de chaque membre de la famille, un crayon et du papier."
  ],
  conseils: [
    "Rangez le tout dans une pochette étanche et visible (rouge ou orange) et vérifiez les dates de péremption une fois par an.",
    "Gardez une trousse à la maison, une dans la voiture et une petite dans le sac de randonnée.",
    "Une formation aux premiers secours (PSC1, quelques heures) vaut plus que la meilleure trousse."
  ],
  erreurs: [
    "Emporter des médicaments sur ordonnance pour d'autres personnes que soi.",
    "Oublier de remplacer ce qui a été utilisé.",
    "Laisser la trousse en plein soleil dans la voiture tout l'été sans contrôler les médicaments."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="60" width="140" height="110" rx="12" fill="var(--feu)"/><rect x="66" y="44" width="48" height="16" rx="6"/><path d="M80 90 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 v-20 h20 z" fill="var(--fill)"/><rect x="186" y="30" width="34" height="34" rx="3" fill="var(--fill)"/><text x="258" y="52" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">compresses</text><circle cx="203" cy="94" r="14" fill="var(--fill)"/><circle cx="203" cy="94" r="5"/><text x="258" y="98" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">bande</text><path d="M190 124 L214 144 M190 144 L214 124"/><circle cx="188" cy="146" r="4"/><circle cx="188" cy="122" r="4"/><text x="258" y="138" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">ciseaux</text><rect x="186" y="160" width="34" height="22" rx="2" fill="var(--accent)"/><text x="258" y="176" font-size="12" fill="currentColor" font-family="sans-serif" stroke="none" text-anchor="middle">couverture</text></svg>`,
  legende: "Une trousse étanche et repérable, avec compresses, bandes, ciseaux et couverture de survie.",
  motscles: ["trousse de secours", "pharmacie", "kit", "pansement", "couverture de survie", "matériel", "sac"]
}
);
