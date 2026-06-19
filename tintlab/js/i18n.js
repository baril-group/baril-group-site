/* Language switch for the TintLab one-pager. English is authored in the DOM;
   NL / PL / RO / DE / FR / ES / IT live in the MAP as [selector, {nl, pl, ro, de, fr, es, it}]. */
(() => {
  'use strict';
  const MAP = [
    ['.foot-disclaimer', { nl: 'We willen onze informatie zo breed mogelijk beschikbaar maken; daarom zijn sommige teksten vertaald met Anthropic Claude AI. Komt u onverhoopt een fout tegen, laat het ons dan vooral weten.', pl: 'Chcemy udostępniać nasze informacje możliwie jak najszerzej, dlatego niektóre teksty przetłumaczyliśmy za pomocą Anthropic Claude AI. Jeśli zauważą Państwo błąd, prosimy o informację.', ro: 'Dorim să facem informațiile noastre cât mai larg disponibile; de aceea, unele texte au fost traduse cu Anthropic Claude AI. Dacă întâlniți o eroare, vă rugăm să ne anunțați.', de: 'Wir möchten unsere Informationen so breit wie möglich verfügbar machen; daher wurden einige Texte mit Anthropic Claude AI übersetzt. Sollte Ihnen ein Fehler auffallen, lassen Sie es uns bitte wissen.', fr: 'Nous souhaitons rendre nos informations aussi largement accessibles que possible ; c\'est pourquoi certains textes ont été traduits avec Anthropic Claude AI. Si vous constatez une erreur, n\'hésitez pas à nous le signaler.', es: 'Queremos que nuestra información esté disponible de la forma más amplia posible; por eso, algunos textos se han traducido con Anthropic Claude AI. Si detecta algún error, le rogamos que nos lo comunique.', it: 'Vogliamo rendere le nostre informazioni il più ampiamente disponibili possibile; per questo alcuni testi sono stati tradotti con Anthropic Claude AI. Se dovesse notare un errore, vi preghiamo di segnalarcelo.', tr: 'Bilgilerimizi mümkün olduğunca geniş kitlelere ulaştırmak istiyoruz; bu nedenle bazı metinler Anthropic Claude AI ile çevrildi. Bir hata fark ederseniz lütfen bize bildirin.' }],
    ['.navlinks a', {
      nl: ['Waarom TintLab','RedLike','Prestaties',"Kleurpasta's",'Toepassingen','Contact'],
      pl: ['Dlaczego TintLab','RedLike','Wydajność','Pasty barwiące','Zastosowania','Kontakt'],
      ro: ['De ce TintLab','RedLike','Performanță','Coloranți','Aplicații','Contact'],
      de: ['Warum TintLab','RedLike','Leistung','Farbpasten','Anwendungen','Kontakt'],
      fr: ['Pourquoi TintLab','RedLike','Performance','Pâtes colorantes','Applications','Contact'],
      es: ['Por qué TintLab','RedLike','Rendimiento','Pastas de color','Aplicaciones','Contacto'],
      it: ['Perché TintLab','RedLike','Prestazioni','Paste coloranti','Applicazioni','Contatto'],
      tr: ['Neden TintLab','RedLike','Performans','Renk pastaları','Uygulamalar','İletişim'] }],
    ['header .eyebrow .eb-txt', {
      nl: 'TintLab — Industrieel inkleursysteem · Een merk van Baril Group',
      pl: 'TintLab — Przemysłowy system barwienia · Marka Baril Group',
      ro: 'TintLab — Sistem industrial de nuanțare · O marcă Baril Group',
      de: 'TintLab — Industrielles Abtönsystem · Eine Marke der Baril Group',
      fr: 'TintLab — Système de teinte industriel · Une marque du groupe Baril',
      es: 'TintLab — Sistema de tintado industrial · Una marca de Baril Group',
      it: 'TintLab — Sistema di tintometria industriale · Un marchio di Baril Group',
      tr: 'TintLab — Endüstriyel renklendirme sistemi · Bir Baril Group markası' }],
    ['header h1', {
      nl: 'Betrouwbare kleur,<br>industriële<br><span class="red">prestaties</span>',
      pl: 'Niezawodny kolor,<br>przemysłowa<br><span class="red">wydajność</span>',
      ro: 'Culoare fiabilă,<br>performanță<br><span class="red">industrială</span>',
      de: 'Zuverlässige Farbe,<br>industrielle<br><span class="red">Leistung</span>',
      fr: 'Une couleur fiable,<br>une performance<br><span class="red">industrielle</span>',
      es: 'Color fiable,<br>rendimiento<br><span class="red">industrial</span>',
      it: 'Colore affidabile,<br>prestazioni<br><span class="red">industriali</span>',
      tr: 'Güvenilir renk,<br>endüstriyel<br><span class="red">performans</span>' }],
    ['.hero-sub', {
      nl: "Een inkleursysteem met hoogwaardige kleurpasta's voor <strong>industriële, protective en vloercoatings</strong> — consistente, reproduceerbare kleur die de coating nooit aantast.",
      pl: 'System barwiący z wysokowydajnymi pastami kolorystycznymi do <strong>powłok przemysłowych, ochronnych i podłogowych</strong> — spójny, powtarzalny kolor, który nigdy nie pogarsza powłoki.',
      ro: 'Un sistem de nuanțare cu paste de culoare de înaltă performanță pentru <strong>acoperiri industriale, de protecție și de pardoseală</strong> — culoare consistentă și reproductibilă care nu compromite niciodată acoperirea.',
      de: 'Ein Abtönsystem mit hochwertigen Farbpasten für <strong>Industrie-, Schutz- und Bodenbeschichtungen</strong> — konsistente, reproduzierbare Farbe, die die Beschichtung nie beeinträchtigt.',
      fr: 'Un système de teinte avec des pâtes colorantes haute performance pour les <strong>revêtements industriels, de protection et de sol</strong> — une couleur constante et reproductible qui n\'altère jamais le revêtement.',
      es: 'Un sistema de tintado con pastas de color de alto rendimiento para <strong>recubrimientos industriales, de protección y de suelo</strong> — color constante y reproducible que nunca altera el recubrimiento.',
      it: 'Un sistema di tintometria con paste coloranti ad alte prestazioni per <strong>rivestimenti industriali, protettivi e per pavimenti</strong> — colore costante e riproducibile che non compromette mai il rivestimento.',
      tr: '<strong>Endüstriyel, koruyucu ve zemin kaplamaları</strong> için yüksek performanslı renk pastalarına sahip bir renklendirme sistemi — kaplamaya asla zarar vermeyen tutarlı, tekrarlanabilir renk.' }],
    ['header .hero-cta .btn-solid', { nl: 'Bekijk het systeem', pl: 'Poznaj system', ro: 'Explorează sistemul', de: 'Das System ansehen', fr: 'Découvrir le système', es: 'Ver el sistema', it: 'Scopri il sistema', tr: 'Sistemi keşfedin' }],
    ['header .hero-cta .btn-ghost', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri', de: 'Kontakt &amp; Standorte', fr: 'Contact et sites', es: 'Contacto y sedes', it: 'Contatto e sedi', tr: 'İletişim &amp; lokasyonlar' }],
    ['.hero-foot span:first-child', {
      nl: 'Solventgedragen · Epoxy · PU · Polyaspartic · Alkyd',
      pl: 'Rozpuszczalnikowe · Epoksyd · PU · Poliasparaginowe · Alkid',
      ro: 'Pe bază de solvent · Epoxi · PU · Poliaspartic · Alchidic',
      de: 'Lösemittelbasiert · Epoxid · PU · Polyaspartic · Alkyd',
      fr: 'À base de solvant · Époxy · PU · Polyaspartique · Alkyde',
      es: 'Con base disolvente · Epoxi · PU · Poliaspártico · Alquídico',
      it: 'A base solvente · Epossidico · PU · Poliaspartico · Alchidico',
      tr: 'Solvent bazlı · Epoksi · PU · Poliaspartik · Alkid' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează', de: 'Scrollen', fr: 'Défiler', es: 'Desliza', it: 'Scorri', tr: 'Kaydır' }],

    ['#mission .eyebrow', { nl: 'Waarom TintLab', pl: 'Dlaczego TintLab', ro: 'De ce TintLab', de: 'Warum TintLab', fr: 'Pourquoi TintLab', es: 'Por qué TintLab', it: 'Perché TintLab', tr: 'Neden TintLab' }],
    ['.mission-quote', {
      nl: 'Fabrikanten hebben kleur nodig waarop ze kunnen vertrouwen. TintLab levert <em>consistente, reproduceerbare kleur</em> met een soepele verwerking en technische stabiliteit — zonder de prestaties van de uiteindelijke coating aan te tasten.',
      pl: 'Producenci potrzebują koloru, na którym mogą polegać. TintLab zapewnia <em>spójny, powtarzalny kolor</em> z płynną aplikacją i stabilnością techniczną — bez pogarszania właściwości gotowej powłoki.',
      ro: 'Producătorii au nevoie de o culoare pe care să se poată baza. TintLab oferă <em>culoare consistentă și reproductibilă</em>, cu aplicare lină și stabilitate tehnică — fără a compromite performanța acoperirii finale.',
      de: 'Hersteller brauchen Farbe, auf die sie sich verlassen können. TintLab liefert <em>konsistente, reproduzierbare Farbe</em> mit geschmeidiger Verarbeitung und technischer Stabilität — ohne die Leistung der fertigen Beschichtung zu beeinträchtigen.',
      fr: 'Les fabricants ont besoin d\'une couleur fiable. TintLab offre une <em>couleur constante et reproductible</em>, avec une application fluide et une stabilité technique — sans compromettre la performance du revêtement final.',
      es: 'Los fabricantes necesitan un color en el que poder confiar. TintLab ofrece <em>color constante y reproducible</em>, con una aplicación fluida y estabilidad técnica — sin comprometer el rendimiento del recubrimiento final.',
      it: 'I produttori hanno bisogno di un colore affidabile. TintLab offre <em>colore costante e riproducibile</em>, con un\'applicazione fluida e stabilità tecnica — senza compromettere le prestazioni del rivestimento finale.',
      tr: 'Üreticilerin güvenebilecekleri bir renge ihtiyacı var. TintLab, son kaplamanın performansından ödün vermeden — akıcı bir uygulama ve teknik stabilite ile <em>tutarlı, tekrarlanabilir renk</em> sunar.' }],
    ['#mission .mm b', {
      nl: ['Betrouwbaar &amp; consistent','Gemaakt voor industriële coatings','Breed bereik &amp; prestaties'],
      pl: ['Niezawodny i spójny','Stworzony do powłok przemysłowych','Szeroka gama i wydajność'],
      ro: ['Fiabil și consistent','Creat pentru acoperiri industriale','Gamă largă și performanță'],
      de: ['Zuverlässig &amp; konsistent','Für Industriebeschichtungen gemacht','Breites Spektrum &amp; Leistung'],
      fr: ['Fiable et constant','Conçu pour les revêtements industriels','Large gamme et performance'],
      es: ['Fiable y constante','Creado para recubrimientos industriales','Amplia gama y rendimiento'],
      it: ['Affidabile e costante','Creato per rivestimenti industriali','Ampia gamma e prestazioni'],
      tr: ['Güvenilir &amp; tutarlı','Endüstriyel kaplamalar için üretildi','Geniş yelpaze &amp; performans'] }],
    ['#mission .mm span', {
      nl: ['Reproduceerbare kleuren, batch na batch, met soepele verwerking en technische stabiliteit.','Ontwikkeld voor solventgedragen systemen en de meest gangbare harsen — epoxy, PU, polyaspartic, alkyd.',"16 kleurpasta's bereiken het volledige spectrum, met hoge weer-, hitte- en chemische bestendigheid."],
      pl: ['Powtarzalne kolory partia po partii, z płynną aplikacją i stabilnością techniczną.','Opracowany do systemów rozpuszczalnikowych i najczęstszych żywic — epoksyd, PU, poliasparaginowe, alkid.','16 past kolorystycznych pokrywa pełne spektrum, z wysoką odpornością na warunki atmosferyczne, ciepło i chemikalia.'],
      ro: ['Culori reproductibile de la lot la lot, cu aplicare lină și stabilitate tehnică.','Dezvoltat pentru sisteme pe bază de solvent și cele mai comune rășini — epoxi, PU, poliaspartic, alchidic.','16 paste de culoare acoperă întregul spectru, cu rezistență ridicată la intemperii, căldură și substanțe chimice.'],
      de: ['Reproduzierbare Farben, Charge für Charge, mit geschmeidiger Verarbeitung und technischer Stabilität.','Entwickelt für lösemittelbasierte Systeme und die gängigsten Harze — Epoxid, PU, Polyaspartic, Alkyd.','16 Farbpasten erreichen das gesamte Spektrum, mit hoher Wetter-, Hitze- und Chemikalienbeständigkeit.'],
      fr: ['Des couleurs reproductibles, lot après lot, avec une application fluide et une stabilité technique.','Développé pour les systèmes à base de solvant et les résines les plus courantes — époxy, PU, polyaspartique, alkyde.','16 pâtes colorantes couvrent tout le spectre, avec une haute résistance aux intempéries, à la chaleur et aux produits chimiques.'],
      es: ['Colores reproducibles, lote tras lote, con una aplicación fluida y estabilidad técnica.','Desarrollado para sistemas con base disolvente y las resinas más comunes — epoxi, PU, poliaspártico, alquídico.','16 pastas de color cubren todo el espectro, con alta resistencia a la intemperie, el calor y los productos químicos.'],
      it: ['Colori riproducibili, lotto dopo lotto, con applicazione fluida e stabilità tecnica.','Sviluppato per sistemi a base solvente e le resine più comuni — epossidico, PU, poliaspartico, alchidico.','16 paste coloranti coprono l\'intero spettro, con elevata resistenza ad agenti atmosferici, calore e sostanze chimiche.'],
      tr: ['Akıcı uygulama ve teknik stabilite ile parti üstüne parti tekrarlanabilir renkler.','Solvent bazlı sistemler ve en yaygın reçineler için geliştirildi — epoksi, PU, poliaspartik, alkid.','16 renk pastası yüksek hava koşulu, ısı ve kimyasal direnciyle tüm spektruma ulaşır.'] }],

    ['#system .eyebrow', { nl: 'RedLike™-inkleursysteem', pl: 'System barwiący RedLike™', ro: 'Sistemul de nuanțare RedLike™', de: 'RedLike™-Abtönsystem', fr: 'Système de teinte RedLike™', es: 'Sistema de tintado RedLike™', it: 'Sistema di tintometria RedLike™', tr: 'RedLike™ renklendirme sistemi' }],
    ['#system h2', {
      nl: 'Elke formule, <span class="red">op gewicht</span>',
      pl: 'Każda receptura, <span class="red">wagowo</span>',
      ro: 'Fiecare formulă, <span class="red">la gramaj</span>',
      de: 'Jede Formel, <span class="red">nach Gewicht</span>',
      fr: 'Chaque formule, <span class="red">au poids</span>',
      es: 'Cada fórmula, <span class="red">al peso</span>',
      it: 'Ogni formula, <span class="red">a peso</span>',
      tr: 'Her formül, <span class="red">ağırlıkça</span>' }],
    ['#system .lead', {
      nl: 'TintLab wordt ondersteund door RedLike™ — gebruiksvriendelijke online software om kleurformules op te zoeken, met toegang tot duizenden kleuren uit Fleetowner-, NCS-, RAL- en OEM-standaarden wereldwijd.',
      pl: 'TintLab jest wspierany przez RedLike™ — przyjazne oprogramowanie online do wyszukiwania receptur kolorów, z dostępem do tysięcy kolorów ze standardów Fleetowner, NCS, RAL i OEM na całym świecie.',
      ro: 'TintLab este susținut de RedLike™ — software online ușor de utilizat pentru căutarea formulelor de culoare, cu acces la mii de culori din standardele Fleetowner, NCS, RAL și OEM din întreaga lume.',
      de: 'TintLab wird durch RedLike™ unterstützt — benutzerfreundliche Online-Software zum Nachschlagen von Farbformeln, mit Zugriff auf tausende Farben aus Fleetowner-, NCS-, RAL- und OEM-Standards weltweit.',
      fr: 'TintLab est soutenu par RedLike™ — un logiciel en ligne convivial pour rechercher des formules de couleur, avec accès à des milliers de couleurs des standards Fleetowner, NCS, RAL et OEM dans le monde entier.',
      es: 'TintLab cuenta con el respaldo de RedLike™ — un software online fácil de usar para buscar fórmulas de color, con acceso a miles de colores de los estándares Fleetowner, NCS, RAL y OEM de todo el mundo.',
      it: 'TintLab è supportato da RedLike™ — un software online intuitivo per cercare le formule colore, con accesso a migliaia di colori degli standard Fleetowner, NCS, RAL e OEM di tutto il mondo.',
      tr: 'TintLab, RedLike™ tarafından desteklenir — dünya genelindeki Fleetowner, NCS, RAL ve OEM standartlarından binlerce renge erişimle, renk formüllerini aramak için kullanıcı dostu çevrimiçi yazılım.' }],
    ['#system .badge', { nl: 'Handmatig &amp; automatisch mengen', pl: 'Mieszanie ręczne i automatyczne', ro: 'Amestecare manuală și automată', de: 'Manuelles &amp; automatisches Mischen', fr: 'Mélange manuel et automatique', es: 'Mezcla manual y automática', it: 'Miscelazione manuale e automatica', tr: 'Manuel &amp; otomatik karıştırma' }],
    ['#system .split-list span', {
      nl: ['Zoek en match kleuren op je computer, tablet of telefoon.','Kleuren worden nauwkeurig op gewicht gemengd, voor strakke toleranties.','Sla klantspecifieke formules op; ontvang regelmatig database-updates.'],
      pl: ['Wyszukuj i dopasowuj kolory na komputerze, tablecie lub telefonie.','Kolory są precyzyjnie mieszane wagowo, dla wąskich tolerancji.','Przechowuj receptury klientów; otrzymuj regularne aktualizacje bazy.'],
      ro: ['Caută și potrivește culori de pe computer, tabletă sau telefon.','Culorile sunt amestecate precis la gramaj, pentru toleranțe strânse.','Stochează formule specifice clienților; primește actualizări periodice ale bazei de date.'],
      de: ['Suche und treffe Farben auf Computer, Tablet oder Telefon.','Farben werden präzise nach Gewicht gemischt, für enge Toleranzen.','Speichere kundenspezifische Formeln; erhalte regelmäßige Datenbank-Updates.'],
      fr: ['Recherchez et assortissez les couleurs depuis votre ordinateur, tablette ou téléphone.','Les couleurs sont mélangées avec précision au poids, pour des tolérances serrées.','Enregistrez des formules propres aux clients ; recevez des mises à jour régulières de la base.'],
      es: ['Busca y iguala colores desde tu ordenador, tableta o teléfono.','Los colores se mezclan con precisión al peso, para tolerancias estrechas.','Guarda fórmulas específicas de clientes; recibe actualizaciones periódicas de la base de datos.'],
      it: ['Cerca e abbina i colori da computer, tablet o telefono.','I colori vengono miscelati con precisione a peso, per tolleranze strette.','Salva le formule specifiche dei clienti; ricevi aggiornamenti periodici del database.'],
      tr: ['Renkleri bilgisayarınızdan, tabletinizden veya telefonunuzdan arayın ve eşleştirin.','Renkler dar toleranslar için ağırlıkça hassas şekilde karıştırılır.','Müşteriye özel formülleri saklayın; düzenli veritabanı güncellemeleri alın.'] }],

    ['#performance .eyebrow', { nl: 'Prestaties', pl: 'Wydajność', ro: 'Performanță', de: 'Leistung', fr: 'Performance', es: 'Rendimiento', it: 'Prestazioni', tr: 'Performans' }],
    ['#performance h2', {
      nl: 'Gemaakt voor veeleisende <span class="red">coatings</span>',
      pl: 'Stworzony do wymagających <span class="red">powłok</span>',
      ro: 'Creat pentru acoperiri <span class="red">exigente</span>',
      de: 'Gemacht für anspruchsvolle <span class="red">Beschichtungen</span>',
      fr: 'Conçu pour les <span class="red">revêtements</span> exigeants',
      es: 'Creado para <span class="red">recubrimientos</span> exigentes',
      it: 'Creato per <span class="red">rivestimenti</span> esigenti',
      tr: 'Zorlu <span class="red">kaplamalar</span> için üretildi' }],
    ['#performance .lead', {
      nl: 'Zorgvuldig geformuleerde pigmentatie die ruimschoots voldoet aan de technische eisen van industriële coatings — compatibel met de meest gangbare harssystemen.',
      pl: 'Starannie opracowana pigmentacja, która z nawiązką spełnia wymagania techniczne powłok przemysłowych — zgodna z najczęstszymi systemami żywic.',
      ro: 'Pigmentare atent formulată care depășește cerințele tehnice ale acoperirilor industriale — compatibilă cu cele mai comune sisteme de rășini.',
      de: 'Sorgfältig formulierte Pigmentierung, die die technischen Anforderungen von Industriebeschichtungen mehr als erfüllt — kompatibel mit den gängigsten Harzsystemen.',
      fr: 'Une pigmentation soigneusement formulée qui dépasse largement les exigences techniques des revêtements industriels — compatible avec les systèmes de résine les plus courants.',
      es: 'Una pigmentación cuidadosamente formulada que supera con creces las exigencias técnicas de los recubrimientos industriales — compatible con los sistemas de resina más comunes.',
      it: 'Una pigmentazione formulata con cura che supera ampiamente i requisiti tecnici dei rivestimenti industriali — compatibile con i sistemi di resina più comuni.',
      tr: 'Endüstriyel kaplamaların teknik gereksinimlerini fazlasıyla karşılayan özenle formüle edilmiş pigmentasyon — en yaygın reçine sistemleriyle uyumlu.' }],
    ['#performance .feat b', {
      nl: ['Weersbestendigheid','Hittebestendigheid','Chemische bestendigheid','Geen prestatieverlies',"16 kleurpasta's",'Strakke toleranties'],
      pl: ['Odporność na warunki atm.','Odporność na ciepło','Odporność chemiczna','Bez utraty właściwości','16 past kolorystycznych','Wąskie tolerancje'],
      ro: ['Rezistență la intemperii','Rezistență la căldură','Rezistență chimică','Fără pierderi de proprietăți','16 paste de culoare','Toleranțe strânse'],
      de: ['Witterungsbeständigkeit','Hitzebeständigkeit','Chemikalienbeständigkeit','Kein Leistungsverlust','16 Farbpasten','Enge Toleranzen'],
      fr: ['Résistance aux intempéries','Résistance à la chaleur','Résistance chimique','Aucune perte de performance','16 pâtes colorantes','Tolérances serrées'],
      es: ['Resistencia a la intemperie','Resistencia al calor','Resistencia química','Sin pérdida de prestaciones','16 pastas de color','Tolerancias estrechas'],
      it: ['Resistenza agli agenti atmosferici','Resistenza al calore','Resistenza chimica','Nessuna perdita di prestazioni','16 paste coloranti','Tolleranze strette'],
      tr: ['Hava koşullarına dayanıklılık','Isıya dayanıklılık','Kimyasal dayanıklılık','Performans kaybı yok','16 renk pastası','Dar toleranslar'] }],
    ['#performance .feat span', {
      nl: ['Hoogwaardige pigmenten zorgen voor uitstekende weer- en lichtechtheid (Blue Wool 8).','Pigmentatie die hitte doorstaat zonder kleurverschuiving.','Ontworpen om veeleisende chemische belasting te weerstaan.','Inkleuring die de eigenschappen van de uiteindelijke coating niet aantast.','Een zorgvuldig samengesteld bereik dat het hele kleurspectrum bereikt.','De nieuwste kleurmatch-technologie — betere matches, tijd- en kostenbesparend.'],
      pl: ['Wysokiej jakości pigmenty zapewniają doskonałą odporność na warunki atmosferyczne i światło (Blue Wool 8).','Pigmentacja, która wytrzymuje ciepło bez zmiany koloru.','Zaprojektowana, by wytrzymać wymagające narażenie chemiczne.','Barwienie, które nie pogarsza właściwości gotowej powłoki.','Starannie dobrana gama pokrywająca całe spektrum kolorów.','Najnowsza technologia dopasowania kolorów — lepsze dopasowania, oszczędność czasu i pieniędzy.'],
      ro: ['Pigmenți de înaltă calitate oferă rezistență excelentă la intemperii și lumină (Blue Wool 8).','Pigmentare care rezistă la căldură fără a-și schimba culoarea.','Concepută să reziste la expuneri chimice exigente.','Nuanțare care nu compromite proprietățile acoperirii finale.','O gamă atent selectată care acoperă întregul spectru de culori.','Cea mai nouă tehnologie de potrivire a culorilor — potriviri mai bune, economisind timp și bani.'],
      de: ['Hochwertige Pigmente sorgen für exzellente Wetter- und Lichtechtheit (Blue Wool 8).','Pigmentierung, die Hitze ohne Farbverschiebung übersteht.','Entwickelt, um anspruchsvoller chemischer Belastung standzuhalten.','Abtönung, die die Eigenschaften der fertigen Beschichtung nicht beeinträchtigt.','Ein sorgfältig zusammengestelltes Spektrum, das den gesamten Farbraum erreicht.','Neueste Farbabgleich-Technologie — bessere Übereinstimmungen, spart Zeit und Geld.'],
      fr: ['Des pigments de haute qualité offrent une excellente tenue aux intempéries et à la lumière (Blue Wool 8).','Une pigmentation qui supporte la chaleur sans virage de couleur.','Conçue pour résister à des expositions chimiques exigeantes.','Une teinte qui ne compromet pas les propriétés du revêtement final.','Une gamme soigneusement composée qui atteint tout le spectre des couleurs.','La toute dernière technologie d\'assortiment des couleurs — de meilleurs résultats, du temps et de l\'argent économisés.'],
      es: ['Pigmentos de alta calidad que ofrecen una excelente solidez a la intemperie y a la luz (Blue Wool 8).','Pigmentación que soporta el calor sin virar de color.','Diseñada para resistir exposiciones químicas exigentes.','Un tintado que no compromete las propiedades del recubrimiento final.','Una gama cuidadosamente compuesta que alcanza todo el espectro de colores.','La última tecnología de igualación de color — mejores coincidencias, ahorrando tiempo y dinero.'],
      it: ['Pigmenti di alta qualità garantiscono un\'eccellente solidità agli agenti atmosferici e alla luce (Blue Wool 8).','Una pigmentazione che resiste al calore senza viraggi di colore.','Progettata per resistere a esposizioni chimiche impegnative.','Una tintometria che non compromette le proprietà del rivestimento finale.','Una gamma accuratamente composta che raggiunge l\'intero spettro dei colori.','La più recente tecnologia di abbinamento colore — abbinamenti migliori, con risparmio di tempo e denaro.'],
      tr: ['Yüksek kaliteli pigmentler mükemmel hava ve ışık haslığı sağlar (Blue Wool 8).','Renk kaymadan ısıya dayanan pigmentasyon.','Zorlu kimyasal maruziyetlere dayanacak şekilde tasarlandı.','Son kaplamanın özelliklerini bozmayan renklendirme.','Tüm renk spektrumuna ulaşan özenle oluşturulmuş bir yelpaze.','En yeni renk eşleştirme teknolojisi — daha iyi eşleşmeler, zaman ve maliyet tasarrufu.'] }],

    ['#colors .eyebrow', { nl: "Kleurpasta's", pl: 'Pasty barwiące', ro: 'Coloranți', de: 'Farbpasten', fr: 'Pâtes colorantes', es: 'Pastas de color', it: 'Paste coloranti', tr: 'Renk pastaları' }],
    ['#colors h2', {
      nl: "16 pasta's, <span class=\"red\">het volledige spectrum</span>",
      pl: '16 past, <span class="red">pełne spektrum</span>',
      ro: '16 paste, <span class="red">întregul spectru</span>',
      de: '16 Pasten, <span class="red">das volle Spektrum</span>',
      fr: '16 pâtes, <span class="red">tout le spectre</span>',
      es: '16 pastas, <span class="red">todo el espectro</span>',
      it: '16 paste, <span class="red">tutto lo spettro</span>',
      tr: '16 pasta, <span class="red">tüm spektrum</span>' }],
    ['#colors .lead', {
      nl: "Hoogwaardige kleurpasta's geformuleerd voor industriële prestaties — die het hele kleurbereik nauwkeurig bereiken, inclusief metallics.",
      pl: 'Wysokiej jakości pasty kolorystyczne opracowane do zastosowań przemysłowych — dokładnie pokrywające całą gamę kolorów, w tym metaliki.',
      ro: 'Coloranți de înaltă calitate formulați pentru performanță industrială — care acoperă cu precizie întreaga gamă de culori, inclusiv metalice.',
      de: 'Hochwertige Farbpasten, formuliert für industrielle Leistung — die den gesamten Farbbereich präzise erreichen, inklusive Metallics.',
      fr: 'Des pâtes colorantes de haute qualité formulées pour la performance industrielle — qui couvrent avec précision toute la gamme de couleurs, métallisés compris.',
      es: 'Pastas de color de alta calidad formuladas para el rendimiento industrial — que alcanzan con precisión toda la gama de colores, incluidos los metalizados.',
      it: 'Paste coloranti di alta qualità formulate per prestazioni industriali — che raggiungono con precisione l\'intera gamma di colori, metallizzati inclusi.',
      tr: 'Endüstriyel performans için formüle edilmiş yüksek kaliteli renk pastaları — metalikler dahil tüm renk yelpazesine hassasiyetle ulaşır.' }],

    ['#apply .eyebrow', { nl: 'Toepassingen', pl: 'Zastosowania', ro: 'Aplicații', de: 'Anwendungen', fr: 'Applications', es: 'Aplicaciones', it: 'Applicazioni', tr: 'Uygulamalar' }],
    ['#apply h2', {
      nl: 'Van <span class="red">infrastructuur</span><br>tot de fabrieksvloer',
      pl: 'Od <span class="red">infrastruktury</span><br>po posadzkę fabryki',
      ro: 'De la <span class="red">infrastructură</span><br>la podeaua fabricii',
      de: 'Von der <span class="red">Infrastruktur</span><br>bis zum Hallenboden',
      fr: 'De <span class="red">l\'infrastructure</span><br>au sol de l\'usine',
      es: 'De la <span class="red">infraestructura</span><br>al suelo de la fábrica',
      it: 'Dall\'<span class="red">infrastruttura</span><br>al pavimento della fabbrica',
      tr: '<span class="red">Altyapıdan</span><br>fabrika zeminine' }],
    ['#apply .lead', {
      nl: 'TintLab kleurt hoogwaardige coatings in de zwaarste industriële omgevingen — en integreert met elk standaard mengsysteem, handmatig of automatisch.',
      pl: 'TintLab barwi wysokowydajne powłoki w najtrudniejszych środowiskach przemysłowych — i integruje się z każdym standardowym systemem mieszania, ręcznym lub automatycznym.',
      ro: 'TintLab nuanțează acoperiri de înaltă performanță în cele mai dure medii industriale — și se integrează cu orice sistem standard de amestecare, manual sau automat.',
      de: 'TintLab tönt Hochleistungsbeschichtungen in den härtesten industriellen Umgebungen — und integriert sich in jedes Standard-Mischsystem, manuell oder automatisch.',
      fr: 'TintLab teinte des revêtements haute performance dans les environnements industriels les plus exigeants — et s\'intègre à tout système de mélange standard, manuel ou automatique.',
      es: 'TintLab tiñe recubrimientos de alto rendimiento en los entornos industriales más exigentes — y se integra con cualquier sistema de mezcla estándar, manual o automático.',
      it: 'TintLab tinta rivestimenti ad alte prestazioni negli ambienti industriali più severi — e si integra con qualsiasi sistema di miscelazione standard, manuale o automatico.',
      tr: 'TintLab, en zorlu endüstriyel ortamlarda yüksek performanslı kaplamaları renklendirir — ve manuel veya otomatik her standart karıştırma sistemiyle entegre olur.' }],
    ['#apply .sheet-row b', {
      nl: ['Coatingtypen','Sectoren','Harssystemen','Mengen'],
      pl: ['Typy powłok','Sektory','Systemy żywic','Mieszanie'],
      ro: ['Tipuri de acoperiri','Sectoare','Sisteme de rășini','Amestecare'],
      de: ['Beschichtungstypen','Sektoren','Harzsysteme','Mischen'],
      fr: ['Types de revêtements','Secteurs','Systèmes de résine','Mélange'],
      es: ['Tipos de recubrimiento','Sectores','Sistemas de resina','Mezcla'],
      it: ['Tipi di rivestimento','Settori','Sistemi di resina','Miscelazione'],
      tr: ['Kaplama türleri','Sektörler','Reçine sistemleri','Karıştırma'] }],
    ['#apply .sheet-row span', {
      nl: ['Industriële coatings, protective coatings en vloercoatings.','Protective coatings · Infrastructuur · Industrie · OEM · Marine &amp; offshore.','Epoxy, polyurethaan, polyaspartic en alkyd.','Compatibel met alle standaardsystemen — handmatig of volautomatisch, gemengd op gewicht.'],
      pl: ['Powłoki przemysłowe, ochronne i podłogowe.','Powłoki ochronne · Infrastruktura · Przemysł · OEM · Morskie i offshore.','Epoksyd, poliuretan, poliasparaginowe i alkid.','Zgodny ze wszystkimi standardowymi systemami — ręcznie lub w pełni automatycznie, mieszany wagowo.'],
      ro: ['Acoperiri industriale, de protecție și de pardoseală.','Acoperiri de protecție · Infrastructură · Industrie · OEM · Maritim și offshore.','Epoxi, poliuretan, poliaspartic și alchidic.','Compatibil cu toate sistemele standard — manual sau complet automat, amestecat la gramaj.'],
      de: ['Industriebeschichtungen, Schutzbeschichtungen und Bodenbeschichtungen.','Schutzbeschichtungen · Infrastruktur · Industrie · OEM · Marine &amp; Offshore.','Epoxid, Polyurethan, Polyaspartic und Alkyd.','Kompatibel mit allen Standardsystemen — manuell oder vollautomatisch, nach Gewicht gemischt.'],
      fr: ['Revêtements industriels, de protection et de sol.','Revêtements de protection · Infrastructure · Industrie · OEM · Marine et offshore.','Époxy, polyuréthane, polyaspartique et alkyde.','Compatible avec tous les systèmes standard — manuel ou entièrement automatique, mélangé au poids.'],
      es: ['Recubrimientos industriales, de protección y de suelo.','Recubrimientos de protección · Infraestructura · Industria · OEM · Marina y offshore.','Epoxi, poliuretano, poliaspártico y alquídico.','Compatible con todos los sistemas estándar — manual o totalmente automático, mezclado al peso.'],
      it: ['Rivestimenti industriali, protettivi e per pavimenti.','Rivestimenti protettivi · Infrastrutture · Industria · OEM · Marina e offshore.','Epossidico, poliuretano, poliaspartico e alchidico.','Compatibile con tutti i sistemi standard — manuale o completamente automatico, miscelato a peso.'],
      tr: ['Endüstriyel, koruyucu ve zemin kaplamaları.','Koruyucu kaplamalar · Altyapı · Endüstri · OEM · Denizcilik &amp; açık deniz.','Epoksi, poliüretan, poliaspartik ve alkid.','Tüm standart sistemlerle uyumlu — manuel veya tam otomatik, ağırlıkça karıştırılır.'] }],

    ['.cta-card .eyebrow', { nl: 'Aan de slag', pl: 'Zacznij', ro: 'Începe', de: 'Loslegen', fr: 'Commencer', es: 'Empezar', it: 'Inizia', tr: 'Başlayın' }],
    ['.cta-card h2', { nl: 'Breng TintLab naar je lijn', pl: 'Wprowadź TintLab na swoją linię', ro: 'Adu TintLab pe linia ta', de: 'Bring TintLab auf deine Linie', fr: 'Amenez TintLab sur votre ligne', es: 'Lleva TintLab a tu línea', it: 'Porta TintLab sulla tua linea', tr: 'TintLab\'i hattınıza getirin' }],
    ['.cta-card p', {
      nl: 'Praat met onze coatingexperts over kleurformules, het RedLike™-systeem of het integreren van TintLab in je mengproces.',
      pl: 'Porozmawiaj z naszymi ekspertami ds. powłok o recepturach kolorów, systemie RedLike™ lub integracji TintLab z procesem mieszania.',
      ro: 'Discută cu experții noștri în acoperiri despre formule de culoare, sistemul RedLike™ sau integrarea TintLab în fluxul de amestecare.',
      de: 'Sprich mit unseren Beschichtungsexperten über Farbformeln, das RedLike™-System oder die Integration von TintLab in deinen Mischprozess.',
      fr: 'Échangez avec nos experts en revêtements sur les formules de couleur, le système RedLike™ ou l\'intégration de TintLab dans votre processus de mélange.',
      es: 'Habla con nuestros especialistas en recubrimientos sobre fórmulas de color, el sistema RedLike™ o la integración de TintLab en tu proceso de mezcla.',
      it: 'Parla con i nostri specialisti dei rivestimenti di formule colore, del sistema RedLike™ o dell\'integrazione di TintLab nel tuo processo di miscelazione.',
      tr: 'Renk formülleri, RedLike™ sistemi veya TintLab\'in karıştırma sürecinize entegrasyonu hakkında kaplama uzmanlarımızla görüşün.' }],
    ['.cta-card .btn-solid', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri', de: 'Kontakt &amp; Standorte', fr: 'Contact et sites', es: 'Contacto y sedes', it: 'Contatto e sedi', tr: 'İletişim &amp; lokasyonlar' }],
    ['.cta-card .btn-ghost', { nl: 'Ontdek Baril Group', pl: 'Poznaj Baril Group', ro: 'Descoperă Baril Group', de: 'Baril Group entdecken', fr: 'Découvrir le groupe Baril', es: 'Descubrir Baril Group', it: 'Scopri Baril Group', tr: 'Baril Group\'u keşfedin' }],

    ['.foot-claim', {
      nl: 'Betrouwbaar inkleuren, industriële prestaties.',
      pl: 'Niezawodne barwienie, przemysłowa wydajność.',
      ro: 'Nuanțare fiabilă, performanță industrială.',
      de: 'Zuverlässiges Abtönen, industrielle Leistung.',
      fr: 'Une teinte fiable, une performance industrielle.',
      es: 'Tintado fiable, rendimiento industrial.',
      it: 'Tintometria affidabile, prestazioni industriali.',
      tr: 'Güvenilir renklendirme, endüstriyel performans.' }],
    ['.foot-grid div:nth-child(2) a', {
      nl: ['RedLike™','Prestaties',"Kleurpasta's",'Toepassingen'],
      pl: ['RedLike™','Wydajność','Pasty barwiące','Zastosowania'],
      ro: ['RedLike™','Performanță','Coloranți','Aplicații'],
      de: ['RedLike™','Leistung','Farbpasten','Anwendungen'],
      fr: ['RedLike™','Performance','Pâtes colorantes','Applications'],
      es: ['RedLike™','Rendimiento','Pastas de color','Aplicaciones'],
      it: ['RedLike™','Prestazioni','Paste coloranti','Applicazioni'],
      tr: ['RedLike™','Performans','Renk pastaları','Uygulamalar'] }],
    ['.foot-bottom span', {
      nl: ["© TintLab · een merk van Baril Group · 's-Hertogenbosch NL",'Betrouwbare kleur. Industriële prestaties.'],
      pl: ["© TintLab · marka Baril Group · 's-Hertogenbosch NL",'Niezawodny kolor. Przemysłowa wydajność.'],
      ro: ["© TintLab · o marcă Baril Group · 's-Hertogenbosch NL",'Culoare fiabilă. Performanță industrială.'],
      de: ["© TintLab · eine Marke der Baril Group · 's-Hertogenbosch NL",'Zuverlässige Farbe. Industrielle Leistung.'],
      fr: ["© TintLab · une marque du groupe Baril · 's-Hertogenbosch NL",'Une couleur fiable. Une performance industrielle.'],
      es: ["© TintLab · una marca de Baril Group · 's-Hertogenbosch NL",'Color fiable. Rendimiento industrial.'],
      it: ["© TintLab · un marchio di Baril Group · 's-Hertogenbosch NL",'Colore affidabile. Prestazioni industriali.'],
      tr: ["© TintLab · bir Baril Group markası · 's-Hertogenbosch NL",'Güvenilir renk. Endüstriyel performans.'] }]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('tintlab-lang') || 'en'; } catch (e) {}
  if (!['en', 'nl', 'pl', 'ro', 'de', 'fr', 'es', 'it', 'tr'].includes(lang)) lang = 'en';

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
    if (flagBox) { flagBox.querySelectorAll('button[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); const _c = flagBox.querySelector('.flag-current'), _s = flagBox.querySelector('button[data-lang="' + l + '"] .flag'); if (_c && _s) _c.src = _s.getAttribute('src'); }
    try { localStorage.setItem('tintlab-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro', 'de', 'fr', 'es', 'it', 'tr'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
