/* Language switch for the Copperant one-pager. EN authored in the DOM;
   NL/PL/RO/DE/FR in the MAP. */
(() => {
  'use strict';
  const MAP = [
    ['.navlinks a', {
      nl: ['Waarom Copperant','Het assortiment','Duurzaamheid','Voor professionals','copperant.com ↗'],
      pl: ['Dlaczego Copperant','Asortyment','Zrównoważoność','Dla profesjonalistów','copperant.com ↗'],
      ro: ['De ce Copperant','Gama','Sustenabilitate','Pentru profesioniști','copperant.com ↗'],
      de: ['Warum Copperant','Das Sortiment','Nachhaltigkeit','Für Profis','copperant.com ↗'],
      fr: ['Pourquoi Copperant','La gamme','Durabilité','Pour les pros','copperant.com ↗'] }],
    ['header .eyebrow', {
      nl: 'Copperant — De groenste verf · Een merk van Baril Group',
      pl: 'Copperant — Najbardziej zielona farba · Marka Baril Group',
      ro: 'Copperant — Cea mai verde vopsea · O marcă Baril Group',
      de: 'Copperant — Die grünste Farbe · Eine Marke der Baril Group',
      fr: 'Copperant — La peinture la plus verte · Une marque du groupe Baril' }],
    ['header h1', {
      nl: 'Professionele resultaten,<br><span class="green">groenste</span> verf',
      pl: 'Profesjonalne efekty,<br><span class="green">najbardziej zielona</span> farba',
      ro: 'Rezultate profesionale,<br>cea mai <span class="green">verde</span> vopsea',
      de: 'Professionelle Ergebnisse,<br><span class="green">grünste</span> Farbe',
      fr: 'Des résultats pros,<br>la peinture la plus <span class="green">verte</span>' }],
    ['.hero-sub', {
      nl: 'Een compleet biobased verfsysteem voor professionals — <strong>plantaardige chemie en CO₂-neutrale productie</strong>, met de prestaties die je verwacht en elke kleur die je kunt bedenken.',
      pl: 'Kompletny biobazowy system malarski dla profesjonalistów — <strong>chemia roślinna i produkcja neutralna pod względem CO₂</strong>, z oczekiwaną wydajnością i każdym kolorem, jaki sobie wyobrazisz.',
      ro: 'Un sistem complet de vopsea biobazată pentru profesioniști — <strong>chimie vegetală și producție neutră de CO₂</strong>, cu performanța așteptată și orice culoare îți poți imagina.',
      de: 'Ein komplettes biobasiertes Farbsystem für Profis — <strong>pflanzliche Chemie und CO₂-neutrale Produktion</strong>, mit der Leistung, die Sie erwarten, und jeder erdenklichen Farbe.',
      fr: 'Un système de peinture biosourcé complet pour les professionnels — <strong>chimie végétale et production neutre en CO₂</strong>, avec les performances attendues et toutes les couleurs imaginables.' }],
    ['header .hero-cta .btn-copper', { nl: 'Bezoek copperant.com ↗', pl: 'Odwiedź copperant.com ↗', ro: 'Vizitează copperant.com ↗', de: 'copperant.com besuchen ↗', fr: 'Visiter copperant.com ↗' }],
    ['header .hero-cta .btn-ghost', { nl: 'Bekijk het assortiment', pl: 'Zobacz asortyment', ro: 'Explorează gama', de: 'Das Sortiment ansehen', fr: 'Voir la gamme' }],
    ['.hero-foot span:first-child', {
      nl: 'Biobased · EU Ecolabel · Cradle to Cradle · CO₂-neutraal',
      pl: 'Biobazowa · EU Ecolabel · Cradle to Cradle · Neutralna CO₂',
      ro: 'Biobazată · EU Ecolabel · Cradle to Cradle · Neutră CO₂',
      de: 'Biobasiert · EU Ecolabel · Cradle to Cradle · CO₂-neutral',
      fr: 'Biosourcée · EU Ecolabel · Cradle to Cradle · Neutre en CO₂' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează', de: 'Scrollen', fr: 'Défiler' }],

    ['#mission .eyebrow', { nl: 'Waarom Copperant', pl: 'Dlaczego Copperant', ro: 'De ce Copperant', de: 'Warum Copperant', fr: 'Pourquoi Copperant' }],
    ['.mission-quote', {
      nl: 'Professionals zouden niet hoeven kiezen tussen prestaties en de planeet. Copperant is gebouwd op natuurlijke grondstoffen en CO₂-neutrale productie — <em>de groenste verf, zonder compromis</em>.',
      pl: 'Profesjonaliści nie powinni wybierać między wydajnością a planetą. Copperant powstaje z naturalnych surowców i w produkcji neutralnej pod względem CO₂ — <em>najbardziej zielona farba, bez kompromisów</em>.',
      ro: 'Profesioniștii nu ar trebui să aleagă între performanță și planetă. Copperant este construit pe materii prime naturale și producție neutră de CO₂ — <em>cea mai verde vopsea, fără compromisuri</em>.',
      de: 'Profis sollten nicht zwischen Leistung und Planet wählen müssen. Copperant basiert auf natürlichen Rohstoffen und CO₂-neutraler Produktion — <em>die grünste Farbe, ohne Kompromisse</em>.',
      fr: 'Les professionnels ne devraient pas avoir à choisir entre performance et planète. Copperant repose sur des matières premières naturelles et une production neutre en CO₂ — <em>la peinture la plus verte, sans compromis</em>.' }],
    ['#mission .mm b', {
      nl: ['Plantaardig &amp; natuurlijk','CO₂-neutrale productie','Elke kleur, onbeperkt'],
      pl: ['Roślinna i naturalna','Produkcja neutralna CO₂','Każdy kolor, bez limitu'],
      ro: ['Vegetală și naturală','Producție neutră CO₂','Orice culoare, nelimitat'],
      de: ['Pflanzlich &amp; natürlich','CO₂-neutrale Produktion','Jede Farbe, unbegrenzt'],
      fr: ['Végétale et naturelle','Production neutre en CO₂','Toute couleur, sans limite'] }],
    ['#mission .mm span', {
      nl: ['Samengesteld uit natuurlijke, plantaardige grondstoffen — fossiele chemie teruggebracht.','Gemaakt in een volledig CO₂-neutraal proces, met plantaardige chemie die atmosferische CO₂ helpt verlagen.','Optimale professionele prestaties, in onbeperkt veel kleuren op maat.'],
      pl: ['Opracowana z naturalnych, roślinnych surowców — chemia kopalna ograniczona.','Wytwarzana w pełni neutralnym procesie CO₂, z chemią roślinną pomagającą obniżać CO₂ w atmosferze.','Optymalna profesjonalna wydajność, w nieograniczonej liczbie kolorów na zamówienie.'],
      ro: ['Formulată din materii prime naturale, vegetale — chimia fosilă redusă.','Produsă într-un proces complet neutru de CO₂, cu chimie vegetală care ajută la reducerea carbonului din atmosferă.','Performanță profesională optimă, în culori personalizate nelimitate.'],
      de: ['Zusammengesetzt aus natürlichen, pflanzlichen Rohstoffen — fossile Chemie reduziert.','Hergestellt in einem vollständig CO₂-neutralen Prozess, mit pflanzlicher Chemie, die atmosphärisches CO₂ senken hilft.','Optimale professionelle Leistung, in unbegrenzt vielen Farben nach Maß.'],
      fr: ['Composée de matières premières naturelles et végétales — la chimie fossile réduite.','Fabriquée selon un procédé entièrement neutre en CO₂, avec une chimie végétale qui aide à réduire le CO₂ atmosphérique.','Des performances professionnelles optimales, dans un nombre illimité de couleurs sur mesure.'] }],

    ['#range .eyebrow', { nl: 'Het assortiment', pl: 'Asortyment', ro: 'Gama', de: 'Das Sortiment', fr: 'La gamme' }],
    ['#range h2', {
      nl: 'Eén systeem, <span class="copper">vijf lijnen</span>',
      pl: 'Jeden system, <span class="copper">pięć linii</span>',
      ro: 'Un sistem, <span class="copper">cinci linii</span>',
      de: 'Ein System, <span class="copper">fünf Linien</span>',
      fr: 'Un système, <span class="copper">cinq lignes</span>' }],
    ['#range .lead', {
      nl: 'Een compleet, gespecialiseerd systeem voor elke ondergrond en klus — hout, steen, metaal en meer.',
      pl: 'Kompletny, wyspecjalizowany system do każdego podłoża i zadania — drewno, kamień, metal i więcej.',
      ro: 'Un sistem complet, specializat pentru orice substrat și lucrare — lemn, piatră, metal și altele.',
      de: 'Ein komplettes, spezialisiertes System für jeden Untergrund und jede Aufgabe — Holz, Stein, Metall und mehr.',
      fr: 'Un système complet et spécialisé pour tout support et tout chantier — bois, pierre, métal et plus encore.' }],
    ['#range .feat span', {
      nl: ['Muurverven, primers, lakken, beitsen en reinigers — de dagelijkse kern van het systeem.','Het UV+-systeem: grondlagen, systeemverven, lakken en metallic-afwerkingen.','Hout- en vloerlakken met UV+-technologie voor blijvende, natuurlijke bescherming.','Minerale muurprimers en -verven voor een diepe, ademende matte afwerking.','Grondlagen en afwerkverven die het professionele systeem compleet maken.'],
      pl: ['Farby ścienne, podkłady, lakiery, bejce i środki czyszczące — codzienny rdzeń systemu.','System UV+: podkłady, farby systemowe, lakiery i wykończenia metaliczne.','Lakiery do drewna i podłóg z technologią UV+ dla trwałej, naturalnej ochrony.','Mineralne podkłady i farby ścienne dla głębokiego, oddychającego matu.','Podkłady i farby wykończeniowe, które dopełniają profesjonalny system.'],
      ro: ['Vopsele de pereți, grunduri, lacuri, baițuri și soluții de curățare — nucleul de zi cu zi al sistemului.','Sistemul UV+: straturi de bază, vopsele de sistem, lacuri și finisaje metalice.','Lacuri pentru lemn și pardoseli cu tehnologie UV+ pentru protecție durabilă și naturală.','Grunduri și vopsele minerale de pereți pentru un mat profund, respirabil.','Straturi de bază și vopsele de finisare care completează sistemul profesional.'],
      de: ['Wandfarben, Grundierungen, Lacke, Lasuren und Reiniger — der tägliche Kern des Systems.','Das UV+-System: Grundierungen, Systemfarben, Lacke und Metallic-Finishes.','Holz- und Bodenlacke mit UV+-Technologie für dauerhaften, natürlichen Schutz.','Mineralische Wandgrundierungen und -farben für ein tiefes, atmungsaktives Matt.','Grundierungen und Decklacke, die das professionelle System vervollständigen.'],
      fr: ['Peintures murales, primaires, laques, lasures et nettoyants — le cœur quotidien du système.','Le système UV+ : couches de fond, peintures de système, laques et finitions métallisées.','Laques pour bois et sols avec technologie UV+ pour une protection naturelle durable.','Primaires et peintures murales minéraux pour un mat profond et respirant.','Couches de fond et peintures de finition qui complètent le système professionnel.'] }],

    ['#green .eyebrow', { nl: 'Duurzaamheid', pl: 'Zrównoważoność', ro: 'Sustenabilitate', de: 'Nachhaltigkeit', fr: 'Durabilité' }],
    ['#green h2', {
      nl: 'De <span class="green">groenste</span> verf, bewezen',
      pl: 'Najbardziej <span class="green">zielona</span> farba, potwierdzona',
      ro: 'Cea mai <span class="green">verde</span> vopsea, dovedită',
      de: 'Die <span class="green">grünste</span> Farbe, bewiesen',
      fr: 'La peinture la plus <span class="green">verte</span>, prouvée' }],
    ['#green .lead', {
      nl: 'Copperant combineert professionele prestaties met enkele van de sterkste eco-credentials in de branche — onafhankelijk getest en gecertificeerd.',
      pl: 'Copperant łączy profesjonalną wydajność z jednymi z najmocniejszych eko-certyfikatów w branży — niezależnie przetestowane i certyfikowane.',
      ro: 'Copperant combină performanța profesională cu unele dintre cele mai puternice acreditări ecologice din industrie — testate și certificate independent.',
      de: 'Copperant verbindet professionelle Leistung mit einigen der stärksten Öko-Nachweise der Branche — unabhängig getestet und zertifiziert.',
      fr: 'Copperant allie performance professionnelle et certains des meilleurs labels écologiques du secteur — testés et certifiés de façon indépendante.' }],
    ['#green .stat .n', { nl: ['CO₂-neutraal','Plantaardig','Onbeperkt'], pl: ['Neutralna CO₂','Roślinna','Bez limitu'], ro: ['Neutră CO₂','Vegetală','Nelimitat'], de: ['CO₂-neutral','Pflanzlich','Unbegrenzt'], fr: ['Neutre en CO₂','Végétale','Illimité'] }],
    ['#green .stat .l', {
      nl: ['Volledig CO₂-neutraal productieproces.','Natuurlijke, plantaardige grondstoffen als basis.','Kleuren op maat, zonder limiet.'],
      pl: ['W pełni neutralny pod względem CO₂ proces produkcji.','Naturalne, roślinne surowce w rdzeniu.','Kolory na zamówienie, bez ograniczeń.'],
      ro: ['Proces de producție complet neutru de CO₂.','Materii prime naturale, vegetale la bază.','Culori personalizate, fără limite.'],
      de: ['Vollständig CO₂-neutraler Produktionsprozess.','Natürliche, pflanzliche Rohstoffe als Basis.','Farben nach Maß, ohne Limit.'],
      fr: ['Procédé de production entièrement neutre en CO₂.','Matières premières naturelles et végétales à la base.','Couleurs sur mesure, sans limite.'] }],

    ['#pros .eyebrow', { nl: 'Voor professionals', pl: 'Dla profesjonalistów', ro: 'Pentru profesioniști', de: 'Für Profis', fr: 'Pour les pros' }],
    ['#pros h2', {
      nl: 'Gemaakt voor de<br>mensen die <span class="copper">schilderen</span>',
      pl: 'Stworzona dla<br>tych, którzy <span class="copper">malują</span>',
      ro: 'Creată pentru<br>cei care <span class="copper">vopsesc</span>',
      de: 'Gemacht für die<br>Menschen, die <span class="copper">streichen</span>',
      fr: 'Conçue pour<br>ceux qui <span class="copper">peignent</span>' }],
    ['#pros .lead', {
      nl: 'In de eerste plaats gebouwd voor de vakschilder — en ver daarbuiten vertrouwd.',
      pl: 'Stworzona przede wszystkim dla profesjonalnego malarza — i ceniona daleko poza branżą.',
      ro: 'Creată în primul rând pentru zugravul profesionist — și apreciată mult dincolo de breaslă.',
      de: 'In erster Linie für den Profimaler gebaut — und weit darüber hinaus geschätzt.',
      fr: 'Conçue avant tout pour le peintre professionnel — et appréciée bien au-delà.' }],
    ['#pros .split-list span', {
      nl: ['Vakschilders en doe-het-zelvers die groen willen zonder in te leveren op kwaliteit.','Aannemers en architecten die voorschrijven voor kantoren, zorg, scholen en horeca.','Vastgoedbeheerders die gezondere, emissiearme interieurs willen.'],
      pl: ['Profesjonalni malarze i majsterkowicze, którzy chcą ekologii bez utraty jakości.','Wykonawcy i architekci specyfikujący dla biur, opieki, szkół i hotelarstwa.','Zarządcy nieruchomości, którzy chcą zdrowszych wnętrz o niskiej emisji.'],
      ro: ['Zugravi profesioniști și pasionați DIY care vor verde fără a renunța la calitate.','Antreprenori și arhitecți care specifică pentru birouri, îngrijire, școli și ospitalitate.','Administratori de proprietăți care vor interioare mai sănătoase, cu emisii reduse.'],
      de: ['Profimaler und Heimwerker, die grün wollen, ohne bei der Qualität nachzugeben.','Bauunternehmer und Architekten, die für Büros, Pflege, Schulen und Gastgewerbe ausschreiben.','Immobilienverwalter, die gesündere, emissionsarme Innenräume wollen.'],
      fr: ['Peintres professionnels et bricoleurs qui veulent du vert sans renoncer à la qualité.','Entrepreneurs et architectes qui prescrivent pour bureaux, santé, écoles et hôtellerie.','Gestionnaires immobiliers qui veulent des intérieurs plus sains et à faibles émissions.'] }],

    ['.cta-card .eyebrow', { nl: 'De officiële site', pl: 'Oficjalna strona', ro: 'Site-ul oficial', de: 'Die offizielle Website', fr: 'Le site officiel' }],
    ['.cta-card h2', { nl: 'Bekijk het volledige Copperant-systeem', pl: 'Zobacz pełny system Copperant', ro: 'Vezi întregul sistem Copperant', de: 'Das komplette Copperant-System ansehen', fr: 'Découvrir tout le système Copperant' }],
    ['.cta-card p', {
      nl: 'Kleuren, productlijnen, datasheets en verkooppunten — ontdek alles op de officiële Copperant-website.',
      pl: 'Kolory, linie produktów, karty techniczne i punkty sprzedaży — odkryj wszystko na oficjalnej stronie Copperant.',
      ro: 'Culori, linii de produse, fișe tehnice și puncte de vânzare — descoperă totul pe site-ul oficial Copperant.',
      de: 'Farben, Produktlinien, Datenblätter und Verkaufsstellen — entdecken Sie alles auf der offiziellen Copperant-Website.',
      fr: 'Couleurs, lignes de produits, fiches techniques et points de vente — découvrez tout sur le site officiel Copperant.' }],
    ['.cta-card .btn-copper', { nl: 'Naar copperant.com ↗', pl: 'Przejdź do copperant.com ↗', ro: 'Mergi la copperant.com ↗', de: 'Zu copperant.com ↗', fr: 'Aller sur copperant.com ↗' }],
    ['.cta-card .btn-ghost', { nl: 'Ontdek Baril Group', pl: 'Poznaj Baril Group', ro: 'Descoperă Baril Group', de: 'Baril Group entdecken', fr: 'Découvrir le groupe Baril' }],

    ['.foot-claim', {
      nl: 'Professionele resultaten met de groenste verf.',
      pl: 'Profesjonalne efekty z najbardziej zieloną farbą.',
      ro: 'Rezultate profesionale cu cea mai verde vopsea.',
      de: 'Professionelle Ergebnisse mit der grünsten Farbe.',
      fr: 'Des résultats professionnels avec la peinture la plus verte.' }],
    ['.foot-grid div:nth-child(2) a', {
      nl: ['Het assortiment','Duurzaamheid','copperant.com ↗'],
      pl: ['Asortyment','Zrównoważoność','copperant.com ↗'],
      ro: ['Gama','Sustenabilitate','copperant.com ↗'],
      de: ['Das Sortiment','Nachhaltigkeit','copperant.com ↗'],
      fr: ['La gamme','Durabilité','copperant.com ↗'] }],
    ['.foot-bottom span', {
      nl: ["© Copperant · een merk van Baril Group · 's-Hertogenbosch NL", 'De groenste verf, zonder compromis.'],
      pl: ["© Copperant · marka Baril Group · 's-Hertogenbosch NL", 'Najbardziej zielona farba, bez kompromisów.'],
      ro: ["© Copperant · o marcă Baril Group · 's-Hertogenbosch NL", 'Cea mai verde vopsea, fără compromisuri.'],
      de: ["© Copperant · eine Marke der Baril Group · 's-Hertogenbosch NL", 'Die grünste Farbe, ohne Kompromisse.'],
      fr: ["© Copperant · une marque du groupe Baril · 's-Hertogenbosch NL", 'La peinture la plus verte, sans compromis.'] }]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('copperant-lang') || 'en'; } catch (e) {}
  if (!['en', 'nl', 'pl', 'ro', 'de', 'fr', 'es', 'it'].includes(lang)) lang = 'en';

  function apply(l) {
    for (const [sel, dict] of MAP) {
      document.querySelectorAll(sel).forEach((el, i) => {
        if (el.dataset.en == null) el.dataset.en = el.innerHTML;
        let v;
        if (l === 'en') { v = (dict && dict.en != null) ? dict.en : el.dataset.en; }
        else { const d = dict ? dict[l] : null; v = Array.isArray(d) ? d[i] : (i === 0 ? d : null); }
        if (v == null) return;
        if (el.innerHTML !== v) el.innerHTML = v;
      });
    }
    document.documentElement.lang = l;
    if (flagBox) { flagBox.querySelectorAll('button[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); const _c = flagBox.querySelector('.flag-current'), _s = flagBox.querySelector('button[data-lang="' + l + '"] .flag'); if (_c && _s) _c.src = _s.getAttribute('src'); }
    try { localStorage.setItem('copperant-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }
  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro', 'de', 'fr', 'es', 'it'].includes(lang)) lang = 'en';
    apply(lang);
  }));
  apply(lang);
})();
