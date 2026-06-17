/* Language switch for the Baril Coatings product-line one-pagers.
   English is authored in the DOM; NL / PL / RO live in the maps below.
   <body data-brand="..."> picks the per-page map; COMMON applies to all.
   Shares the 'baril-coatings-lang' key with the rest of the Coatings site.
   PL/RO are machine translations — refine as needed. */
(() => {
  'use strict';

  const COMMON = [
    ['.navlinks a', {
      nl: ['Aquaran','DualCure','SteelKote','Bariline','Alle producten'],
      pl: ['Aquaran','DualCure','SteelKote','Bariline','Wszystkie produkty'],
      ro: ['Aquaran','DualCure','SteelKote','Bariline','Toate produsele'] }],
    ['.bp-hero .btn-accent', { nl: 'Bekijk producten', pl: 'Zobacz produkty', ro: 'Vezi produsele' }],
    ['.bp-hero .btn-ghost', { nl: 'Praat met een expert', pl: 'Porozmawiaj z ekspertem', ro: 'Discută cu un expert' }],
    ['.bp-band .btn-accent', { nl: 'Bekijk de catalogus', pl: 'Przeglądaj katalog', ro: 'Răsfoiește catalogul' }],
    ['.bp-band .btn-ghost', { nl: 'Praat met een expert', pl: 'Porozmawiaj z ekspertem', ro: 'Discută cu un expert' }],
    ['.foot-grid h5', { nl: ['Productlijnen','Baril Coatings'], pl: ['Linie produktów','Baril Coatings'], ro: ['Linii de produse','Baril Coatings'] }],
    ['.foot-grid div:nth-child(3) a', {
      nl: ['Home','Alle producten','Contact','Baril Group ↗'],
      pl: ['Strona główna','Wszystkie produkty','Kontakt','Baril Group ↗'],
      ro: ['Acasă','Toate produsele','Contact','Baril Group ↗'] }],
    ['.foot-bottom span', {
      nl: ["© Baril Coatings · 's-Hertogenbosch NL · onderdeel van Baril Group", 'Meer beschermen, met minder.'],
      pl: ["© Baril Coatings · 's-Hertogenbosch NL · część Baril Group", 'Chroń więcej, używając mniej.'],
      ro: ["© Baril Coatings · 's-Hertogenbosch NL · parte din Baril Group", 'Protejează mai mult, cu mai puțin.'] }]
  ];

  const MAPS = {
    aquaran: [
      ['.bp-tag', { nl: 'Watergedragen beschermende coatings', pl: 'Wodorozcieńczalne powłoki ochronne', ro: 'Acoperiri de protecție pe bază de apă' }],
      ['.bp-sub', {
        nl: 'Watergedragen 1K- &amp; 2K-beschermende coatings voor industriële afwerking en staal — <strong>de bescherming van solventsystemen, met veel minder emissies</strong>.',
        pl: 'Wodorozcieńczalne powłoki ochronne 1K i 2K do wykańczania przemysłowego i stali — <strong>ochrona systemów rozpuszczalnikowych, przy znacznie mniejszej emisji</strong>.',
        ro: 'Acoperiri de protecție 1K și 2K pe bază de apă pentru finisare industrială și oțel — <strong>protecția sistemelor cu solvenți, cu emisii mult mai reduse</strong>.' }],
      ['.bp-quick span', {
        nl: ['<b>1K &amp; 2K</b> systemen','<b>C1–C5</b> corrosiviteit','<b>Low-VOC</b> watergedragen','Staal · aluminium · verzinkt'],
        pl: ['Systemy <b>1K i 2K</b>','Korozyjność <b>C1–C5</b>','<b>Low-VOC</b> wodorozcieńczalne','Stal · aluminium · ocynk'],
        ro: ['Sisteme <b>1K &amp; 2K</b>','Corozivitate <b>C1–C5</b>','<b>Low-VOC</b> pe bază de apă','Oțel · aluminiu · zincat'] }],
      ['.eyebrow', { nl: ['Waarom Aquaran','In de praktijk'], pl: ['Dlaczego Aquaran','W praktyce'], ro: ['De ce Aquaran','În practică'] }],
      ['.bp-quote', {
        nl: 'Bescherming hoeft de lucht eromheen niet te kosten. Aquaran levert duurzame, industriële coatingprestaties op waterbasis — <em>vergelijkbaar met solventsystemen</em>, met een fractie van de VOS.',
        pl: 'Ochrona nie musi kosztować otaczającego powietrza. Aquaran zapewnia trwałe, przemysłowe właściwości powłoki na bazie wody — <em>porównywalne z systemami rozpuszczalnikowymi</em>, przy ułamku LZO.',
        ro: 'Protecția nu trebuie să coste aerul din jur. Aquaran oferă performanțe de acoperire durabile, de nivel industrial, pe bază de apă — <em>comparabile cu sistemele cu solvenți</em>, cu o fracțiune din COV.' }],
      ['.bp-card b', {
        nl: ['Lage VOS-emissies','1K- &amp; 2K-opties','Multi-ondergrond','C1–C5 corrosiviteit','Industriële afwerking','Schoner op de klus'],
        pl: ['Niska emisja LZO','Opcje 1K i 2K','Wiele podłoży','Korozyjność C1–C5','Wykańczanie przemysłowe','Czyściej w pracy'],
        ro: ['Emisii reduse de COV','Opțiuni 1K și 2K','Multi-substrat','Corozivitate C1–C5','Finisare industrială','Mai curat la lucru'] }],
      ['.bp-card span', {
        nl: ['Waterbasis vermindert vluchtige organische stoffen drastisch t.o.v. solventcoatings.','Een- en tweecomponentensystemen voor elke klus — van productafwerking tot staalbescherming.','Betrouwbare hechting op staal, aluminium en verzinkte oppervlakken.','Ontwikkeld voor alle atmosferische corrosiviteitsklassen C1 tot C5.','Een strakke, consistente afwerking voor OEM- en industriële productlijnen.','Minder solventlast betekent een gezondere werkplek en een lichtere voetafdruk.'],
        pl: ['Formuła wodna drastycznie redukuje lotne związki organiczne w porównaniu z powłokami rozpuszczalnikowymi.','Systemy jedno- i dwuskładnikowe do każdego zadania — od wykańczania produktów po ochronę stali.','Niezawodna przyczepność do stali, aluminium i powierzchni ocynkowanych.','Zaprojektowane dla klas korozyjności atmosferycznej od C1 do C5.','Czyste, jednolite wykończenie dla linii OEM i przemysłowych.','Mniejsze obciążenie rozpuszczalnikami to zdrowsze miejsce pracy i mniejszy ślad.'],
        ro: ['Formula pe bază de apă reduce drastic compușii organici volatili față de acoperirile cu solvenți.','Sisteme mono- și bicomponente pentru orice lucrare — de la finisarea produselor la protecția oțelului.','Aderență fiabilă pe oțel, aluminiu și suprafețe zincate.','Concepute pentru clasele de corozivitate atmosferică de la C1 la C5.','Un finisaj curat și uniform pentru liniile OEM și industriale.','Mai puțini solvenți înseamnă un loc de muncă mai sănătos și o amprentă mai mică.'] }],
      ['h2', {
        nl: ['Solventprestaties,<br><span class="bp-accent">waterchemie</span>','Vind het juiste Aquaran-systeem'],
        pl: ['Wydajność rozpuszczalnikowa,<br><span class="bp-accent">chemia wodna</span>','Znajdź właściwy system Aquaran'],
        ro: ['Performanță cu solvenți,<br><span class="bp-accent">chimie pe bază de apă</span>','Găsește sistemul Aquaran potrivit'] }],
      ['.bp-list span', {
        nl: ['Duurzaamheid en bescherming vergelijkbaar met traditionele solventcoatings.','Lagere emissies op de lijn en in de lucht, voor schonere productie.','Geschikt voor industriële productafwerking en bescherming van staalconstructies.'],
        pl: ['Trwałość i ochrona porównywalne z tradycyjnymi powłokami rozpuszczalnikowymi.','Niższe emisje na linii i w powietrzu, wspierające czystszą produkcję.','Odpowiednie do wykańczania produktów przemysłowych i ochrony konstrukcji stalowych.'],
        ro: ['Durabilitate și protecție comparabile cu acoperirile tradiționale cu solvenți.','Emisii mai reduse pe linie și în aer, pentru o producție mai curată.','Potrivite pentru finisarea produselor industriale și protecția construcțiilor din oțel.'] }],
      ['.bp-stat .l', {
        nl: ['VOS-emissies t.o.v. solventbasis','Atmosferische corrosiviteitsklassen','Een- en tweecomponentensystemen','Waterbasis van origine'],
        pl: ['Emisja LZO vs. rozpuszczalnikowe','Klasy korozyjności atmosferycznej','Systemy jedno- i dwuskładnikowe','Na bazie wody z założenia'],
        ro: ['Emisii COV vs. pe bază de solvenți','Clase de corozivitate atmosferică','Sisteme mono- și bicomponente','Pe bază de apă din concepție'] }],
      ['.bp-band p', {
        nl: 'Ontdek het volledige Aquaran-assortiment in de Baril Coatings-catalogus — met datasheets en veiligheidsbladen — of praat met onze coatingexperts.',
        pl: 'Poznaj pełną gamę Aquaran w katalogu Baril Coatings — z kartami technicznymi i charakterystykami — lub porozmawiaj z naszymi ekspertami.',
        ro: 'Explorează întreaga gamă Aquaran în catalogul Baril Coatings — cu fișe tehnice și de securitate — sau discută cu experții noștri.' }],
      ['.foot-claim', {
        nl: '<span class="bp-accent">Aquaran</span> — watergedragen beschermende coatings.',
        pl: '<span class="bp-accent">Aquaran</span> — wodorozcieńczalne powłoki ochronne.',
        ro: '<span class="bp-accent">Aquaran</span> — acoperiri de protecție pe bază de apă.' }]
    ],

    dualcure: [
      ['.bp-tag', { nl: 'Dual-cure-technologie · deels biobased', pl: 'Technologia podwójnego utwardzania · częściowo biobazowa', ro: 'Tehnologie cu întărire dublă · parțial biobazată' }],
      ['.bp-sub', {
        nl: 'Een gepatenteerde dual-cure-technologie — de chemische 2K-reactie <strong>plus</strong> een vocht-gedreven uitharding, verweven tot één dichte moleculaire structuur. Levenslange bescherming, in één dag aangebracht.',
        pl: 'Opatentowana technologia podwójnego utwardzania — reakcja chemiczna 2K <strong>oraz</strong> utwardzanie wilgocią, splecione w jedną gęstą sieć molekularną. Ochrona na całe życie, nakładana w jeden dzień.',
        ro: 'O tehnologie patentată cu întărire dublă — reacția chimică 2K <strong>plus</strong> o întărire prin umiditate, împletite într-o singură rețea moleculară densă. Protecție pe toată durata de viață, aplicată într-o singură zi.' }],
      ['.bp-quick span', {
        nl: ['<b>2K + vocht</b>-uitharding','Tot <b>60% dunner</b>','<b>2 lagen / 1 dag</b>','<b>NORSOK</b>-gecertificeerd'],
        pl: ['Utwardzanie <b>2K + wilgoć</b>','Do <b>60% cieńsze</b>','<b>2 warstwy / 1 dzień</b>','Certyfikat <b>NORSOK</b>'],
        ro: ['Întărire <b>2K + umiditate</b>','Cu până la <b>60% mai subțire</b>','<b>2 straturi / 1 zi</b>','Certificat <b>NORSOK</b>'] }],
      ['.eyebrow', { nl: ['Waarom DualCure','De chemie'], pl: ['Dlaczego DualCure','Chemia'], ro: ['De ce DualCure','Chimia'] }],
      ['.bp-quote', {
        nl: 'De meeste coatings harden op één manier uit. DualCure hardt op twee manieren tegelijk uit — de 2K-chemie van componenten A en B, <em>plus</em> een vochtuitharding uit de lucht. Twee netwerken verweven tot één uitzonderlijk dichte structuur: sterkere bindingen, meer flexibiliteit, veel minder coating.',
        pl: 'Większość powłok utwardza się w jeden sposób. DualCure utwardza się na dwa sposoby naraz — chemia 2K składników A i B <em>oraz</em> utwardzanie wilgocią z powietrza. Dwie sieci splatają się w jedną wyjątkowo gęstą strukturę: mocniejsze wiązania, większa elastyczność, znacznie mniej powłoki.',
        ro: 'Majoritatea acoperirilor se întăresc într-un singur mod. DualCure se întărește în două moduri simultan — chimia 2K a componentelor A și B <em>plus</em> o întărire prin umiditatea din aer. Două rețele se împletesc într-o structură excepțional de densă: legături mai strânse, mai multă flexibilitate, mult mai puțină acoperire.' }],
      ['.bp-card b', {
        nl: ['Twee uithardingen, één netwerk','Tot 60% dunner','Twee lagen in één dag','25 jaar+ in C5','NORSOK-gecertificeerd','Lagere CO₂ &amp; VOS'],
        pl: ['Dwa utwardzania, jedna sieć','Do 60% cieńsze','Dwie warstwy w jeden dzień','25 lat+ w C5','Certyfikat NORSOK','Niższe CO₂ i LZO'],
        ro: ['Două întăriri, o rețea','Cu până la 60% mai subțire','Două straturi într-o zi','25 ani+ în C5','Certificat NORSOK','CO₂ și COV mai reduse'] }],
      ['.bp-card span', {
        nl: ['2K-chemie en vochtuitharding verweven tot één uitzonderlijk dichte structuur.','Dunne-laag-technologie beschermt met een fractie van de conventionele laagdikte.','Ultrasnelle doorharding: twee lagen in één werkdag.','Minimaal 25 jaar bescherming in C5-omgevingen bij 200 μm totale dikte.','Gecertificeerde systemen voor de zwaarste marine- en offshore-omstandigheden.','Minder coating, geen extra warmte nodig, deels biobased — een lichtere voetafdruk.'],
        pl: ['Chemia 2K i utwardzanie wilgocią splatają się w jedną, wyjątkowo gęstą sieć.','Technologia cienkowarstwowa chroni przy ułamku konwencjonalnej grubości.','Bardzo szybkie utwardzanie pozwala nałożyć dwie warstwy w jeden dzień roboczy.','Minimum 25 lat ochrony w środowiskach C5 przy łącznej grubości 200 μm.','Certyfikowane systemy do najcięższych warunków morskich i offshore.','Mniej powłoki, bez dodatkowego ciepła, częściowo biobazowa — mniejszy ślad.'],
        ro: ['Chimia 2K și întărirea prin umiditate se împletesc într-o singură rețea, excepțional de densă.','Tehnologia în strat subțire protejează cu o fracțiune din grosimea convențională.','Întărirea ultrarapidă permite aplicarea a două straturi într-o singură zi de lucru.','Minimum 25 de ani de protecție în medii C5 la 200 μm grosime totală.','Sisteme certificate pentru cele mai dure condiții maritime și offshore.','Mai puțină acoperire, fără căldură suplimentară, parțial biobazată — o amprentă mai mică.'] }],
      ['h2', {
        nl: ['Eén netwerk,<br><span class="bp-accent">dubbel uitgehard</span>','Kies DualCure'],
        pl: ['Jedna sieć,<br><span class="bp-accent">podwójnie utwardzona</span>','Wybierz DualCure'],
        ro: ['O singură rețea,<br><span class="bp-accent">întărită dublu</span>','Specifică DualCure'] }],
      ['.bp-list span', {
        nl: ['Koud uithardend: hardt uit door een vochtreactie uit de lucht — geen extra warmte of energie.','Dichte moleculaire structuur voor sterke hechting en blijvende flexibiliteit.','Levenslange bescherming over de volledige economische levensduur van het object.'],
        pl: ['Utwardzanie na zimno: utwardza się dzięki reakcji z wilgocią z powietrza — bez dodatkowego ciepła i energii.','Gęsta struktura molekularna dla mocnej przyczepności i trwałej elastyczności.','Ochrona na całe życie przez pełny okres eksploatacji obiektu.'],
        ro: ['Întărire la rece: se întărește printr-o reacție cu umiditatea din aer — fără căldură sau energie suplimentară.','Structură moleculară densă pentru aderență puternică și flexibilitate durabilă.','Protecție pe toată durata de viață economică a activului.'] }],
      ['.bp-stat .l', {
        nl: ['Dunner dan conventionele coatings','Twee lagen in één dag aangebracht','Minimale bescherming in C5','Gecertificeerde offshore-systemen'],
        pl: ['Cieńsze niż konwencjonalne powłoki','Dwie warstwy nałożone w jeden dzień','Minimalna ochrona w C5','Certyfikowane systemy offshore'],
        ro: ['Mai subțire decât acoperirile convenționale','Două straturi aplicate într-o zi','Protecție minimă în C5','Sisteme offshore certificate'] }],
      ['.bp-band p', {
        nl: 'Ontdek het DualCure-assortiment in de Baril Coatings-catalogus — met datasheets en veiligheidsbladen — of bespreek je specificatie met onze coatingexperts.',
        pl: 'Poznaj gamę DualCure w katalogu Baril Coatings — z kartami technicznymi i charakterystykami — lub omów swoją specyfikację z naszymi ekspertami.',
        ro: 'Explorează gama DualCure în catalogul Baril Coatings — cu fișe tehnice și de securitate — sau discută specificația ta cu experții noștri.' }],
      ['.foot-claim', {
        nl: '<span class="bp-accent">DualCure</span> — dual-cure beschermtechnologie.',
        pl: '<span class="bp-accent">DualCure</span> — technologia ochronna podwójnego utwardzania.',
        ro: '<span class="bp-accent">DualCure</span> — tehnologie de protecție cu întărire dublă.' }]
    ],

    steelkote: [
      ['.bp-tag', { nl: 'Heavy-duty beschermende coatings', pl: 'Wytrzymałe powłoki ochronne', ro: 'Acoperiri de protecție de mare rezistență' }],
      ['.bp-sub', {
        nl: 'Drie decennia bewezen staalbescherming — epoxyprimers en urethaan toplagen ontwikkeld voor <strong>extreme corrosiebestendigheid</strong>, nu op weg naar volledig hernieuwbaar.',
        pl: 'Trzy dekady sprawdzonej ochrony stali — podkłady epoksydowe i nawierzchnie uretanowe zaprojektowane dla <strong>ekstremalnej odporności na korozję</strong>, teraz na drodze ku pełnej odnawialności.',
        ro: 'Trei decenii de protecție dovedită a oțelului — grunduri epoxidice și straturi de finisare uretanice concepute pentru <strong>rezistență extremă la coroziune</strong>, acum pe drumul către surse complet regenerabile.' }],
      ['.bp-quick span', {
        nl: ['<b>ISO 12944</b> alle klassen','<b>NORSOK</b>-gecertificeerd','Tot <b>25 jr</b> intervallen','<b>40% dunnere</b> lagen'],
        pl: ['<b>ISO 12944</b> wszystkie klasy','Certyfikat <b>NORSOK</b>','Do <b>25 lat</b> interwałów','<b>40% cieńsze</b> warstwy'],
        ro: ['<b>ISO 12944</b> toate clasele','Certificat <b>NORSOK</b>','Intervale de până la <b>25 ani</b>','Straturi <b>cu 40% mai subțiri</b>'] }],
      ['.eyebrow', { nl: ['Waarom SteelKote','Gebouwd om te blijven'], pl: ['Dlaczego SteelKote','Stworzone, by trwać'], ro: ['De ce SteelKote','Construit să dureze'] }],
      ['.bp-quote', {
        nl: 'Al <em>30 jaar</em> bewezen in de zwaarste atmosferen — en nog steeds in ontwikkeling. SteelKote brengt extreme corrosiebescherming met lange intervallen naar staal en infrastructuur, in dunnere, slimmere lagen, op weg naar 100% hernieuwbaar.',
        pl: 'Sprawdzone w najtrudniejszych atmosferach od <em>30 lat</em> — i wciąż się rozwija. SteelKote zapewnia ekstremalną, długointerwałową ochronę antykorozyjną stali i infrastruktury, w cieńszych, inteligentniejszych warstwach, na drodze ku 100% odnawialności.',
        ro: 'Dovedit în cele mai dure atmosfere de <em>30 de ani</em> — și încă în evoluție. SteelKote aduce o protecție anticorozivă extremă, cu intervale lungi, pentru oțel și infrastructură, în straturi mai subțiri și mai inteligente, pe drumul către 100% regenerabil.' }],
      ['.bp-card b', {
        nl: ['Extreme corrosiebestendigheid','Tot 25-jarige intervallen','40% dunnere lagen','Water- &amp; onderdompelingsbestendig','NORSOK-gecertificeerd','Op weg naar 100% hernieuwbaar'],
        pl: ['Ekstremalna odporność na korozję','Interwały do 25 lat','Warstwy cieńsze o 40%','Odporne na wodę i zanurzenie','Certyfikat NORSOK','Ku 100% odnawialności'],
        ro: ['Rezistență extremă la coroziune','Intervale de până la 25 de ani','Straturi cu 40% mai subțiri','Rezistent la apă și imersiune','Certificat NORSOK','Către 100% regenerabil'] }],
      ['.bp-card span', {
        nl: ['ISO 12944-prestaties in alle atmosferische corrosiviteitsklassen.','Lange beschermingsperiodes brengen groot-onderhoud — en kosten — tot een minimum.','Geavanceerde dunne-laag-technologie beschermt met veel minder coating per m².','Een dichte, waterdichte structuur, geschikt voor zoet, zout en brak onderdompelen.','Gecertificeerde systemen voor zwaar weer, marine en offshore.','Decennia conventionele kennis, nu opnieuw geformuleerd op een hernieuwbaar pad.'],
        pl: ['Wydajność ISO 12944 we wszystkich klasach korozyjności atmosferycznej.','Długie okresy ochrony minimalizują cykle dużych remontów i koszty.','Zaawansowana technologia cienkowarstwowa chroni przy znacznie mniejszej ilości powłoki na m².','Gęsta, wodoszczelna struktura odpowiednia do zanurzenia w wodzie słodkiej, słonej i słonawej.','Certyfikowane systemy do trudnych warunków pogodowych, morskich i offshore.','Dekady konwencjonalnej wiedzy, teraz przeformułowane na odnawialnej drodze.'],
        ro: ['Performanță ISO 12944 în toate clasele de corozivitate atmosferică.','Perioadele lungi de protecție reduc la minimum ciclurile de mentenanță majoră și costurile.','Tehnologia avansată în strat subțire protejează cu mult mai puțină acoperire pe m².','O structură densă, etanșă, potrivită pentru imersiune în apă dulce, sărată și salmastră.','Sisteme certificate pentru vreme grea, medii maritime și offshore.','Decenii de know-how convențional, acum reformulate pe un drum regenerabil.'] }],
      ['h2', {
        nl: ['Bescherming die het <span class="bp-accent">langer volhoudt</span> dan het weer','Kies SteelKote'],
        pl: ['Ochrona, która <span class="bp-accent">przetrwa</span> pogodę','Wybierz SteelKote'],
        ro: ['Protecție care <span class="bp-accent">depășește</span> vremea','Specifică SteelKote'] }],
      ['.bp-list span', {
        nl: ['Epoxyprimers en urethaan toplagen, bewezen in de meest extreme atmosferen.','Blijvende flexibiliteit en een ondoordringbare, slijtvaste structuur.','Lagere kosten per m³ door hogere vaste stof en dunnere lagen.'],
        pl: ['Podkłady epoksydowe i nawierzchnie uretanowe sprawdzone w najbardziej ekstremalnych atmosferach.','Trwała elastyczność i nieprzenikliwa, odporna na ścieranie struktura.','Niższy koszt na m³ dzięki wyższej zawartości części stałych i cieńszym powłokom.'],
        ro: ['Grunduri epoxidice și straturi uretanice dovedite în cele mai extreme atmosfere.','Flexibilitate durabilă și o structură impenetrabilă, rezistentă la uzură.','Cost mai mic pe m³ prin conținut mai mare de substanțe solide și pelicule mai subțiri.'] }],
      ['.bp-stat .l', {
        nl: ['Bewezen beschermingservaring','Onderhoudsintervallen','Dunnere lagen','Alle corrosiviteitsklassen'],
        pl: ['Sprawdzonego doświadczenia w ochronie','Interwały konserwacji','Cieńsze warstwy','Wszystkie klasy korozyjności'],
        ro: ['De experiență dovedită în protecție','Intervale de mentenanță','Straturi mai subțiri','Toate clasele de corozivitate'] }],
      ['.bp-band p', {
        nl: 'Ontdek het SteelKote-assortiment in de Baril Coatings-catalogus — met datasheets en veiligheidsbladen — of bespreek je project met onze coatingexperts.',
        pl: 'Poznaj gamę SteelKote w katalogu Baril Coatings — z kartami technicznymi i charakterystykami — lub omów swój projekt z naszymi ekspertami.',
        ro: 'Explorează gama SteelKote în catalogul Baril Coatings — cu fișe tehnice și de securitate — sau discută proiectul tău cu experții noștri.' }],
      ['.foot-claim', {
        nl: '<span class="bp-accent">SteelKote</span> — heavy-duty beschermende coatings.',
        pl: '<span class="bp-accent">SteelKote</span> — wytrzymałe powłoki ochronne.',
        ro: '<span class="bp-accent">SteelKote</span> — acoperiri de protecție de mare rezistență.' }]
    ],

    bariline: [
      ['.bp-tag', { nl: 'Biobased alkyd beschermende coatings', pl: 'Biobazowe alkidowe powłoki ochronne', ro: 'Acoperiri de protecție alchidice biobazate' }],
      ['.bp-sub', {
        nl: 'Eencomponent biobased alkydcoatings — anticorrosieve bescherming in kleur voor staalconstructie. <strong>Eenvoudig aan te brengen, snel te verwerken, simpel te specificeren.</strong>',
        pl: 'Jednoskładnikowe biobazowe powłoki alkidowe — antykorozyjna ochrona w kolorze dla konstrukcji stalowych. <strong>Łatwe w aplikacji, szybkie w obróbce, proste w doborze.</strong>',
        ro: 'Acoperiri alchidice biobazate monocomponent — protecție anticorozivă în culoare pentru construcții din oțel. <strong>Ușor de aplicat, rapid de manipulat, simplu de specificat.</strong>' }],
      ['.bp-quick span', {
        nl: ['<b>1K</b> eencomponent','<b>Biobased</b> alkyd','<b>Direct-op-metaal</b>','<b>Snelle</b> verwerking'],
        pl: ['<b>1K</b> jednoskładnikowy','Alkid <b>biobazowy</b>','<b>Bezpośrednio na metal</b>','<b>Szybka</b> obróbka'],
        ro: ['<b>1K</b> monocomponent','Alchidic <b>biobazat</b>','<b>Direct pe metal</b>','Manipulare <b>rapidă</b>'] }],
      ['.eyebrow', { nl: ['Waarom Bariline','In de praktijk'], pl: ['Dlaczego Bariline','W praktyce'], ro: ['De ce Bariline','În practică'] }],
      ['.bp-quote', {
        nl: 'Niet elke klus heeft een tweecomponentensysteem nodig. Bariline houdt staalbescherming <em>simpel</em> — een eencomponent biobased alkyd die direct op metaal gaat, snel droogt en in kleur afwerkt.',
        pl: 'Nie każde zadanie wymaga systemu dwuskładnikowego. Bariline utrzymuje ochronę stali <em>prostą</em> — jednoskładnikowy biobazowy alkid, który nakłada się bezpośrednio na metal, szybko schnie i wykańcza w kolorze.',
        ro: 'Nu orice lucrare are nevoie de un sistem bicomponent. Bariline păstrează protecția oțelului <em>simplă</em> — un alchid biobazat monocomponent care se aplică direct pe metal, se usucă rapid și finisează în culoare.' }],
      ['.bp-card b', {
        nl: ['Eencomponent eenvoud','Biobased alkyd','Direct-op-metaal','Enkellaags optie','Snel drogen &amp; verwerken','Kleurafwerkingen'],
        pl: ['Jednoskładnikowa prostota','Biobazowy alkid','Bezpośrednio na metal','Opcja jednowarstwowa','Szybkie schnięcie i obróbka','Wykończenia kolorowe'],
        ro: ['Simplitate monocomponent','Alchid biobazat','Direct pe metal','Opțiune monostrat','Uscare și manipulare rapide','Finisaje în culoare'] }],
      ['.bp-card span', {
        nl: ['Geen mengen, geen potlife — een enkelpak-systeem dat eenvoudig aan te brengen en te bewaren is.','Alkydchemie op meer hernieuwbare grondstoffen — fossiel gehalte teruggebracht.','Gaat direct op gestraald staal — primer en afwerking in één in veel toepassingen.','Eén laag anticorrosieve bescherming, in kleur, voor staalconstructies en containers.','Snel droog en klaar voor verwerking — houdt bouwplanningen op schema.','Anticorrosieve prestaties met een afgewerkte kleur — van shopprimer tot toplaag.'],
        pl: ['Bez mieszania, bez czasu przydatności — system jednopojemnikowy, łatwy w aplikacji i przechowywaniu.','Chemia alkidowa oparta na bardziej odnawialnych surowcach — ograniczona zawartość kopalna.','Nakłada się bezpośrednio na śrutowaną stal — podkład i wykończenie w jednym w wielu zastosowaniach.','Jedna warstwa ochrony antykorozyjnej, w kolorze, dla konstrukcji stalowych i kontenerów.','Szybko schnie i jest gotowy do obróbki — utrzymuje harmonogramy budowy.','Wydajność antykorozyjna z gotowym kolorem — od podkładu warsztatowego po nawierzchnię.'],
        ro: ['Fără amestecare, fără timp de utilizare — un sistem monopachet, ușor de aplicat și depozitat.','Chimie alchidică bazată pe materii prime mai regenerabile — conținut fosil redus.','Se aplică direct pe oțelul sablat — grund și finisaj într-unul în multe aplicații.','Un strat de protecție anticorozivă, în culoare, pentru construcții din oțel și containere.','Se usucă repede și este gata de manipulat — menținând graficele de construcție.','Performanță anticorozivă cu o culoare finisată — de la grund de atelier la stratul final.'] }],
      ['h2', {
        nl: ['Eenvoudig aan te brengen,<br><span class="bp-accent">snel</span> klaar','Kies Bariline'],
        pl: ['Łatwy w aplikacji,<br><span class="bp-accent">szybki</span> w wykończeniu','Wybierz Bariline'],
        ro: ['Ușor de aplicat,<br><span class="bp-accent">rapid</span> de finisat','Specifică Bariline'] }],
      ['.bp-list span', {
        nl: ['Ideaal voor staalconstructies en containers in landelijke tot licht-industriële omgevingen.','Van kortdurende shopprimer tot langdurige bescherming, met het Bariline-primersysteem.','Een praktische, kostenefficiënte keuze waar snelheid en eenvoud het belangrijkst zijn.'],
        pl: ['Idealny do konstrukcji stalowych i kontenerów w środowiskach wiejskich i lekko przemysłowych.','Od krótkotrwałego podkładu warsztatowego po długoterminową ochronę, z systemem podkładu Bariline.','Praktyczny, opłacalny wybór tam, gdzie liczą się szybkość i prostota.'],
        ro: ['Ideal pentru construcții din oțel și containere în medii rurale până la ușor industriale.','De la grund de atelier pe termen scurt la protecție pe termen lung, cu sistemul de grund Bariline.','O alegere practică și economică acolo unde contează viteza și simplitatea.'] }],
      ['.bp-stat .l', {
        nl: ['Eencomponent, geen mengen','Biobased alkydchemie','Direct-op-metaal toepassing','Snel drogen &amp; verwerken'],
        pl: ['Jednoskładnikowy, bez mieszania','Biobazowa chemia alkidowa','Aplikacja bezpośrednio na metal','Szybkie schnięcie i obróbka'],
        ro: ['Monocomponent, fără amestecare','Chimie alchidică biobazată','Aplicare direct pe metal','Uscare și manipulare rapide'] }],
      ['.bp-band p', {
        nl: 'Ontdek het Bariline-assortiment in de Baril Coatings-catalogus — met datasheets en veiligheidsbladen — of praat met onze coatingexperts.',
        pl: 'Poznaj gamę Bariline w katalogu Baril Coatings — z kartami technicznymi i charakterystykami — lub porozmawiaj z naszymi ekspertami.',
        ro: 'Explorează gama Bariline în catalogul Baril Coatings — cu fișe tehnice și de securitate — sau discută cu experții noștri.' }],
      ['.foot-claim', {
        nl: '<span class="bp-accent">Bariline</span> — biobased alkyd beschermende coatings.',
        pl: '<span class="bp-accent">Bariline</span> — biobazowe alkidowe powłoki ochronne.',
        ro: '<span class="bp-accent">Bariline</span> — acoperiri de protecție alchidice biobazate.' }]
    ]
  };

  const brand = (document.body.dataset.brand || '').toLowerCase();
  const MAP = COMMON.concat(MAPS[brand] || []);

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('baril-coatings-lang') || 'en'; } catch (e) {}
  if (!['en', 'nl', 'pl', 'ro'].includes(lang)) lang = 'en';

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
    if (flagBox) [...flagBox.children].forEach(b => b.classList.toggle('active', b.dataset.lang === l));
    try { localStorage.setItem('baril-coatings-lang', l); } catch (e) {}
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
