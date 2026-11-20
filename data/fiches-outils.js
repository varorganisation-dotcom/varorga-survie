window.FICHES = window.FICHES || [];
window.FICHES.push(
{
  id: "outils-01",
  cat: "outils",
  titre: "Préparer son téléphone",
  resume: "Sans réseau, votre téléphone reste un outil précieux à condition de l'avoir préparé avant et de ménager sa batterie.",
  urgence: false,
  etapes: [
    "Avant de partir, ouvrez VarOrga Survie une fois avec du réseau : toutes les fiches sont alors gardées dans le téléphone.",
    "Téléchargez les cartes de votre région dans Organic Maps.",
    "Téléchargez un petit modèle d'IA dans PocketPal ou Edge Gallery.",
    "Installez Bitchat sur les téléphones de toutes les personnes du groupe.",
    "En situation, activez le mode économie d'énergie, baissez la luminosité et coupez les données mobiles si le réseau est absent.",
    "Gardez le téléphone au chaud (poche intérieure) : le froid vide la batterie."
  ],
  conseils: [
    "Une batterie externe chargée et un câble valent plus qu'un deuxième téléphone.",
    "Le mode avion avec le GPS activé permet de se localiser en consommant très peu.",
    "Notez sur papier les numéros importants : le téléphone peut tomber en panne."
  ],
  erreurs: [
    "Attendre d'être sans réseau pour télécharger les cartes ou les modèles d'IA.",
    "Laisser l'écran allumé à pleine luminosité pour servir de lampe."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="40" y="25" width="80" height="150" rx="12" fill="var(--fill)"/><rect x="52" y="45" width="56" height="100" rx="4"/><rect x="62" y="60" width="16" height="16" rx="3" fill="var(--vert)"/><rect x="84" y="60" width="16" height="16" rx="3" fill="var(--eau)"/><rect x="62" y="84" width="16" height="16" rx="3" fill="var(--accent)"/><rect x="84" y="84" width="16" height="16" rx="3" fill="var(--feu)"/><rect x="170" y="40" width="90" height="40" rx="6"/><rect x="176" y="46" width="60" height="28" fill="var(--vert)"/><path d="M260 52v16"/><text x="170" y="100" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Batterie pleine</text><path d="M170 125h90M170 145h70M170 165h80"/><text x="170" y="118" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Tout télécharger</text></svg>`,
  legende: "Les applis prêtes et la batterie pleine avant de partir.",
  motscles: ["téléphone", "batterie", "hors ligne", "préparation", "cartes"]
},
{
  id: "outils-02",
  cat: "outils",
  titre: "Organic Maps : la carte sans réseau",
  resume: "Organic Maps affiche des cartes détaillées et vous guide par GPS sans aucune connexion, y compris les sentiers de randonnée.",
  urgence: false,
  etapes: [
    "Avec du réseau, ouvrez Organic Maps et téléchargez la carte « Provence-Alpes-Côte d'Azur » (ou la région où vous allez).",
    "Activez le calque randonnée et les courbes de niveau pour voir les sentiers et le relief.",
    "Le jour J, le GPS du téléphone fonctionne sans réseau : votre position s'affiche même en pleine forêt.",
    "Enregistrez votre trace en marchant : vous pourrez refaire le chemin en sens inverse.",
    "Placez un signet sur les points utiles : voiture, source, abri, point de rendez-vous.",
    "En cas d'appel aux secours, ouvrez la fiche de votre position pour lire vos coordonnées GPS aux secours."
  ],
  conseils: [
    "La recherche fonctionne hors ligne : tapez « eau potable », « refuge » ou « pharmacie ».",
    "Mettez les cartes à jour de temps en temps quand vous avez le Wi-Fi."
  ],
  erreurs: [
    "Croire que la carte se chargera sur place : sans téléchargement préalable, l'écran reste vide.",
    "Suivre aveuglément l'itinéraire : vérifiez le terrain, un sentier peut être fermé ou dangereux."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="30" y="20" width="260" height="160" rx="10" fill="var(--fill)"/><path d="M30 120c40-30 80 10 120-20s80-40 140-10" stroke="var(--eau)" stroke-width="6"/><path d="M60 170l40-60 30 20 40-70 50 50" stroke-dasharray="6 6"/><circle cx="60" cy="170" r="6" fill="var(--vert)"/><path d="M220 90c0-12 20-12 20 0 0 10-10 22-10 22s-10-12-10-22z" fill="var(--feu)"/><text x="245" y="80" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Abri</text><text x="70" y="185" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Vous</text></svg>`,
  legende: "Votre position et votre trace s'affichent sans réseau sur la carte téléchargée.",
  motscles: ["carte", "gps", "organic maps", "itinéraire", "randonnée", "position"]
},
{
  id: "outils-03",
  cat: "outils",
  titre: "Bitchat : se parler sans réseau",
  resume: "Bitchat envoie des messages de téléphone à téléphone par Bluetooth, sans internet ni réseau mobile. Chaque téléphone relaie les messages des autres.",
  urgence: false,
  etapes: [
    "Installez Bitchat sur le téléphone de chaque membre du groupe avant de partir.",
    "Laissez le Bluetooth activé et l'appli ouverte ou autorisée en arrière-plan.",
    "Choisissez un pseudo simple que tout le monde reconnaît.",
    "Écrivez dans le salon commun pour joindre tout le monde, ou en message privé pour une seule personne.",
    "Si le groupe se disperse, laissez des téléphones à intervalles : chacun relaie les messages un peu plus loin.",
    "Convenez à l'avance de messages courts : « OK », « besoin d'aide », « position », « rendez-vous ».",
  ],
  conseils: [
    "La portée directe est d'environ quelques dizaines de mètres, plus en terrain dégagé.",
    "Très utile en cas de panne de réseau générale, sur un grand site ou en montagne."
  ],
  erreurs: [
    "Compter sur Bitchat pour appeler les secours : il ne joint pas le 112. Pour cela il faut le réseau, ou quelqu'un qui en a.",
    "Couper le Bluetooth pour économiser la batterie alors qu'on attend des messages."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="25" y="70" width="40" height="70" rx="6" fill="var(--fill)"/><rect x="140" y="50" width="40" height="70" rx="6" fill="var(--fill)"/><rect x="255" y="70" width="40" height="70" rx="6" fill="var(--fill)"/><path d="M70 95c20-20 45-20 65-10" stroke="var(--eau)" stroke-dasharray="5 5"/><path d="M185 85c20-10 45-10 65 10" stroke="var(--eau)" stroke-dasharray="5 5"/><text x="20" y="165" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Vous</text><text x="132" y="145" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Relais</text><text x="245" y="165" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Ami</text><text x="100" y="30" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Bluetooth, sans réseau</text></svg>`,
  legende: "Le message passe d'un téléphone à l'autre, chacun servant de relais.",
  motscles: ["bitchat", "message", "bluetooth", "communication", "sans réseau", "groupe"]
},
{
  id: "outils-04",
  cat: "outils",
  titre: "PocketPal : une IA dans la poche",
  resume: "PocketPal fait tourner une intelligence artificielle directement dans le téléphone, sans internet. Vous pouvez lui poser des questions en français.",
  urgence: false,
  etapes: [
    "Avec du Wi-Fi, ouvrez PocketPal et téléchargez un petit modèle (par exemple un Gemma, Qwen ou Llama de petite taille). Comptez 1 à 3 Go.",
    "Faites un essai à la maison pour vérifier que votre téléphone le fait tourner assez vite.",
    "Hors ligne, chargez le modèle puis posez votre question simplement : « Comment purifier de l'eau sans pastilles ? »",
    "Demandez des réponses courtes et des étapes numérotées pour économiser la batterie.",
    "Comparez toujours la réponse avec les fiches de VarOrga Survie."
  ],
  conseils: [
    "Il faut un téléphone récent avec au moins 6 Go de mémoire vive.",
    "Utile pour traduire, calculer, rédiger un message d'alerte ou réfléchir à voix haute quand on est seul."
  ],
  erreurs: [
    "Prendre la réponse de l'IA pour une vérité : un petit modèle peut se tromper, surtout sur les plantes et les soins.",
    "Laisser l'IA tourner longtemps : elle vide vite la batterie."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="110" y="20" width="100" height="165" rx="14" fill="var(--fill)"/><rect x="122" y="45" width="66" height="26" rx="8"/><rect x="132" y="80" width="66" height="40" rx="8" fill="var(--accent)"/><rect x="122" y="128" width="50" height="20" rx="8"/><path d="M60 60l30 15M60 100h30M60 140l30-15" stroke-dasharray="4 4"/><path d="M20 90h30" /><path d="M30 80l-10 10 10 10"/><text x="225" y="90" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Questions</text><text x="225" y="106" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">et réponses</text><text x="225" y="122" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">hors ligne</text></svg>`,
  legende: "La conversation reste dans le téléphone, sans connexion.",
  motscles: ["ia", "intelligence artificielle", "pocketpal", "question", "hors ligne"]
},
{
  id: "outils-05",
  cat: "outils",
  titre: "Edge Gallery : l'IA qui voit et écoute",
  resume: "Google AI Edge Gallery fait tourner des modèles d'IA hors ligne. Son point fort : analyser une photo ou transcrire la voix, sans internet.",
  urgence: false,
  etapes: [
    "Avec du Wi-Fi, ouvrez Edge Gallery et téléchargez un modèle Gemma proposé dans l'appli.",
    "Testez « Ask Image » à la maison : prenez une photo d'un objet et demandez ce que c'est.",
    "Hors ligne, utilisez « AI Chat » pour poser vos questions, comme avec PocketPal.",
    "Utilisez « Ask Image » pour décrire une blessure, lire un panneau ou une notice en langue étrangère.",
    "Utilisez « Audio Scribe » pour transcrire ou traduire un message vocal."
  ],
  conseils: [
    "PocketPal et Edge Gallery se complètent : l'un pour discuter, l'autre pour les photos et la voix.",
    "Gardez un seul modèle téléchargé pour économiser la place."
  ],
  erreurs: [
    "Se fier à l'IA pour reconnaître un champignon ou une plante à manger : risque d'erreur mortelle.",
    "Remplacer l'appel au 15 ou au 112 par une question à l'IA."
  ],
  schema: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="40" y="40" width="110" height="80" rx="10" fill="var(--fill)"/><circle cx="95" cy="80" r="22"/><circle cx="95" cy="80" r="10" fill="var(--eau)"/><rect x="60" y="30" width="24" height="10" rx="3"/><path d="M160 80h30"/><path d="M182 72l8 8-8 8"/><rect x="200" y="50" width="90" height="60" rx="8" fill="var(--accent)"/><path d="M212 70h60M212 85h45M212 100h55" stroke="var(--fill)"/><path d="M80 150v20M70 160c0 12 20 12 20 0" /><path d="M65 150c0 22 30 22 30 0"/><text x="110" y="165" font-size="12" fill="currentColor" stroke="none" font-family="sans-serif">Photo et voix analysées</text></svg>`,
  legende: "Une photo ou un enregistrement est analysé dans le téléphone.",
  motscles: ["ia", "edge gallery", "photo", "voix", "traduction", "gemma"]
}
);
