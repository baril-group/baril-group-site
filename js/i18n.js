/* Language switch for the Baril Group page. English is authored (captured from
   the DOM); NL / PL / RO / DE / FR live in the MAP as [selector, {nl, pl, ro, de, fr}].
   A value is a string (first match) or an array (one per matched element; null = keep). */
(() => {
  'use strict';
  const MAP = [
    ['.navlinks a', {
      nl: ['Missie', 'Ons verhaal', 'Impact', 'Merken', 'In de praktijk', 'Hoe we vernieuwen', 'Contact'],
      pl: ['Misja', 'Nasza historia', 'Wpływ', 'Marki', 'W praktyce', 'Jak odnawiamy', 'Kontakt'],
      ro: ['Misiune', 'Povestea noastră', 'Impact', 'Mărci', 'În practică', 'Cum reînnoim', 'Contact'],
      de: ['Mission', 'Unsere Geschichte', 'Wirkung', 'Marken', 'In der Praxis', 'Wie wir erneuern', 'Kontakt'],
      fr: ['Mission', 'Notre histoire', 'Impact', 'Marques', 'Sur le terrain', 'Comment nous renouvelons', 'Contact'] }],
    ['header .eyebrow', {
      nl: "Baril Group — 's-Hertogenbosch, NL · Productie NL & VS",
      pl: "Baril Group — 's-Hertogenbosch, NL · Produkcja NL i USA",
      ro: "Baril Group — 's-Hertogenbosch, NL · Producție NL și SUA",
      de: "Baril Group — 's-Hertogenbosch, NL · Produktion NL & USA",
      fr: "Baril Group — 's-Hertogenbosch, NL · Production NL et USA" }],
    ['header h1', {
      nl: 'Verf voor een<br><span class="paint">hernieuwbare</span><br>toekomst',
      pl: 'Farba dla<br><span class="paint">odnawialnej</span><br>przyszłości',
      ro: 'Vopsea pentru un<br><span class="paint">viitor</span><br>regenerabil',
      de: 'Farbe für eine<br><span class="paint">erneuerbare</span><br>Zukunft',
      fr: 'De la peinture pour un<br><span class="paint">avenir</span><br>renouvelable' }],
    ['.hero-sub', {
      nl: 'Eén groep, één filosofie, meerdere merken. Eén missie: <strong>meer beschermen, met minder</strong> — de verf- en coatingsindustrie vernieuwen vanaf de chemie.',
      pl: 'Jedna grupa, jedna filozofia, wiele marek. Jedna misja: <strong>chronić więcej, używając mniej</strong> — odnawiamy branżę farb i powłok od poziomu chemii.',
      ro: 'Un grup, o filozofie, mai multe mărci. O misiune: <strong>protejăm mai mult, cu mai puțin</strong> — reînnoim industria vopselelor și acoperirilor de la nivelul chimiei.',
      de: 'Eine Gruppe, eine Philosophie, mehrere Marken. Eine Mission: <strong>mehr schützen, mit weniger</strong> — die Farben- und Beschichtungsindustrie von der Chemie an erneuern.',
      fr: 'Un groupe, une philosophie, plusieurs marques. Une mission : <strong>protéger plus, avec moins</strong> — renouveler l\'industrie de la peinture et des revêtements dès la chimie.' }],
    ['.hero-cta .btn-solid', { nl: 'Ontdek de merken', pl: 'Poznaj marki', ro: 'Descoperă mărcile', de: 'Marken entdecken', fr: 'Découvrir les marques' }],
    ['.hero-cta .btn-ghost', { nl: 'Onze missie', pl: 'Nasza misja', ro: 'Misiunea noastră', de: 'Unsere Mission', fr: 'Notre mission' }],
    ['.hero-foot span:first-child', {
      nl: 'Industriële coatings · Biobased vakverf · Plantaardige verf voor thuis',
      pl: 'Powłoki przemysłowe · Biobazowa farba profesjonalna · Roślinna farba do domu',
      ro: 'Acoperiri industriale · Vopsea profesională biobazată · Vopsea vegetală pentru casă',
      de: 'Industriebeschichtungen · Biobasierte Profifarbe · Pflanzliche Farbe für zu Hause',
      fr: 'Revêtements industriels · Peinture pro biosourcée · Peinture végétale pour la maison' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează', de: 'Scrollen', fr: 'Défiler' }],
    ['#mission .eyebrow', { nl: 'Missie', pl: 'Misja', ro: 'Misiune', de: 'Mission', fr: 'Mission' }],
    ['.mission-quote', {
      nl: 'Wij vinden dat niemand hoeft te kiezen tussen <em>duurzaam, prijs en kwaliteit</em>. Daarom zetten we elke productlijn, stap voor stap, om naar hernieuwbare grondstoffen — en bewijzen we onderweg dat dunnere, schonere coatings langer beschermen.',
      pl: 'Uważamy, że nikt nie powinien wybierać między <em>zrównoważonością, ceną a jakością</em>. Dlatego przestawiamy każdą linię produktów, krok po kroku, na surowce odnawialne — udowadniając po drodze, że cieńsze, czystsze powłoki chronią dłużej.',
      ro: 'Credem că nimeni nu ar trebui să aleagă între <em>sustenabilitate, preț și calitate</em>. De aceea transformăm fiecare linie de produse, pas cu pas, către materii prime regenerabile — demonstrând pe parcurs că acoperirile mai subțiri și mai curate protejează mai mult.',
      de: 'Wir finden, dass niemand zwischen <em>Nachhaltigkeit, Preis und Qualität</em> wählen müssen sollte. Deshalb stellen wir jede Produktlinie Schritt für Schritt auf erneuerbare Rohstoffe um — und beweisen unterwegs, dass dünnere, sauberere Beschichtungen länger schützen.',
      fr: 'Nous pensons que personne ne devrait avoir à choisir entre <em>durabilité, prix et qualité</em>. C\'est pourquoi nous convertissons chaque ligne de produits, étape par étape, vers des matières premières renouvelables — en prouvant au passage que des revêtements plus fins et plus propres protègent plus longtemps.' }],
    ['#mission .mm b', {
      nl: ['Langer beschermen', 'Minder vervuilen', 'Bewijzen'],
      pl: ['Dłuższa ochrona', 'Mniej zanieczyszczeń', 'Udowadniamy'],
      ro: ['Protecție mai lungă', 'Mai puțină poluare', 'Dovedim'],
      de: ['Länger schützen', 'Weniger verschmutzen', 'Beweisen'],
      fr: ['Protéger plus longtemps', 'Polluer moins', 'Le prouver'] }],
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
        'Management certificat al calității, mediului și siguranței — plus certificări de produs pentru fiecare marcă.'],
      de: [
        'Dünnschicht-Technologie verlängert die Lebensdauer von Materialien mit deutlich weniger Farbe pro Quadratmeter.',
        'Pflanzliche Rohstoffe und weniger Gefahrstoffe, auf Rezepturebene konzipiert.',
        'Zertifiziertes Qualitäts-, Umwelt- und Sicherheitsmanagement — und Produktzertifizierungen je Marke.'],
      fr: [
        'La technologie en couche mince prolonge la durée de vie des matériaux avec nettement moins de peinture par mètre carré.',
        'Des matières premières végétales et moins de substances dangereuses, pensées au niveau de la formulation.',
        'Un management qualité, environnement et sécurité certifié — et des certifications produit par marque.'] }],
    ['.film-cap .wrap-cap', {
      nl: 'De film — To sustain our future, rich in colour · <a href="https://youtu.be/CYG3N-b-Dzk" target="_blank" rel="noopener">bekijk met geluid ↗</a>',
      pl: 'Film — To sustain our future, rich in colour · <a href="https://youtu.be/CYG3N-b-Dzk" target="_blank" rel="noopener">obejrzyj z dźwiękiem ↗</a>',
      ro: 'Filmul — To sustain our future, rich in colour · <a href="https://youtu.be/CYG3N-b-Dzk" target="_blank" rel="noopener">vizionează cu sunet ↗</a>',
      de: 'Der Film — To sustain our future, rich in colour · <a href="https://youtu.be/CYG3N-b-Dzk" target="_blank" rel="noopener">mit Ton ansehen ↗</a>',
      fr: 'Le film — To sustain our future, rich in colour · <a href="https://youtu.be/CYG3N-b-Dzk" target="_blank" rel="noopener">regarder avec le son ↗</a>' }],
    ['#story .eyebrow', { nl: 'Ons verhaal · Sinds 1982', pl: 'Nasza historia · Od 1982', ro: 'Povestea noastră · Din 1982', de: 'Unsere Geschichte · Seit 1982', fr: 'Notre histoire · Depuis 1982' }],
    ['#story h2', { nl: 'Vanuit een schuurtje<br>in Moerkapelle', pl: 'Z szopy<br>w Moerkapelle', ro: 'Dintr-o magazie<br>din Moerkapelle', de: 'Aus einem Schuppen<br>in Moerkapelle', fr: 'D\'une remise<br>à Moerkapelle' }],
    ['#story .sec-head p:last-child', {
      nl: 'Baril begon in 1982 als kleine verfmaker in Moerkapelle — een handvol betrokken mensen vanuit een schuurtje. Vier decennia later is het een internationaal opererende coatingsproducent met fabrieken in Nederland en de Verenigde Staten, nog altijd geleid door de familie Duijghuisen. De constante: de durf om andere keuzes te maken, met maatschappelijk verantwoord ondernemen als kern.',
      pl: 'Baril zaczął w 1982 roku jako mały wytwórca farb w Moerkapelle — garstka zaangażowanych ludzi w szopie. Cztery dekady później to międzynarodowy producent powłok z zakładami w Holandii i USA, wciąż prowadzony przez rodzinę Duijghuisen. Stała wartość: odwaga, by dokonywać innych wyborów, ze społeczną odpowiedzialnością biznesu jako rdzeniem.',
      ro: 'Baril a început în 1982 ca un mic producător de vopsea în Moerkapelle — un grup restrâns de oameni dedicați, într-o magazie. Patru decenii mai târziu este un producător internațional de acoperiri, cu fabrici în Țările de Jos și SUA, condus în continuare de familia Duijghuisen. Constanta: curajul de a face alegeri diferite, cu responsabilitatea socială în centru.',
      de: 'Baril begann 1982 als kleiner Farbenhersteller in Moerkapelle — eine Handvoll engagierter Menschen in einem Schuppen. Vier Jahrzehnte später ist es ein international tätiger Beschichtungshersteller mit Werken in den Niederlanden und den Vereinigten Staaten, noch immer geführt von der Familie Duijghuisen. Die Konstante: der Mut, andere Entscheidungen zu treffen, mit verantwortungsvollem Unternehmertum im Kern.',
      fr: 'Baril a débuté en 1982 comme petit fabricant de peinture à Moerkapelle — une poignée de personnes engagées dans une remise. Quatre décennies plus tard, c\'est un producteur de revêtements international avec des usines aux Pays-Bas et aux États-Unis, toujours dirigé par la famille Duijghuisen. La constante : l\'audace de faire des choix différents, avec l\'entreprise responsable au cœur.' }],
    ['.story-drawing figcaption', { nl: 'De oorspronkelijke fabriek — de begindagen', pl: 'Pierwotna fabryka — początki', ro: 'Fabrica originală — primii ani', de: 'Die ursprüngliche Fabrik — die Anfangstage', fr: 'L\'usine d\'origine — les débuts' }],
    ['.story-team figcaption', { nl: 'Ons grootste kapitaal — een betrokken, gedreven team', pl: 'Nasz największy kapitał — zaangażowany, zmotywowany zespół', ro: 'Cel mai mare capital al nostru — o echipă dedicată și motivată', de: 'Unser größtes Kapital — ein engagiertes, motiviertes Team', fr: 'Notre plus grand capital — une équipe engagée et motivée' }],
    ['.story-col h3', {
      nl: ['Familiebedrijf, uit overtuiging', 'Wereldspeler, dicht bij huis'],
      pl: ['Firma rodzinna, z przekonania', 'Gracz światowy, blisko domu'],
      ro: ['Afacere de familie, din convingere', 'Jucător global, aproape de casă'],
      de: ['Familienunternehmen, aus Überzeugung', 'Global Player, nah am Zuhause'],
      fr: ['Entreprise familiale, par conviction', 'Acteur mondial, proche de chez soi'] }],
    ['.story-col p', {
      nl: [
        'De familie Duijghuisen durft andere keuzes te maken — en waar het financieel verantwoord is, kiezen we voor duurzaam: schonere fabrieken, veilige werkplekken, een elektrisch en hybride wagenpark. Ons grootste kapitaal is een betrokken, gedreven team — toegankelijk, eerlijk en betrokken.',
        'Van één schuurtje naar productie in Nederland en de VS — wereldwijd uitgedragen door lokale distributeurs in Europa en Noord-Amerika. We helpen klanten hun objecten duurzaam te beschermen én hun global footprint te verkleinen.'],
      pl: [
        'Rodzina Duijghuisen ma odwagę dokonywać innych wyborów — a tam, gdzie jest to finansowo uzasadnione, wybiera zrównoważoność: czystsze fabryki, bezpieczniejsze miejsca pracy, elektryczna i hybrydowa flota. Naszym największym kapitałem jest zaangażowany, zmotywowany zespół — dostępny, uczciwy i zaangażowany.',
        'Od jednej szopy do produkcji w Holandii i USA — niesiona na cały świat przez lokalnych dystrybutorów w Europie i Ameryce Północnej. Pomagamy klientom trwale chronić ich obiekty, jednocześnie zmniejszając ich globalny ślad.'],
      ro: [
        'Familia Duijghuisen are curajul de a face alegeri diferite — iar acolo unde este justificat financiar, alege sustenabilitatea: fabrici mai curate, locuri de muncă mai sigure, o flotă electrică și hibridă. Cel mai mare capital al nostru este o echipă dedicată și motivată — accesibilă, onestă și implicată.',
        'De la o singură magazie la producție în Țările de Jos și SUA — dusă în întreaga lume de distribuitori locali din Europa și America de Nord. Ne ajutăm clienții să-și protejeze durabil obiectele, reducându-le în același timp amprenta globală.'],
      de: [
        'Die Familie Duijghuisen traut sich, andere Entscheidungen zu treffen — und wo es finanziell vertretbar ist, wählen wir nachhaltig: sauberere Fabriken, sichere Arbeitsplätze, ein elektrischer und hybrider Fuhrpark. Unser größtes Kapital ist ein engagiertes, motiviertes Team — zugänglich, ehrlich und engagiert.',
        'Von einem Schuppen zur Produktion in den Niederlanden und den USA — weltweit getragen von lokalen Distributoren in Europa und Nordamerika. Wir helfen Kunden, ihre Objekte dauerhaft zu schützen und ihren globalen Fußabdruck zu verkleinern.'],
      fr: [
        'La famille Duijghuisen ose faire des choix différents — et là où c\'est financièrement responsable, nous choisissons la durabilité : des usines plus propres, des lieux de travail sûrs, une flotte électrique et hybride. Notre plus grand capital est une équipe engagée et motivée — accessible, honnête et impliquée.',
        'D\'une simple remise à une production aux Pays-Bas et aux États-Unis — portée dans le monde entier par des distributeurs locaux en Europe et en Amérique du Nord. Nous aidons les clients à protéger durablement leurs objets tout en réduisant leur empreinte mondiale.'] }],
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
        'Câștigător, Brabant Innovation Award', 'Certificat B Corp — printre primii producători de acoperiri de protecție din lume · KVK Circular Innovation Award (Chimie)'],
      de: [
        'Gegründet am 12. November in Moerkapelle', "Umzug in einen Neubau in 's-Hertogenbosch", 'Management-Buy-out',
        'Gründung von Baril Coatings Polska', 'Gründung von Baril Coatings USA · Start des CO₂-Fußabdruck-Monitorings',
        'Niederländisches Patent für die DCC- (DualCure-)Technologie', 'Biobasierte Rohstoffe als Kernwert verankert',
        'Einführung biobasierter Anstrichfarben · Übernahme durch Geert Duijghuisen', 'DCC patentiert in der EU, USA und Kanada · Best Managed Company',
        "Solardächer in Etten-Leur und 's-Hertogenbosch", 'Start der Baril Academy', 'Fuhrpark vollständig elektrisch · pflanzliche Verbrauchermarken in Eigenregie',
        'Beginn des Übergangs zu 100% erneuerbaren Rohstoffen', '802 BIO & 803 BIO — die ersten biobasierten Epoxidbeschichtungen in Industriequalität',
        'Gewinner des Brabant Innovation Award', 'B-Corp-zertifiziert — einer der ersten Hersteller von Schutzbeschichtungen weltweit · KVK Circular Innovation Award (Chemie)'],
      fr: [
        'Fondée le 12 novembre à Moerkapelle', "Déménagement vers un nouveau site à 's-Hertogenbosch", 'Rachat par les cadres (MBO)',
        'Création de Baril Coatings Polska', 'Création de Baril Coatings USA · début du suivi de l\'empreinte CO₂',
        'Brevet néerlandais pour la technologie DCC (DualCure)', 'Matières premières biosourcées adoptées comme valeur centrale',
        'Lancement des peintures biosourcées · reprise par Geert Duijghuisen', 'DCC brevetée dans l\'UE, aux USA et au Canada · Best Managed Company',
        "Toitures solaires à Etten-Leur et 's-Hertogenbosch", 'Lancement de la Baril Academy', 'Flotte entièrement électrique · marques grand public végétales gérées en propre',
        'Début de la transition vers 100% de matières premières renouvelables', '802 BIO & 803 BIO — les premiers revêtements époxy biosourcés de qualité industrielle',
        'Lauréat du Brabant Innovation Award', 'Certifiée B Corp — l\'un des premiers fabricants de revêtements de protection au monde · KVK Circular Innovation Award (Chimie)'] }],
    ['.vm-k', { nl: ['Missie', 'Visie', 'Hoe'], pl: ['Misja', 'Wizja', 'Jak'], ro: ['Misiune', 'Viziune', 'Cum'], de: ['Mission', 'Vision', 'Wie'], fr: ['Mission', 'Vision', 'Comment'] }],
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
        'Tehnologie în strat subțire, chimie biobazată și pe bază de apă, fabrici cu emisii reduse și implicare activă în Obiectivele ONU de Dezvoltare Durabilă — dovedite în proiecte precum Bright Coatings.'],
      de: [
        'Nachhaltige Beschichtungslösungen für Kunden und Stakeholder bieten — auf dem Weg zum grünsten Farbenhersteller der Niederlande.',
        "Ein 'One-Planet'-Gedankengut, in unserer DNA verankert: was wir hineingeben, wollen wir auch wieder herausholen. Jede Produktlinie wird auf biobasierte Rohstoffe umgestellt — 100% rückgewinnbar ist das Ziel.",
        'Dünnschicht-Technologie, biobasierte und wasserbasierte Chemie, emissionsarme Fabriken und aktive Arbeit an den UN Sustainable Development Goals — bewiesen in Projekten wie Bright Coatings.'],
      fr: [
        'Offrir des solutions de revêtement durables aux clients et aux parties prenantes — en route pour devenir le fabricant de peinture le plus vert des Pays-Bas.',
        "Une philosophie « une seule planète », ancrée dans notre ADN : ce que nous y mettons, nous voulons aussi le récupérer. Chaque ligne de produits passe aux matières premières biosourcées — 100% récupérable est l\'objectif.",
        'Technologie en couche mince, chimie biosourcée et hydrodiluable, usines à faibles émissions et travail actif sur les Objectifs de développement durable de l\'ONU — éprouvés dans des projets comme Bright Coatings.'] }],
    ['#bcorp .eyebrow', { nl: 'B Corp-gecertificeerd · 2025', pl: 'Certyfikat B Corp · 2025', ro: 'Certificat B Corp · 2025', de: 'B-Corp-zertifiziert · 2025', fr: 'Certifiée B Corp · 2025' }],
    ['#bcorp h2', {
      nl: "Een van 's werelds eerste<br>B Corp-protective-coatingsmakers",
      pl: 'Jeden z pierwszych na świecie<br>producentów powłok ochronnych B Corp',
      ro: 'Printre primii din lume<br>producători de acoperiri de protecție B Corp',
      de: 'Einer der weltweit ersten<br>B-Corp-Hersteller von Schutzbeschichtungen',
      fr: 'L\'un des premiers fabricants<br>de revêtements de protection B Corp au monde' }],
    ['#bcorp .bc-desc', {
      nl: 'In 2025 werd Baril een Certified B Corporation — een van de eerste protective-coatingsbedrijven ter wereld die voldoet aan de geverifieerde B Corp-normen voor sociale en milieuprestaties, transparantie en verantwoording.',
      pl: 'W 2025 roku Baril został Certyfikowaną B Corporation — jednym z pierwszych producentów powłok ochronnych na świecie spełniającym zweryfikowane standardy B Corp w zakresie wyników społecznych i środowiskowych, transparentności i odpowiedzialności.',
      ro: 'În 2025, Baril a devenit o Corporație B Certificată — unul dintre primii producători de acoperiri de protecție din lume care îndeplinește standardele verificate B Corp privind performanța socială și de mediu, transparența și responsabilitatea.',
      de: 'Im Jahr 2025 wurde Baril eine Certified B Corporation — eines der ersten Unternehmen für Schutzbeschichtungen weltweit, das die verifizierten B-Corp-Normen für soziale und ökologische Leistung, Transparenz und Rechenschaft erfüllt.',
      fr: 'En 2025, Baril est devenue une Certified B Corporation — l\'une des premières entreprises de revêtements de protection au monde à répondre aux normes vérifiées B Corp en matière de performance sociale et environnementale, de transparence et de responsabilité.' }],
    ['#certs .eyebrow', { nl: 'Certificeringen & doelen', pl: 'Certyfikaty i cele', ro: 'Certificări și obiective', de: 'Zertifizierungen & Ziele', fr: 'Certifications et objectifs' }],
    ['#certs h2', { nl: 'Bewezen, gecertificeerd,<br>aanspreekbaar', pl: 'Sprawdzone, certyfikowane,<br>odpowiedzialne', ro: 'Dovedit, certificat,<br>responsabil', de: 'Bewährt, zertifiziert,<br>verantwortlich', fr: 'Éprouvé, certifié,<br>responsable' }],
    ['#certs .sec-head p:last-child', {
      nl: "Kwaliteits-, milieu- en veiligheidsmanagement, offshore-kwalificatie — en sinds 2025 de status van Certified B Corporation. Ondersteund door een actief programma op de duurzame-ontwikkelingsdoelen (SDG's) van de VN.",
      pl: 'Zarządzanie jakością, środowiskiem i bezpieczeństwem, kwalifikacja offshore — a od 2025 roku status Certyfikowanej B Corporation. Wsparte aktywnym programem na rzecz Celów Zrównoważonego Rozwoju ONZ.',
      ro: 'Management al calității, mediului și siguranței, calificare offshore — iar din 2025, statutul de Corporație B Certificată. Susținut de un program activ privind Obiectivele ONU de Dezvoltare Durabilă.',
      de: "Qualitäts-, Umwelt- und Sicherheitsmanagement, Offshore-Qualifikation — und seit 2025 der Status einer Certified B Corporation. Unterstützt durch ein aktives Programm zu den Zielen für nachhaltige Entwicklung (SDGs) der UN.",
      fr: 'Management qualité, environnement et sécurité, qualification offshore — et depuis 2025 le statut de Certified B Corporation. Soutenu par un programme actif sur les objectifs de développement durable (ODD) de l\'ONU.' }],
    ['.sdg-title', {
      nl: "Actief op de duurzame-ontwikkelingsdoelen (SDG's) van de VN",
      pl: 'Aktywni w Celach Zrównoważonego Rozwoju ONZ',
      ro: 'Activi în Obiectivele ONU de Dezvoltare Durabilă',
      de: 'Aktiv bei den Zielen für nachhaltige Entwicklung (SDGs) der UN',
      fr: 'Actifs sur les objectifs de développement durable (ODD) de l\'ONU' }],
    ['#bio .eyebrow', { nl: 'Hoofdstuk 01 · Circulaire grondstoffen', pl: 'Rozdział 01 · Surowce w obiegu zamkniętym', ro: 'Capitolul 01 · Materii prime circulare', de: 'Kapitel 01 · Zirkuläre Rohstoffe', fr: 'Chapitre 01 · Matières premières circulaires' }],
    ['#bio h2', { nl: 'Van vat<br>naar bio', pl: 'Z beczki<br>do bio', ro: 'De la baril<br>la bio', de: 'Vom Fass<br>zu Bio', fr: 'Du baril<br>au bio' }],
    ['#bio .sec-head p:last-child', {
      nl: 'Elke liter verf is chemie: bindmiddel, oplosmiddel, pigment, additieven. Een eeuw lang was die chemie gebaseerd op ruwe olie — het bindmiddel, en vaak ook het oplosmiddel. Wij zetten beide om naar hernieuwbare en circulaire grondstoffen: van minder dan 10% in 2022 naar 55% vandaag, op weg naar 100% in 2030.',
      pl: 'Każdy litr farby to chemia: spoiwo, rozpuszczalnik, pigment, dodatki. Przez stulecie ta chemia opierała się na ropie naftowej — spoiwo, a często też rozpuszczalnik. Przestawiamy oba na surowce odnawialne i w obiegu zamkniętym: z mniej niż 10% w 2022 do 55% dziś, w drodze do 100% w 2030.',
      ro: 'Fiecare litru de vopsea este chimie: liant, solvent, pigment, aditivi. Timp de un secol, această chimie s-a bazat pe petrol — liantul și, adesea, și solventul. Le transformăm pe ambele către materii prime regenerabile și circulare: de la mai puțin de 10% în 2022 la 55% astăzi, către 100% în 2030.',
      de: 'Jeder Liter Farbe ist Chemie: Bindemittel, Lösemittel, Pigment, Additive. Ein Jahrhundert lang basierte diese Chemie auf Erdöl — das Bindemittel und oft auch das Lösemittel. Wir stellen beide auf erneuerbare und zirkuläre Rohstoffe um: von weniger als 10% im Jahr 2022 auf 55% heute, auf dem Weg zu 100% bis 2030.',
      fr: 'Chaque litre de peinture est de la chimie : liant, solvant, pigment, additifs. Pendant un siècle, cette chimie reposait sur le pétrole — le liant, et souvent le solvant aussi. Nous convertissons les deux vers des matières premières renouvelables et circulaires : de moins de 10% en 2022 à 55% aujourd\'hui, en route vers 100% en 2030.' }],
    ['#bio .ctr:nth-child(2) b', { nl: '100% in 2030', pl: '100% w 2030', ro: '100% în 2030', de: '100% bis 2030', fr: '100% en 2030' }],
    ['#bio .ctr:nth-child(3) b', { nl: 'Gelijk of beter', pl: 'Tak samo lub lepiej', ro: 'La fel sau mai bine', de: 'Gleich oder besser', fr: 'Égal ou meilleur' }],
    ['#bio .ctr .cl', {
      nl: ['Hernieuwbare & circulaire grondstoffen — vandaag', 'Groepsdoel — vanaf &lt;10% in 2022', 'Prestaties, bij lagere laagdikte'],
      pl: ['Surowce odnawialne i w obiegu zamkniętym — dziś', 'Cel grupy — z &lt;10% w 2022', 'Wydajność, przy niższej grubości powłoki'],
      ro: ['Materii prime regenerabile și circulare — astăzi', 'Obiectivul grupului — de la &lt;10% în 2022', 'Performanță, la o grosime mai mică'],
      de: ['Erneuerbare & zirkuläre Rohstoffe — heute', 'Gruppenziel — ab &lt;10% im Jahr 2022', 'Leistung, bei geringerer Schichtdicke'],
      fr: ['Matières premières renouvelables et circulaires — aujourd\'hui', 'Objectif du groupe — depuis &lt;10% en 2022', 'Performance, à une épaisseur réduite'] }],
    ['#globe .eyebrow', { nl: 'Hoofdstuk 02 · Een wat-als-scenario', pl: 'Rozdział 02 · Scenariusz „co gdyby”', ro: 'Capitolul 02 · Un scenariu „ce-ar fi dacă”', de: 'Kapitel 02 · Ein Was-wäre-wenn-Szenario', fr: 'Chapitre 02 · Un scénario hypothétique' }],
    ['#globe h2', { nl: 'Als de verf van de wereld<br>met ons meeging', pl: 'Gdyby farba świata<br>poszła z nami', ro: 'Dacă vopseaua lumii<br>ar merge cu noi', de: 'Wenn die Farbe der Welt<br>mit uns ginge', fr: 'Si la peinture du monde<br>nous suivait' }],
    ['#globe .sec-head p:last-child', {
      nl: 'De wereld produceert ≈ 50+ miljoen ton verf en coatings per jaar — nog altijd overwegend fossiele chemie. Dit verandert er van richting wanneer dat volume overgaat op hernieuwbare grondstoffen en dunne-laag-applicatie, zoals wij dat doen.',
      pl: 'Świat produkuje ≈ 50+ milionów ton farb i powłok rocznie — wciąż w przeważającej mierze chemia kopalna. Oto co zmienia kierunek, gdy ta ilość przechodzi na surowce odnawialne i aplikację cienkowarstwową, tak jak robimy to my.',
      ro: 'Lumea produce ≈ 50+ milioane de tone de vopsele și acoperiri pe an — încă majoritar chimie fosilă. Iată ce își schimbă direcția când acel volum trece la materii prime regenerabile și aplicare în strat subțire, așa cum facem noi.',
      de: 'Die Welt produziert ≈ 50+ Millionen Tonnen Farben und Beschichtungen pro Jahr — noch immer überwiegend fossile Chemie. Das ändert die Richtung, wenn dieses Volumen auf erneuerbare Rohstoffe und Dünnschicht-Applikation umgestellt wird, so wie wir es tun.',
      fr: 'Le monde produit ≈ 50+ millions de tonnes de peintures et de revêtements par an — toujours majoritairement de la chimie fossile. Voilà ce qui change de cap lorsque ce volume passe aux matières premières renouvelables et à l\'application en couche mince, comme nous le faisons.' }],
    ['.fr-slider span', { nl: ['Fossiel', null, 'Hernieuwbaar'], pl: ['Kopalne', null, 'Odnawialne'], ro: ['Fosil', null, 'Regenerabil'], de: ['Fossil', null, 'Erneuerbar'], fr: ['Fossile', null, 'Renouvelable'] }],
    ['.dial b', { nl: ['Grondstof', 'CO₂-richting', 'Materiaallevensduur'], pl: ['Surowiec', 'Kierunek CO₂', 'Żywotność materiału'], ro: ['Materie primă', 'Direcția CO₂', 'Durata de viață a materialului'], de: ['Rohstoff', 'CO₂-Richtung', 'Materiallebensdauer'], fr: ['Matière première', 'Direction CO₂', 'Durée de vie du matériau'] }],
    ['.dial b + span', {
      nl: ['Van ruwe olie naar planten & reststromen', 'Van uitstoten naar vastleggen', 'Dunne lagen: meer m² beschermd per liter, minder overschilderen'],
      pl: ['Z ropy naftowej do roślin i strumieni odpadowych', 'Z emitowania do wiązania', 'Cienkie warstwy: więcej m² chronionych na litr, mniej przemalowań'],
      ro: ['De la petrol la plante și fluxuri reziduale', 'De la emitere la captare', 'Straturi subțiri: mai mulți m² protejați pe litru, mai puține revopsiri'],
      de: ['Von Erdöl zu Pflanzen & Reststoffen', 'Von Ausstoßen zu Binden', 'Dünne Schichten: mehr m² pro Liter geschützt, weniger Überstreichen'],
      fr: ['Du pétrole aux plantes et flux résiduels', 'D\'émettre à capter', 'Couches fines : plus de m² protégés par litre, moins de reprises'] }],
    ['.pool-side .scenario-note', {
      nl: 'Illustratief scenario op basis van Barils producttransitie. Wereldvolume: marktramingen 2022–2024, zie bronnen.',
      pl: 'Scenariusz ilustracyjny oparty na transformacji produktów Baril. Wolumen światowy: szacunki rynkowe 2022–2024, zob. źródła.',
      ro: 'Scenariu ilustrativ bazat pe tranziția produselor Baril. Volum global: estimări de piață 2022–2024, vezi sursele.',
      de: 'Illustratives Szenario auf Basis der Produkttransition von Baril. Weltvolumen: Marktschätzungen 2022–2024, siehe Quellen.',
      fr: 'Scénario illustratif basé sur la transition produits de Baril. Volume mondial : estimations de marché 2022–2024, voir les sources.' }],
    ['#safety .eyebrow', { nl: 'Hoofdstuk 03 · Mens & veiligheid', pl: 'Rozdział 03 · Człowiek i bezpieczeństwo', ro: 'Capitolul 03 · Om și siguranță', de: 'Kapitel 03 · Mensch & Sicherheit', fr: 'Chapitre 03 · L\'humain et la sécurité' }],
    ['#safety h2', { nl: 'Verf die de schilder<br>niet zijn gezondheid kost', pl: 'Farba, która nie kosztuje<br>malarza zdrowia', ro: 'Vopsea care nu costă<br>zugravul sănătatea', de: 'Farbe, die den Maler<br>nicht die Gesundheit kostet', fr: 'Une peinture qui ne coûte pas<br>la santé au peintre' }],
    ['#safety .sec-head p:last-child', {
      nl: 'In Nederland had chronische blootstelling aan oplosmiddelen een eigen naam: <em>schildersziekte</em> (CSE/OPS). Onomkeerbare schade aan het zenuwstelsel, erkend als beroepsziekte. Toen herformuleerde de industrie — watergedragen, laag-VOS — en stortten de aantallen in. Het bewijs dat chemie die in de fabriek wordt gekozen, mensen op de steiger beschermt. Wij trekken dat verder dan het blik: actuele veiligheidsinformatie, getrainde applicateurs en persoonlijk veiligheidsadvies horen bij de verf.',
      pl: 'W Holandii przewlekłe narażenie na rozpuszczalniki miało własną nazwę: <em>schildersziekte</em> — choroba malarzy (CSE/OPS). Nieodwracalne uszkodzenie układu nerwowego, uznane za chorobę zawodową. Potem branża zmieniła receptury — wodorozcieńczalne, niskie LZO — i liczby się załamały. Dowód, że chemia wybrana w fabryce chroni ludzi na rusztowaniu. Idziemy dalej niż puszka: aktualne informacje o bezpieczeństwie, przeszkoleni wykonawcy i doradztwo w zakresie ochrony osobistej są częścią farby.',
      ro: 'În Țările de Jos, expunerea cronică la solvenți avea un nume propriu: <em>schildersziekte</em> — boala zugravului (CSE/OPS). Daune ireversibile ale sistemului nervos, recunoscute ca boală profesională. Apoi industria a reformulat — pe bază de apă, COV redus — iar cifrele s-au prăbușit. Dovada că o chimie aleasă în fabrică protejează oamenii pe schelă. Mergem mai departe decât cutia: informații de siguranță actuale, aplicatori instruiți și consultanță de protecție personală vin odată cu vopseaua.',
      de: 'In den Niederlanden hatte die chronische Lösemittelexposition einen eigenen Namen: <em>schildersziekte</em> — Malerkrankheit (CSE/OPS). Irreversible Schäden am Nervensystem, anerkannt als Berufskrankheit. Dann formulierte die Industrie um — wasserbasiert, low-VOC — und die Zahlen brachen ein. Der Beweis, dass in der Fabrik gewählte Chemie Menschen auf dem Gerüst schützt. Wir gehen weiter als die Dose: aktuelle Sicherheitsinformationen, geschulte Applikatoren und persönliche Sicherheitsberatung gehören zur Farbe.',
      fr: 'Aux Pays-Bas, l\'exposition chronique aux solvants avait son propre nom : <em>schildersziekte</em> — la maladie du peintre (CSE/OPS). Des dommages irréversibles au système nerveux, reconnus comme maladie professionnelle. Puis l\'industrie a reformulé — hydrodiluable, faible COV — et les chiffres se sont effondrés. La preuve qu\'une chimie choisie en usine protège les gens sur l\'échafaudage. Nous allons plus loin que le pot : informations de sécurité à jour, applicateurs formés et conseils de protection individuelle accompagnent la peinture.' }],
    ['.tl-nodes li b', { nl: ['Jaren 70', '≈ 2000', '2004', '2014', 'Vandaag'], pl: ['Lata 70.', '≈ 2000', '2004', '2014', 'Dziś'], ro: ['Anii 70', '≈ 2000', '2004', '2014', 'Astăzi'], de: ['70er Jahre', '≈ 2000', '2004', '2014', 'Heute'], fr: ['Années 70', '≈ 2000', '2004', '2014', 'Aujourd\'hui'] }],
    ['.tl-nodes li:nth-child(1) span', { nl: 'Het oplosmiddelentijdperk', pl: 'Era rozpuszczalników', ro: 'Era solvenților', de: 'Das Lösemittel-Zeitalter', fr: 'L\'ère des solvants' }],
    ['.tl-nodes li:nth-child(3) span', { nl: 'EU-verfrichtlijn begrenst VOS-gehalte', pl: 'Dyrektywa UE ogranicza zawartość LZO', ro: 'Directiva UE limitează conținutul de COV', de: 'EU-Farbrichtlinie begrenzt VOC-Gehalt', fr: 'La directive UE limite la teneur en COV' }],
    ['.tl-nodes li:nth-child(4) span', { nl: '&lt; 10 nieuwe gevallen / jr', pl: '&lt; 10 nowych przypadków / rok', ro: '&lt; 10 cazuri noi / an', de: '&lt; 10 neue Fälle / Jahr', fr: '&lt; 10 nouveaux cas / an' }],
    ['.tl-nodes li:nth-child(5) span', { nl: 'Gevaar wegformuleren — emissiegetest, kindveilig gecertificeerd', pl: 'Wyeliminować zagrożenie w recepturze — testowane na emisje, certyfikowane jako bezpieczne dla dzieci', ro: 'Eliminarea pericolului din rețetă — testat la emisii, certificat sigur pentru copii', de: 'Gefahr herausformulieren — emissionsgeprüft, kindersicher zertifiziert', fr: 'Éliminer le danger par la formulation — testé en émissions, certifié sans danger pour les enfants' }],
    ['.safety-services .ss b', {
      nl: ['Altijd actuele veiligheidsinformatie', 'Training van applicateurs', 'Persoonlijk veiligheidsadvies'],
      pl: ['Zawsze aktualne informacje o bezpieczeństwie', 'Szkolenie wykonawców', 'Indywidualne doradztwo bezpieczeństwa'],
      ro: ['Informații de siguranță mereu actuale', 'Instruirea aplicatorilor', 'Consultanță personală de siguranță'],
      de: ['Stets aktuelle Sicherheitsinformationen', 'Schulung von Applikatoren', 'Persönliche Sicherheitsberatung'],
      fr: ['Informations de sécurité toujours à jour', 'Formation des applicateurs', 'Conseil de sécurité personnalisé'] }],
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
        'Sfaturi practice privind protecția personală — pe șantier, pe schelă, la banc.'],
      de: [
        'Aktuelle Sicherheitsdatenblätter und Produktsicherheitsdokumentation — für jedes Produkt, jede Revision.',
        'Praxisnahe Schulung für professionelle Applikatoren über die Baril Academy: sicher arbeiten, clever auftragen.',
        'Praktische Beratung zum persönlichen Schutz — auf der Baustelle, auf dem Gerüst, an der Werkbank.'],
      fr: [
        'Fiches de données de sécurité et documentation de sécurité produit à jour — pour chaque produit, chaque révision.',
        'Formation pratique pour les applicateurs professionnels via la Baril Academy : travailler en sécurité, appliquer intelligemment.',
        'Conseils pratiques sur la protection individuelle — sur le chantier, sur l\'échafaudage, à l\'établi.'] }],
    ['#local .eyebrow', { nl: 'Hoofdstuk 04 · Korte ketens', pl: 'Rozdział 04 · Krótkie łańcuchy', ro: 'Capitolul 04 · Lanțuri scurte', de: 'Kapitel 04 · Kurze Lieferketten', fr: 'Chapitre 04 · Circuits courts' }],
    ['#local h2', { nl: 'Dichtbij huis<br>gemaakt', pl: 'Wyprodukowane<br>blisko domu', ro: 'Fabricat<br>aproape de casă', de: 'Nah am Zuhause<br>gemacht', fr: 'Fabriqué<br>près de chez soi' }],
    ['#local .sec-head p:last-child', {
      nl: "Fossiele chemie reist de halve wereld over voordat ze in een verfblik zit. Plantaardige en reststroom-grondstoffen maken de keten kort: geteeld, verwerkt en toegepast in dezelfde regio. Wij produceren dicht bij onze markten — 's-Hertogenbosch en de Verenigde Staten — op eigen zonne- en windenergie, met een volledig elektrisch wagenpark en inclusief werkgeverschap als beleid, niet als project.",
      pl: "Chemia kopalna podróżuje przez pół świata, zanim trafi do puszki farby. Surowce roślinne i ze strumieni odpadowych skracają łańcuch: uprawiane, przetwarzane i stosowane w tym samym regionie. Produkujemy blisko naszych rynków — 's-Hertogenbosch i USA — na własnej energii słonecznej i wiatrowej, z w pełni elektryczną flotą i inkluzywnym zatrudnieniem jako polityką, nie projektem.",
      ro: "Chimia fosilă călătorește jumătate de lume înainte să ajungă într-o cutie de vopsea. Materiile prime vegetale și din fluxuri reziduale scurtează lanțul: cultivate, procesate și aplicate în aceeași regiune. Producem aproape de piețele noastre — 's-Hertogenbosch și SUA — pe energie solară și eoliană proprie, cu o flotă complet electrică și angajare incluzivă ca politică, nu ca proiect.",
      de: "Fossile Chemie reist um die halbe Welt, bevor sie in einer Farbdose landet. Pflanzliche und Reststrom-Rohstoffe verkürzen die Kette: angebaut, verarbeitet und angewendet in derselben Region. Wir produzieren nah an unseren Märkten — 's-Hertogenbosch und die Vereinigten Staaten — mit eigener Solar- und Windenergie, einem vollelektrischen Fuhrpark und inklusivem Arbeitgebertum als Politik, nicht als Projekt.",
      fr: "La chimie fossile traverse la moitié du globe avant d\'arriver dans un pot de peinture. Les matières premières végétales et issues de flux résiduels raccourcissent la chaîne : cultivées, transformées et appliquées dans la même région. Nous produisons près de nos marchés — 's-Hertogenbosch et les États-Unis — avec notre propre énergie solaire et éolienne, une flotte 100% électrique et un emploi inclusif comme politique, pas comme projet." }],
    ['.cl-old', { nl: 'Lange keten — fossiel, intercontinentaal', pl: 'Długi łańcuch — kopalny, międzykontynentalny', ro: 'Lanț lung — fosil, intercontinental', de: 'Lange Kette — fossil, interkontinental', fr: 'Chaîne longue — fossile, intercontinentale' }],
    ['.cl-new', { nl: 'Korte keten — regionale akkers & reststromen', pl: 'Krótki łańcuch — regionalne pola i strumienie odpadowe', ro: 'Lanț scurt — câmpuri regionale și fluxuri reziduale', de: 'Kurze Kette — regionale Felder & Reststoffe', fr: 'Chaîne courte — champs régionaux et flux résiduels' }],
    ['.cc-old li', { nl: ['Ruwe olie', 'Raffinaderij', 'Chemische fabriek', 'Bindmiddel', 'Fabriek'], pl: ['Ropa naftowa', 'Rafineria', 'Zakład chemiczny', 'Spoiwo', 'Fabryka'], ro: ['Petrol', 'Rafinărie', 'Uzină chimică', 'Liant', 'Fabrică'], de: ['Rohöl', 'Raffinerie', 'Chemiefabrik', 'Bindemittel', 'Fabrik'], fr: ['Pétrole brut', 'Raffinerie', 'Usine chimique', 'Liant', 'Usine'] }],
    ['.cc-new li', { nl: ['Akker / reststroom', 'Bindmiddel', 'Fabriek Den Bosch', 'Object — zelfde regio'], pl: ['Pole / strumień odpadowy', 'Spoiwo', 'Fabryka Den Bosch', 'Obiekt — ten sam region'], ro: ['Câmp / flux rezidual', 'Liant', 'Fabrica Den Bosch', 'Obiect — aceeași regiune'], de: ['Feld / Reststoff', 'Bindemittel', 'Fabrik Den Bosch', 'Objekt — selbe Region'], fr: ['Champ / flux résiduel', 'Liant', 'Usine de Den Bosch', 'Objet — même région'] }],
    ['.pulses span', { nl: ['Zonne- + windenergie', 'Elektrisch wagenpark', 'Inclusief werkgeverschap', 'Baril Academy'], pl: ['Energia słoneczna + wiatrowa', 'Flota elektryczna', 'Inkluzywne zatrudnienie', 'Baril Academy'], ro: ['Energie solară + eoliană', 'Flotă electrică', 'Angajare incluzivă', 'Baril Academy'], de: ['Solar- + Windenergie', 'Elektrischer Fuhrpark', 'Inklusives Arbeitgebertum', 'Baril Academy'], fr: ['Énergie solaire + éolienne', 'Flotte électrique', 'Emploi inclusif', 'Baril Academy'] }],
    ['#world .eyebrow', { nl: 'Hoofdstuk 05 · Sinds 1982', pl: 'Rozdział 05 · Od 1982', ro: 'Capitolul 05 · Din 1982', de: 'Kapitel 05 · Seit 1982', fr: 'Chapitre 05 · Depuis 1982' }],
    ['#world h2', { nl: 'Steeds groener,<br>wereldwijd', pl: 'Coraz bardziej zielono,<br>na całym świecie', ro: 'Tot mai verde,<br>în întreaga lume', de: 'Immer grüner,<br>weltweit', fr: 'De plus en plus vert,<br>partout dans le monde' }],
    ['#world .sec-head p:last-child', {
      nl: "Vanuit een schuurtje in Moerkapelle in 1982 naar vijf vestigingen op twee continenten. Sinds 2021 versnelt de transitie naar 100% hernieuwbare grondstoffen jaar op jaar. Zie de voetafdruk zich verspreiden.",
      pl: 'Z szopy w Moerkapelle w 1982 do pięciu zakładów na dwóch kontynentach. Od 2021 transformacja w kierunku 100% surowców odnawialnych przyspiesza z roku na rok. Zobacz, jak rozprzestrzenia się ślad.',
      ro: 'Dintr-o magazie din Moerkapelle în 1982 la cinci unități pe două continente. Din 2021, tranziția către 100% materii prime regenerabile accelerează de la an la an. Privește cum se răspândește amprenta.',
      de: 'Von einem Schuppen in Moerkapelle im Jahr 1982 zu fünf Standorten auf zwei Kontinenten. Seit 2021 beschleunigt sich der Übergang zu 100% erneuerbaren Rohstoffen Jahr für Jahr. Sehen Sie, wie sich der Fußabdruck ausbreitet.',
      fr: 'D\'une remise à Moerkapelle en 1982 à cinq sites sur deux continents. Depuis 2021, la transition vers 100% de matières premières renouvelables s\'accélère d\'année en année. Regardez l\'empreinte se déployer.' }],
    ['.map-cap', { nl: 'De groene voetafdruk van de groep', pl: 'Zielony ślad grupy', ro: 'Amprenta verde a grupului', de: 'Der grüne Fußabdruck der Gruppe', fr: 'L\'empreinte verte du groupe' }],
    ['#mapTl li span', {
      nl: ['Opgericht in Moerkapelle', "'s-Hertogenbosch, NL", 'Baril Coatings Polska', 'Baril Coatings USA', 'Etten-Leur, NL', 'Transitie naar 100% hernieuwbaar'],
      pl: ['Założona w Moerkapelle', "'s-Hertogenbosch, NL", 'Baril Coatings Polska', 'Baril Coatings USA', 'Etten-Leur, NL', 'Transformacja w kierunku 100% odnawialnych'],
      ro: ['Înființată în Moerkapelle', "'s-Hertogenbosch, NL", 'Baril Coatings Polska', 'Baril Coatings USA', 'Etten-Leur, NL', 'Tranziție către 100% regenerabil'],
      de: ['Gegründet in Moerkapelle', "'s-Hertogenbosch, NL", 'Baril Coatings Polska', 'Baril Coatings USA', 'Etten-Leur, NL', 'Übergang zu 100% erneuerbar'],
      fr: ['Fondée à Moerkapelle', "'s-Hertogenbosch, NL", 'Baril Coatings Polska', 'Baril Coatings USA', 'Etten-Leur, NL', 'Transition vers 100% renouvelable'] }],
    ['#brands .eyebrow', { nl: 'Portfolio', pl: 'Portfolio', ro: 'Portofoliu', de: 'Portfolio', fr: 'Portefeuille' }],
    ['#brands h2', { nl: 'Eén filosofie,<br>meerdere merken', pl: 'Jedna filozofia,<br>wiele marek', ro: 'O filozofie,<br>mai multe mărci', de: 'Eine Philosophie,<br>mehrere Marken', fr: 'Une philosophie,<br>plusieurs marques' }],
    ['#brands .sec-head p:last-child', {
      nl: 'Elk merk brengt dezelfde chemie-eerst-filosofie naar een ander publiek — van offshore-staal en de metaallakstraat tot de muur in je woonkamer.',
      pl: 'Każda marka niesie tę samą filozofię „chemia przede wszystkim” do innej grupy odbiorców — od stali offshore i linii lakierniczej po ścianę w Twoim salonie.',
      ro: 'Fiecare marcă duce aceeași filozofie „chimia mai întâi” către un public diferit — de la oțelul offshore și linia de vopsire a metalului la peretele din livingul tău.',
      de: 'Jede Marke bringt dieselbe Chemie-zuerst-Philosophie zu einem anderen Publikum — von Offshore-Stahl und der Metall-Lackierstraße bis zur Wand in deinem Wohnzimmer.',
      fr: 'Chaque marque porte la même philosophie « la chimie d\'abord » vers un public différent — de l\'acier offshore et de la ligne de peinture du métal au mur de votre salon.' }],
    ['.brand .tag', { nl: ['Voor de industrie', 'Voor de vakschilder', 'Voor thuis', 'Voor de tuinbouw', 'Voor kleur'], pl: ['Dla przemysłu', 'Dla profesjonalnego malarza', 'Do domu', 'Dla ogrodnictwa', 'Dla koloru'], ro: ['Pentru industrie', 'Pentru zugravul profesionist', 'Pentru casă', 'Pentru horticultură', 'Pentru culoare'], de: ['Für die Industrie', 'Für den Profimaler', 'Für zu Hause', 'Für den Gartenbau', 'Für Farbe'], fr: ['Pour l\'industrie', 'Pour le peintre pro', 'Pour la maison', 'Pour l\'horticulture', 'Pour la couleur'] }],
    ['.brand > div:first-child > p:not(.tag)', {
      nl: [
        'Hoogwaardige industriële coatings en bouwverven. Dunne-laag-bescherming voor staal en infrastructuur, OEM en metaalindustrie, marine & offshore — ontwikkeld om materialen langer te laten meegaan met minder verf.',
        'Een compleet biobased verfsysteem voor de professionele schilder. Plantaardige chemie met EU Ecolabel en Cradle to Cradle-certificering — de groenste verf, mengbaar in elke kleur.',
        'Plantaardige muur- en lakverf voor iedereen. Kleurcollecties samengesteld door experts, mengbaar in elke kleur van de regenboog — online en in het schap bij Karwei.',
        'Een tijdelijke schaduwcoating voor kassen die jonge gewassen beschermt tegen de felle zon. Optimale lichtregulatie op glas en polycarbonaat, gemaakt van circulair krijt — en volledig verwijderbaar.',
        'Een industrieel inkleursysteem met hoogwaardige kleurpasta’s voor industriële, protective en vloercoatings. Consistente, reproduceerbare kleur voor solventgedragen systemen, ondersteund door de RedLike™-software.'],
      pl: [
        'Wysokiej jakości powłoki przemysłowe i farby budowlane. Cienkowarstwowa ochrona stali i infrastruktury, OEM i przemysłu metalowego, morskie i offshore — opracowane, by materiały służyły dłużej przy mniejszej ilości farby.',
        'Kompletny biobazowy system malarski dla profesjonalnego malarza. Chemia roślinna z EU Ecolabel i certyfikatem Cradle to Cradle — najbardziej zielona farba, mieszalna w każdym kolorze.',
        'Roślinna farba ścienna i lakierowa dla każdego. Kolekcje kolorów tworzone przez ekspertów, mieszane w każdym kolorze tęczy — online i na półce w Karwei.',
        'Tymczasowa powłoka cieniująca do szklarni, która chroni młode uprawy przed ostrym słońcem. Optymalna regulacja światła na szkle i poliwęglanie, wykonana z obiegowej kredy — i całkowicie usuwalna.',
        'Przemysłowy system barwienia z wysokowydajnymi pastami kolorystycznymi do powłok przemysłowych, ochronnych i podłogowych. Spójny, powtarzalny kolor dla systemów rozpuszczalnikowych, wspierany oprogramowaniem RedLike™.'],
      ro: [
        'Acoperiri industriale și vopsele pentru construcții de înaltă performanță. Protecție în strat subțire pentru oțel și infrastructură, OEM și industria metalică, maritim și offshore — concepute pentru a prelungi viața materialelor cu mai puțină vopsea.',
        'Un sistem complet de vopsea biobazată pentru zugravul profesionist. Chimie vegetală cu EU Ecolabel și certificare Cradle to Cradle — cea mai verde vopsea, nuanțabilă în orice culoare.',
        'Vopsea vegetală pentru pereți și lac pentru toți. Colecții de culori create de experți, nuanțate în orice culoare a curcubeului — online și pe raft la Karwei.',
        'O acoperire temporară de umbrire pentru sere care protejează culturile tinere de soarele puternic. Reglare optimă a luminii pe sticlă și policarbonat, fabricată din cretă circulară — și complet detașabilă.',
        'Un sistem industrial de nuanțare cu paste de culoare de înaltă performanță pentru acoperiri industriale, de protecție și de pardoseală. Culoare consistentă și reproductibilă pentru sisteme pe bază de solvent, susținut de software-ul RedLike™.'],
      de: [
        'Hochwertige Industriebeschichtungen und Bautenfarben. Dünnschicht-Schutz für Stahl und Infrastruktur, OEM und Metallindustrie, Marine & Offshore — entwickelt, um Materialien länger haltbar zu machen, mit weniger Farbe.',
        'Ein komplettes biobasiertes Farbsystem für den Profimaler. Pflanzliche Chemie mit EU Ecolabel und Cradle-to-Cradle-Zertifizierung — die grünste Farbe, in jeder Farbe mischbar.',
        'Pflanzliche Wand- und Lackfarbe für alle. Von Experten zusammengestellte Farbkollektionen, in jeder Farbe des Regenbogens mischbar — online und im Regal bei Karwei.',
        'Eine temporäre Schattierungsbeschichtung für Gewächshäuser, die junge Kulturen vor der grellen Sonne schützt. Optimale Lichtregulierung auf Glas und Polycarbonat, aus zirkulärer Kreide — und vollständig entfernbar.',
        'Ein industrielles Abtönsystem mit hochwertigen Farbpasten für Industrie-, Schutz- und Bodenbeschichtungen. Konsistente, reproduzierbare Farbe für lösemittelbasierte Systeme, unterstützt durch die RedLike™-Software.'],
      fr: [
        'Des revêtements industriels et peintures du bâtiment haut de gamme. Une protection en couche mince pour l\'acier et l\'infrastructure, l\'OEM et l\'industrie métallique, le marine et l\'offshore — conçue pour faire durer les matériaux plus longtemps avec moins de peinture.',
        'Un système de peinture biosourcé complet pour le peintre professionnel. Une chimie végétale avec EU Ecolabel et certification Cradle to Cradle — la peinture la plus verte, teintable dans toutes les couleurs.',
        'Une peinture murale et laque végétale pour tous. Des collections de couleurs composées par des experts, teintables dans toutes les couleurs de l\'arc-en-ciel — en ligne et en rayon chez Karwei.',
        'Un revêtement d\'ombrage temporaire pour serres qui protège les jeunes cultures du soleil intense. Régulation optimale de la lumière sur verre et polycarbonate, à base de craie circulaire — et entièrement amovible.',
        'Un système de teinte industriel avec des pâtes colorantes haute performance pour revêtements industriels, de protection et de sol. Une couleur constante et reproductible pour les systèmes à base de solvant, soutenu par le logiciel RedLike™.'] }],
    ['.spec b', { nl: ['Assortiment', 'Assortiment', 'Assortiment', 'Assortiment', 'Assortiment'], pl: ['Asortyment', 'Asortyment', 'Asortyment', 'Asortyment', 'Asortyment'], ro: ['Gamă', 'Gamă', 'Gamă', 'Gamă', 'Gamă'], de: ['Sortiment', 'Sortiment', 'Sortiment', 'Sortiment', 'Sortiment'], fr: ['Gamme', 'Gamme', 'Gamme', 'Gamme', 'Gamme'] }],
    ['#contact .eyebrow', { nl: 'Contact', pl: 'Kontakt', ro: 'Contact', de: 'Kontakt', fr: 'Contact' }],
    ['#contact h2', { nl: 'Vind je<br>dichtstbijzijnde vestiging', pl: 'Znajdź<br>najbliższe biuro', ro: 'Găsește<br>cel mai apropiat birou', de: 'Finde deinen<br>nächsten Standort', fr: 'Trouvez votre<br>site le plus proche' }],
    ['#contact .sec-head p:last-child', {
      nl: 'Baril Group ontwikkelt en produceert in Europa en Noord-Amerika. Neem rechtstreeks contact op met het team — voor producten, technische ondersteuning of een monster.',
      pl: 'Baril Group opracowuje i produkuje w Europie i Ameryce Północnej. Skontaktuj się bezpośrednio z zespołem — w sprawie produktów, wsparcia technicznego lub próbki.',
      ro: 'Baril Group dezvoltă și produce în Europa și America de Nord. Contactează direct echipa — pentru produse, asistență tehnică sau o mostră.',
      de: 'Baril Group entwickelt und produziert in Europa und Nordamerika. Wenden Sie sich direkt an das Team — für Produkte, technische Unterstützung oder ein Muster.',
      fr: 'Baril Group développe et produit en Europe et en Amérique du Nord. Contactez directement l\'équipe — pour des produits, un support technique ou un échantillon.' }],
    ['.loc-tag', {
      nl: ['Hoofdkantoor · NL','Productie · NL','Baril Polska · PL','Baril USA · Noord-Amerika','Baril România · RO','Baril Caucasia · GE'],
      pl: ['Siedziba · NL','Produkcja · NL','Baril Polska · PL','Baril USA · Ameryka Płn.','Baril România · RO','Baril Caucasia · GE'],
      ro: ['Sediu central · NL','Producție · NL','Baril Polska · PL','Baril USA · America de Nord','Baril România · RO','Baril Caucasia · GE'],
      de: ['Hauptsitz · NL','Produktion · NL','Baril Polska · PL','Baril USA · Nordamerika','Baril România · RO','Baril Caucasia · GE'],
      fr: ['Siège · NL','Production · NL','Baril Polska · PL','Baril USA · Amérique du Nord','Baril România · RO','Baril Caucasia · GE'] }],
    ['.loc-note', {
      nl: ['Protective coatings &amp; R&amp;D','Watergedragen coatings &amp; verven','Officiële distributeur','Protective coatings &amp; R&amp;D','Officiële distributeur','Officiële distributeur'],
      pl: ['Powłoki ochronne i B+R','Powłoki i farby wodorozcieńczalne','Oficjalny dystrybutor','Powłoki ochronne i B+R','Oficjalny dystrybutor','Oficjalny dystrybutor'],
      ro: ['Acoperiri de protecție și C&amp;D','Acoperiri și vopsele pe bază de apă','Distribuitor oficial','Acoperiri de protecție și C&amp;D','Distribuitor oficial','Distribuitor oficial'],
      de: ['Schutzbeschichtungen &amp; F&amp;E','Wasserbasierte Beschichtungen &amp; Farben','Offizieller Distributor','Schutzbeschichtungen &amp; F&amp;E','Offizieller Distributor','Offizieller Distributor'],
      fr: ['Revêtements de protection et R&amp;D','Revêtements et peintures hydrodiluables','Distributeur officiel','Revêtements de protection et R&amp;D','Distributeur officiel','Distributeur officiel'] }],
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
      nl: 'Sleep om te ontdekken · <a href="https://www.barilcoatings.com/nl/praktijkcases" target="_blank" rel="noopener">Alle cases →</a>',
      pl: 'Przeciągnij, aby przeglądać · <a href="https://www.barilcoatings.com/nl/praktijkcases" target="_blank" rel="noopener">Wszystkie realizacje →</a>',
      ro: 'Trage pentru a explora · <a href="https://www.barilcoatings.com/nl/praktijkcases" target="_blank" rel="noopener">Toate studiile de caz →</a>',
      de: 'Ziehen zum Entdecken · <a href="https://www.barilcoatings.com/nl/praktijkcases" target="_blank" rel="noopener">Alle Referenzen →</a>',
      fr: 'Faites glisser pour découvrir · <a href="https://www.barilcoatings.com/nl/praktijkcases" target="_blank" rel="noopener">Toutes les études de cas →</a>' }],
    ['#renew .eyebrow', { nl: 'Technologie', pl: 'Technologia', ro: 'Tehnologie', de: 'Technologie', fr: 'Technologie' }],
    ['#renew h2', { nl: 'Hoe we een oude<br>industrie vernieuwen', pl: 'Jak odnawiamy<br>starą branżę', ro: 'Cum reînnoim o<br>industrie veche', de: 'Wie wir eine alte<br>Industrie erneuern', fr: 'Comment nous renouvelons<br>une vieille industrie' }],
    ['.pillar .pn', { nl: ['Chemie', 'Applicatie', 'Productie'], pl: ['Chemia', 'Aplikacja', 'Produkcja'], ro: ['Chimie', 'Aplicare', 'Producție'], de: ['Chemie', 'Applikation', 'Produktion'], fr: ['Chimie', 'Application', 'Production'] }],
    ['.pillar h4', { nl: ['Biobased formuleren', 'Dunne-laag-technologie', 'Emissiearme fabrieken'], pl: ['Receptury biobazowe', 'Technologia cienkowarstwowa', 'Niskoemisyjne fabryki'], ro: ['Formulare biobazată', 'Tehnologie în strat subțire', 'Fabrici cu emisii reduse'], de: ['Biobasiert formulieren', 'Dünnschicht-Technologie', 'Emissionsarme Fabriken'], fr: ['Formulation biosourcée', 'Technologie en couche mince', 'Usines à faibles émissions'] }],
    ['.pillar h4 + p', {
      nl: [
        'Plantaardige grondstoffen vervangen fossiele chemie waar het ertoe doet — CO₂ vastleggen in plaats van uitstoten, zonder in te leveren op prestaties.',
        'Meer bescherming uit minder materiaal. Lagere laagdikte betekent langer meegaande objecten, minder overschilderen en een kleinere voetafdruk per beschermde m².',
        'Produceren dicht bij onze markten in Nederland en de Verenigde Staten — met emissiereductie ontworpen in het proces.'],
      pl: [
        'Surowce roślinne zastępują chemię kopalną tam, gdzie to się liczy — wiązanie CO₂ zamiast emisji, bez kompromisów w wydajności.',
        'Więcej ochrony z mniejszej ilości materiału. Niższa grubość powłoki oznacza dłużej służące obiekty, mniej przemalowań i mniejszy ślad na chroniony m².',
        'Produkcja blisko naszych rynków w Holandii i USA — z redukcją emisji wpisaną w proces.'],
      ro: [
        'Materiile prime vegetale înlocuiesc chimia fosilă acolo unde contează — captarea CO₂ în loc de emitere, fără compromisuri la performanță.',
        'Mai multă protecție din mai puțin material. O grosime mai mică înseamnă obiecte cu viață mai lungă, mai puține revopsiri și o amprentă mai mică pe m² protejat.',
        'Producție aproape de piețele noastre din Țările de Jos și Statele Unite — cu reducerea emisiilor integrată în proces.'],
      de: [
        'Pflanzliche Rohstoffe ersetzen fossile Chemie, wo es darauf ankommt — CO₂ binden statt ausstoßen, ohne Abstriche bei der Leistung.',
        'Mehr Schutz aus weniger Material. Geringere Schichtdicke bedeutet länger haltbare Objekte, weniger Überstreichen und ein kleinerer Fußabdruck pro geschütztem m².',
        'Produzieren nah an unseren Märkten in den Niederlanden und den Vereinigten Staaten — mit Emissionsreduktion, die in den Prozess hineinkonstruiert ist.'],
      fr: [
        'Les matières premières végétales remplacent la chimie fossile là où ça compte — capter le CO₂ au lieu de l\'émettre, sans compromis sur les performances.',
        'Plus de protection avec moins de matière. Une épaisseur réduite signifie des objets qui durent plus longtemps, moins de reprises et une empreinte plus faible par m² protégé.',
        'Produire près de nos marchés aux Pays-Bas et aux États-Unis — avec la réduction des émissions intégrée au procédé.'] }],
    ['.renew-cap', {
      nl: 'Corrosiebescherming, met precisie aangebracht — dunne lagen die het zwaarste werk doen.',
      pl: 'Ochrona antykorozyjna nakładana z precyzją — cienkie warstwy, które wykonują najcięższą pracę.',
      ro: 'Protecție anticorozivă aplicată cu precizie — straturi subțiri care fac cea mai grea muncă.',
      de: 'Korrosionsschutz, mit Präzision aufgetragen — dünne Schichten, die die schwerste Arbeit leisten.',
      fr: 'Protection anticorrosion appliquée avec précision — des couches fines qui font le travail le plus dur.' }],
    ['#data .eyebrow', { nl: 'Datasheet', pl: 'Karta danych', ro: 'Fișă tehnică', de: 'Datenblatt', fr: 'Fiche technique' }],
    ['#data h2', { nl: 'De groep<br>in cijfers', pl: 'Grupa<br>w liczbach', ro: 'Grupul<br>în cifre', de: 'Die Gruppe<br>in Zahlen', fr: 'Le groupe<br>en chiffres' }],
    ['.sheet-row b', {
      nl: ['Hoofdkantoor', 'Productie', 'Bereik', 'Markten', 'Managementsystemen', 'Circulaire doelstelling', 'Energie', 'Mensen', 'UN SDG’s', 'Merken'],
      pl: ['Siedziba', 'Produkcja', 'Zasięg', 'Rynki', 'Systemy zarządzania', 'Cel obiegu zamkniętego', 'Energia', 'Ludzie', 'Cele ONZ (SDG)', 'Marki'],
      ro: ['Sediu', 'Producție', 'Acoperire', 'Piețe', 'Sisteme de management', 'Țintă circulară', 'Energie', 'Oameni', 'ODD ONU', 'Mărci'],
      de: ['Hauptsitz', 'Produktion', 'Reichweite', 'Märkte', 'Managementsysteme', 'Zirkuläres Ziel', 'Energie', 'Menschen', 'UN-SDGs', 'Marken'],
      fr: ['Siège', 'Production', 'Portée', 'Marchés', 'Systèmes de management', 'Objectif circulaire', 'Énergie', 'Personnes', 'ODD de l\'ONU', 'Marques'] }],
    ['.sheet-row span', {
      nl: [
        "'s-Hertogenbosch, Nederland <em>— familiebedrijf</em>",
        'Nederland · Verenigde Staten',
        'Duurzame beschermingsmerken, gebruikt in 20+ landen',
        'Staal & infrastructuur · OEM & metaal · Marine & offshore · Professioneel schilderwerk · Consument',
        'ISO 9001 <em>kwaliteit</em> · ISO 14001 <em>milieu</em> · ISO 45001 <em>veiligheid</em>',
        '100% circulaire grondstoffen in 2030 <em>— 55% vandaag, vanaf &lt;10% in 2022</em>',
        'Productie op eigen zonnepanelen + windenergie <em>·</em> volledig elektrisch wagenpark',
        'Inclusief werkgeverschap <em>(afstand tot de arbeidsmarkt)</em> · 4-jaarlijks preventief medisch onderzoek · Baril Academy',
        'Actief programma op doelen 1 · 2 · 3 · 4 · 7 · 8 · 9 · 11 · 12 · 13 · 14 · 15',
        'Baril Coatings · Copperant · Fairf · Nixol · TintLab · Fortis'],
      pl: [
        "'s-Hertogenbosch, Holandia <em>— firma rodzinna</em>",
        'Holandia · Stany Zjednoczone',
        'Zrównoważone marki ochronne, stosowane w 20+ krajach',
        'Stal i infrastruktura · OEM i metal · Morskie i offshore · Malarstwo profesjonalne · Konsument',
        'ISO 9001 <em>jakość</em> · ISO 14001 <em>środowisko</em> · ISO 45001 <em>bezpieczeństwo</em>',
        '100% surowców w obiegu zamkniętym w 2030 <em>— 55% dziś, z &lt;10% w 2022</em>',
        'Produkcja na własnych panelach słonecznych + energii wiatrowej <em>·</em> flota w pełni elektryczna',
        'Inkluzywne zatrudnienie <em>(oddalenie od rynku pracy)</em> · profilaktyczne badania medyczne co 4 lata · Baril Academy',
        'Aktywny program w celach 1 · 2 · 3 · 4 · 7 · 8 · 9 · 11 · 12 · 13 · 14 · 15',
        'Baril Coatings · Copperant · Fairf · Nixol · TintLab · Fortis'],
      ro: [
        "'s-Hertogenbosch, Țările de Jos <em>— afacere de familie</em>",
        'Țările de Jos · Statele Unite',
        'Mărci de protecție durabile, utilizate în peste 20 de țări',
        'Oțel & infrastructură · OEM & metal · Maritim & offshore · Zugrăvit profesional · Consumator',
        'ISO 9001 <em>calitate</em> · ISO 14001 <em>mediu</em> · ISO 45001 <em>siguranță</em>',
        '100% materii prime circulare în 2030 <em>— 55% astăzi, de la &lt;10% în 2022</em>',
        'Producție pe panouri solare proprii + energie eoliană <em>·</em> flotă complet electrică',
        'Angajare incluzivă <em>(distanță față de piața muncii)</em> · control medical preventiv la fiecare 4 ani · Baril Academy',
        'Program activ pe obiectivele 1 · 2 · 3 · 4 · 7 · 8 · 9 · 11 · 12 · 13 · 14 · 15',
        'Baril Coatings · Copperant · Fairf · Nixol · TintLab · Fortis'],
      de: [
        "'s-Hertogenbosch, Niederlande <em>— Familienunternehmen</em>",
        'Niederlande · Vereinigte Staaten',
        'Nachhaltige Schutzmarken, eingesetzt in 20+ Ländern',
        'Stahl & Infrastruktur · OEM & Metall · Marine & Offshore · Professionelle Malerarbeit · Verbraucher',
        'ISO 9001 <em>Qualität</em> · ISO 14001 <em>Umwelt</em> · ISO 45001 <em>Sicherheit</em>',
        '100% zirkuläre Rohstoffe bis 2030 <em>— 55% heute, ab &lt;10% im Jahr 2022</em>',
        'Produktion mit eigenen Solarpanels + Windenergie <em>·</em> vollelektrischer Fuhrpark',
        'Inklusives Arbeitgebertum <em>(Abstand zum Arbeitsmarkt)</em> · alle 4 Jahre arbeitsmedizinische Vorsorge · Baril Academy',
        'Aktives Programm zu den Zielen 1 · 2 · 3 · 4 · 7 · 8 · 9 · 11 · 12 · 13 · 14 · 15',
        'Baril Coatings · Copperant · Fairf · Nixol · TintLab · Fortis'],
      fr: [
        "'s-Hertogenbosch, Pays-Bas <em>— entreprise familiale</em>",
        'Pays-Bas · États-Unis',
        'Marques de protection durables, utilisées dans plus de 20 pays',
        'Acier & infrastructure · OEM & métal · Marine & offshore · Peinture professionnelle · Grand public',
        'ISO 9001 <em>qualité</em> · ISO 14001 <em>environnement</em> · ISO 45001 <em>sécurité</em>',
        '100% de matières premières circulaires en 2030 <em>— 55% aujourd\'hui, depuis &lt;10% en 2022</em>',
        'Production sur panneaux solaires propres + énergie éolienne <em>·</em> flotte 100% électrique',
        'Emploi inclusif <em>(éloignement du marché du travail)</em> · suivi médical préventif tous les 4 ans · Baril Academy',
        'Programme actif sur les objectifs 1 · 2 · 3 · 4 · 7 · 8 · 9 · 11 · 12 · 13 · 14 · 15',
        'Baril Coatings · Copperant · Fairf · Nixol · TintLab · Fortis'] }],
    ['#sources .eyebrow', { nl: 'Bronnen & onderbouwing', pl: 'Źródła i uzasadnienie', ro: 'Surse și fundamentare', de: 'Quellen & Belege', fr: 'Sources et justification' }],
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
        'Capitolul „Dacă vopseaua lumii ar merge cu noi” este un scenariu ilustrativ bazat pe propria tranziție a produselor Baril — nu o proiecție globală măsurată.'],
      de: [
        'Weltvolumen Farben & Beschichtungen — Marktschätzungen 2022–2024: Ceresana (≈ 44,5 Mt, 2022) · Freedonia (≈ 63,7 Mt, 2024). Dargestellt als „≈ 50+ Millionen Tonnen pro Jahr“.',
        'EU-Farbrichtlinie 2004/42/EG — VOC-Grenzwerte für dekorative Farben und Fahrzeugreparaturlackierung (EUR-Lex).',
        'CSE/OPS (Malerkrankheit), anerkannte Berufskrankheit, NL: ≈ 50 neue Fälle/Jahr um 2000 → &lt; 10/Jahr im Jahr 2014, Rückgang zugeschrieben der Substitution, u.a. wasserbasierte Farbe — ops-loket.nl · beroepsziekten.nl.',
        'Transitions-, Energie- und Menschenprogramm der Baril Group — barilcoatings.com/duurzaamheid · copperant.com/certificaten. Status zirkulärer Rohstoffe (55% heute, &lt; 10% im Jahr 2022, Ziel 100% bis 2030): Baril Group, 2026.',
        'Das Kapitel „Wenn die Farbe der Welt mit uns ginge“ ist ein illustratives Szenario auf Basis der eigenen Produkttransition von Baril — keine gemessene globale Projektion.'],
      fr: [
        'Volume mondial peintures & revêtements — estimations de marché 2022–2024 : Ceresana (≈ 44,5 Mt, 2022) · Freedonia (≈ 63,7 Mt, 2024). Présenté comme « ≈ 50+ millions de tonnes par an ».',
        'Directive UE 2004/42/CE — limites de COV pour les peintures décoratives et la réparation automobile (EUR-Lex).',
        'CSE/OPS (maladie du peintre), maladie professionnelle reconnue, NL : ≈ 50 nouveaux cas/an vers 2000 → &lt; 10/an en 2014, baisse attribuée à la substitution, notamment les peintures hydrodiluables — ops-loket.nl · beroepsziekten.nl.',
        'Programmes de transition, d\'énergie et humains du groupe Baril — barilcoatings.com/duurzaamheid · copperant.com/certificaten. Statut des matières premières circulaires (55% aujourd\'hui, &lt; 10% en 2022, objectif 100% en 2030) : Baril Group, 2026.',
        'Le chapitre « Si la peinture du monde nous suivait » est un scénario illustratif basé sur la propre transition produits de Baril — pas une projection mondiale mesurée.'] }],
    ['.foot-claim', { nl: 'Wij verven een hernieuwbare toekomst.', pl: 'Malujemy odnawialną przyszłość.', ro: 'Vopsim un viitor regenerabil.', de: 'Wir streichen eine erneuerbare Zukunft.', fr: 'Nous peignons un avenir renouvelable.' }],
    ['.foot-grid h5', { nl: ['Merken', 'Groep'], pl: ['Marki', 'Grupa'], ro: ['Mărci', 'Grup'], de: ['Marken', 'Gruppe'], fr: ['Marques', 'Groupe'] }],
    ['.foot-grid div:nth-child(3) a', { nl: ['Missie', 'Technologie', 'Werken bij ↗', 'Contact ↗'], pl: ['Misja', 'Technologia', 'Kariera ↗', 'Kontakt ↗'], ro: ['Misiune', 'Tehnologie', 'Cariere ↗', 'Contact ↗'], de: ['Mission', 'Technologie', 'Karriere ↗', 'Kontakt ↗'], fr: ['Mission', 'Technologie', 'Carrières ↗', 'Contact ↗'] }],
    ['.foot-bottom span', {
      nl: ["© Baril Group · 's-Hertogenbosch NL", 'Minder verf. Langere levensduur. Lagere impact.'],
      pl: ["© Baril Group · 's-Hertogenbosch NL", 'Mniej farby. Dłuższa żywotność. Mniejszy wpływ.'],
      ro: ["© Baril Group · 's-Hertogenbosch NL", 'Mai puțină vopsea. Viață mai lungă. Impact mai mic.'],
      de: ["© Baril Group · 's-Hertogenbosch NL", 'Weniger Farbe. Längere Lebensdauer. Geringere Auswirkung.'],
      fr: ["© Baril Group · 's-Hertogenbosch NL", 'Moins de peinture. Une durée de vie plus longue. Un impact moindre.'] }]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('baril-lang') || 'en'; } catch (e) {}
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
    try { localStorage.setItem('baril-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro', 'de', 'fr'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
