/* Language switch for the FleetSpec one-pager. English is authored in the DOM;
   NL / PL / RO / DE / FR / ES / IT / TR live in the MAP as
   [selector, {nl, pl, ro, de, fr, es, it, tr}].
   Brand names (FleetSpec, Baril, Baril Coatings) are kept untranslated. */
(() => {
  'use strict';
  const MAP = [
    ['.foot-disclaimer', { nl: 'We willen onze informatie zo breed mogelijk beschikbaar maken; daarom zijn sommige teksten vertaald met Anthropic Claude AI. Komt u onverhoopt een fout tegen, laat het ons dan vooral weten.', pl: 'Chcemy udostępniać nasze informacje możliwie jak najszerzej, dlatego niektóre teksty przetłumaczyliśmy za pomocą Anthropic Claude AI. Jeśli zauważą Państwo błąd, prosimy o informację.', ro: 'Dorim să facem informațiile noastre cât mai larg disponibile; de aceea, unele texte au fost traduse cu Anthropic Claude AI. Dacă întâlniți o eroare, vă rugăm să ne anunțați.', de: 'Wir möchten unsere Informationen so breit wie möglich verfügbar machen; daher wurden einige Texte mit Anthropic Claude AI übersetzt. Sollte Ihnen ein Fehler auffallen, lassen Sie es uns bitte wissen.', fr: 'Nous souhaitons rendre nos informations aussi largement accessibles que possible ; c\'est pourquoi certains textes ont été traduits avec Anthropic Claude AI. Si vous constatez une erreur, n\'hésitez pas à nous le signaler.', es: 'Queremos que nuestra información esté disponible de la forma más amplia posible; por eso, algunos textos se han traducido con Anthropic Claude AI. Si detecta algún error, le rogamos que nos lo comunique.', it: 'Vogliamo rendere le nostre informazioni il più ampiamente disponibili possibile; per questo alcuni testi sono stati tradotti con Anthropic Claude AI. Se dovesse notare un errore, vi preghiamo di segnalarcelo.', tr: 'Bilgilerimizi mümkün olduğunca geniş kitlelere ulaştırmak istiyoruz; bu nedenle bazı metinler Anthropic Claude AI ile çevrildi. Bir hata fark ederseniz lütfen bize bildirin.', no: 'Vi ønsker å gjøre informasjonen vår så bredt tilgjengelig som mulig; derfor er noen tekster oversatt med Anthropic Claude AI. Skulle du oppdage en feil, setter vi stor pris på at du gir oss beskjed.', sv: 'Vi vill göra vår information så brett tillgänglig som möjligt; därför har vissa texter översatts med Anthropic Claude AI. Om du upptäcker ett fel får du gärna meddela oss.' }],
    ['.navlinks a', {
      nl: ['Waarom FleetSpec','Producten','Prestaties','Toepassingen','Contact'],
      pl: ['Dlaczego FleetSpec','Produkty','Wydajność','Zastosowania','Kontakt'],
      ro: ['De ce FleetSpec','Produse','Performanță','Aplicații','Contact'],
      de: ['Warum FleetSpec','Produkte','Leistung','Anwendungen','Kontakt'],
      fr: ['Pourquoi FleetSpec','Produits','Performance','Applications','Contact'],
      es: ['Por qué FleetSpec','Productos','Rendimiento','Aplicaciones','Contacto'],
      it: ['Perché FleetSpec','Prodotti','Prestazioni','Applicazioni','Contatto'],
      tr: ['Neden FleetSpec','Ürünler','Performans','Uygulamalar','İletişim'], no: ['Hvorfor FleetSpec','Produkter','Ytelse','Bruksområder','Kontakt'], sv: ['Varför FleetSpec','Produkter','Prestanda','Användningsområden','Kontakt'] }],
    ['header .eyebrow .eb-txt', {
      nl: 'FleetSpec — Refinish voor wagenpark &amp; transport · Een merk van Baril Group',
      pl: 'FleetSpec — Renowacja flot i transportu · Marka Baril Group',
      ro: 'FleetSpec — Refinisare pentru flote &amp; transport · O marcă Baril Group',
      de: 'FleetSpec — Refinish für Flotte &amp; Transport · Eine Marke der Baril Group',
      fr: 'FleetSpec — Réparation peinture flotte &amp; transport · Une marque du groupe Baril',
      es: 'FleetSpec — Repintado para flotas &amp; transporte · Una marca de Baril Group',
      it: 'FleetSpec — Refinish per flotte &amp; trasporto · Un marchio di Baril Group',
      tr: 'FleetSpec — Filo &amp; nakliye boya yenileme · Bir Baril Group markası', no: 'FleetSpec — Lakkering for kjøretøypark &amp; transport · Et merke fra Baril Group', sv: 'FleetSpec — Lackering för fordonsflotta &amp; transport · Ett varumärke från Baril Group' }],
    ['header h1', {
      nl: 'Houd het wagenpark<br><span class="acc">in beweging</span>',
      pl: 'Utrzymaj flotę<br><span class="acc">w ruchu</span>',
      ro: 'Menține flota<br><span class="acc">în mișcare</span>',
      de: 'Halten Sie die Flotte<br><span class="acc">in Bewegung</span>',
      fr: 'Gardez la flotte<br><span class="acc">en mouvement</span>',
      es: 'Mantén la flota<br><span class="acc">en movimiento</span>',
      it: 'Mantieni la flotta<br><span class="acc">in movimento</span>',
      tr: 'Filoyu<br><span class="acc">hareket halinde tutun</span>', no: 'Hold flåten<br><span class="acc">i bevegelse</span>', sv: 'Håll flottan<br><span class="acc">i rörelse</span>' }],
    ['.hero-sub', {
      nl: 'Een volledig geïntegreerd refinish-systeem voor commercieel transport — primers, urethaan toplagen en een <strong>intermix-kleurenprogramma</strong>, gebouwd voor superieure corrosiebestendigheid en nauwkeurige kleurmatches.',
      pl: 'W pełni zintegrowany system renowacji dla transportu komercyjnego — podkłady, lakiery nawierzchniowe urethane i <strong>program kolorów intermix</strong>, stworzony dla doskonałej odporności na korozję i precyzyjnego dopasowania kolorów.',
      ro: 'Un sistem de refinisare complet integrat pentru transportul comercial — grunduri, lacuri de finisare urethane și un <strong>program de culori intermix</strong>, conceput pentru o rezistență superioară la coroziune și potriviri precise de culoare.',
      de: 'Ein vollständig integriertes Refinish-System für den Nutzfahrzeugverkehr — Grundierungen, Urethan-Decklacke und ein <strong>Intermix-Farbprogramm</strong>, entwickelt für überlegene Korrosionsbeständigkeit und präzise Farbtreffer.',
      fr: 'Un système de réparation peinture entièrement intégré pour le transport commercial — apprêts, vernis de finition uréthane et un <strong>programme de couleurs intermix</strong>, conçu pour une résistance à la corrosion supérieure et des teintes précises.',
      es: 'Un sistema de repintado totalmente integrado para el transporte comercial — imprimaciones, acabados de uretano y un <strong>programa de color intermix</strong>, creado para una resistencia a la corrosión superior y igualaciones de color precisas.',
      it: 'Un sistema di refinish completamente integrato per il trasporto commerciale — primer, smalti di finitura uretanici e un <strong>programma colore intermix</strong>, progettato per una resistenza alla corrosione superiore e abbinamenti cromatici precisi.',
      tr: 'Ticari taşımacılık için tamamen entegre bir boya yenileme sistemi — astarlar, üretan son kat boyalar ve üstün korozyon direnci ile hassas renk eşleşmeleri için tasarlanmış bir <strong>intermix renk programı</strong>.', no: 'Et fullt integrert lakkeringssystem for kommersiell transport — primere, uretantopplag og et <strong>intermix-fargeprogram</strong>, bygget for overlegen korrosjonsbestandighet og nøyaktige fargetreff.', sv: 'Ett helt integrerat lackeringssystem för kommersiell transport — primers, uretantopplager och ett <strong>intermix-färgprogram</strong>, byggt för överlägsen korrosionsbeständighet och exakta färgträffar.' }],
    ['header .hero-cta .btn-solid', { nl: 'Bekijk de producten', pl: 'Zobacz produkty', ro: 'Vezi produsele', de: 'Produkte entdecken', fr: 'Découvrir les produits', es: 'Ver los productos', it: 'Scopri i prodotti', tr: 'Ürünleri keşfedin', no: 'Se produktene', sv: 'Se produkterna' }],
    ['header .hero-cta .btn-ghost', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri', de: 'Kontakt &amp; Standorte', fr: 'Contact et sites', es: 'Contacto y sedes', it: 'Contatto e sedi', tr: 'İletişim &amp; lokasyonlar', no: 'Kontakt &amp; kontorer', sv: 'Kontakt &amp; kontor' }],
    ['.hero-foot span:first-child', {
      nl: 'Primers · Toplagen · Intermix-kleur · Corrosie',
      pl: 'Podkłady · Lakiery · Kolor intermix · Korozja',
      ro: 'Grunduri · Lacuri · Culoare intermix · Coroziune',
      de: 'Grundierungen · Decklacke · Intermix-Farbe · Korrosion',
      fr: 'Apprêts · Vernis · Couleur intermix · Corrosion',
      es: 'Imprimaciones · Acabados · Color intermix · Corrosión',
      it: 'Primer · Finiture · Colore intermix · Corrosione',
      tr: 'Astarlar · Son katlar · Intermix renk · Korozyon', no: 'Primere · Topplag · Intermix-farge · Korrosjon', sv: 'Primers · Topplager · Intermix-färg · Korrosion' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează', de: 'Scrollen', fr: 'Défiler', es: 'Desliza', it: 'Scorri', tr: 'Kaydır', no: 'Bla', sv: 'Skrolla' }],

    ['#mission .eyebrow', { nl: 'Waarom FleetSpec', pl: 'Dlaczego FleetSpec', ro: 'De ce FleetSpec', de: 'Warum FleetSpec', fr: 'Pourquoi FleetSpec', es: 'Por qué FleetSpec', it: 'Perché FleetSpec', tr: 'Neden FleetSpec', no: 'Hvorfor FleetSpec', sv: 'Varför FleetSpec' }],
    ['.mission-quote', {
      nl: 'Stilstand kost geld. FleetSpec levert een compleet, <em>geïntegreerd</em> refinish-systeem — primers, toplagen en een intermix-kleurenprogramma — ontwikkeld voor duurzame bescherming en snelle, nauwkeurige kleur op elk voertuig.',
      pl: 'Przestoje kosztują. FleetSpec dostarcza kompletny, <em>zintegrowany</em> system renowacji — podkłady, lakiery nawierzchniowe i program kolorów intermix — stworzony dla trwałej ochrony oraz szybkiego, dokładnego koloru na każdym pojeździe.',
      ro: 'Timpii morți costă bani. FleetSpec oferă un sistem de refinisare complet și <em>integrat</em> — grunduri, lacuri de finisare și un program de culori intermix — conceput pentru o protecție durabilă și o culoare rapidă și precisă pe fiecare unitate.',
      de: 'Stillstand kostet Geld. FleetSpec liefert ein komplettes, <em>integriertes</em> Refinish-System — Grundierungen, Decklacke und ein Intermix-Farbprogramm — entwickelt für dauerhaften Schutz und schnelle, präzise Farbe auf jedem Fahrzeug.',
      fr: 'L\'immobilisation coûte cher. FleetSpec offre un système de réparation peinture complet et <em>intégré</em> — apprêts, vernis de finition et un programme de couleurs intermix — conçu pour une protection durable et une teinte rapide et précise sur chaque véhicule.',
      es: 'El tiempo de inactividad cuesta dinero. FleetSpec ofrece un sistema de repintado completo e <em>integrado</em> — imprimaciones, acabados y un programa de color intermix — creado para una protección duradera y un color rápido y preciso en cada unidad.',
      it: 'I fermi macchina costano. FleetSpec offre un sistema di refinish completo e <em>integrato</em> — primer, finiture e un programma colore intermix — progettato per una protezione durevole e un colore rapido e preciso su ogni mezzo.',
      tr: 'Duruş süresi paraya mal olur. FleetSpec eksiksiz, <em>entegre</em> bir boya yenileme sistemi sunar — astarlar, son katlar ve bir intermix renk programı — dayanıklı koruma ve her araçta hızlı, doğru renk için tasarlandı.', no: 'Stillstand koster penger. FleetSpec leverer et komplett, <em>integrert</em> lakkeringssystem — primere, topplag og et intermix-fargeprogram — utviklet for slitesterk beskyttelse og rask, nøyaktig farge på hvert kjøretøy.', sv: 'Stillestånd kostar pengar. FleetSpec levererar ett komplett, <em>integrerat</em> lackeringssystem — primers, topplager och ett intermix-färgprogram — utvecklat för hållbart skydd och snabb, exakt färg på varje fordon.' }],
    ['#mission .mm b', {
      nl: ['Eén geïntegreerd systeem','Kleur, perfect afgestemd','Gebouwd voor de lange rit'],
      pl: ['Jeden zintegrowany system','Kolor, dopasowany','Stworzony, by przejechać trasę'],
      ro: ['Un singur sistem integrat','Culoare, potrivită exact','Construit pentru a rezista pe traseu'],
      de: ['Ein integriertes System','Farbe, präzise getroffen','Gebaut für die lange Strecke'],
      fr: ['Un système intégré','La couleur, ajustée','Conçu pour tenir la route'],
      es: ['Un sistema integrado','Color, igualado','Hecho para aguantar la ruta'],
      it: ['Un sistema integrato','Colore, perfettamente abbinato','Costruito per durare sulla strada'],
      tr: ['Tek entegre sistem','Renk, tam isabet','Yol için yapıldı'], no: ['Ett integrert system','Farge, perfekt tilpasset','Bygget for den lange turen'], sv: ['Ett integrerat system','Färg, perfekt matchad','Byggt för långa transporter'] }],
    ['#mission .mm span', {
      nl: ['Primers, base coats en hoogglans urethaan toplagen die zijn ontworpen om samen te werken, van kaal metaal tot afwerking.','Een intermix-kleurenprogramma ondersteund door kleurzoeksoftware en een spectrofotometer-camera voor nauwkeurige matches.','Superieure corrosiebestendigheid en duurzaamheid op lange termijn voor vrachtwagens, trailers en hardwerkende wagenparken.'],
      pl: ['Podkłady, bazy i lakiery nawierzchniowe urethane o wysokim połysku, zaprojektowane do współpracy, od gołego metalu po wykończenie.','Program kolorów intermix wspierany oprogramowaniem do wyszukiwania koloru i kamerą spektrofotometryczną dla precyzyjnego dopasowania.','Doskonała odporność na korozję i trwałość na lata dla ciężarówek, przyczep i ciężko pracujących flot.'],
      ro: ['Grunduri, baze și lacuri de finisare urethane cu luciu ridicat, concepute să lucreze împreună, de la metal gol la finisaj.','Un program de culori intermix susținut de software de căutare a culorii și de o cameră spectrofotometru pentru potriviri precise.','Rezistență superioară la coroziune și durabilitate pe termen lung pentru camioane, remorci și flote care muncesc din greu.'],
      de: ['Grundierungen, Basislacke und hochglänzende Urethan-Decklacke, die zusammenarbeiten — vom blanken Metall bis zum Finish.','Ein Intermix-Farbprogramm, gestützt auf Farbsuch-Software und eine Spektralfotometer-Kamera für präzise Treffer.','Überlegene Korrosionsbeständigkeit und langfristige Haltbarkeit für Lkw, Anhänger und hart arbeitende Flotten.'],
      fr: ['Apprêts, bases et vernis de finition uréthane brillants, conçus pour fonctionner ensemble, du métal nu à la finition.','Un programme de couleurs intermix appuyé par un logiciel de recherche de teinte et une caméra spectrophotomètre pour des teintes précises.','Une résistance à la corrosion supérieure et une durabilité à long terme pour camions, remorques et flottes qui travaillent dur.'],
      es: ['Imprimaciones, bases y acabados de uretano de alto brillo diseñados para trabajar juntos, del metal desnudo al acabado.','Un programa de color intermix respaldado por software de búsqueda de color y una cámara espectrofotómetro para igualaciones precisas.','Resistencia a la corrosión superior y durabilidad a largo plazo para camiones, remolques y flotas que trabajan duro.'],
      it: ['Primer, basi e smalti di finitura uretanici ad alta brillantezza, progettati per lavorare insieme, dal metallo nudo alla finitura.','Un programma colore intermix supportato da software di ricerca colore e da una telecamera spettrofotometro per abbinamenti precisi.','Resistenza alla corrosione superiore e durabilità a lungo termine per camion, rimorchi e flotte che lavorano duro.'],
      tr: ['Çıplak metalden son kata kadar birlikte çalışmak üzere tasarlanmış astarlar, baz katlar ve yüksek parlaklıkta üretan son kat boyalar.','Renk arama yazılımı ve bir spektrofotometre kamerasıyla desteklenen, hassas eşleşmeler için bir intermix renk programı.','Kamyonlar, römorklar ve yoğun çalışan filolar için üstün korozyon direnci ve uzun ömürlü dayanıklılık.'], no: ['Primere, base coats og høyglans uretantopplag som er laget for å virke sammen, fra bart metall til finish.','Et intermix-fargeprogram støttet av fargesøkeprogramvare og et spektrofotometer-kamera for nøyaktige treff.','Overlegen korrosjonsbestandighet og slitestyrke på lang sikt for lastebiler, tilhengere og hardtarbeidende kjøretøyparker.'], sv: ['Primers, base coats och högglansiga uretantopplager som är gjorda för att samverka, från bar metall till finish.','Ett intermix-färgprogram som stöds av färgsökningsprogramvara och en spektrofotometerkamera för exakta träffar.','Överlägsen korrosionsbeständighet och hållbarhet på lång sikt för lastbilar, släp och hårt arbetande fordonsflottor.'] }],

    ['#products .eyebrow', { nl: 'Producten', pl: 'Produkty', ro: 'Produse', de: 'Produkte', fr: 'Produits', es: 'Productos', it: 'Prodotti', tr: 'Ürünler', no: 'Produkter', sv: 'Produkter' }],
    ['#products h2', {
      nl: 'Van primer tot <span class="acc">toplaag</span>',
      pl: 'Od podkładu po <span class="acc">lakier nawierzchniowy</span>',
      ro: 'De la grund la <span class="acc">lacul de finisare</span>',
      de: 'Von der Grundierung bis zum <span class="acc">Decklack</span>',
      fr: 'De l\'apprêt au <span class="acc">vernis de finition</span>',
      es: 'De la imprimación al <span class="acc">acabado</span>',
      it: 'Dal primer alla <span class="acc">finitura</span>',
      tr: 'Astardan <span class="acc">son kata</span>', no: 'Fra primer til <span class="acc">topplag</span>', sv: 'Från primer till <span class="acc">topplager</span>' }],
    ['#products .lead', {
      nl: 'Het FleetSpec-assortiment dekt de hele refinish — corrosiewerende primers en hoogglans urethaan toplagen, ondersteund door een nauwkeurig intermix-kleurensysteem.',
      pl: 'Gama FleetSpec obejmuje całą renowację — podkłady zwalczające korozję i lakiery nawierzchniowe urethane o wysokim połysku, wspierane przez precyzyjny system kolorów intermix.',
      ro: 'Gama FleetSpec acoperă întreaga refinisare — grunduri care combat coroziunea și lacuri de finisare urethane cu luciu ridicat, susținute de un sistem precis de culori intermix.',
      de: 'Das FleetSpec-Sortiment deckt das gesamte Refinish ab — korrosionsbekämpfende Grundierungen und hochglänzende Urethan-Decklacke, unterstützt von einem präzisen Intermix-Farbsystem.',
      fr: 'La gamme FleetSpec couvre toute la réparation peinture — apprêts anticorrosion et vernis de finition uréthane brillants, soutenus par un système de couleurs intermix précis.',
      es: 'La gama FleetSpec cubre todo el repintado — imprimaciones que combaten la corrosión y acabados de uretano de alto brillo, respaldados por un preciso sistema de color intermix.',
      it: 'La gamma FleetSpec copre l\'intero refinish — primer anticorrosione e smalti di finitura uretanici ad alta brillantezza, supportati da un preciso sistema colore intermix.',
      tr: 'FleetSpec serisi tüm boya yenilemeyi kapsar — korozyonla mücadele eden astarlar ve yüksek parlaklıkta üretan son kat boyalar, hassas bir intermix renk sistemiyle desteklenir.', no: 'FleetSpec-serien dekker hele lakkeringen — korrosjonsbestandige primere og høyglans uretantopplag, støttet av et nøyaktig intermix-fargesystem.', sv: 'FleetSpec-serien täcker hela lackeringen — korrosionsbeständiga primers och högglansiga uretantopplager, med stöd av ett exakt intermix-färgsystem.' }],
    ['#products .feat .prod-tag', {
      nl: ['Primer · 2K','Toplaag · Hoogglans','Base · 1K','Kleur'],
      pl: ['Podkład · 2K','Lakier · Wysoki połysk','Baza · 1K','Kolor'],
      ro: ['Grund · 2K','Lac · Luciu ridicat','Bază · 1K','Culoare'],
      de: ['Grundierung · 2K','Decklack · Hochglanz','Basis · 1K','Farbe'],
      fr: ['Apprêt · 2K','Vernis · Haute brillance','Base · 1K','Couleur'],
      es: ['Imprimación · 2K','Acabado · Alto brillo','Base · 1K','Color'],
      it: ['Primer · 2K','Finitura · Alta brillantezza','Base · 1K','Colore'],
      tr: ['Astar · 2K','Son kat · Yüksek parlaklık','Baz · 1K','Renk'], no: ['Primer · 2K','Topplag · Høyglans','Base · 1K','Farge'], sv: ['Primer · 2K','Topplager · Högglans','Base · 1K','Färg'] }],
    ['#products .feat span:last-child', {
      nl: ['Tweecomponenten primers die corrosie bestrijden op ondergronden van vrachtwagens, trailers en industrie.','Medium- en high-solid urethaan emails voor een duurzame, hoogglanzende afwerking.','Oplosmiddelgedragen base coats voor metallic en effen kleuren in wagenpark- en industriële refinish.','Een van de meest geavanceerde intermix-programma\'s die er zijn, met software en spectrofotometer-kleurmatching.'],
      pl: ['Dwuskładnikowe podkłady zwalczające korozję na podłożach ciężarówek, przyczep i przemysłowych.','Emalie urethane średnio- i wysokoschnące dla trwałego wykończenia o wysokim połysku.','Rozpuszczalnikowe bazy do kolorów metalicznych i jednolitych w renowacji flot i przemysłu.','Jeden z najbardziej zaawansowanych programów intermix, z oprogramowaniem i dopasowaniem koloru spektrofotometrem.'],
      ro: ['Grunduri bicomponente care combat coroziunea pe substraturi de camioane, remorci și industriale.','Emailuri urethane cu conținut mediu și ridicat de solide pentru un finisaj durabil, cu luciu ridicat.','Baze pe bază de solvent pentru culori metalice și solide în refinisarea flotelor și industrială.','Unul dintre cele mai avansate programe intermix disponibile, cu software și potrivire a culorii prin spectrofotometru.'],
      de: ['Zweikomponenten-Grundierungen, die Korrosion auf Lkw-, Anhänger- und Industrieuntergründen bekämpfen.','Mittel- und hochfeststoffhaltige Urethan-Emaillacke für ein dauerhaftes, hochglänzendes Finish.','Lösemittelbasierte Basislacke für Metallic- und Volltonfarben im Flotten- und Industrie-Refinish.','Eines der fortschrittlichsten verfügbaren Intermix-Programme, mit Software und Spektralfotometer-Farbabgleich.'],
      fr: ['Apprêts à deux composants qui combattent la corrosion sur les supports camions, remorques et industriels.','Émaux uréthane à teneur moyenne et élevée en extrait sec pour une finition durable et très brillante.','Bases à base de solvant pour teintes métallisées et unies dans la réparation peinture flotte et industrielle.','L\'un des programmes intermix les plus avancés du marché, avec logiciel et mise en teinte au spectrophotomètre.'],
      es: ['Imprimaciones de dos componentes que combaten la corrosión en sustratos de camión, remolque e industriales.','Esmaltes de uretano de medio y alto contenido en sólidos para un acabado duradero y de alto brillo.','Bases al disolvente para colores metalizados y lisos en repintado de flotas e industrial.','Uno de los programas intermix más avanzados disponibles, con software e igualación de color por espectrofotómetro.'],
      it: ['Primer bicomponenti che combattono la corrosione su substrati di camion, rimorchi e industriali.','Smalti uretanici a medio e alto contenuto di solidi per una finitura durevole e ad alta brillantezza.','Basi a solvente per colori metallizzati e tinte unite nel refinish di flotte e industriale.','Uno dei programmi intermix più avanzati disponibili, con software e abbinamento colore tramite spettrofotometro.'],
      tr: ['Kamyon, römork ve endüstriyel yüzeylerde korozyonla mücadele eden iki bileşenli astarlar.','Dayanıklı, yüksek parlaklıkta bir bitiş için orta ve yüksek katı içerikli üretan emaye boyalar.','Filo ve endüstriyel boya yenilemede metalik ve düz renkler için solvent bazlı baz katlar.','Yazılım ve spektrofotometre renk eşleştirmesiyle, mevcut en gelişmiş intermix programlarından biri.'], no: ['Tokomponents primere som bekjemper korrosjon på underlag fra lastebiler, tilhengere og industri.','Medium- og high-solid uretanemaljer for en slitesterk, høyglanset finish.','Løsemiddelbaserte base coats for metallic- og ensfargede toner i kjøretøypark- og industrilakkering.','Et av de mest avanserte intermix-programmene som finnes, med programvare og spektrofotometer-fargetilpasning.'], sv: ['Tvåkomponentsprimers som bekämpar korrosion på underlag från lastbilar, släp och industri.','Medium- och high-solid uretanemaljer för en hållbar, högglansig finish.','Lösningsmedelsburna base coats för metallic- och enfärgade kulörer i flott- och industrilackering.','Ett av de mest avancerade intermix-programmen som finns, med programvara och spektrofotometer-färgmatchning.'] }],

    ['#performance .eyebrow', { nl: 'Prestaties', pl: 'Wydajność', ro: 'Performanță', de: 'Leistung', fr: 'Performance', es: 'Rendimiento', it: 'Prestazioni', tr: 'Performans', no: 'Ytelse', sv: 'Prestanda' }],
    ['#performance h2', {
      nl: 'Ontwikkeld voor <span class="acc">de weg</span>',
      pl: 'Stworzony na <span class="acc">drogę</span>',
      ro: 'Conceput pentru <span class="acc">drum</span>',
      de: 'Entwickelt für <span class="acc">die Straße</span>',
      fr: 'Conçu pour <span class="acc">la route</span>',
      es: 'Diseñado para <span class="acc">la carretera</span>',
      it: 'Progettato per <span class="acc">la strada</span>',
      tr: '<span class="acc">Yol</span> için tasarlandı', no: 'Utviklet for <span class="acc">veien</span>', sv: 'Utvecklad för <span class="acc">vägen</span>' }],
    ['#performance .lead', {
      nl: 'Premium coatings die corrosiebestendigheid, eenvoudige applicatie en duurzaamheid op lange termijn combineren over de transportmarkten heen. Gemaakt in Angola, Indiana, voor korte, betrouwbare levering.',
      pl: 'Powłoki premium łączące odporność na korozję, łatwą aplikację i trwałość na lata w różnych segmentach transportu. Produkowane w Angola, Indiana, dla krótkich i niezawodnych dostaw.',
      ro: 'Vopsele premium care combină rezistența la coroziune, aplicarea ușoară și durabilitatea pe termen lung în piețele de transport. Fabricat în Angola, Indiana, pentru o aprovizionare scurtă și fiabilă.',
      de: 'Premium-Beschichtungen, die Korrosionsbeständigkeit, einfache Applikation und langfristige Haltbarkeit über die Transportmärkte hinweg vereinen. Hergestellt in Angola, Indiana, für kurze, verlässliche Lieferung.',
      fr: 'Des revêtements premium qui allient résistance à la corrosion, facilité d\'application et durabilité à long terme sur les marchés du transport. Fabriqué à Angola, Indiana, pour un approvisionnement court et fiable.',
      es: 'Recubrimientos premium que combinan resistencia a la corrosión, fácil aplicación y durabilidad a largo plazo en los mercados del transporte. Fabricado en Angola, Indiana, para un suministro corto y fiable.',
      it: 'Rivestimenti premium che uniscono resistenza alla corrosione, facilità di applicazione e durabilità a lungo termine nei mercati del trasporto. Prodotto ad Angola, Indiana, per una fornitura breve e affidabile.',
      tr: 'Korozyon direncini, kolay uygulamayı ve uzun ömürlü dayanıklılığı taşımacılık pazarlarında birleştiren premium kaplamalar. Angola, Indiana\'da üretilir, kısa ve güvenilir tedarik için.', no: 'Premium-belegg som kombinerer korrosjonsbestandighet, enkel påføring og slitestyrke på lang sikt på tvers av transportmarkedene. Laget i Angola, Indiana, for kort og pålitelig levering.', sv: 'Premiumbeläggningar som kombinerar korrosionsbeständighet, enkel applicering och hållbarhet på lång sikt över transportmarknaderna. Tillverkad i Angola, Indiana, för kort och pålitlig leverans.' }],
    ['#performance .pills span', {
      nl: ['Corrosiebestendigheid','Hoogglans','Intermix-kleur','Eenvoudige applicatie'],
      pl: ['Odporność na korozję','Wysoki połysk','Kolor intermix','Łatwa aplikacja'],
      ro: ['Rezistență la coroziune','Luciu ridicat','Culoare intermix','Aplicare ușoară'],
      de: ['Korrosionsbeständigkeit','Hochglanz','Intermix-Farbe','Einfache Applikation'],
      fr: ['Résistance à la corrosion','Haute brillance','Couleur intermix','Application facile'],
      es: ['Resistencia a la corrosión','Alto brillo','Color intermix','Aplicación fácil'],
      it: ['Resistenza alla corrosione','Alta brillantezza','Colore intermix','Applicazione facile'],
      tr: ['Korozyon direnci','Yüksek parlaklık','Intermix renk','Kolay uygulama'], no: ['Korrosjonsbestandighet','Høyglans','Intermix-farge','Enkel påføring'], sv: ['Korrosionsbeständighet','Högglans','Intermix-färg','Enkel applicering'] }],
    ['#performance .feat b', {
      nl: ['Corrosiebestendigheid','Duurzaamheid op lange termijn','Nauwkeurige kleurmatching','Eenvoudige applicatie','Hoogglanzende afwerking','Klaar voor transport'],
      pl: ['Odporność na korozję','Trwałość na lata','Precyzyjne dopasowanie koloru','Łatwa aplikacja','Wykończenie o wysokim połysku','Gotowy do transportu'],
      ro: ['Rezistență la coroziune','Durabilitate pe termen lung','Potrivire precisă a culorii','Aplicare ușoară','Finisaj cu luciu ridicat','Pregătit pentru transport'],
      de: ['Korrosionsbeständigkeit','Langfristige Haltbarkeit','Präzise Farbabstimmung','Einfache Applikation','Hochglanz-Finish','Transportbereit'],
      fr: ['Résistance à la corrosion','Durabilité à long terme','Mise en teinte précise','Application facile','Finition haute brillance','Prêt pour le transport'],
      es: ['Resistencia a la corrosión','Durabilidad a largo plazo','Igualación de color precisa','Aplicación fácil','Acabado de alto brillo','Listo para el transporte'],
      it: ['Resistenza alla corrosione','Durabilità a lungo termine','Abbinamento colore preciso','Applicazione facile','Finitura ad alta brillantezza','Pronto per il trasporto'],
      tr: ['Korozyon direnci','Uzun ömürlü dayanıklılık','Hassas renk eşleştirme','Kolay uygulama','Yüksek parlaklıkta bitiş','Taşımacılığa hazır'], no: ['Korrosjonsbestandighet','Slitestyrke på lang sikt','Nøyaktig fargetilpasning','Enkel påføring','Høyglanset finish','Klar for transport'], sv: ['Korrosionsbeständighet','Hållbarhet på lång sikt','Exakt färgmatchning','Enkel applicering','Högglansig finish','Redo för transport'] }],
    ['#performance .feat span', {
      nl: ['Gemodificeerde urethaan primers beschermen metaal tegen roest op de weg en op het terrein.','Premium urethaan toplagen houden stand tegen weer, wassen en de kilometers.','Kleurzoeksoftware en een spectrofotometer-camera leggen elke keer nauwkeurige matches vast.','Geformuleerd voor voorspelbare, productieve applicatie in de spuiterij en aan de lijn.','High-solid urethaan emails geven een diepe, blijvende glans.','Bewezen in commercieel transport, vrachtwagens, trailers, scheepvaart en luchtvaart.'],
      pl: ['Modyfikowane podkłady urethane chronią metal przed rdzą na drodze i na placu.','Premium lakiery urethane wytrzymują pogodę, mycie i kilometry.','Oprogramowanie do wyszukiwania koloru i kamera spektrofotometryczna za każdym razem utrwalają dokładne dopasowanie.','Opracowany do przewidywalnej, wydajnej aplikacji w lakierni i na linii.','Wysokoschnące emalie urethane dają głęboki, trwały połysk.','Sprawdzony w transporcie komercyjnym, ciężarówkach, przyczepach, żegludze i lotnictwie.'],
      ro: ['Grundurile urethane modificate protejează metalul de rugină pe drum și în parc.','Lacurile premium urethane rezistă la vreme, spălare și la kilometri.','Software-ul de căutare a culorii și camera spectrofotometru fixează potriviri precise, de fiecare dată.','Formulat pentru o aplicare previzibilă și productivă în atelier și pe linie.','Emailurile urethane cu conținut ridicat de solide oferă un luciu profund și de durată.','Dovedit în transportul comercial, camioane, remorci, sectorul naval și aviație.'],
      de: ['Modifizierte Urethan-Grundierungen schützen Metall vor Rost auf der Straße und auf dem Hof.','Premium-Urethan-Decklacke trotzen Wetter, Wäsche und den Kilometern.','Farbsuch-Software und eine Spektralfotometer-Kamera sichern jedes Mal präzise Treffer.','Formuliert für eine vorhersehbare, produktive Applikation in der Werkstatt und an der Linie.','Hochfeststoffhaltige Urethan-Emaillacke liefern einen tiefen, dauerhaften Glanz.','Bewährt im Nutzfahrzeugverkehr, bei Lkw, Anhängern, in der Schifffahrt und Luftfahrt.'],
      fr: ['Les apprêts uréthane modifiés protègent le métal de la rouille sur la route et sur le parc.','Les vernis uréthane premium résistent aux intempéries, au lavage et aux kilomètres.','Le logiciel de recherche de teinte et une caméra spectrophotomètre verrouillent des teintes précises, à chaque fois.','Formulé pour une application prévisible et productive en atelier et sur la ligne.','Les émaux uréthane à fort extrait sec offrent une brillance profonde et durable.','Éprouvé dans le transport commercial, les camions, les remorques, le naval et l\'aéronautique.'],
      es: ['Las imprimaciones de uretano modificado protegen el metal del óxido en la carretera y en el patio.','Los acabados premium de uretano resisten el clima, el lavado y los kilómetros.','El software de búsqueda de color y una cámara espectrofotómetro fijan igualaciones precisas, siempre.','Formulado para una aplicación predecible y productiva en el taller y en la línea.','Los esmaltes de uretano de alto contenido en sólidos aportan un brillo profundo y duradero.','Probado en el transporte comercial, camiones, remolques, sector naval y aviación.'],
      it: ['I primer uretanici modificati proteggono il metallo dalla ruggine su strada e in deposito.','Le finiture uretaniche premium resistono a intemperie, lavaggi e ai chilometri.','Il software di ricerca colore e una telecamera spettrofotometro fissano abbinamenti precisi, ogni volta.','Formulato per un\'applicazione prevedibile e produttiva in officina e sulla linea.','Gli smalti uretanici ad alto contenuto di solidi offrono una brillantezza profonda e duratura.','Collaudato nel trasporto commerciale, camion, rimorchi, nautica e aviazione.'],
      tr: ['Modifiye üretan astarlar metali yolda ve sahada pastan korur.','Premium üretan son kat boyalar hava koşullarına, yıkamaya ve kilometrelere dayanır.','Renk arama yazılımı ve bir spektrofotometre kamerası her seferinde doğru eşleşmeleri sabitler.','Atölyede ve hatta öngörülebilir, verimli uygulama için formüle edildi.','Yüksek katı içerikli üretan emaye boyalar derin, kalıcı bir parlaklık sağlar.','Ticari taşımacılık, kamyonlar, römorklar, denizcilik ve havacılıkta kanıtlanmıştır.'], no: ['Modifiserte uretanprimere beskytter metall mot rust på veien og på anlegget.','Premium uretantopplag står imot vær, vask og kilometerne.','Fargesøkeprogramvare og et spektrofotometer-kamera fanger nøyaktige treff hver gang.','Formulert for forutsigbar, produktiv påføring i lakkboksen og på linjen.','High-solid uretanemaljer gir en dyp, varig glans.','Bevist i kommersiell transport, lastebiler, tilhengere, skipsfart og luftfart.'], sv: ['Modifierade uretanprimers skyddar metall mot rost på vägen och på anläggningen.','Premium uretantopplager står emot väder, tvätt och milen.','Färgsökningsprogramvara och en spektrofotometerkamera fångar exakta träffar varje gång.','Formulerad för förutsägbar, produktiv applicering i sprutboxen och på linjen.','High-solid uretanemaljer ger en djup, bestående glans.','Beprövad inom kommersiell transport, lastbilar, släp, sjöfart och luftfart.'] }],

    ['#apply .eyebrow', { nl: 'Toepassingen', pl: 'Zastosowania', ro: 'Aplicații', de: 'Anwendungen', fr: 'Applications', es: 'Aplicaciones', it: 'Applicazioni', tr: 'Uygulamalar', no: 'Bruksområder', sv: 'Användningsområden' }],
    ['#apply h2', {
      nl: 'Afwerkingen voor<br><span class="acc">wagenparken in beweging</span>',
      pl: 'Wykończenia dla<br><span class="acc">flot w ruchu</span>',
      ro: 'Finisaje pentru<br><span class="acc">flote în mișcare</span>',
      de: 'Finishes für<br><span class="acc">Flotten in Bewegung</span>',
      fr: 'Des finitions pour<br><span class="acc">les flottes en mouvement</span>',
      es: 'Acabados para<br><span class="acc">flotas en movimiento</span>',
      it: 'Finiture per<br><span class="acc">flotte in movimento</span>',
      tr: '<span class="acc">Hareket halindeki filolar</span><br>için kaplamalar', no: 'Finisher for<br><span class="acc">flåter i bevegelse</span>', sv: 'Finisher för<br><span class="acc">flottor i rörelse</span>' }],
    ['#apply .lead', {
      nl: 'Overal waar voertuigen de kost verdienen, houdt FleetSpec ze beschermd en strak in de lak.',
      pl: 'Wszędzie tam, gdzie pojazdy zarabiają na życie, FleetSpec utrzymuje je chronione i w doskonałym wyglądzie.',
      ro: 'Oriunde vehiculele își câștigă existența, FleetSpec le menține protejate și impecabile.',
      de: 'Überall, wo Fahrzeuge ihr Geld verdienen, hält FleetSpec sie geschützt und in Top-Optik.',
      fr: 'Partout où les véhicules gagnent leur vie, FleetSpec les garde protégés et impeccables.',
      es: 'Allá donde los vehículos se ganan la vida, FleetSpec los mantiene protegidos y impecables.',
      it: 'Ovunque i veicoli si guadagnino da vivere, FleetSpec li mantiene protetti e impeccabili.',
      tr: 'Araçların ekmeğini kazandığı her yerde FleetSpec onları korur ve pırıl pırıl tutar.', no: 'Overalt der kjøretøy gjør nytte for seg, holder FleetSpec dem beskyttet og skarpt lakkert.', sv: 'Överallt där fordon gör nytta håller FleetSpec dem skyddade och skarpt lackerade.' }],
    ['#apply .sheet-row b', {
      nl: ['Vrachtwagens &amp; trailers','Commercieel transport','Scheepvaart','Luchtvaart','Industriële machines','Spuiterijen &amp; refinishers'],
      pl: ['Ciężarówki i przyczepy','Transport komercyjny','Żegluga','Lotnictwo','Sprzęt przemysłowy','Lakiernie i renowatorzy'],
      ro: ['Camioane și remorci','Transport comercial','Sector naval','Aviație','Echipamente industriale','Ateliere de vopsitorie și refinisare'],
      de: ['Lkw &amp; Anhänger','Nutzfahrzeugverkehr','Schifffahrt','Luftfahrt','Industriegeräte','Lackierwerkstätten &amp; Refinisher'],
      fr: ['Camions et remorques','Transport commercial','Naval','Aéronautique','Équipement industriel','Carrosseries et professionnels du refinish'],
      es: ['Camiones y remolques','Transporte comercial','Sector naval','Aviación','Equipos industriales','Talleres de pintura y repintadores'],
      it: ['Camion e rimorchi','Trasporto commerciale','Nautica','Aviazione','Attrezzature industriali','Carrozzerie e professionisti del refinish'],
      tr: ['Kamyon &amp; römork','Ticari taşımacılık','Denizcilik','Havacılık','Endüstriyel ekipman','Boyahaneler &amp; boya yenileyiciler'], no: ['Lastebiler &amp; tilhengere','Kommersiell transport','Skipsfart','Luftfart','Industrimaskiner','Lakkverksteder &amp; refinishere'], sv: ['Lastbilar &amp; släp','Kommersiell transport','Sjöfart','Luftfart','Industrimaskiner','Lackverkstäder &amp; refinishers'] }],
    ['#apply .sheet-row span', {
      nl: ['Duurzame refinish-systemen voor trekkers, trailers en zwaar carrosseriewerk.','Coatings voor bussen, bestelwagens en commerciële wagenparkvoertuigen.','Corrosiebestendige afwerkingen voor schepen en maritieme apparatuur.','Refinish-coatings voor grondafhandeling en luchtvaarttoepassingen.','Taaie afwerkingen voor lichte en algemene industriële machines.','Een intermix-kleurenprogramma en toplagen gebouwd voor productie-refinish.'],
      pl: ['Trwałe systemy renowacji dla ciągników siodłowych, przyczep i ciężkiej karoserii.','Powłoki do autobusów, vanów i komercyjnych pojazdów flotowych.','Odporne na korozję wykończenia dla jednostek pływających i sprzętu morskiego.','Powłoki renowacyjne do obsługi naziemnej i zastosowań lotniczych.','Wytrzymałe wykończenia dla lekkich i ogólnych maszyn przemysłowych.','Program kolorów intermix i lakiery nawierzchniowe stworzone do renowacji produkcyjnej.'],
      ro: ['Sisteme de refinisare durabile pentru capete tractor, remorci și caroserii grele.','Vopsele pentru autobuze, dube și vehicule comerciale de flotă.','Finisaje rezistente la coroziune pentru nave și echipamente navale.','Vopsele de refinisare pentru deservire la sol și aplicații în aviație.','Finisaje rezistente pentru utilaje industriale ușoare și generale.','Un program de culori intermix și lacuri de finisare concepute pentru refinisarea de producție.'],
      de: ['Robuste Refinish-Systeme für Zugmaschinen, Anhänger und schwere Karosseriearbeiten.','Beschichtungen für Busse, Transporter und gewerbliche Flottenfahrzeuge.','Korrosionsbeständige Finishes für Wasserfahrzeuge und maritime Ausrüstung.','Refinish-Beschichtungen für Bodenabfertigung und Luftfahrtanwendungen.','Robuste Finishes für leichte und allgemeine Industriemaschinen.','Ein Intermix-Farbprogramm und Decklacke für das Serien-Refinish.'],
      fr: ['Des systèmes de réparation peinture durables pour tracteurs, remorques et carrosseries lourdes.','Des revêtements pour autobus, fourgons et véhicules de flotte commerciale.','Des finitions résistant à la corrosion pour navires et équipements marins.','Des revêtements de refinish pour l\'assistance au sol et les applications aéronautiques.','Des finitions robustes pour machines industrielles légères et générales.','Un programme de couleurs intermix et des vernis de finition conçus pour le refinish de production.'],
      es: ['Sistemas de repintado duraderos para tractoras, remolques y carrocería pesada.','Recubrimientos para autobuses, furgonetas y vehículos comerciales de flota.','Acabados resistentes a la corrosión para embarcaciones y equipos marinos.','Recubrimientos de repintado para asistencia en tierra y aplicaciones de aviación.','Acabados resistentes para maquinaria industrial ligera y general.','Un programa de color intermix y acabados creados para el repintado de producción.'],
      it: ['Sistemi di refinish durevoli per trattori stradali, rimorchi e carrozzeria pesante.','Rivestimenti per autobus, furgoni e veicoli commerciali di flotta.','Finiture resistenti alla corrosione per imbarcazioni e attrezzature nautiche.','Rivestimenti di refinish per l\'assistenza a terra e le applicazioni aeronautiche.','Finiture resistenti per macchinari industriali leggeri e generici.','Un programma colore intermix e finiture pensati per il refinish di produzione.'],
      tr: ['Çekiciler, römorklar ve ağır kaporta işleri için dayanıklı boya yenileme sistemleri.','Otobüsler, vanlar ve ticari filo araçları için kaplamalar.','Deniz araçları ve ekipmanları için korozyona dayanıklı kaplamalar.','Yer hizmetleri ve havacılık uygulamaları için boya yenileme kaplamaları.','Hafif ve genel endüstriyel makineler için sağlam kaplamalar.','Seri boya yenileme için tasarlanmış bir intermix renk programı ve son kat boyalar.'], no: ['Slitesterke lakkeringssystemer for trekkvogner, tilhengere og tungt karosseriarbeid.','Belegg for busser, varebiler og kommersielle kjøretøyparkbiler.','Korrosjonsbestandige finisher for skip og maritimt utstyr.','Lakkeringsbelegg for bakkehåndtering og luftfartsanvendelser.','Tøffe finisher for lette og generelle industrimaskiner.','Et intermix-fargeprogram og topplag bygget for produksjonslakkering.'], sv: ['Slitstarka lackeringssystem för dragbilar, släp och tungt karossarbete.','Beläggningar för bussar, skåpbilar och kommersiella flottfordon.','Korrosionsbeständiga finisher för fartyg och marin utrustning.','Lackeringsbeläggningar för marktjänst och flygtillämpningar.','Tåliga finisher för lätta och allmänna industrimaskiner.','Ett intermix-färgprogram och topplager byggda för produktionslackering.'] }],

    ['#contact .eyebrow', { nl: 'Aan de slag', pl: 'Zacznij', ro: 'Începe', de: 'Loslegen', fr: 'Commencer', es: 'Empezar', it: 'Inizia', tr: 'Başlayın', no: 'Kom i gang', sv: 'Kom igång' }],
    ['#contact h2', {
      nl: 'Stem uw wagenparkafwerking af',
      pl: 'Dobierz wykończenie dla swojej floty',
      ro: 'Configurați finisajul flotei dvs.',
      de: 'Spezifizieren Sie Ihr Flotten-Finish',
      fr: 'Définissez la finition de votre flotte',
      es: 'Define el acabado de tu flota',
      it: 'Definisci la finitura della tua flotta',
      tr: 'Filonuzun kaplamasını belirleyin', no: 'Tilpass flåtelakkeringen din', sv: 'Matcha din flottlackering' }],
    ['#contact p', {
      nl: 'Overleg met onze refinish-experts over het FleetSpec-systeem, het kleurenprogramma en de toplagen die passen bij uw wagenpark en uw werkplaats.',
      pl: 'Porozmawiaj z naszymi ekspertami od renowacji o systemie FleetSpec, programie kolorów i lakierach pasujących do Twojej floty i warsztatu.',
      ro: 'Discutați cu experții noștri în refinisare despre sistemul FleetSpec, programul de culori și lacurile potrivite pentru flota și atelierul dvs.',
      de: 'Sprechen Sie mit unseren Refinish-Experten über das FleetSpec-System, das Farbprogramm und die Decklacke, die zu Ihrer Flotte und Ihrer Werkstatt passen.',
      fr: 'Échangez avec nos experts en refinish sur le système FleetSpec, le programme de couleurs et les vernis adaptés à votre flotte et à votre atelier.',
      es: 'Habla con nuestros expertos en repintado sobre el sistema FleetSpec, el programa de color y los acabados que encajan con tu flota y tu taller.',
      it: 'Parla con i nostri esperti di refinish del sistema FleetSpec, del programma colore e delle finiture adatte alla tua flotta e alla tua officina.',
      tr: 'FleetSpec sistemi, renk programı ve filonuza ve atölyenize uygun son kat boyalar hakkında boya yenileme uzmanlarımıza danışın.', no: 'Snakk med lakkeringsekspertene våre om FleetSpec-systemet, fargeprogrammet og topplagene som passer flåten din og verkstedet ditt.', sv: 'Prata med våra lackeringsexperter om FleetSpec-systemet, färgprogrammet och topplagren som passar din flotta och din verkstad.' }],
    ['#contact .hero-cta .btn-solid', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri', de: 'Kontakt &amp; Standorte', fr: 'Contact et sites', es: 'Contacto y sedes', it: 'Contatto e sedi', tr: 'İletişim &amp; lokasyonlar', no: 'Kontakt &amp; kontorer', sv: 'Kontakt &amp; kontor' }],
    ['#contact .hero-cta .btn-ghost', { nl: 'Ontdek Baril Group', pl: 'Poznaj Baril Group', ro: 'Descoperă Baril Group', de: 'Baril Group entdecken', fr: 'Découvrir le groupe Baril', es: 'Descubrir Baril Group', it: 'Scopri Baril Group', tr: 'Baril Group\'u keşfedin', no: 'Oppdag Baril Group', sv: 'Upptäck Baril Group' }],

    ['.foot-claim', {
      nl: 'Premium refinish-coatings voor wagenpark &amp; transport.',
      pl: 'Powłoki renowacyjne premium dla flot i transportu.',
      ro: 'Vopsele de refinisare premium pentru flote &amp; transport.',
      de: 'Premium-Refinish-Beschichtungen für Flotte &amp; Transport.',
      fr: 'Des revêtements de refinish premium pour la flotte &amp; le transport.',
      es: 'Recubrimientos de repintado premium para flotas &amp; transporte.',
      it: 'Rivestimenti di refinish premium per flotte &amp; trasporto.',
      tr: 'Filo &amp; nakliye için premium boya yenileme kaplamaları.', no: 'Premium lakkeringsbelegg for kjøretøypark &amp; transport.', sv: 'Premium lackeringsbeläggningar för fordonsflotta &amp; transport.' }],
    ['footer .foot-grid div:nth-child(2) a', {
      nl: ['Urethaan primer','Urethaan toplagen','Base coat','Intermix-kleur'],
      pl: ['Podkład urethane','Lakiery urethane','Baza','Kolor intermix'],
      ro: ['Grund urethane','Lacuri urethane','Bază','Culoare intermix'],
      de: ['Urethan-Grundierung','Urethan-Decklacke','Basislack','Intermix-Farbe'],
      fr: ['Apprêt uréthane','Vernis uréthane','Base','Couleur intermix'],
      es: ['Imprimación de uretano','Acabados de uretano','Base','Color intermix'],
      it: ['Primer uretanico','Finiture uretaniche','Base','Colore intermix'],
      tr: ['Üretan astar','Üretan son katlar','Baz kat','Intermix renk'], no: ['Uretanprimer','Uretantopplag','Base coat','Intermix-farge'], sv: ['Uretanprimer','Uretantopplager','Base coat','Intermix-färg'] }],
    ['footer h3', {
      nl: ['Producten','Baril Group'],
      pl: ['Produkty','Baril Group'],
      ro: ['Produse','Baril Group'],
      de: ['Produkte','Baril Group'],
      fr: ['Produits','Baril Group'],
      es: ['Productos','Baril Group'],
      it: ['Prodotti','Baril Group'],
      tr: ['Ürünler','Baril Group'], no: ['Produkter','Baril Group'], sv: ['Produkter','Baril Group'] }],
    ['.foot-bottom span', {"nl":["© FleetSpec · een merk van Baril Group · Angola, IN","Houd het wagenpark in beweging."],"pl":["© FleetSpec · marka Baril Group · Angola, IN","Utrzymaj flotę w ruchu."],"ro":["© FleetSpec · o marcă Baril Group · Angola, IN","Menține flota în mișcare."],"de":["© FleetSpec · eine Marke von Baril Group · Angola, IN","Halten Sie die Flotte in Bewegung."],"fr":["© FleetSpec · une marque de Baril Group · Angola, IN","Gardez la flotte en mouvement."],"es":["© FleetSpec · una marca de Baril Group · Angola, IN","Mantén la flota en movimiento."],"it":["© FleetSpec · un marchio di Baril Group · Angola, IN","Mantieni la flotta in movimento."],"tr":["© FleetSpec · bir Baril Group markası · Angola, IN","Filoyu hareket halinde tutun."], "no": ["© FleetSpec · et merke fra Baril Group · Angola, IN","Hold flåten i bevegelse."], "sv": ["© FleetSpec · ett varumärke från Baril Group · Angola, IN","Håll flottan i rörelse."]}]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('fleetspec-lang') || 'en'; } catch (e) {}
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
    try { localStorage.setItem('fleetspec-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro', 'de', 'fr', 'es', 'it', 'tr', 'no', 'sv'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
