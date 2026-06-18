/* Language switch for the TintLab one-pager. English is authored in the DOM;
   NL / PL / RO live in the MAP as [selector, {nl, pl, ro}].
   PL/RO are machine translations — refine as needed. */
(() => {
  'use strict';
  const MAP = [
    ['.navlinks a', {
      nl: ['Waarom TintLab','RedLike','Prestaties',"Kleurpasta's",'Toepassingen','Contact'],
      pl: ['Dlaczego TintLab','RedLike','Wydajność','Pasty barwiące','Zastosowania','Kontakt'],
      ro: ['De ce TintLab','RedLike','Performanță','Coloranți','Aplicații','Contact'] }],
    ['header .eyebrow', {
      nl: 'TintLab — Industrieel inkleursysteem · Een merk van Baril Group',
      pl: 'TintLab — Przemysłowy system barwienia · Marka Baril Group',
      ro: 'TintLab — Sistem industrial de nuanțare · O marcă Baril Group' }],
    ['header h1', {
      nl: 'Betrouwbare kleur,<br>industriële<br><span class="red">prestaties</span>',
      pl: 'Niezawodny kolor,<br>przemysłowa<br><span class="red">wydajność</span>',
      ro: 'Culoare fiabilă,<br>performanță<br><span class="red">industrială</span>' }],
    ['.hero-sub', {
      nl: "Een inkleursysteem met hoogwaardige kleurpasta's voor <strong>industriële, protective en vloercoatings</strong> — consistente, reproduceerbare kleur die de coating nooit aantast.",
      pl: 'System barwiący z wysokowydajnymi pastami kolorystycznymi do <strong>powłok przemysłowych, ochronnych i podłogowych</strong> — spójny, powtarzalny kolor, który nigdy nie pogarsza powłoki.',
      ro: 'Un sistem de nuanțare cu paste de culoare de înaltă performanță pentru <strong>acoperiri industriale, de protecție și de pardoseală</strong> — culoare consistentă și reproductibilă care nu compromite niciodată acoperirea.' }],
    ['header .hero-cta .btn-solid', { nl: 'Bekijk het systeem', pl: 'Poznaj system', ro: 'Explorează sistemul' }],
    ['header .hero-cta .btn-ghost', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri' }],
    ['.hero-foot span:first-child', {
      nl: 'Solventgedragen · Epoxy · PU · Polyaspartic · Alkyd',
      pl: 'Rozpuszczalnikowe · Epoksyd · PU · Poliasparaginowe · Alkid',
      ro: 'Pe bază de solvent · Epoxi · PU · Poliaspartic · Alchidic' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează' }],

    ['#mission .eyebrow', { nl: 'Waarom TintLab', pl: 'Dlaczego TintLab', ro: 'De ce TintLab' }],
    ['.mission-quote', {
      nl: 'Fabrikanten hebben kleur nodig waarop ze kunnen vertrouwen. TintLab levert <em>consistente, reproduceerbare kleur</em> met een soepele verwerking en technische stabiliteit — zonder de prestaties van de uiteindelijke coating aan te tasten.',
      pl: 'Producenci potrzebują koloru, na którym mogą polegać. TintLab zapewnia <em>spójny, powtarzalny kolor</em> z płynną aplikacją i stabilnością techniczną — bez pogarszania właściwości gotowej powłoki.',
      ro: 'Producătorii au nevoie de o culoare pe care să se poată baza. TintLab oferă <em>culoare consistentă și reproductibilă</em>, cu aplicare lină și stabilitate tehnică — fără a compromite performanța acoperirii finale.' }],
    ['#mission .mm b', {
      nl: ['Betrouwbaar &amp; consistent','Gemaakt voor industriële coatings','Breed bereik &amp; prestaties'],
      pl: ['Niezawodny i spójny','Stworzony do powłok przemysłowych','Szeroka gama i wydajność'],
      ro: ['Fiabil și consistent','Creat pentru acoperiri industriale','Gamă largă și performanță'] }],
    ['#mission .mm span', {
      nl: ['Reproduceerbare kleuren, batch na batch, met soepele verwerking en technische stabiliteit.','Ontwikkeld voor solventgedragen systemen en de meest gangbare harsen — epoxy, PU, polyaspartic, alkyd.',"16 kleurpasta's bereiken het volledige spectrum, met hoge weer-, hitte- en chemische bestendigheid."],
      pl: ['Powtarzalne kolory partia po partii, z płynną aplikacją i stabilnością techniczną.','Opracowany do systemów rozpuszczalnikowych i najczęstszych żywic — epoksyd, PU, poliasparaginowe, alkid.','16 past kolorystycznych pokrywa pełne spektrum, z wysoką odpornością na warunki atmosferyczne, ciepło i chemikalia.'],
      ro: ['Culori reproductibile de la lot la lot, cu aplicare lină și stabilitate tehnică.','Dezvoltat pentru sisteme pe bază de solvent și cele mai comune rășini — epoxi, PU, poliaspartic, alchidic.','16 paste de culoare acoperă întregul spectru, cu rezistență ridicată la intemperii, căldură și substanțe chimice.'] }],

    ['#system .eyebrow', { nl: 'RedLike™-inkleursysteem', pl: 'System barwiący RedLike™', ro: 'Sistemul de nuanțare RedLike™' }],
    ['#system h2', {
      nl: 'Elke formule, <span class="red">op gewicht</span>',
      pl: 'Każda receptura, <span class="red">wagowo</span>',
      ro: 'Fiecare formulă, <span class="red">la gramaj</span>' }],
    ['#system .lead', {
      nl: 'TintLab wordt ondersteund door RedLike™ — gebruiksvriendelijke online software om kleurformules op te zoeken, met toegang tot duizenden kleuren uit Fleetowner-, NCS-, RAL- en OEM-standaarden wereldwijd.',
      pl: 'TintLab jest wspierany przez RedLike™ — przyjazne oprogramowanie online do wyszukiwania receptur kolorów, z dostępem do tysięcy kolorów ze standardów Fleetowner, NCS, RAL i OEM na całym świecie.',
      ro: 'TintLab este susținut de RedLike™ — software online ușor de utilizat pentru căutarea formulelor de culoare, cu acces la mii de culori din standardele Fleetowner, NCS, RAL și OEM din întreaga lume.' }],
    ['#system .badge', { nl: 'Handmatig &amp; automatisch mengen', pl: 'Mieszanie ręczne i automatyczne', ro: 'Amestecare manuală și automată' }],
    ['#system .split-list span', {
      nl: ['Zoek en match kleuren op je computer, tablet of telefoon.','Kleuren worden nauwkeurig op gewicht gemengd, voor strakke toleranties.','Sla klantspecifieke formules op; ontvang regelmatig database-updates.'],
      pl: ['Wyszukuj i dopasowuj kolory na komputerze, tablecie lub telefonie.','Kolory są precyzyjnie mieszane wagowo, dla wąskich tolerancji.','Przechowuj receptury klientów; otrzymuj regularne aktualizacje bazy.'],
      ro: ['Caută și potrivește culori de pe computer, tabletă sau telefon.','Culorile sunt amestecate precis la gramaj, pentru toleranțe strânse.','Stochează formule specifice clienților; primește actualizări periodice ale bazei de date.'] }],

    ['#performance .eyebrow', { nl: 'Prestaties', pl: 'Wydajność', ro: 'Performanță' }],
    ['#performance h2', {
      nl: 'Gemaakt voor veeleisende <span class="red">coatings</span>',
      pl: 'Stworzony do wymagających <span class="red">powłok</span>',
      ro: 'Creat pentru acoperiri <span class="red">exigente</span>' }],
    ['#performance .lead', {
      nl: 'Zorgvuldig geformuleerde pigmentatie die ruimschoots voldoet aan de technische eisen van industriële coatings — compatibel met de meest gangbare harssystemen.',
      pl: 'Starannie opracowana pigmentacja, która z nawiązką spełnia wymagania techniczne powłok przemysłowych — zgodna z najczęstszymi systemami żywic.',
      ro: 'Pigmentare atent formulată care depășește cerințele tehnice ale acoperirilor industriale — compatibilă cu cele mai comune sisteme de rășini.' }],
    ['#performance .feat b', {
      nl: ['Weersbestendigheid','Hittebestendigheid','Chemische bestendigheid','Geen prestatieverlies',"16 kleurpasta's",'Strakke toleranties'],
      pl: ['Odporność na warunki atm.','Odporność na ciepło','Odporność chemiczna','Bez utraty właściwości','16 past kolorystycznych','Wąskie tolerancje'],
      ro: ['Rezistență la intemperii','Rezistență la căldură','Rezistență chimică','Fără pierderi de proprietăți','16 paste de culoare','Toleranțe strânse'] }],
    ['#performance .feat span', {
      nl: ['Hoogwaardige pigmenten zorgen voor uitstekende weer- en lichtechtheid (Blue Wool 8).','Pigmentatie die hitte doorstaat zonder kleurverschuiving.','Ontworpen om veeleisende chemische belasting te weerstaan.','Inkleuring die de eigenschappen van de uiteindelijke coating niet aantast.','Een zorgvuldig samengesteld bereik dat het hele kleurspectrum bereikt.','De nieuwste kleurmatch-technologie — betere matches, tijd- en kostenbesparend.'],
      pl: ['Wysokiej jakości pigmenty zapewniają doskonałą odporność na warunki atmosferyczne i światło (Blue Wool 8).','Pigmentacja, która wytrzymuje ciepło bez zmiany koloru.','Zaprojektowana, by wytrzymać wymagające narażenie chemiczne.','Barwienie, które nie pogarsza właściwości gotowej powłoki.','Starannie dobrana gama pokrywająca całe spektrum kolorów.','Najnowsza technologia dopasowania kolorów — lepsze dopasowania, oszczędność czasu i pieniędzy.'],
      ro: ['Pigmenți de înaltă calitate oferă rezistență excelentă la intemperii și lumină (Blue Wool 8).','Pigmentare care rezistă la căldură fără a-și schimba culoarea.','Concepută să reziste la expuneri chimice exigente.','Nuanțare care nu compromite proprietățile acoperirii finale.','O gamă atent selectată care acoperă întregul spectru de culori.','Cea mai nouă tehnologie de potrivire a culorilor — potriviri mai bune, economisind timp și bani.'] }],

    ['#colors .eyebrow', { nl: "Kleurpasta's", pl: 'Pasty barwiące', ro: 'Coloranți' }],
    ['#colors h2', {
      nl: "16 pasta's, <span class=\"red\">het volledige spectrum</span>",
      pl: '16 past, <span class="red">pełne spektrum</span>',
      ro: '16 paste, <span class="red">întregul spectru</span>' }],
    ['#colors .lead', {
      nl: "Hoogwaardige kleurpasta's geformuleerd voor industriële prestaties — die het hele kleurbereik nauwkeurig bereiken, inclusief metallics.",
      pl: 'Wysokiej jakości pasty kolorystyczne opracowane do zastosowań przemysłowych — dokładnie pokrywające całą gamę kolorów, w tym metaliki.',
      ro: 'Coloranți de înaltă calitate formulați pentru performanță industrială — care acoperă cu precizie întreaga gamă de culori, inclusiv metalice.' }],

    ['#apply .eyebrow', { nl: 'Toepassingen', pl: 'Zastosowania', ro: 'Aplicații' }],
    ['#apply h2', {
      nl: 'Van <span class="red">infrastructuur</span><br>tot de fabrieksvloer',
      pl: 'Od <span class="red">infrastruktury</span><br>po posadzkę fabryki',
      ro: 'De la <span class="red">infrastructură</span><br>la podeaua fabricii' }],
    ['#apply .lead', {
      nl: 'TintLab kleurt hoogwaardige coatings in de zwaarste industriële omgevingen — en integreert met elk standaard mengsysteem, handmatig of automatisch.',
      pl: 'TintLab barwi wysokowydajne powłoki w najtrudniejszych środowiskach przemysłowych — i integruje się z każdym standardowym systemem mieszania, ręcznym lub automatycznym.',
      ro: 'TintLab nuanțează acoperiri de înaltă performanță în cele mai dure medii industriale — și se integrează cu orice sistem standard de amestecare, manual sau automat.' }],
    ['#apply .sheet-row b', {
      nl: ['Coatingtypen','Sectoren','Harssystemen','Mengen'],
      pl: ['Typy powłok','Sektory','Systemy żywic','Mieszanie'],
      ro: ['Tipuri de acoperiri','Sectoare','Sisteme de rășini','Amestecare'] }],
    ['#apply .sheet-row span', {
      nl: ['Industriële coatings, protective coatings en vloercoatings.','Protective coatings · Infrastructuur · Industrie · OEM · Marine &amp; offshore.','Epoxy, polyurethaan, polyaspartic en alkyd.','Compatibel met alle standaardsystemen — handmatig of volautomatisch, gemengd op gewicht.'],
      pl: ['Powłoki przemysłowe, ochronne i podłogowe.','Powłoki ochronne · Infrastruktura · Przemysł · OEM · Morskie i offshore.','Epoksyd, poliuretan, poliasparaginowe i alkid.','Zgodny ze wszystkimi standardowymi systemami — ręcznie lub w pełni automatycznie, mieszany wagowo.'],
      ro: ['Acoperiri industriale, de protecție și de pardoseală.','Acoperiri de protecție · Infrastructură · Industrie · OEM · Maritim și offshore.','Epoxi, poliuretan, poliaspartic și alchidic.','Compatibil cu toate sistemele standard — manual sau complet automat, amestecat la gramaj.'] }],

    ['.cta-card .eyebrow', { nl: 'Aan de slag', pl: 'Zacznij', ro: 'Începe' }],
    ['.cta-card h2', { nl: 'Breng TintLab naar je lijn', pl: 'Wprowadź TintLab na swoją linię', ro: 'Adu TintLab pe linia ta' }],
    ['.cta-card p', {
      nl: 'Praat met onze coatingexperts over kleurformules, het RedLike™-systeem of het integreren van TintLab in je mengproces.',
      pl: 'Porozmawiaj z naszymi ekspertami ds. powłok o recepturach kolorów, systemie RedLike™ lub integracji TintLab z procesem mieszania.',
      ro: 'Discută cu experții noștri în acoperiri despre formule de culoare, sistemul RedLike™ sau integrarea TintLab în fluxul de amestecare.' }],
    ['.cta-card .btn-solid', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri' }],
    ['.cta-card .btn-ghost', { nl: 'Ontdek Baril Group', pl: 'Poznaj Baril Group', ro: 'Descoperă Baril Group' }],

    ['.foot-claim', {
      nl: 'Betrouwbaar inkleuren, industriële prestaties.',
      pl: 'Niezawodne barwienie, przemysłowa wydajność.',
      ro: 'Nuanțare fiabilă, performanță industrială.' }],
    ['.foot-grid div:nth-child(2) a', {
      nl: ['RedLike™','Prestaties',"Kleurpasta's",'Toepassingen'],
      pl: ['RedLike™','Wydajność','Pasty barwiące','Zastosowania'],
      ro: ['RedLike™','Performanță','Coloranți','Aplicații'] }],
    ['.foot-bottom span', {
      nl: ["© TintLab · een merk van Baril Group · 's-Hertogenbosch NL",'Betrouwbare kleur. Industriële prestaties.'],
      pl: ["© TintLab · marka Baril Group · 's-Hertogenbosch NL",'Niezawodny kolor. Przemysłowa wydajność.'],
      ro: ["© TintLab · o marcă Baril Group · 's-Hertogenbosch NL",'Culoare fiabilă. Performanță industrială.'] }]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('tintlab-lang') || 'en'; } catch (e) {}
  if (!['en', 'nl', 'pl', 'ro', 'de', 'fr'].includes(lang)) lang = 'en';

  function apply(l) {
    for (const [sel, dict] of MAP) {
      const els = document.querySelectorAll(sel);
      els.forEach((el, i) => {
        if (el.dataset.en == null) el.dataset.en = el.innerHTML;
        let v;
        if (l === 'en') { v = (dict && dict.en != null) ? dict.en : el.dataset.en; }
        else { const d = dict ? dict[l] : null; v = Array.isArray(d) ? d[i] : (i === 0 ? d : null); }
        if (v == null) return;
        if (el.innerHTML !== v) el.innerHTML = v;
      });
    }
    document.documentElement.lang = l;
    if (flagBox) [...flagBox.children].forEach(b => b.classList.toggle('active', b.dataset.lang === l));
    try { localStorage.setItem('tintlab-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro', 'de', 'fr'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
