/* Language switch for the Resinwerks one-pager. English is authored in the DOM;
   NL / PL / RO / DE / FR / ES / IT / TR live in the MAP as
   [selector, {nl, pl, ro, de, fr, es, it, tr}].
   Brand names (Resinwerks, Baril, Baril Coatings, Novolac) are kept untranslated. */
(() => {
  'use strict';
  const MAP = [
    ['.foot-disclaimer', { nl: 'We willen onze informatie zo breed mogelijk beschikbaar maken; daarom zijn sommige teksten vertaald met Anthropic Claude AI. Komt u onverhoopt een fout tegen, laat het ons dan vooral weten.', pl: 'Chcemy udostępniać nasze informacje możliwie jak najszerzej, dlatego niektóre teksty przetłumaczyliśmy za pomocą Anthropic Claude AI. Jeśli zauważą Państwo błąd, prosimy o informację.', ro: 'Dorim să facem informațiile noastre cât mai larg disponibile; de aceea, unele texte au fost traduse cu Anthropic Claude AI. Dacă întâlniți o eroare, vă rugăm să ne anunțați.', de: 'Wir möchten unsere Informationen so breit wie möglich verfügbar machen; daher wurden einige Texte mit Anthropic Claude AI übersetzt. Sollte Ihnen ein Fehler auffallen, lassen Sie es uns bitte wissen.', fr: 'Nous souhaitons rendre nos informations aussi largement accessibles que possible ; c\'est pourquoi certains textes ont été traduits avec Anthropic Claude AI. Si vous constatez une erreur, n\'hésitez pas à nous le signaler.', es: 'Queremos que nuestra información esté disponible de la forma más amplia posible; por eso, algunos textos se han traducido con Anthropic Claude AI. Si detecta algún error, le rogamos que nos lo comunique.', it: 'Vogliamo rendere le nostre informazioni il più ampiamente disponibili possibile; per questo alcuni testi sono stati tradotti con Anthropic Claude AI. Se dovesse notare un errore, vi preghiamo di segnalarcelo.', tr: 'Bilgilerimizi mümkün olduğunca geniş kitlelere ulaştırmak istiyoruz; bu nedenle bazı metinler Anthropic Claude AI ile çevrildi. Bir hata fark ederseniz lütfen bize bildirin.', no: 'Vi ønsker å gjøre informasjonen vår så bredt tilgjengelig som mulig; derfor er noen tekster oversatt med Anthropic Claude AI. Skulle du oppdage en feil, setter vi stor pris på at du gir oss beskjed.', sv: 'Vi vill göra vår information så brett tillgänglig som möjligt; därför har vissa texter översatts med Anthropic Claude AI. Om du upptäcker ett fel får du gärna meddela oss.' }],
    ['.navlinks a', {
      nl: ['Waarom Resinwerks','Producten','Prestaties','Toepassingen','Contact'],
      pl: ['Dlaczego Resinwerks','Produkty','Wydajność','Zastosowania','Kontakt'],
      ro: ['De ce Resinwerks','Produse','Performanță','Aplicații','Contact'],
      de: ['Warum Resinwerks','Produkte','Leistung','Anwendungen','Kontakt'],
      fr: ['Pourquoi Resinwerks','Produits','Performance','Applications','Contact'],
      es: ['Por qué Resinwerks','Productos','Rendimiento','Aplicaciones','Contacto'],
      it: ['Perché Resinwerks','Prodotti','Prestazioni','Applicazioni','Contatto'],
      tr: ['Neden Resinwerks','Ürünler','Performans','Uygulamalar','İletişim'], no: ['Hvorfor Resinwerks','Produkter','Ytelse','Bruksområder','Kontakt'], sv: ['Varför Resinwerks','Produkter','Prestanda','Användningsområden','Kontakt'] }],
    ['header .eyebrow .eb-txt', {
      nl: 'Resinwerks — Harsvloercoatings · Een merk van Baril Group',
      pl: 'Resinwerks — Żywiczne powłoki posadzkowe · Marka Baril Group',
      ro: 'Resinwerks — Pardoseli rășinoase · O marcă Baril Group',
      de: 'Resinwerks — Harz-Bodenbeschichtungen · Eine Marke der Baril Group',
      fr: 'Resinwerks — Revêtements de sol résineux · Une marque du groupe Baril',
      es: 'Resinwerks — Recubrimientos de suelo resinosos · Una marca de Baril Group',
      it: 'Resinwerks — Rivestimenti per pavimenti in resina · Un marchio di Baril Group',
      tr: 'Resinwerks — Reçineli zemin kaplamaları · Bir Baril Group markası', no: 'Resinwerks — Harpiksgulvbelegg · Et merke fra Baril Group', sv: 'Resinwerks — Hartsgolvbeläggningar · Ett varumärke från Baril Group' }],
    ['header h1', {
      nl: 'Vloeren die<br><span class="acc">presteren</span>',
      pl: 'Posadzki, które<br><span class="acc">dają radę</span>',
      ro: 'Pardoseli care<br><span class="acc">performează</span>',
      de: 'Böden, die<br><span class="acc">Leistung bringen</span>',
      fr: 'Des sols qui<br><span class="acc">performent</span>',
      es: 'Suelos que<br><span class="acc">rinden</span>',
      it: 'Pavimenti che<br><span class="acc">rendono</span>',
      tr: 'Performans gösteren<br><span class="acc">zeminler</span>', no: 'Gulv som<br><span class="acc">presterer</span>', sv: 'Golv som<br><span class="acc">presterar</span>' }],
    ['.hero-sub', {
      nl: 'Epoxy-, polyaspartische en urethaan-vloersystemen — <strong>100% vaste stof, 0-VOC</strong> en gebouwd voor garages, showrooms en de zwaarste industriële vloeren.',
      pl: 'Systemy posadzkowe epoksydowe, poliasparaginowe i uretanowe — <strong>100% części stałych, 0-VOC</strong> i stworzone do garaży, salonów i najtrudniejszych posadzek przemysłowych.',
      ro: 'Sisteme de pardoseală epoxidice, poliaspartice și uretanice — <strong>100% substanță uscată, 0-VOC</strong> și create pentru garaje, showroom-uri și cele mai dure pardoseli industriale.',
      de: 'Epoxid-, Polyaspartik- und Urethan-Bodensysteme — <strong>100% Festkörper, 0-VOC</strong> und gebaut für Garagen, Showrooms und die härtesten Industrieböden.',
      fr: 'Systèmes de sol époxy, polyaspartiques et uréthane — <strong>100% extrait sec, 0-VOC</strong> et conçus pour les garages, les showrooms et les sols industriels les plus exigeants.',
      es: 'Sistemas de suelo epoxi, poliaspárticos y de uretano — <strong>100% sólidos, 0-VOC</strong> y diseñados para garajes, salas de exposición y los suelos industriales más duros.',
      it: 'Sistemi per pavimenti epossidici, poliaspartici e uretanici — <strong>100% solidi, 0-VOC</strong> e costruiti per garage, showroom e i pavimenti industriali più impegnativi.',
      tr: 'Epoksi, poliaspartik ve üretan zemin sistemleri — <strong>%100 katı madde, 0-VOC</strong> ve garajlar, showroom\'lar ve en zorlu endüstriyel zeminler için üretildi.', no: 'Epoksy-, polyaspartiske og uretangulvsystemer — <strong>100% tørrstoff, 0-VOC</strong> og bygget for garasjer, showrooms og de tøffeste industrigulvene.', sv: 'Epoxi-, polyaspartiska och uretangolvsystem — <strong>100% torrhalt, 0-VOC</strong> och byggda för garage, showrooms och de tuffaste industrigolven.' }],
    ['header .hero-cta .btn-solid', { nl: 'Bekijk de producten', pl: 'Zobacz produkty', ro: 'Vezi produsele', de: 'Produkte entdecken', fr: 'Découvrir les produits', es: 'Ver los productos', it: 'Scopri i prodotti', tr: 'Ürünleri keşfedin', no: 'Se produktene', sv: 'Se produkterna' }],
    ['header .hero-cta .btn-ghost', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri', de: 'Kontakt &amp; Standorte', fr: 'Contact et sites', es: 'Contacto y sedes', it: 'Contatto e sedi', tr: 'İletişim &amp; lokasyonlar', no: 'Kontakt &amp; kontorer', sv: 'Kontakt &amp; kontor' }],
    ['.hero-foot span:first-child', {
      nl: 'Epoxy · Polyaspartisch · Urethaan · Metallic',
      pl: 'Epoksyd · Poliasparaginian · Uretan · Metalik',
      ro: 'Epoxidic · Poliaspartic · Uretanic · Metalic',
      de: 'Epoxid · Polyaspartik · Urethan · Metallic',
      fr: 'Époxy · Polyaspartique · Uréthane · Métallisé',
      es: 'Epoxi · Poliaspártico · Uretano · Metalizado',
      it: 'Epossidico · Poliaspartico · Uretanico · Metallizzato',
      tr: 'Epoksi · Poliaspartik · Üretan · Metalik', no: 'Epoksy · Polyaspartisk · Uretan · Metallic', sv: 'Epoxi · Polyaspartisk · Uretan · Metallic' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează', de: 'Scrollen', fr: 'Défiler', es: 'Desliza', it: 'Scorri', tr: 'Kaydır', no: 'Bla', sv: 'Skrolla' }],

    ['#mission .eyebrow', { nl: 'Waarom Resinwerks', pl: 'Dlaczego Resinwerks', ro: 'De ce Resinwerks', de: 'Warum Resinwerks', fr: 'Pourquoi Resinwerks', es: 'Por qué Resinwerks', it: 'Perché Resinwerks', tr: 'Neden Resinwerks', no: 'Hvorfor Resinwerks', sv: 'Varför Resinwerks' }],
    ['.mission-quote', {
      nl: 'Een vloer verdraagt alles wat u erop loslaat. Resinwerks ontwikkelt <em>harsgebonden</em> coatingsystemen — epoxy, polyaspartisch en urethaan — die hard hechten, chemicaliën weerstaan en er jarenlang fantastisch uitzien.',
      pl: 'Posadzka znosi wszystko, co na nią rzucisz. Resinwerks projektuje <em>żywiczne</em> systemy powłok — epoksydowe, poliasparaginowe i uretanowe — które mocno wiążą, są odporne na chemikalia i przez lata wyglądają znakomicie.',
      ro: 'O pardoseală suportă tot ce arunci peste ea. Resinwerks proiectează sisteme de acoperire <em>rășinoase</em> — epoxidice, poliaspartice și uretanice — care aderă puternic, rezistă la substanțe chimice și arată incredibil ani la rând.',
      de: 'Ein Boden hält alles aus, was Sie ihm zumuten. Resinwerks entwickelt <em>harzgebundene</em> Beschichtungssysteme — Epoxid, Polyaspartik und Urethan — die fest haften, Chemikalien widerstehen und über Jahre fantastisch aussehen.',
      fr: 'Un sol encaisse tout ce qu\'on lui inflige. Resinwerks conçoit des systèmes de revêtement <em>résineux</em> — époxy, polyaspartiques et uréthane — qui adhèrent fort, résistent aux produits chimiques et restent magnifiques pendant des années.',
      es: 'Un suelo aguanta todo lo que le eches. Resinwerks diseña sistemas de recubrimiento <em>resinosos</em> — epoxi, poliaspárticos y de uretano — que adhieren con fuerza, resisten los productos químicos y lucen increíbles durante años.',
      it: 'Un pavimento sopporta tutto ciò che gli capita. Resinwerks progetta sistemi di rivestimento <em>resinosi</em> — epossidici, poliaspartici e uretanici — che aderiscono saldamente, resistono agli agenti chimici e restano splendidi per anni.',
      tr: 'Bir zemin üzerine gelen her şeye dayanır. Resinwerks; sıkıca yapışan, kimyasallara dayanan ve yıllarca harika görünen <em>reçineli</em> kaplama sistemleri — epoksi, poliaspartik ve üretan — tasarlar.', no: 'Et gulv tåler alt du utsetter det for. Resinwerks utvikler <em>harpiksbaserte</em> beleggsystemer — epoksy, polyaspartisk og uretan — som hefter hardt, motstår kjemikalier og ser fantastiske ut i årevis.', sv: 'Ett golv tål allt du utsätter det för. Resinwerks utvecklar <em>hartsbaserade</em> beläggningssystem — epoxi, polyaspartisk och uretan — som fäster hårt, motstår kemikalier och ser fantastiska ut i åratal.' }],
    ['#mission .mm b', {
      nl: ['Volledige harssystemen','100% vaste stof, 0-VOC','Van garage tot fabriek'],
      pl: ['Pełne systemy żywiczne','100% części stałych, 0-VOC','Od garażu po zakład'],
      ro: ['Sisteme rășinoase complete','100% substanță uscată, 0-VOC','De la garaj la fabrică'],
      de: ['Komplette Harzsysteme','100% Festkörper, 0-VOC','Von der Garage zum Werk'],
      fr: ['Systèmes résineux complets','100% extrait sec, 0-VOC','Du garage à l\'usine'],
      es: ['Sistemas resinosos completos','100% sólidos, 0-VOC','Del garaje a la planta'],
      it: ['Sistemi resinosi completi','100% solidi, 0-VOC','Dal garage allo stabilimento'],
      tr: ['Tam reçineli sistemler','%100 katı madde, 0-VOC','Garajdan fabrikaya'], no: ['Komplette harpikssystemer','100% tørrstoff, 0-VOC','Fra garasje til fabrikk'], sv: ['Kompletta hartssystem','100% torrhalt, 0-VOC','Från garage till fabrik'] }],
    ['#mission .mm span', {
      nl: ['Primers, basislagen, instrooimedia en toplagen — elke laag van de vloer, ontworpen om samen te werken.','Hoogvaste en watergedragen chemie met nagenoeg nul VOC; sommige gebouwd op plantaardige harsen in plaats van aardolie.','Systemen voor garages bij woningen, showrooms, commerciële ruimtes en veeleisende industriële vloeren.'],
      pl: ['Grunty, warstwy bazowe, posypki i warstwy nawierzchniowe — każda warstwa posadzki, zaprojektowana do wspólnej pracy.','Wysokocząsteczkowe i wodorozcieńczalne chemie o niemal zerowym VOC; niektóre oparte na żywicach roślinnych zamiast ropy naftowej.','Systemy do garaży przydomowych, salonów, przestrzeni komercyjnych i wymagających posadzek przemysłowych.'],
      ro: ['Amorse, straturi de bază, materiale presărate și straturi finale — fiecare strat al pardoselii, proiectat să lucreze împreună.','Chimii cu conținut ridicat de substanță uscată și pe bază de apă, cu aproape zero VOC; unele bazate pe rășini vegetale în loc de petrol.','Sisteme pentru garaje rezidențiale, showroom-uri, spații comerciale și pardoseli industriale exigente.'],
      de: ['Grundierungen, Basisschichten, Einstreumedien und Deckschichten — jede Schicht des Bodens, aufeinander abgestimmt.','Hochfeste und wasserbasierte Chemien mit nahezu null VOC; einige auf Basis pflanzlicher Harze statt Erdöl.','Systeme für Garagen am Haus, Showrooms, Gewerberäume und anspruchsvolle Industrieböden.'],
      fr: ['Primaires, couches de base, médias de saupoudrage et couches de finition — chaque couche du sol, conçue pour fonctionner ensemble.','Chimies à fort extrait sec et à base d\'eau à très faible teneur en COV ; certaines reposant sur des résines végétales plutôt que sur le pétrole.','Des systèmes pour les garages résidentiels, les showrooms, les espaces commerciaux et les sols industriels exigeants.'],
      es: ['Imprimaciones, capas base, áridos de espolvoreo y capas de acabado — cada capa del suelo, diseñada para trabajar en conjunto.','Químicas de alto contenido en sólidos y al agua con casi cero VOC; algunas basadas en resinas vegetales en lugar de petróleo.','Sistemas para garajes residenciales, salas de exposición, espacios comerciales y suelos industriales exigentes.'],
      it: ['Primer, strati di base, granuli a spaglio e strati di finitura — ogni strato del pavimento, progettato per lavorare insieme.','Chimiche ad alto solido e a base acqua con quasi zero VOC; alcune basate su resine vegetali anziché sul petrolio.','Sistemi per garage residenziali, showroom, spazi commerciali e pavimenti industriali esigenti.'],
      tr: ['Astarlar, taban katları, serpme malzemeler ve son katlar — zeminin her katmanı, birlikte çalışmak üzere tasarlandı.','Neredeyse sıfır VOC içeren yüksek katı maddeli ve su bazlı kimyalar; bazıları petrol yerine bitki bazlı reçinelerle üretilir.','Konut garajları, showroom\'lar, ticari alanlar ve zorlu endüstriyel zeminler için sistemler.'], no: ['Primere, grunnstrøk, innstrøsmedier og topplag — hvert lag av gulvet, laget for å virke sammen.','Høytørrstoff- og vannbaserte kjemier med nær null VOC; noen bygget på plantebaserte harpikser i stedet for petroleum.','Systemer for boliggarasjer, showrooms, kommersielle rom og krevende industrigulv.'], sv: ['Primers, grundlager, strömedier och topplager — varje lager av golvet, gjort för att samverka.','Högtorrhalts- och vattenbaserade kemier med nära noll VOC; vissa byggda på växtbaserade hartser i stället för petroleum.','System för bostadsgarage, showrooms, kommersiella ytor och krävande industrigolv.'] }],

    ['#products .eyebrow', { nl: 'Producten', pl: 'Produkty', ro: 'Produse', de: 'Produkte', fr: 'Produits', es: 'Productos', it: 'Prodotti', tr: 'Ürünler', no: 'Produkter', sv: 'Produkter' }],
    ['#products h2', {
      nl: 'Elke laag, <span class="acc">één systeem</span>',
      pl: 'Każda warstwa, <span class="acc">jeden system</span>',
      ro: 'Fiecare strat, <span class="acc">un singur sistem</span>',
      de: 'Jede Schicht, <span class="acc">ein System</span>',
      fr: 'Chaque couche, <span class="acc">un seul système</span>',
      es: 'Cada capa, <span class="acc">un solo sistema</span>',
      it: 'Ogni strato, <span class="acc">un unico sistema</span>',
      tr: 'Her katman, <span class="acc">tek sistem</span>', no: 'Hvert lag, <span class="acc">ett system</span>', sv: 'Varje lager, <span class="acc">ett system</span>' }],
    ['#products .lead', {
      nl: 'Resinwerks biedt een complete lijn 100% vaste-stof en watergedragen harscoatings — primers, opbouwlagen en toplagen, afgestemd op de vloer.',
      pl: 'Resinwerks oferuje pełną linię żywicznych powłok 100% części stałych i wodorozcieńczalnych — gruntów, warstw budujących i nawierzchniowych, dopasowanych do posadzki.',
      ro: 'Resinwerks oferă o gamă completă de acoperiri rășinoase 100% substanță uscată și pe bază de apă — amorse, straturi de construcție și straturi finale, adaptate pardoselii.',
      de: 'Resinwerks bietet eine komplette Linie von 100%-Festkörper- und wasserbasierten Harzbeschichtungen — Grundierungen, Aufbauschichten und Deckschichten, abgestimmt auf den Boden.',
      fr: 'Resinwerks propose une gamme complète de revêtements résineux 100% extrait sec et à base d\'eau — primaires, couches de construction et couches de finition, adaptés au sol.',
      es: 'Resinwerks ofrece una línea completa de recubrimientos resinosos 100% sólidos y al agua — imprimaciones, capas de construcción y capas de acabado, adaptadas al suelo.',
      it: 'Resinwerks offre una linea completa di rivestimenti resinosi 100% solidi e a base acqua — primer, strati di costruzione e strati di finitura, calibrati sul pavimento.',
      tr: 'Resinwerks, zemine göre ayarlanmış %100 katı madde ve su bazlı reçineli kaplamalardan oluşan eksiksiz bir ürün hattı sunar — astarlar, dolgu katları ve son katlar.', no: 'Resinwerks tilbyr en komplett serie 100% tørrstoff- og vannbaserte harpiksbelegg — primere, oppbyggingslag og topplag, tilpasset gulvet.', sv: 'Resinwerks erbjuder en komplett serie 100% torrhalts- och vattenbaserade hartsbeläggningar — primers, uppbyggnadslager och topplager, anpassade till golvet.' }],
    ['#products .feat .prod-tag', {
      nl: ['Polyaspartisch','Epoxy','Urethaan','Decoratief'],
      pl: ['Poliasparaginian','Epoksyd','Uretan','Dekoracyjne'],
      ro: ['Poliaspartic','Epoxidic','Uretanic','Decorativ'],
      de: ['Polyaspartik','Epoxid','Urethan','Dekorativ'],
      fr: ['Polyaspartique','Époxy','Uréthane','Décoratif'],
      es: ['Poliaspártico','Epoxi','Uretano','Decorativo'],
      it: ['Poliaspartico','Epossidico','Uretanico','Decorativo'],
      tr: ['Poliaspartik','Epoksi','Üretan','Dekoratif'], no: ['Polyaspartisk','Epoksy','Uretan','Dekorativ'], sv: ['Polyaspartisk','Epoxi','Uretan','Dekorativ'] }],
    ['#products .feat span:last-child', {
      nl: ['Snel uithardende, UV-stabiele toplagen waarmee u een vloer in één dag oplevert.','Zelfnivellerende en opbouwlagen — waaronder Novolac voor superieure chemische bestendigheid en een vochtremmende dampschermprimer.','Slijt- en chemisch bestendige urethaan-toplagen voor commerciële en industriële vloeren met veel verkeer.','Metallic-epoxy\'s en decoratieve flake-systemen voor showroomwaardige vloeren die toch tegen een stootje kunnen.'],
      pl: ['Szybkoschnące, stabilne na UV warstwy nawierzchniowe, dzięki którym wykończysz posadzkę w jeden dzień.','Samopoziomujące i budujące warstwy — w tym Novolac dla najwyższej odporności chemicznej oraz grunt z barierą paroszczelną ograniczający wilgoć.','Odporne na ścieranie i chemikalia uretanowe warstwy nawierzchniowe do posadzek komercyjnych i przemysłowych o dużym natężeniu ruchu.','Epoksydy metaliczne i dekoracyjne systemy z posypką do posadzek o jakości salonowej, które wciąż wytrzymują obciążenia.'],
      ro: ['Straturi finale cu uscare rapidă, stabile la UV, care vă permit să finalizați o pardoseală într-o singură zi.','Straturi autonivelante și de construcție — inclusiv Novolac pentru rezistență chimică superioară și o amorsă barieră de vapori care reduce umiditatea.','Straturi finale uretanice rezistente la abraziune și substanțe chimice pentru pardoseli comerciale și industriale cu trafic intens.','Epoxidice metalice și sisteme decorative cu fulgi pentru pardoseli la nivel de showroom care rezistă totuși la solicitări.'],
      de: ['Schnell härtende, UV-stabile Deckschichten, mit denen Sie einen Boden an einem einzigen Tag fertigstellen.','Selbstverlaufende und Aufbauschichten — darunter Novolac für überragende Chemikalienbeständigkeit und eine feuchtigkeitssperrende Dampfsperren-Grundierung.','Abrieb- und chemikalienbeständige Urethan-Deckschichten für stark frequentierte Gewerbe- und Industrieböden.','Metallic-Epoxide und dekorative Flake-Systeme für Böden in Showroom-Qualität, die dennoch einiges aushalten.'],
      fr: ['Couches de finition à séchage rapide et stables aux UV qui vous permettent de réaliser un sol en une seule journée.','Couches autolissantes et de construction — dont le Novolac pour une résistance chimique supérieure et un primaire pare-vapeur limitant l\'humidité.','Couches de finition uréthane résistantes à l\'abrasion et aux produits chimiques pour les sols commerciaux et industriels à fort trafic.','Époxy métallisés et systèmes décoratifs à paillettes pour des sols dignes d\'un showroom qui encaissent quand même les chocs.'],
      es: ['Capas de acabado de curado rápido y estables a los rayos UV que permiten dejar listo un suelo en un solo día.','Capas autonivelantes y de construcción — incluido el Novolac para una resistencia química superior y una imprimación barrera de vapor que mitiga la humedad.','Capas de acabado de uretano resistentes a la abrasión y a los productos químicos para suelos comerciales e industriales de alto tránsito.','Epoxis metalizados y sistemas decorativos de escamas para suelos de calidad de showroom que aun así aguantan el castigo.'],
      it: ['Strati di finitura a rapida polimerizzazione e stabili ai raggi UV che ti permettono di completare un pavimento in un solo giorno.','Strati autolivellanti e di costruzione — incluso il Novolac per una resistenza chimica superiore e un primer barriera al vapore che riduce l\'umidità.','Strati di finitura uretanici resistenti all\'abrasione e agli agenti chimici per pavimenti commerciali e industriali ad alto traffico.','Epossidici metallizzati e sistemi decorativi a scaglie per pavimenti da showroom che reggono comunque le sollecitazioni.'],
      tr: ['Bir zemini tek günde tamamlamanızı sağlayan, hızlı kürlenen, UV\'ye dayanıklı son katlar.','Kendiliğinden yayılan ve dolgu katları — üstün kimyasal direnç için Novolac ve nemi azaltan buhar bariyeri astarı dahil.','Yoğun trafikli ticari ve endüstriyel zeminler için aşınmaya ve kimyasallara dayanıklı üretan son katlar.','Yine de darbeye dayanan, showroom kalitesinde zeminler için metalik epoksiler ve dekoratif flake sistemleri.'], no: ['Hurtigherdende, UV-stabile topplag som lar deg ta et gulv i bruk igjen på én dag.','Selvutjevnende lag og oppbyggingslag — inkludert Novolac for overlegen kjemisk bestandighet og en fuktdempende dampsperreprimer.','Slite- og kjemikaliebestandige uretantopplag for kommersielle og industrielle gulv med mye trafikk.','Metallic-epoksyer og dekorative flaksystemer for showroom-verdige gulv som likevel tåler en støyt.'], sv: ['Snabbhärdande, UV-stabila topplager som låter dig ta ett golv i bruk igen på en dag.','Självutjämnande lager och uppbyggnadslager — inklusive Novolac för överlägsen kemisk beständighet och en fuktdämpande ångspärrsprimer.','Nöt- och kemikalieresistenta uretantopplager för kommersiella och industriella golv med mycket trafik.','Metallic-epoxier och dekorativa flaksystem för showroomvärdiga golv som ändå tål en stöt.'] }],

    ['#performance .eyebrow', { nl: 'Prestaties', pl: 'Wydajność', ro: 'Performanță', de: 'Leistung', fr: 'Performance', es: 'Rendimiento', it: 'Prestazioni', tr: 'Performans', no: 'Ytelse', sv: 'Prestanda' }],
    ['#performance h2', {
      nl: 'Gebouwd om <span class="acc">de last te dragen</span>',
      pl: 'Stworzony, by <span class="acc">unieść obciążenie</span>',
      ro: 'Construit să <span class="acc">preia sarcina</span>',
      de: 'Gebaut, um <span class="acc">die Last zu tragen</span>',
      fr: 'Conçu pour <span class="acc">encaisser la charge</span>',
      es: 'Diseñado para <span class="acc">soportar la carga</span>',
      it: 'Costruito per <span class="acc">reggere il carico</span>',
      tr: '<span class="acc">Yükü taşımak</span> için yapıldı', no: 'Bygget for å <span class="acc">bære lasten</span>', sv: 'Byggt för att <span class="acc">bära lasten</span>' }],
    ['#performance .lead', {
      nl: 'Harssystemen ontwikkeld voor hechting, chemische bestendigheid en een afwerking die standhoudt onder constant verkeer.',
      pl: 'Systemy żywiczne zaprojektowane z myślą o przyczepności, odporności chemicznej i wykończeniu, które wytrzymuje stały ruch.',
      ro: 'Sisteme rășinoase proiectate pentru aderență, rezistență chimică și un finisaj care rezistă sub trafic constant.',
      de: 'Harzsysteme, entwickelt für Haftung, Chemikalienbeständigkeit und ein Finish, das ständigem Verkehr standhält.',
      fr: 'Des systèmes résineux conçus pour l\'adhérence, la résistance chimique et une finition qui tient sous un trafic constant.',
      es: 'Sistemas resinosos diseñados para la adherencia, la resistencia química y un acabado que aguanta bajo tránsito constante.',
      it: 'Sistemi resinosi progettati per adesione, resistenza chimica e una finitura che resiste sotto traffico costante.',
      tr: 'Yapışma, kimyasal direnç ve sürekli trafik altında dayanan bir bitiş için tasarlanmış reçineli sistemler.', no: 'Harpikssystemer utviklet for heft, kjemisk bestandighet og en finish som holder under konstant trafikk.', sv: 'Hartssystem utvecklade för vidhäftning, kemisk beständighet och en finish som håller under konstant trafik.' }],
    ['#performance .pills span', {
      nl: ['100% vaste stof / watergedragen','0-VOC','Plantaardige harsen','Metallic &amp; flake'],
      pl: ['100% części stałych / wodorozcieńczalne','0-VOC','Żywice roślinne','Metalik i posypka'],
      ro: ['100% substanță uscată / pe bază de apă','0-VOC','Rășini vegetale','Metalic și fulgi'],
      de: ['100% Festkörper / wasserbasiert','0-VOC','Pflanzliche Harze','Metallic &amp; Flake'],
      fr: ['100% extrait sec / à base d\'eau','0-VOC','Résines végétales','Métallisé et paillettes'],
      es: ['100% sólidos / al agua','0-VOC','Resinas vegetales','Metalizado y escamas'],
      it: ['100% solidi / a base acqua','0-VOC','Resine vegetali','Metallizzato e scaglie'],
      tr: ['%100 katı madde / su bazlı','0-VOC','Bitki bazlı reçineler','Metalik &amp; flake'], no: ['100% tørrstoff / vannbasert','0-VOC','Plantebaserte harpikser','Metallic &amp; flak'], sv: ['100% torrhalt / vattenbaserad','0-VOC','Växtbaserade hartser','Metallic &amp; flak'] }],
    ['#performance .feat b', {
      nl: ['Chemische bestendigheid','Vochtbeheersing','Snel weer in gebruik','Slijtvastheid','0-VOC-chemie','Showroomafwerking'],
      pl: ['Odporność chemiczna','Ograniczanie wilgoci','Szybki powrót do użytku','Odporność na ścieranie','Chemia 0-VOC','Wykończenie salonowe'],
      ro: ['Rezistență chimică','Reducerea umidității','Repunere rapidă în uz','Rezistență la abraziune','Chimie 0-VOC','Finisaj de showroom'],
      de: ['Chemikalienbeständigkeit','Feuchtigkeitsmanagement','Schnell wieder nutzbar','Abriebfestigkeit','0-VOC-Chemie','Showroom-Finish'],
      fr: ['Résistance chimique','Gestion de l\'humidité','Remise en service rapide','Résistance à l\'abrasion','Chimie 0-VOC','Finition showroom'],
      es: ['Resistencia química','Control de la humedad','Rápida puesta en servicio','Resistencia a la abrasión','Química 0-VOC','Acabado de showroom'],
      it: ['Resistenza chimica','Gestione dell\'umidità','Rapido ritorno in servizio','Resistenza all\'abrasione','Chimica 0-VOC','Finitura da showroom'],
      tr: ['Kimyasal direnç','Nem yönetimi','Hızlı tekrar kullanım','Aşınma direnci','0-VOC kimyası','Showroom bitişi'], no: ['Kjemisk bestandighet','Fuktkontroll','Rask gjenbruk','Slitebestandighet','0-VOC-kjemi','Showroom-finish'], sv: ['Kemisk beständighet','Fuktkontroll','Snabb återgång i bruk','Nötningsbeständighet','0-VOC-kemi','Showroom-finish'] }],
    ['#performance .feat span', {
      nl: ['Novolac- en hoogopbouwende epoxy\'s weerstaan zuren, oplosmiddelen en de meest agressieve fabriekschemicaliën.','Dampschermprimers op epoxybasis hechten aan beton bij vochtdampafgifte en luchtvochtigheid tot wel 99%.','Polyaspartische systemen harden snel uit — een vloer is soms al binnen een dag weer in gebruik.','Taaie urethaan- en epoxyfilms verdragen constant voet-, kar- en heftruckverkeer zonder door te slijten.','100% vaste-stof en watergedragen formules met nagenoeg nul VOC — sommige gebouwd op plantaardige harsen in plaats van aardolie.','Metallic- en decoratieve flake-systemen geven een high-end look die toch vloervast is.'],
      pl: ['Epoksydy Novolac i o wysokiej budowie wytrzymują kwasy, rozpuszczalniki i najostrzejsze chemikalia przemysłowe.','Epoksydowe grunty z barierą paroszczelną wiążą się z betonem przy emisji pary wodnej i wilgotności sięgającej nawet 99%.','Systemy poliasparaginowe szybko twardnieją — posadzkę można oddać do użytku nawet w ciągu jednego dnia.','Twarde powłoki uretanowe i epoksydowe znoszą stały ruch pieszy, wózków i wózków widłowych, nie przecierając się.','Formuły 100% części stałych i wodorozcieńczalne o niemal zerowym VOC — niektóre oparte na żywicach roślinnych zamiast ropy naftowej.','Systemy metaliczne i dekoracyjne z posypką dają ekskluzywny wygląd, który wciąż jest odporny jak posadzka.'],
      ro: ['Epoxidicele Novolac și cu putere mare de acoperire rezistă la acizi, solvenți și cele mai dure substanțe chimice din fabrici.','Amorsele epoxidice barieră de vapori aderă la beton la o emisie de vapori de apă și o umiditate de până la 99%.','Sistemele poliaspartice se întăresc rapid — o pardoseală poate fi repusă în uz în doar o zi.','Peliculele dure de uretan și epoxidice suportă trafic constant de pietoni, cărucioare și stivuitoare fără să se uzeze.','Formule 100% substanță uscată și pe bază de apă cu aproape zero VOC — unele bazate pe rășini vegetale în loc de petrol.','Sistemele metalice și decorative cu fulgi oferă un aspect premium care rămâne totuși rezistent ca o pardoseală.'],
      de: ['Novolac- und Hochbau-Epoxide widerstehen Säuren, Lösemitteln und den härtesten Werkschemikalien.','Dampfsperren-Grundierungen auf Epoxidbasis haften auf Beton bei einer Feuchtedampfabgabe und Luftfeuchtigkeit von bis zu 99%.','Polyaspartik-Systeme härten schnell aus — ein Boden ist mitunter schon nach einem Tag wieder nutzbar.','Zähe Urethan- und Epoxidfilme halten ständigem Fuß-, Wagen- und Gabelstaplerverkehr stand, ohne durchzuscheuern.','100%-Festkörper- und wasserbasierte Formeln mit nahezu null VOC — einige auf Basis pflanzlicher Harze statt Erdöl.','Metallic- und dekorative Flake-Systeme liefern einen High-End-Look, der dennoch bodenhart ist.'],
      fr: ['Les époxy Novolac et à fort garnissant résistent aux acides, aux solvants et aux produits chimiques d\'usine les plus durs.','Les primaires époxy pare-vapeur adhèrent au béton avec une émission de vapeur d\'eau et une humidité atteignant 99%.','Les systèmes polyaspartiques durcissent vite — un sol peut être remis en service en à peine une journée.','Des films uréthane et époxy tenaces encaissent un trafic constant de piétons, de chariots et de chariots élévateurs sans s\'user.','Des formules 100% extrait sec et à base d\'eau à très faible teneur en COV — certaines reposant sur des résines végétales plutôt que sur le pétrole.','Les systèmes métallisés et décoratifs à paillettes offrent un rendu haut de gamme tout en restant solides comme un sol.'],
      es: ['Los epoxis Novolac y de alto espesor resisten ácidos, disolventes y los productos químicos de planta más agresivos.','Las imprimaciones epoxi barrera de vapor se adhieren al hormigón con una emisión de vapor de humedad y una humedad de hasta el 99%.','Los sistemas poliaspárticos curan rápido — un suelo puede volver al servicio en tan solo un día.','Las tenaces películas de uretano y epoxi soportan tránsito constante de peatones, carros y carretillas sin desgastarse.','Fórmulas 100% sólidos y al agua con casi cero VOC — algunas basadas en resinas vegetales en lugar de petróleo.','Los sistemas metalizados y decorativos de escamas ofrecen un aspecto de alta gama que sigue siendo resistente como un suelo.'],
      it: ['Gli epossidici Novolac e ad alto spessore resistono ad acidi, solventi e ai più aggressivi agenti chimici di stabilimento.','I primer epossidici barriera al vapore aderiscono al calcestruzzo con emissione di vapore d\'umidità e umidità fino al 99%.','I sistemi poliaspartici induriscono in fretta — un pavimento può tornare in servizio anche in un solo giorno.','Tenaci film uretanici ed epossidici reggono il traffico costante di pedoni, carrelli e muletti senza consumarsi.','Formule 100% solidi e a base acqua con quasi zero VOC — alcune basate su resine vegetali anziché sul petrolio.','I sistemi metallizzati e decorativi a scaglie offrono un aspetto di fascia alta che resta comunque resistente come un pavimento.'],
      tr: ['Novolac ve yüksek dolgulu epoksiler asitlere, çözücülere ve en sert fabrika kimyasallarına dayanır.','Buhar bariyeri epoksi astarları, nem buharı yayılımı ve %99\'a kadar nem oranında betona yapışır.','Poliaspartik sistemler hızlı kürlenir — bir zemin yalnızca bir günde tekrar hizmete alınabilir.','Sağlam üretan ve epoksi filmler; sürekli yaya, araba ve forklift trafiğini aşınmadan taşır.','Neredeyse sıfır VOC içeren %100 katı madde ve su bazlı formüller — bazıları petrol yerine bitki bazlı reçinelerle üretilir.','Metalik ve dekoratif flake sistemleri, yine de zemin kadar sağlam kalan üst düzey bir görünüm sunar.'], no: ['Novolac- og høybyggende epoksyer motstår syrer, løsemidler og de mest aggressive fabrikkkjemikaliene.','Epoksy-dampsperreprimere hefter til betong ved fuktdampavgivelse og luftfuktighet på opptil 99%.','Polyaspartiske systemer herder raskt — et gulv kan være tilbake i bruk på så lite som én dag.','Tøffe uretan- og epoksyfilmer tåler konstant fot-, tralle- og gaffeltrucktrafikk uten å slites gjennom.','100% tørrstoff- og vannbaserte formler med nær null VOC — noen bygget på plantebaserte harpikser i stedet for petroleum.','Metallic- og dekorative flaksystemer gir et eksklusivt utseende som likevel er gulvsterkt.'], sv: ['Novolac- och högbyggande epoxier motstår syror, lösningsmedel och de mest aggressiva fabrikskemikalierna.','Epoxiångspärrsprimers fäster mot betong vid fuktångavgivning och luftfuktighet på upp till 99%.','Polyaspartiska system härdar snabbt — ett golv kan vara tillbaka i bruk på så lite som en dag.','Tåliga uretan- och epoxifilmer klarar konstant fot-, vagns- och gaffeltruckstrafik utan att slitas igenom.','100% torrhalts- och vattenbaserade formler med nära noll VOC — vissa byggda på växtbaserade hartser i stället för petroleum.','Metallic- och dekorativa flaksystem ger ett exklusivt utseende som ändå är golvtåligt.'] }],

    ['#apply .eyebrow', { nl: 'Toepassingen', pl: 'Zastosowania', ro: 'Aplicații', de: 'Anwendungen', fr: 'Applications', es: 'Aplicaciones', it: 'Applicazioni', tr: 'Uygulamalar', no: 'Bruksområder', sv: 'Användningsområden' }],
    ['#apply h2', {
      nl: 'Vloeren voor<br><span class="acc">elke ruimte</span>',
      pl: 'Posadzki do<br><span class="acc">każdej przestrzeni</span>',
      ro: 'Pardoseli pentru<br><span class="acc">fiecare spațiu</span>',
      de: 'Böden für<br><span class="acc">jeden Raum</span>',
      fr: 'Des sols pour<br><span class="acc">chaque espace</span>',
      es: 'Suelos para<br><span class="acc">cada espacio</span>',
      it: 'Pavimenti per<br><span class="acc">ogni spazio</span>',
      tr: '<span class="acc">Her alan</span><br>için zeminler', no: 'Gulv for<br><span class="acc">ethvert rom</span>', sv: 'Golv för<br><span class="acc">varje utrymme</span>' }],
    ['#apply .lead', {
      nl: 'Waar beton er goed moet uitzien en hard moet werken, heeft Resinwerks een passend harssysteem.',
      pl: 'Wszędzie tam, gdzie beton musi dobrze wyglądać i ciężko pracować, Resinwerks ma odpowiedni system żywiczny.',
      ro: 'Oriunde betonul trebuie să arate bine și să muncească din greu, Resinwerks are un sistem rășinos potrivit.',
      de: 'Wo Beton gut aussehen und hart arbeiten muss, hat Resinwerks ein passendes Harzsystem.',
      fr: 'Partout où le béton doit être beau et travailler dur, Resinwerks dispose d\'un système résineux adapté.',
      es: 'Allá donde el hormigón deba verse bien y trabajar duro, Resinwerks tiene un sistema resinoso a la medida.',
      it: 'Ovunque il calcestruzzo debba essere bello e lavorare duro, Resinwerks ha un sistema resinoso adatto.',
      tr: 'Betonun hem iyi görünmesi hem de çok çalışması gereken her yerde, Resinwerks\'in uygun bir reçineli sistemi vardır.', no: 'Der betong må se bra ut og jobbe hardt, har Resinwerks et passende harpikssystem.', sv: 'Där betong måste se bra ut och arbeta hårt har Resinwerks ett passande hartssystem.' }],
    ['#apply .sheet-row b', {
      nl: ['Garage &amp; woning','Showrooms &amp; retail','Magazijnen &amp; logistiek','Productie &amp; fabrieken','Food &amp; beverage','Zorg &amp; instellingen'],
      pl: ['Garaż i dom','Salony i handel detaliczny','Magazyny i logistyka','Produkcja i zakłady','Spożywczy i napoje','Ochrona zdrowia i instytucje'],
      ro: ['Garaj &amp; rezidențial','Showroom-uri &amp; retail','Depozite &amp; logistică','Producție &amp; fabrici','Alimente &amp; băuturi','Sănătate &amp; instituții'],
      de: ['Garage &amp; Wohnen','Showrooms &amp; Einzelhandel','Lager &amp; Logistik','Produktion &amp; Werke','Food &amp; Beverage','Gesundheit &amp; Einrichtungen'],
      fr: ['Garage et résidentiel','Showrooms et commerce','Entrepôts et logistique','Fabrication et usines','Agroalimentaire et boissons','Santé et établissements'],
      es: ['Garaje y residencial','Salas de exposición y retail','Almacenes y logística','Fabricación y plantas','Alimentación y bebidas','Sanidad e instituciones'],
      it: ['Garage e residenziale','Showroom e retail','Magazzini e logistica','Produzione e stabilimenti','Food &amp; beverage','Sanità e istituzioni'],
      tr: ['Garaj &amp; konut','Showroom &amp; perakende','Depo &amp; lojistik','Üretim &amp; fabrikalar','Gıda &amp; içecek','Sağlık &amp; kurumlar'], no: ['Garasje &amp; bolig','Showrooms &amp; butikk','Lager &amp; logistikk','Produksjon &amp; fabrikker','Mat &amp; drikke','Helse &amp; institusjoner'], sv: ['Garage &amp; hem','Showrooms &amp; butik','Lager &amp; logistik','Produktion &amp; fabriker','Mat &amp; dryck','Vård &amp; institutioner'] }],
    ['#apply .sheet-row span', {
      nl: ['Duurzame, mooie vloeren voor garages bij woningen en leefruimtes.','Metallic- en decoratieve systemen die een eerste indruk maken en lang meegaan.','Hoogopbouwende coatings die heftruckverkeer en zware lasten verdragen.','Chemisch- en slijtbestendige vloeren voor veeleisende productieomgevingen.','Naadloze, reinigbare systemen voor hygiënische verwerkingsruimtes.','0-VOC-vloeren die makkelijk schoon te maken zijn, voor scholen, labs en de zorg.'],
      pl: ['Trwałe, ładne posadzki do garaży przydomowych i przestrzeni mieszkalnych.','Systemy metaliczne i dekoracyjne, które robią pierwsze wrażenie i długo służą.','Wysokowydajne powłoki znoszące ruch wózków widłowych i ciężkie obciążenia.','Posadzki odporne na chemikalia i ścieranie do wymagających środowisk produkcyjnych.','Bezspoinowe, łatwe do czyszczenia systemy do higienicznych stref przetwórczych.','Łatwe do czyszczenia posadzki o niskiej zawartości VOC do szkół, laboratoriów i ochrony zdrowia.'],
      ro: ['Pardoseli durabile și plăcute la vedere pentru garaje rezidențiale și spații de locuit.','Sisteme metalice și decorative care fac o primă impresie și rezistă în timp.','Acoperiri cu putere mare de acoperire care suportă traficul de stivuitoare și sarcinile grele.','Pardoseli rezistente chimic și la abraziune pentru medii de producție exigente.','Sisteme fără îmbinări, ușor de curățat, pentru zone de procesare igienice.','Pardoseli cu VOC redus, ușor de curățat, pentru școli, laboratoare și sănătate.'],
      de: ['Langlebige, schöne Böden für Garagen am Haus und Wohnräume.','Metallic- und Dekorsysteme, die einen ersten Eindruck machen und lange halten.','Hochbauende Beschichtungen, die Gabelstaplerverkehr und schwere Lasten verkraften.','Chemikalien- und abriebbeständige Böden für anspruchsvolle Produktionsumgebungen.','Fugenlose, reinigbare Systeme für hygienische Verarbeitungsbereiche.','Leicht zu reinigende Böden mit niedrigem VOC für Schulen, Labore und das Gesundheitswesen.'],
      fr: ['Des sols durables et esthétiques pour les garages résidentiels et les espaces de vie.','Des systèmes métallisés et décoratifs qui font une première impression et durent.','Des revêtements à fort garnissant qui supportent le trafic des chariots élévateurs et les charges lourdes.','Des sols résistants aux produits chimiques et à l\'abrasion pour les environnements de production exigeants.','Des systèmes sans joint et nettoyables pour les zones de transformation hygiéniques.','Des sols à faible COV et faciles à nettoyer pour les écoles, les laboratoires et la santé.'],
      es: ['Suelos duraderos y atractivos para garajes residenciales y espacios de vida.','Sistemas metalizados y decorativos que causan una primera impresión y perduran.','Recubrimientos de alto espesor que soportan el tránsito de carretillas y las cargas pesadas.','Suelos resistentes a productos químicos y a la abrasión para entornos de producción exigentes.','Sistemas continuos y lavables para áreas de procesamiento higiénicas.','Suelos de bajo VOC y fáciles de limpiar para colegios, laboratorios y sanidad.'],
      it: ['Pavimenti durevoli e belli da vedere per garage residenziali e spazi abitativi.','Sistemi metallizzati e decorativi che fanno una prima impressione e durano nel tempo.','Rivestimenti ad alto spessore che reggono il traffico dei muletti e i carichi pesanti.','Pavimenti resistenti agli agenti chimici e all\'abrasione per ambienti produttivi esigenti.','Sistemi continui e lavabili per aree di lavorazione igieniche.','Pavimenti a basso VOC e facili da pulire per scuole, laboratori e sanità.'],
      tr: ['Konut garajları ve yaşam alanları için dayanıklı, güzel görünen zeminler.','İlk izlenim bırakan ve uzun ömürlü metalik ve dekoratif sistemler.','Forklift trafiğini ve ağır yükleri taşıyan yüksek dolgulu kaplamalar.','Zorlu üretim ortamları için kimyasal ve aşınmaya dayanıklı zeminler.','Hijyenik işleme alanları için derzsiz, temizlenebilir sistemler.','Okullar, laboratuvarlar ve sağlık kuruluşları için düşük VOC\'lu, kolay temizlenen zeminler.'], no: ['Slitesterke, vakre gulv for boliggarasjer og oppholdsrom.','Metallic- og dekorative systemer som gjør førsteinntrykk og varer.','Høybyggende belegg som tåler gaffeltrucktrafikk og tunge laster.','Kjemikalie- og slitebestandige gulv for krevende produksjonsmiljøer.','Sømløse, rengjørbare systemer for hygieniske prosessområder.','0-VOC-gulv som er enkle å rengjøre, for skoler, laboratorier og helsevesen.'], sv: ['Slitstarka, vackra golv för bostadsgarage och vardagsutrymmen.','Metallic- och dekorativa system som gör ett första intryck och håller.','Högbyggande beläggningar som klarar gaffeltruckstrafik och tunga laster.','Kemikalie- och nötningsbeständiga golv för krävande produktionsmiljöer.','Sömlösa, rengörbara system för hygieniska processområden.','0-VOC-golv som är lätta att rengöra, för skolor, laboratorier och vård.'] }],

    ['#contact .eyebrow', { nl: 'Aan de slag', pl: 'Zacznij', ro: 'Începe', de: 'Loslegen', fr: 'Commencer', es: 'Empezar', it: 'Inizia', tr: 'Başlayın', no: 'Kom i gang', sv: 'Kom igång' }],
    ['#contact h2', {
      nl: 'Stel uw vloer samen',
      pl: 'Zaplanuj swoją posadzkę',
      ro: 'Specificați-vă pardoseala',
      de: 'Spezifizieren Sie Ihren Boden',
      fr: 'Définissez votre sol',
      es: 'Especifica tu suelo',
      it: 'Progetta il tuo pavimento',
      tr: 'Zemininizi belirleyin', no: 'Sett sammen gulvet ditt', sv: 'Bygg ditt golv' }],
    ['#contact p', {
      nl: 'Van één garage tot een hele fabriek — overleg met onze vloercoating-experts over het juiste Resinwerks-systeem voor uw beton.',
      pl: 'Od jednego garażu po cały zakład — porozmawiaj z naszymi ekspertami od powłok posadzkowych o właściwym systemie Resinwerks do Twojego betonu.',
      ro: 'De la un singur garaj la o întreagă fabrică — discutați cu experții noștri în acoperiri de pardoseli despre sistemul Resinwerks potrivit pentru betonul dvs.',
      de: 'Von einer einzelnen Garage bis zu einem ganzen Werk — sprechen Sie mit unseren Bodenbeschichtungsexperten über das richtige Resinwerks-System für Ihren Beton.',
      fr: 'D\'un simple garage à une usine entière — échangez avec nos experts en revêtements de sol sur le système Resinwerks adapté à votre béton.',
      es: 'Desde un solo garaje hasta una planta entera — habla con nuestros expertos en recubrimientos de suelos sobre el sistema Resinwerks adecuado para tu hormigón.',
      it: 'Da un singolo garage a un intero stabilimento — parla con i nostri esperti di rivestimenti per pavimenti del sistema Resinwerks giusto per il tuo calcestruzzo.',
      tr: 'Tek bir garajdan koca bir fabrikaya kadar — betonunuz için doğru Resinwerks sistemi hakkında zemin kaplama uzmanlarımıza danışın.', no: 'Fra én garasje til en hel fabrikk — snakk med gulvbeleggsekspertene våre om det riktige Resinwerks-systemet for betongen din.', sv: 'Från ett garage till en hel fabrik — prata med våra golvbeläggningsexperter om rätt Resinwerks-system för din betong.' }],
    ['#contact .hero-cta .btn-solid', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri', de: 'Kontakt &amp; Standorte', fr: 'Contact et sites', es: 'Contacto y sedes', it: 'Contatto e sedi', tr: 'İletişim &amp; lokasyonlar', no: 'Kontakt &amp; kontorer', sv: 'Kontakt &amp; kontor' }],
    ['#contact .hero-cta .btn-ghost', { nl: 'Ontdek Baril Group', pl: 'Poznaj Baril Group', ro: 'Descoperă Baril Group', de: 'Baril Group entdecken', fr: 'Découvrir le groupe Baril', es: 'Descubrir Baril Group', it: 'Scopri Baril Group', tr: 'Baril Group\'u keşfedin', no: 'Oppdag Baril Group', sv: 'Upptäck Baril Group' }],

    ['.foot-claim', {
      nl: 'Hoogwaardige harsvloercoatings.',
      pl: 'Wysokowydajne żywiczne powłoki posadzkowe.',
      ro: 'Acoperiri de pardoseli rășinoase de înaltă performanță.',
      de: 'Hochleistungs-Harzbodenbeschichtungen.',
      fr: 'Des revêtements de sol résineux haute performance.',
      es: 'Recubrimientos de suelo resinosos de alto rendimiento.',
      it: 'Rivestimenti per pavimenti in resina ad alte prestazioni.',
      tr: 'Yüksek performanslı reçineli zemin kaplamaları.', no: 'Høytytende harpiksgulvbelegg.', sv: 'Högpresterande hartsgolvbeläggningar.' }],
    ['footer .foot-grid div:nth-child(2) a', {
      nl: ['Polyaspartisch','Epoxy','Urethaan','Metallic &amp; flake'],
      pl: ['Poliasparaginian','Epoksyd','Uretan','Metalik i posypka'],
      ro: ['Poliaspartic','Epoxidic','Uretanic','Metalic și fulgi'],
      de: ['Polyaspartik','Epoxid','Urethan','Metallic &amp; Flake'],
      fr: ['Polyaspartique','Époxy','Uréthane','Métallisé et paillettes'],
      es: ['Poliaspártico','Epoxi','Uretano','Metalizado y escamas'],
      it: ['Poliaspartico','Epossidico','Uretanico','Metallizzato e scaglie'],
      tr: ['Poliaspartik','Epoksi','Üretan','Metalik &amp; flake'], no: ['Polyaspartisk','Epoksy','Uretan','Metallic &amp; flak'], sv: ['Polyaspartisk','Epoxi','Uretan','Metallic &amp; flak'] }],
    ['footer h3', {
      nl: ['Producten','Baril Group'],
      pl: ['Produkty','Baril Group'],
      ro: ['Produse','Baril Group'],
      de: ['Produkte','Baril Group'],
      fr: ['Produits','Baril Group'],
      es: ['Productos','Baril Group'],
      it: ['Prodotti','Baril Group'],
      tr: ['Ürünler','Baril Group'], no: ['Produkter','Baril Group'], sv: ['Produkter','Baril Group'] }],
    ['.foot-bottom span', {"nl":["© Resinwerks · een merk van Baril Group · Angola, IN","Vloeren die presteren."],"pl":["© Resinwerks · marka Baril Group · Angola, IN","Posadzki, które dają radę."],"ro":["© Resinwerks · o marcă Baril Group · Angola, IN","Pardoseli care performează."],"de":["© Resinwerks · eine Marke von Baril Group · Angola, IN","Böden, die Leistung bringen."],"fr":["© Resinwerks · une marque de Baril Group · Angola, IN","Des sols qui performent."],"es":["© Resinwerks · una marca de Baril Group · Angola, IN","Suelos que rinden."],"it":["© Resinwerks · un marchio di Baril Group · Angola, IN","Pavimenti che rendono."],"tr":["© Resinwerks · bir Baril Group markası · Angola, IN","Performans gösteren zeminler."], "no": ["© Resinwerks · et merke fra Baril Group · Angola, IN","Gulv som presterer."], "sv": ["© Resinwerks · ett varumärke från Baril Group · Angola, IN","Golv som presterar."]}]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('resinwerks-lang') || 'en'; } catch (e) {}
  if (!['en', 'nl', 'pl', 'ro', 'de', 'fr', 'es', 'it', 'tr', 'no', 'sv'].includes(lang)) lang = 'en';

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
    try { localStorage.setItem('resinwerks-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro', 'de', 'fr', 'es', 'it', 'tr', 'no', 'sv'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
