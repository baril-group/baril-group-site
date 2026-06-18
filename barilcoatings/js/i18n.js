/* Language switch for the one-pager. English is the authored language (captured
   from the DOM); NL / PL / RO / DE / FR live in the MAP below as
   [selector, {nl, pl, ro, de, fr}]. A value may be a string (first match) or
   an array (one per matched element). */
(() => {
  'use strict';
  const MAP = [
    ['.navlinks a', {
      nl: ['Producten', 'Verfsystemen', 'Markten', 'Cases', 'Technologie', 'Contact'],
      pl: ['Produkty', 'Systemy malarskie', 'Rynki', 'Realizacje', 'Technologia', 'Kontakt'],
      ro: ['Produse', 'Sisteme de vopsire', 'Piețe', 'Studii de caz', 'Tehnologie', 'Contact'],
      de: ['Produkte', 'Lacksysteme', 'Märkte', 'Referenzen', 'Technologie', 'Kontakt'],
      fr: ['Produits', 'Systèmes de peinture', 'Marchés', 'Études de cas', 'Technologie', 'Contact'] }],
    ['header .eyebrow', {
      nl: "Baril Coatings — Industriële & beschermende coatings · Sinds 1987",
      pl: "Baril Coatings — Powłoki przemysłowe i ochronne · Od 1987",
      ro: "Baril Coatings — Acoperiri industriale și de protecție · Din 1987",
      de: "Baril Coatings — Industrie- & Schutzbeschichtungen · Seit 1987",
      fr: "Baril Coatings — Revêtements industriels et de protection · Depuis 1987" }],
    ['header h1', {
      nl: 'Duurzame<br><span class="paint">coating-</span><br>oplossingen',
      pl: 'Zrównoważone<br><span class="paint">rozwiązania</span><br>powłokowe',
      ro: 'Soluții de<br><span class="paint">acoperire</span><br>durabile',
      de: 'Nachhaltige<br><span class="paint">Beschichtungs-</span><br>lösungen',
      fr: 'Des solutions de<br><span class="paint">revêtement</span><br>durables' }],
    ['.hero-sub', {
      nl: 'Ontwikkelaar en producent van hoogwaardige, zeer duurzame industriële coatings en bouwverven — <strong>staal langer beschermen, met dunnere, schonere lagen</strong>.',
      pl: 'Twórca i producent najwyższej jakości, wyjątkowo trwałych powłok przemysłowych i farb budowlanych — <strong>chronimy stal dłużej, cieńszymi i czystszymi warstwami</strong>.',
      ro: 'Dezvoltator și producător de acoperiri industriale și vopsele pentru construcții premium, foarte durabile — <strong>protejăm oțelul mai mult timp, cu straturi mai subțiri și mai curate</strong>.',
      de: 'Entwickler und Hersteller hochwertiger, äußerst langlebiger Industriebeschichtungen und Bautenfarben — <strong>Stahl länger schützen, mit dünneren, saubereren Schichten</strong>.',
      fr: 'Concepteur et fabricant de revêtements industriels et de peintures du bâtiment haut de gamme et très durables — <strong>protéger l\'acier plus longtemps, avec des couches plus fines et plus propres</strong>.' }],
    ['.hero-cta .btn-solid', { nl: 'Bekijk de markten', pl: 'Zobacz rynki', ro: 'Explorează piețele', de: 'Märkte ansehen', fr: 'Voir les marchés' }],
    ['.hero-cta .btn-ghost', { nl: 'Hoe bescherming werkt', pl: 'Jak działa ochrona', ro: 'Cum funcționează protecția', de: 'Wie Schutz funktioniert', fr: 'Comment fonctionne la protection' }],
    ['.hero-foot span:first-child', {
      nl: 'Staal & infrastructuur · OEM & metaal · Marine & offshore · Schildersbedrijven',
      pl: 'Stal i infrastruktura · OEM i metal · Morskie i offshore · Firmy malarskie',
      ro: 'Oțel și infrastructură · OEM și metal · Maritim și offshore · Firme de vopsire',
      de: 'Stahl & Infrastruktur · OEM & Metall · Marine & Offshore · Malerbetriebe',
      fr: 'Acier et infrastructure · OEM et métal · Marine et offshore · Entreprises de peinture' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează', de: 'Scrollen', fr: 'Défiler' }],
    ['#about .eyebrow', { nl: 'Wie we zijn', pl: 'Kim jesteśmy', ro: 'Cine suntem', de: 'Wer wir sind', fr: 'Qui nous sommes' }],
    ['.mission-quote', {
      nl: 'Wij maken coatings waarmee staal en constructies <em>langer meegaan met minder</em> — hoogwaardige corrosiebescherming, ontwikkeld op chemisch niveau en aangebracht in dunnere lagen. De prestaties die je van industriële coatings verwacht, op een hernieuwbaar pad.',
      pl: 'Tworzymy powłoki, dzięki którym stal i konstrukcje <em>służą dłużej przy mniejszym zużyciu</em> — najwyższej klasy ochrona antykorozyjna, zaprojektowana na poziomie chemii i nakładana w cieńszych warstwach. Wydajność, jakiej oczekujesz od powłok przemysłowych, na drodze ku odnawialności.',
      ro: 'Producem acoperiri care fac oțelul și structurile să <em>reziste mai mult cu mai puțin</em> — protecție anticorozivă premium, concepută la nivel chimic și aplicată în pelicule mai subțiri. Performanța pe care o aștepți de la acoperirile industriale, pe un drum regenerabil.',
      de: 'Wir machen Beschichtungen, mit denen Stahl und Konstruktionen <em>länger halten mit weniger</em> — hochwertiger Korrosionsschutz, auf chemischer Ebene entwickelt und in dünneren Schichten aufgetragen. Die Leistung, die man von Industriebeschichtungen erwartet, auf einem erneuerbaren Weg.',
      fr: 'Nous fabriquons des revêtements qui font <em>durer l\'acier et les structures plus longtemps avec moins</em> — une protection anticorrosion haut de gamme, conçue au niveau de la chimie et appliquée en couches plus fines. Les performances attendues des revêtements industriels, sur une voie renouvelable.' }],
    ['#about .mm b', {
      nl: ['Langer beschermen', 'Minder coating', 'Hernieuwbare chemie', 'Gecertificeerd'],
      pl: ['Dłuższa ochrona', 'Mniej powłoki', 'Odnawialna chemia', 'Certyfikowane'],
      ro: ['Protecție mai lungă', 'Mai puțină acoperire', 'Chimie regenerabilă', 'Certificat'],
      de: ['Länger schützen', 'Weniger Beschichtung', 'Erneuerbare Chemie', 'Zertifiziert'],
      fr: ['Protéger plus longtemps', 'Moins de revêtement', 'Chimie renouvelable', 'Certifié'] }],
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
        'ISO 9001, 14001 și 45001. Aprobări de produs până la NORSOK M-501 pentru offshore — dovedite în cele mai dure medii.'],
      de: [
        'Dünnschicht-Korrosionsschutz verlängert die Lebensdauer von Stahl, Infrastruktur und Anlagen — bis zu den höchsten ISO-12944-Klassen.',
        'Mehr Deckung pro Liter bei geringerer Schichtdicke — weniger Wartungszyklen, ein kleinerer Fußabdruck pro geschütztem m².',
        'Biobasierte und zirkuläre Rohstoffe ersetzen fossile Chemie, Schritt für Schritt — von &lt;10% im Jahr 2022 auf 100% bis 2030.',
        'ISO 9001, 14001 und 45001. Produktzulassungen bis NORSOK M-501 für Offshore — bewährt in den härtesten Umgebungen.'],
      fr: [
        'La protection anticorrosion en couche mince prolonge la durée de vie de l\'acier, des infrastructures et des installations — jusqu\'aux plus hautes classes ISO 12944.',
        'Plus de couverture par litre à une épaisseur de film réduite — moins de cycles d\'entretien, une empreinte plus faible par m² protégé.',
        'Des matières premières biosourcées et circulaires remplacent la chimie fossile, étape par étape — de &lt;10% en 2022 à 100% en 2030.',
        'ISO 9001, 14001 et 45001. Agréments produits jusqu\'à NORSOK M-501 pour l\'offshore — éprouvés dans les environnements les plus exigeants.'] }],
    ['#corrosion .eyebrow', { nl: 'Hoofdstuk 04 · Corrosiebescherming', pl: 'Rozdział 04 · Ochrona antykorozyjna', ro: 'Capitolul 04 · Protecție anticorozivă', de: 'Kapitel 04 · Korrosionsschutz', fr: 'Chapitre 04 · Protection anticorrosion' }],
    ['#corrosion h2', { nl: 'Van roest<br>naar weerbaarheid', pl: 'Od rdzy<br>do odporności', ro: 'De la rugină<br>la reziliență', de: 'Von Rost<br>zu Widerstandskraft', fr: 'De la rouille<br>à la résilience' }],
    ['#corrosion .sec-head p:last-child', {
      nl: 'Corrosie is een langzaam vuur: onbeschermd staal verliest jaarlijks tientallen micrometers, en constructies worden ruim voor hun tijd vervangen. Een Baril-beschermingssysteem sluit het staal af van zuurstof en water — en wint decennia. Scroll om de coating aan te brengen.',
      pl: 'Korozja to powolny ogień: niezabezpieczona stal traci dziesiątki mikronów rocznie, a konstrukcje wymienia się na długo przed czasem. System ochronny Baril odcina stal od tlenu i wody — i zyskuje dziesięciolecia. Przewiń, aby nałożyć powłokę.',
      ro: 'Coroziunea este un foc lent: oțelul neprotejat pierde zeci de microni pe an, iar structurile sunt înlocuite cu mult înainte de vreme. Un sistem de protecție Baril izolează oțelul de oxigen și apă — și câștigă decenii. Derulează pentru a aplica acoperirea.',
      de: 'Korrosion ist ein langsames Feuer: ungeschützter Stahl verliert jährlich Dutzende Mikrometer, und Konstruktionen werden lange vor ihrer Zeit ersetzt. Ein Baril-Schutzsystem schließt den Stahl von Sauerstoff und Wasser ab — und gewinnt Jahrzehnte. Scrolle, um die Beschichtung aufzutragen.',
      fr: 'La corrosion est un feu lent : l\'acier non protégé perd des dizaines de micromètres par an, et les structures sont remplacées bien avant l\'heure. Un système de protection Baril isole l\'acier de l\'oxygène et de l\'eau — et gagne des décennies. Faites défiler pour appliquer le revêtement.' }],
    ['#corrosion .cr .cl', {
      nl: ['Tot eerste groot onderhoud', 'Tot de hoogste ISO 12944-corrosiviteitsklassen', 'Gekwalificeerde systemen voor offshore-staal'],
      pl: ['Do pierwszej dużej konserwacji', 'Aż do najwyższych klas korozyjności ISO 12944', 'Kwalifikowane systemy do stali offshore'],
      ro: ['Până la prima întreținere majoră', 'Până la cele mai înalte clase de corozivitate ISO 12944', 'Sisteme calificate pentru oțel offshore'],
      de: ['Bis zur ersten großen Wartung', 'Bis zu den höchsten ISO-12944-Korrosivitätsklassen', 'Qualifizierte Systeme für Offshore-Stahl'],
      fr: ['Jusqu\'à la première maintenance majeure', 'Jusqu\'aux plus hautes classes de corrosivité ISO 12944', 'Systèmes qualifiés pour l\'acier offshore'] }],
    ['#thinlayer .eyebrow', { nl: 'Hoofdstuk 02 · Dunne-laag-technologie', pl: 'Rozdział 02 · Technologia cienkowarstwowa', ro: 'Capitolul 02 · Tehnologie în strat subțire', de: 'Kapitel 02 · Dünnschicht-Technologie', fr: 'Chapitre 02 · Technologie en couche mince' }],
    ['#thinlayer h2', { nl: 'Meer meters,<br>minder coating', pl: 'Więcej metrów,<br>mniej powłoki', ro: 'Mai mulți metri,<br>mai puțină acoperire', de: 'Mehr Meter,<br>weniger Beschichtung', fr: 'Plus de mètres,<br>moins de revêtement' }],
    ['#thinlayer .sec-head p:last-child', {
      nl: 'De kracht van een coating zit niet in de dikte, maar in hoe goed ze is opgebouwd. Onze dunne-laag-technologie beschermt meer vierkante meters per liter, bij een lagere laagdikte — minder materiaal op de constructie, minder blikken op de vrachtwagen, een kleinere voetafdruk per beschermde m².',
      pl: 'Siła powłoki nie tkwi w jej grubości, lecz w tym, jak dobrze jest zbudowana. Nasza technologia cienkowarstwowa chroni więcej metrów kwadratowych z każdego litra, przy niższej grubości suchej powłoki — mniej materiału na konstrukcji, mniej puszek na ciężarówce, mniejszy ślad na chroniony m².',
      ro: 'Puterea unei acoperiri nu stă în grosime, ci în cât de bine este construită. Tehnologia noastră în strat subțire protejează mai mulți metri pătrați din fiecare litru, la o grosime mai mică a peliculei uscate — mai puțin material pe structură, mai puține cutii în camion, o amprentă mai mică pe m² protejat.',
      de: 'Die Stärke einer Beschichtung liegt nicht in der Dicke, sondern darin, wie gut sie aufgebaut ist. Unsere Dünnschicht-Technologie schützt mehr Quadratmeter pro Liter bei geringerer Schichtdicke — weniger Material auf der Konstruktion, weniger Dosen auf dem Lkw, ein kleinerer Fußabdruck pro geschütztem m².',
      fr: 'La force d\'un revêtement ne tient pas à son épaisseur, mais à la qualité de sa construction. Notre technologie en couche mince protège plus de mètres carrés par litre, à une épaisseur de film réduite — moins de matière sur la structure, moins de bidons dans le camion, une empreinte plus faible par m² protégé.' }],
    ['.cov-readout .cl', { nl: 'Beschermd per liter, bij de aanbevolen laagdikte', pl: 'Ochrona na litr, przy zalecanej grubości powłoki', ro: 'Protecție pe litru, la grosimea recomandată a peliculei', de: 'Geschützt pro Liter, bei empfohlener Schichtdicke', fr: 'Protégé par litre, à l\'épaisseur de film recommandée' }],
    ['.dft-name', { nl: ['Conventionele laagdikte', 'Baril dunne laag'], pl: ['Powłoka konwencjonalna', 'Baril cienka warstwa'], ro: ['Strat convențional', 'Baril strat subțire'], de: ['Konventionelle Schichtdicke', 'Baril Dünnschicht'], fr: ['Épaisseur conventionnelle', 'Baril couche mince'] }],
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
        'DualCure (DCC) brevetat. Cifrele de performanță conform datelor tehnice Baril Coatings; protecția realizabilă depinde de sistem, suport și specificație.'],
      de: [
        'Indikative Dauerhaftigkeit. Der erreichbare Schutz hängt von System, Untergrundvorbehandlung und Korrosivitätsklasse nach ISO 12944 / ISO 12944-9 (Offshore) ab.',
        'Die Trockenschichtdicke ist illustrativ; tatsächliche Deckung und TSD hängen von Produkt, Methode und Spezifikation ab.',
        'Patentiertes DualCure (DCC). Leistungswerte gemäß technischen Daten von Baril Coatings; der erreichbare Schutz hängt von System, Untergrund und Spezifikation ab.'],
      fr: [
        'Durabilité indicative. La protection atteignable dépend du système, de la préparation du support et de la classe de corrosivité selon ISO 12944 / ISO 12944-9 (offshore).',
        'L\'épaisseur de film sec est illustrative ; la couverture réelle et l\'EFS dépendent du produit, de la méthode et de la spécification.',
        'DualCure (DCC) breveté. Chiffres de performance selon les données techniques de Baril Coatings ; la protection atteignable dépend du système, du support et de la spécification.'] }],
    ['#bio .eyebrow', { nl: 'Hoofdstuk 03 · Hernieuwbare chemie', pl: 'Rozdział 03 · Odnawialna chemia', ro: 'Capitolul 03 · Chimie regenerabilă', de: 'Kapitel 03 · Erneuerbare Chemie', fr: 'Chapitre 03 · Chimie renouvelable' }],
    ['#bio h2', { nl: 'Van vat<br>naar bio', pl: 'Z beczki<br>do bio', ro: 'De la baril<br>la bio', de: 'Vom Fass<br>zu Bio', fr: 'Du baril<br>au bio' }],
    ['#bio .sec-head p:last-child', {
      nl: 'Elke liter coating is chemie: bindmiddel, oplosmiddel, pigment, additieven — een eeuw lang gebaseerd op ruwe olie. Wij zetten onze industriële coatings om naar hernieuwbare en circulaire grondstoffen, van minder dan 10% in 2022 naar 55% vandaag, op weg naar 100% in 2030. Dezelfde bescherming. Lagere impact.',
      pl: 'Każdy litr powłoki to chemia: spoiwo, rozpuszczalnik, pigment, dodatki — przez stulecie na bazie ropy naftowej. Przekształcamy nasze powłoki przemysłowe na surowce odnawialne i w obiegu zamkniętym, z mniej niż 10% w 2022 do 55% dziś, w drodze do 100% w 2030. Ta sama ochrona. Mniejszy wpływ.',
      ro: 'Fiecare litru de acoperire este chimie: liant, solvent, pigment, aditivi — timp de un secol, pe bază de petrol. Ne transformăm acoperirile industriale către materii prime regenerabile și circulare, de la mai puțin de 10% în 2022 la 55% astăzi, pe drumul către 100% în 2030. Aceeași protecție. Impact mai mic.',
      de: 'Jeder Liter Beschichtung ist Chemie: Bindemittel, Lösemittel, Pigment, Additive — ein Jahrhundert lang auf Erdölbasis. Wir stellen unsere Industriebeschichtungen auf erneuerbare und zirkuläre Rohstoffe um, von weniger als 10% im Jahr 2022 auf 55% heute, auf dem Weg zu 100% bis 2030. Gleicher Schutz. Geringere Auswirkung.',
      fr: 'Chaque litre de revêtement est de la chimie : liant, solvant, pigment, additifs — pendant un siècle, à base de pétrole. Nous convertissons nos revêtements industriels vers des matières premières renouvelables et circulaires, de moins de 10% en 2022 à 55% aujourd\'hui, en route vers 100% en 2030. La même protection. Un impact moindre.' }],
    ['#bio .ctr .yr', { nl: 'vandaag', pl: 'dziś', ro: 'astăzi', de: 'heute', fr: 'aujourd\'hui' }],
    ['#bio .ctr:nth-child(2) b', { nl: '100% in 2030', pl: '100% do 2030', ro: '100% până în 2030', de: '100% bis 2030', fr: '100% en 2030' }],
    ['#bio .ctr:nth-child(3) b', { nl: 'Gelijk of beter', pl: 'Tak samo lub lepiej', ro: 'La fel sau mai bine', de: 'Gleich oder besser', fr: 'Égal ou meilleur' }],
    ['#bio .ctr .cl', {
      nl: ['Hernieuwbare & circulaire grondstoffen', 'Groepsdoel — vanaf &lt;10% in 2022', 'Bescherming, bij lagere laagdikte'],
      pl: ['Surowce odnawialne i w obiegu zamkniętym', 'Cel grupy — z &lt;10% w 2022', 'Ochrona, przy niższej grubości powłoki'],
      ro: ['Materii prime regenerabile și circulare', 'Obiectivul grupului — de la &lt;10% în 2022', 'Protecție, la o grosime mai mică'],
      de: ['Erneuerbare & zirkuläre Rohstoffe', 'Gruppenziel — ab &lt;10% im Jahr 2022', 'Schutz, bei geringerer Schichtdicke'],
      fr: ['Matières premières renouvelables et circulaires', 'Objectif du groupe — depuis &lt;10% en 2022', 'Protection, à une épaisseur réduite'] }],
    ['#dualcure .eyebrow', { nl: 'Hoofdstuk 01 · DualCure-technologie', pl: 'Rozdział 01 · Technologia DualCure', ro: 'Capitolul 01 · Tehnologia DualCure', de: 'Kapitel 01 · DualCure-Technologie', fr: 'Chapitre 01 · Technologie DualCure' }],
    ['#dualcure h2', { nl: 'Twee uithardingen,<br>één netwerk', pl: 'Dwa utwardzania,<br>jedna sieć', ro: 'Două întăriri,<br>o singură rețea', de: 'Zwei Aushärtungen,<br>ein Netzwerk', fr: 'Deux durcissements,<br>un seul réseau' }],
    ['#dualcure .sec-head p:last-child', {
      nl: 'De meeste industriële coatings harden op één manier uit. Onze gepatenteerde <strong>DualCure (DCC)</strong> hardt tegelijk op twee manieren uit: de chemische 2K-reactie van componenten A en B, <em>én</em> een tweede uitharding die op gang komt door vocht uit de lucht. De twee netwerken weven zich tot één uitzonderlijk dichte moleculaire mesh — hechter <em>én</em> flexibeler dan regulier 2K. Het resultaat: een veelvoud aan bescherming, met aanzienlijk minder coating.',
      pl: 'Większość powłok przemysłowych utwardza się w jeden sposób. Nasza opatentowana <strong>DualCure (DCC)</strong> utwardza się jednocześnie na dwa sposoby: chemiczna reakcja 2K komponentów A i B, <em>oraz</em> drugie utwardzanie wywołane wilgocią z powietrza. Obie sieci splatają się w jedną wyjątkowo gęstą molekularną siatkę — wiążąc mocniej <em>i</em> pozostając bardziej elastyczne niż zwykłe 2K. Rezultat: wielokrotnie większa ochrona przy znacznie mniejszej ilości powłoki.',
      ro: 'Majoritatea acoperirilor industriale se întăresc într-un singur mod. <strong>DualCure (DCC)</strong> brevetat se întărește în două moduri simultan: reacția chimică 2K a componentelor A și B, <em>plus</em> o a doua întărire declanșată de umiditatea din aer. Cele două rețele se împletesc într-o rețea moleculară excepțional de densă — legături mai strânse <em>și</em> mai multă flexibilitate decât 2K obișnuit. Rezultatul: o protecție de mai multe ori mai mare, cu mult mai puțină acoperire.',
      de: 'Die meisten Industriebeschichtungen härten auf eine Art aus. Unser patentiertes <strong>DualCure (DCC)</strong> härtet gleichzeitig auf zwei Arten aus: die chemische 2K-Reaktion der Komponenten A und B, <em>und</em> eine zweite Aushärtung, die durch Luftfeuchtigkeit ausgelöst wird. Die beiden Netzwerke verweben sich zu einem außergewöhnlich dichten molekularen Geflecht — fester <em>und</em> flexibler als reguläres 2K. Das Ergebnis: ein Vielfaches an Schutz, mit deutlich weniger Beschichtung.',
      fr: 'La plupart des revêtements industriels durcissent d\'une seule manière. Notre <strong>DualCure (DCC)</strong> breveté durcit simultanément de deux manières : la réaction chimique 2K des composants A et B, <em>et</em> un second durcissement déclenché par l\'humidité de l\'air. Les deux réseaux se tissent en un maillage moléculaire exceptionnellement dense — plus cohésif <em>et</em> plus souple qu\'un 2K classique. Résultat : une protection démultipliée, avec nettement moins de revêtement.' }],
    ['#dualcure .dcc-legend .lg', {
      nl: ['Chemische 2K-uitharding (A+B)', 'Vochtuitharding uit de lucht'],
      pl: ['Chemiczne utwardzanie 2K (A+B)', 'Utwardzanie wilgocią z powietrza'],
      ro: ['Întărire chimică 2K (A+B)', 'Întărire cu umiditate din aer'],
      de: ['Chemische 2K-Aushärtung (A+B)', 'Feuchtigkeitsaushärtung aus der Luft'],
      fr: ['Durcissement chimique 2K (A+B)', 'Durcissement par l\'humidité de l\'air'] }],
    ['#dualcure .cr .cl', {
      nl: ['Dunner dan conventioneel — bij gelijke bescherming', 'Bij 200 µm totaal · NORSOK-gecertificeerd voor offshore', 'Procestijd · uithardt in ~30 min, zonder warmte, low-VOC'],
      pl: ['Cieńsza niż konwencjonalna — przy tej samej ochronie', 'Przy 200 µm łącznie · certyfikat NORSOK dla offshore', 'Czas procesu · utwardza w ~30 min, bez ciepła, niska LZO'],
      ro: ['Mai subțire decât convențional — la aceeași protecție', 'La 200 µm total · certificat NORSOK pentru offshore', 'Timp de proces · se întărește în ~30 min, fără căldură, COV redus'],
      de: ['Dünner als konventionell — bei gleichem Schutz', 'Bei 200 µm gesamt · NORSOK-zertifiziert für Offshore', 'Prozesszeit · härtet in ~30 Min., ohne Wärme, low-VOC'],
      fr: ['Plus mince que le conventionnel — à protection égale', 'À 200 µm au total · certifié NORSOK pour l\'offshore', 'Temps de process · durcit en ~30 min, sans chaleur, faible COV'] }],
    ['#dualcure .net-name', { nl: ['Regulier 2K', 'DualCure'], pl: ['Zwykłe 2K', 'DualCure'], ro: ['2K obișnuit', 'DualCure'], de: ['Reguläres 2K', 'DualCure'], fr: ['2K classique', 'DualCure'] }],
    ['#dualcure .net-val', { nl: ['enkel netwerk', 'dubbel netwerk'], pl: ['pojedyncza sieć', 'podwójna sieć'], ro: ['rețea simplă', 'rețea dublă'], de: ['einfaches Netzwerk', 'doppeltes Netzwerk'], fr: ['réseau simple', 'réseau double'] }],
    ['#markets .eyebrow', { nl: 'Markten', pl: 'Rynki', ro: 'Piețe', de: 'Märkte', fr: 'Marchés' }],
    ['#markets h2', { nl: 'Gebouwd voor de<br>zwaarste klussen', pl: 'Stworzone do<br>najtrudniejszych zadań', ro: 'Construite pentru<br>cele mai grele lucrări', de: 'Gebaut für die<br>härtesten Aufgaben', fr: 'Conçus pour les<br>travaux les plus durs' }],
    ['#markets .sec-head p:last-child', {
      nl: 'Van nationale infrastructuur tot offshore-platforms — overal waar staal lang mee moet, worden onze coatings voorgeschreven.',
      pl: 'Od infrastruktury krajowej po platformy offshore — wszędzie tam, gdzie stal musi przetrwać, stosuje się nasze powłoki.',
      ro: 'De la infrastructura națională la platforme offshore — oriunde oțelul trebuie să reziste, acoperirile noastre sunt specificate.',
      de: 'Von nationaler Infrastruktur bis zu Offshore-Plattformen — überall, wo Stahl lange halten muss, werden unsere Beschichtungen vorgeschrieben.',
      fr: 'De l\'infrastructure nationale aux plateformes offshore — partout où l\'acier doit durer, nos revêtements sont prescrits.' }],
    ['.brand .tag', {
      nl: ['Staal & infrastructuur', 'OEM & metaalindustrie', 'Marine & offshore', 'Schildersbedrijven'],
      pl: ['Stal i infrastruktura', 'Przemysł OEM i metalowy', 'Morskie i offshore', 'Firmy malarskie'],
      ro: ['Oțel și infrastructură', 'Industrie OEM și metalică', 'Maritim și offshore', 'Firme de vopsire'],
      de: ['Stahl & Infrastruktur', 'OEM & Metallindustrie', 'Marine & Offshore', 'Malerbetriebe'],
      fr: ['Acier et infrastructure', 'Industrie OEM et métal', 'Marine et offshore', 'Entreprises de peinture'] }],
    ['.brand h3', {
      nl: ['Staal & infra', 'OEM & metaal', 'Marine & offshore', 'Bouwverven'],
      pl: ['Stal i infra', 'OEM i metal', 'Morskie i offshore', 'Farby budowlane'],
      ro: ['Oțel și infra', 'OEM și metal', 'Maritim și offshore', 'Vopsele pentru construcții'],
      de: ['Stahl & Infra', 'OEM & Metall', 'Marine & Offshore', 'Bautenfarben'],
      fr: ['Acier et infra', 'OEM et métal', 'Marine et offshore', 'Peintures du bâtiment'] }],
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
        'O gamă completă de vopsele pentru construcții și întreținere pentru firme profesionale de vopsire — susținute de consultanță tehnică, instruirea aplicatorilor prin Baril Academy și informații de siguranță mereu actualizate.'],
      de: [
        'Brücken, Schleusen, Stadien und Zweckbau. Schwerer Korrosionsschutz, der tragenden Stahl jahrzehntelang im Einsatz hält, mit Wartungsintervallen von mehreren Jahrzehnten.',
        'Beschichtungssysteme für Maschinenbau, Anlagen und serielle Metallproduktion — schnell aushärtende, langlebige Finishes, entwickelt für die Linie und für das Feld danach.',
        'Schutz für die aggressivste Umgebung, die es gibt: Salz, Gischt und Eintauchen. Qualifizierte Systeme, die Offshore-Normen erfüllen und dort weiterarbeiten, wo Beschichtungen normalerweise versagen.',
        'Ein komplettes Sortiment an Bauten- und Wartungsfarben für professionelle Malerbetriebe — mit technischer Beratung, Applikatorschulung über die Baril Academy und stets aktuellen Sicherheitsinformationen.'],
      fr: [
        'Ponts, écluses, stades et bâtiments publics. Une protection anticorrosion lourde qui maintient l\'acier porteur en service pendant des décennies, avec des intervalles d\'entretien comptés en dizaines d\'années.',
        'Systèmes de revêtement pour la construction de machines, d\'installations et la production métallique en série — des finitions durables à durcissement rapide, conçues pour la ligne et pour le terrain ensuite.',
        'Une protection pour l\'environnement le plus agressif qui soit : sel, embruns et immersion. Des systèmes qualifiés conformes aux normes offshore, qui continuent d\'agir là où les revêtements échouent d\'ordinaire.',
        'Une gamme complète de peintures du bâtiment et d\'entretien pour les entreprises de peinture professionnelles — avec conseil technique, formation des applicateurs via la Baril Academy et des informations de sécurité toujours à jour.'] }],
    ['.spec b', { nl: ['Systemen', 'Systemen', 'Systemen', 'Ondersteuning'], pl: ['Systemy', 'Systemy', 'Systemy', 'Wsparcie'], ro: ['Sisteme', 'Sisteme', 'Sisteme', 'Suport'], de: ['Systeme', 'Systeme', 'Systeme', 'Unterstützung'], fr: ['Systèmes', 'Systèmes', 'Systèmes', 'Support'] }],
    ['#ranges .eyebrow', { nl: 'Assortiment', pl: 'Gama produktów', ro: 'Game de produse', de: 'Sortiment', fr: 'Gamme de produits' }],
    ['#ranges h2', { nl: 'Eén filosofie,<br>vele systemen', pl: 'Jedna filozofia,<br>wiele systemów', ro: 'O filozofie,<br>multe sisteme', de: 'Eine Philosophie,<br>viele Systeme', fr: 'Une philosophie,<br>de nombreux systèmes' }],
    ['#ranges .sec-head p:last-child', {
      nl: 'Elk assortiment brengt dezelfde chemie-eerst-aanpak naar een andere klus — ontwikkeld om langer te beschermen met minder.',
      pl: 'Każda gama przenosi to samo podejście „chemia przede wszystkim" na inne zadanie — zaprojektowana, by chronić dłużej przy mniejszym zużyciu.',
      ro: 'Fiecare gamă duce aceeași abordare „chimia mai întâi" către o altă aplicație — concepută să protejeze mai mult cu mai puțin.',
      de: 'Jedes Sortiment bringt denselben Chemie-zuerst-Ansatz zu einer anderen Aufgabe — entwickelt, um länger zu schützen mit weniger.',
      fr: 'Chaque gamme applique la même approche « la chimie d\'abord » à un autre usage — conçue pour protéger plus longtemps avec moins.' }],
    ['.pillar .pn', { nl: ['Hernieuwbaar', 'Snelle uitharding', 'Heavy-duty', 'Watergedragen', 'Enkelpak'], pl: ['Odnawialne', 'Szybkie utwardzanie', 'Wytrzymałe', 'Wodorozcieńczalne', 'Jednoskładnikowy'], ro: ['Regenerabil', 'Întărire rapidă', 'Rezistență mare', 'Pe bază de apă', 'Monocomponent'], de: ['Erneuerbar', 'Schnelle Aushärtung', 'Heavy-Duty', 'Wasserbasiert', 'Einkomponentig'], fr: ['Renouvelable', 'Durcissement rapide', 'Heavy-duty', 'Hydrodiluable', 'Monocomposant'] }],
    ['.pillar h4 + p', {
      nl: [
        'De circulaire filosofie van Baril Group vindt steeds meer haar weg over alle onderstaande productlijnen — fossiele chemie eruit ontworpen, de bescherming erin gehouden.',
        'Dual-cure-technologie voor OEM en metaalindustrie: snelle doorharding en een taaie, duurzame afwerking, sneller klaar voor verwerking.',
        'Zware corrosiebescherming voor staal en infrastructuur — high-build-prestaties in dunnere, slimmere lagen.',
        'Watergedragen, emissiearme coatings die beschermen zonder de oplosmiddelenlast — schoner op de klus en in de lucht.',
        'Eencomponent biobased alkydcoatings — anticorrosieve bescherming in kleur voor staalconstructie, eenvoudig en snel aan te brengen.'],
      pl: [
        'Cyrkularna filozofia Baril Group coraz częściej znajduje swoje miejsce we wszystkich poniższych liniach produktowych — chemia kopalna wyeliminowana, ochrona zachowana.',
        'Technologia podwójnego utwardzania dla OEM i przemysłu metalowego: szybkie utwardzanie na wskroś i twarde, trwałe wykończenie, szybciej gotowe do obróbki.',
        'Wytrzymała ochrona antykorozyjna dla stali i infrastruktury — wysoka wydajność w cieńszych, inteligentniejszych warstwach.',
        'Wodorozcieńczalne powłoki o niskiej emisji, które chronią bez obciążenia rozpuszczalnikami — czyściej w pracy i w powietrzu.',
        'Jednoskładnikowe biobazowe powłoki alkidowe — antykorozyjna ochrona w kolorze dla konstrukcji stalowych, łatwa i szybka w aplikacji.'],
      ro: [
        'Filozofia circulară a Baril Group își găsește tot mai mult locul în toate liniile de produse de mai jos — chimia fosilă eliminată, protecția păstrată.',
        'Tehnologie cu întărire dublă pentru OEM și industria metalică: întărire rapidă în profunzime și un finisaj dur, durabil, gata de manipulare mai devreme.',
        'Protecție anticorozivă de mare rezistență pentru oțel și infrastructură — performanță high-build în straturi mai subțiri și mai inteligente.',
        'Acoperiri pe bază de apă, cu emisii reduse, care protejează fără încărcătura de solvenți — mai curate la lucru și în aer.',
        'Acoperiri alchidice biobazate monocomponent — protecție anticorozivă în culoare pentru construcții din oțel, ușor și rapid de aplicat.'],
      de: [
        'Die zirkuläre Philosophie der Baril Group findet zunehmend ihren Weg über alle untenstehenden Produktlinien — fossile Chemie herauskonstruiert, der Schutz beibehalten.',
        'Dual-Cure-Technologie für OEM und Metallindustrie: schnelle Durchhärtung und ein zähes, langlebiges Finish, früher verarbeitungsbereit.',
        'Schwerer Korrosionsschutz für Stahl und Infrastruktur — High-Build-Leistung in dünneren, smarteren Schichten.',
        'Wasserbasierte, emissionsarme Beschichtungen, die ohne Lösemittellast schützen — sauberer auf der Baustelle und in der Luft.',
        'Einkomponentige biobasierte Alkydbeschichtungen — Korrosionsschutz in Farbe für den Stahlbau, einfach und schnell aufzutragen.'],
      fr: [
        'La philosophie circulaire du groupe Baril s\'étend de plus en plus à toutes les lignes de produits ci-dessous — la chimie fossile éliminée, la protection préservée.',
        'Technologie dual-cure pour l\'OEM et l\'industrie métallique : durcissement à cœur rapide et finition tenace et durable, prête à manipuler plus tôt.',
        'Protection anticorrosion lourde pour l\'acier et l\'infrastructure — des performances high-build en couches plus fines et plus intelligentes.',
        'Des revêtements hydrodiluables à faibles émissions qui protègent sans la charge de solvants — plus propres sur le chantier et dans l\'air.',
        'Revêtements alkydes biosourcés monocomposant — protection anticorrosion en couleur pour la construction acier, faciles et rapides à appliquer.'] }],
    ['.ranges-note', {
      nl: 'Ook: <strong>FleetSpec</strong> (VS). <a href="products/">Bekijk alle producten →</a>',
      pl: 'Również: <strong>FleetSpec</strong> (USA). <a href="products/">Zobacz wszystkie produkty →</a>',
      ro: 'De asemenea: <strong>FleetSpec</strong> (SUA). <a href="products/">Vezi toate produsele →</a>',
      de: 'Auch: <strong>FleetSpec</strong> (USA). <a href="products/">Alle Produkte ansehen →</a>',
      fr: 'Aussi : <strong>FleetSpec</strong> (USA). <a href="products/">Voir tous les produits →</a>' }],
    ['.renew-cap', {
      nl: 'Bescherming, met precisie aangebracht — met technisch advies en Baril Academy-training.',
      pl: 'Ochrona nakładana z precyzją — ze wsparciem technicznym i szkoleniami Baril Academy.',
      ro: 'Protecție aplicată cu precizie — susținută de consultanță tehnică și instruire Baril Academy.',
      de: 'Schutz, mit Präzision aufgetragen — mit technischer Beratung und Baril-Academy-Schulung.',
      fr: 'Une protection appliquée avec précision — avec conseil technique et formation Baril Academy.' }],
    ['#proof .eyebrow', { nl: 'In de praktijk', pl: 'W praktyce', ro: 'În practică', de: 'In der Praxis', fr: 'Sur le terrain' }],
    ['#proof h2', { nl: 'Beschermd door Baril', pl: 'Chronione przez Baril', ro: 'Protejat de Baril', de: 'Geschützt von Baril', fr: 'Protégé par Baril' }],
    ['#proof .sec-head p:last-child', {
      nl: 'Van nationale infrastructuur tot monumentale restauratie — objecten die onze coatings langer in leven houden.',
      pl: 'Od infrastruktury krajowej po renowacje zabytków — obiekty, które nasze powłoki utrzymują przy życiu dłużej.',
      ro: 'De la infrastructura națională la restaurări monumentale — obiecte pe care acoperirile noastre le mențin în viață mai mult timp.',
      de: 'Von nationaler Infrastruktur bis zur Denkmalrestaurierung — Objekte, die unsere Beschichtungen länger am Leben halten.',
      fr: 'De l\'infrastructure nationale à la restauration de monuments — des objets que nos revêtements maintiennent en vie plus longtemps.' }],
    ['.case .meta span', {
      nl: ['Infrastructuur · 295 m overspanning', 'Bouw & infra', 'Staalconservering', 'Gebouwen & onderhoud', "Restauratie · 's-Hertogenbosch"],
      pl: ['Infrastruktura · rozpiętość 295 m', 'Budownictwo i infrastruktura', 'Konserwacja stali', 'Budynki i konserwacja', "Renowacja · 's-Hertogenbosch"],
      ro: ['Infrastructură · deschidere 295 m', 'Construcții și infrastructură', 'Conservarea oțelului', 'Clădiri și întreținere', "Restaurare · 's-Hertogenbosch"],
      de: ['Infrastruktur · 295 m Spannweite', 'Bau & Infra', 'Stahlkonservierung', 'Gebäude & Wartung', "Restaurierung · 's-Hertogenbosch"],
      fr: ['Infrastructure · portée de 295 m', 'Construction et infra', 'Conservation de l\'acier', 'Bâtiments et entretien', "Restauration · 's-Hertogenbosch"] }],
    ['.cases-note', {
      nl: 'Sleep om te ontdekken · <a href="cases/">Alle cases →</a>',
      pl: 'Przeciągnij, aby przeglądać · <a href="cases/">Wszystkie realizacje →</a>',
      ro: 'Trage pentru a explora · <a href="cases/">Toate studiile de caz →</a>',
      de: 'Ziehen zum Entdecken · <a href="cases/">Alle Referenzen →</a>',
      fr: 'Faites glisser pour découvrir · <a href="cases/">Toutes les études de cas →</a>' }],
    ['#data .eyebrow', { nl: 'Datasheet', pl: 'Karta danych', ro: 'Fișă tehnică', de: 'Datenblatt', fr: 'Fiche technique' }],
    ['#data h2', { nl: 'Baril Coatings<br>in cijfers', pl: 'Baril Coatings<br>w liczbach', ro: 'Baril Coatings<br>în cifre', de: 'Baril Coatings<br>in Zahlen', fr: 'Baril Coatings<br>en chiffres' }],
    ['.sheet-row b', {
      nl: ['Opgericht', 'Productie', 'Bereik', 'Markten', 'Assortiment', 'Normen', 'Managementsystemen', 'Circulaire doelstelling', 'Ondersteuning', 'Onderdeel van'],
      pl: ['Założona', 'Produkcja', 'Zasięg', 'Rynki', 'Gamy', 'Normy', 'Systemy zarządzania', 'Cel obiegu zamkniętego', 'Wsparcie', 'Część'],
      ro: ['Înființată', 'Producție', 'Acoperire', 'Piețe', 'Game', 'Standarde', 'Sisteme de management', 'Țintă circulară', 'Suport', 'Parte din'],
      de: ['Gegründet', 'Produktion', 'Reichweite', 'Märkte', 'Sortiment', 'Normen', 'Managementsysteme', 'Zirkuläres Ziel', 'Unterstützung', 'Teil von'],
      fr: ['Fondée', 'Production', 'Portée', 'Marchés', 'Gammes', 'Normes', 'Systèmes de management', 'Objectif circulaire', 'Support', 'Fait partie de'] }],
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
        'Baril Group <em>— cu Copperant și Fairf</em>'],
      de: [
        "1987 · 's-Hertogenbosch, Niederlande <em>— Teil der Baril Group</em>",
        'Niederlande · Vereinigte Staaten · Polen',
        'Eingesetzt in 20+ Ländern über lokale Distributoren',
        'Stahl & Infrastruktur · OEM & Metallindustrie · Marine & Offshore · Malerbetriebe',
        'Biobased · DualCure · SteelKote · Aquaran · Bariline · FleetSpec (USA)',
        'ISO-12944-Korrosionsklassen · NORSOK M-501 <em>Offshore</em>',
        'ISO 9001 <em>Qualität</em> · ISO 14001 <em>Umwelt</em> · ISO 45001 <em>Sicherheit</em>',
        '100% zirkuläre Rohstoffe bis 2030 <em>— 55% heute, ab &lt;10% im Jahr 2022</em>',
        'Technische Beratung · Spezifikationshilfe · Applikatorschulung über die Baril Academy · stets aktuelle Sicherheitsinformationen',
        'Baril Group <em>— mit Copperant und Fairf</em>'],
      fr: [
        "1987 · 's-Hertogenbosch, Pays-Bas <em>— fait partie du groupe Baril</em>",
        'Pays-Bas · États-Unis · Pologne',
        'Utilisé dans plus de 20 pays via des distributeurs locaux',
        'Acier et infrastructure · Industrie OEM et métal · Marine et offshore · Entreprises de peinture',
        'Biobased · DualCure · SteelKote · Aquaran · Bariline · FleetSpec (USA)',
        'Classes de corrosivité ISO 12944 · NORSOK M-501 <em>offshore</em>',
        'ISO 9001 <em>qualité</em> · ISO 14001 <em>environnement</em> · ISO 45001 <em>sécurité</em>',
        '100% de matières premières circulaires en 2030 <em>— 55% aujourd\'hui, depuis &lt;10% en 2022</em>',
        'Conseil technique · aide à la spécification · formation des applicateurs via la Baril Academy · informations de sécurité toujours à jour',
        'Baril Group <em>— avec Copperant et Fairf</em>'] }],
    ['#commit .eyebrow', { nl: 'Gecertificeerd & betrokken', pl: 'Certyfikowani i zaangażowani', ro: 'Certificați și implicați', de: 'Zertifiziert & engagiert', fr: 'Certifiés et engagés' }],
    ['#commit h3', { nl: 'Een Certified B Corporation', pl: 'Certyfikowana B Corporation', ro: 'O corporație B certificată', de: 'Eine zertifizierte B Corporation', fr: 'Une société B Corp certifiée' }],
    ['#commit .commit-desc', {
      nl: "Sinds 2025 — een van de eerste protective-coatingsmakers ter wereld die voldoet aan de geverifieerde B Corp-normen, en actief op 12 duurzame-ontwikkelingsdoelen (SDG's) van de VN als onderdeel van Baril Group.",
      pl: 'Od 2025 — jeden z pierwszych producentów powłok ochronnych na świecie spełniający zweryfikowane standardy B Corp, aktywny w 12 Celach Zrównoważonego Rozwoju ONZ w ramach Baril Group.',
      ro: 'Din 2025 — printre primii producători de acoperiri de protecție din lume care îndeplinesc standardele verificate B Corp, activ în 12 Obiective de Dezvoltare Durabilă ONU, ca parte din Baril Group.',
      de: "Seit 2025 — einer der ersten Hersteller von Schutzbeschichtungen weltweit, der die verifizierten B-Corp-Normen erfüllt, und aktiv bei 12 UN-Zielen für nachhaltige Entwicklung (SDGs) als Teil der Baril Group.",
      fr: 'Depuis 2025 — l\'un des premiers fabricants de revêtements de protection au monde à répondre aux normes vérifiées B Corp, actif sur 12 objectifs de développement durable (ODD) de l\'ONU au sein du groupe Baril.' }],
    ['#commit .commit-link', { nl: 'Bekijk het bij Baril Group →', pl: 'Zobacz w Baril Group →', ro: 'Vezi pe Baril Group →', de: 'Bei Baril Group ansehen →', fr: 'Voir sur Baril Group →' }],
    ['#commit .commit-sdg-k', { nl: "Duurzame-ontwikkelingsdoelen van de VN", pl: 'Cele Zrównoważonego Rozwoju ONZ', ro: 'Obiectivele de Dezvoltare Durabilă ONU', de: 'Ziele für nachhaltige Entwicklung der UN', fr: 'Objectifs de développement durable de l\'ONU' }],
    ['#sources .eyebrow', { nl: 'Bronnen & onderbouwing', pl: 'Źródła i uzasadnienie', ro: 'Surse și fundamentare', de: 'Quellen & Belege', fr: 'Sources et justification' }],
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
        'Cifrele de acoperire și grosime a peliculei uscate sunt ilustrative; valorile reale depind de produs, suport, metodă și specificație.'],
      de: [
        'Dauerhaftigkeit des Korrosionsschutzes und Korrosivitätsklassen (C1–C5, Im1–Im3): ISO-12944-Reihe; Offshore: ISO 12944-9 / NORSOK M-501.',
        'Märkte, Produktionsstandorte und Sortimente — barilcoatings.com · barilcoatings.us.',
        'Status zirkulärer Rohstoffe (55% heute, &lt;10% im Jahr 2022, Ziel 100% bis 2030): Baril Group, 2026.',
        'Zahlen für Deckung und Trockenschichtdicke sind illustrativ; tatsächliche Werte hängen von Produkt, Untergrund, Methode und Spezifikation ab.'],
      fr: [
        'Durabilité de la protection anticorrosion et classes de corrosivité (C1–C5, Im1–Im3) : série ISO 12944 ; offshore : ISO 12944-9 / NORSOK M-501.',
        'Marchés, sites de production et gammes — barilcoatings.com · barilcoatings.us.',
        'Statut des matières premières circulaires (55% aujourd\'hui, &lt;10% en 2022, objectif 100% en 2030) : Baril Group, 2026.',
        'Les chiffres de couverture et d\'épaisseur de film sec sont illustratifs ; les valeurs réelles dépendent du produit, du support, de la méthode et de la spécification.'] }],
    ['.foot-claim', { nl: 'Duurzame coatingoplossingen.', pl: 'Zrównoważone rozwiązania powłokowe.', ro: 'Soluții de acoperire durabile.', de: 'Nachhaltige Beschichtungslösungen.', fr: 'Des solutions de revêtement durables.' }],
    ['.foot-grid h5', { nl: ['Catalogus', 'Baril Coatings'], pl: ['Katalog', 'Baril Coatings'], ro: ['Catalog', 'Baril Coatings'], de: ['Katalog', 'Baril Coatings'], fr: ['Catalogue', 'Baril Coatings'] }],
    ['.foot-grid div:nth-child(2) a', {
      nl: ['Alle producten →', 'Verfsystemen →', 'Markten →', 'Cases →'],
      pl: ['Wszystkie produkty →', 'Systemy malarskie →', 'Rynki →', 'Realizacje →'],
      ro: ['Toate produsele →', 'Sisteme de vopsire →', 'Piețe →', 'Studii de caz →'],
      de: ['Alle Produkte →', 'Lacksysteme →', 'Märkte →', 'Referenzen →'],
      fr: ['Tous les produits →', 'Systèmes de peinture →', 'Marchés →', 'Études de cas →'] }],
    ['.foot-grid div:nth-child(3) a', {
      nl: ['Over ons', 'Bescherming', 'DualCure-technologie', 'Contact'],
      pl: ['O nas', 'Ochrona', 'Technologia DualCure', 'Kontakt'],
      ro: ['Despre noi', 'Protecție', 'Tehnologia DualCure', 'Contact'],
      de: ['Über uns', 'Schutz', 'DualCure-Technologie', 'Kontakt'],
      fr: ['À propos', 'Protection', 'Technologie DualCure', 'Contact'] }],
    ['.foot-bottom span', {
      nl: ["© Baril Coatings · 's-Hertogenbosch NL · onderdeel van Baril Group", 'Minder coating. Langere levensduur. Lagere impact.'],
      pl: ["© Baril Coatings · 's-Hertogenbosch NL · część Baril Group", 'Mniej powłoki. Dłuższa żywotność. Mniejszy wpływ.'],
      ro: ["© Baril Coatings · 's-Hertogenbosch NL · parte din Baril Group", 'Mai puțină acoperire. Viață mai lungă. Impact mai mic.'],
      de: ["© Baril Coatings · 's-Hertogenbosch NL · Teil der Baril Group", 'Weniger Beschichtung. Längere Lebensdauer. Geringere Auswirkung.'],
      fr: ["© Baril Coatings · 's-Hertogenbosch NL · fait partie du groupe Baril", 'Moins de revêtement. Une durée de vie plus longue. Un impact moindre.'] }]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('baril-coatings-lang') || 'en'; } catch (e) {}
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
    try { localStorage.setItem('baril-coatings-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro', 'de', 'fr'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
