/* EN/NL language switch. English (the authored language) is captured from the DOM
   on first apply; Dutch lives in the MAP below as [selector, nl-html] pairs.
   A selector matching multiple elements takes an array (in DOM order; null = keep). */
(() => {
  'use strict';
  const MAP = [
    // nav
    ['.navlinks a', ['Missie', 'Impact', 'Merken', 'In de praktijk', 'Hoe we vernieuwen', 'Contact']],
    // hero
    ['header .eyebrow', "Baril Group — 's-Hertogenbosch, NL · Productie EU / VS / PL"],
    ['header h1', 'Verf voor een<br><span class="paint">hernieuwbare</span><br>toekomst'],
    ['.hero-sub', 'Eén groep. Drie merken. Eén missie: <strong>meer beschermen, met minder</strong> — de verf- en coatingsindustrie vernieuwen vanaf de chemie.'],
    ['.hero-cta .btn-solid', 'Ontdek de merken'],
    ['.hero-cta .btn-ghost', 'Onze missie'],
    ['.hero-foot span:first-child', 'Industriële coatings · Biobased vakverf · Plantaardige verf voor thuis'],
    ['.scroll-hint', 'Scroll'],
    // mission
    ['#mission .eyebrow', 'Missie'],
    ['.mission-quote', 'Wij vinden dat niemand hoeft te kiezen tussen <em>duurzaam, prijs en kwaliteit</em>. Daarom zetten we elke productlijn, stap voor stap, om naar hernieuwbare grondstoffen — en bewijzen we onderweg dat dunnere, schonere coatings langer beschermen.'],
    ['#mission .mm b', ['Langer beschermen', 'Minder vervuilen', 'Bewijzen']],
    ['#mission .mm span', [
      'Dunne-laag-technologie verlengt de levensduur van materialen met aanzienlijk minder verf per vierkante meter.',
      'Plantaardige grondstoffen en minder gevaarlijke stoffen, ontworpen op formuleringsniveau.',
      'Gecertificeerd kwaliteits-, milieu- en veiligheidsmanagement — en productcertificeringen per merk.']],
    // chapter A
    ['#bio .eyebrow', 'Hoofdstuk 01 · Circulaire grondstoffen'],
    ['#bio h2', 'Van vat<br>naar bio'],
    ['#bio .sec-head p:last-child', 'Elke liter verf is chemie: bindmiddel, oplosmiddel, pigment, additieven. Een eeuw lang was die chemie gebaseerd op ruwe olie — het bindmiddel, en vaak ook het oplosmiddel. Wij zetten beide om naar hernieuwbare en circulaire grondstoffen: van minder dan 10% in 2022 naar 55% vandaag, op weg naar 100% in 2030.'],
    ['#bio .ctr:nth-child(2) b', '100% in 2030'],
    ['#bio .ctr:nth-child(3) b', 'Gelijk of beter'],
    ['#bio .ctr .cl', ['Hernieuwbare & circulaire grondstoffen — vandaag', 'Groepsdoel — vanaf <10% in 2022', 'Prestaties, bij lagere laagdikte']],
    // chapter B
    ['#globe .eyebrow', 'Hoofdstuk 02 · Een wat-als-scenario'],
    ['#globe h2', 'Als de verf van de wereld<br>met ons meeging'],
    ['#globe .sec-head p:last-child', 'De wereld produceert ≈ 50+ miljoen ton verf en coatings per jaar — nog altijd overwegend fossiele chemie. Dit verandert er van richting wanneer dat volume overgaat op hernieuwbare grondstoffen en dunne-laag-applicatie, zoals wij dat doen.'],
    ['.fr-slider span', ['Fossiel', null, 'Hernieuwbaar']],
    ['.dial b', ['Grondstof', 'CO₂-richting', 'Materiaallevensduur']],
    ['.dial b + span', ['Van ruwe olie naar planten & reststromen', 'Van uitstoten naar vastleggen', 'Dunne lagen: meer m² beschermd per liter, minder overschilderen']],
    ['.pool-side .scenario-note', "Illustratief scenario op basis van Barils producttransitie. Wereldvolume: marktramingen 2022–2024, zie bronnen."],
    // chapter C
    ['#safety .eyebrow', 'Hoofdstuk 03 · Mens & veiligheid'],
    ['#safety h2', 'Verf die de schilder<br>niet zijn gezondheid kost'],
    ['#safety .sec-head p:last-child', 'In Nederland had chronische blootstelling aan oplosmiddelen een eigen naam: <em>schildersziekte</em> (CSE/OPS). Onomkeerbare schade aan het zenuwstelsel, erkend als beroepsziekte. Toen herformuleerde de industrie — watergedragen, laag-VOS — en stortten de aantallen in. Het bewijs dat chemie die in de fabriek wordt gekozen, mensen op de steiger beschermt. Wij trekken dat verder dan het blik: actuele veiligheidsinformatie, getrainde applicateurs en persoonlijk veiligheidsadvies horen bij de verf.'],
    ['.tl-nodes li b', ['Jaren 70', '≈ 2000', '2004', '2014', 'Vandaag']],
    ['.tl-nodes li:nth-child(1) span', 'Het oplosmiddelentijdperk'],
    ['.tl-nodes li:nth-child(3) span', 'EU-verfrichtlijn begrenst VOS-gehalte'],
    ['.tl-nodes li:nth-child(4) span', '&lt; 10 nieuwe gevallen / jr'],
    ['.tl-nodes li:nth-child(5) span', 'Gevaar wegformuleren — emissiegetest, kindveilig gecertificeerd'],
    ['.safety-services .ss b', ['Altijd actuele veiligheidsinformatie', 'Training van applicateurs', 'Persoonlijk veiligheidsadvies']],
    ['.safety-services .ss span', [
      'Actuele veiligheidsbladen en productveiligheidsdocumentatie — voor elk product, elke revisie.',
      'Praktijkgerichte training voor professionele applicateurs via Baril Academy: veilig werken, slim aanbrengen.',
      'Praktisch advies over persoonlijke bescherming — op de klus, op de steiger, aan de werkbank.']],
    // chapter D
    ['#local .eyebrow', 'Hoofdstuk 04 · Korte ketens'],
    ['#local h2', 'Dichtbij huis<br>gemaakt'],
    ['#local .sec-head p:last-child', "Fossiele chemie reist de halve wereld over voordat ze in een verfblik zit. Plantaardige en reststroom-grondstoffen maken de keten kort: geteeld, verwerkt en toegepast in dezelfde regio. Wij produceren dicht bij onze markten — 's-Hertogenbosch, de Verenigde Staten, Polen — op eigen zonne- en windenergie, met een volledig elektrisch wagenpark en inclusief werkgeverschap als beleid, niet als project."],
    ['.cl-old', 'Lange keten — fossiel, intercontinentaal'],
    ['.cl-new', 'Korte keten — regionale akkers & reststromen'],
    ['.pulses span', ['Zonne- + windenergie', 'Elektrisch wagenpark', 'Inclusief werkgeverschap', 'Baril Academy']],
    // chapter E
    ['#world .eyebrow', 'Hoofdstuk 05 · Sinds 1987'],
    ['#world h2', 'Steeds groener,<br>wereldwijd'],
    ['#world .sec-head p:last-child', "Van één fabriek in 's-Hertogenbosch naar vijf vestigingen op twee continenten. De eerste MVO-stappen in 2002 zetten de richting; sinds 2021 versnelt de vergroening jaar op jaar. Zie de voetafdruk zich verspreiden."],
    ['.map-cap', 'De groene voetafdruk van de groep'],
    ['#mapTl li span', ["'s-Hertogenbosch, NL", 'Eerste MVO-stappen', 'Angola, VS', 'Gliwice, PL', 'Etten-Leur, NL', 'Boekarest, RO', 'De vergroening versnelt']],
    // brands
    ['#brands .eyebrow', 'Portfolio'],
    ['#brands h2', 'Eén missie,<br>drie merken'],
    ['#brands .sec-head p:last-child', 'Elk merk brengt dezelfde chemie-eerst-filosofie naar een ander publiek — van offshore-staal tot de muur in je woonkamer.'],
    ['.brand .tag', ['Voor de industrie', 'Voor de vakschilder', 'Voor thuis']],
    ['.brand > div:first-child > p:not(.tag)', [
      'Hoogwaardige industriële coatings en bouwverven. Dunne-laag-bescherming voor staal en infrastructuur, OEM en metaalindustrie, marine & offshore — ontwikkeld om materialen langer te laten meegaan met minder verf.',
      'Een compleet biobased verfsysteem voor de professionele schilder. Plantaardige chemie met EU Ecolabel en Cradle to Cradle-certificering — de groenste verf, mengbaar in elke kleur.',
      'Plantaardige muur- en lakverf voor iedereen. Kleurcollecties samengesteld door experts, mengbaar in elke kleur van de regenboog — online en in het schap bij Karwei.']],
    ['.spec b', ['Assortiment', 'Assortiment', 'Assortiment']],
    // proof
    ['#proof .eyebrow', 'In de praktijk'],
    ['#proof h2', 'Beschermd door Baril'],
    ['#proof .sec-head p:last-child', 'Van nationale infrastructuur tot monumentale restauratie — objecten die onze coatings langer in leven houden.'],
    ['.case .meta span', ['Infrastructuur · 295 m overspanning', 'Bouw & infra', 'Staalconservering', 'Gebouwen & onderhoud', "Restauratie · 's-Hertogenbosch"]],
    ['.cases-note', 'Sleep om te ontdekken · <a href="https://www.barilcoatings.com/nl/praktijkcases" target="_blank" rel="noopener">Alle cases →</a>'],
    // renew
    ['#renew .eyebrow', 'Technologie'],
    ['#renew h2', 'Hoe we een oude<br>industrie vernieuwen'],
    ['.pillar .pn', ['Chemie', 'Applicatie', 'Productie']],
    ['.pillar h4', ['Biobased formuleren', 'Dunne-laag-technologie', 'Emissiearme fabrieken']],
    ['.pillar h4 + p', [
      'Plantaardige grondstoffen vervangen fossiele chemie waar het ertoe doet — CO₂ vastleggen in plaats van uitstoten, zonder in te leveren op prestaties.',
      'Meer bescherming uit minder materiaal. Lagere laagdikte betekent langer meegaande objecten, minder overschilderen en een kleinere voetafdruk per beschermde m².',
      'Produceren dicht bij onze markten in Nederland, de Verenigde Staten en Polen — met emissiereductie ontworpen in het proces.']],
    ['.renew-cap', 'Corrosiebescherming voor de energietransitie — offshore, waar coatings het zwaarst werken.'],
    // datasheet
    ['#data .eyebrow', 'Datasheet'],
    ['#data h2', 'De groep<br>in cijfers'],
    ['.sheet-row b', ['Hoofdkantoor', 'Productie', 'Bereik', 'Markten', 'Managementsystemen', 'Circulaire doelstelling', 'Energie', 'Mensen', 'UN SDG’s', 'Merken']],
    ['.sheet-row span', [
      "'s-Hertogenbosch, Nederland <em>— familiebedrijf</em>",
      'Nederland · Verenigde Staten · Polen',
      'Duurzame beschermingsmerken, gebruikt in 20+ landen',
      'Staal & infrastructuur · OEM & metaal · Marine & offshore · Professioneel schilderwerk · Consument',
      'ISO 9001 <em>kwaliteit</em> · ISO 14001 <em>milieu</em> · ISO 45001 <em>veiligheid</em>',
      '100% circulaire grondstoffen in 2030 <em>— 55% vandaag, vanaf &lt;10% in 2022</em>',
      'Productie op eigen zonnepanelen + windenergie <em>·</em> volledig elektrisch wagenpark',
      'Inclusief werkgeverschap <em>(afstand tot de arbeidsmarkt)</em> · 4-jaarlijks preventief medisch onderzoek · Baril Academy',
      'Actief programma op doelen 1 · 2 · 3 · 4 · 7 · 8 · 9 · 11 · 12 · 13 · 14 · 15',
      'Baril Coatings · Copperant · Fairf']],
    // sources
    ['#sources .eyebrow', 'Bronnen & onderbouwing'],
    ['.src li', [
      'Wereldvolume verf & coatings — marktramingen 2022–2024: Ceresana (≈ 44,5 Mt, 2022) · Freedonia (≈ 63,7 Mt, 2024). Getoond als "≈ 50+ miljoen ton per jaar".',
      'EU-verfrichtlijn 2004/42/EG — VOS-grenswaarden voor decoratieve verf en autoschadeherstel (EUR-Lex).',
      'CSE/OPS (schildersziekte), erkende beroepsziekte, NL: ≈ 50 nieuwe gevallen/jr rond 2000 → &lt; 10/jr in 2014, daling toegeschreven aan substitutie, o.a. watergedragen verf — ops-loket.nl · beroepsziekten.nl.',
      'Baril Groups transitie-, energie- en mensenprogramma — barilcoatings.com/duurzaamheid · copperant.com/certificaten. Status circulaire grondstoffen (55% vandaag, &lt; 10% in 2022, doel 100% in 2030): Baril Group, 2026.',
      'Het hoofdstuk "Als de verf van de wereld met ons meeging" is een illustratief scenario op basis van Barils eigen producttransitie — geen gemeten mondiale projectie.']],
    // footer
    ['.foot-claim', 'Wij verven een hernieuwbare toekomst.'],
    ['.foot-grid h5', ['Merken', 'Groep']],
    ['.foot-grid div:nth-child(3) a', ['Missie', 'Technologie', 'Werken bij ↗', 'Contact ↗']],
    ['.foot-bottom span', ["© Baril Group · 's-Hertogenbosch NL", 'Minder verf. Langere levensduur. Lagere impact.']]
  ];

  const btn = document.getElementById('langSwitch');
  let lang = 'en';
  try { lang = localStorage.getItem('baril-lang') || 'en'; } catch (e) {}

  function apply(l) {
    for (const [sel, nl] of MAP) {
      const els = document.querySelectorAll(sel);
      els.forEach((el, i) => {
        const v = Array.isArray(nl) ? nl[i] : (i === 0 ? nl : null);
        if (v == null) return;
        if (el.dataset.en == null) el.dataset.en = el.innerHTML;
        const next = l === 'nl' ? v : el.dataset.en;
        if (el.innerHTML !== next) el.innerHTML = next;
      });
    }
    document.documentElement.lang = l;
    if (btn) btn.textContent = l === 'nl' ? 'EN' : 'NL';
    try { localStorage.setItem('baril-lang', l); } catch (e) {}
    // text lengths change → rebuild the paint ribbon path
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (btn) {
    btn.addEventListener('click', () => { lang = lang === 'en' ? 'nl' : 'en'; apply(lang); });
  }
  if (lang === 'nl') apply('nl'); else if (btn) btn.textContent = 'NL';
})();
