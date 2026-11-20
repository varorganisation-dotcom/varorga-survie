(function () {
  "use strict";

  var CATS = [
    { cle: "secours", nom: "Premiers secours", ico: "✚", desc: "Gestes qui sauvent" },
    { cle: "eau", nom: "Eau", ico: "💧", desc: "Trouver, purifier" },
    { cle: "feu", nom: "Feu", ico: "🔥", desc: "Allumer, entretenir" },
    { cle: "abri", nom: "Abri", ico: "⛺", desc: "Se protéger" },
    { cle: "nourriture", nom: "Nourriture", ico: "🌿", desc: "Plantes, pêche" },
    { cle: "potager", nom: "Potager de survie", ico: "🥔", desc: "Cultiver, garder ses graines" },
    { cle: "orientation", nom: "Orientation et signaux", ico: "🧭", desc: "Se repérer, se signaler" },
    { cle: "climat", nom: "Climat et météo", ico: "⛅", desc: "Froid, chaleur, orage" },
    { cle: "catastrophes", nom: "Catastrophes et ville", ico: "⚠️", desc: "Incendie, inondation" },
    { cle: "mental", nom: "Mental et sécurité", ico: "🧠", desc: "Stress, conflits" },
    { cle: "materiel", nom: "Matériel et nœuds", ico: "🪢", desc: "Kit, couteau, nœuds" },
    { cle: "outils", nom: "Outils hors ligne", ico: "📱", desc: "Applis complémentaires" }
  ];

  var APPLIS = [
    {
      nom: "Organic Maps", fiche: "outils-02", role: "Cartes et GPS sans réseau",
      android: "app.organicmaps", ios: "https://organicmaps.app/"
    },
    {
      nom: "Bitchat", fiche: "outils-03", role: "Messages par Bluetooth sans réseau",
      android: "com.bitchat.droid", ios: "https://bitchat.free/"
    },
    {
      nom: "PocketPal AI", fiche: "outils-04", role: "IA de discussion hors ligne",
      android: "com.pocketpalai", ios: "https://apps.apple.com/app/id6502579498"
    },
    {
      nom: "Google AI Edge Gallery", fiche: "outils-05", role: "IA hors ligne : photo, voix, discussion",
      android: "com.google.ai.edge.gallery", ios: "https://apps.apple.com/app/id6749645337"
    }
  ];

  var FICHES = (window.FICHES || []).slice();
  var parId = {};
  FICHES.forEach(function (f) { parId[f.id] = f; });

  var vue = document.getElementById("vue");
  var q = document.getElementById("q");
  var btnRetour = document.getElementById("btn-retour");
  var ua = navigator.userAgent || "";
  var estAndroid = /Android/i.test(ua);
  var estIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  // ---------- utilitaires ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function sansAccent(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  function svgSur(s) {
    // Les schémas sont écrits par nous ; on retire tout de même scripts et gestionnaires d'événements.
    return String(s || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/\son\w+="[^"]*"/gi, "");
  }
  function cat(cle) { for (var i = 0; i < CATS.length; i++) if (CATS[i].cle === cle) return CATS[i]; return { cle: cle, nom: cle, ico: "", desc: "" }; }
  function fichesDe(cle) { return FICHES.filter(function (f) { return f.cat === cle; }); }

  function lireFavoris() { try { return JSON.parse(localStorage.getItem("vs-favoris") || "[]"); } catch (e) { return []; } }
  function ecrireFavoris(l) { try { localStorage.setItem("vs-favoris", JSON.stringify(l)); } catch (e) {} }

  function ligneFiche(f) {
    return '<li><a href="#/fiche/' + esc(f.id) + '"><span class="vignette" aria-hidden="true">' + svgSur(f.schema) + '</span><span><b>' +
      esc(f.titre) + (f.urgence ? '<span class="pastille">URGENT</span>' : "") + '</b><small>' + esc(f.resume) + "</small></span></a></li>";
  }

  // ---------- écrans ----------
  function accueil() {
    var tuiles = CATS.map(function (c) {
      var n = fichesDe(c.cle).length;
      return '<a class="tuile" href="#/cat/' + c.cle + '"><span class="ico">' + c.ico + "</span><b>" + esc(c.nom) + "</b><small>" + esc(c.desc) + " · " + n + " fiche" + (n > 1 ? "s" : "") + "</small></a>";
    }).join("");
    vue.innerHTML =
      '<a class="alerte" href="#/urgence"><span>☎</span>Urgence : numéros et gestes vitaux</a>' +
      "<h1>Toutes les fiches</h1><p class=\"sous\">" + FICHES.length + " fiches illustrées, disponibles sans réseau.</p>" +
      '<div class="grille">' + tuiles + "</div>" +
      '<p class="pied">VarOrga Survie · Var Organisation, Cuers<br>Ces fiches ne remplacent pas une formation aux premiers secours. En cas de doute, appelez le 15 ou le 112.</p>';
  }

  function categorie(cle) {
    var c = cat(cle);
    var l = fichesDe(cle);
    var html = "<h1>" + c.ico + " " + esc(c.nom) + "</h1><p class=\"sous\">" + l.length + " fiches</p>";
    if (cle === "outils") html += blocApplis();
    html += '<ul class="liste">' + l.map(ligneFiche).join("") + "</ul>";
    vue.innerHTML = html;
  }

  function lienAppli(a) {
    if (estAndroid) {
      var store = "https://play.google.com/store/apps/details?id=" + a.android;
      return {
        ouvrir: "intent:#Intent;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;package=" + a.android +
          ";S.browser_fallback_url=" + encodeURIComponent(store) + ";end",
        store: store, storeNom: "Play Store"
      };
    }
    if (estIOS) return { ouvrir: null, store: a.ios, storeNom: "App Store / site" };
    return { ouvrir: null, store: "https://play.google.com/store/apps/details?id=" + a.android, storeNom: "Play Store" };
  }

  function blocApplis() {
    var h = "<h2>Ouvrir les applis</h2>";
    APPLIS.forEach(function (a) {
      var l = lienAppli(a);
      h += '<div class="appli"><b>' + esc(a.nom) + "</b><p>" + esc(a.role) + '</p><div class="boutons">' +
        (l.ouvrir ? '<a class="bouton" href="' + esc(l.ouvrir) + '">Ouvrir</a>' : "") +
        '<a class="bouton clair" href="#/fiche/' + a.fiche + '">Mode d\'emploi</a>' +
        '<a class="bouton clair" href="' + esc(l.store) + '" target="_blank" rel="noopener">' + l.storeNom + "</a></div></div>";
    });
    if (estIOS) h += '<p class="sous">Sur iPhone, ouvrez ces applis depuis votre écran d\'accueil : Safari ne peut pas les lancer directement.</p>';
    return h + "<h2>Fiches</h2>";
  }

  function fiche(id) {
    var f = parId[id];
    if (!f) { vue.innerHTML = '<p class="vide">Fiche introuvable.</p>'; return; }
    var c = cat(f.cat);
    var fav = lireFavoris().indexOf(id) >= 0;
    function liste(t) { return (t || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join(""); }
    var h = '<article class="fiche' + (f.urgence ? " urgente" : "") + '">' +
      '<p class="sous"><a href="#/cat/' + c.cle + '">' + c.ico + " " + esc(c.nom) + "</a></p>" +
      '<div class="entete"><h1>' + esc(f.titre) + (f.urgence ? '<span class="pastille">URGENT</span>' : "") + "</h1>" +
      '<button class="etoile" id="fav" aria-pressed="' + fav + '" aria-label="Ajouter aux favoris">★</button></div>' +
      '<p class="resume">' + esc(f.resume) + "</p>" +
      (f.schema ? "<figure>" + svgSur(f.schema) + (f.legende ? "<figcaption>" + esc(f.legende) + "</figcaption>" : "") + "</figure>" : "") +
      (f.etapes && f.etapes.length ? '<h2>Que faire</h2><ol class="etapes">' + liste(f.etapes) + "</ol>" : "") +
      (f.conseils && f.conseils.length ? '<div class="bon"><h2>Bons réflexes</h2><ul class="puces">' + liste(f.conseils) + "</ul></div>" : "") +
      (f.erreurs && f.erreurs.length ? '<div class="mauvais"><h2>À éviter</h2><ul class="puces">' + liste(f.erreurs) + "</ul></div>" : "") +
      (f.urgence ? '<p class="urgence-rappel">Urgence vitale : appelez le <a href="tel:15">15</a> ou le <a href="tel:112">112</a>. Sourd ou malentendant : SMS au <a href="sms:114">114</a>.</p>' : "") +
      (f.source && f.source.url ? '<p class="source">Pour aller plus loin (avec du réseau) : <a href="' + esc(f.source.url) + '" target="_blank" rel="noopener">' + esc(f.source.nom || "source") + "</a></p>" : "") +
      "</article>";
    vue.innerHTML = h;
    document.getElementById("fav").onclick = function () {
      var l = lireFavoris(), i = l.indexOf(id);
      if (i >= 0) l.splice(i, 1); else l.push(id);
      ecrireFavoris(l);
      this.setAttribute("aria-pressed", i < 0);
    };
  }

  function urgence() {
    var nums = [
      ["15", "SAMU", "Urgence médicale"], ["18", "Pompiers", "Incendie, accident"],
      ["112", "Europe", "Tout danger, même sans forfait"], ["17", "Police", "Agression, danger"],
      ["114", "SMS / appli", "Sourds et malentendants"], ["196", "Mer", "Secours en mer (CROSS)"]
    ];
    var h = "<h1>Urgence</h1><p class=\"sous\">Touchez un numéro pour appeler. Restez calme, dites où vous êtes, ce qui se passe, combien de victimes, et ne raccrochez pas le premier.</p>" +
      '<div class="numeros">' + nums.map(function (n) {
        var href = n[0] === "114" ? "sms:114" : "tel:" + n[0];
        return '<a href="' + href + '"><b>' + n[0] + "</b>" + esc(n[1]) + "<br><small>" + esc(n[2]) + "</small></a>";
      }).join("") + "</div>" +
      '<p class="sous" style="margin-top:10px">Centre antipoison (Marseille) : <a href="tel:+33491752525">04 91 75 25 25</a></p>' +
      "<h2>Gestes vitaux</h2>";
    var vitaux = FICHES.filter(function (f) { return f.urgence; });
    h += vitaux.length ? '<ul class="liste">' + vitaux.map(ligneFiche).join("") + "</ul>" : '<p class="vide">Aucune fiche.</p>';
    vue.innerHTML = h;
  }

  function favoris() {
    var l = lireFavoris().map(function (id) { return parId[id]; }).filter(Boolean);
    vue.innerHTML = "<h1>Favoris</h1>" + (l.length ? '<ul class="liste">' + l.map(ligneFiche).join("") + "</ul>" :
      '<p class="vide">Aucun favori pour l\'instant.<br>Touchez l\'étoile ★ sur une fiche pour la retrouver ici.</p>');
  }

  function recherche(texte) {
    var mots = sansAccent(texte).split(/\s+/).filter(Boolean);
    var res = FICHES.map(function (f) {
      var titre = sansAccent(f.titre), cles = sansAccent((f.motscles || []).join(" ")),
        corps = sansAccent([f.resume].concat(f.etapes || [], f.conseils || [], f.erreurs || []).join(" "));
      var score = 0;
      for (var i = 0; i < mots.length; i++) {
        var m = mots[i], s = 0;
        if (titre.indexOf(m) >= 0) s += 5;
        if (cles.indexOf(m) >= 0) s += 3;
        if (corps.indexOf(m) >= 0) s += 1;
        if (!s) return null;
        score += s;
      }
      return { f: f, s: score };
    }).filter(Boolean).sort(function (a, b) { return b.s - a.s; });
    vue.innerHTML = "<h1>Recherche</h1><p class=\"sous\">" + res.length + " résultat" + (res.length > 1 ? "s" : "") + " pour « " + esc(texte) + " »</p>" +
      (res.length ? '<ul class="liste">' + res.map(function (r) { return ligneFiche(r.f); }).join("") + "</ul>" : '<p class="vide">Rien trouvé. Essayez un autre mot.</p>');
  }

  // ---------- routeur ----------
  function route() {
    var h = location.hash.replace(/^#\/?/, "");
    var p = h.split("/");
    var onglet = "accueil";
    if (p[0] === "cat" && p[1]) { categorie(p[1]); if (p[1] === "outils") onglet = "outils"; }
    else if (p[0] === "fiche" && p[1]) { fiche(decodeURIComponent(p[1])); onglet = ""; }
    else if (p[0] === "urgence") { urgence(); onglet = "urgence"; }
    else if (p[0] === "favoris") { favoris(); onglet = "favoris"; }
    else if (p[0] === "recherche") { recherche(decodeURIComponent(p.slice(1).join("/"))); onglet = ""; }
    else accueil();
    btnRetour.hidden = !h;
    document.querySelectorAll(".onglets a").forEach(function (a) { a.classList.toggle("actif", a.dataset.tab === onglet); });
    if (p[0] !== "recherche") window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  btnRetour.onclick = function () { if (history.length > 1) history.back(); else location.hash = "#/"; };

  var minuterie;
  q.addEventListener("input", function () {
    clearTimeout(minuterie);
    var v = q.value.trim();
    minuterie = setTimeout(function () {
      if (v.length >= 2) history.replaceState(null, "", "#/recherche/" + encodeURIComponent(v)), route();
      else if (!v && location.hash.indexOf("#/recherche") === 0) location.hash = "#/";
    }, 200);
  });

  route();

  // ---------- hors ligne ----------
  var etat = document.getElementById("etat");
  function majEtat(t) { etat.textContent = t; }
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(function () {
      return navigator.serviceWorker.ready;
    }).then(function () {
      majEtat(navigator.onLine ? "✓ Hors ligne prêt" : "Hors ligne");
    }).catch(function () { majEtat(""); });
    window.addEventListener("offline", function () { majEtat("Hors ligne"); });
    window.addEventListener("online", function () { majEtat("✓ Hors ligne prêt"); });
  }
})();
