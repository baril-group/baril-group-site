/* Language switch for the Fortis one-pager. English is authored in the DOM;
   NL / PL / RO live in the MAP as [selector, {nl, pl, ro}].
   PL/RO are machine translations — refine as needed. Product names
   (FortiMax, AquaFort, FortiCure, FortiDur) are kept untranslated. */
(() => {
  'use strict';
  const MAP = [
    ['.navlinks a', {
      nl: ['Waarom Fortis','Producten','Prestaties','Toepassingen','Contact'],
      pl: ['Dlaczego Fortis','Produkty','Wydajność','Zastosowania','Kontakt'],
      ro: ['De ce Fortis','Produse','Performanță','Aplicații','Contact'] }],
    ['header .eyebrow', {
      nl: 'Fortis — Industriële metaalcoatings · Een merk van Baril Group',
      pl: 'Fortis — Przemysłowe powłoki do metalu · Marka Baril Group',
      ro: 'Fortis — Vopsele industriale pentru metal · O marcă Baril Group' }],
    ['header h1', {
      nl: 'IJzersterke<br><span class="acc">bescherming</span><br>voor metaal',
      pl: 'Żelazna<br><span class="acc">ochrona</span><br>metalu',
      ro: 'Protecție<br><span class="acc">puternică</span><br>pentru metal' }],
    ['.hero-sub', {
      nl: 'Industriële primers en toplagen die <strong>maximale oppervlaktebescherming</strong> bieden onder alle atmosferische omstandigheden — gemaakt voor de metaalverwerkende industrie en snelle industriële verwerking.',
      pl: 'Przemysłowe podkłady i powłoki nawierzchniowe zapewniające <strong>maksymalną ochronę powierzchni</strong> w każdych warunkach atmosferycznych — stworzone dla przemysłu metalowego i szybkiej aplikacji przemysłowej.',
      ro: 'Grunduri și straturi de finisare industriale care oferă <strong>protecție maximă a suprafeței</strong> în orice condiții atmosferice — create pentru industria prelucrării metalelor și aplicare industrială rapidă.' }],
    ['header .hero-cta .btn-solid', { nl: 'Bekijk de producten', pl: 'Zobacz produkty', ro: 'Vezi produsele' }],
    ['header .hero-cta .btn-ghost', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri' }],
    ['.hero-foot span:first-child', {
      nl: 'Alkyd · Watergedragen · Epoxy · Polyurethaan',
      pl: 'Alkid · Wodorozcieńczalne · Epoksyd · Poliuretan',
      ro: 'Alchidic · Pe bază de apă · Epoxi · Poliuretan' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează' }],

    ['#mission .eyebrow', { nl: 'Waarom Fortis', pl: 'Dlaczego Fortis', ro: 'De ce Fortis' }],
    ['.mission-quote', {
      nl: 'Metaal verdient bescherming die blijft. Fortis levert <em>ijzersterke</em> primers en toplagen — ontwikkeld voor maximale oppervlaktebescherming onder alle atmosferische omstandigheden, en klaar voor snelle industriële verwerking.',
      pl: 'Metal zasługuje na ochronę, która trwa. Fortis dostarcza <em>żelazne</em> podkłady i powłoki nawierzchniowe — opracowane dla maksymalnej ochrony powierzchni w każdych warunkach atmosferycznych i gotowe do szybkiej aplikacji przemysłowej.',
      ro: 'Metalul merită o protecție care durează. Fortis oferă grunduri și straturi de finisare <em>puternice</em> — dezvoltate pentru protecție maximă a suprafeței în orice condiții atmosferice și gata pentru aplicare industrială rapidă.' }],
    ['#mission .mm b', {
      nl: ['Maximale bescherming','Gemaakt voor de lakstraat','Elke kleur, elke glansgraad'],
      pl: ['Maksymalna ochrona','Stworzony na linię','Każdy kolor, każdy połysk'],
      ro: ['Protecție maximă','Creat pentru linie','Orice culoare, orice luciu'] }],
    ['#mission .mm span', {
      nl: ['Industriële primers en toplagen die metaal maximale oppervlaktebescherming geven onder alle atmosferische omstandigheden.','Geschikt voor automatische lakstraten en conventionele spuittechnieken — perfect voor snelle elektrostatische nat-in-nat applicatie.','In te kleuren met de universele hoog geconcentreerde Baril kleurpasta\'s; alkyd- en PU-systemen in glansgraden 10, 30, 60 en full gloss.'],
      pl: ['Przemysłowe podkłady i powłoki nawierzchniowe zapewniające metalowi maksymalną ochronę powierzchni w każdych warunkach atmosferycznych.','Nadają się do automatycznych linii lakierniczych i konwencjonalnych technik natryskowych — idealne do szybkiej aplikacji elektrostatycznej mokro-na-mokro.','Barwione uniwersalnymi, wysoko skoncentrowanymi pastami Baril; systemy alkidowe i PU w połyskach 10, 30, 60 i full gloss.'],
      ro: ['Grunduri și straturi de finisare industriale care oferă metalului protecție maximă a suprafeței în orice condiții atmosferice.','Potrivite pentru linii automate de vopsire și tehnici convenționale de pulverizare — perfecte pentru aplicarea electrostatică rapidă ud-pe-ud.','Nuanțabile cu pastele de culoare universale, înalt concentrate, Baril; sisteme alchidice și PU în luciurile 10, 30, 60 și full gloss.'] }],

    ['#products .eyebrow', { nl: 'Producten', pl: 'Produkty', ro: 'Produse' }],
    ['#products h2', {
      nl: 'Vier systemen, <span class="acc">één standaard</span>',
      pl: 'Cztery systemy, <span class="acc">jeden standard</span>',
      ro: 'Patru sisteme, <span class="acc">un standard</span>' }],
    ['#products .lead', {
      nl: 'Het Fortis-assortiment dekt elke stap van industriële metaalafwerking — primers en toplagen, solventgedragen en watergedragen, afgestemd op de eisen van de lakstraat.',
      pl: 'Asortyment Fortis obejmuje każdy etap przemysłowego wykańczania metalu — podkłady i powłoki nawierzchniowe, rozpuszczalnikowe i wodorozcieńczalne, dopasowane do wymagań linii.',
      ro: 'Gama Fortis acoperă fiecare etapă a finisării industriale a metalului — grunduri și straturi de finisare, pe bază de solvent și de apă, adaptate cerințelor liniei.' }],
    ['#products .feat .prod-tag', {
      nl: ['Alkyd · 1K','Watergedragen','Epoxy primer','Polyurethaan · 2K'],
      pl: ['Alkid · 1K','Wodorozcieńczalny','Podkład epoksydowy','Poliuretan · 2K'],
      ro: ['Alchidic · 1K','Pe bază de apă','Grund epoxidic','Poliuretan · 2K'] }],
    ['#products .feat span:last-child', {
      nl: ['Snelle, eencomponenten alkyd-toplagen voor efficiënte industriële afwerking van uiteenlopende objecten.','Watergedragen coatings met lage emissie voor duurzame industriële bescherming, zonder in te boeten op duurzaamheid.','Hechtsterke epoxy-primers die een duurzame basis leggen op ferro- en non-ferrometalen.','Tweecomponenten polyurethaan-toplagen voor maximale duurzaamheid, glansbehoud en chemische bestendigheid.'],
      pl: ['Szybkie, jednoskładnikowe powłoki alkidowe do wydajnego wykańczania przemysłowego szerokiej gamy obiektów.','Niskoemisyjne powłoki wodorozcieńczalne do zrównoważonej ochrony przemysłowej, bez kompromisów w trwałości.','Podkłady epoksydowe o wysokiej przyczepności, tworzące trwałą bazę na metalach żelaznych i nieżelaznych.','Dwuskładnikowe powłoki poliuretanowe dla maksymalnej trwałości, zachowania połysku i odporności chemicznej.'],
      ro: ['Straturi de finisare alchidice, monocomponente, rapide, pentru finisarea industrială eficientă a unei game largi de obiecte.','Vopsele pe bază de apă cu emisii reduse pentru protecție industrială durabilă, fără compromisuri privind durabilitatea.','Grunduri epoxidice cu aderență ridicată care creează o bază durabilă pe metale feroase și neferoase.','Straturi de finisare poliuretanice bicomponente pentru durabilitate maximă, păstrarea luciului și rezistență chimică.'] }],

    ['#performance .eyebrow', { nl: 'Prestaties', pl: 'Wydajność', ro: 'Performanță' }],
    ['#performance h2', {
      nl: 'Gemaakt voor <span class="acc">de lakstraat</span>',
      pl: 'Stworzony na <span class="acc">linię</span>',
      ro: 'Creat pentru <span class="acc">linie</span>' }],
    ['#performance .lead', {
      nl: 'De industriële primers en toplagen van Fortis bieden maximale oppervlaktebescherming onder alle atmosferische omstandigheden — gebouwd om te draaien op moderne productielijnen.',
      pl: 'Przemysłowe podkłady i powłoki nawierzchniowe Fortis zapewniają maksymalną ochronę powierzchni w każdych warunkach atmosferycznych — zbudowane do pracy na nowoczesnych liniach produkcyjnych.',
      ro: 'Grundurile și straturile de finisare industriale Fortis oferă protecție maximă a suprafeței în orice condiții atmosferice — construite pentru a funcționa pe linii de producție moderne.' }],
    ['#performance .pills span', {
      nl: ['Ferro &amp; non-ferro','Glans 10 / 30 / 60 / Full','Elektrostatisch','Nat-in-nat'],
      pl: ['Żelazne i nieżelazne','Połysk 10 / 30 / 60 / Full','Elektrostatyczny','Mokro-na-mokro'],
      ro: ['Feroase și neferoase','Luciu 10 / 30 / 60 / Full','Electrostatic','Ud-pe-ud'] }],
    ['#performance .feat b', {
      nl: ['Atmosferische bestendigheid','Elektrostatisch nat-in-nat','Lakstraat &amp; conventioneel','Elke kleur','Glans op maat','Duurzaam ontworpen'],
      pl: ['Odporność atmosferyczna','Elektrostatyczny mokro-na-mokro','Linia i konwencjonalnie','Każdy kolor','Połysk na zamówienie','Trwały z założenia'],
      ro: ['Rezistență atmosferică','Electrostatic ud-pe-ud','Linie și convențional','Orice culoare','Luciu la cerere','Durabil prin design'] }],
    ['#performance .feat span', {
      nl: ['Maximale oppervlaktebescherming onder alle atmosferische omstandigheden, binnen en buiten.','Perfect geschikt voor snelle elektrostatische nat-in-nat applicatie voor een hoge doorvoer.','Gemaakt voor automatische lakstraten, en net zo goed thuis met conventionele spuittechnieken.','Spuit uw objecten in iedere gewenste kleur met de universele hoog geconcentreerde Baril kleurpasta\'s.','Alkyd- en polyurethaan laksystemen, verkrijgbaar in glans 10, 30, 60 en full gloss.','Primers en toplagen die metalen objecten duurzaam beschermen en hun footprint verkleinen.'],
      pl: ['Maksymalna ochrona powierzchni w każdych warunkach atmosferycznych, wewnątrz i na zewnątrz.','Idealnie nadaje się do szybkiej aplikacji elektrostatycznej mokro-na-mokro przy wysokiej przepustowości.','Stworzony do automatycznych linii lakierniczych, równie dobry przy konwencjonalnym natrysku.','Maluj swoje obiekty w dowolnym kolorze uniwersalnymi, wysoko skoncentrowanymi pastami Baril.','Systemy lakiernicze alkidowe i poliuretanowe dostępne w połysku 10, 30, 60 i full gloss.','Podkłady i powłoki, które trwale chronią metalowe obiekty i zmniejszają ich ślad środowiskowy.'],
      ro: ['Protecție maximă a suprafeței în orice condiții atmosferice, în interior și exterior.','Perfect potrivit pentru aplicarea electrostatică rapidă ud-pe-ud, pentru un debit ridicat.','Creat pentru linii automate de vopsire și la fel de potrivit pentru tehnici convenționale de pulverizare.','Vopsiți obiectele în orice culoare cu pastele de culoare universale, înalt concentrate, Baril.','Sisteme de vopsire alchidice și poliuretanice, disponibile în luciu 10, 30, 60 și full gloss.','Grunduri și straturi de finisare care protejează durabil obiectele metalice și le reduc amprenta.'] }],

    ['#apply .eyebrow', { nl: 'Toepassingen', pl: 'Zastosowania', ro: 'Aplicații' }],
    ['#apply h2', {
      nl: 'Coatings voor de<br><span class="acc">metaalverwerkende industrie</span>',
      pl: 'Powłoki dla<br><span class="acc">przemysłu metalowego</span>',
      ro: 'Vopsele pentru<br><span class="acc">industria metalurgică</span>' }],
    ['#apply .lead', {
      nl: 'We leveren Fortis-coatings via het Fortis-dealernetwerk aan de metaalverwerkende industrie — ijzersterke verfsystemen voor elk metalen object.',
      pl: 'Dostarczamy powłoki Fortis przez sieć dealerów Fortis do przemysłu metalowego — żelazne systemy lakiernicze do każdego metalowego obiektu.',
      ro: 'Livrăm vopselele Fortis prin rețeaua de dealeri Fortis către industria prelucrării metalelor — sisteme de vopsire puternice pentru orice obiect metalic.' }],
    ['#apply .sheet-row b', {
      nl: ['Metaalbewerking','Machinebouw','Mobiele machines','Kraan &amp; lift','Containers &amp; hekwerk','Meubilair &amp; kunststof'],
      pl: ['Obróbka metali','Budowa maszyn','Maszyny mobilne','Dźwigi i windy','Kontenery i ogrodzenia','Meble i tworzywa'],
      ro: ['Prelucrarea metalelor','Construcția de mașini','Utilaje mobile','Macarale și lifturi','Containere și garduri','Mobilier și plastic'] }],
    ['#apply .sheet-row span', {
      nl: ['Coatings voor de metaalverwerkende industrie en algemene industriële afwerking.','Coatings voor machine- en apparatenbouw.','Coatings voor landbouwmechanisatie en grondverzetmachines.','Coatings voor kraan- en liftbouw.','Coatings voor containerbouw en hekwerk.','Coatings voor straat- en parkmeubilair en kunststofverwerking.'],
      pl: ['Powłoki dla przemysłu metalowego i ogólnego wykańczania przemysłowego.','Powłoki do budowy maszyn i urządzeń.','Powłoki do maszyn rolniczych i sprzętu do robót ziemnych.','Powłoki do budowy dźwigów i wind.','Powłoki do budowy kontenerów i ogrodzeń.','Powłoki do mebli miejskich i parkowych oraz przetwórstwa tworzyw.'],
      ro: ['Vopsele pentru industria prelucrării metalelor și finisarea industrială generală.','Vopsele pentru construcția de mașini și echipamente.','Vopsele pentru utilaje agricole și echipamente de terasamente.','Vopsele pentru construcția de macarale și lifturi.','Vopsele pentru construcția de containere și garduri.','Vopsele pentru mobilier stradal și de parc și prelucrarea plasticului.'] }],

    ['#contact .eyebrow', { nl: 'Aan de slag', pl: 'Zacznij', ro: 'Începe' }],
    ['#contact h2', { nl: 'Vind een Fortis-dealer', pl: 'Znajdź dealera Fortis', ro: 'Găsește un dealer Fortis' }],
    ['#contact p', {
      nl: 'Ontdek de ijzersterke verfsystemen van het Fortis-pakket en zoek een dealer in uw regio — of overleg met onze coatingspecialisten over uw lakstraat.',
      pl: 'Odkryj żelazne systemy lakiernicze z oferty Fortis i znajdź dealera w swoim regionie — lub porozmawiaj z naszymi specjalistami o swojej linii.',
      ro: 'Descoperiți sistemele de vopsire puternice din gama Fortis și găsiți un dealer în regiunea dumneavoastră — sau discutați cu specialiștii noștri despre linia dvs.' }],
    ['#contact .hero-cta .btn-solid', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri' }],
    ['#contact .hero-cta .btn-ghost', { nl: 'Ontdek Baril Group', pl: 'Poznaj Baril Group', ro: 'Descoperă Baril Group' }],

    ['.foot-claim', {
      nl: 'IJzersterke industriële coatings voor metaal.',
      pl: 'Żelazne powłoki przemysłowe do metalu.',
      ro: 'Vopsele industriale puternice pentru metal.' }],
    ['footer h5', {
      nl: ['Producten','Baril Group'],
      pl: ['Produkty','Baril Group'],
      ro: ['Produse','Baril Group'] }],
    ['.foot-bottom span', {
      nl: ["© Fortis · een merk van Baril Group · 's-Hertogenbosch NL",'IJzersterke bescherming voor metaal.'],
      pl: ["© Fortis · marka Baril Group · 's-Hertogenbosch NL",'Żelazna ochrona metalu.'],
      ro: ["© Fortis · o marcă Baril Group · 's-Hertogenbosch NL",'Protecție puternică pentru metal.'] }]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('fortis-lang') || 'en'; } catch (e) {}
  if (!['en', 'nl', 'pl', 'ro'].includes(lang)) lang = 'en';

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
    try { localStorage.setItem('fortis-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
