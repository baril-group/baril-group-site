/* Language switch for the Fortis Coatings one-pager. English is authored in the DOM;
   NL / PL / RO / DE / FR / ES / IT live in the MAP as [selector, {nl, pl, ro, de, fr, es, it}].
   Product names (FortiMax, AquaFort, FortiCure, FortiDur) are kept untranslated. */
(() => {
  'use strict';
  const MAP = [
    ['.foot-disclaimer', { nl: 'We willen onze informatie zo breed mogelijk beschikbaar maken; daarom zijn sommige teksten vertaald met Anthropic Claude AI. Komt u onverhoopt een fout tegen, laat het ons dan vooral weten.', pl: 'Chcemy udostępniać nasze informacje możliwie jak najszerzej, dlatego niektóre teksty przetłumaczyliśmy za pomocą Anthropic Claude AI. Jeśli zauważą Państwo błąd, prosimy o informację.', ro: 'Dorim să facem informațiile noastre cât mai larg disponibile; de aceea, unele texte au fost traduse cu Anthropic Claude AI. Dacă întâlniți o eroare, vă rugăm să ne anunțați.', de: 'Wir möchten unsere Informationen so breit wie möglich verfügbar machen; daher wurden einige Texte mit Anthropic Claude AI übersetzt. Sollte Ihnen ein Fehler auffallen, lassen Sie es uns bitte wissen.', fr: 'Nous souhaitons rendre nos informations aussi largement accessibles que possible ; c\'est pourquoi certains textes ont été traduits avec Anthropic Claude AI. Si vous constatez une erreur, n\'hésitez pas à nous le signaler.', es: 'Queremos que nuestra información esté disponible de la forma más amplia posible; por eso, algunos textos se han traducido con Anthropic Claude AI. Si detecta algún error, le rogamos que nos lo comunique.', it: 'Vogliamo rendere le nostre informazioni il più ampiamente disponibili possibile; per questo alcuni testi sono stati tradotti con Anthropic Claude AI. Se dovesse notare un errore, vi preghiamo di segnalarcelo.', tr: 'Bilgilerimizi mümkün olduğunca geniş kitlelere ulaştırmak istiyoruz; bu nedenle bazı metinler Anthropic Claude AI ile çevrildi. Bir hata fark ederseniz lütfen bize bildirin.' }],
    ['.navlinks a', {
      nl: ['Waarom Fortis Coatings','Producten','Prestaties','Toepassingen','Contact'],
      pl: ['Dlaczego Fortis Coatings','Produkty','Wydajność','Zastosowania','Kontakt'],
      ro: ['De ce Fortis Coatings','Produse','Performanță','Aplicații','Contact'],
      de: ['Warum Fortis Coatings','Produkte','Leistung','Anwendungen','Kontakt'],
      fr: ['Pourquoi Fortis Coatings','Produits','Performance','Applications','Contact'],
      es: ['Por qué Fortis Coatings','Productos','Rendimiento','Aplicaciones','Contacto'],
      it: ['Perché Fortis Coatings','Prodotti','Prestazioni','Applicazioni','Contatto'],
      tr: ['Neden Fortis Coatings','Ürünler','Performans','Uygulamalar','İletişim'] }],
    ['header .eyebrow .eb-txt', {
      nl: 'Fortis Coatings — Industriële metaalcoatings · Een merk van Baril Group',
      pl: 'Fortis Coatings — Przemysłowe powłoki do metalu · Marka Baril Group',
      ro: 'Fortis Coatings — Vopsele industriale pentru metal · O marcă Baril Group',
      de: 'Fortis Coatings — Industrielle Metallbeschichtungen · Eine Marke der Baril Group',
      fr: 'Fortis Coatings — Revêtements industriels pour métal · Une marque du groupe Baril',
      es: 'Fortis Coatings — Recubrimientos industriales para metal · Una marca de Baril Group',
      it: 'Fortis Coatings — Rivestimenti industriali per metallo · Un marchio di Baril Group',
      tr: 'Fortis Coatings — Metal için endüstriyel kaplamalar · Bir Baril Group markası' }],
    ['header h1', {
      nl: 'IJzersterke<br><span class="acc">bescherming</span><br>voor metaal',
      pl: 'Żelazna<br><span class="acc">ochrona</span><br>metalu',
      ro: 'Protecție<br><span class="acc">puternică</span><br>pentru metal',
      de: 'Eisenstarker<br><span class="acc">Schutz</span><br>für Metall',
      fr: 'Une protection<br><span class="acc">à toute épreuve</span><br>pour le métal',
      es: 'Protección<br><span class="acc">a toda prueba</span><br>para el metal',
      it: 'Protezione<br><span class="acc">a tutta prova</span><br>per il metallo',
      tr: 'Metal için<br><span class="acc">çelik gibi</span><br>koruma' }],
    ['.hero-sub', {
      nl: 'Industriële primers en toplagen die <strong>maximale oppervlaktebescherming</strong> bieden onder alle atmosferische omstandigheden — gemaakt voor de metaalverwerkende industrie en snelle industriële verwerking.',
      pl: 'Przemysłowe podkłady i powłoki nawierzchniowe zapewniające <strong>maksymalną ochronę powierzchni</strong> w każdych warunkach atmosferycznych — stworzone dla przemysłu metalowego i szybkiej aplikacji przemysłowej.',
      ro: 'Grunduri și straturi de finisare industriale care oferă <strong>protecție maximă a suprafeței</strong> în orice condiții atmosferice — create pentru industria prelucrării metalelor și aplicare industrială rapidă.',
      de: 'Industrielle Grundierungen und Decklacke, die <strong>maximalen Oberflächenschutz</strong> unter allen atmosphärischen Bedingungen bieten — entwickelt für die metallverarbeitende Industrie und schnelle industrielle Verarbeitung.',
      fr: 'Primaires et couches de finition industriels offrant une <strong>protection maximale des surfaces</strong> dans toutes les conditions atmosphériques — conçus pour l\'industrie de transformation des métaux et une application industrielle rapide.',
      es: 'Imprimaciones y capas de acabado industriales que ofrecen <strong>máxima protección de la superficie</strong> en cualquier condición atmosférica — creadas para la industria del metal y una aplicación industrial rápida.',
      it: 'Primer e strati di finitura industriali che offrono <strong>massima protezione della superficie</strong> in ogni condizione atmosferica — pensati per l\'industria della lavorazione dei metalli e per un\'applicazione industriale rapida.',
      tr: 'Her türlü atmosferik koşulda <strong>maksimum yüzey koruması</strong> sağlayan endüstriyel astarlar ve son katlar — metal işleme endüstrisi ve hızlı endüstriyel uygulama için tasarlandı.' }],
    ['header .hero-cta .btn-solid', { nl: 'Bekijk de producten', pl: 'Zobacz produkty', ro: 'Vezi produsele', de: 'Produkte entdecken', fr: 'Découvrir les produits', es: 'Ver los productos', it: 'Scopri i prodotti', tr: 'Ürünleri keşfedin' }],
    ['header .hero-cta .btn-ghost', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri', de: 'Kontakt &amp; Standorte', fr: 'Contact et sites', es: 'Contacto y sedes', it: 'Contatto e sedi', tr: 'İletişim &amp; lokasyonlar' }],
    ['.hero-foot span:first-child', {
      nl: 'Alkyd · Watergedragen · Epoxy · Polyurethaan',
      pl: 'Alkid · Wodorozcieńczalne · Epoksyd · Poliuretan',
      ro: 'Alchidic · Pe bază de apă · Epoxi · Poliuretan',
      de: 'Alkyd · Wasserbasiert · Epoxid · Polyurethan',
      fr: 'Alkyde · Hydrodiluable · Époxy · Polyuréthane',
      es: 'Alquídico · Al agua · Epoxi · Poliuretano',
      it: 'Alchidico · A base acqua · Epossidico · Poliuretano',
      tr: 'Alkid · Su bazlı · Epoksi · Poliüretan' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează', de: 'Scrollen', fr: 'Défiler', es: 'Desliza', it: 'Scorri', tr: 'Kaydır' }],

    ['#mission .eyebrow', { nl: 'Waarom Fortis Coatings', pl: 'Dlaczego Fortis Coatings', ro: 'De ce Fortis Coatings', de: 'Warum Fortis Coatings', fr: 'Pourquoi Fortis Coatings', es: 'Por qué Fortis Coatings', it: 'Perché Fortis Coatings', tr: 'Neden Fortis Coatings' }],
    ['.mission-quote', {
      nl: 'Metaal verdient bescherming die blijft. Fortis Coatings levert <em>ijzersterke</em> primers en toplagen — ontwikkeld voor maximale oppervlaktebescherming onder alle atmosferische omstandigheden, en klaar voor snelle industriële verwerking.',
      pl: 'Metal zasługuje na ochronę, która trwa. Fortis Coatings dostarcza <em>żelazne</em> podkłady i powłoki nawierzchniowe — opracowane dla maksymalnej ochrony powierzchni w każdych warunkach atmosferycznych i gotowe do szybkiej aplikacji przemysłowej.',
      ro: 'Metalul merită o protecție care durează. Fortis Coatings oferă grunduri și straturi de finisare <em>puternice</em> — dezvoltate pentru protecție maximă a suprafeței în orice condiții atmosferice și gata pentru aplicare industrială rapidă.',
      de: 'Metall verdient Schutz, der hält. Fortis Coatings liefert <em>eisenstarke</em> Grundierungen und Decklacke — entwickelt für maximalen Oberflächenschutz unter allen atmosphärischen Bedingungen und bereit für die schnelle industrielle Verarbeitung.',
      fr: 'Le métal mérite une protection qui dure. Fortis Coatings propose des primaires et des couches de finition <em>ultra-résistants</em> — conçus pour une protection maximale des surfaces dans toutes les conditions atmosphériques et prêts pour une application industrielle rapide.',
      es: 'El metal merece una protección que perdure. Fortis Coatings ofrece imprimaciones y capas de acabado <em>ultrarresistentes</em> — diseñadas para una protección máxima de la superficie en cualquier condición atmosférica y listas para una aplicación industrial rápida.',
      it: 'Il metallo merita una protezione che dura. Fortis Coatings offre primer e strati di finitura <em>ultraresistenti</em> — sviluppati per la massima protezione della superficie in ogni condizione atmosferica e pronti per un\'applicazione industriale rapida.',
      tr: 'Metal, kalıcı bir koruma hak eder. Fortis Coatings <em>çelik gibi</em> astarlar ve son katlar sunar — her türlü atmosferik koşulda maksimum yüzey koruması için geliştirildi ve hızlı endüstriyel uygulamaya hazır.' }],
    ['#mission .mm b', {
      nl: ['Maximale bescherming','Gemaakt voor de lakstraat','Elke kleur, elke glansgraad'],
      pl: ['Maksymalna ochrona','Stworzony na linię','Każdy kolor, każdy połysk'],
      ro: ['Protecție maximă','Creat pentru linie','Orice culoare, orice luciu'],
      de: ['Maximaler Schutz','Für die Lackierstraße gemacht','Jede Farbe, jeder Glanzgrad'],
      fr: ['Protection maximale','Conçu pour la ligne','Toute couleur, tout brillant'],
      es: ['Protección máxima','Creado para la línea','Todo color, todo brillo'],
      it: ['Protezione massima','Creato per la linea','Ogni colore, ogni grado di brillantezza'],
      tr: ['Maksimum koruma','Boya hattı için tasarlandı','Her renk, her parlaklık derecesi'] }],
    ['#mission .mm span', {
      nl: ['Industriële primers en toplagen die metaal maximale oppervlaktebescherming geven onder alle atmosferische omstandigheden.','Geschikt voor automatische lakstraten en conventionele spuittechnieken — perfect voor snelle elektrostatische nat-in-nat applicatie.','In te kleuren met de universele hoog geconcentreerde Baril kleurpasta\'s; alkyd- en PU-systemen in glansgraden 10, 30, 60 en full gloss.'],
      pl: ['Przemysłowe podkłady i powłoki nawierzchniowe zapewniające metalowi maksymalną ochronę powierzchni w każdych warunkach atmosferycznych.','Nadają się do automatycznych linii lakierniczych i konwencjonalnych technik natryskowych — idealne do szybkiej aplikacji elektrostatycznej mokro-na-mokro.','Barwione uniwersalnymi, wysoko skoncentrowanymi pastami Baril; systemy alkidowe i PU w połyskach 10, 30, 60 i full gloss.'],
      ro: ['Grunduri și straturi de finisare industriale care oferă metalului protecție maximă a suprafeței în orice condiții atmosferice.','Potrivite pentru linii automate de vopsire și tehnici convenționale de pulverizare — perfecte pentru aplicarea electrostatică rapidă ud-pe-ud.','Nuanțabile cu pastele de culoare universale, înalt concentrate, Baril; sisteme alchidice și PU în luciurile 10, 30, 60 și full gloss.'],
      de: ['Industrielle Grundierungen und Decklacke, die Metall maximalen Oberflächenschutz unter allen atmosphärischen Bedingungen bieten.','Geeignet für automatische Lackierstraßen und konventionelle Spritzverfahren — perfekt für die schnelle elektrostatische Nass-in-Nass-Applikation.','Einfärbbar mit den universellen, hochkonzentrierten Baril-Farbpasten; Alkyd- und PU-Systeme in den Glanzgraden 10, 30, 60 und Vollglanz.'],
      fr: ['Des primaires et couches de finition industriels qui offrent au métal une protection maximale des surfaces dans toutes les conditions atmosphériques.','Adaptés aux lignes de peinture automatiques et aux techniques de pulvérisation conventionnelles — parfaits pour l\'application électrostatique humide-sur-humide rapide.','Teintables avec les pâtes colorantes universelles hautement concentrées de Baril ; systèmes alkyde et PU en brillances 10, 30, 60 et brillant intégral.'],
      es: ['Imprimaciones y capas de acabado industriales que dan al metal la máxima protección de la superficie en cualquier condición atmosférica.','Aptos para líneas de pintado automáticas y técnicas de pulverización convencionales — perfectos para la aplicación electrostática húmedo-sobre-húmedo rápida.','Tintables con las pastas de color universales altamente concentradas de Baril; sistemas alquídicos y PU en brillos 10, 30, 60 y brillo total.'],
      it: ['Primer e strati di finitura industriali che danno al metallo la massima protezione della superficie in ogni condizione atmosferica.','Adatti a linee di verniciatura automatiche e tecniche di spruzzatura convenzionali — perfetti per l\'applicazione elettrostatica bagnato-su-bagnato rapida.','Colorabili con le paste coloranti universali ad alta concentrazione Baril; sistemi alchidici e PU nelle brillantezze 10, 30, 60 e brillante pieno.'],
      tr: ['Metale her türlü atmosferik koşulda maksimum yüzey koruması sağlayan endüstriyel astarlar ve son katlar.','Otomatik boya hatları ve geleneksel püskürtme teknikleri için uygun — hızlı elektrostatik ıslak-üstüne-ıslak uygulama için mükemmel.','Baril\'in evrensel, yüksek konsantrasyonlu renk pastalarıyla renklendirilebilir; 10, 30, 60 ve tam parlaklık derecelerinde alkid ve PU sistemleri.'] }],

    ['#products .eyebrow', { nl: 'Producten', pl: 'Produkty', ro: 'Produse', de: 'Produkte', fr: 'Produits', es: 'Productos', it: 'Prodotti', tr: 'Ürünler' }],
    ['#products h2', {
      nl: 'Vier systemen, <span class="acc">één standaard</span>',
      pl: 'Cztery systemy, <span class="acc">jeden standard</span>',
      ro: 'Patru sisteme, <span class="acc">un standard</span>',
      de: 'Vier Systeme, <span class="acc">ein Standard</span>',
      fr: 'Quatre systèmes, <span class="acc">une référence</span>',
      es: 'Cuatro sistemas, <span class="acc">un estándar</span>',
      it: 'Quattro sistemi, <span class="acc">uno standard</span>',
      tr: 'Dört sistem, <span class="acc">tek standart</span>' }],
    ['#products .lead', {
      nl: 'Het Fortis Coatings-assortiment dekt elke stap van industriële metaalafwerking — primers en toplagen, solventgedragen en watergedragen, afgestemd op de eisen van de lakstraat.',
      pl: 'Asortyment Fortis Coatings obejmuje każdy etap przemysłowego wykańczania metalu — podkłady i powłoki nawierzchniowe, rozpuszczalnikowe i wodorozcieńczalne, dopasowane do wymagań linii.',
      ro: 'Gama Fortis Coatings acoperă fiecare etapă a finisării industriale a metalului — grunduri și straturi de finisare, pe bază de solvent și de apă, adaptate cerințelor liniei.',
      de: 'Das Fortis Coatings-Sortiment deckt jeden Schritt der industriellen Metallveredelung ab — Grundierungen und Decklacke, lösemittel- und wasserbasiert, abgestimmt auf die Anforderungen der Lackierstraße.',
      fr: 'La gamme Fortis Coatings couvre chaque étape de la finition industrielle du métal — primaires et couches de finition, à base de solvant et d\'eau, adaptés aux exigences de la ligne.',
      es: 'La gama Fortis Coatings cubre cada paso del acabado industrial del metal — imprimaciones y capas de acabado, con base disolvente y al agua, ajustadas a las exigencias de la línea.',
      it: 'La gamma Fortis Coatings copre ogni fase della finitura industriale del metallo — primer e strati di finitura, a base solvente e a base acqua, su misura per le esigenze della linea.',
      tr: 'Fortis Coatings ürün yelpazesi, endüstriyel metal son işlemlerinin her adımını kapsar — astarlar ve son katlar, solvent bazlı ve su bazlı, boya hattının gereksinimlerine göre ayarlanmış.' }],
    ['#products .feat .prod-tag', {
      nl: ['Alkyd · 1K','Watergedragen','Epoxy primer','Polyurethaan · 2K'],
      pl: ['Alkid · 1K','Wodorozcieńczalny','Podkład epoksydowy','Poliuretan · 2K'],
      ro: ['Alchidic · 1K','Pe bază de apă','Grund epoxidic','Poliuretan · 2K'],
      de: ['Alkyd · 1K','Wasserbasiert','Epoxid-Grundierung','Polyurethan · 2K'],
      fr: ['Alkyde · 1K','Hydrodiluable','Primaire époxy','Polyuréthane · 2K'],
      es: ['Alquídico · 1K','Al agua','Imprimación epoxi','Poliuretano · 2K'],
      it: ['Alchidico · 1K','A base acqua','Primer epossidico','Poliuretano · 2K'],
      tr: ['Alkid · 1K','Su bazlı','Epoksi astar','Poliüretan · 2K'] }],
    ['#products .feat span:last-child', {
      nl: ['Snelle, eencomponenten alkyd-toplagen voor efficiënte industriële afwerking van uiteenlopende objecten.','Watergedragen coatings met lage emissie voor duurzame industriële bescherming, zonder in te boeten op duurzaamheid.','Hechtsterke epoxy-primers die een duurzame basis leggen op ferro- en non-ferrometalen.','Tweecomponenten polyurethaan-toplagen voor maximale duurzaamheid, glansbehoud en chemische bestendigheid.'],
      pl: ['Szybkie, jednoskładnikowe powłoki alkidowe do wydajnego wykańczania przemysłowego szerokiej gamy obiektów.','Niskoemisyjne powłoki wodorozcieńczalne do zrównoważonej ochrony przemysłowej, bez kompromisów w trwałości.','Podkłady epoksydowe o wysokiej przyczepności, tworzące trwałą bazę na metalach żelaznych i nieżelaznych.','Dwuskładnikowe powłoki poliuretanowe dla maksymalnej trwałości, zachowania połysku i odporności chemicznej.'],
      ro: ['Straturi de finisare alchidice, monocomponente, rapide, pentru finisarea industrială eficientă a unei game largi de obiecte.','Vopsele pe bază de apă cu emisii reduse pentru protecție industrială durabilă, fără compromisuri privind durabilitatea.','Grunduri epoxidice cu aderență ridicată care creează o bază durabilă pe metale feroase și neferoase.','Straturi de finisare poliuretanice bicomponente pentru durabilitate maximă, păstrarea luciului și rezistență chimică.'],
      de: ['Schnelle, einkomponentige Alkyd-Decklacke für die effiziente industrielle Veredelung unterschiedlichster Objekte.','Emissionsarme wasserbasierte Beschichtungen für nachhaltigen industriellen Schutz, ohne Abstriche bei der Beständigkeit.','Haftstarke Epoxid-Grundierungen, die eine dauerhafte Basis auf Eisen- und Nichteisenmetallen schaffen.','Zweikomponentige Polyurethan-Decklacke für maximale Beständigkeit, Glanzerhalt und Chemikalienbeständigkeit.'],
      fr: ['Couches de finition alkyde monocomposantes et rapides pour une finition industrielle efficace d\'une large gamme d\'objets.','Revêtements hydrodiluables à faibles émissions pour une protection industrielle durable, sans compromis sur la résistance.','Primaires époxy à forte adhérence qui créent une base durable sur les métaux ferreux et non ferreux.','Couches de finition polyuréthane bicomposantes pour une durabilité, une tenue du brillant et une résistance chimique maximales.'],
      es: ['Capas de acabado alquídicas monocomponente y rápidas para un acabado industrial eficiente de objetos muy diversos.','Recubrimientos al agua de bajas emisiones para una protección industrial sostenible, sin renunciar a la durabilidad.','Imprimaciones epoxi de alta adherencia que crean una base duradera sobre metales férreos y no férreos.','Capas de acabado de poliuretano bicomponente para máxima durabilidad, retención del brillo y resistencia química.'],
      it: ['Strati di finitura alchidici monocomponente e rapidi per una finitura industriale efficiente di oggetti molto diversi.','Rivestimenti a base acqua a basse emissioni per una protezione industriale sostenibile, senza rinunce sulla durabilità.','Primer epossidici ad alta adesione che creano una base duratura su metalli ferrosi e non ferrosi.','Strati di finitura poliuretanici bicomponente per massima durabilità, mantenimento della brillantezza e resistenza chimica.'],
      tr: ['Çok çeşitli nesnelerin verimli endüstriyel son işlemi için hızlı, tek bileşenli alkid son katları.','Dayanıklılıktan ödün vermeden sürdürülebilir endüstriyel koruma sağlayan düşük emisyonlu su bazlı kaplamalar.','Demir ve demir dışı metaller üzerinde dayanıklı bir temel oluşturan yüksek yapışmalı epoksi astarlar.','Maksimum dayanıklılık, parlaklık korunumu ve kimyasal direnç için iki bileşenli poliüretan son katları.'] }],

    ['#performance .eyebrow', { nl: 'Prestaties', pl: 'Wydajność', ro: 'Performanță', de: 'Leistung', fr: 'Performance', es: 'Rendimiento', it: 'Prestazioni', tr: 'Performans' }],
    ['#performance h2', {
      nl: 'Gemaakt voor <span class="acc">de lakstraat</span>',
      pl: 'Stworzony na <span class="acc">linię</span>',
      ro: 'Creat pentru <span class="acc">linie</span>',
      de: 'Gemacht für <span class="acc">die Lackierstraße</span>',
      fr: 'Conçu pour <span class="acc">la ligne</span>',
      es: 'Creado para <span class="acc">la línea</span>',
      it: 'Creato per <span class="acc">la linea</span>',
      tr: '<span class="acc">Boya hattı</span> için tasarlandı' }],
    ['#performance .lead', {
      nl: 'De industriële primers en toplagen van Fortis Coatings bieden maximale oppervlaktebescherming onder alle atmosferische omstandigheden — gebouwd om te draaien op moderne productielijnen.',
      pl: 'Przemysłowe podkłady i powłoki nawierzchniowe Fortis Coatings zapewniają maksymalną ochronę powierzchni w każdych warunkach atmosferycznych — zbudowane do pracy na nowoczesnych liniach produkcyjnych.',
      ro: 'Grundurile și straturile de finisare industriale Fortis Coatings oferă protecție maximă a suprafeței în orice condiții atmosferice — construite pentru a funcționa pe linii de producție moderne.',
      de: 'Die industriellen Grundierungen und Decklacke von Fortis Coatings bieten maximalen Oberflächenschutz unter allen atmosphärischen Bedingungen — gebaut für den Einsatz auf modernen Produktionslinien.',
      fr: 'Les primaires et couches de finition industriels de Fortis Coatings offrent une protection maximale des surfaces dans toutes les conditions atmosphériques — conçus pour fonctionner sur les lignes de production modernes.',
      es: 'Las imprimaciones y capas de acabado industriales de Fortis Coatings ofrecen la máxima protección de la superficie en cualquier condición atmosférica — diseñadas para funcionar en líneas de producción modernas.',
      it: 'I primer e gli strati di finitura industriali Fortis Coatings offrono la massima protezione della superficie in ogni condizione atmosferica — costruiti per funzionare su moderne linee di produzione.',
      tr: 'Fortis Coatings\'in endüstriyel astarları ve son katları, her türlü atmosferik koşulda maksimum yüzey koruması sunar — modern üretim hatlarında çalışmak için tasarlandı.' }],
    ['#performance .pills span', {
      nl: ['Ferro &amp; non-ferro','Glans 10 / 30 / 60 / Full','Elektrostatisch','Nat-in-nat'],
      pl: ['Żelazne i nieżelazne','Połysk 10 / 30 / 60 / Full','Elektrostatyczny','Mokro-na-mokro'],
      ro: ['Feroase și neferoase','Luciu 10 / 30 / 60 / Full','Electrostatic','Ud-pe-ud'],
      de: ['Eisen &amp; Nichteisen','Glanz 10 / 30 / 60 / Voll','Elektrostatisch','Nass-in-Nass'],
      fr: ['Ferreux et non ferreux','Brillance 10 / 30 / 60 / Intégral','Électrostatique','Humide-sur-humide'],
      es: ['Férreos y no férreos','Brillo 10 / 30 / 60 / Total','Electrostático','Húmedo-sobre-húmedo'],
      it: ['Ferrosi e non ferrosi','Brillantezza 10 / 30 / 60 / Piena','Elettrostatico','Bagnato-su-bagnato'],
      tr: ['Demir &amp; demir dışı','Parlaklık 10 / 30 / 60 / Tam','Elektrostatik','Islak-üstüne-ıslak'] }],
    ['#performance .feat b', {
      nl: ['Atmosferische bestendigheid','Elektrostatisch nat-in-nat','Lakstraat &amp; conventioneel','Elke kleur','Glans op maat','Duurzaam ontworpen'],
      pl: ['Odporność atmosferyczna','Elektrostatyczny mokro-na-mokro','Linia i konwencjonalnie','Każdy kolor','Połysk na zamówienie','Trwały z założenia'],
      ro: ['Rezistență atmosferică','Electrostatic ud-pe-ud','Linie și convențional','Orice culoare','Luciu la cerere','Durabil prin design'],
      de: ['Witterungsbeständigkeit','Elektrostatisch nass-in-nass','Straße &amp; konventionell','Jede Farbe','Glanz nach Wunsch','Dauerhaft konzipiert'],
      fr: ['Résistance atmosphérique','Électrostatique humide-sur-humide','Ligne et conventionnel','Toute couleur','Brillance sur mesure','Durable par conception'],
      es: ['Resistencia atmosférica','Electrostático húmedo-sobre-húmedo','Línea y convencional','Todo color','Brillo a medida','Duradero por diseño'],
      it: ['Resistenza atmosferica','Elettrostatico bagnato-su-bagnato','Linea e convenzionale','Ogni colore','Brillantezza su misura','Durevole per progettazione'],
      tr: ['Atmosferik dayanıklılık','Elektrostatik ıslak-üstüne-ıslak','Boya hattı &amp; geleneksel','Her renk','Özel parlaklık','Sürdürülebilir tasarım'] }],
    ['#performance .feat span', {
      nl: ['Maximale oppervlaktebescherming onder alle atmosferische omstandigheden, binnen en buiten.','Perfect geschikt voor snelle elektrostatische nat-in-nat applicatie voor een hoge doorvoer.','Gemaakt voor automatische lakstraten, en net zo goed thuis met conventionele spuittechnieken.','Spuit uw objecten in iedere gewenste kleur met de universele hoog geconcentreerde Baril kleurpasta\'s.','Alkyd- en polyurethaan laksystemen, verkrijgbaar in glans 10, 30, 60 en full gloss.','Primers en toplagen die metalen objecten duurzaam beschermen en hun footprint verkleinen.'],
      pl: ['Maksymalna ochrona powierzchni w każdych warunkach atmosferycznych, wewnątrz i na zewnątrz.','Idealnie nadaje się do szybkiej aplikacji elektrostatycznej mokro-na-mokro przy wysokiej przepustowości.','Stworzony do automatycznych linii lakierniczych, równie dobry przy konwencjonalnym natrysku.','Maluj swoje obiekty w dowolnym kolorze uniwersalnymi, wysoko skoncentrowanymi pastami Baril.','Systemy lakiernicze alkidowe i poliuretanowe dostępne w połysku 10, 30, 60 i full gloss.','Podkłady i powłoki, które trwale chronią metalowe obiekty i zmniejszają ich ślad środowiskowy.'],
      ro: ['Protecție maximă a suprafeței în orice condiții atmosferice, în interior și exterior.','Perfect potrivit pentru aplicarea electrostatică rapidă ud-pe-ud, pentru un debit ridicat.','Creat pentru linii automate de vopsire și la fel de potrivit pentru tehnici convenționale de pulverizare.','Vopsiți obiectele în orice culoare cu pastele de culoare universale, înalt concentrate, Baril.','Sisteme de vopsire alchidice și poliuretanice, disponibile în luciu 10, 30, 60 și full gloss.','Grunduri și straturi de finisare care protejează durabil obiectele metalice și le reduc amprenta.'],
      de: ['Maximaler Oberflächenschutz unter allen atmosphärischen Bedingungen, innen und außen.','Perfekt geeignet für die schnelle elektrostatische Nass-in-Nass-Applikation bei hohem Durchsatz.','Gemacht für automatische Lackierstraßen und ebenso zu Hause bei konventionellen Spritzverfahren.','Lackieren Sie Ihre Objekte in jeder gewünschten Farbe mit den universellen, hochkonzentrierten Baril-Farbpasten.','Alkyd- und Polyurethan-Lacksysteme, erhältlich in Glanz 10, 30, 60 und Vollglanz.','Grundierungen und Decklacke, die Metallobjekte dauerhaft schützen und ihren Fußabdruck verringern.'],
      fr: ['Protection maximale des surfaces dans toutes les conditions atmosphériques, à l\'intérieur comme à l\'extérieur.','Parfaitement adapté à l\'application électrostatique humide-sur-humide rapide pour un débit élevé.','Conçu pour les lignes de peinture automatiques, et tout aussi à l\'aise avec les techniques de pulvérisation conventionnelles.','Peignez vos objets dans n\'importe quelle couleur grâce aux pâtes colorantes universelles hautement concentrées de Baril.','Systèmes de laque alkyde et polyuréthane, disponibles en brillance 10, 30, 60 et brillant intégral.','Des primaires et des couches de finition qui protègent durablement les objets métalliques et réduisent leur empreinte.'],
      es: ['Máxima protección de la superficie en cualquier condición atmosférica, en interior y exterior.','Perfectamente apto para la aplicación electrostática húmedo-sobre-húmedo rápida y un alto rendimiento.','Creado para líneas de pintado automáticas, e igual de cómodo con técnicas de pulverización convencionales.','Pinta tus objetos en cualquier color con las pastas de color universales altamente concentradas de Baril.','Sistemas de laca alquídica y poliuretano, disponibles en brillo 10, 30, 60 y brillo total.','Imprimaciones y capas de acabado que protegen los objetos metálicos de forma duradera y reducen su huella.'],
      it: ['Massima protezione della superficie in ogni condizione atmosferica, all\'interno e all\'esterno.','Perfettamente adatto all\'applicazione elettrostatica bagnato-su-bagnato rapida per un\'elevata produttività.','Creato per linee di verniciatura automatiche e altrettanto a suo agio con tecniche di spruzzatura convenzionali.','Verniciate i vostri oggetti in qualsiasi colore con le paste coloranti universali ad alta concentrazione Baril.','Sistemi di vernice alchidica e poliuretanica, disponibili in brillantezza 10, 30, 60 e brillante pieno.','Primer e strati di finitura che proteggono durevolmente gli oggetti metallici e ne riducono l\'impronta.'],
      tr: ['Her türlü atmosferik koşulda, iç ve dış mekanda maksimum yüzey koruması.','Yüksek verim için hızlı elektrostatik ıslak-üstüne-ıslak uygulamaya mükemmel uyum.','Otomatik boya hatları için tasarlandı ve geleneksel püskürtme teknikleriyle de aynı derecede uyumlu.','Baril\'in evrensel, yüksek konsantrasyonlu renk pastalarıyla nesnelerinizi istediğiniz her renge boyayın.','10, 30, 60 ve tam parlaklıkta sunulan alkid ve poliüretan boya sistemleri.','Metal nesneleri kalıcı olarak koruyan ve karbon ayak izlerini azaltan astarlar ve son katlar.'] }],

    ['#apply .eyebrow', { nl: 'Toepassingen', pl: 'Zastosowania', ro: 'Aplicații', de: 'Anwendungen', fr: 'Applications', es: 'Aplicaciones', it: 'Applicazioni', tr: 'Uygulamalar' }],
    ['#apply h2', {
      nl: 'Coatings voor de<br><span class="acc">metaalverwerkende industrie</span>',
      pl: 'Powłoki dla<br><span class="acc">przemysłu metalowego</span>',
      ro: 'Vopsele pentru<br><span class="acc">industria metalurgică</span>',
      de: 'Beschichtungen für die<br><span class="acc">metallverarbeitende Industrie</span>',
      fr: 'Des revêtements pour<br><span class="acc">l\'industrie du métal</span>',
      es: 'Recubrimientos para<br><span class="acc">la industria del metal</span>',
      it: 'Rivestimenti per<br><span class="acc">l\'industria del metallo</span>',
      tr: '<span class="acc">Metal işleme endüstrisi</span><br>için kaplamalar' }],
    ['#apply .lead', {
      nl: 'We leveren Fortis Coatings-producten via het Fortis Coatings-dealernetwerk aan de metaalverwerkende industrie — ijzersterke verfsystemen voor elk metalen object.',
      pl: 'Dostarczamy powłoki Fortis Coatings przez sieć dealerów Fortis Coatings do przemysłu metalowego — żelazne systemy lakiernicze do każdego metalowego obiektu.',
      ro: 'Livrăm vopselele Fortis Coatings prin rețeaua de dealeri Fortis Coatings către industria prelucrării metalelor — sisteme de vopsire puternice pentru orice obiect metalic.',
      de: 'Wir liefern Fortis Coatings-Beschichtungen über das Fortis Coatings-Händlernetz an die metallverarbeitende Industrie — eisenstarke Lacksysteme für jedes Metallobjekt.',
      fr: 'Nous livrons les revêtements Fortis Coatings à l\'industrie de transformation des métaux via le réseau de distributeurs Fortis Coatings — des systèmes de peinture ultra-résistants pour tout objet métallique.',
      es: 'Suministramos los recubrimientos Fortis Coatings a la industria del metal a través de la red de distribuidores Fortis Coatings — sistemas de pintura ultrarresistentes para cualquier objeto metálico.',
      it: 'Forniamo i rivestimenti Fortis Coatings all\'industria della lavorazione dei metalli tramite la rete di rivenditori Fortis Coatings — sistemi di verniciatura ultraresistenti per ogni oggetto metallico.',
      tr: 'Fortis Coatings kaplamalarını Fortis Coatings bayi ağı aracılığıyla metal işleme endüstrisine sunuyoruz — her metal nesne için çelik gibi boya sistemleri.' }],
    ['#apply .sheet-row b', {
      nl: ['Metaalbewerking','Machinebouw','Mobiele machines','Kraan &amp; lift','Containers &amp; hekwerk','Meubilair &amp; kunststof'],
      pl: ['Obróbka metali','Budowa maszyn','Maszyny mobilne','Dźwigi i windy','Kontenery i ogrodzenia','Meble i tworzywa'],
      ro: ['Prelucrarea metalelor','Construcția de mașini','Utilaje mobile','Macarale și lifturi','Containere și garduri','Mobilier și plastic'],
      de: ['Metallverarbeitung','Maschinenbau','Mobile Maschinen','Kran &amp; Aufzug','Container &amp; Zäune','Möbel &amp; Kunststoff'],
      fr: ['Travail des métaux','Construction de machines','Engins mobiles','Grues et levage','Conteneurs et clôtures','Mobilier et plastiques'],
      es: ['Metalurgia','Construcción de maquinaria','Maquinaria móvil','Grúas y elevación','Contenedores y vallado','Mobiliario y plásticos'],
      it: ['Lavorazione metalli','Costruzione di macchine','Macchine mobili','Gru e sollevamento','Container e recinzioni','Arredo e plastica'],
      tr: ['Metal işleme','Makine yapımı','Mobil makineler','Vinç &amp; asansör','Konteyner &amp; çit','Mobilya &amp; plastik'] }],
    ['#apply .sheet-row span', {
      nl: ['Coatings voor de metaalverwerkende industrie en algemene industriële afwerking.','Coatings voor machine- en apparatenbouw.','Coatings voor landbouwmechanisatie en grondverzetmachines.','Coatings voor kraan- en liftbouw.','Coatings voor containerbouw en hekwerk.','Coatings voor straat- en parkmeubilair en kunststofverwerking.'],
      pl: ['Powłoki dla przemysłu metalowego i ogólnego wykańczania przemysłowego.','Powłoki do budowy maszyn i urządzeń.','Powłoki do maszyn rolniczych i sprzętu do robót ziemnych.','Powłoki do budowy dźwigów i wind.','Powłoki do budowy kontenerów i ogrodzeń.','Powłoki do mebli miejskich i parkowych oraz przetwórstwa tworzyw.'],
      ro: ['Vopsele pentru industria prelucrării metalelor și finisarea industrială generală.','Vopsele pentru construcția de mașini și echipamente.','Vopsele pentru utilaje agricole și echipamente de terasamente.','Vopsele pentru construcția de macarale și lifturi.','Vopsele pentru construcția de containere și garduri.','Vopsele pentru mobilier stradal și de parc și prelucrarea plasticului.'],
      de: ['Beschichtungen für die metallverarbeitende Industrie und die allgemeine industrielle Veredelung.','Beschichtungen für den Maschinen- und Apparatebau.','Beschichtungen für Landmaschinen und Erdbewegungsgeräte.','Beschichtungen für den Kran- und Aufzugbau.','Beschichtungen für den Containerbau und Zäune.','Beschichtungen für Stadt- und Parkmobiliar und die Kunststoffverarbeitung.'],
      fr: ['Revêtements pour l\'industrie de transformation des métaux et la finition industrielle générale.','Revêtements pour la construction de machines et d\'équipements.','Revêtements pour les machines agricoles et les engins de terrassement.','Revêtements pour la construction de grues et d\'ascenseurs.','Revêtements pour la construction de conteneurs et les clôtures.','Revêtements pour le mobilier urbain et de parc et la transformation des plastiques.'],
      es: ['Recubrimientos para la industria del metal y el acabado industrial general.','Recubrimientos para la construcción de maquinaria y equipos.','Recubrimientos para maquinaria agrícola y de movimiento de tierras.','Recubrimientos para la construcción de grúas y ascensores.','Recubrimientos para la construcción de contenedores y vallados.','Recubrimientos para mobiliario urbano y de parque y la transformación de plásticos.'],
      it: ['Rivestimenti per l\'industria della lavorazione dei metalli e la finitura industriale generale.','Rivestimenti per la costruzione di macchine e apparecchiature.','Rivestimenti per macchine agricole e mezzi movimento terra.','Rivestimenti per la costruzione di gru e ascensori.','Rivestimenti per la costruzione di container e recinzioni.','Rivestimenti per arredo urbano e da parco e la lavorazione della plastica.'],
      tr: ['Metal işleme endüstrisi ve genel endüstriyel son işlemler için kaplamalar.','Makine ve ekipman yapımı için kaplamalar.','Tarım makineleri ve hafriyat makineleri için kaplamalar.','Vinç ve asansör yapımı için kaplamalar.','Konteyner yapımı ve çitler için kaplamalar.','Kent ve park mobilyaları ve plastik işleme için kaplamalar.'] }],

    ['#contact .eyebrow', { nl: 'Aan de slag', pl: 'Zacznij', ro: 'Începe', de: 'Loslegen', fr: 'Commencer', es: 'Empezar', it: 'Inizia', tr: 'Başlayın' }],
    ['#contact h2', { nl: 'Vind een Fortis Coatings-dealer', pl: 'Znajdź dealera Fortis Coatings', ro: 'Găsește un dealer Fortis Coatings', de: 'Einen Fortis Coatings-Händler finden', fr: 'Trouver un distributeur Fortis Coatings', es: 'Encuentra un distribuidor Fortis Coatings', it: 'Trova un rivenditore Fortis Coatings', tr: 'Bir Fortis Coatings bayisi bulun' }],
    ['#contact p', {
      nl: 'Ontdek de ijzersterke verfsystemen van het Fortis Coatings-pakket en zoek een dealer in uw regio — of overleg met onze coatingspecialisten over uw lakstraat.',
      pl: 'Odkryj żelazne systemy lakiernicze z oferty Fortis Coatings i znajdź dealera w swoim regionie — lub porozmawiaj z naszymi specjalistami o swojej linii.',
      ro: 'Descoperiți sistemele de vopsire puternice din gama Fortis Coatings și găsiți un dealer în regiunea dumneavoastră — sau discutați cu specialiștii noștri despre linia dvs.',
      de: 'Entdecken Sie die eisenstarken Lacksysteme des Fortis Coatings-Sortiments und finden Sie einen Händler in Ihrer Region — oder sprechen Sie mit unseren Beschichtungsexperten über Ihre Lackierstraße.',
      fr: 'Découvrez les systèmes de peinture ultra-résistants de la gamme Fortis Coatings et trouvez un distributeur dans votre région — ou échangez avec nos experts en revêtements à propos de votre ligne.',
      es: 'Descubre los sistemas de pintura ultrarresistentes de la gama Fortis Coatings y encuentra un distribuidor en tu región — o habla con nuestros especialistas en recubrimientos sobre tu línea.',
      it: 'Scopri i sistemi di verniciatura ultraresistenti della gamma Fortis Coatings e trova un rivenditore nella tua zona — o parla con i nostri specialisti dei rivestimenti della tua linea.',
      tr: 'Fortis Coatings serisinin çelik gibi boya sistemlerini keşfedin ve bölgenizdeki bir bayiyi bulun — ya da boya hattınız hakkında kaplama uzmanlarımıza danışın.' }],
    ['#contact .hero-cta .btn-solid', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri', de: 'Kontakt &amp; Standorte', fr: 'Contact et sites', es: 'Contacto y sedes', it: 'Contatto e sedi', tr: 'İletişim &amp; lokasyonlar' }],
    ['#contact .hero-cta .btn-ghost', { nl: 'Ontdek Baril Group', pl: 'Poznaj Baril Group', ro: 'Descoperă Baril Group', de: 'Baril Group entdecken', fr: 'Découvrir le groupe Baril', es: 'Descubrir Baril Group', it: 'Scopri Baril Group', tr: 'Baril Group\'u keşfedin' }],

    ['.foot-claim', {
      nl: 'IJzersterke industriële coatings voor metaal.',
      pl: 'Żelazne powłoki przemysłowe do metalu.',
      ro: 'Vopsele industriale puternice pentru metal.',
      de: 'Eisenstarke Industriebeschichtungen für Metall.',
      fr: 'Des revêtements industriels ultra-résistants pour le métal.',
      es: 'Recubrimientos industriales ultrarresistentes para el metal.',
      it: 'Rivestimenti industriali ultraresistenti per il metallo.',
      tr: 'Metal için çelik gibi endüstriyel kaplamalar.' }],
    ['footer h5', {
      nl: ['Producten','Baril Group'],
      pl: ['Produkty','Baril Group'],
      ro: ['Produse','Baril Group'],
      de: ['Produkte','Baril Group'],
      fr: ['Produits','Baril Group'],
      es: ['Productos','Baril Group'],
      it: ['Prodotti','Baril Group'],
      tr: ['Ürünler','Baril Group'] }],
    ['.foot-bottom span', {
      nl: ["© Fortis Coatings · een merk van Baril Group",'IJzersterke bescherming voor metaal.'],
      pl: ["© Fortis Coatings · marka Baril Group",'Żelazna ochrona metalu.'],
      ro: ["© Fortis Coatings · o marcă Baril Group",'Protecție puternică pentru metal.'],
      de: ["© Fortis Coatings · eine Marke der Baril Group",'Eisenstarker Schutz für Metall.'],
      fr: ["© Fortis Coatings · une marque du groupe Baril",'Une protection à toute épreuve pour le métal.'],
      es: ["© Fortis Coatings · una marca de Baril Group",'Protección a toda prueba para el metal.'],
      it: ["© Fortis Coatings · un marchio di Baril Group",'Protezione a tutta prova per il metallo.'],
      tr: ["© Fortis Coatings · bir Baril Group markası",'Metal için çelik gibi koruma.'] }],

    ['#certs .eyebrow', { nl: 'Certificeringen &amp; keurmerken', pl: 'Certyfikaty i znaki jakości', ro: 'Certificări și mărci de calitate', de: 'Zertifizierungen &amp; Gütesiegel', fr: 'Certifications et labels', es: 'Certificaciones y sellos', it: 'Certificazioni e marchi', tr: 'Sertifikalar &amp; kalite işaretleri' }],
    ['#certs h2', {
      nl: 'Kwaliteit, milieu <span class="acc">&amp; veiligheid</span>',
      pl: 'Jakość, środowisko <span class="acc">i bezpieczeństwo</span>',
      ro: 'Calitate, mediu <span class="acc">și siguranță</span>',
      de: 'Qualität, Umwelt <span class="acc">&amp; Sicherheit</span>',
      fr: 'Qualité, environnement <span class="acc">et sécurité</span>',
      es: 'Calidad, medio ambiente <span class="acc">y seguridad</span>',
      it: 'Qualità, ambiente <span class="acc">e sicurezza</span>',
      tr: 'Kalite, çevre <span class="acc">&amp; güvenlik</span>' }],
    ['#certs .lead', {
      nl: 'Ontwikkeld en geproduceerd binnen de gecertificeerde managementsystemen van Baril Group.',
      pl: 'Opracowana i produkowana w certyfikowanych systemach zarządzania Baril Group.',
      ro: 'Dezvoltată și produsă în cadrul sistemelor de management certificate ale Baril Group.',
      de: 'Entwickelt und produziert innerhalb der zertifizierten Managementsysteme der Baril Group.',
      fr: 'Développé et produit dans le cadre des systèmes de management certifiés du groupe Baril.',
      es: 'Desarrollado y producido dentro de los sistemas de gestión certificados de Baril Group.',
      it: 'Sviluppato e prodotto nell\'ambito dei sistemi di gestione certificati di Baril Group.',
      tr: 'Baril Group\'un sertifikalı yönetim sistemleri kapsamında geliştirildi ve üretildi.' }]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('fortis-lang') || 'en'; } catch (e) {}
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
    try { localStorage.setItem('fortis-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro', 'de', 'fr', 'es', 'it', 'tr'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
