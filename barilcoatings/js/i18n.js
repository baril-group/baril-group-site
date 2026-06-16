/* Language switch for the one-pager. English is the authored language (captured
   from the DOM); NL / PL / RO live in the MAP below as [selector, {nl, pl, ro}].
   A value may be a string (first match) or an array (one per matched element).
   PL/RO are machine translations — refine as needed. */
(() => {
  'use strict';
  const MAP = [
    ['.navlinks a', {
      nl: ['Producten', 'Verfsystemen', 'Markten', 'Cases', 'Technologie', 'Contact'],
      pl: ['Produkty', 'Systemy malarskie', 'Rynki', 'Realizacje', 'Technologia', 'Kontakt'],
      ro: ['Produse', 'Sisteme de vopsire', 'Piețe', 'Studii de caz', 'Tehnologie', 'Contact'] }],
    ['header .eyebrow', {
      nl: "Baril Coatings — Industriële & beschermende coatings · Sinds 1987",
      pl: "Baril Coatings — Powłoki przemysłowe i ochronne · Od 1987",
      ro: "Baril Coatings — Acoperiri industriale și de protecție · Din 1987" }],
    ['header h1', {
      nl: 'Duurzame<br><span class="paint">coating-</span><br>oplossingen',
      pl: 'Zrównoważone<br><span class="paint">rozwiązania</span><br>powłokowe',
      ro: 'Soluții de<br><span class="paint">acoperire</span><br>durabile' }],
    ['.hero-sub', {
      nl: 'Ontwikkelaar en producent van hoogwaardige, zeer duurzame industriële coatings en bouwverven — <strong>staal langer beschermen, met dunnere, schonere lagen</strong>.',
      pl: 'Twórca i producent najwyższej jakości, wyjątkowo trwałych powłok przemysłowych i farb budowlanych — <strong>chronimy stal dłużej, cieńszymi i czystszymi warstwami</strong>.',
      ro: 'Dezvoltator și producător de acoperiri industriale și vopsele pentru construcții premium, foarte durabile — <strong>protejăm oțelul mai mult timp, cu straturi mai subțiri și mai curate</strong>.' }],
    ['.hero-cta .btn-solid', { nl: 'Bekijk de markten', pl: 'Zobacz rynki', ro: 'Explorează piețele' }],
    ['.hero-cta .btn-ghost', { nl: 'Hoe bescherming werkt', pl: 'Jak działa ochrona', ro: 'Cum funcționează protecția' }],
    ['.hero-foot span:first-child', {
      nl: 'Staal & infrastructuur · OEM & metaal · Marine & offshore · Schildersbedrijven',
      pl: 'Stal i infrastruktura · OEM i metal · Morskie i offshore · Firmy malarskie',
      ro: 'Oțel și infrastructură · OEM și metal · Maritim și offshore · Firme de vopsire' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează' }],
    ['#about .eyebrow', { nl: 'Wie we zijn', pl: 'Kim jesteśmy', ro: 'Cine suntem' }],
    ['.mission-quote', {
      nl: 'Wij maken coatings waarmee staal en constructies <em>langer meegaan met minder</em> — hoogwaardige corrosiebescherming, ontwikkeld op chemisch niveau en aangebracht in dunnere lagen. De prestaties die je van industriële coatings verwacht, op een hernieuwbaar pad.',
      pl: 'Tworzymy powłoki, dzięki którym stal i konstrukcje <em>służą dłużej przy mniejszym zużyciu</em> — najwyższej klasy ochrona antykorozyjna, zaprojektowana na poziomie chemii i nakładana w cieńszych warstwach. Wydajność, jakiej oczekujesz od powłok przemysłowych, na drodze ku odnawialności.',
      ro: 'Producem acoperiri care fac oțelul și structurile să <em>reziste mai mult cu mai puțin</em> — protecție anticorozivă premium, concepută la nivel chimic și aplicată în pelicule mai subțiri. Performanța pe care o aștepți de la acoperirile industriale, pe un drum regenerabil.' }],
    ['#about .mm b', {
      nl: ['Langer beschermen', 'Minder coating', 'Hernieuwbare chemie', 'Gecertificeerd'],
      pl: ['Dłuższa ochrona', 'Mniej powłoki', 'Odnawialna chemia', 'Certyfikowane'],
      ro: ['Protecție mai lungă', 'Mai puțină acoperire', 'Chimie regenerabilă', 'Certificat'] }],
    ['#about .mm span', {
      nl: [
        'Dunne-laag-corrosiebescherming verlengt de levensduur van staal, infrastructuur en installaties — tot de hoogste ISO 12944-klassen.',
        'Meer dekking per liter bij een lagere laagdikte — minder onderhoudscycli, een kleinere voetafdruk per beschermde m².',
        'Biobased en circulaire grondstoffen vervangen fossiele chemie, stap voor stap — van &lt;10% in 2022 naar 100% in 2030.',
        'ISO 9001, 14001 en 45001. Productgoedkeuringen tot NORSOK M-501 voor offshore — bewezen in de zwaarste omgevingen.'],
      pl: [
        'Cienkowarstwowa ochrona antykorozyjna wydłuża żywotność stali, infrastruktury i instalacji — aż do najwyższych klas ISO 12944.',
        'Większa wydajność na litr przy niższej grubości suchej powłoki — mniej cykli konserwacji, mniejszy ślad na chroniony m².',
        'Surowce biobazowe i w obiegu zamkniętym zastępują chemię kopalną, etap po etapie — z &lt;10% w 2022 do 100% w 2030.',
        'ISO 9001, 14001 i 45001. Dopuszczenia produktów do NORSOK M-501 dla offshore — sprawdzone w najtrudniejszych warunkach.'],
      ro: [
        'Protecția anticorozivă în strat subțire prelungește durata de viață a oțelului, infrastructurii și echipamentelor — până la cele mai înalte clase ISO 12944.',
        'Acoperire mai mare pe litru la o grosime mai mică a peliculei uscate — mai puține cicluri de întreținere, o amprentă mai mică pe m² protejat.',
        'Materii prime biologice și circulare înlocuiesc chimia fosilă, etapă cu etapă — de la &lt;10% în 2022 la 100% până în 2030.',
        'ISO 9001, 14001 și 45001. Aprobări de produs până la NORSOK M-501 pentru offshore — dovedite în cele mai dure medii.'] }],
    ['#corrosion .eyebrow', { nl: 'Hoofdstuk 04 · Corrosiebescherming', pl: 'Rozdział 04 · Ochrona antykorozyjna', ro: 'Capitolul 04 · Protecție anticorozivă' }],
    ['#corrosion h2', { nl: 'Van roest<br>naar weerbaarheid', pl: 'Od rdzy<br>do odporności', ro: 'De la rugină<br>la reziliență' }],
    ['#corrosion .sec-head p:last-child', {
      nl: 'Corrosie is een langzaam vuur: onbeschermd staal verliest jaarlijks tientallen micrometers, en constructies worden ruim voor hun tijd vervangen. Een Baril-beschermingssysteem sluit het staal af van zuurstof en water — en wint decennia. Scroll om de coating aan te brengen.',
      pl: 'Korozja to powolny ogień: niezabezpieczona stal traci dziesiątki mikronów rocznie, a konstrukcje wymienia się na długo przed czasem. System ochronny Baril odcina stal od tlenu i wody — i zyskuje dziesięciolecia. Przewiń, aby nałożyć powłokę.',
      ro: 'Coroziunea este un foc lent: oțelul neprotejat pierde zeci de microni pe an, iar structurile sunt înlocuite cu mult înainte de vreme. Un sistem de protecție Baril izolează oțelul de oxigen și apă — și câștigă decenii. Derulează pentru a aplica acoperirea.' }],
    ['#corrosion .cr .cl', {
      nl: ['Tot eerste groot onderhoud', 'Tot de hoogste ISO 12944-corrosiviteitsklassen', 'Gekwalificeerde systemen voor offshore-staal'],
      pl: ['Do pierwszej dużej konserwacji', 'Aż do najwyższych klas korozyjności ISO 12944', 'Kwalifikowane systemy do stali offshore'],
      ro: ['Până la prima întreținere majoră', 'Până la cele mai înalte clase de corozivitate ISO 12944', 'Sisteme calificate pentru oțel offshore'] }],
    ['#thinlayer .eyebrow', { nl: 'Hoofdstuk 02 · Dunne-laag-technologie', pl: 'Rozdział 02 · Technologia cienkowarstwowa', ro: 'Capitolul 02 · Tehnologie în strat subțire' }],
    ['#thinlayer h2', { nl: 'Meer meters,<br>minder coating', pl: 'Więcej metrów,<br>mniej powłoki', ro: 'Mai mulți metri,<br>mai puțină acoperire' }],
    ['#thinlayer .sec-head p:last-child', {
      nl: 'De kracht van een coating zit niet in de dikte, maar in hoe goed ze is opgebouwd. Onze dunne-laag-technologie beschermt meer vierkante meters per liter, bij een lagere laagdikte — minder materiaal op de constructie, minder blikken op de vrachtwagen, een kleinere voetafdruk per beschermde m².',
      pl: 'Siła powłoki nie tkwi w jej grubości, lecz w tym, jak dobrze jest zbudowana. Nasza technologia cienkowarstwowa chroni więcej metrów kwadratowych z każdego litra, przy niższej grubości suchej powłoki — mniej materiału na konstrukcji, mniej puszek na ciężarówce, mniejszy ślad na chroniony m².',
      ro: 'Puterea unei acoperiri nu stă în grosime, ci în cât de bine este construită. Tehnologia noastră în strat subțire protejează mai mulți metri pătrați din fiecare litru, la o grosime mai mică a peliculei uscate — mai puțin material pe structură, mai puține cutii în camion, o amprentă mai mică pe m² protejat.' }],
    ['.cov-readout .cl', { nl: 'Beschermd per liter, bij de aanbevolen laagdikte', pl: 'Ochrona na litr, przy zalecanej grubości powłoki', ro: 'Protecție pe litru, la grosimea recomandată a peliculei' }],
    ['.dft-name', { nl: ['Conventionele laagdikte', 'Baril dunne laag'], pl: ['Powłoka konwencjonalna', 'Baril cienka warstwa'], ro: ['Strat convențional', 'Baril strat subțire'] }],
    ['.scenario-note', {
      nl: [
        'Indicatieve duurzaamheid. De haalbare bescherming hangt af van systeem, ondergrondvoorbehandeling en corrosiviteitsklasse volgens ISO 12944 / ISO 12944-9 (offshore).',
        'De droge-laagdikte is illustratief; werkelijke dekking en DLD hangen af van product, methode en specificatie.',
        'Gepatenteerde DualCure (DCC). Prestatiecijfers volgens technische data van Baril Coatings; de haalbare bescherming hangt af van systeem, ondergrond en specificatie.'],
      pl: [
        'Trwałość orientacyjna. Osiągalna ochrona zależy od systemu, przygotowania podłoża i klasy korozyjności wg ISO 12944 / ISO 12944-9 (offshore).',
        'Grubość suchej powłoki jest poglądowa; rzeczywista wydajność i DFT zależą od produktu, metody i specyfikacji.',
        'Opatentowana DualCure (DCC). Dane wydajności wg danych technicznych Baril Coatings; osiągalna ochrona zależy od systemu, podłoża i specyfikacji.'],
      ro: [
        'Durabilitate orientativă. Protecția realizabilă depinde de sistem, pregătirea suportului și clasa de corozivitate conform ISO 12944 / ISO 12944-9 (offshore).',
        'Grosimea peliculei uscate este ilustrativă; acoperirea reală și DFT depind de produs, metodă și specificație.',
        'DualCure (DCC) brevetat. Cifrele de performanță conform datelor tehnice Baril Coatings; protecția realizabilă depinde de sistem, suport și specificație.'] }],
    ['#bio .eyebrow', { nl: 'Hoofdstuk 03 · Hernieuwbare chemie', pl: 'Rozdział 03 · Odnawialna chemia', ro: 'Capitolul 03 · Chimie regenerabilă' }],
    ['#bio h2', { nl: 'Van vat<br>naar bio', pl: 'Z beczki<br>do bio', ro: 'De la baril<br>la bio' }],
    ['#bio .sec-head p:last-child', {
      nl: 'Elke liter coating is chemie: bindmiddel, oplosmiddel, pigment, additieven — een eeuw lang gebaseerd op ruwe olie. Wij zetten onze industriële coatings om naar hernieuwbare en circulaire grondstoffen, van minder dan 10% in 2022 naar 55% vandaag, op weg naar 100% in 2030. Dezelfde bescherming. Lagere impact.',
      pl: 'Każdy litr powłoki to chemia: spoiwo, rozpuszczalnik, pigment, dodatki — przez stulecie na bazie ropy naftowej. Przekształcamy nasze powłoki przemysłowe na surowce odnawialne i w obiegu zamkniętym, z mniej niż 10% w 2022 do 55% dziś, w drodze do 100% w 2030. Ta sama ochrona. Mniejszy wpływ.',
      ro: 'Fiecare litru de acoperire este chimie: liant, solvent, pigment, aditivi — timp de un secol, pe bază de petrol. Ne transformăm acoperirile industriale către materii prime regenerabile și circulare, de la mai puțin de 10% în 2022 la 55% astăzi, pe drumul către 100% în 2030. Aceeași protecție. Impact mai mic.' }],
    ['#bio .ctr .yr', { nl: 'vandaag', pl: 'dziś', ro: 'astăzi' }],
    ['#bio .ctr:nth-child(2) b', { nl: '100% in 2030', pl: '100% do 2030', ro: '100% până în 2030' }],
    ['#bio .ctr:nth-child(3) b', { nl: 'Gelijk of beter', pl: 'Tak samo lub lepiej', ro: 'La fel sau mai bine' }],
    ['#bio .ctr .cl', {
      nl: ['Hernieuwbare & circulaire grondstoffen', 'Groepsdoel — vanaf &lt;10% in 2022', 'Bescherming, bij lagere laagdikte'],
      pl: ['Surowce odnawialne i w obiegu zamkniętym', 'Cel grupy — z &lt;10% w 2022', 'Ochrona, przy niższej grubości powłoki'],
      ro: ['Materii prime regenerabile și circulare', 'Obiectivul grupului — de la &lt;10% în 2022', 'Protecție, la o grosime mai mică'] }],
    ['#dualcure .eyebrow', { nl: 'Hoofdstuk 01 · DualCure-technologie', pl: 'Rozdział 01 · Technologia DualCure', ro: 'Capitolul 01 · Tehnologia DualCure' }],
    ['#dualcure h2', { nl: 'Twee uithardingen,<br>één netwerk', pl: 'Dwa utwardzania,<br>jedna sieć', ro: 'Două întăriri,<br>o singură rețea' }],
    ['#dualcure .sec-head p:last-child', {
      nl: 'De meeste industriële coatings harden op één manier uit. Onze gepatenteerde <strong>DualCure (DCC)</strong> hardt tegelijk op twee manieren uit: de chemische 2K-reactie van componenten A en B, <em>én</em> een tweede uitharding die op gang komt door vocht uit de lucht. De twee netwerken weven zich tot één uitzonderlijk dichte moleculaire mesh — hechter <em>én</em> flexibeler dan regulier 2K. Het resultaat: een veelvoud aan bescherming, met aanzienlijk minder coating.',
      pl: 'Większość powłok przemysłowych utwardza się w jeden sposób. Nasza opatentowana <strong>DualCure (DCC)</strong> utwardza się jednocześnie na dwa sposoby: chemiczna reakcja 2K komponentów A i B, <em>oraz</em> drugie utwardzanie wywołane wilgocią z powietrza. Obie sieci splatają się w jedną wyjątkowo gęstą molekularną siatkę — wiążąc mocniej <em>i</em> pozostając bardziej elastyczne niż zwykłe 2K. Rezultat: wielokrotnie większa ochrona przy znacznie mniejszej ilości powłoki.',
      ro: 'Majoritatea acoperirilor industriale se întăresc într-un singur mod. <strong>DualCure (DCC)</strong> brevetat se întărește în două moduri simultan: reacția chimică 2K a componentelor A și B, <em>plus</em> o a doua întărire declanșată de umiditatea din aer. Cele două rețele se împletesc într-o rețea moleculară excepțional de densă — legături mai strânse <em>și</em> mai multă flexibilitate decât 2K obișnuit. Rezultatul: o protecție de mai multe ori mai mare, cu mult mai puțină acoperire.' }],
    ['#dualcure .dcc-legend .lg', {
      nl: ['Chemische 2K-uitharding (A+B)', 'Vochtuitharding uit de lucht'],
      pl: ['Chemiczne utwardzanie 2K (A+B)', 'Utwardzanie wilgocią z powietrza'],
      ro: ['Întărire chimică 2K (A+B)', 'Întărire cu umiditate din aer'] }],
    ['#dualcure .cr .cl', {
      nl: ['Dunner dan conventioneel — bij gelijke bescherming', 'Bij 200 µm totaal · NORSOK-gecertificeerd voor offshore', 'Procestijd · uithardt in ~30 min, zonder warmte, low-VOC'],
      pl: ['Cieńsza niż konwencjonalna — przy tej samej ochronie', 'Przy 200 µm łącznie · certyfikat NORSOK dla offshore', 'Czas procesu · utwardza w ~30 min, bez ciepła, niska LZO'],
      ro: ['Mai subțire decât convențional — la aceeași protecție', 'La 200 µm total · certificat NORSOK pentru offshore', 'Timp de proces · se întărește în ~30 min, fără căldură, COV redus'] }],
    ['#dualcure .net-name', { nl: ['Regulier 2K', 'DualCure'], pl: ['Zwykłe 2K', 'DualCure'], ro: ['2K obișnuit', 'DualCure'] }],
    ['#dualcure .net-val', { nl: ['enkel netwerk', 'dubbel netwerk'], pl: ['pojedyncza sieć', 'podwójna sieć'], ro: ['rețea simplă', 'rețea dublă'] }],
    ['#markets .eyebrow', { nl: 'Markten', pl: 'Rynki', ro: 'Piețe' }],
    ['#markets h2', { nl: 'Gebouwd voor de<br>zwaarste klussen', pl: 'Stworzone do<br>najtrudniejszych zadań', ro: 'Construite pentru<br>cele mai grele lucrări' }],
    ['#markets .sec-head p:last-child', {
      nl: 'Van nationale infrastructuur tot offshore-platforms — overal waar staal lang mee moet, worden onze coatings voorgeschreven.',
      pl: 'Od infrastruktury krajowej po platformy offshore — wszędzie tam, gdzie stal musi przetrwać, stosuje się nasze powłoki.',
      ro: 'De la infrastructura națională la platforme offshore — oriunde oțelul trebuie să reziste, acoperirile noastre sunt specificate.' }],
    ['.brand .tag', {
      nl: ['Staal & infrastructuur', 'OEM & metaalindustrie', 'Marine & offshore', 'Schildersbedrijven'],
      pl: ['Stal i infrastruktura', 'Przemysł OEM i metalowy', 'Morskie i offshore', 'Firmy malarskie'],
      ro: ['Oțel și infrastructură', 'Industrie OEM și metalică', 'Maritim și offshore', 'Firme de vopsire'] }],
    ['.brand h3', {
      nl: ['Staal & infra', 'OEM & metaal', 'Marine & offshore', 'Bouwverven'],
      pl: ['Stal i infra', 'OEM i metal', 'Morskie i offshore', 'Farby budowlane'],
      ro: ['Oțel și infra', 'OEM și metal', 'Maritim și offshore', 'Vopsele pentru construcții'] }],
    ['.brand p:not(.tag)', {
      nl: [
        'Bruggen, sluizen, stadions en utiliteitsbouw. Zware corrosiebescherming die dragend staal decennialang in dienst houdt, met onderhoudsintervallen van tientallen jaren.',
        'Coatingsystemen voor machinebouw, installaties en seriematige metaalproductie — snel uithardende, duurzame afwerkingen, ontwikkeld voor de lijn én voor het veld erna.',
        'Bescherming voor de meest agressieve omgeving die er is: zout, nevel en onderdompeling. Gekwalificeerde systemen die voldoen aan offshore-normen en blijven werken waar coatings normaal falen.',
        'Een compleet assortiment bouw- en onderhoudsverven voor professionele schildersbedrijven — met technisch advies, applicateurstraining via Baril Academy en altijd actuele veiligheidsinformatie.'],
      pl: [
        'Mosty, śluzy, stadiony i budownictwo użyteczności publicznej. Wytrzymała ochrona antykorozyjna, która utrzymuje stal nośną w służbie przez dziesięciolecia, z okresami konserwacji liczonymi w dziesiątkach lat.',
        'Systemy powłokowe dla budowy maszyn, urządzeń i seryjnej produkcji metalowej — szybkoschnące, trwałe wykończenia zaprojektowane na linię i na późniejszą eksploatację.',
        'Ochrona dla najbardziej agresywnego środowiska, jakie istnieje: sól, mgła i zanurzenie. Kwalifikowane systemy spełniające normy offshore, działające tam, gdzie powłoki zwykle zawodzą.',
        'Pełna gama farb budowlanych i konserwacyjnych dla profesjonalnych firm malarskich — ze wsparciem technicznym, szkoleniem wykonawców w Baril Academy i zawsze aktualnymi informacjami o bezpieczeństwie.'],
      ro: [
        'Poduri, ecluze, stadioane și construcții de utilități. Protecție anticorozivă de mare rezistență care menține oțelul de rezistență în funcțiune zeci de ani, cu intervale de întreținere măsurate în zeci de ani.',
        'Sisteme de acoperire pentru construcția de mașini, echipamente și producție metalică de serie — finisaje durabile, cu întărire rapidă, concepute pentru linie și pentru exploatarea ulterioară.',
        'Protecție pentru cel mai agresiv mediu existent: sare, stropi și imersie. Sisteme calificate care respectă standardele offshore și funcționează acolo unde acoperirile cedează de obicei.',
        'O gamă completă de vopsele pentru construcții și întreținere pentru firme profesionale de vopsire — susținute de consultanță tehnică, instruirea aplicatorilor prin Baril Academy și informații de siguranță mereu actualizate.'] }],
    ['.spec b', { nl: ['Systemen', 'Systemen', 'Systemen', 'Ondersteuning'], pl: ['Systemy', 'Systemy', 'Systemy', 'Wsparcie'], ro: ['Sisteme', 'Sisteme', 'Sisteme', 'Suport'] }],
    ['#ranges .eyebrow', { nl: 'Assortiment', pl: 'Gama produktów', ro: 'Game de produse' }],
    ['#ranges h2', { nl: 'Eén filosofie,<br>vele systemen', pl: 'Jedna filozofia,<br>wiele systemów', ro: 'O filozofie,<br>multe sisteme' }],
    ['#ranges .sec-head p:last-child', {
      nl: 'Elk assortiment brengt dezelfde chemie-eerst-aanpak naar een andere klus — ontwikkeld om langer te beschermen met minder.',
      pl: 'Każda gama przenosi to samo podejście „chemia przede wszystkim" na inne zadanie — zaprojektowana, by chronić dłużej przy mniejszym zużyciu.',
      ro: 'Fiecare gamă duce aceeași abordare „chimia mai întâi" către o altă aplicație — concepută să protejeze mai mult cu mai puțin.' }],
    ['.pillar .pn', { nl: ['Hernieuwbaar', 'Snelle uitharding', 'Heavy-duty', 'Watergedragen', 'Enkelpak'], pl: ['Odnawialne', 'Szybkie utwardzanie', 'Wytrzymałe', 'Wodorozcieńczalne', 'Jednoskładnikowy'], ro: ['Regenerabil', 'Întărire rapidă', 'Rezistență mare', 'Pe bază de apă', 'Monocomponent'] }],
    ['.pillar h4 + p', {
      nl: [
        'Industriële coatings op basis van plantaardige en reststroom-grondstoffen — fossiele chemie eruit ontworpen, de bescherming erin gehouden.',
        'Dual-cure-technologie voor OEM en metaalindustrie: snelle doorharding en een taaie, duurzame afwerking, sneller klaar voor verwerking.',
        'Zware corrosiebescherming voor staal en infrastructuur — high-build-prestaties in dunnere, slimmere lagen.',
        'Watergedragen, emissiearme coatings die beschermen zonder de oplosmiddelenlast — schoner op de klus en in de lucht.',
        'Eencomponent biobased alkydcoatings — anticorrosieve bescherming in kleur voor staalconstructie, eenvoudig en snel aan te brengen.'],
      pl: [
        'Powłoki przemysłowe na bazie surowców roślinnych i ze strumieni odpadowych — chemia kopalna wyeliminowana, ochrona zachowana.',
        'Technologia podwójnego utwardzania dla OEM i przemysłu metalowego: szybkie utwardzanie na wskroś i twarde, trwałe wykończenie, szybciej gotowe do obróbki.',
        'Wytrzymała ochrona antykorozyjna dla stali i infrastruktury — wysoka wydajność w cieńszych, inteligentniejszych warstwach.',
        'Wodorozcieńczalne powłoki o niskiej emisji, które chronią bez obciążenia rozpuszczalnikami — czyściej w pracy i w powietrzu.',
        'Jednoskładnikowe biobazowe powłoki alkidowe — antykorozyjna ochrona w kolorze dla konstrukcji stalowych, łatwa i szybka w aplikacji.'],
      ro: [
        'Acoperiri industriale pe bază de materii prime vegetale și fluxuri reziduale — chimia fosilă eliminată, protecția păstrată.',
        'Tehnologie cu întărire dublă pentru OEM și industria metalică: întărire rapidă în profunzime și un finisaj dur, durabil, gata de manipulare mai devreme.',
        'Protecție anticorozivă de mare rezistență pentru oțel și infrastructură — performanță high-build în straturi mai subțiri și mai inteligente.',
        'Acoperiri pe bază de apă, cu emisii reduse, care protejează fără încărcătura de solvenți — mai curate la lucru și în aer.',
        'Acoperiri alchidice biobazate monocomponent — protecție anticorozivă în culoare pentru construcții din oțel, ușor și rapid de aplicat.'] }],
    ['.ranges-note', {
      nl: 'Ook: <strong>FleetSpec</strong> (VS). <a href="products/">Bekijk alle producten →</a>',
      pl: 'Również: <strong>FleetSpec</strong> (USA). <a href="products/">Zobacz wszystkie produkty →</a>',
      ro: 'De asemenea: <strong>FleetSpec</strong> (SUA). <a href="products/">Vezi toate produsele →</a>' }],
    ['.renew-cap', {
      nl: 'Bescherming, met precisie aangebracht — met technisch advies en Baril Academy-training.',
      pl: 'Ochrona nakładana z precyzją — ze wsparciem technicznym i szkoleniami Baril Academy.',
      ro: 'Protecție aplicată cu precizie — susținută de consultanță tehnică și instruire Baril Academy.' }],
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
      nl: 'Sleep om te ontdekken · <a href="cases/">Alle cases →</a>',
      pl: 'Przeciągnij, aby przeglądać · <a href="cases/">Wszystkie realizacje →</a>',
      ro: 'Trage pentru a explora · <a href="cases/">Toate studiile de caz →</a>' }],
    ['#data .eyebrow', { nl: 'Datasheet', pl: 'Karta danych', ro: 'Fișă tehnică' }],
    ['#data h2', { nl: 'Baril Coatings<br>in cijfers', pl: 'Baril Coatings<br>w liczbach', ro: 'Baril Coatings<br>în cifre' }],
    ['.sheet-row b', {
      nl: ['Opgericht', 'Productie', 'Bereik', 'Markten', 'Assortiment', 'Normen', 'Managementsystemen', 'Circulaire doelstelling', 'Ondersteuning', 'Onderdeel van'],
      pl: ['Założona', 'Produkcja', 'Zasięg', 'Rynki', 'Gamy', 'Normy', 'Systemy zarządzania', 'Cel obiegu zamkniętego', 'Wsparcie', 'Część'],
      ro: ['Înființată', 'Producție', 'Acoperire', 'Piețe', 'Game', 'Standarde', 'Sisteme de management', 'Țintă circulară', 'Suport', 'Parte din'] }],
    ['.sheet-row span', {
      nl: [
        "1987 · 's-Hertogenbosch, Nederland <em>— onderdeel van Baril Group</em>",
        'Nederland · Verenigde Staten · Polen',
        'Gebruikt in 20+ landen via lokale distributeurs',
        'Staal & infrastructuur · OEM & metaalindustrie · Marine & offshore · Schildersbedrijven',
        'Biobased · DualCure · SteelKote · Aquaran · Bariline · FleetSpec (VS)',
        'ISO 12944-corrosieklassen · NORSOK M-501 <em>offshore</em>',
        'ISO 9001 <em>kwaliteit</em> · ISO 14001 <em>milieu</em> · ISO 45001 <em>veiligheid</em>',
        '100% circulaire grondstoffen in 2030 <em>— 55% vandaag, vanaf &lt;10% in 2022</em>',
        'Technisch advies · specificatiehulp · applicateurstraining via Baril Academy · altijd actuele veiligheidsinformatie',
        'Baril Group <em>— met Copperant en Fairf</em>'],
      pl: [
        "1987 · 's-Hertogenbosch, Holandia <em>— część Baril Group</em>",
        'Holandia · Stany Zjednoczone · Polska',
        'Stosowane w 20+ krajach przez lokalnych dystrybutorów',
        'Stal i infrastruktura · Przemysł OEM i metalowy · Morskie i offshore · Firmy malarskie',
        'Biobased · DualCure · SteelKote · Aquaran · Bariline · FleetSpec (USA)',
        'Klasy korozyjności ISO 12944 · NORSOK M-501 <em>offshore</em>',
        'ISO 9001 <em>jakość</em> · ISO 14001 <em>środowisko</em> · ISO 45001 <em>bezpieczeństwo</em>',
        '100% surowców w obiegu zamkniętym do 2030 <em>— 55% dziś, z &lt;10% w 2022</em>',
        'Doradztwo techniczne · pomoc w specyfikacji · szkolenia wykonawców Baril Academy · zawsze aktualne dane bezpieczeństwa',
        'Baril Group <em>— z Copperant i Fairf</em>'],
      ro: [
        "1987 · 's-Hertogenbosch, Țările de Jos <em>— parte din Baril Group</em>",
        'Țările de Jos · Statele Unite · Polonia',
        'Utilizat în peste 20 de țări prin distribuitori locali',
        'Oțel și infrastructură · Industrie OEM și metalică · Maritim și offshore · Firme de vopsire',
        'Biobased · DualCure · SteelKote · Aquaran · Bariline · FleetSpec (SUA)',
        'Clase de corozivitate ISO 12944 · NORSOK M-501 <em>offshore</em>',
        'ISO 9001 <em>calitate</em> · ISO 14001 <em>mediu</em> · ISO 45001 <em>siguranță</em>',
        '100% materii prime circulare până în 2030 <em>— 55% astăzi, de la &lt;10% în 2022</em>',
        'Consultanță tehnică · ajutor la specificații · instruire aplicatori Baril Academy · date de siguranță mereu actuale',
        'Baril Group <em>— cu Copperant și Fairf</em>'] }],
    ['#commit .eyebrow', { nl: 'Gecertificeerd & betrokken', pl: 'Certyfikowani i zaangażowani', ro: 'Certificați și implicați' }],
    ['#commit h3', { nl: 'Een Certified B Corporation', pl: 'Certyfikowana B Corporation', ro: 'O corporație B certificată' }],
    ['#commit .commit-desc', {
      nl: "Sinds 2025 — een van de eerste protective-coatingsmakers ter wereld die voldoet aan de geverifieerde B Corp-normen, en actief op 12 duurzame-ontwikkelingsdoelen (SDG's) van de VN als onderdeel van Baril Group.",
      pl: 'Od 2025 — jeden z pierwszych producentów powłok ochronnych na świecie spełniający zweryfikowane standardy B Corp, aktywny w 12 Celach Zrównoważonego Rozwoju ONZ w ramach Baril Group.',
      ro: 'Din 2025 — printre primii producători de acoperiri de protecție din lume care îndeplinesc standardele verificate B Corp, activ în 12 Obiective de Dezvoltare Durabilă ONU, ca parte din Baril Group.' }],
    ['#commit .commit-link', { nl: 'Bekijk het bij Baril Group →', pl: 'Zobacz w Baril Group →', ro: 'Vezi pe Baril Group →' }],
    ['#commit .commit-sdg-k', { nl: "Duurzame-ontwikkelingsdoelen van de VN", pl: 'Cele Zrównoważonego Rozwoju ONZ', ro: 'Obiectivele de Dezvoltare Durabilă ONU' }],
    ['#sources .eyebrow', { nl: 'Bronnen & onderbouwing', pl: 'Źródła i uzasadnienie', ro: 'Surse și fundamentare' }],
    ['.src li', {
      nl: [
        'Duurzaamheid van corrosiebescherming en corrosiviteitsklassen (C1–C5, Im1–Im3): ISO 12944-serie; offshore: ISO 12944-9 / NORSOK M-501.',
        'Markten, productielocaties en assortimenten — barilcoatings.com · barilcoatings.us.',
        'Status circulaire grondstoffen (55% vandaag, &lt;10% in 2022, doel 100% in 2030): Baril Group, 2026.',
        'Cijfers voor dekking en droge-laagdikte zijn illustratief; werkelijke waarden hangen af van product, ondergrond, methode en specificatie.'],
      pl: [
        'Trwałość ochrony antykorozyjnej i klasy korozyjności (C1–C5, Im1–Im3): seria ISO 12944; offshore: ISO 12944-9 / NORSOK M-501.',
        'Rynki, zakłady produkcyjne i gamy produktów — barilcoatings.com · barilcoatings.us.',
        'Status surowców w obiegu zamkniętym (55% dziś, &lt;10% w 2022, cel 100% do 2030): Baril Group, 2026.',
        'Dane wydajności i grubości suchej powłoki są poglądowe; rzeczywiste wartości zależą od produktu, podłoża, metody i specyfikacji.'],
      ro: [
        'Durabilitatea protecției anticorozive și clasele de corozivitate (C1–C5, Im1–Im3): seria ISO 12944; offshore: ISO 12944-9 / NORSOK M-501.',
        'Piețe, unități de producție și game de produse — barilcoatings.com · barilcoatings.us.',
        'Statutul materiilor prime circulare (55% astăzi, &lt;10% în 2022, obiectiv 100% până în 2030): Baril Group, 2026.',
        'Cifrele de acoperire și grosime a peliculei uscate sunt ilustrative; valorile reale depind de produs, suport, metodă și specificație.'] }],
    ['.foot-claim', { nl: 'Duurzame coatingoplossingen.', pl: 'Zrównoważone rozwiązania powłokowe.', ro: 'Soluții de acoperire durabile.' }],
    ['.foot-grid h5', { nl: ['Catalogus', 'Baril Coatings'], pl: ['Katalog', 'Baril Coatings'], ro: ['Catalog', 'Baril Coatings'] }],
    ['.foot-grid div:nth-child(2) a', {
      nl: ['Alle producten →', 'Verfsystemen →', 'Markten →', 'Cases →'],
      pl: ['Wszystkie produkty →', 'Systemy malarskie →', 'Rynki →', 'Realizacje →'],
      ro: ['Toate produsele →', 'Sisteme de vopsire →', 'Piețe →', 'Studii de caz →'] }],
    ['.foot-grid div:nth-child(3) a', {
      nl: ['Over ons', 'Bescherming', 'DualCure-technologie', 'Contact'],
      pl: ['O nas', 'Ochrona', 'Technologia DualCure', 'Kontakt'],
      ro: ['Despre noi', 'Protecție', 'Tehnologia DualCure', 'Contact'] }],
    ['.foot-bottom span', {
      nl: ["© Baril Coatings · 's-Hertogenbosch NL · onderdeel van Baril Group", 'Minder coating. Langere levensduur. Lagere impact.'],
      pl: ["© Baril Coatings · 's-Hertogenbosch NL · część Baril Group", 'Mniej powłoki. Dłuższa żywotność. Mniejszy wpływ.'],
      ro: ["© Baril Coatings · 's-Hertogenbosch NL · parte din Baril Group", 'Mai puțină acoperire. Viață mai lungă. Impact mai mic.'] }]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('baril-coatings-lang') || 'en'; } catch (e) {}
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
    try { localStorage.setItem('baril-coatings-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
