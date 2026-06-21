/* Language switch for the Copperant one-pager. EN authored in the DOM;
   NL/PL/RO/DE/FR/ES/IT in the MAP. */
(() => {
  'use strict';
  const MAP = [
    ['.foot-disclaimer', { nl: 'We willen onze informatie zo breed mogelijk beschikbaar maken; daarom zijn sommige teksten vertaald met Anthropic Claude AI. Komt u onverhoopt een fout tegen, laat het ons dan vooral weten.', pl: 'Chcemy udostępniać nasze informacje możliwie jak najszerzej, dlatego niektóre teksty przetłumaczyliśmy za pomocą Anthropic Claude AI. Jeśli zauważą Państwo błąd, prosimy o informację.', ro: 'Dorim să facem informațiile noastre cât mai larg disponibile; de aceea, unele texte au fost traduse cu Anthropic Claude AI. Dacă întâlniți o eroare, vă rugăm să ne anunțați.', de: 'Wir möchten unsere Informationen so breit wie möglich verfügbar machen; daher wurden einige Texte mit Anthropic Claude AI übersetzt. Sollte Ihnen ein Fehler auffallen, lassen Sie es uns bitte wissen.', fr: 'Nous souhaitons rendre nos informations aussi largement accessibles que possible ; c\'est pourquoi certains textes ont été traduits avec Anthropic Claude AI. Si vous constatez une erreur, n\'hésitez pas à nous le signaler.', es: 'Queremos que nuestra información esté disponible de la forma más amplia posible; por eso, algunos textos se han traducido con Anthropic Claude AI. Si detecta algún error, le rogamos que nos lo comunique.', it: 'Vogliamo rendere le nostre informazioni il più ampiamente disponibili possibile; per questo alcuni testi sono stati tradotti con Anthropic Claude AI. Se dovesse notare un errore, vi preghiamo di segnalarcelo.', tr: 'Bilgilerimizi mümkün olduğunca geniş kitlelere ulaştırmak istiyoruz; bu nedenle bazı metinler Anthropic Claude AI ile çevrildi. Bir hata fark ederseniz lütfen bize bildirin.' }],
    ['.navlinks a', {
      nl: ['Waarom Copperant','Het assortiment','Duurzaamheid','Voor professionals','copperant.com ↗'],
      pl: ['Dlaczego Copperant','Asortyment','Zrównoważoność','Dla profesjonalistów','copperant.com ↗'],
      ro: ['De ce Copperant','Gama','Sustenabilitate','Pentru profesioniști','copperant.com ↗'],
      de: ['Warum Copperant','Das Sortiment','Nachhaltigkeit','Für Profis','copperant.com ↗'],
      fr: ['Pourquoi Copperant','La gamme','Durabilité','Pour les pros','copperant.com ↗'],
      es: ['Por qué Copperant','La gama','Sostenibilidad','Para profesionales','copperant.com ↗'],
      it: ['Perché Copperant','La gamma','Sostenibilità','Per i professionisti','copperant.com ↗'],
      tr: ['Neden Copperant','Ürün gamı','Sürdürülebilirlik','Profesyoneller için','copperant.com ↗'] }],
    ['header .eyebrow .eb-txt', {
      nl: 'Copperant — De groenste verf · Een merk van Baril Group',
      pl: 'Copperant — Najbardziej zielona farba · Marka Baril Group',
      ro: 'Copperant — Cea mai verde vopsea · O marcă Baril Group',
      de: 'Copperant — Die grünste Farbe · Eine Marke der Baril Group',
      fr: 'Copperant — La peinture la plus verte · Une marque du groupe Baril',
      es: 'Copperant — La pintura más verde · Una marca de Baril Group',
      it: 'Copperant — La vernice più verde · Un marchio di Baril Group',
      tr: 'Copperant — En yeşil boya · Bir Baril Group markası' }],
    ['header h1', {
      nl: 'Professionele resultaten,<br><span class="green">groenste</span> verf',
      pl: 'Profesjonalne efekty,<br><span class="green">najbardziej zielona</span> farba',
      ro: 'Rezultate profesionale,<br>cea mai <span class="green">verde</span> vopsea',
      de: 'Professionelle Ergebnisse,<br><span class="green">grünste</span> Farbe',
      fr: 'Des résultats pros,<br>la peinture la plus <span class="green">verte</span>',
      es: 'Resultados profesionales,<br>la pintura más <span class="green">verde</span>',
      it: 'Risultati professionali,<br>la vernice più <span class="green">verde</span>',
      tr: 'Profesyonel sonuçlar,<br><span class="green">en yeşil</span> boya' }],
    ['.hero-sub', {
      nl: 'Een compleet biobased verfsysteem voor professionals — <strong>plantaardige chemie en productie op hernieuwbare energie</strong>, met de prestaties die je verwacht en elke kleur die je kunt bedenken.',
      pl: 'Kompletny biobazowy system malarski dla profesjonalistów — <strong>chemia roślinna i produkcja na energii odnawialnej</strong>, z oczekiwaną wydajnością i każdym kolorem, jaki sobie wyobrazisz.',
      ro: 'Un sistem complet de vopsea biobazată pentru profesioniști — <strong>chimie vegetală și producție pe energie regenerabilă</strong>, cu performanța așteptată și orice culoare îți poți imagina.',
      de: 'Ein komplettes biobasiertes Farbsystem für Profis — <strong>pflanzliche Chemie und Produktion mit erneuerbarer Energie</strong>, mit der Leistung, die Sie erwarten, und jeder erdenklichen Farbe.',
      fr: 'Un système de peinture biosourcé complet pour les professionnels — <strong>chimie végétale et production à l\'énergie renouvelable</strong>, avec les performances attendues et toutes les couleurs imaginables.',
      es: 'Un sistema de pintura biobasado completo para profesionales — <strong>química vegetal y producción con energía renovable</strong>, con el rendimiento que esperas y todos los colores que puedas imaginar.',
      it: 'Un sistema di pittura biobased completo per i professionisti — <strong>chimica vegetale e produzione con energia rinnovabile</strong>, con le prestazioni che ti aspetti e ogni colore che puoi immaginare.',
      tr: 'Profesyoneller için eksiksiz, biyobazlı bir boya sistemi — <strong>bitkisel kimya ve yenilenebilir enerjiyle üretim</strong>, beklediğiniz performansla ve hayal edebileceğiniz her renkle.' }],
    ['header .hero-cta .btn-copper', { nl: 'Bezoek copperant.com ↗', pl: 'Odwiedź copperant.com ↗', ro: 'Vizitează copperant.com ↗', de: 'copperant.com besuchen ↗', fr: 'Visiter copperant.com ↗', es: 'Visitar copperant.com ↗', it: 'Visita copperant.com ↗', tr: 'copperant.com\'u ziyaret edin ↗' }],
    ['header .hero-cta .btn-ghost', { nl: 'Bekijk het assortiment', pl: 'Zobacz asortyment', ro: 'Explorează gama', de: 'Das Sortiment ansehen', fr: 'Voir la gamme', es: 'Ver la gama', it: 'Scopri la gamma', tr: 'Ürün gamını keşfedin' }],
    ['.hero-foot span:first-child', {
      nl: 'Biobased · EU Ecolabel · Cradle to Cradle · Hernieuwbare energie',
      pl: 'Biobazowa · EU Ecolabel · Cradle to Cradle · Energia odnawialna',
      ro: 'Biobazată · EU Ecolabel · Cradle to Cradle · Energie regenerabilă',
      de: 'Biobasiert · EU Ecolabel · Cradle to Cradle · Erneuerbare Energie',
      fr: 'Biosourcée · EU Ecolabel · Cradle to Cradle · Énergie renouvelable',
      es: 'Biobasada · EU Ecolabel · Cradle to Cradle · Energía renovable',
      it: 'Biobased · EU Ecolabel · Cradle to Cradle · Energia rinnovabile',
      tr: 'Biyobazlı · EU Ecolabel · Cradle to Cradle · Yenilenebilir enerji' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează', de: 'Scrollen', fr: 'Défiler', es: 'Desliza', it: 'Scorri', tr: 'Kaydır' }],

    ['#mission .eyebrow', { nl: 'Waarom Copperant', pl: 'Dlaczego Copperant', ro: 'De ce Copperant', de: 'Warum Copperant', fr: 'Pourquoi Copperant', es: 'Por qué Copperant', it: 'Perché Copperant', tr: 'Neden Copperant' }],
    ['.mission-quote', {
      nl: 'Professionals zouden niet hoeven kiezen tussen prestaties en de planeet. Copperant is gebouwd op natuurlijke grondstoffen en productie op hernieuwbare energie — <em>de groenste verf, zonder compromis</em>.',
      pl: 'Profesjonaliści nie powinni wybierać między wydajnością a planetą. Copperant powstaje z naturalnych surowców i w produkcji na energii odnawialnej — <em>najbardziej zielona farba, bez kompromisów</em>.',
      ro: 'Profesioniștii nu ar trebui să aleagă între performanță și planetă. Copperant este construit pe materii prime naturale și producție pe energie regenerabilă — <em>cea mai verde vopsea, fără compromisuri</em>.',
      de: 'Profis sollten nicht zwischen Leistung und Planet wählen müssen. Copperant basiert auf natürlichen Rohstoffen und Produktion mit erneuerbarer Energie — <em>die grünste Farbe, ohne Kompromisse</em>.',
      fr: 'Les professionnels ne devraient pas avoir à choisir entre performance et planète. Copperant repose sur des matières premières naturelles et une production à l\'énergie renouvelable — <em>la peinture la plus verte, sans compromis</em>.',
      es: 'Los profesionales no deberían tener que elegir entre rendimiento y planeta. Copperant se basa en materias primas naturales y una producción con energía renovable — <em>la pintura más verde, sin concesiones</em>.',
      it: 'I professionisti non dovrebbero dover scegliere tra prestazioni e pianeta. Copperant nasce da materie prime naturali e da una produzione con energia rinnovabile — <em>la vernice più verde, senza compromessi</em>.',
      tr: 'Profesyoneller performans ile gezegen arasında seçim yapmak zorunda kalmamalı. Copperant doğal hammaddeler ve yenilenebilir enerjiyle üretim üzerine kuruludur — <em>ödün vermeden en yeşil boya</em>.' }],
    ['#mission .mm b', {
      nl: ['Plantaardig &amp; natuurlijk','productie op hernieuwbare energie','Elke kleur, onbeperkt'],
      pl: ['Roślinna i naturalna','Produkcja na energii odnawialnej','Każdy kolor, bez limitu'],
      ro: ['Vegetală și naturală','Producție pe energie regenerabilă','Orice culoare, nelimitat'],
      de: ['Pflanzlich &amp; natürlich','Produktion mit erneuerbarer Energie','Jede Farbe, unbegrenzt'],
      fr: ['Végétale et naturelle','Production à l\'énergie renouvelable','Toute couleur, sans limite'],
      es: ['Vegetal y natural','Producción con energía renovable','Todo color, sin límite'],
      it: ['Vegetale e naturale','Produzione con energia rinnovabile','Ogni colore, senza limiti'],
      tr: ['Bitkisel &amp; doğal','Yenilenebilir enerjiyle üretim','Her renk, sınırsız'] }],
    ['#mission .mm span', {
      nl: ['Samengesteld uit natuurlijke, plantaardige grondstoffen — fossiele chemie teruggebracht.','Gemaakt op eigen hernieuwbare energie, met plantaardige grondstoffen die biogene koolstof vastleggen.','Optimale professionele prestaties, in onbeperkt veel kleuren op maat.'],
      pl: ['Opracowana z naturalnych, roślinnych surowców — chemia kopalna ograniczona.','Wytwarzana na własnej energii odnawialnej, z roślinnych surowców, które magazynują węgiel biogeniczny.','Optymalna profesjonalna wydajność, w nieograniczonej liczbie kolorów na zamówienie.'],
      ro: ['Formulată din materii prime naturale, vegetale — chimia fosilă redusă.','Produsă cu propria energie regenerabilă, din materii prime vegetale care stochează carbon biogen.','Performanță profesională optimă, în culori personalizate nelimitate.'],
      de: ['Zusammengesetzt aus natürlichen, pflanzlichen Rohstoffen — fossile Chemie reduziert.','Hergestellt mit eigener erneuerbarer Energie, aus pflanzlichen Rohstoffen, die biogenen Kohlenstoff speichern.','Optimale professionelle Leistung, in unbegrenzt vielen Farben nach Maß.'],
      fr: ['Composée de matières premières naturelles et végétales — la chimie fossile réduite.','Fabriquée avec notre propre énergie renouvelable, à partir de matières premières végétales qui stockent du carbone biogénique.','Des performances professionnelles optimales, dans un nombre illimité de couleurs sur mesure.'],
      es: ['Formulada con materias primas naturales y vegetales — química fósil reducida.','Fabricada con nuestra propia energía renovable, a partir de materias primas vegetales que almacenan carbono biogénico.','Rendimiento profesional óptimo, en un número ilimitado de colores a medida.'],
      it: ['Composta da materie prime naturali e vegetali — chimica fossile ridotta.','Prodotta con la nostra energia rinnovabile, da materie prime vegetali che immagazzinano carbonio biogenico.','Prestazioni professionali ottimali, in un numero illimitato di colori su misura.'],
      tr: ['Doğal, bitkisel hammaddelerden formüle edilmiştir — fosil kimya en aza indirilmiştir.','Kendi yenilenebilir enerjimizle, biyojenik karbonu depolayan bitkisel hammaddelerle üretilir.','Sınırsız sayıda özel renkte, optimum profesyonel performans.'] }],

    ['#range .eyebrow', { nl: 'Het assortiment', pl: 'Asortyment', ro: 'Gama', de: 'Das Sortiment', fr: 'La gamme', es: 'La gama', it: 'La gamma', tr: 'Ürün gamı' }],
    ['#range h2', {
      nl: 'Eén systeem, <span class="copper">vijf lijnen</span>',
      pl: 'Jeden system, <span class="copper">pięć linii</span>',
      ro: 'Un sistem, <span class="copper">cinci linii</span>',
      de: 'Ein System, <span class="copper">fünf Linien</span>',
      fr: 'Un système, <span class="copper">cinq lignes</span>',
      es: 'Un sistema, <span class="copper">cinco líneas</span>',
      it: 'Un sistema, <span class="copper">cinque linee</span>',
      tr: 'Tek sistem, <span class="copper">beş seri</span>' }],
    ['#range .lead', {
      nl: 'Een compleet, gespecialiseerd systeem voor elke ondergrond en klus — hout, steen, metaal en meer.',
      pl: 'Kompletny, wyspecjalizowany system do każdego podłoża i zadania — drewno, kamień, metal i więcej.',
      ro: 'Un sistem complet, specializat pentru orice substrat și lucrare — lemn, piatră, metal și altele.',
      de: 'Ein komplettes, spezialisiertes System für jeden Untergrund und jede Aufgabe — Holz, Stein, Metall und mehr.',
      fr: 'Un système complet et spécialisé pour tout support et tout chantier — bois, pierre, métal et plus encore.',
      es: 'Un sistema completo y especializado para cualquier soporte y trabajo — madera, piedra, metal y más.',
      it: 'Un sistema completo e specializzato per ogni supporto e lavoro — legno, pietra, metallo e altro.',
      tr: 'Her yüzey ve iş için eksiksiz, uzmanlaşmış bir sistem — ahşap, taş, metal ve daha fazlası.' }],
    ['#range .feat span', {
      nl: ['Muurverven, primers, lakken, beitsen en reinigers — de dagelijkse kern van het systeem.','Het UV+-systeem: grondlagen, systeemverven, lakken en metallic-afwerkingen.','Hout- en vloerlakken met UV+-technologie voor blijvende, natuurlijke bescherming.','Minerale muurprimers en -verven voor een diepe, ademende matte afwerking.','Grondlagen en afwerkverven die het professionele systeem compleet maken.'],
      pl: ['Farby ścienne, podkłady, lakiery, bejce i środki czyszczące — codzienny rdzeń systemu.','System UV+: podkłady, farby systemowe, lakiery i wykończenia metaliczne.','Lakiery do drewna i podłóg z technologią UV+ dla trwałej, naturalnej ochrony.','Mineralne podkłady i farby ścienne dla głębokiego, oddychającego matu.','Podkłady i farby wykończeniowe, które dopełniają profesjonalny system.'],
      ro: ['Vopsele de pereți, grunduri, lacuri, baițuri și soluții de curățare — nucleul de zi cu zi al sistemului.','Sistemul UV+: straturi de bază, vopsele de sistem, lacuri și finisaje metalice.','Lacuri pentru lemn și pardoseli cu tehnologie UV+ pentru protecție durabilă și naturală.','Grunduri și vopsele minerale de pereți pentru un mat profund, respirabil.','Straturi de bază și vopsele de finisare care completează sistemul profesional.'],
      de: ['Wandfarben, Grundierungen, Lacke, Lasuren und Reiniger — der tägliche Kern des Systems.','Das UV+-System: Grundierungen, Systemfarben, Lacke und Metallic-Finishes.','Holz- und Bodenlacke mit UV+-Technologie für dauerhaften, natürlichen Schutz.','Mineralische Wandgrundierungen und -farben für ein tiefes, atmungsaktives Matt.','Grundierungen und Decklacke, die das professionelle System vervollständigen.'],
      fr: ['Peintures murales, primaires, laques, lasures et nettoyants — le cœur quotidien du système.','Le système UV+ : couches de fond, peintures de système, laques et finitions métallisées.','Laques pour bois et sols avec technologie UV+ pour une protection naturelle durable.','Primaires et peintures murales minéraux pour un mat profond et respirant.','Couches de fond et peintures de finition qui complètent le système professionnel.'],
      es: ['Pinturas murales, imprimaciones, lacas, tintes y limpiadores — el núcleo diario del sistema.','El sistema UV+: capas de fondo, pinturas de sistema, lacas y acabados metalizados.','Lacas para madera y suelos con tecnología UV+ para una protección natural duradera.','Imprimaciones y pinturas murales minerales para un mate profundo y transpirable.','Capas de fondo y pinturas de acabado que completan el sistema profesional.'],
      it: ['Pitture murali, primer, smalti, impregnanti e detergenti — il cuore quotidiano del sistema.','Il sistema UV+: fondi, pitture di sistema, smalti e finiture metallizzate.','Vernici per legno e pavimenti con tecnologia UV+ per una protezione naturale duratura.','Primer e pitture murali minerali per un opaco profondo e traspirante.','Fondi e pitture di finitura che completano il sistema professionale.'],
      tr: ['Duvar boyaları, astarlar, vernikler, ahşap koruyucular ve temizleyiciler — sistemin günlük çekirdeği.','UV+ sistemi: astar katları, sistem boyaları, vernikler ve metalik son katlar.','Kalıcı, doğal koruma için UV+ teknolojili ahşap ve zemin vernikleri.','Derin, nefes alan mat bir görünüm için mineral duvar astarları ve boyaları.','Profesyonel sistemi tamamlayan astar katları ve son kat boyalar.'] }],

    ['#green .eyebrow', { nl: 'Duurzaamheid', pl: 'Zrównoważoność', ro: 'Sustenabilitate', de: 'Nachhaltigkeit', fr: 'Durabilité', es: 'Sostenibilidad', it: 'Sostenibilità', tr: 'Sürdürülebilirlik' }],
    ['#green h2', {
      nl: 'De <span class="green">groenste</span> verf, bewezen',
      pl: 'Najbardziej <span class="green">zielona</span> farba, potwierdzona',
      ro: 'Cea mai <span class="green">verde</span> vopsea, dovedită',
      de: 'Die <span class="green">grünste</span> Farbe, bewiesen',
      fr: 'La peinture la plus <span class="green">verte</span>, prouvée',
      es: 'La pintura más <span class="green">verde</span>, demostrado',
      it: 'La vernice più <span class="green">verde</span>, dimostrato',
      tr: 'En <span class="green">yeşil</span> boya, kanıtlanmış' }],
    ['#green .lead', {
      nl: 'Copperant combineert professionele prestaties met enkele van de sterkste eco-credentials in de branche — onafhankelijk getest en gecertificeerd.',
      pl: 'Copperant łączy profesjonalną wydajność z jednymi z najmocniejszych eko-certyfikatów w branży — niezależnie przetestowane i certyfikowane.',
      ro: 'Copperant combină performanța profesională cu unele dintre cele mai puternice acreditări ecologice din industrie — testate și certificate independent.',
      de: 'Copperant verbindet professionelle Leistung mit einigen der stärksten Öko-Nachweise der Branche — unabhängig getestet und zertifiziert.',
      fr: 'Copperant allie performance professionnelle et certains des meilleurs labels écologiques du secteur — testés et certifiés de façon indépendante.',
      es: 'Copperant combina rendimiento profesional con algunas de las credenciales ecológicas más sólidas del sector — probadas y certificadas de forma independiente.',
      it: 'Copperant unisce prestazioni professionali ad alcune delle credenziali ecologiche più solide del settore — testate e certificate in modo indipendente.',
      tr: 'Copperant, profesyonel performansı sektördeki en güçlü ekolojik kanıtlardan bazılarıyla birleştirir — bağımsız olarak test edilmiş ve sertifikalandırılmıştır.' }],
    ['#green .stat .n', { nl: ['Hernieuwbare energie','Plantaardig','Onbeperkt'], pl: ['Energia odnawialna','Roślinna','Bez limitu'], ro: ['Energie regenerabilă','Vegetală','Nelimitat'], de: ['Erneuerbare Energie','Pflanzlich','Unbegrenzt'], fr: ['Énergie renouvelable','Végétale','Illimité'], es: ['Energía renovable','Vegetal','Ilimitado'], it: ['Energia rinnovabile','Vegetale','Illimitato'], tr: ['Yenilenebilir enerji','Bitkisel','Sınırsız'] }],
    ['#green .stat .l', {
      nl: ['Geproduceerd op eigen hernieuwbare energie.','Natuurlijke, plantaardige grondstoffen als basis.','Kleuren op maat, zonder limiet.'],
      pl: ['Wytwarzane na własnej energii odnawialnej.','Naturalne, roślinne surowce w rdzeniu.','Kolory na zamówienie, bez ograniczeń.'],
      ro: ['Produs cu propria energie regenerabilă.','Materii prime naturale, vegetale la bază.','Culori personalizate, fără limite.'],
      de: ['Hergestellt mit eigener erneuerbarer Energie.','Natürliche, pflanzliche Rohstoffe als Basis.','Farben nach Maß, ohne Limit.'],
      fr: ['Fabriqué avec notre propre énergie renouvelable.','Matières premières naturelles et végétales à la base.','Couleurs sur mesure, sans limite.'],
      es: ['Fabricado con nuestra propia energía renovable.','Materias primas naturales y vegetales como base.','Colores a medida, sin límite.'],
      it: ['Prodotto con la nostra energia rinnovabile.','Materie prime naturali e vegetali alla base.','Colori su misura, senza limiti.'],
      tr: ['Kendi yenilenebilir enerjimizle üretilir.','Temelinde doğal, bitkisel hammaddeler.','Sınırsız, özel renkler.'] }],

    ['#pros .eyebrow', { nl: 'Voor professionals', pl: 'Dla profesjonalistów', ro: 'Pentru profesioniști', de: 'Für Profis', fr: 'Pour les pros', es: 'Para profesionales', it: 'Per i professionisti', tr: 'Profesyoneller için' }],
    ['#pros h2', {
      nl: 'Gemaakt voor de<br>mensen die <span class="copper">schilderen</span>',
      pl: 'Stworzona dla<br>tych, którzy <span class="copper">malują</span>',
      ro: 'Creată pentru<br>cei care <span class="copper">vopsesc</span>',
      de: 'Gemacht für die<br>Menschen, die <span class="copper">streichen</span>',
      fr: 'Conçue pour<br>ceux qui <span class="copper">peignent</span>',
      es: 'Creada para<br>quienes <span class="copper">pintan</span>',
      it: 'Creata per<br>chi <span class="copper">dipinge</span>',
      tr: '<span class="copper">Boya yapan</span><br>insanlar için tasarlandı' }],
    ['#pros .lead', {
      nl: 'In de eerste plaats gebouwd voor de vakschilder — en ver daarbuiten vertrouwd.',
      pl: 'Stworzona przede wszystkim dla profesjonalnego malarza — i ceniona daleko poza branżą.',
      ro: 'Creată în primul rând pentru zugravul profesionist — și apreciată mult dincolo de breaslă.',
      de: 'In erster Linie für den Profimaler gebaut — und weit darüber hinaus geschätzt.',
      fr: 'Conçue avant tout pour le peintre professionnel — et appréciée bien au-delà.',
      es: 'Creada ante todo para el pintor profesional — y apreciada mucho más allá.',
      it: 'Creata prima di tutto per l\'imbianchino professionista — e apprezzata ben oltre.',
      tr: 'Her şeyden önce profesyonel boyacı için tasarlandı — ve çok daha ötesinde güveniliyor.' }],
    ['#pros .split-list span', {
      nl: ['Vakschilders en doe-het-zelvers die groen willen zonder in te leveren op kwaliteit.','Aannemers en architecten die voorschrijven voor kantoren, zorg, scholen en horeca.','Vastgoedbeheerders die gezondere, emissiearme interieurs willen.'],
      pl: ['Profesjonalni malarze i majsterkowicze, którzy chcą ekologii bez utraty jakości.','Wykonawcy i architekci specyfikujący dla biur, opieki, szkół i hotelarstwa.','Zarządcy nieruchomości, którzy chcą zdrowszych wnętrz o niskiej emisji.'],
      ro: ['Zugravi profesioniști și pasionați DIY care vor verde fără a renunța la calitate.','Antreprenori și arhitecți care specifică pentru birouri, îngrijire, școli și ospitalitate.','Administratori de proprietăți care vor interioare mai sănătoase, cu emisii reduse.'],
      de: ['Profimaler und Heimwerker, die grün wollen, ohne bei der Qualität nachzugeben.','Bauunternehmer und Architekten, die für Büros, Pflege, Schulen und Gastgewerbe ausschreiben.','Immobilienverwalter, die gesündere, emissionsarme Innenräume wollen.'],
      fr: ['Peintres professionnels et bricoleurs qui veulent du vert sans renoncer à la qualité.','Entrepreneurs et architectes qui prescrivent pour bureaux, santé, écoles et hôtellerie.','Gestionnaires immobiliers qui veulent des intérieurs plus sains et à faibles émissions.'],
      es: ['Pintores profesionales y aficionados al bricolaje que quieren ser ecológicos sin renunciar a la calidad.','Contratistas y arquitectos que prescriben para oficinas, sanidad, escuelas y hostelería.','Administradores de fincas que buscan interiores más sanos y de bajas emisiones.'],
      it: ['Imbianchini professionisti e appassionati del fai-da-te che vogliono il verde senza rinunciare alla qualità.','Imprese e architetti che prescrivono per uffici, sanità, scuole e ospitalità.','Gestori immobiliari che vogliono interni più sani e a basse emissioni.'],
      tr: ['Kaliteden ödün vermeden yeşili tercih eden profesyonel boyacılar ve kendin-yap meraklıları.','Ofisler, sağlık, okullar ve konaklama için şartname hazırlayan müteahhitler ve mimarlar.','Daha sağlıklı, düşük emisyonlu iç mekânlar isteyen mülk yöneticileri.'] }],

    ['.cta-card .eyebrow', { nl: 'De officiële site', pl: 'Oficjalna strona', ro: 'Site-ul oficial', de: 'Die offizielle Website', fr: 'Le site officiel', es: 'El sitio oficial', it: 'Il sito ufficiale', tr: 'Resmî site' }],
    ['.cta-card h2', { nl: 'Bekijk het volledige Copperant-systeem', pl: 'Zobacz pełny system Copperant', ro: 'Vezi întregul sistem Copperant', de: 'Das komplette Copperant-System ansehen', fr: 'Découvrir tout le système Copperant', es: 'Descubre todo el sistema Copperant', it: 'Scopri l\'intero sistema Copperant', tr: 'Eksiksiz Copperant sistemini keşfedin' }],
    ['.cta-card p', {
      nl: 'Kleuren, productlijnen, datasheets en verkooppunten — ontdek alles op de officiële Copperant-website.',
      pl: 'Kolory, linie produktów, karty techniczne i punkty sprzedaży — odkryj wszystko na oficjalnej stronie Copperant.',
      ro: 'Culori, linii de produse, fișe tehnice și puncte de vânzare — descoperă totul pe site-ul oficial Copperant.',
      de: 'Farben, Produktlinien, Datenblätter und Verkaufsstellen — entdecken Sie alles auf der offiziellen Copperant-Website.',
      fr: 'Couleurs, lignes de produits, fiches techniques et points de vente — découvrez tout sur le site officiel Copperant.',
      es: 'Colores, líneas de productos, fichas técnicas y puntos de venta — descúbrelo todo en el sitio oficial de Copperant.',
      it: 'Colori, linee di prodotto, schede tecniche e punti vendita — scopri tutto sul sito ufficiale Copperant.',
      tr: 'Renkler, ürün serileri, teknik föyler ve satış noktaları — hepsini resmî Copperant web sitesinde keşfedin.' }],
    ['.cta-card .btn-copper', { nl: 'Naar copperant.com ↗', pl: 'Przejdź do copperant.com ↗', ro: 'Mergi la copperant.com ↗', de: 'Zu copperant.com ↗', fr: 'Aller sur copperant.com ↗', es: 'Ir a copperant.com ↗', it: 'Vai su copperant.com ↗', tr: 'copperant.com\'a git ↗' }],
    ['.cta-card .btn-ghost', { nl: 'Ontdek Baril Group', pl: 'Poznaj Baril Group', ro: 'Descoperă Baril Group', de: 'Baril Group entdecken', fr: 'Découvrir le groupe Baril', es: 'Descubrir Baril Group', it: 'Scopri Baril Group', tr: 'Baril Group\'u keşfedin' }],

    ['.foot-claim', {
      nl: 'Professionele resultaten met de groenste verf.',
      pl: 'Profesjonalne efekty z najbardziej zieloną farbą.',
      ro: 'Rezultate profesionale cu cea mai verde vopsea.',
      de: 'Professionelle Ergebnisse mit der grünsten Farbe.',
      fr: 'Des résultats professionnels avec la peinture la plus verte.',
      es: 'Resultados profesionales con la pintura más verde.',
      it: 'Risultati professionali con la vernice più verde.',
      tr: 'En yeşil boyayla profesyonel sonuçlar.' }],
    ['.foot-grid div:nth-child(2) a', {
      nl: ['Het assortiment','Duurzaamheid','copperant.com ↗'],
      pl: ['Asortyment','Zrównoważoność','copperant.com ↗'],
      ro: ['Gama','Sustenabilitate','copperant.com ↗'],
      de: ['Das Sortiment','Nachhaltigkeit','copperant.com ↗'],
      fr: ['La gamme','Durabilité','copperant.com ↗'],
      es: ['La gama','Sostenibilidad','copperant.com ↗'],
      it: ['La gamma','Sostenibilità','copperant.com ↗'],
      tr: ['Ürün gamı','Sürdürülebilirlik','copperant.com ↗'] }],
    ['.foot-bottom span', {
      nl: ["© Copperant · een merk van Baril Group", 'De groenste verf, zonder compromis.'],
      pl: ["© Copperant · marka Baril Group", 'Najbardziej zielona farba, bez kompromisów.'],
      ro: ["© Copperant · o marcă Baril Group", 'Cea mai verde vopsea, fără compromisuri.'],
      de: ["© Copperant · eine Marke der Baril Group", 'Die grünste Farbe, ohne Kompromisse.'],
      fr: ["© Copperant · une marque du groupe Baril", 'La peinture la plus verte, sans compromis.'],
      es: ["© Copperant · una marca de Baril Group", 'La pintura más verde, sin concesiones.'],
      it: ["© Copperant · un marchio di Baril Group", 'La vernice più verde, senza compromessi.'],
      tr: ["© Copperant · bir Baril Group markası", 'En yeşil boya, ödün vermeden.'] }]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('copperant-lang') || 'en'; } catch (e) {}
  if (!['en', 'nl', 'pl', 'ro', 'de', 'fr', 'es', 'it', 'tr'].includes(lang)) lang = 'en';

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
    if (flagBox) { flagBox.querySelectorAll('button[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); const _c = flagBox.querySelector('.flag-current'), _s = flagBox.querySelector('button[data-lang="' + l + '"] .flag'); if (_c && _s) _c.src = _s.getAttribute('src'); }
    try { localStorage.setItem('copperant-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }
  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro', 'de', 'fr', 'es', 'it', 'tr'].includes(lang)) lang = 'en';
    apply(lang);
  }));
  apply(lang);
})();
