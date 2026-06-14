/* EN/NL language switch. English (the authored language) is captured from the DOM
   on first apply; Dutch lives in the MAP below as [selector, nl-html] pairs.
   A selector matching multiple elements takes an array (DOM order; null = keep). */
(() => {
  'use strict';
  const MAP = [
    // nav
    ['.navlinks a', ['Producten', 'Verfsystemen', 'Markten', 'Cases', 'Technologie', 'Contact']],
    // hero
    ['header .eyebrow', "Baril Coatings — Industriële & beschermende coatings · Sinds 1987"],
    ['header h1', 'Duurzame<br><span class="paint">coating-</span><br>oplossingen'],
    ['.hero-sub', 'Ontwikkelaar en producent van hoogwaardige, zeer duurzame industriële coatings en bouwverven — <strong>staal langer beschermen, met dunnere, schonere lagen</strong>.'],
    ['.hero-cta .btn-solid', 'Bekijk de markten'],
    ['.hero-cta .btn-ghost', 'Hoe bescherming werkt'],
    ['.hero-foot span:first-child', 'Staal & infrastructuur · OEM & metaal · Marine & offshore · Schildersbedrijven'],
    ['.scroll-hint', 'Scroll'],
    // about
    ['#about .eyebrow', 'Wie we zijn'],
    ['.mission-quote', 'Wij maken coatings waarmee staal en constructies <em>langer meegaan met minder</em> — hoogwaardige corrosiebescherming, ontwikkeld op chemisch niveau en aangebracht in dunnere lagen. De prestaties die je van industriële coatings verwacht, op een hernieuwbaar pad.'],
    ['#about .mm b', ['Langer beschermen', 'Minder coating', 'Hernieuwbare chemie', 'Gecertificeerd']],
    ['#about .mm span', [
      'Dunne-laag-corrosiebescherming verlengt de levensduur van staal, infrastructuur en installaties — tot de hoogste ISO 12944-klassen.',
      'Meer dekking per liter bij een lagere laagdikte — minder onderhoudscycli, een kleinere voetafdruk per beschermde m².',
      'Biobased en circulaire grondstoffen vervangen fossiele chemie, stap voor stap — van <10% in 2022 naar 100% in 2030.',
      'ISO 9001, 14001 en 45001. Productgoedkeuringen tot NORSOK M-501 voor offshore — bewezen in de zwaarste omgevingen.']],
    // chapter 01
    ['#corrosion .eyebrow', 'Hoofdstuk 01 · Corrosiebescherming'],
    ['#corrosion h2', 'Van roest<br>naar weerbaarheid'],
    ['#corrosion .sec-head p:last-child', 'Corrosie is een langzaam vuur: onbeschermd staal verliest jaarlijks tientallen micrometers, en constructies worden ruim voor hun tijd vervangen. Een Baril-beschermingssysteem sluit het staal af van zuurstof en water — en wint decennia. Scroll om de coating aan te brengen.'],
    ['#corrosion .cr .cl', ['Tot eerste groot onderhoud', 'Tot de hoogste ISO 12944-corrosiviteitsklassen', 'Gekwalificeerde systemen voor offshore-staal']],
    // chapter 02
    ['#thinlayer .eyebrow', 'Hoofdstuk 02 · Dunne-laag-technologie'],
    ['#thinlayer h2', 'Meer meters,<br>minder coating'],
    ['#thinlayer .sec-head p:last-child', 'De kracht van een coating zit niet in de dikte, maar in hoe goed ze is opgebouwd. Onze dunne-laag-technologie beschermt meer vierkante meters per liter, bij een lagere laagdikte — minder materiaal op de constructie, minder blikken op de vrachtwagen, een kleinere voetafdruk per beschermde m².'],
    ['.cov-readout .cl', 'Beschermd per liter, bij de aanbevolen laagdikte'],
    ['.dft-name', ['Conventionele laagdikte', 'Baril dunne laag']],
    // scenario notes (corrode, thin-layer, dualcure) — in DOM order
    ['.scenario-note', [
      'Indicatieve duurzaamheid. De haalbare bescherming hangt af van systeem, ondergrondvoorbehandeling en corrosiviteitsklasse volgens ISO 12944 / ISO 12944-9 (offshore).',
      'De droge-laagdikte is illustratief; werkelijke dekking en DLD hangen af van product, methode en specificatie.',
      'Gepatenteerde DualCure (DCC). Prestatiecijfers volgens technische data van Baril Coatings; de haalbare bescherming hangt af van systeem, ondergrond en specificatie.']],
    // chapter 03
    ['#bio .eyebrow', 'Hoofdstuk 03 · Hernieuwbare chemie'],
    ['#bio h2', 'Van vat<br>naar bio'],
    ['#bio .sec-head p:last-child', 'Elke liter coating is chemie: bindmiddel, oplosmiddel, pigment, additieven — een eeuw lang gebaseerd op ruwe olie. Wij zetten onze industriële coatings om naar hernieuwbare en circulaire grondstoffen, van minder dan 10% in 2022 naar 55% vandaag, op weg naar 100% in 2030. Dezelfde bescherming. Lagere impact.'],
    ['#bio .ctr .yr', 'vandaag'],
    ['#bio .ctr:nth-child(2) b', '100% in 2030'],
    ['#bio .ctr:nth-child(3) b', 'Gelijk of beter'],
    ['#bio .ctr .cl', ['Hernieuwbare & circulaire grondstoffen', 'Groepsdoel — vanaf <10% in 2022', 'Bescherming, bij lagere laagdikte']],
    // chapter 04 — DualCure
    ['#dualcure .eyebrow', 'Hoofdstuk 04 · DualCure-technologie'],
    ['#dualcure h2', 'Twee uithardingen,<br>één netwerk'],
    ['#dualcure .sec-head p:last-child', 'De meeste industriële coatings harden op één manier uit. Onze gepatenteerde <strong>DualCure (DCC)</strong> hardt tegelijk op twee manieren uit: de chemische 2K-reactie van componenten A en B, <em>én</em> een tweede uitharding die op gang komt door vocht uit de lucht. De twee netwerken weven zich tot één uitzonderlijk dichte moleculaire mesh — hechter <em>én</em> flexibeler dan regulier 2K. Het resultaat: een veelvoud aan bescherming, met aanzienlijk minder coating.'],
    ['#dualcure .dcc-legend .lg', ['Chemische 2K-uitharding (A+B)', 'Vochtuitharding uit de lucht']],
    ['#dualcure .cr .cl', ['Dunner dan conventioneel — bij gelijke bescherming', 'Bij 200 µm totaal · NORSOK-gecertificeerd voor offshore', 'Procestijd · uithardt in ~30 min, zonder warmte, low-VOC']],
    ['#dualcure .net-name', ['Regulier 2K', 'DualCure']],
    ['#dualcure .net-val', ['enkel netwerk', 'dubbel netwerk']],
    // markets
    ['#markets .eyebrow', 'Markten'],
    ['#markets h2', 'Gebouwd voor de<br>zwaarste klussen'],
    ['#markets .sec-head p:last-child', 'Van nationale infrastructuur tot offshore-platforms — overal waar staal lang mee moet, worden onze coatings voorgeschreven.'],
    ['.brand .tag', ['Staal & infrastructuur', 'OEM & metaalindustrie', 'Marine & offshore', 'Schildersbedrijven']],
    ['.brand h3', ['Staal & infra', 'OEM & metaal', 'Marine & offshore', 'Bouwverven']],
    ['.brand p:not(.tag)', [
      'Bruggen, sluizen, stadions en utiliteitsbouw. Zware corrosiebescherming die dragend staal decennialang in dienst houdt, met onderhoudsintervallen van tientallen jaren.',
      'Coatingsystemen voor machinebouw, installaties en seriematige metaalproductie — snel uithardende, duurzame afwerkingen, ontwikkeld voor de lijn én voor het veld erna.',
      'Bescherming voor de meest agressieve omgeving die er is: zout, nevel en onderdompeling. Gekwalificeerde systemen die voldoen aan offshore-normen en blijven werken waar coatings normaal falen.',
      'Een compleet assortiment bouw- en onderhoudsverven voor professionele schildersbedrijven — met technisch advies, applicateurstraining via Baril Academy en altijd actuele veiligheidsinformatie.']],
    ['.spec b', ['Systemen', 'Systemen', 'Systemen', 'Ondersteuning']],
    // ranges
    ['#ranges .eyebrow', 'Assortiment'],
    ['#ranges h2', 'Eén filosofie,<br>vele systemen'],
    ['#ranges .sec-head p:last-child', 'Elk assortiment brengt dezelfde chemie-eerst-aanpak naar een andere klus — ontwikkeld om langer te beschermen met minder.'],
    ['.pillar .pn', ['Hernieuwbaar', 'Snelle uitharding', 'Heavy-duty', 'Watergedragen']],
    ['.pillar h4 + p', [
      'Industriële coatings op basis van plantaardige en reststroom-grondstoffen — fossiele chemie eruit ontworpen, de bescherming erin gehouden.',
      'Dual-cure-technologie voor OEM en metaalindustrie: snelle doorharding en een taaie, duurzame afwerking, sneller klaar voor verwerking.',
      'Zware corrosiebescherming voor staal en infrastructuur — high-build-prestaties in dunnere, slimmere lagen.',
      'Watergedragen, emissiearme coatings die beschermen zonder de oplosmiddelenlast — schoner op de klus en in de lucht.']],
    ['.ranges-note', 'Ook: <strong>Bariline</strong> bouwsystemen · <strong>FleetSpec</strong> (VS). <a href="products/">Bekijk alle producten →</a>'],
    ['.renew-cap', 'Bescherming, met precisie aangebracht — met technisch advies en Baril Academy-training.'],
    // proof
    ['#proof .eyebrow', 'In de praktijk'],
    ['#proof h2', 'Beschermd door Baril'],
    ['#proof .sec-head p:last-child', 'Van nationale infrastructuur tot monumentale restauratie — objecten die onze coatings langer in leven houden.'],
    ['.case .meta span', ['Infrastructuur · 295 m overspanning', 'Bouw & infra', 'Staalconservering', 'Gebouwen & onderhoud', "Restauratie · 's-Hertogenbosch"]],
    ['.cases-note', 'Sleep om te ontdekken · <a href="cases/">Alle cases →</a>'],
    // datasheet
    ['#data .eyebrow', 'Datasheet'],
    ['#data h2', 'Baril Coatings<br>in cijfers'],
    ['.sheet-row b', ['Opgericht', 'Productie', 'Bereik', 'Markten', 'Assortiment', 'Normen', 'Managementsystemen', 'Circulaire doelstelling', 'Ondersteuning', 'Onderdeel van']],
    ['.sheet-row span', [
      "1987 · 's-Hertogenbosch, Nederland <em>— onderdeel van Baril Group</em>",
      'Nederland · Verenigde Staten · Polen',
      'Gebruikt in 20+ landen via lokale distributeurs',
      'Staal & infrastructuur · OEM & metaalindustrie · Marine & offshore · Schildersbedrijven',
      'Biobased · DualCure · SteelKote · Aquaran · Bariline · FleetSpec (VS)',
      'ISO 12944-corrosieklassen · NORSOK M-501 <em>offshore</em>',
      'ISO 9001 <em>kwaliteit</em> · ISO 14001 <em>milieu</em> · ISO 45001 <em>veiligheid</em>',
      '100% circulaire grondstoffen in 2030 <em>— 55% vandaag, vanaf &lt;10% in 2022</em>',
      'Technisch advies · specificatiehulp · applicateurstraining via Baril Academy · altijd actuele veiligheidsinformatie',
      'Baril Group <em>— met Copperant en Fairf</em>']],
    // sources
    ['#sources .eyebrow', 'Bronnen & onderbouwing'],
    ['.src li', [
      'Duurzaamheid van corrosiebescherming en corrosiviteitsklassen (C1–C5, Im1–Im3): ISO 12944-serie; offshore: ISO 12944-9 / NORSOK M-501.',
      'Markten, productielocaties en assortimenten — barilcoatings.com · barilcoatings.us.',
      'Status circulaire grondstoffen (55% vandaag, &lt;10% in 2022, doel 100% in 2030): Baril Group, 2026.',
      'Cijfers voor dekking en droge-laagdikte zijn illustratief; werkelijke waarden hangen af van product, ondergrond, methode en specificatie.']],
    // footer
    ['.foot-claim', 'Duurzame coatingoplossingen.'],
    ['.foot-grid h5', ['Baril Coatings', 'Groep']],
    ['.foot-grid div:nth-child(3) a', ['Over ons', 'Bescherming', 'Werken bij ↗', 'Contact ↗']],
    ['.foot-bottom span', ["© Baril Coatings · 's-Hertogenbosch NL · onderdeel van Baril Group", 'Minder coating. Langere levensduur. Lagere impact.']]
  ];

  const btn = document.getElementById('langSwitch');
  let lang = 'en';
  try { lang = localStorage.getItem('baril-coatings-lang') || 'en'; } catch (e) {}

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
    try { localStorage.setItem('baril-coatings-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (btn) {
    btn.addEventListener('click', () => { lang = lang === 'en' ? 'nl' : 'en'; apply(lang); });
  }
  if (lang === 'nl') apply('nl'); else if (btn) btn.textContent = 'NL';
})();
