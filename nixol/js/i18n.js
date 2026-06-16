/* Language switch for the Nixol one-pager. English is authored in the DOM;
   NL / PL / RO live in the MAP below as [selector, {nl, pl, ro}].
   A value is a string (first match) or an array (one per matched element).
   PL/RO are machine translations — refine as needed. */
(() => {
  'use strict';
  const MAP = [
    ['.navlinks a', {
      nl: ['Waarom Nixol','Hoe het werkt','Kenmerken','Duurzaamheid','Toepassingen','Contact'],
      pl: ['Dlaczego Nixol','Jak to działa','Cechy','Zrównoważoność','Zastosowania','Kontakt'],
      ro: ['De ce Nixol','Cum funcționează','Caracteristici','Sustenabilitate','Aplicații','Contact'] }],
    ['header .eyebrow', {
      nl: 'Nixol — Tijdelijke kasschaduw · Een merk van Baril Group',
      pl: 'Nixol — Tymczasowe cieniowanie szklarni · Marka Baril Group',
      ro: 'Nixol — Umbrire temporară pentru sere · O marcă Baril Group' }],
    ['header h1', {
      nl: 'Heldere resultaten,<br><span class="sun">seizoen</span><br>na seizoen',
      pl: 'Czyste efekty,<br><span class="sun">sezon</span><br>po sezonie',
      ro: 'Rezultate clare,<br><span class="sun">sezon</span><br>după sezon' }],
    ['.hero-sub', {
      nl: 'Een tijdelijke schaduwcoating die jonge gewassen beschermt tegen de felle zon — <strong>optimale lichtregulatie</strong> op glas en polycarbonaat, gemaakt van circulair krijt, veilig voor mens en plant, en volledig verwijderbaar.',
      pl: 'Tymczasowa powłoka cieniująca, która chroni młode uprawy przed ostrym słońcem — <strong>optymalna regulacja światła</strong> na szkle i poliwęglanie, wykonana z obiegowej kredy, bezpieczna dla ludzi i roślin oraz całkowicie usuwalna.',
      ro: 'O acoperire temporară de umbrire care protejează culturile tinere de soarele puternic — <strong>reglare optimă a luminii</strong> pe sticlă și policarbonat, fabricată din cretă circulară, sigură pentru oameni și plante și complet detașabilă.' }],
    ['header .hero-cta .btn-solid', { nl: 'Hoe het werkt', pl: 'Jak to działa', ro: 'Cum funcționează' }],
    ['header .hero-cta .btn-ghost', { nl: 'Vraag een gratis monster aan', pl: 'Poproś o darmową próbkę', ro: 'Cere o mostră gratuită' }],
    ['.hero-foot span:first-child', {
      nl: 'Glas &amp; polycarbonaat · Nieuwbouw &amp; onderhoud · Volledig verwijderbaar',
      pl: 'Szkło i poliwęglan · Nowe i istniejące · W pełni usuwalna',
      ro: 'Sticlă și policarbonat · Construcție nouă și întreținere · Complet detașabilă' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează' }],

    ['#mission .eyebrow', { nl: 'Waarom Nixol', pl: 'Dlaczego Nixol', ro: 'De ce Nixol' }],
    ['.mission-quote', {
      nl: 'Jonge gewassen hebben licht nodig — maar niet te veel. Nixol legt een heldere, regelbare laag schaduw aan die <em>de scherpte van de zon wegneemt</em>, en daarna spoorloos verdwijnt.',
      pl: 'Młode uprawy potrzebują światła — ale nie za dużo. Nixol tworzy przejrzystą, kontrolowaną warstwę cienia, która <em>łagodzi ostre słońce</em>, a potem znika bez śladu.',
      ro: 'Culturile tinere au nevoie de lumină — dar nu prea multă. Nixol așază un strat clar și controlabil de umbră care <em>atenuează soarele puternic</em>, apoi dispare fără urmă.' }],
    ['#mission .mm b', {
      nl: ['Optimale lichtregulatie','Mild voor jonge gewassen','Volledig verwijderbaar'],
      pl: ['Optymalna regulacja światła','Łagodna dla młodych upraw','Całkowicie usuwalna'],
      ro: ['Reglare optimă a luminii','Blândă cu culturile tinere','Complet detașabilă'] }],
    ['#mission .mm span', {
      nl: ['De juiste balans tussen lichtinval en bescherming — licht genoeg om te groeien, zacht genoeg om te beschermen.','Verzacht felle zon en hitte zodat zaailingen rustig aanslaan, zonder verbranding of stress.','Als het seizoen keert, wast Nixol er schoon af — geen afbladderen, geen residu, geen verrassingen op het glas.'],
      pl: ['Właściwa równowaga między dostępem światła a ochroną — wystarczająco jasno, by rosnąć, wystarczająco miękko, by chronić.','Łagodzi ostre słońce i upał, aby sadzonki spokojnie się przyjmowały, bez przypaleń i stresu.','Gdy sezon się zmienia, Nixol zmywa się czysto — bez łuszczenia, bez pozostałości, bez niespodzianek na szkle.'],
      ro: ['Echilibrul potrivit între pătrunderea luminii și protecție — suficient de luminos pentru creștere, suficient de blând pentru adăpost.','Atenuează soarele puternic și căldura, astfel încât răsadurile să se dezvolte calm, fără arsuri sau stres.','Când sezonul se schimbă, Nixol se spală curat — fără cojire, fără reziduuri, fără surprize pe sticlă.'] }],

    ['#light .eyebrow', { nl: 'Hoe het werkt', pl: 'Jak to działa', ro: 'Cum funcționează' }],
    ['#light h2', {
      nl: 'Schaduw die <span class="leaf">samenwerkt</span> met het licht',
      pl: 'Cień, który współpracuje <span class="leaf">ze</span> światłem',
      ro: 'Umbră care lucrează <span class="leaf">cu</span> lumina' }],
    ['#light .lead', {
      nl: 'Nixol verstrooit binnenvallend zonlicht tot een zachte, gelijkmatige gloed over het gewas. Telers krijgen het klimaat dat ze willen — lagere bladtemperaturen en mildere pieken — terwijl het gewas nog steeds het licht krijgt dat het nodig heeft.',
      pl: 'Nixol rozprasza padające światło słoneczne w miękką, równomierną poświatę nad uprawą. Plantatorzy uzyskują pożądany klimat — niższe temperatury liści i łagodniejsze szczyty — a uprawa wciąż otrzymuje potrzebne światło.',
      ro: 'Nixol difuzează lumina solară într-o strălucire blândă și uniformă peste cultură. Cultivatorii obțin climatul dorit — temperaturi mai scăzute ale frunzelor și vârfuri mai blânde — în timp ce cultura primește în continuare lumina de care are nevoie.' }],
    ['#light .badge', { nl: 'Lichtregulatie, geen verduistering', pl: 'Regulacja światła, nie zaciemnienie', ro: 'Reglarea luminii, nu întunecare' }],
    ['#light .split-list span', {
      nl: ['Gelijkmatige lichtverstrooiing die hittestress en verbranding bij jonge planten vermindert.','Betrouwbare werking op zowel glas als polycarbonaat.','Afgestemd op het groeiseizoen, en verwijderd zodra het licht milder wordt.'],
      pl: ['Równomierne rozpraszanie światła, które ogranicza stres cieplny i przypalenia młodych roślin.','Niezawodne działanie zarówno na szkle, jak i poliwęglanie.','Dopasowana do sezonu wegetacyjnego, a następnie usuwana, gdy światło łagodnieje.'],
      ro: ['Difuzie uniformă a luminii care reduce stresul termic și arsurile plantelor tinere.','Performanță fiabilă atât pe sticlă, cât și pe policarbonat.','Reglată pentru sezonul de creștere, apoi îndepărtată când lumina se atenuează.'] }],

    ['#features .eyebrow', { nl: 'Wat het onderscheidt', pl: 'Co je wyróżnia', ro: 'Ce îl face diferit' }],
    ['#features h2', {
      nl: 'Ontworpen voor de <span class="sun">kas</span>',
      pl: 'Zaprojektowane do <span class="sun">szklarni</span>',
      ro: 'Conceput pentru <span class="sun">seră</span>' }],
    ['#features .lead', {
      nl: 'Alles wat telers van een schaduwcoating vragen — en niets wat ze willen achterlaten.',
      pl: 'Wszystko, czego plantatorzy oczekują od powłoki cieniującej — i nic, co miałoby pozostać.',
      ro: 'Tot ce cer cultivatorii de la o acoperire de umbrire — și nimic din ce nu vor să rămână.' }],
    ['#features .feat b', {
      nl: ['Optimale lichtregulatie','Uitstekende hechting','Weerbestendig','Duurzaam','Milieuvriendelijk','Snelle applicatie','Volledig verwijderbaar','Bewezen &amp; gecertificeerd'],
      pl: ['Optymalna regulacja światła','Doskonała przyczepność','Odporna na warunki atmosferyczne','Zrównoważona','Przyjazna środowisku','Szybka aplikacja','Całkowicie usuwalna','Sprawdzona i certyfikowana'],
      ro: ['Reglare optimă a luminii','Aderență excelentă','Rezistentă la intemperii','Sustenabilă','Prietenoasă cu mediul','Aplicare rapidă','Complet detașabilă','Dovedită și certificată'] }],
    ['#features .feat span', {
      nl: ['De juiste balans tussen lichtinval en gewasbescherming.','Speciaal ontwikkeld voor glas en polycarbonaat — voorkomt afbladderen.','Bestand tegen regen, UV-straling en temperatuurschommelingen.','Langdurig effect, en eenvoudig te verwijderen aan het einde van het seizoen.','Lage emissies en veilig voor planten en medewerkers.','Geschikt voor spuiten, rollen of kwasten — en snel droog.','Laat na reiniging geen residu achter op het glas.','Gemaakt binnen een ISO 9001-, 14001- &amp; 45001-kwaliteits- en veiligheidssysteem.'],
      pl: ['Właściwa równowaga między dostępem światła a ochroną upraw.','Specjalnie opracowana do szkła i poliwęglanu — zapobiega łuszczeniu.','Odporna na deszcz, promieniowanie UV i wahania temperatury.','Długotrwały efekt i łatwa do usunięcia po zakończeniu sezonu.','Niska emisja i bezpieczeństwo dla roślin i pracowników.','Nadaje się do natryskiwania, wałkowania lub malowania pędzlem — i szybko schnie.','Nie pozostawia osadu na szkle po umyciu.','Wyprodukowana w systemie jakości i bezpieczeństwa ISO 9001, 14001 i 45001.'],
      ro: ['Echilibrul potrivit între pătrunderea luminii și protecția culturilor.','Special formulată pentru sticlă și policarbonat — previne cojirea.','Rezistentă la ploaie, radiații UV și variații de temperatură.','Efect de lungă durată și ușor de îndepărtat la finalul sezonului.','Emisii reduse și sigură pentru plante și angajați.','Potrivită pentru pulverizare, aplicare cu rola sau pensula — și se usucă rapid.','Nu lasă reziduuri pe sticlă după curățare.','Realizată într-un sistem de calitate și siguranță ISO 9001, 14001 și 45001.'] }],

    ['#chalk .eyebrow', { nl: 'Circulair &amp; schoon', pl: 'Obiegowa i czysta', ro: 'Circulară și curată' }],
    ['#chalk h2', {
      nl: 'Gebouwd op <span class="leaf">circulair krijt</span>',
      pl: 'Oparta na <span class="leaf">obiegowej kredzie</span>',
      ro: 'Bazată pe <span class="leaf">cretă circulară</span>' }],
    ['#chalk .lead', {
      nl: 'Nixol is gebaseerd op circulair krijt — een van nature rijk aanwezig, gerecycled mineraal. Het doet een seizoen lang zijn werk en keert daarna schoon terug, en laat het glas en het milieu achter zoals het ze aantrof.',
      pl: 'Nixol bazuje na obiegowej kredzie — naturalnie obfitym, pochodzącym z recyklingu minerale. Działa przez sezon, a potem znika czysto, pozostawiając szkło i środowisko w nienaruszonym stanie.',
      ro: 'Nixol se bazează pe cretă circulară — un mineral abundent în natură, reciclat. Își face treaba un sezon, apoi revine curat, lăsând sticla și mediul așa cum le-a găsit.' }],
    ['#chalk .stat .n', {
      nl: ['100%','Laag','Circulair'], pl: ['100%','Niska','Obiegowa'], ro: ['100%','Redus','Circular'] }],
    ['#chalk .stat .l', {
      nl: ['Verwijderbaar — wast eraf zonder residu.','Emissies — veilig voor planten en de mensen die het aanbrengen.','Krijtgebaseerde formule uit een gerecyclede minerale bron.'],
      pl: ['Usuwalna — zmywa się bez pozostałości.','Emisje — bezpieczna dla roślin i osób ją nakładających.','Receptura na bazie kredy z surowca mineralnego z recyklingu.'],
      ro: ['Detașabilă — se spală fără reziduuri.','Emisii — sigură pentru plante și pentru cei care o aplică.','Formulă pe bază de cretă dintr-o sursă minerală reciclată.'] }],

    ['#apply .eyebrow', { nl: 'Toepassingen', pl: 'Zastosowania', ro: 'Aplicații' }],
    ['#apply h2', {
      nl: 'Gemaakt om te telen <span class="sun">onder glas</span>',
      pl: 'Stworzona do uprawy <span class="sun">pod szkłem</span>',
      ro: 'Creată pentru cultivarea <span class="sun">sub sticlă</span>' }],
    ['#apply .lead', {
      nl: 'Een schaduwverf voor kassen in de tuinbouw — geschikt voor nieuwbouw én voor het onderhoud van bestaande kassen.',
      pl: 'Farba cieniująca do szklarni w ogrodnictwie — odpowiednia do nowych konstrukcji i konserwacji istniejących szklarni.',
      ro: 'O vopsea de umbrire pentru sere în horticultură — potrivită pentru construcții noi și pentru întreținerea serelor existente.' }],
    ['#apply .badge', { nl: 'Tuinbouw · Glas &amp; polycarbonaat', pl: 'Ogrodnictwo · Szkło i poliwęglan', ro: 'Horticultură · Sticlă și policarbonat' }],
    ['#apply .sheet-row b', {
      nl: ['Ondergronden','Aanbrengen','Gebruik','Verwijdering'],
      pl: ['Powierzchnie','Aplikacja','Zastosowanie','Usuwanie'],
      ro: ['Suprafețe','Aplicare','Utilizare','Îndepărtare'] }],
    ['#apply .sheet-row span', {
      nl: ['Glazen en polycarbonaat kasdaken en -wanden.','Spuiten, rollen of kwasten — snel droog voor een korte doorlooptijd.','Nieuwbouw &amp; onderhoud van bestaande kassen.','Volledig verwijderbaar, laat na reiniging geen residu achter.'],
      pl: ['Dachy i ściany szklarni ze szkła i poliwęglanu.','Natrysk, wałek lub pędzel — szybkie schnięcie dla krótkiego cyklu.','Nowe konstrukcje i konserwacja istniejących szklarni.','Całkowicie usuwalna, nie pozostawia osadu po umyciu.'],
      ro: ['Acoperișuri și pereți de seră din sticlă și policarbonat.','Pulverizare, rolă sau pensulă — uscare rapidă pentru un ciclu scurt.','Construcții noi și întreținerea serelor existente.','Complet detașabilă, fără reziduuri după curățare.'] }],

    ['#certs .eyebrow', { nl: 'Certificeringen &amp; keurmerken', pl: 'Certyfikaty i znaki jakości', ro: 'Certificări și mărci de calitate' }],
    ['#certs h2', {
      nl: 'Kwaliteit, milieu <span class="leaf">&amp; veiligheid</span>',
      pl: 'Jakość, środowisko <span class="leaf">i bezpieczeństwo</span>',
      ro: 'Calitate, mediu <span class="leaf">și siguranță</span>' }],
    ['#certs .lead', {
      nl: 'Ontwikkeld en geproduceerd binnen de gecertificeerde managementsystemen van Baril Group.',
      pl: 'Opracowana i produkowana w certyfikowanych systemach zarządzania Baril Group.',
      ro: 'Dezvoltată și produsă în cadrul sistemelor de management certificate ale Baril Group.' }],

    ['.cta-card .eyebrow', { nl: 'Probeer het zelf', pl: 'Wypróbuj sam', ro: 'Încearcă singur' }],
    ['.cta-card h2', { nl: 'Vraag een gratis monster aan', pl: 'Poproś o darmową próbkę', ro: 'Cere o mostră gratuită' }],
    ['.cta-card p', {
      nl: 'Ontvang meer informatie, technische ondersteuning of een gratis monster van Nixol Transparant. Ons team helpt je graag het beste klimaat voor je gewassen te creëren.',
      pl: 'Otrzymaj więcej informacji, wsparcie techniczne lub darmową próbkę Nixol Transparant. Nasz zespół chętnie pomoże stworzyć najlepszy klimat dla Twoich upraw.',
      ro: 'Primește mai multe informații, asistență tehnică sau o mostră gratuită de Nixol Transparant. Echipa noastră te ajută cu plăcere să creezi cel mai bun climat pentru culturile tale.' }],
    ['.cta-card .btn-solid', { nl: 'Neem contact op', pl: 'Skontaktuj się', ro: 'Contactează echipa' }],
    ['.cta-card .btn-ghost', { nl: 'Ontdek Baril Group', pl: 'Poznaj Baril Group', ro: 'Descoperă Baril Group' }],

    ['.foot-claim', {
      nl: 'Heldere resultaten — schaduw die jonge gewassen beschermt en daarna wegspoelt.',
      pl: 'Czyste efekty — cień, który chroni młode uprawy, a potem się zmywa.',
      ro: 'Rezultate clare — umbră care protejează culturile tinere, apoi se spală.' }],
    ['.foot-grid div:nth-child(2) a', {
      nl: ['Hoe het werkt','Kenmerken','Toepassingen','Vraag een monster aan'],
      pl: ['Jak to działa','Cechy','Zastosowania','Poproś o próbkę'],
      ro: ['Cum funcționează','Caracteristici','Aplicații','Cere o mostră'] }],
    ['.foot-bottom span', {
      nl: ["© Nixol · een merk van Baril Group · 's-Hertogenbosch NL",'Heldere resultaten, seizoen na seizoen.'],
      pl: ["© Nixol · marka Baril Group · 's-Hertogenbosch NL",'Czyste efekty, sezon po sezonie.'],
      ro: ["© Nixol · o marcă Baril Group · 's-Hertogenbosch NL",'Rezultate clare, sezon după sezon.'] }]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('nixol-lang') || 'en'; } catch (e) {}
  if (!['en', 'nl', 'pl', 'ro'].includes(lang)) lang = 'en';

  function apply(l) {
    for (const [sel, dict] of MAP) {
      const els = document.querySelectorAll(sel);
      els.forEach((el, i) => {
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
    try { localStorage.setItem('nixol-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
