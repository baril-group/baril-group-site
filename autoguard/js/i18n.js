/* Language switch for the AutoGuard one-pager. English is authored in the DOM;
   NL / PL / RO / DE / FR / ES / IT / TR live in the MAP as
   [selector, {nl, pl, ro, de, fr, es, it, tr}].
   Brand names (AutoGuard, Baril, Baril Coatings) are kept untranslated. */
(() => {
  'use strict';
  const MAP = [
    ['.foot-disclaimer', { nl: 'We willen onze informatie zo breed mogelijk beschikbaar maken; daarom zijn sommige teksten vertaald met Anthropic Claude AI. Komt u onverhoopt een fout tegen, laat het ons dan vooral weten.', pl: 'Chcemy udostępniać nasze informacje możliwie jak najszerzej, dlatego niektóre teksty przetłumaczyliśmy za pomocą Anthropic Claude AI. Jeśli zauważą Państwo błąd, prosimy o informację.', ro: 'Dorim să facem informațiile noastre cât mai larg disponibile; de aceea, unele texte au fost traduse cu Anthropic Claude AI. Dacă întâlniți o eroare, vă rugăm să ne anunțați.', de: 'Wir möchten unsere Informationen so breit wie möglich verfügbar machen; daher wurden einige Texte mit Anthropic Claude AI übersetzt. Sollte Ihnen ein Fehler auffallen, lassen Sie es uns bitte wissen.', fr: 'Nous souhaitons rendre nos informations aussi largement accessibles que possible ; c\'est pourquoi certains textes ont été traduits avec Anthropic Claude AI. Si vous constatez une erreur, n\'hésitez pas à nous le signaler.', es: 'Queremos que nuestra información esté disponible de la forma más amplia posible; por eso, algunos textos se han traducido con Anthropic Claude AI. Si detecta algún error, le rogamos que nos lo comunique.', it: 'Vogliamo rendere le nostre informazioni il più ampiamente disponibili possibile; per questo alcuni testi sono stati tradotti con Anthropic Claude AI. Se dovesse notare un errore, vi preghiamo di segnalarcelo.', tr: 'Bilgilerimizi mümkün olduğunca geniş kitlelere ulaştırmak istiyoruz; bu nedenle bazı metinler Anthropic Claude AI ile çevrildi. Bir hata fark ederseniz lütfen bize bildirin.' }],
    ['.navlinks a', {
      nl: ['Waarom AutoGuard','Producten','Prestaties','Toepassingen','Contact'],
      pl: ['Dlaczego AutoGuard','Produkty','Wydajność','Zastosowania','Kontakt'],
      ro: ['De ce AutoGuard','Produse','Performanță','Aplicații','Contact'],
      de: ['Warum AutoGuard','Produkte','Leistung','Anwendungen','Kontakt'],
      fr: ['Pourquoi AutoGuard','Produits','Performance','Applications','Contact'],
      es: ['Por qué AutoGuard','Productos','Rendimiento','Aplicaciones','Contacto'],
      it: ['Perché AutoGuard','Prodotti','Prestazioni','Applicazioni','Contatto'],
      tr: ['Neden AutoGuard','Ürünler','Performans','Uygulamalar','İletişim'] }],
    ['header .eyebrow .eb-txt', {
      nl: 'AutoGuard — Autoschadeherstel &amp; reparatie · Een merk van Baril Group',
      pl: 'AutoGuard — Lakiernictwo &amp; naprawa pojazdów · Marka Baril Group',
      ro: 'AutoGuard — Revopsire &amp; reparații auto · O marcă Baril Group',
      de: 'AutoGuard — Autolackierung &amp; Reparatur · Eine Marke der Baril Group',
      fr: 'AutoGuard — Réfection &amp; réparation automobile · Une marque du groupe Baril',
      es: 'AutoGuard — Repintado &amp; reparación de automoción · Una marca de Baril Group',
      it: 'AutoGuard — Riverniciatura &amp; riparazione auto · Un marchio di Baril Group',
      tr: 'AutoGuard — Otomotiv boya &amp; onarımı · Bir Baril Group markası' }],
    ['header h1', {
      nl: 'Een vlekkeloze<br><span class="acc">afwerking</span>',
      pl: 'Nieskazitelne<br><span class="acc">wykończenie</span>',
      ro: 'O finisare<br><span class="acc">impecabilă</span>',
      de: 'Ein makelloses<br><span class="acc">Finish</span>',
      fr: 'Une finition<br><span class="acc">impeccable</span>',
      es: 'Un acabado<br><span class="acc">impecable</span>',
      it: 'Una finitura<br><span class="acc">impeccabile</span>',
      tr: 'Kusursuz bir<br><span class="acc">finiş</span>' }],
    ['.hero-sub', {
      nl: 'Een complete lijn automotive <strong>blanke lakken, primers, sealers, kleuren en roestpreventie</strong> — ontwikkeld voor autoschadeherstel en reparatie van vrachtwagens en machines.',
      pl: 'Kompletna linia motoryzacyjnych <strong>lakierów bezbarwnych, podkładów, uszczelniaczy, kolorów i ochrony przed rdzą</strong> — opracowana z myślą o lakiernictwie i naprawie nadwozi, ciężarówek i maszyn.',
      ro: 'O gamă completă de <strong>lacuri transparente, grunduri, izolatoare, culori și protecție anticorozivă</strong> auto — concepută pentru revopsirea și repararea caroseriilor, camioanelor și echipamentelor.',
      de: 'Eine komplette Linie automobiler <strong>Klarlacke, Grundierungen, Sealer, Farben und Rostschutz</strong> — entwickelt für Karosserie-, Lkw- und Maschinenlackierung und -reparatur.',
      fr: 'Une gamme complète de <strong>vernis, apprêts, bouche-pores, couleurs et protection antirouille</strong> automobiles — conçue pour la réfection et la réparation de carrosserie, de camions et d\'engins.',
      es: 'Una línea completa de <strong>barnices, imprimaciones, selladores, colores y protección antioxidante</strong> de automoción — diseñada para el repintado y la reparación de carrocería, camiones y maquinaria.',
      it: 'Una linea completa di <strong>trasparenti, primer, sigillanti, colori e protezione antiruggine</strong> automotive — progettata per la riverniciatura e la riparazione di carrozzerie, camion e macchinari.',
      tr: 'Otomotiv <strong>vernikleri, astarları, dolgu astarları, renkleri ve pas korumasından</strong> oluşan eksiksiz bir seri — kaporta, kamyon ve ekipman boyama ve onarımı için tasarlandı.' }],
    ['header .hero-cta .btn-solid', { nl: 'Bekijk de producten', pl: 'Zobacz produkty', ro: 'Vezi produsele', de: 'Produkte entdecken', fr: 'Découvrir les produits', es: 'Ver los productos', it: 'Scopri i prodotti', tr: 'Ürünleri keşfedin' }],
    ['header .hero-cta .btn-ghost', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri', de: 'Kontakt &amp; Standorte', fr: 'Contact et sites', es: 'Contacto y sedes', it: 'Contatto e sedi', tr: 'İletişim &amp; lokasyonlar' }],
    ['.hero-foot span:first-child', {
      nl: 'Blanke lakken · Primers · Sealers · Kleuren',
      pl: 'Lakiery bezbarwne · Podkłady · Uszczelniacze · Kolory',
      ro: 'Lacuri transparente · Grunduri · Izolatoare · Culori',
      de: 'Klarlacke · Grundierungen · Sealer · Farben',
      fr: 'Vernis · Apprêts · Bouche-pores · Couleurs',
      es: 'Barnices · Imprimaciones · Selladores · Colores',
      it: 'Trasparenti · Primer · Sigillanti · Colori',
      tr: 'Vernikler · Astarlar · Dolgu astarları · Renkler' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează', de: 'Scrollen', fr: 'Défiler', es: 'Desliza', it: 'Scorri', tr: 'Kaydır' }],

    ['#mission .eyebrow', { nl: 'Waarom AutoGuard', pl: 'Dlaczego AutoGuard', ro: 'De ce AutoGuard', de: 'Warum AutoGuard', fr: 'Pourquoi AutoGuard', es: 'Por qué AutoGuard', it: 'Perché AutoGuard', tr: 'Neden AutoGuard' }],
    ['.mission-quote', {
      nl: 'Elke reparatie moet eruitzien alsof ze nooit heeft plaatsgevonden. AutoGuard verenigt blanke lakken, primers, sealers, fabrieksmatig samengestelde kleuren en roestpreventie — een <em>complete</em> lijn voor een vlekkeloze, duurzame afwerking.',
      pl: 'Każda naprawa powinna wyglądać tak, jakby nigdy się nie wydarzyła. AutoGuard łączy lakiery bezbarwne, podkłady, uszczelniacze, fabrycznie konfekcjonowane kolory i ochronę przed rdzą — <em>kompletną</em> linię stworzoną dla nieskazitelnego, trwałego wykończenia.',
      ro: 'Fiecare reparație ar trebui să arate de parcă nu s-ar fi întâmplat niciodată. AutoGuard reunește lacuri transparente, grunduri, izolatoare, culori preparate din fabrică și protecție anticorozivă — o gamă <em>completă</em> creată pentru o finisare impecabilă și de durată.',
      de: 'Jede Reparatur sollte aussehen, als hätte sie nie stattgefunden. AutoGuard vereint Klarlacke, Grundierungen, Sealer, werkseitig angemischte Farben und Rostschutz — eine <em>komplette</em> Linie für ein makelloses, dauerhaftes Finish.',
      fr: 'Chaque réparation devrait sembler ne jamais avoir eu lieu. AutoGuard réunit vernis, apprêts, bouche-pores, couleurs préparées en usine et protection antirouille — une gamme <em>complète</em> conçue pour une finition impeccable et durable.',
      es: 'Cada reparación debería parecer que nunca ocurrió. AutoGuard reúne barnices, imprimaciones, selladores, colores preparados en fábrica y protección antioxidante — una línea <em>completa</em> creada para un acabado impecable y duradero.',
      it: 'Ogni riparazione dovrebbe sembrare non essere mai avvenuta. AutoGuard riunisce trasparenti, primer, sigillanti, colori confezionati in fabbrica e protezione antiruggine — una linea <em>completa</em> creata per una finitura impeccabile e duratura.',
      tr: 'Her onarım hiç olmamış gibi görünmeli. AutoGuard, vernikleri, astarları, dolgu astarlarını, fabrikada hazırlanmış renkleri ve pas korumasını bir araya getirir — kusursuz ve kalıcı bir finiş için oluşturulmuş <em>eksiksiz</em> bir seri.' }],
    ['#mission .mm b', {
      nl: ['Een complete lijn','Fabriekskleuren','Hogere doorlooptijd'],
      pl: ['Kompletna linia','Fabryczne kolory','Większa wydajność'],
      ro: ['O gamă completă','Culori din fabrică','Productivitate sporită'],
      de: ['Eine komplette Linie','Werkseitige Farben','Schnellerer Durchsatz'],
      fr: ['Une gamme complète','Couleurs d\'usine','Cadence accrue'],
      es: ['Una línea completa','Colores de fábrica','Mayor productividad'],
      it: ['Una linea completa','Colori di fabbrica','Maggiore produttività'],
      tr: ['Eksiksiz bir seri','Fabrika renkleri','Daha hızlı iş akışı'] }],
    ['#mission .mm span', {
      nl: ['Blanke lakken, primers, sealers, kleuren en roestpreventie — alles wat de reparatie nodig heeft, van één merk.','Fabrieksmatig samengestelde kleuren voor nauwkeurige, herhaalbare matches op carrosserie-, vrachtwagen- en machinewerk.','Innovatieve producten die uithardingstijden en afval terugbrengen, zonder dat warmte nodig is om uit te harden.'],
      pl: ['Lakiery bezbarwne, podkłady, uszczelniacze, kolory i ochrona przed rdzą — wszystko, czego potrzebuje naprawa, od jednej marki.','Fabrycznie konfekcjonowane kolory dla dokładnych, powtarzalnych dopasowań przy nadwoziach, ciężarówkach i maszynach.','Innowacyjne produkty, które skracają czas utwardzania i ograniczają odpady, bez potrzeby ogrzewania do utwardzenia.'],
      ro: ['Lacuri transparente, grunduri, izolatoare, culori și protecție anticorozivă — tot ce are nevoie reparația, de la o singură marcă.','Culori preparate din fabrică pentru potriviri precise și repetabile la caroserii, camioane și echipamente.','Produse inovatoare care reduc timpii de uscare și deșeurile, fără a fi nevoie de căldură pentru întărire.'],
      de: ['Klarlacke, Grundierungen, Sealer, Farben und Rostschutz — alles, was die Reparatur braucht, aus einer Marke.','Werkseitig angemischte Farben für präzise, wiederholbare Treffer bei Karosserie-, Lkw- und Maschinenarbeiten.','Innovative Produkte, die Trocknungszeiten und Abfall reduzieren — ganz ohne Wärme zum Aushärten.'],
      fr: ['Vernis, apprêts, bouche-pores, couleurs et protection antirouille — tout ce dont la réparation a besoin, d\'une seule marque.','Couleurs préparées en usine pour des correspondances précises et reproductibles sur carrosserie, camions et engins.','Des produits innovants qui réduisent les temps de séchage et les déchets, sans chaleur pour durcir.'],
      es: ['Barnices, imprimaciones, selladores, colores y protección antioxidante — todo lo que la reparación necesita, de una sola marca.','Colores preparados en fábrica para igualados precisos y repetibles en carrocería, camiones y maquinaria.','Productos innovadores que reducen los tiempos de curado y los residuos, sin necesidad de calor para curar.'],
      it: ['Trasparenti, primer, sigillanti, colori e protezione antiruggine — tutto ciò che serve alla riparazione, da un\'unica marca.','Colori confezionati in fabbrica per abbinamenti precisi e ripetibili su carrozzerie, camion e macchinari.','Prodotti innovativi che riducono tempi di essiccazione e sprechi, senza bisogno di calore per indurire.'],
      tr: ['Vernikler, astarlar, dolgu astarları, renkler ve pas koruması — onarımın ihtiyaç duyduğu her şey, tek markadan.','Kaporta, kamyon ve ekipman işlerinde doğru, tekrarlanabilir eşleşmeler için fabrikada hazırlanmış renkler.','Kürlenme sürelerini ve israfı azaltan, kürlenmek için ısıya ihtiyaç duymayan yenilikçi ürünler.'] }],

    ['#products .eyebrow', { nl: 'Producten', pl: 'Produkty', ro: 'Produse', de: 'Produkte', fr: 'Produits', es: 'Productos', it: 'Prodotti', tr: 'Ürünler' }],
    ['#products h2', {
      nl: 'Alles wat de <span class="acc">reparatie</span> nodig heeft',
      pl: 'Wszystko, czego potrzebuje <span class="acc">naprawa</span>',
      ro: 'Tot ce are nevoie <span class="acc">reparația</span>',
      de: 'Alles, was die <span class="acc">Reparatur</span> braucht',
      fr: 'Tout ce dont la <span class="acc">réparation</span> a besoin',
      es: 'Todo lo que la <span class="acc">reparación</span> necesita',
      it: 'Tutto ciò che serve alla <span class="acc">riparazione</span>',
      tr: '<span class="acc">Onarımın</span> ihtiyaç duyduğu her şey' }],
    ['#products .lead', {
      nl: 'AutoGuard is een complete, gespecialiseerde lijn voor de markten van autoschadeherstel en reparatie van vrachtwagens en machines — blanke lakken, primers, sealers, kleuren en roestpreventie.',
      pl: 'AutoGuard to kompletna, wyspecjalizowana linia dla rynków lakiernictwa nadwozi, ciężarówek i maszyn — lakiery bezbarwne, podkłady, uszczelniacze, kolory i ochrona przed rdzą.',
      ro: 'AutoGuard este o gamă completă și specializată pentru piețele de revopsire a caroseriilor, camioanelor și echipamentelor — lacuri transparente, grunduri, izolatoare, culori și protecție anticorozivă.',
      de: 'AutoGuard ist eine komplette, spezialisierte Linie für die Märkte Karosserie-, Lkw- und Maschinenlackierung — Klarlacke, Grundierungen, Sealer, Farben und Rostschutz.',
      fr: 'AutoGuard est une gamme complète et spécialisée pour les marchés de la réfection de carrosserie, de camions et d\'engins — vernis, apprêts, bouche-pores, couleurs et protection antirouille.',
      es: 'AutoGuard es una línea completa y especializada para los mercados de repintado de carrocería, camiones y maquinaria — barnices, imprimaciones, selladores, colores y protección antioxidante.',
      it: 'AutoGuard è una linea completa e specializzata per i mercati della riverniciatura di carrozzerie, camion e macchinari — trasparenti, primer, sigillanti, colori e protezione antiruggine.',
      tr: 'AutoGuard, kaporta, kamyon ve ekipman boyama pazarları için eksiksiz ve uzmanlaşmış bir seridir — vernikler, astarlar, dolgu astarları, renkler ve pas koruması.' }],
    ['#products .feat .prod-tag', {
      nl: ['Blanke lak','Onderlaag','Kleur','Bescherming'],
      pl: ['Lakier bezbarwny','Podkład','Kolor','Ochrona'],
      ro: ['Lac transparent','Grund','Culoare','Protecție'],
      de: ['Klarlack','Grundierung','Farbe','Schutz'],
      fr: ['Vernis','Sous-couche','Couleur','Protection'],
      es: ['Barniz','Imprimación','Color','Protección'],
      it: ['Trasparente','Fondo','Colore','Protezione'],
      tr: ['Vernik','Astar','Renk','Koruma'] }],
    ['#products .feat span:last-child', {
      nl: ['Blanke lakken met hoge helderheid die de glans vastleggen en de kleur eronder beschermen.','Primers en sealers die een vlekkeloze, goed hechtende basis voor de toplaag opbouwen.','Fabrieksmatig samengestelde kleuren voor nauwkeurige, herhaalbare matches bij reparatiewerk.','Roestpreventieproducten die gerepareerde panelen en ondergronden voor de lange termijn beschermen.'],
      pl: ['Lakiery bezbarwne o wysokiej przejrzystości, które utrwalają połysk i chronią kolor pod spodem.','Podkłady i uszczelniacze, które tworzą nieskazitelną, dobrze przylegającą bazę pod warstwę nawierzchniową.','Fabrycznie konfekcjonowane kolory dla dokładnych, powtarzalnych dopasowań w pracach naprawczych.','Produkty chroniące przed rdzą, które zabezpieczają naprawione panele i podłoża na długie lata.'],
      ro: ['Lacuri transparente cu claritate ridicată care fixează luciul și protejează culoarea de dedesubt.','Grunduri și izolatoare care construiesc o bază impecabilă și bine aderată pentru stratul de finisare.','Culori preparate din fabrică pentru potriviri precise și repetabile în lucrările de reparație.','Produse anticorozive care protejează panourile și suporturile reparate pe termen lung.'],
      de: ['Klarlacke mit hoher Klarheit, die den Glanz fixieren und die Farbe darunter schützen.','Grundierungen und Sealer, die eine makellose, gut haftende Basis für den Decklack aufbauen.','Werkseitig angemischte Farben für präzise, wiederholbare Treffer bei Reparaturarbeiten.','Rostschutzprodukte, die reparierte Bauteile und Untergründe langfristig schützen.'],
      fr: ['Des vernis d\'une grande clarté qui figent la brillance et protègent la couleur en dessous.','Des apprêts et bouche-pores qui bâtissent une base impeccable et bien accrochée pour la couche de finition.','Des couleurs préparées en usine pour des correspondances précises et reproductibles sur les réparations.','Des produits antirouille qui protègent durablement les panneaux et supports réparés.'],
      es: ['Barnices de gran transparencia que fijan el brillo y protegen el color que hay debajo.','Imprimaciones y selladores que construyen una base impecable y bien adherida para la capa de acabado.','Colores preparados en fábrica para igualados precisos y repetibles en los trabajos de reparación.','Productos antioxidantes que protegen los paneles y soportes reparados a largo plazo.'],
      it: ['Trasparenti ad alta limpidezza che fissano la brillantezza e proteggono il colore sottostante.','Primer e sigillanti che costruiscono una base impeccabile e ben aderente per la mano a finire.','Colori confezionati in fabbrica per abbinamenti precisi e ripetibili nei lavori di riparazione.','Prodotti antiruggine che proteggono a lungo pannelli e supporti riparati.'],
      tr: ['Parlaklığı sabitleyen ve altındaki rengi koruyan yüksek berraklıkta vernikler.','Son kat için kusursuz, iyi yapışan bir temel oluşturan astarlar ve dolgu astarları.','Onarım işlerinde doğru, tekrarlanabilir eşleşmeler için fabrikada hazırlanmış renkler.','Onarılan panelleri ve zeminleri uzun süre koruyan pas önleyici ürünler.'] }],

    ['#performance .eyebrow', { nl: 'Prestaties', pl: 'Wydajność', ro: 'Performanță', de: 'Leistung', fr: 'Performance', es: 'Rendimiento', it: 'Prestazioni', tr: 'Performans' }],
    ['#performance h2', {
      nl: 'Afwerking die <span class="acc">tijd bespaart</span>',
      pl: 'Wykończenie, które <span class="acc">oszczędza czas</span>',
      ro: 'Finisare care <span class="acc">economisește timp</span>',
      de: 'Ein Finish, das <span class="acc">Zeit spart</span>',
      fr: 'Une finition qui <span class="acc">gagne du temps</span>',
      es: 'Un acabado que <span class="acc">ahorra tiempo</span>',
      it: 'Una finitura che <span class="acc">fa risparmiare tempo</span>',
      tr: '<span class="acc">Zaman kazandıran</span> bir finiş' }],
    ['#performance .lead', {
      nl: 'Gespecialiseerde coatings ontwikkeld om de doorlooptijd te verbeteren — minder uithardingstijd, minder afval en minder warmte nodig, zonder in te leveren op afwerkingskwaliteit.',
      pl: 'Wyspecjalizowane powłoki opracowane, by zwiększyć przepustowość — skracają czas utwardzania, ograniczają odpady i potrzebę ciepła, bez rezygnacji z jakości wykończenia.',
      ro: 'Vopsele specializate concepute pentru a îmbunătăți productivitatea — reduc timpii de uscare, deșeurile și nevoia de căldură, fără a renunța la calitatea finisării.',
      de: 'Spezialisierte Beschichtungen, entwickelt für mehr Durchsatz — sie reduzieren Trocknungszeiten, Abfall und den Wärmebedarf, ohne Abstriche bei der Finish-Qualität.',
      fr: 'Des revêtements spécialisés conçus pour améliorer la cadence — en réduisant les temps de séchage, les déchets et le besoin de chaleur, sans rien céder sur la qualité de finition.',
      es: 'Recubrimientos especializados diseñados para mejorar la productividad — reduciendo los tiempos de curado, los residuos y la necesidad de calor, sin renunciar a la calidad del acabado.',
      it: 'Rivestimenti specializzati progettati per migliorare la produttività — riducendo tempi di essiccazione, sprechi e necessità di calore, senza rinunciare alla qualità della finitura.',
      tr: 'İş akışını iyileştirmek için tasarlanmış uzman kaplamalar — finiş kalitesinden ödün vermeden kürlenme sürelerini, israfı ve ısı ihtiyacını azaltır.' }],
    ['#performance .pills span', {
      nl: ['Kortere uithardingstijd','Geen warmte nodig','Minder afval','Blijvende glans'],
      pl: ['Krótszy czas utwardzania','Bez ciepła do utwardzenia','Mniej odpadów','Trwały połysk'],
      ro: ['Timp de uscare redus','Fără căldură pentru întărire','Mai puține deșeuri','Luciu durabil'],
      de: ['Kürzere Trocknungszeit','Keine Wärme zum Aushärten','Weniger Abfall','Dauerhafter Glanz'],
      fr: ['Temps de séchage réduit','Pas de chaleur pour durcir','Moins de déchets','Brillance durable'],
      es: ['Tiempo de curado reducido','Sin calor para curar','Menos residuos','Brillo duradero'],
      it: ['Tempo di essiccazione ridotto','Nessun calore per indurire','Meno sprechi','Brillantezza duratura'],
      tr: ['Azaltılmış kürlenme süresi','Kürlenmek için ısı gerekmez','Daha az israf','Kalıcı parlaklık'] }],
    ['#performance .feat b', {
      nl: ['Snellere uitharding','Geen warmte nodig','Blijvende glans','Nauwkeurige kleur','Corrosiebescherming','Minder afval'],
      pl: ['Szybsze utwardzanie','Bez ciepła','Trwały połysk','Dokładny kolor','Ochrona przed korozją','Mniej odpadów'],
      ro: ['Uscare mai rapidă','Fără căldură','Luciu durabil','Culoare precisă','Protecție anticorozivă','Mai puține deșeuri'],
      de: ['Schnellere Aushärtung','Keine Wärme nötig','Dauerhafter Glanz','Präzise Farbe','Korrosionsschutz','Weniger Abfall'],
      fr: ['Durcissement plus rapide','Pas de chaleur','Brillance durable','Couleur précise','Protection anticorrosion','Moins de déchets'],
      es: ['Curado más rápido','Sin necesidad de calor','Brillo duradero','Color preciso','Protección anticorrosión','Menos residuos'],
      it: ['Indurimento più rapido','Nessun calore necessario','Brillantezza duratura','Colore preciso','Protezione anticorrosione','Meno sprechi'],
      tr: ['Daha hızlı kürlenme','Isıya gerek yok','Kalıcı parlaklık','Doğru renk','Korozyon koruması','Daha az israf'] }],
    ['#performance .feat span', {
      nl: ['Innovatieve chemie verkort de uithardingstijd, zodat panelen sneller door de spuitcabine gaan.','Producten die zonder extra warmte uitharden — een besparing op energie en tijd.','Blanke lakken die een diepe, duurzame glans behouden, lang na de reparatie.','Fabrieksmatig samengestelde kleuren leveren herhaalbare, op-spec matches.','Ingebouwde roestpreventie beschermt gerepareerd metaal tegen de elementen.','Efficiënte producten die afval beperken en de productiedoorloop verbeteren.'],
      pl: ['Innowacyjne chemie skracają czas utwardzania, dzięki czemu panele szybciej przechodzą przez kabinę.','Produkty utwardzające się bez dodatkowego ciepła — oszczędność energii i czasu.','Lakiery bezbarwne, które utrzymują głęboki, trwały połysk długo po naprawie.','Fabrycznie konfekcjonowane kolory zapewniają powtarzalne, zgodne ze specyfikacją dopasowania.','Wbudowana ochrona przed rdzą chroni naprawiony metal przed żywiołami.','Wydajne produkty, które ograniczają odpady i poprawiają przepustowość produkcji.'],
      ro: ['Chimii inovatoare reduc timpii de uscare, astfel încât panourile trec mai repede prin cabină.','Produse concepute să se întărească fără căldură adăugată — economisind energie și timp.','Lacuri transparente care păstrează un luciu profund și durabil mult timp după reparație.','Culorile preparate din fabrică oferă potriviri repetabile, conforme cu specificațiile.','Protecția anticorozivă încorporată apără metalul reparat de intemperii.','Produse eficiente care reduc deșeurile și îmbunătățesc productivitatea producției.'],
      de: ['Innovative Chemien verkürzen die Trocknungszeit, sodass Bauteile schneller durch die Kabine laufen.','Produkte, die ohne zusätzliche Wärme aushärten — das spart Energie und Zeit.','Klarlacke, die einen tiefen, dauerhaften Glanz lange nach der Reparatur halten.','Werkseitig angemischte Farben liefern wiederholbare, normgerechte Treffer.','Integrierter Rostschutz bewahrt repariertes Metall vor der Witterung.','Effiziente Produkte, die Abfall reduzieren und den Produktionsdurchsatz verbessern.'],
      fr: ['Des chimies innovantes réduisent les temps de séchage pour que les panneaux passent plus vite en cabine.','Des produits conçus pour durcir sans apport de chaleur — économie d\'énergie et de temps.','Des vernis qui conservent une brillance profonde et durable longtemps après la réparation.','Les couleurs préparées en usine offrent des correspondances reproductibles et conformes.','La protection antirouille intégrée préserve le métal réparé des intempéries.','Des produits efficaces qui réduisent les déchets et améliorent la cadence de production.'],
      es: ['Químicas innovadoras reducen los tiempos de curado para que los paneles pasen antes por la cabina.','Productos diseñados para curar sin calor añadido — ahorrando energía y tiempo.','Barnices que mantienen un brillo profundo y duradero mucho después de la reparación.','Los colores preparados en fábrica ofrecen igualados repetibles y conformes a especificación.','La protección antioxidante integrada resguarda el metal reparado frente a las inclemencias.','Productos eficientes que reducen los residuos y mejoran la productividad de producción.'],
      it: ['Chimiche innovative riducono i tempi di essiccazione, così i pannelli attraversano più rapidamente la cabina.','Prodotti progettati per indurire senza calore aggiunto — risparmiando energia e tempo.','Trasparenti che mantengono una brillantezza profonda e duratura a lungo dopo la riparazione.','I colori confezionati in fabbrica offrono abbinamenti ripetibili e conformi alle specifiche.','La protezione antiruggine integrata difende il metallo riparato dalle intemperie.','Prodotti efficienti che riducono gli sprechi e migliorano la produttività di produzione.'],
      tr: ['Yenilikçi kimyalar kürlenme sürelerini azaltır, böylece paneller kabinden daha hızlı geçer.','İlave ısı olmadan kürlenmek için tasarlanmış ürünler — enerji ve zaman tasarrufu.','Onarımdan çok sonra bile derin, dayanıklı bir parlaklığı koruyan vernikler.','Fabrikada hazırlanmış renkler tekrarlanabilir, spesifikasyona uygun eşleşmeler sağlar.','Yerleşik pas koruması, onarılan metali hava koşullarına karşı korur.','İsrafı en aza indiren ve üretim akışını iyileştiren verimli ürünler.'] }],

    ['#apply .eyebrow', { nl: 'Toepassingen', pl: 'Zastosowania', ro: 'Aplicații', de: 'Anwendungen', fr: 'Applications', es: 'Aplicaciones', it: 'Applicazioni', tr: 'Uygulamalar' }],
    ['#apply h2', {
      nl: 'Coatings voor<br><span class="acc">carrosserie &amp; reparatie</span>',
      pl: 'Powłoki do<br><span class="acc">nadwozi &amp; napraw</span>',
      ro: 'Vopsele pentru<br><span class="acc">caroserie &amp; reparații</span>',
      de: 'Beschichtungen für<br><span class="acc">Karosserie &amp; Reparatur</span>',
      fr: 'Des revêtements pour<br><span class="acc">la carrosserie &amp; la réparation</span>',
      es: 'Recubrimientos para<br><span class="acc">carrocería &amp; reparación</span>',
      it: 'Rivestimenti per<br><span class="acc">carrozzeria &amp; riparazione</span>',
      tr: '<span class="acc">Kaporta &amp; onarım</span><br>için kaplamalar' }],
    ['#apply .lead', {
      nl: 'Van schadeherstel tot de revisie van machines: AutoGuard levert een vlekkeloze, beschermde afwerking.',
      pl: 'Od napraw powypadkowych po renowację maszyn: AutoGuard zapewnia nieskazitelne, chronione wykończenie.',
      ro: 'De la repararea coliziunilor la recondiționarea echipamentelor: AutoGuard oferă o finisare impecabilă și protejată.',
      de: 'Von der Unfallinstandsetzung bis zur Maschinenaufarbeitung: AutoGuard liefert ein makelloses, geschütztes Finish.',
      fr: 'De la réparation après collision à la remise en état des engins, AutoGuard offre une finition impeccable et protégée.',
      es: 'Desde la reparación de colisiones hasta la restauración de maquinaria: AutoGuard ofrece un acabado impecable y protegido.',
      it: 'Dalla riparazione delle collisioni alla rigenerazione dei macchinari: AutoGuard offre una finitura impeccabile e protetta.',
      tr: 'Kaza onarımından ekipman yenilemesine kadar AutoGuard kusursuz, korunmuş bir finiş sunar.' }],
    ['#apply .sheet-row b', {
      nl: ['Carrosserie &amp; schade','Vrachtwagen &amp; machines','Revisie','Kleurmatching','Roestpreventie','Schadeherstelbedrijven'],
      pl: ['Nadwozie &amp; kolizje','Ciężarówki &amp; maszyny','Renowacja','Dopasowanie koloru','Ochrona przed rdzą','Warsztaty blacharskie'],
      ro: ['Caroserie &amp; coliziuni','Camioane &amp; echipamente','Recondiționare','Potrivirea culorii','Protecție anticorozivă','Ateliere de caroserie'],
      de: ['Karosserie &amp; Unfall','Lkw &amp; Maschinen','Aufarbeitung','Farbabstimmung','Rostschutz','Karosseriebetriebe'],
      fr: ['Carrosserie &amp; collision','Camions &amp; engins','Remise en état','Mise en teinte','Protection antirouille','Ateliers de carrosserie'],
      es: ['Carrocería &amp; colisión','Camiones &amp; maquinaria','Restauración','Igualado de color','Protección antioxidante','Talleres de carrocería'],
      it: ['Carrozzeria &amp; collisione','Camion &amp; macchinari','Rigenerazione','Abbinamento colore','Protezione antiruggine','Carrozzerie'],
      tr: ['Kaporta &amp; kaza','Kamyon &amp; ekipman','Yenileme','Renk eşleştirme','Pas koruması','Kaporta atölyeleri'] }],
    ['#apply .sheet-row span', {
      nl: ['Blanke lakken, kleuren en sealers voor carrosserie- en schadeherstel.','Afwerking en roestpreventie voor vrachtwagens en zware machines.','Coatings om gerepareerde panelen en ondergronden te reviseren en te beschermen.','Fabrieksmatig samengestelde kleuren voor nauwkeurige, herhaalbare reparatiematches.','Beschermende producten die corrosie weghouden van gerepareerd metaal.','Een complete, op doorlooptijd gerichte lijn voor productieschadeherstelbedrijven.'],
      pl: ['Lakiery bezbarwne, kolory i uszczelniacze do napraw nadwozi i powypadkowych.','Lakierowanie i ochrona przed rdzą dla ciężarówek i maszyn ciężkich.','Powłoki do renowacji i ochrony naprawionych paneli i podłoży.','Fabrycznie konfekcjonowane kolory dla dokładnych, powtarzalnych dopasowań naprawczych.','Produkty ochronne, które trzymają korozję z dala od naprawionego metalu.','Kompletna, nastawiona na wydajność linia dla produkcyjnych warsztatów blacharskich.'],
      ro: ['Lacuri transparente, culori și izolatoare pentru reparații de caroserie și coliziuni.','Revopsire și protecție anticorozivă pentru camioane și echipamente grele.','Vopsele pentru recondiționarea și protejarea panourilor și suporturilor reparate.','Culori preparate din fabrică pentru potriviri de reparație precise și repetabile.','Produse protectoare care țin coroziunea departe de metalul reparat.','O gamă completă, axată pe productivitate, pentru atelierele de caroserie de serie.'],
      de: ['Klarlacke, Farben und Sealer für Karosserie- und Unfallinstandsetzung.','Lackierung und Rostschutz für Lkw und schwere Maschinen.','Beschichtungen zur Aufarbeitung und zum Schutz reparierter Bauteile und Untergründe.','Werkseitig angemischte Farben für präzise, wiederholbare Reparatur-Treffer.','Schutzprodukte, die Korrosion von repariertem Metall fernhalten.','Eine komplette, auf Durchsatz ausgerichtete Linie für Serien-Karosseriebetriebe.'],
      fr: ['Vernis, couleurs et bouche-pores pour la carrosserie et la réparation après collision.','Réfection et protection antirouille pour camions et engins lourds.','Des revêtements pour remettre en état et protéger les panneaux et supports réparés.','Couleurs préparées en usine pour des correspondances de réparation précises et reproductibles.','Des produits protecteurs qui éloignent la corrosion du métal réparé.','Une gamme complète, axée sur la cadence, pour les ateliers de carrosserie de série.'],
      es: ['Barnices, colores y selladores para la reparación de carrocería y colisiones.','Repintado y protección antioxidante para camiones y maquinaria pesada.','Recubrimientos para restaurar y proteger los paneles y soportes reparados.','Colores preparados en fábrica para igualados de reparación precisos y repetibles.','Productos protectores que mantienen la corrosión lejos del metal reparado.','Una línea completa, orientada a la productividad, para talleres de carrocería en serie.'],
      it: ['Trasparenti, colori e sigillanti per la riparazione di carrozzeria e collisioni.','Riverniciatura e protezione antiruggine per camion e macchinari pesanti.','Rivestimenti per rigenerare e proteggere pannelli e supporti riparati.','Colori confezionati in fabbrica per abbinamenti di riparazione precisi e ripetibili.','Prodotti protettivi che tengono la corrosione lontana dal metallo riparato.','Una linea completa, orientata alla produttività, per le carrozzerie in serie.'],
      tr: ['Kaporta ve kaza onarımı için vernikler, renkler ve dolgu astarları.','Kamyonlar ve ağır ekipmanlar için boyama ve pas koruması.','Onarılan panelleri ve zeminleri yenilemek ve korumak için kaplamalar.','Doğru, tekrarlanabilir onarım eşleşmeleri için fabrikada hazırlanmış renkler.','Korozyonu onarılan metalden uzak tutan koruyucu ürünler.','Seri üretim kaporta atölyeleri için eksiksiz, iş akışı odaklı bir seri.'] }],

    ['#contact .eyebrow', { nl: 'Aan de slag', pl: 'Zacznij', ro: 'Începe', de: 'Loslegen', fr: 'Commencer', es: 'Empezar', it: 'Inizia', tr: 'Başlayın' }],
    ['#contact h2', {
      nl: 'Stel uw afwerking samen',
      pl: 'Skonfiguruj swoje wykończenie',
      ro: 'Configurați-vă finisarea',
      de: 'Stellen Sie Ihr Finish zusammen',
      fr: 'Composez votre finition',
      es: 'Configura tu acabado',
      it: 'Configura la tua finitura',
      tr: 'Finişinizi belirleyin' }],
    ['#contact p', {
      nl: 'Overleg met onze afwerkingsexperts over de AutoGuard blanke lakken, primers, kleuren en roestpreventie die bij uw werkplaats passen.',
      pl: 'Porozmawiaj z naszymi ekspertami od wykończenia o lakierach bezbarwnych, podkładach, kolorach i ochronie przed rdzą AutoGuard, które pasują do Twojego warsztatu.',
      ro: 'Discutați cu experții noștri în finisare despre lacurile transparente, grundurile, culorile și protecția anticorozivă AutoGuard care se potrivesc atelierului dvs.',
      de: 'Sprechen Sie mit unseren Finish-Experten über die AutoGuard Klarlacke, Grundierungen, Farben und den Rostschutz, die zu Ihrem Betrieb passen.',
      fr: 'Échangez avec nos experts en finition sur les vernis, apprêts, couleurs et la protection antirouille AutoGuard adaptés à votre atelier.',
      es: 'Habla con nuestros expertos en acabado sobre los barnices, imprimaciones, colores y la protección antioxidante AutoGuard que encajan en tu taller.',
      it: 'Parla con i nostri esperti di finitura dei trasparenti, primer, colori e della protezione antiruggine AutoGuard più adatti alla tua officina.',
      tr: 'Atölyenize uygun AutoGuard vernikleri, astarları, renkleri ve pas koruması hakkında finiş uzmanlarımıza danışın.' }],
    ['#contact .hero-cta .btn-solid', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri', de: 'Kontakt &amp; Standorte', fr: 'Contact et sites', es: 'Contacto y sedes', it: 'Contatto e sedi', tr: 'İletişim &amp; lokasyonlar' }],
    ['#contact .hero-cta .btn-ghost', { nl: 'Ontdek Baril Group', pl: 'Poznaj Baril Group', ro: 'Descoperă Baril Group', de: 'Baril Group entdecken', fr: 'Découvrir le groupe Baril', es: 'Descubrir Baril Group', it: 'Scopri Baril Group', tr: 'Baril Group\'u keşfedin' }],

    ['.foot-claim', {
      nl: 'Complete coatings voor autoschadeherstel &amp; reparatie.',
      pl: 'Kompletne powłoki do lakiernictwa &amp; naprawy pojazdów.',
      ro: 'Vopsele complete pentru revopsire &amp; reparații auto.',
      de: 'Komplette Beschichtungen für Autolackierung &amp; Reparatur.',
      fr: 'Des revêtements complets pour la réfection &amp; la réparation automobile.',
      es: 'Recubrimientos completos para el repintado &amp; la reparación de automoción.',
      it: 'Rivestimenti completi per la riverniciatura &amp; riparazione auto.',
      tr: 'Otomotiv boya &amp; onarımı için eksiksiz kaplamalar.' }],
    ['footer .foot-grid div:nth-child(2) a', {
      nl: ['Blanke lakken','Primers &amp; sealers','Fabriekskleuren','Roestpreventie'],
      pl: ['Lakiery bezbarwne','Podkłady &amp; uszczelniacze','Fabryczne kolory','Ochrona przed rdzą'],
      ro: ['Lacuri transparente','Grunduri &amp; izolatoare','Culori din fabrică','Protecție anticorozivă'],
      de: ['Klarlacke','Grundierungen &amp; Sealer','Werkseitige Farben','Rostschutz'],
      fr: ['Vernis','Apprêts &amp; bouche-pores','Couleurs d\'usine','Protection antirouille'],
      es: ['Barnices','Imprimaciones &amp; selladores','Colores de fábrica','Protección antioxidante'],
      it: ['Trasparenti','Primer &amp; sigillanti','Colori di fabbrica','Protezione antiruggine'],
      tr: ['Vernikler','Astarlar &amp; dolgu astarları','Fabrika renkleri','Pas koruması'] }],
    ['footer h3', {
      nl: ['Producten','Baril Group'],
      pl: ['Produkty','Baril Group'],
      ro: ['Produse','Baril Group'],
      de: ['Produkte','Baril Group'],
      fr: ['Produits','Baril Group'],
      es: ['Productos','Baril Group'],
      it: ['Prodotti','Baril Group'],
      tr: ['Ürünler','Baril Group'] }],
    ['.foot-bottom span', {"nl":["© AutoGuard · een merk van Baril Group · Angola, IN","Een vlekkeloze afwerking."],"pl":["© AutoGuard · marka Baril Group · Angola, IN","Nieskazitelne wykończenie."],"ro":["© AutoGuard · o marcă Baril Group · Angola, IN","O finisare impecabilă."],"de":["© AutoGuard · eine Marke von Baril Group · Angola, IN","Ein makelloses Finish."],"fr":["© AutoGuard · une marque de Baril Group · Angola, IN","Une finition impeccable."],"es":["© AutoGuard · una marca de Baril Group · Angola, IN","Un acabado impecable."],"it":["© AutoGuard · un marchio di Baril Group · Angola, IN","Una finitura impeccabile."],"tr":["© AutoGuard · bir Baril Group markası · Angola, IN","Kusursuz bir finiş."]}]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('autoguard-lang') || 'en'; } catch (e) {}
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
    try { localStorage.setItem('autoguard-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro', 'de', 'fr', 'es', 'it', 'tr', 'no', 'sv'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
