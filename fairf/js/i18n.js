/* Language switch for the Fairf one-pager. EN authored in the DOM;
   NL/PL/RO in the MAP. PL/RO are machine translations — refine as needed. */
(() => {
  'use strict';
  const MAP = [
    ['.navlinks a', {
      nl: ['Waarom Fairf','Producten','Kleuren','Verkooppunten','fairf.eu ↗'],
      pl: ['Dlaczego Fairf','Produkty','Kolory','Gdzie kupić','fairf.eu ↗'],
      ro: ['De ce Fairf','Produse','Culori','Unde cumperi','fairf.eu ↗'] }],
    ['header .eyebrow', {
      nl: 'Fairf — Plantaardige verf met een missie · Een merk van Baril Group',
      pl: 'Fairf — Roślinna farba z misją · Marka Baril Group',
      ro: 'Fairf — Vopsea vegetală cu o misiune · O marcă Baril Group' }],
    ['header h1', {
      nl: 'Verf met<br><span class="rain">een missie</span>',
      pl: 'Farba z<br><span class="rain">misją</span>',
      ro: 'Vopsea cu<br><span class="rain">o misiune</span>' }],
    ['.hero-sub', {
      nl: 'Plantaardige muur- en lakverf die <strong>vriendelijk is voor jou en de planeet</strong> — vrij van schadelijke stoffen, in elke kleur die je kunt bedenken.',
      pl: 'Roślinna farba ścienna i lakierowa, która jest <strong>przyjazna dla Ciebie i planety</strong> — bez szkodliwych substancji, w każdym kolorze, jaki sobie wymarzysz.',
      ro: 'Vopsea vegetală pentru pereți și lac, <strong>blândă cu tine și cu planeta</strong> — fără substanțe nocive, în orice culoare îți poți imagina.' }],
    ['header .hero-cta .btn-solid', { nl: 'Bezoek fairf.eu ↗', pl: 'Odwiedź fairf.eu ↗', ro: 'Vizitează fairf.eu ↗' }],
    ['header .hero-cta .btn-ghost', { nl: 'Bekijk de kleuren', pl: 'Zobacz kolory', ro: 'Vezi culorile' }],
    ['.hero-foot span:first-child', {
      nl: 'Plantaardig · Kindvriendelijk · Elke kleur · Bij Karwei',
      pl: 'Roślinna · Przyjazna dzieciom · Każdy kolor · W Karwei',
      ro: 'Vegetală · Prietenoasă cu copiii · Orice culoare · La Karwei' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează' }],

    ['#mission .eyebrow', { nl: 'Waarom Fairf', pl: 'Dlaczego Fairf', ro: 'De ce Fairf' }],
    ['.mission-quote', {
      nl: 'Verf mag vriendelijk zijn — voor de mensen in de kamer én de planeet daarbuiten. Fairf is plantaardig en vrij van schadelijke stoffen, <em>zonder ook maar één kleur in te leveren</em>.',
      pl: 'Farba może być przyjazna — dla ludzi w pokoju i dla planety na zewnątrz. Fairf jest roślinna i wolna od szkodliwych substancji, <em>bez rezygnacji z choćby jednego koloru</em>.',
      ro: 'Vopseaua poate fi blândă — cu oamenii din cameră și cu planeta de afară. Fairf este vegetală și fără substanțe nocive, <em>fără a renunța la nicio culoare</em>.' }],
    ['#mission .mm b', {
      nl: ['Plantaardige formule','Vriendelijk &amp; kindvriendelijk','Elke kleur die je kunt bedenken'],
      pl: ['Roślinna receptura','Przyjazna i bezpieczna dla dzieci','Każdy kolor, jaki wymarzysz'],
      ro: ['Formulă vegetală','Blândă și prietenoasă cu copiii','Orice culoare îți poți imagina'] }],
    ['#mission .mm span', {
      nl: ['Gemaakt van plantaardige grondstoffen — de schadelijke stoffen van traditionele verf eruit ontworpen.','Vrij van schadelijke stoffen — veiliger voor je gezin, je huis en de planeet.','Samengestelde collecties door kleurexperts — en elke kleur op maat, op bestelling gemengd.'],
      pl: ['Wykonana z roślinnych surowców — szkodliwe składniki tradycyjnej farby wyeliminowane.','Bez szkodliwych substancji — bezpieczniejsza dla rodziny, domu i planety.','Kolekcje tworzone przez ekspertów od koloru — i każdy kolor na zamówienie.'],
      ro: ['Fabricată din materii prime vegetale — substanțele nocive ale vopselei tradiționale eliminate.','Fără substanțe nocive — mai sigură pentru familia ta, casa ta și planetă.','Colecții create de experți în culoare — și orice culoare personalizată, la comandă.'] }],

    ['#products .eyebrow', { nl: 'Producten', pl: 'Produkty', ro: 'Produse' }],
    ['#products h2', {
      nl: 'Alles voor een <span class="rain">mooie</span> kamer',
      pl: 'Wszystko do <span class="rain">pięknego</span> wnętrza',
      ro: 'Totul pentru o cameră <span class="rain">frumoasă</span>' }],
    ['#products .lead', {
      nl: 'Een eenvoudig, plantaardig assortiment voor muren en houtwerk — makkelijk te kiezen, makkelijk aan te brengen.',
      pl: 'Prosty, roślinny asortyment do ścian i drewna — łatwy w wyborze, łatwy w aplikacji.',
      ro: 'O gamă simplă, vegetală pentru pereți și lemnărie — ușor de ales, ușor de aplicat.' }],
    ['#products .feat b', {
      nl: ['Muurverf','Lakverf','Multiprimer','Onzichtbare lak'],
      pl: ['Farba ścienna','Lakier','Multiprimer','Niewidoczny lakier'],
      ro: ['Vopsea de pereți','Lac','Multiprimer','Lac invizibil'] }],
    ['#products .feat span', {
      nl: ['Plantaardige muurverf met een mooie extra-matte afwerking.','Duurzame lak voor houtwerk, met een gladde, hogere glans.','Eén primer voor vrijwel elke ondergrond — een simpele basis voor een perfect resultaat.','Beschermt houtwerk met behoud van de natuurlijke uitstraling — helder en subtiel.'],
      pl: ['Roślinna farba ścienna z pięknym, ekstramatowym wykończeniem.','Trwały lakier do drewna, z gładkim, wyższym połyskiem.','Jeden podkład do niemal każdej powierzchni — prosta baza dla idealnego efektu.','Chroni drewno, zachowując jego naturalny wygląd — przezroczysty i subtelny.'],
      ro: ['Vopsea de pereți vegetală cu un frumos finisaj extra-mat.','Lac durabil pentru lemnărie, cu un finisaj neted, mai lucios.','Un grund pentru aproape orice suprafață — o bază simplă pentru un rezultat perfect.','Protejează lemnăria păstrând aspectul natural — transparent și subtil.'] }],

    ['#colour .eyebrow', { nl: 'Kleuren', pl: 'Kolory', ro: 'Culori' }],
    ['#colour h2', {
      nl: 'Elke kleur van de <span class="rain">regenboog</span>',
      pl: 'Każdy kolor <span class="rain">tęczy</span>',
      ro: 'Toate culorile <span class="rain">curcubeului</span>' }],
    ['#colour .lead', {
      nl: 'Kleurcollecties samengesteld door experts — en elke kleur die je kunt bedenken, op bestelling gemengd, online of bij Karwei.',
      pl: 'Kolekcje kolorów tworzone przez ekspertów — i każdy kolor, jaki sobie wyobrazisz, mieszany na zamówienie, online lub w Karwei.',
      ro: 'Colecții de culori create de experți — și orice culoare îți poți imagina, amestecată la comandă, online sau la Karwei.' }],

    ['#buy .eyebrow', { nl: 'Verkooppunten', pl: 'Gdzie kupić', ro: 'Unde cumperi' }],
    ['#buy h2', {
      nl: 'Haal het in <span class="rain">huis</span>',
      pl: 'Weź to do <span class="rain">domu</span>',
      ro: 'Adu-l <span class="rain">acasă</span>' }],
    ['#buy .lead', {
      nl: 'Bestel online, haal het bij Karwei, of kom de kleuren in het echt bekijken.',
      pl: 'Zamów online, odbierz w Karwei lub przyjdź zobaczyć kolory na żywo.',
      ro: 'Comandă online, ridică de la Karwei sau vino să vezi culorile pe viu.' }],
    ['#buy .buy b', { nl: ['Online','Bij Karwei','Fairfspots'], pl: ['Online','W Karwei','Fairfspots'], ro: ['Online','La Karwei','Fairfspots'] }],
    ['#buy .buy span', {
      nl: ['Bestel plantaardige verf en stalen rechtstreeks in de Fairf-webshop, thuisbezorgd.','Vind Fairf in het schap bij Karwei-winkels door heel Nederland.','Bezoek een Fairfspot — een eigen plek om inspiratie op te doen en de kleuren toegepast te zien.'],
      pl: ['Zamów roślinną farbę i próbki bezpośrednio w sklepie Fairf, z dostawą do domu.','Znajdź Fairf na półce w sklepach Karwei w całej Holandii.','Odwiedź Fairfspot — miejsce, gdzie zainspirujesz się i zobaczysz kolory na ścianie.'],
      ro: ['Comandă vopsea vegetală și mostre direct din magazinul online Fairf, livrate acasă.','Găsește Fairf pe raft în magazinele Karwei din toată Olanda.','Vizitează un Fairfspot — un spațiu dedicat pentru inspirație și pentru a vedea culorile aplicate.'] }],
    ['#buy .buy a', {
      nl: ['Shop op fairf.eu ↗','Vind een winkel ↗','Ontdek Fairfspots ↗'],
      pl: ['Kup na fairf.eu ↗','Znajdź sklep ↗','Odkryj Fairfspots ↗'],
      ro: ['Cumpără pe fairf.eu ↗','Găsește un magazin ↗','Descoperă Fairfspots ↗'] }],

    ['.cta-card .eyebrow', { nl: 'De officiële site', pl: 'Oficjalna strona', ro: 'Site-ul oficial' }],
    ['.cta-card h2', { nl: 'Haal kleur in huis met Fairf', pl: 'Wnieś kolor do domu z Fairf', ro: 'Adu culoare acasă cu Fairf' }],
    ['.cta-card p', {
      nl: 'Bekijk alle kleurcollecties, bestel stalen en vind je dichtstbijzijnde verkooppunt op de officiële Fairf-website.',
      pl: 'Przeglądaj wszystkie kolekcje kolorów, zamów próbki i znajdź najbliższy punkt sprzedaży na oficjalnej stronie Fairf.',
      ro: 'Răsfoiește toate colecțiile de culori, comandă mostre și găsește cel mai apropiat punct de vânzare pe site-ul oficial Fairf.' }],
    ['.cta-card .btn-solid', { nl: 'Naar fairf.eu ↗', pl: 'Przejdź do fairf.eu ↗', ro: 'Mergi la fairf.eu ↗' }],
    ['.cta-card .btn-ghost', { nl: 'Ontdek Baril Group', pl: 'Poznaj Baril Group', ro: 'Descoperă Baril Group' }],

    ['.foot-claim', {
      nl: 'Plantaardige verf met een missie — vriendelijk voor jou en de planeet.',
      pl: 'Roślinna farba z misją — przyjazna dla Ciebie i planety.',
      ro: 'Vopsea vegetală cu o misiune — blândă cu tine și cu planeta.' }],
    ['.foot-grid div:nth-child(2) a', {
      nl: ['Producten','Kleuren','fairf.eu ↗'],
      pl: ['Produkty','Kolory','fairf.eu ↗'],
      ro: ['Produse','Culori','fairf.eu ↗'] }],
    ['.foot-bottom span', {
      nl: ["© Fairf · een merk van Baril Group · 's-Hertogenbosch NL", 'Vriendelijk voor jou en de planeet.'],
      pl: ["© Fairf · marka Baril Group · 's-Hertogenbosch NL", 'Przyjazna dla Ciebie i planety.'],
      ro: ["© Fairf · o marcă Baril Group · 's-Hertogenbosch NL", 'Blândă cu tine și cu planeta.'] }]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('fairf-lang') || 'en'; } catch (e) {}
  if (!['en', 'nl', 'pl', 'ro'].includes(lang)) lang = 'en';

  function apply(l) {
    for (const [sel, dict] of MAP) {
      document.querySelectorAll(sel).forEach((el, i) => {
        if (el.dataset.en == null) el.dataset.en = el.innerHTML;
        let v;
        if (l === 'en') { v = el.dataset.en; }
        else { const d = dict ? dict[l] : null; v = Array.isArray(d) ? d[i] : (i === 0 ? d : null); }
        if (v == null) return;
        if (el.innerHTML !== v) el.innerHTML = v;
      });
    }
    document.documentElement.lang = l;
    if (flagBox) [...flagBox.children].forEach(b => b.classList.toggle('active', b.dataset.lang === l));
    try { localStorage.setItem('fairf-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }
  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro'].includes(lang)) lang = 'en';
    apply(lang);
  }));
  apply(lang);
})();
