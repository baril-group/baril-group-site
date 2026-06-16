/* Language switch for the Baril Group page. English is authored (captured from
   the DOM); NL / PL / RO live in the MAP as [selector, {nl, pl, ro}]. A value is
   a string (first match) or an array (one per matched element; null = keep).
   PL/RO are machine translations — refine as needed. */
(() => {
  'use strict';
  const MAP = [
    ['.navlinks a', {
      nl: ['Missie', 'Ons verhaal', 'Impact', 'Merken', 'In de praktijk', 'Hoe we vernieuwen', 'Contact'],
      pl: ['Misja', 'Nasza historia', 'Wpływ', 'Marki', 'W praktyce', 'Jak odnawiamy', 'Kontakt'],
      ro: ['Misiune', 'Povestea noastră', 'Impact', 'Mărci', 'În practică', 'Cum reînnoim', 'Contact'] }],
    ['header .eyebrow', {
      nl: "Baril Group — 's-Hertogenbosch, NL · Productie EU / VS / PL",
      pl: "Baril Group — 's-Hertogenbosch, NL · Produkcja UE / USA / PL",
      ro: "Baril Group — 's-Hertogenbosch, NL · Producție UE / SUA / PL" }],
    ['header h1', {
      nl: 'Verf voor een<br><span class="paint">hernieuwbare</span><br>toekomst',
      pl: 'Farba dla<br><span class="paint">odnawialnej</span><br>przyszłości',
      ro: 'Vopsea pentru un<br><span class="paint">viitor</span><br>regenerabil' }],
    ['.hero-sub', {
      nl: 'Eén groep. Drie merken. Eén missie: <strong>meer beschermen, met minder</strong> — de verf- en coatingsindustrie vernieuwen vanaf de chemie.',
      pl: 'Jedna grupa. Trzy marki. Jedna misja: <strong>chronić więcej, używając mniej</strong> — odnawiamy branżę farb i powłok od poziomu chemii.',
      ro: 'Un grup. Trei mărci. O misiune: <strong>protejăm mai mult, cu mai puțin</strong> — reînnoim industria vopselelor și acoperirilor de la nivelul chimiei.' }],
    ['.hero-cta .btn-solid', { nl: 'Ontdek de merken', pl: 'Poznaj marki', ro: 'Descoperă mărcile' }],
    ['.hero-cta .btn-ghost', { nl: 'Onze missie', pl: 'Nasza misja', ro: 'Misiunea noastră' }],
    ['.hero-foot span:first-child', {
      nl: 'Industriële coatings · Biobased vakverf · Plantaardige verf voor thuis',
      pl: 'Powłoki przemysłowe · Biobazowa farba profesjonalna · Roślinna farba do domu',
      ro: 'Acoperiri industriale · Vopsea profesională biobazată · Vopsea vegetală pentru casă' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează' }],
    ['#mission .eyebrow', { nl: 'Missie', pl: 'Misja', ro: 'Misiune' }],
    ['.mission-quote', {
      nl: 'Wij vinden dat niemand hoeft te kiezen tussen <em>duurzaam, prijs en kwaliteit</em>. Daarom zetten we elke productlijn, stap voor stap, om naar hernieuwbare grondstoffen — en bewijzen we onderweg dat dunnere, schonere coatings langer beschermen.',
      pl: 'Uważamy, że nikt nie powinien wybierać między <em>zrównoważonością, ceną a jakością</em>. Dlatego przestawiamy każdą linię produktów, krok po kroku, na surowce odnawialne — udowadniając po drodze, że cieńsze, czystsze powłoki chronią dłużej.',
      ro: 'Credem că nimeni nu ar trebui să aleagă între <em>sustenabilitate, preț și calitate</em>. De aceea transformăm fiecare linie de produse, pas cu pas, către materii prime regenerabile — demonstrând pe parcurs că acoperirile mai subțiri și mai curate protejează mai mult.' }],
    ['#mission .mm b', {
      nl: ['Langer beschermen', 'Minder vervuilen', 'Bewijzen'],
      pl: ['Dłuższa ochrona', 'Mniej zanieczyszczeń', 'Udowadniamy'],
      ro: ['Protecție mai lungă', 'Mai puțină poluare', 'Dovedim'] }],
    ['#mission .mm span', {
      nl: [
        'Dunne-laag-technologie verlengt de levensduur van materialen met aanzienlijk minder verf per vierkante meter.',
        'Plantaardige grondstoffen en minder gevaarlijke stoffen, ontworpen op formuleringsniveau.',
        'Gecertificeerd kwaliteits-, milieu- en veiligheidsmanagement — en productcertificeringen per merk.'],
      pl: [
        'Technologia cienkowarstwowa wydłuża żywotność materiałów przy znacznie mniejszej ilości farby na metr kwadratowy.',
        'Surowce roślinne i mniej substancji niebezpiecznych, zaprojektowane na poziomie receptury.',
        'Certyfikowane zarządzanie jakością, środowiskiem i bezpieczeństwem — oraz certyfikaty produktowe dla każdej marki.'],
      ro: [
        'Tehnologia în strat subțire prelungește durata de viață a materialelor cu mult mai puțină vopsea pe metru pătrat.',
        'Materii prime vegetale și mai puține substanțe periculoase, concepute la nivel de rețetă.',
        'Management certificat al calității, mediului și siguranței — plus certificări de produs pentru fiecare marcă.'] }],
    ['.film-cap .wrap-cap', {
      nl: 'De film — To sustain our future, rich in colour · <a href="https://youtu.be/CYG3N-b-Dzk" target="_blank" rel="noopener">bekijk met geluid ↗</a>',
      pl: 'Film — To sustain our future, rich in colour · <a href="https://youtu.be/CYG3N-b-Dzk" target="_blank" rel="noopener">obejrzyj z dźwiękiem ↗</a>',
      ro: 'Filmul — To sustain our future, rich in colour · <a href="https://youtu.be/CYG3N-b-Dzk" target="_blank" rel="noopener">vizionează cu sunet ↗</a>' }],
    ['#story .eyebrow', { nl: 'Ons verhaal · Sinds 1982', pl: 'Nasza historia · Od 1982', ro: 'Povestea noastră · Din 1982' }],
    ['#story h2', { nl: 'Vanuit een schuurtje<br>in Moerkapelle', pl: 'Z szopy<br>w Moerkapelle', ro: 'Dintr-o magazie<br>din Moerkapelle' }],
    ['#story .sec-head p:last-child', {
      nl: 'Baril begon in 1982 als kleine verfmaker in Moerkapelle — een handvol betrokken mensen vanuit een schuurtje. Vier decennia later is het een internationaal opererende coatingsproducent met fabrieken in Nederland, de Verenigde Staten en Polen, nog altijd geleid door de familie Duijghuisen. De constante: de durf om andere keuzes te maken, met maatschappelijk verantwoord ondernemen als kern.',
      pl: 'Baril zaczął w 1982 roku jako mały wytwórca farb w Moerkapelle — garstka zaangażowanych ludzi w szopie. Cztery dekady później to międzynarodowy producent powłok z zakładami w Holandii, USA i Polsce, wciąż prowadzony przez rodzinę Duijghuisen. Stała wartość: odwaga, by dokonywać innych wyborów, ze społeczną odpowiedzialnością biznesu jako rdzeniem.',
      ro: 'Baril a început în 1982 ca un mic producător de vopsea în Moerkapelle — un grup restrâns de oameni dedicați, într-o magazie. Patru decenii mai târziu este un producător internațional de acoperiri, cu fabrici în Țările de Jos, SUA și Polonia, condus în continuare de familia Duijghuisen. Constanta: curajul de a face alegeri diferite, cu responsabilitatea socială în centru.' }],
    ['.story-drawing figcaption', { nl: 'De oorspronkelijke fabriek — de begindagen', pl: 'Pierwotna fabryka — początki', ro: 'Fabrica originală — primii ani' }],
    ['.story-team figcaption', { nl: 'Ons grootste kapitaal — een betrokken, gedreven team', pl: 'Nasz największy kapitał — zaangażowany, zmotywowany zespół', ro: 'Cel mai mare capital al nostru — o echipă dedicată și motivată' }],
    ['.story-col h3', {
      nl: ['Familiebedrijf, uit overtuiging', 'Wereldspeler, dicht bij huis'],
      pl: ['Firma rodzinna, z przekonania', 'Gracz światowy, blisko domu'],
      ro: ['Afacere de familie, din convingere', 'Jucător global, aproape de casă'] }],
    ['.story-col p', {
      nl: [
        'De familie Duijghuisen durft andere keuzes te maken — en waar het financieel verantwoord is, kiezen we voor duurzaam: schonere fabrieken, veilige werkplekken, een elektrisch en hybride wagenpark. Ons grootste kapitaal is een betrokken, gedreven team — toegankelijk, eerlijk en betrokken.',
        'Van één schuurtje naar productie in Nederland, de VS en Polen — wereldwijd uitgedragen door lokale distributeurs in Europa en Noord-Amerika. We helpen klanten hun objecten duurzaam te beschermen én hun global footprint te verkleinen.'],
      pl: [
        'Rodzina Duijghuisen ma odwagę dokonywać innych wyborów — a tam, gdzie jest to finansowo uzasadnione, wybiera zrównoważoność: czystsze fabryki, bezpieczniejsze miejsca pracy, elektryczna i hybrydowa flota. Naszym największym kapitałem jest zaangażowany, zmotywowany zespół — dostępny, uczciwy i zaangażowany.',
        'Od jednej szopy do produkcji w Holandii, USA i Polsce — niesiona na cały świat przez lokalnych dystrybutorów w Europie i Ameryce Północnej. Pomagamy klientom trwale chronić ich obiekty, jednocześnie zmniejszając ich globalny ślad.'],
      ro: [
        'Familia Duijghuisen are curajul de a face alegeri diferite — iar acolo unde este justificat financiar, alege sustenabilitatea: fabrici mai curate, locuri de muncă mai sigure, o flotă electrică și hibridă. Cel mai mare capital al nostru este o echipă dedicată și motivată — accesibilă, onestă și implicată.',
        'De la o singură magazie la producție în Țările de Jos, SUA și Polonia — dusă în întreaga lume de distribuitori locali din Europa și America de Nord. Ne ajutăm clienții să-și protejeze durabil obiectele, reducându-le în același timp amprenta globală.'] }],
    ['.timeline li span', {
      nl: [
        'Opgericht op 12 november in Moerkapelle', "Verhuizing naar nieuwbouw in 's-Hertogenbosch", 'Management buy-out',
        'Oprichting Baril Coatings Polska', 'Oprichting Baril Coatings USA · start CO₂-footprintmonitoring',
        'Nederlands patent voor DCC- (DualCure-)technologie', 'Biobased grondstoffen als kernwaarde aangenomen',
        'Introductie biobased schilderverven · overname door Geert Duijghuisen', 'DCC gepatenteerd in de EU, VS en Canada · Best Managed Company',
        "Zonnedaken in Etten-Leur en 's-Hertogenbosch", 'Start Baril Academy', 'Wagenpark volledig elektrisch · plantaardige consumentenmerken in eigen beheer',
        'Start van de transitie naar 100% hernieuwbare grondstoffen', '802 BIO & 803 BIO — de eerste biobased epoxycoatings van industriële kwaliteit',
        'Winnaar Brabantse Innovatie Award', 'B Corp-gecertificeerd — een van de eerste protective-coatingsbedrijven ter wereld · KVK Circulaire Innovatie Award (Chemie)'],
      pl: [
        'Założona 12 listopada w Moerkapelle', "Przeprowadzka do nowego zakładu w 's-Hertogenbosch", 'Wykup menedżerski',
        'Założenie Baril Coatings Polska', 'Założenie Baril Coatings USA · start monitoringu śladu CO₂',
        'Holenderski patent na technologię DCC (DualCure)', 'Surowce biobazowe przyjęte jako wartość podstawowa',
        'Wprowadzenie biobazowych farb malarskich · przejęcie przez Geerta Duijghuisena', 'DCC opatentowane w UE, USA i Kanadzie · Best Managed Company',
        "Dachy słoneczne w Etten-Leur i 's-Hertogenbosch", 'Start Baril Academy', 'Flota w pełni elektryczna · roślinne marki konsumenckie przejęte na własność',
        'Start transformacji w kierunku 100% surowców odnawialnych', '802 BIO i 803 BIO — pierwsze biobazowe powłoki epoksydowe o jakości przemysłowej',
        'Zwycięzca Brabant Innovation Award', 'Certyfikat B Corp — jeden z pierwszych producentów powłok ochronnych na świecie · KVK Circular Innovation Award (chemia)'],
      ro: [
        'Înființată pe 12 noiembrie în Moerkapelle', "Mutare într-o clădire nouă în 's-Hertogenbosch", 'Preluare prin management (MBO)',
        'Înființarea Baril Coatings Polska', 'Înființarea Baril Coatings USA · începe monitorizarea amprentei CO₂',
        'Brevet olandez pentru tehnologia DCC (DualCure)', 'Materiile prime biobazate adoptate ca valoare centrală',
        'Lansarea vopselelor biobazate · preluare de către Geert Duijghuisen', 'DCC brevetată în UE, SUA și Canada · Best Managed Company',
        "Acoperișuri solare în Etten-Leur și 's-Hertogenbosch", 'Lansarea Baril Academy', 'Flotă complet electrică · mărci de consum vegetale aduse intern',
        'Începutul tranziției către 100% materii prime regenerabile', '802 BIO și 803 BIO — primele acoperiri epoxidice biobazate de calitate industrială',
        'Câștigător, Brabant Innovation Award', 'Certificat B Corp — printre primii producători de acoperiri de protecție din lume · KVK Circular Innovation Award (Chimie)'] }],
    ['.vm-k', { nl: ['Missie', 'Visie', 'Hoe'], pl: ['Misja', 'Wizja', 'Jak'], ro: ['Misiune', 'Viziune', 'Cum'] }],
    ['.vm p:not(.vm-k)', {
      nl: [
        'Duurzame coatingoplossingen bieden aan klanten en stakeholders — op weg naar het groenste verfbedrijf van Nederland.',
        "Een 'one-planet'-gedachtegoed, verankerd in ons DNA: wat we erin stoppen, willen we er ook weer uithalen. Elke productlijn gaat over naar biobased grondstoffen — 100% herwinbaar is het doel.",
        'Dunne-laag-technologie, biobased en watergedragen chemie, emissiearme fabrieken en actief werk aan de UN Sustainable Development Goals — bewezen in projecten als Bright Coatings.'],
      pl: [
        'Oferować zrównoważone rozwiązania powłokowe klientom i interesariuszom — w drodze do bycia najbardziej zieloną firmą farbiarską w Holandii.',
        "Filozofia 'jednej planety', zakorzeniona w naszym DNA: co w to wkładamy, chcemy też odzyskać. Każda linia produktów przechodzi na surowce biobazowe — celem jest 100% odzysku.",
        'Technologia cienkowarstwowa, chemia biobazowa i wodorozcieńczalna, niskoemisyjne fabryki oraz aktywna praca nad Celami Zrównoważonego Rozwoju ONZ — sprawdzone w projektach takich jak Bright Coatings.'],
      ro: [
        'Să oferim soluții de acoperire durabile clienților și partenerilor — pe drumul de a deveni cea mai verde companie de vopsele din Țările de Jos.',
        "O filozofie 'o singură planetă', înrădăcinată în ADN-ul nostru: ce punem înăuntru vrem să și recuperăm. Fiecare linie de produse trece la materii prime biobazate — 100% recuperabil este obiectivul.",
        'Tehnologie în strat subțire, chimie biobazată și pe bază de apă, fabrici cu emisii reduse și implicare activă în Obiectivele ONU de Dezvoltare Durabilă — dovedite în proiecte precum Bright Coatings.'] }],
    ['#bcorp .eyebrow', { nl: 'B Corp-gecertificeerd · 2025', pl: 'Certyfikat B Corp · 2025', ro: 'Certificat B Corp · 2025' }],
    ['#bcorp h2', {
      nl: "Een van 's werelds eerste<br>B Corp-protective-coatingsmakers",
      pl: 'Jeden z pierwszych na świecie<br>producentów powłok ochronnych B Corp',
      ro: 'Printre primii din lume<br>producători de acoperiri de protecție B Corp' }],
    ['#bcorp .bc-desc', {
      nl: 'In 2025 werd Baril een Certified B Corporation — een van de eerste protective-coatingsbedrijven ter wereld die voldoet aan de geverifieerde B Corp-normen voor sociale en milieuprestaties, transparantie en verantwoording.',
      pl: 'W 2025 roku Baril został Certyfikowaną B Corporation — jednym z pierwszych producentów powłok ochronnych na świecie spełniającym zweryfikowane standardy B Corp w zakresie wyników społecznych i środowiskowych, transparentności i odpowiedzialności.',
      ro: 'În 2025, Baril a devenit o Corporație B Certificată — unul dintre primii producători de acoperiri de protecție din lume care îndeplinește standardele verificate B Corp privind performanța socială și de mediu, transparența și responsabilitatea.' }],
    ['#certs .eyebrow', { nl: 'Certificeringen & doelen', pl: 'Certyfikaty i cele', ro: 'Certificări și obiective' }],
    ['#certs h2', { nl: 'Bewezen, gecertificeerd,<br>aanspreekbaar', pl: 'Sprawdzone, certyfikowane,<br>odpowiedzialne', ro: 'Dovedit, certificat,<br>responsabil' }],
    ['#certs .sec-head p:last-child', {
      nl: "Kwaliteits-, milieu- en veiligheidsmanagement, offshore-kwalificatie — en sinds 2025 de status van Certified B Corporation. Ondersteund door een actief programma op de duurzame-ontwikkelingsdoelen (SDG's) van de VN.",
      pl: 'Zarządzanie jakością, środowiskiem i bezpieczeństwem, kwalifikacja offshore — a od 2025 roku status Certyfikowanej B Corporation. Wsparte aktywnym programem na rzecz Celów Zrównoważonego Rozwoju ONZ.',
      ro: 'Management al calității, mediului și siguranței, calificare offshore — iar din 2025, statutul de Corporație B Certificată. Susținut de un program activ privind Obiectivele ONU de Dezvoltare Durabilă.' }],
    ['.sdg-title', {
      nl: "Actief op de duurzame-ontwikkelingsdoelen (SDG's) van de VN",
      pl: 'Aktywni w Celach Zrównoważonego Rozwoju ONZ',
      ro: 'Activi în Obiectivele ONU de Dezvoltare Durabilă' }],
    ['#bio .eyebrow', { nl: 'Hoofdstuk 01 · Circulaire grondstoffen', pl: 'Rozdział 01 · Surowce w obiegu zamkniętym', ro: 'Capitolul 01 · Materii prime circulare' }],
    ['#bio h2', { nl: 'Van vat<br>naar bio', pl: 'Z beczki<br>do bio', ro: 'De la baril<br>la bio' }],
    ['#bio .sec-head p:last-child', {
      nl: 'Elke liter verf is chemie: bindmiddel, oplosmiddel, pigment, additieven. Een eeuw lang was die chemie gebaseerd op ruwe olie — het bindmiddel, en vaak ook het oplosmiddel. Wij zetten beide om naar hernieuwbare en circulaire grondstoffen: van minder dan 10% in 2022 naar 55% vandaag, op weg naar 100% in 2030.',
      pl: 'Każdy litr farby to chemia: spoiwo, rozpuszczalnik, pigment, dodatki. Przez stulecie ta chemia opierała się na ropie naftowej — spoiwo, a często też rozpuszczalnik. Przestawiamy oba na surowce odnawialne i w obiegu zamkniętym: z mniej niż 10% w 2022 do 55% dziś, w drodze do 100% w 2030.',
      ro: 'Fiecare litru de vopsea este chimie: liant, solvent, pigment, aditivi. Timp de un secol, această chimie s-a bazat pe petrol — liantul și, adesea, și solventul. Le transformăm pe ambele către materii prime regenerabile și circulare: de la mai puțin de 10% în 2022 la 55% astăzi, către 100% în 2030.' }],
    ['#bio .ctr:nth-child(2) b', { nl: '100% in 2030', pl: '100% w 2030', ro: '100% în 2030' }],
    ['#bio .ctr:nth-child(3) b', { nl: 'Gelijk of beter', pl: 'Tak samo lub lepiej', ro: 'La fel sau mai bine' }],
    ['#bio .ctr .cl', {
      nl: ['Hernieuwbare & circulaire grondstoffen — vandaag', 'Groepsdoel — vanaf &lt;10% in 2022', 'Prestaties, bij lagere laagdikte'],
      pl: ['Surowce odnawialne i w obiegu zamkniętym — dziś', 'Cel grupy — z &lt;10% w 2022', 'Wydajność, przy niższej grubości powłoki'],
      ro: ['Materii prime regenerabile și circulare — astăzi', 'Obiectivul grupului — de la &lt;10% în 2022', 'Performanță, la o grosime mai mică'] }],
    ['#globe .eyebrow', { nl: 'Hoofdstuk 02 · Een wat-als-scenario', pl: 'Rozdział 02 · Scenariusz „co gdyby”', ro: 'Capitolul 02 · Un scenariu „ce-ar fi dacă”' }],
    ['#globe h2', { nl: 'Als de verf van de wereld<br>met ons meeging', pl: 'Gdyby farba świata<br>poszła z nami', ro: 'Dacă vopseaua lumii<br>ar merge cu noi' }],
    ['#globe .sec-head p:last-child', {
      nl: 'De wereld produceert ≈ 50+ miljoen ton verf en coatings per jaar — nog altijd overwegend fossiele chemie. Dit verandert er van richting wanneer dat volume overgaat op hernieuwbare grondstoffen en dunne-laag-applicatie, zoals wij dat doen.',
      pl: 'Świat produkuje ≈ 50+ milionów ton farb i powłok rocznie — wciąż w przeważającej mierze chemia kopalna. Oto co zmienia kierunek, gdy ta ilość przechodzi na surowce odnawialne i aplikację cienkowarstwową, tak jak robimy to my.',
      ro: 'Lumea produce ≈ 50+ milioane de tone de vopsele și acoperiri pe an — încă majoritar chimie fosilă. Iată ce își schimbă direcția când acel volum trece la materii prime regenerabile și aplicare în strat subțire, așa cum facem noi.' }],
    ['.fr-slider span', { nl: ['Fossiel', null, 'Hernieuwbaar'], pl: ['Kopalne', null, 'Odnawialne'], ro: ['Fosil', null, 'Regenerabil'] }],
    ['.dial b', { nl: ['Grondstof', 'CO₂-richting', 'Materiaallevensduur'], pl: ['Surowiec', 'Kierunek CO₂', 'Żywotność materiału'], ro: ['Materie primă', 'Direcția CO₂', 'Durata de viață a materialului'] }],
    ['.dial b + span', {
      nl: ['Van ruwe olie naar planten & reststromen', 'Van uitstoten naar vastleggen', 'Dunne lagen: meer m² beschermd per liter, minder overschilderen'],
      pl: ['Z ropy naftowej do roślin i strumieni odpadowych', 'Z emitowania do wiązania', 'Cienkie warstwy: więcej m² chronionych na litr, mniej przemalowań'],
      ro: ['De la petrol la plante și fluxuri reziduale', 'De la emitere la captare', 'Straturi subțiri: mai mulți m² protejați pe litru, mai puține revopsiri'] }],
    ['.pool-side .scenario-note', {
      nl: 'Illustratief scenario op basis van Barils producttransitie. Wereldvolume: marktramingen 2022–2024, zie bronnen.',
      pl: 'Scenariusz ilustracyjny oparty na transformacji produktów Baril. Wolumen światowy: szacunki rynkowe 2022–2024, zob. źródła.',
      ro: 'Scenariu ilustrativ bazat pe tranziția produselor Baril. Volum global: estimări de piață 2022–2024, vezi sursele.' }],
    ['#safety .eyebrow', { nl: 'Hoofdstuk 03 · Mens & veiligheid', pl: 'Rozdział 03 · Człowiek i bezpieczeństwo', ro: 'Capitolul 03 · Om și siguranță' }],
    ['#safety h2', { nl: 'Verf die de schilder<br>niet zijn gezondheid kost', pl: 'Farba, która nie kosztuje<br>malarza zdrowia', ro: 'Vopsea care nu costă<br>zugravul sănătatea' }],
    ['#safety .sec-head p:last-child', {
      nl: 'In Nederland had chronische blootstelling aan oplosmiddelen een eigen naam: <em>schildersziekte</em> (CSE/OPS). Onomkeerbare schade aan het zenuwstelsel, erkend als beroepsziekte. Toen herformuleerde de industrie — watergedragen, laag-VOS — en stortten de aantallen in. Het bewijs dat chemie die in de fabriek wordt gekozen, mensen op de steiger beschermt. Wij trekken dat verder dan het blik: actuele veiligheidsinformatie, getrainde applicateurs en persoonlijk veiligheidsadvies horen bij de verf.',
      pl: 'W Holandii przewlekłe narażenie na rozpuszczalniki miało własną nazwę: <em>schildersziekte</em> — choroba malarzy (CSE/OPS). Nieodwracalne uszkodzenie układu nerwowego, uznane za chorobę zawodową. Potem branża zmieniła receptury — wodorozcieńczalne, niskie LZO — i liczby się załamały. Dowód, że chemia wybrana w fabryce chroni ludzi na rusztowaniu. Idziemy dalej niż puszka: aktualne informacje o bezpieczeństwie, przeszkoleni wykonawcy i doradztwo w zakresie ochrony osobistej są częścią farby.',
      ro: 'În Țările de Jos, expunerea cronică la solvenți avea un nume propriu: <em>schildersziekte</em> — boala zugravului (CSE/OPS). Daune ireversibile ale sistemului nervos, recunoscute ca boală profesională. Apoi industria a reformulat — pe bază de apă, COV redus — iar cifrele s-au prăbușit. Dovada că o chimie aleasă în fabrică protejează oamenii pe schelă. Mergem mai departe decât cutia: informații de siguranță actuale, aplicatori instruiți și consultanță de protecție personală vin odată cu vopseaua.' }],
    ['.tl-nodes li b', { nl: ['Jaren 70', '≈ 2000', '2004', '2014', 'Vandaag'], pl: ['Lata 70.', '≈ 2000', '2004', '2014', 'Dziś'], ro: ['Anii 70', '≈ 2000', '2004', '2014', 'Astăzi'] }],
    ['.tl-nodes li:nth-child(1) span', { nl: 'Het oplosmiddelentijdperk', pl: 'Era rozpuszczalników', ro: 'Era solvenților' }],
    ['.tl-nodes li:nth-child(3) span', { nl: 'EU-verfrichtlijn begrenst VOS-gehalte', pl: 'Dyrektywa UE ogranicza zawartość LZO', ro: 'Directiva UE limitează conținutul de COV' }],
    ['.tl-nodes li:nth-child(4) span', { nl: '&lt; 10 nieuwe gevallen / jr', pl: '&lt; 10 nowych przypadków / rok', ro: '&lt; 10 cazuri noi / an' }],
    ['.tl-nodes li:nth-child(5) span', { nl: 'Gevaar wegformuleren — emissiegetest, kindveilig gecertificeerd', pl: 'Wyeliminować zagrożenie w recepturze — testowane na emisje, certyfikowane jako bezpieczne dla dzieci', ro: 'Eliminarea pericolului din rețetă — testat la emisii, certificat sigur pentru copii' }],
    ['.safety-services .ss b', {
      nl: ['Altijd actuele veiligheidsinformatie', 'Training van applicateurs', 'Persoonlijk veiligheidsadvies'],
      pl: ['Zawsze aktualne informacje o bezpieczeństwie', 'Szkolenie wykonawców', 'Indywidualne doradztwo bezpieczeństwa'],
      ro: ['Informații de siguranță mereu actuale', 'Instruirea aplicatorilor', 'Consultanță personală de siguranță'] }],
    ['.safety-services .ss span', {
      nl: [
        'Actuele veiligheidsbladen en productveiligheidsdocumentatie — voor elk product, elke revisie.',
        'Praktijkgerichte training voor professionele applicateurs via Baril Academy: veilig werken, slim aanbrengen.',
        'Praktisch advies over persoonlijke bescherming — op de klus, op de steiger, aan de werkbank.'],
      pl: [
        'Aktualne karty charakterystyki i dokumentacja bezpieczeństwa produktu — dla każdego produktu, każdej rewizji.',
        'Praktyczne szkolenie dla profesjonalnych wykonawców przez Baril Academy: bezpieczna praca, sprawna aplikacja.',
        'Praktyczne porady dotyczące ochrony osobistej — na budowie, na rusztowaniu, przy stole warsztatowym.'],
      ro: [
        'Fișe de securitate și documentație de siguranță actuale — pentru fiecare produs, fiecare revizie.',
        'Instruire practică pentru aplicatori profesioniști prin Baril Academy: lucru sigur, aplicare inteligentă.',
        'Sfaturi practice privind protecția personală — pe șantier, pe schelă, la banc.'] }],
    ['#local .eyebrow', { nl: 'Hoofdstuk 04 · Korte ketens', pl: 'Rozdział 04 · Krótkie łańcuchy', ro: 'Capitolul 04 · Lanțuri scurte' }],
    ['#local h2', { nl: 'Dichtbij huis<br>gemaakt', pl: 'Wyprodukowane<br>blisko domu', ro: 'Fabricat<br>aproape de casă' }],
    ['#local .sec-head p:last-child', {
      nl: "Fossiele chemie reist de halve wereld over voordat ze in een verfblik zit. Plantaardige en reststroom-grondstoffen maken de keten kort: geteeld, verwerkt en toegepast in dezelfde regio. Wij produceren dicht bij onze markten — 's-Hertogenbosch, de Verenigde Staten, Polen — op eigen zonne- en windenergie, met een volledig elektrisch wagenpark en inclusief werkgeverschap als beleid, niet als project.",
      pl: "Chemia kopalna podróżuje przez pół świata, zanim trafi do puszki farby. Surowce roślinne i ze strumieni odpadowych skracają łańcuch: uprawiane, przetwarzane i stosowane w tym samym regionie. Produkujemy blisko naszych rynków — 's-Hertogenbosch, USA, Polska — na własnej energii słonecznej i wiatrowej, z w pełni elektryczną flotą i inkluzywnym zatrudnieniem jako polityką, nie projektem.",
      ro: "Chimia fosilă călătorește jumătate de lume înainte să ajungă într-o cutie de vopsea. Materiile prime vegetale și din fluxuri reziduale scurtează lanțul: cultivate, procesate și aplicate în aceeași regiune. Producem aproape de piețele noastre — 's-Hertogenbosch, SUA, Polonia — pe energie solară și eoliană proprie, cu o flotă complet electrică și angajare incluzivă ca politică, nu ca proiect." }],
    ['.cl-old', { nl: 'Lange keten — fossiel, intercontinentaal', pl: 'Długi łańcuch — kopalny, międzykontynentalny', ro: 'Lanț lung — fosil, intercontinental' }],
    ['.cl-new', { nl: 'Korte keten — regionale akkers & reststromen', pl: 'Krótki łańcuch — regionalne pola i strumienie odpadowe', ro: 'Lanț scurt — câmpuri regionale și fluxuri reziduale' }],
    ['.cc-old li', { nl: ['Ruwe olie', 'Raffinaderij', 'Chemische fabriek', 'Bindmiddel', 'Fabriek'], pl: ['Ropa naftowa', 'Rafineria', 'Zakład chemiczny', 'Spoiwo', 'Fabryka'], ro: ['Petrol', 'Rafinărie', 'Uzină chimică', 'Liant', 'Fabrică'] }],
    ['.cc-new li', { nl: ['Akker / reststroom', 'Bindmiddel', 'Fabriek Den Bosch', 'Object — zelfde regio'], pl: ['Pole / strumień odpadowy', 'Spoiwo', 'Fabryka Den Bosch', 'Obiekt — ten sam region'], ro: ['Câmp / flux rezidual', 'Liant', 'Fabrica Den Bosch', 'Obiect — aceeași regiune'] }],
    ['.pulses span', { nl: ['Zonne- + windenergie', 'Elektrisch wagenpark', 'Inclusief werkgeverschap', 'Baril Academy'], pl: ['Energia słoneczna + wiatrowa', 'Flota elektryczna', 'Inkluzywne zatrudnienie', 'Baril Academy'], ro: ['Energie solară + eoliană', 'Flotă electrică', 'Angajare incluzivă', 'Baril Academy'] }],
    ['#world .eyebrow', { nl: 'Hoofdstuk 05 · Sinds 1982', pl: 'Rozdział 05 · Od 1982', ro: 'Capitolul 05 · Din 1982' }],
    ['#world h2', { nl: 'Steeds groener,<br>wereldwijd', pl: 'Coraz bardziej zielono,<br>na całym świecie', ro: 'Tot mai verde,<br>în întreaga lume' }],
    ['#world .sec-head p:last-child', {
      nl: "Vanuit een schuurtje in Moerkapelle in 1982 naar vijf vestigingen op twee continenten. Sinds 2021 versnelt de transitie naar 100% hernieuwbare grondstoffen jaar op jaar. Zie de voetafdruk zich verspreiden.",
      pl: 'Z szopy w Moerkapelle w 1982 do pięciu zakładów na dwóch kontynentach. Od 2021 transformacja w kierunku 100% surowców odnawialnych przyspiesza z roku na rok. Zobacz, jak rozprzestrzenia się ślad.',
      ro: 'Dintr-o magazie din Moerkapelle în 1982 la cinci unități pe două continente. Din 2021, tranziția către 100% materii prime regenerabile accelerează de la an la an. Privește cum se răspândește amprenta.' }],
    ['.map-cap', { nl: 'De groene voetafdruk van de groep', pl: 'Zielony ślad grupy', ro: 'Amprenta verde a grupului' }],
    ['#mapTl li span', {
      nl: ['Opgericht in Moerkapelle', "'s-Hertogenbosch, NL", 'Baril Coatings Polska', 'Baril Coatings USA', 'Etten-Leur, NL', 'Transitie naar 100% hernieuwbaar'],
      pl: ['Założona w Moerkapelle', "'s-Hertogenbosch, NL", 'Baril Coatings Polska', 'Baril Coatings USA', 'Etten-Leur, NL', 'Transformacja w kierunku 100% odnawialnych'],
      ro: ['Înființată în Moerkapelle', "'s-Hertogenbosch, NL", 'Baril Coatings Polska', 'Baril Coatings USA', 'Etten-Leur, NL', 'Tranziție către 100% regenerabil'] }],
    ['#brands .eyebrow', { nl: 'Portfolio', pl: 'Portfolio', ro: 'Portofoliu' }],
    ['#brands h2', { nl: 'Eén missie,<br>vier merken', pl: 'Jedna misja,<br>cztery marki', ro: 'O misiune,<br>patru mărci' }],
    ['#brands .sec-head p:last-child', {
      nl: 'Elk merk brengt dezelfde chemie-eerst-filosofie naar een ander publiek — van offshore-staal tot de muur in je woonkamer.',
      pl: 'Każda marka niesie tę samą filozofię „chemia przede wszystkim” do innej grupy odbiorców — od stali offshore po ścianę w Twoim salonie.',
      ro: 'Fiecare marcă duce aceeași filozofie „chimia mai întâi” către un public diferit — de la oțelul offshore la peretele din livingul tău.' }],
    ['.brand .tag', { nl: ['Voor de industrie', 'Voor de vakschilder', 'Voor thuis', 'Voor de tuinbouw'], pl: ['Dla przemysłu', 'Dla profesjonalnego malarza', 'Do domu', 'Dla ogrodnictwa'], ro: ['Pentru industrie', 'Pentru zugravul profesionist', 'Pentru casă', 'Pentru horticultură'] }],
    ['.brand > div:first-child > p:not(.tag)', {
      nl: [
        'Hoogwaardige industriële coatings en bouwverven. Dunne-laag-bescherming voor staal en infrastructuur, OEM en metaalindustrie, marine & offshore — ontwikkeld om materialen langer te laten meegaan met minder verf.',
        'Een compleet biobased verfsysteem voor de professionele schilder. Plantaardige chemie met EU Ecolabel en Cradle to Cradle-certificering — de groenste verf, mengbaar in elke kleur.',
        'Plantaardige muur- en lakverf voor iedereen. Kleurcollecties samengesteld door experts, mengbaar in elke kleur van de regenboog — online en in het schap bij Karwei.',
        'Een tijdelijke schaduwcoating voor kassen die jonge gewassen beschermt tegen de felle zon. Optimale lichtregulatie op glas en polycarbonaat, gemaakt van circulair krijt — en volledig verwijderbaar.'],
      pl: [
        'Wysokiej jakości powłoki przemysłowe i farby budowlane. Cienkowarstwowa ochrona stali i infrastruktury, OEM i przemysłu metalowego, morskie i offshore — opracowane, by materiały służyły dłużej przy mniejszej ilości farby.',
        'Kompletny biobazowy system malarski dla profesjonalnego malarza. Chemia roślinna z EU Ecolabel i certyfikatem Cradle to Cradle — najbardziej zielona farba, mieszalna w każdym kolorze.',
        'Roślinna farba ścienna i lakierowa dla każdego. Kolekcje kolorów tworzone przez ekspertów, mieszane w każdym kolorze tęczy — online i na półce w Karwei.',
        'Tymczasowa powłoka cieniująca do szklarni, która chroni młode uprawy przed ostrym słońcem. Optymalna regulacja światła na szkle i poliwęglanie, wykonana z obiegowej kredy — i całkowicie usuwalna.'],
      ro: [
        'Acoperiri industriale și vopsele pentru construcții de înaltă performanță. Protecție în strat subțire pentru oțel și infrastructură, OEM și industria metalică, maritim și offshore — concepute pentru a prelungi viața materialelor cu mai puțină vopsea.',
        'Un sistem complet de vopsea biobazată pentru zugravul profesionist. Chimie vegetală cu EU Ecolabel și certificare Cradle to Cradle — cea mai verde vopsea, nuanțabilă în orice culoare.',
        'Vopsea vegetală pentru pereți și lac pentru toți. Colecții de culori create de experți, nuanțate în orice culoare a curcubeului — online și pe raft la Karwei.',
        'O acoperire temporară de umbrire pentru sere care protejează culturile tinere de soarele puternic. Reglare optimă a luminii pe sticlă și policarbonat, fabricată din cretă circulară — și complet detașabilă.'] }],
    ['.spec b', { nl: ['Assortiment', 'Assortiment', 'Assortiment', 'Assortiment'], pl: ['Asortyment', 'Asortyment', 'Asortyment', 'Asortyment'], ro: ['Gamă', 'Gamă', 'Gamă', 'Gamă'] }],
    ['#contact .eyebrow', { nl: 'Contact', pl: 'Kontakt', ro: 'Contact' }],
    ['#contact h2', { nl: 'Vind je<br>dichtstbijzijnde vestiging', pl: 'Znajdź<br>najbliższe biuro', ro: 'Găsește<br>cel mai apropiat birou' }],
    ['#contact .sec-head p:last-child', {
      nl: 'Baril Group ontwikkelt en produceert in Europa en Noord-Amerika. Neem rechtstreeks contact op met het team — voor producten, technische ondersteuning of een monster.',
      pl: 'Baril Group opracowuje i produkuje w Europie i Ameryce Północnej. Skontaktuj się bezpośrednio z zespołem — w sprawie produktów, wsparcia technicznego lub próbki.',
      ro: 'Baril Group dezvoltă și produce în Europa și America de Nord. Contactează direct echipa — pentru produse, asistență tehnică sau o mostră.' }],
    ['.loc-tag', {
      nl: ['Hoofdkantoor · NL','Productie · NL','Baril Polska · PL','Baril USA · Noord-Amerika','Baril România · RO','Baril Caucasia · GE'],
      pl: ['Siedziba · NL','Produkcja · NL','Baril Polska · PL','Baril USA · Ameryka Płn.','Baril România · RO','Baril Caucasia · GE'],
      ro: ['Sediu central · NL','Producție · NL','Baril Polska · PL','Baril USA · America de Nord','Baril România · RO','Baril Caucasia · GE'] }],
    ['.loc-note', {
      nl: ['Biobased &amp; watergedragen verven','Officiële distributeur'],
      pl: ['Farby biobazowe i wodorozcieńczalne','Oficjalny dystrybutor'],
      ro: ['Vopsele biobazate și pe bază de apă','Distribuitor oficial'] }],
    ['#proof .eyebrow', { nl: 'In de praktijk', pl: 'W praktyce', ro: 'În practică' }],
    ['#proof h2', { nl: 'Beschermd door Baril', pl: 'Chronione przez Baril', ro: 'Protejat de Baril' }],
    ['#proof .sec-head p:last-child', {
      nl: 'Van nationale infrastructuur tot monumentale restauratie — objecten die onze coatings langer in leven houden.',
      pl: 'Od infrastruktury krajowej po renowacje zabytków — obiekty, które nasze powłoki utrzymują przy życiu dłużej.',
      ro: 'De la infrastructura națională la restaurări monumentale — obiecte pe care acoperirile noastre le mențin în viață mai mult timp.' }],
    ['.case .meta span', {
      nl: ['Infrastructuur · 295 m overspanning', 'Bouw & infra', 'Staalconservering', 'Gebouwen & onderhoud', "Restauratie · 's-Hertogenbosch"],
      pl: ['Infrastruktura · rozpiętość 295 m', 'Budownictwo i infrastruktura', 'Konserwacja stali', 'Budynki i konserwacja', "Renowacja · 's-Hertogenbosch"],
      ro: ['Infrastructură · deschidere 295 m', 'Construcții și infrastructură', 'Conservarea oțelului', 'Clădiri și întreținere', "Restaurare · 's-Hertogenbosch"] }],
    ['.cases-note', {
      nl: 'Sleep om te ontdekken · <a href="https://www.barilcoatings.com/nl/praktijkcases" target="_blank" rel="noopener">Alle cases →</a>',
      pl: 'Przeciągnij, aby przeglądać · <a href="https://www.barilcoatings.com/nl/praktijkcases" target="_blank" rel="noopener">Wszystkie realizacje →</a>',
      ro: 'Trage pentru a explora · <a href="https://www.barilcoatings.com/nl/praktijkcases" target="_blank" rel="noopener">Toate studiile de caz →</a>' }],
    ['#renew .eyebrow', { nl: 'Technologie', pl: 'Technologia', ro: 'Tehnologie' }],
    ['#renew h2', { nl: 'Hoe we een oude<br>industrie vernieuwen', pl: 'Jak odnawiamy<br>starą branżę', ro: 'Cum reînnoim o<br>industrie veche' }],
    ['.pillar .pn', { nl: ['Chemie', 'Applicatie', 'Productie'], pl: ['Chemia', 'Aplikacja', 'Produkcja'], ro: ['Chimie', 'Aplicare', 'Producție'] }],
    ['.pillar h4', { nl: ['Biobased formuleren', 'Dunne-laag-technologie', 'Emissiearme fabrieken'], pl: ['Receptury biobazowe', 'Technologia cienkowarstwowa', 'Niskoemisyjne fabryki'], ro: ['Formulare biobazată', 'Tehnologie în strat subțire', 'Fabrici cu emisii reduse'] }],
    ['.pillar h4 + p', {
      nl: [
        'Plantaardige grondstoffen vervangen fossiele chemie waar het ertoe doet — CO₂ vastleggen in plaats van uitstoten, zonder in te leveren op prestaties.',
        'Meer bescherming uit minder materiaal. Lagere laagdikte betekent langer meegaande objecten, minder overschilderen en een kleinere voetafdruk per beschermde m².',
        'Produceren dicht bij onze markten in Nederland, de Verenigde Staten en Polen — met emissiereductie ontworpen in het proces.'],
      pl: [
        'Surowce roślinne zastępują chemię kopalną tam, gdzie to się liczy — wiązanie CO₂ zamiast emisji, bez kompromisów w wydajności.',
        'Więcej ochrony z mniejszej ilości materiału. Niższa grubość powłoki oznacza dłużej służące obiekty, mniej przemalowań i mniejszy ślad na chroniony m².',
        'Produkcja blisko naszych rynków w Holandii, USA i Polsce — z redukcją emisji wpisaną w proces.'],
      ro: [
        'Materiile prime vegetale înlocuiesc chimia fosilă acolo unde contează — captarea CO₂ în loc de emitere, fără compromisuri la performanță.',
        'Mai multă protecție din mai puțin material. O grosime mai mică înseamnă obiecte cu viață mai lungă, mai puține revopsiri și o amprentă mai mică pe m² protejat.',
        'Producție aproape de piețele noastre din Țările de Jos, SUA și Polonia — cu reducerea emisiilor integrată în proces.'] }],
    ['.renew-cap', {
      nl: 'Corrosiebescherming, met precisie aangebracht — dunne lagen die het zwaarste werk doen.',
      pl: 'Ochrona antykorozyjna nakładana z precyzją — cienkie warstwy, które wykonują najcięższą pracę.',
      ro: 'Protecție anticorozivă aplicată cu precizie — straturi subțiri care fac cea mai grea muncă.' }],
    ['#data .eyebrow', { nl: 'Datasheet', pl: 'Karta danych', ro: 'Fișă tehnică' }],
    ['#data h2', { nl: 'De groep<br>in cijfers', pl: 'Grupa<br>w liczbach', ro: 'Grupul<br>în cifre' }],
    ['.sheet-row b', {
      nl: ['Hoofdkantoor', 'Productie', 'Bereik', 'Markten', 'Managementsystemen', 'Circulaire doelstelling', 'Energie', 'Mensen', 'UN SDG’s', 'Merken'],
      pl: ['Siedziba', 'Produkcja', 'Zasięg', 'Rynki', 'Systemy zarządzania', 'Cel obiegu zamkniętego', 'Energia', 'Ludzie', 'Cele ONZ (SDG)', 'Marki'],
      ro: ['Sediu', 'Producție', 'Acoperire', 'Piețe', 'Sisteme de management', 'Țintă circulară', 'Energie', 'Oameni', 'ODD ONU', 'Mărci'] }],
    ['.sheet-row span', {
      nl: [
        "'s-Hertogenbosch, Nederland <em>— familiebedrijf</em>",
        'Nederland · Verenigde Staten · Polen',
        'Duurzame beschermingsmerken, gebruikt in 20+ landen',
        'Staal & infrastructuur · OEM & metaal · Marine & offshore · Professioneel schilderwerk · Consument',
        'ISO 9001 <em>kwaliteit</em> · ISO 14001 <em>milieu</em> · ISO 45001 <em>veiligheid</em>',
        '100% circulaire grondstoffen in 2030 <em>— 55% vandaag, vanaf &lt;10% in 2022</em>',
        'Productie op eigen zonnepanelen + windenergie <em>·</em> volledig elektrisch wagenpark',
        'Inclusief werkgeverschap <em>(afstand tot de arbeidsmarkt)</em> · 4-jaarlijks preventief medisch onderzoek · Baril Academy',
        'Actief programma op doelen 1 · 2 · 3 · 4 · 7 · 8 · 9 · 11 · 12 · 13 · 14 · 15',
        'Baril Coatings · Copperant · Fairf'],
      pl: [
        "'s-Hertogenbosch, Holandia <em>— firma rodzinna</em>",
        'Holandia · Stany Zjednoczone · Polska',
        'Zrównoważone marki ochronne, stosowane w 20+ krajach',
        'Stal i infrastruktura · OEM i metal · Morskie i offshore · Malarstwo profesjonalne · Konsument',
        'ISO 9001 <em>jakość</em> · ISO 14001 <em>środowisko</em> · ISO 45001 <em>bezpieczeństwo</em>',
        '100% surowców w obiegu zamkniętym w 2030 <em>— 55% dziś, z &lt;10% w 2022</em>',
        'Produkcja na własnych panelach słonecznych + energii wiatrowej <em>·</em> flota w pełni elektryczna',
        'Inkluzywne zatrudnienie <em>(oddalenie od rynku pracy)</em> · profilaktyczne badania medyczne co 4 lata · Baril Academy',
        'Aktywny program w celach 1 · 2 · 3 · 4 · 7 · 8 · 9 · 11 · 12 · 13 · 14 · 15',
        'Baril Coatings · Copperant · Fairf'],
      ro: [
        "'s-Hertogenbosch, Țările de Jos <em>— afacere de familie</em>",
        'Țările de Jos · Statele Unite · Polonia',
        'Mărci de protecție durabile, utilizate în peste 20 de țări',
        'Oțel & infrastructură · OEM & metal · Maritim & offshore · Zugrăvit profesional · Consumator',
        'ISO 9001 <em>calitate</em> · ISO 14001 <em>mediu</em> · ISO 45001 <em>siguranță</em>',
        '100% materii prime circulare în 2030 <em>— 55% astăzi, de la &lt;10% în 2022</em>',
        'Producție pe panouri solare proprii + energie eoliană <em>·</em> flotă complet electrică',
        'Angajare incluzivă <em>(distanță față de piața muncii)</em> · control medical preventiv la fiecare 4 ani · Baril Academy',
        'Program activ pe obiectivele 1 · 2 · 3 · 4 · 7 · 8 · 9 · 11 · 12 · 13 · 14 · 15',
        'Baril Coatings · Copperant · Fairf'] }],
    ['#sources .eyebrow', { nl: 'Bronnen & onderbouwing', pl: 'Źródła i uzasadnienie', ro: 'Surse și fundamentare' }],
    ['.src li', {
      nl: [
        'Wereldvolume verf & coatings — marktramingen 2022–2024: Ceresana (≈ 44,5 Mt, 2022) · Freedonia (≈ 63,7 Mt, 2024). Getoond als "≈ 50+ miljoen ton per jaar".',
        'EU-verfrichtlijn 2004/42/EG — VOS-grenswaarden voor decoratieve verf en autoschadeherstel (EUR-Lex).',
        'CSE/OPS (schildersziekte), erkende beroepsziekte, NL: ≈ 50 nieuwe gevallen/jr rond 2000 → &lt; 10/jr in 2014, daling toegeschreven aan substitutie, o.a. watergedragen verf — ops-loket.nl · beroepsziekten.nl.',
        'Baril Groups transitie-, energie- en mensenprogramma — barilcoatings.com/duurzaamheid · copperant.com/certificaten. Status circulaire grondstoffen (55% vandaag, &lt; 10% in 2022, doel 100% in 2030): Baril Group, 2026.',
        'Het hoofdstuk "Als de verf van de wereld met ons meeging" is een illustratief scenario op basis van Barils eigen producttransitie — geen gemeten mondiale projectie.'],
      pl: [
        'Wolumen światowy farb i powłok — szacunki rynkowe 2022–2024: Ceresana (≈ 44,5 Mt, 2022) · Freedonia (≈ 63,7 Mt, 2024). Pokazano jako „≈ 50+ milionów ton rocznie”.',
        'Dyrektywa UE 2004/42/WE — limity LZO dla farb dekoracyjnych i renowacji pojazdów (EUR-Lex).',
        'CSE/OPS (choroba malarzy), uznana choroba zawodowa, NL: ≈ 50 nowych przypadków/rok ok. 2000 → &lt; 10/rok w 2014, spadek przypisywany substytucji, m.in. farbom wodorozcieńczalnym — ops-loket.nl · beroepsziekten.nl.',
        'Programy transformacji, energii i ludzi Baril Group — barilcoatings.com/duurzaamheid · copperant.com/certificaten. Status surowców w obiegu zamkniętym (55% dziś, &lt; 10% w 2022, cel 100% w 2030): Baril Group, 2026.',
        'Rozdział „Gdyby farba świata poszła z nami” to scenariusz ilustracyjny oparty na własnej transformacji produktów Baril — nie zmierzona projekcja globalna.'],
      ro: [
        'Volum global de vopsele și acoperiri — estimări de piață 2022–2024: Ceresana (≈ 44,5 Mt, 2022) · Freedonia (≈ 63,7 Mt, 2024). Afișat ca „≈ 50+ milioane de tone pe an”.',
        'Directiva UE 2004/42/CE — limite COV pentru vopsele decorative și refinisarea vehiculelor (EUR-Lex).',
        'CSE/OPS (boala zugravului), boală profesională recunoscută, NL: ≈ 50 cazuri noi/an în jurul lui 2000 → &lt; 10/an în 2014, scădere atribuită substituției, inclusiv vopselei pe bază de apă — ops-loket.nl · beroepsziekten.nl.',
        'Programele de tranziție, energie și oameni ale Baril Group — barilcoatings.com/duurzaamheid · copperant.com/certificaten. Statutul materiilor prime circulare (55% astăzi, &lt; 10% în 2022, obiectiv 100% în 2030): Baril Group, 2026.',
        'Capitolul „Dacă vopseaua lumii ar merge cu noi” este un scenariu ilustrativ bazat pe propria tranziție a produselor Baril — nu o proiecție globală măsurată.'] }],
    ['.foot-claim', { nl: 'Wij verven een hernieuwbare toekomst.', pl: 'Malujemy odnawialną przyszłość.', ro: 'Vopsim un viitor regenerabil.' }],
    ['.foot-grid h5', { nl: ['Merken', 'Groep'], pl: ['Marki', 'Grupa'], ro: ['Mărci', 'Grup'] }],
    ['.foot-grid div:nth-child(3) a', { nl: ['Missie', 'Technologie', 'Werken bij ↗', 'Contact ↗'], pl: ['Misja', 'Technologia', 'Kariera ↗', 'Kontakt ↗'], ro: ['Misiune', 'Tehnologie', 'Cariere ↗', 'Contact ↗'] }],
    ['.foot-bottom span', {
      nl: ["© Baril Group · 's-Hertogenbosch NL", 'Minder verf. Langere levensduur. Lagere impact.'],
      pl: ["© Baril Group · 's-Hertogenbosch NL", 'Mniej farby. Dłuższa żywotność. Mniejszy wpływ.'],
      ro: ["© Baril Group · 's-Hertogenbosch NL", 'Mai puțină vopsea. Viață mai lungă. Impact mai mic.'] }]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('baril-lang') || 'en'; } catch (e) {}
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
    try { localStorage.setItem('baril-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
