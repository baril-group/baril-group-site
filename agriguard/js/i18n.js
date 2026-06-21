/* Language switch for the AgriGuard one-pager. English is authored in the DOM;
   NL / PL / RO / DE / FR / ES / IT / TR live in the MAP as
   [selector, {nl, pl, ro, de, fr, es, it, tr}].
   Brand names (AgriGuard, Baril, Baril Coatings) are kept untranslated. */
(() => {
  'use strict';
  const MAP = [
    ['.foot-disclaimer', { nl: 'We willen onze informatie zo breed mogelijk beschikbaar maken; daarom zijn sommige teksten vertaald met Anthropic Claude AI. Komt u onverhoopt een fout tegen, laat het ons dan vooral weten.', pl: 'Chcemy udostępniać nasze informacje możliwie jak najszerzej, dlatego niektóre teksty przetłumaczyliśmy za pomocą Anthropic Claude AI. Jeśli zauważą Państwo błąd, prosimy o informację.', ro: 'Dorim să facem informațiile noastre cât mai larg disponibile; de aceea, unele texte au fost traduse cu Anthropic Claude AI. Dacă întâlniți o eroare, vă rugăm să ne anunțați.', de: 'Wir möchten unsere Informationen so breit wie möglich verfügbar machen; daher wurden einige Texte mit Anthropic Claude AI übersetzt. Sollte Ihnen ein Fehler auffallen, lassen Sie es uns bitte wissen.', fr: 'Nous souhaitons rendre nos informations aussi largement accessibles que possible ; c\'est pourquoi certains textes ont été traduits avec Anthropic Claude AI. Si vous constatez une erreur, n\'hésitez pas à nous le signaler.', es: 'Queremos que nuestra información esté disponible de la forma más amplia posible; por eso, algunos textos se han traducido con Anthropic Claude AI. Si detecta algún error, le rogamos que nos lo comunique.', it: 'Vogliamo rendere le nostre informazioni il più ampiamente disponibili possibile; per questo alcuni testi sono stati tradotti con Anthropic Claude AI. Se dovesse notare un errore, vi preghiamo di segnalarcelo.', tr: 'Bilgilerimizi mümkün olduğunca geniş kitlelere ulaştırmak istiyoruz; bu nedenle bazı metinler Anthropic Claude AI ile çevrildi. Bir hata fark ederseniz lütfen bize bildirin.' }],
    ['.navlinks a', {
      nl: ['Waarom AgriGuard','Producten','Prestaties','Toepassingen','Contact'],
      pl: ['Dlaczego AgriGuard','Produkty','Wydajność','Zastosowania','Kontakt'],
      ro: ['De ce AgriGuard','Produse','Performanță','Aplicații','Contact'],
      de: ['Warum AgriGuard','Produkte','Leistung','Anwendungen','Kontakt'],
      fr: ['Pourquoi AgriGuard','Produits','Performance','Applications','Contact'],
      es: ['Por qué AgriGuard','Productos','Rendimiento','Aplicaciones','Contacto'],
      it: ['Perché AgriGuard','Prodotti','Prestazioni','Applicazioni','Contatto'],
      tr: ['Neden AgriGuard','Ürünler','Performans','Uygulamalar','İletişim'] }],
    ['header .eyebrow .eb-txt', {
      nl: 'AgriGuard — Roestwerende coatings · Een merk van Baril Group',
      pl: 'AgriGuard — Powłoki antykorozyjne · Marka Baril Group',
      ro: 'AgriGuard — Vopsele anticorozive · O marcă Baril Group',
      de: 'AgriGuard — Rostschutz-Beschichtungen · Eine Marke der Baril Group',
      fr: 'AgriGuard — Revêtements antirouille · Une marque du groupe Baril',
      es: 'AgriGuard — Recubrimientos antioxidantes · Una marca de Baril Group',
      it: 'AgriGuard — Rivestimenti antiruggine · Un marchio di Baril Group',
      tr: 'AgriGuard — Pas önleyici kaplamalar · Bir Baril Group markası' }],
    ['header h1', {
      nl: 'Stop roest<br><span class="acc">in zijn spoor</span>',
      pl: 'Zatrzymaj rdzę<br><span class="acc">w miejscu</span>',
      ro: 'Oprește rugina<br><span class="acc">pe loc</span>',
      de: 'Stoppen Sie Rost<br><span class="acc">auf der Stelle</span>',
      fr: 'Stoppez la rouille<br><span class="acc">net</span>',
      es: 'Detén el óxido<br><span class="acc">en seco</span>',
      it: 'Ferma la ruggine<br><span class="acc">sul nascere</span>',
      tr: 'Pası<br><span class="acc">olduğu yerde durdurun</span>' }],
    ['.hero-sub', {
      nl: 'Een roest-inkapselende coating die u <strong>direct over bestaande roest</strong> aanbrengt — geen stralen, geen kaal metaal. AgriGuard legt corrosie vast en beschermt uw materieel voor de lange termijn.',
      pl: 'Powłoka kapsułkująca rdzę, którą nakładasz <strong>bezpośrednio na istniejącą rdzę</strong> — bez piaskowania, bez gołego metalu. AgriGuard blokuje korozję i chroni Twój sprzęt na długie lata.',
      ro: 'Un strat care încapsulează rugina, aplicat <strong>direct peste rugina existentă</strong> — fără sablare, fără metal gol. AgriGuard fixează coroziunea și vă protejează echipamentele pe termen lung.',
      de: 'Eine rostkapselnde Beschichtung, die Sie <strong>direkt über vorhandenen Rost</strong> auftragen — ohne Strahlen, ohne blankes Metall. AgriGuard schließt Korrosion ein und schützt Ihre Geräte langfristig.',
      fr: 'Un revêtement encapsulant la rouille, appliqué <strong>directement sur la rouille existante</strong> — sans sablage, sans métal nu. AgriGuard verrouille la corrosion et protège votre matériel sur le long terme.',
      es: 'Un recubrimiento que encapsula el óxido y se aplica <strong>directamente sobre el óxido existente</strong> — sin chorreado, sin metal desnudo. AgriGuard bloquea la corrosión y protege tu equipo a largo plazo.',
      it: 'Un rivestimento che incapsula la ruggine, da applicare <strong>direttamente sulla ruggine esistente</strong> — senza sabbiatura, senza metallo nudo. AgriGuard blocca la corrosione e protegge le tue attrezzature a lungo termine.',
      tr: '<strong>Mevcut pasın doğrudan üzerine</strong> uyguladığınız, pası kapsülleyen bir kaplama — kumlama yok, çıplak metal yok. AgriGuard korozyonu hapseder ve ekipmanınızı uzun vadede korur.' }],
    ['header .hero-cta .btn-solid', { nl: 'Bekijk de producten', pl: 'Zobacz produkty', ro: 'Vezi produsele', de: 'Produkte entdecken', fr: 'Découvrir les produits', es: 'Ver los productos', it: 'Scopri i prodotti', tr: 'Ürünleri keşfedin' }],
    ['header .hero-cta .btn-ghost', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri', de: 'Kontakt &amp; Standorte', fr: 'Contact et sites', es: 'Contacto y sedes', it: 'Contatto e sedi', tr: 'İletişim &amp; lokasyonlar' }],
    ['.hero-foot span:first-child', {
      nl: 'Over roest · Eén laag · Kwast · Roller · Spuit',
      pl: 'Na rdzę · Jedna warstwa · Pędzel · Wałek · Natrysk',
      ro: 'Peste rugină · Un strat · Pensulă · Rolă · Pulverizare',
      de: 'Über Rost · Eine Schicht · Pinsel · Rolle · Spritzen',
      fr: 'Sur la rouille · Une couche · Pinceau · Rouleau · Pulvérisation',
      es: 'Sobre el óxido · Una capa · Brocha · Rodillo · Pistola',
      it: 'Sulla ruggine · Una mano · Pennello · Rullo · Spruzzo',
      tr: 'Pasın üzerine · Tek kat · Fırça · Rulo · Püskürtme' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează', de: 'Scrollen', fr: 'Défiler', es: 'Desliza', it: 'Scorri', tr: 'Kaydır' }],

    ['#mission .eyebrow', { nl: 'Waarom AgriGuard', pl: 'Dlaczego AgriGuard', ro: 'De ce AgriGuard', de: 'Warum AgriGuard', fr: 'Pourquoi AgriGuard', es: 'Por qué AgriGuard', it: 'Perché AgriGuard', tr: 'Neden AgriGuard' }],
    ['.mission-quote', {
      nl: 'Roest slaapt nooit. AgriGuard <em>kapselt</em> bestaande roest in en sluit hem af van vocht en zuurstof — zodat u materieel beschermt waar het staat, zonder het terug te brengen tot kaal metaal.',
      pl: 'Rdza nigdy nie śpi. AgriGuard <em>kapsułkuje</em> istniejącą rdzę i odcina ją od wilgoci i tlenu — dzięki czemu chronisz sprzęt tam, gdzie stoi, bez sprowadzania go do gołego metalu.',
      ro: 'Rugina nu doarme niciodată. AgriGuard <em>încapsulează</em> rugina existentă și o izolează de umiditate și oxigen — astfel încât protejați echipamentele acolo unde sunt, fără a le aduce la metal gol.',
      de: 'Rost schläft nie. AgriGuard <em>kapselt</em> vorhandenen Rost ein und schließt ihn von Feuchtigkeit und Sauerstoff ab — so schützen Sie Geräte dort, wo sie stehen, ohne sie auf blankes Metall zurückzuführen.',
      fr: 'La rouille ne dort jamais. AgriGuard <em>encapsule</em> la rouille existante et l\'isole de l\'humidité et de l\'oxygène — pour protéger votre matériel là où il se trouve, sans le ramener au métal nu.',
      es: 'El óxido nunca descansa. AgriGuard <em>encapsula</em> el óxido existente y lo aísla de la humedad y el oxígeno — para que protejas el equipo donde está, sin dejarlo en metal desnudo.',
      it: 'La ruggine non dorme mai. AgriGuard <em>incapsula</em> la ruggine esistente e la isola da umidità e ossigeno — così proteggi le attrezzature dove si trovano, senza riportarle al metallo nudo.',
      tr: 'Pas asla uyumaz. AgriGuard mevcut pası <em>kapsüller</em> ve onu nemden ve oksijenden yalıtır — böylece ekipmanınızı çıplak metale indirmeden, olduğu yerde korursunuz.' }],
    ['#mission .mm b', {
      nl: ['Direct over roest aanbrengen','Bescherming in één laag','Snel &amp; flexibel'],
      pl: ['Nakładaj wprost na rdzę','Ochrona w jednej warstwie','Szybko i elastycznie'],
      ro: ['Aplicare direct peste rugină','Protecție într-un singur strat','Rapid și flexibil'],
      de: ['Direkt über Rost auftragen','Schutz in einer Schicht','Schnell &amp; flexibel'],
      fr: ['Appliquer directement sur la rouille','Protection en une couche','Rapide et flexible'],
      es: ['Aplica directamente sobre el óxido','Protección en una sola capa','Rápido y flexible'],
      it: ['Applica direttamente sulla ruggine','Protezione in una sola mano','Veloce e flessibile'],
      tr: ['Doğrudan pasın üzerine uygulayın','Tek katta koruma','Hızlı ve esnek'] }],
    ['#mission .mm span', {
      nl: ['Breng het direct aan op geroeste oppervlakken — geen stralen, geen dure voorbehandeling. AgriGuard hecht aan de roest en kapselt hem in.','Eén duurzame laag sluit vocht en zuurstof buiten — minder verf, minder werk, meer dekking per liter.','Snel drogend en eenvoudig aan te brengen met kwast, roller of spuit — materieel weer snel aan het werk, zonder onnodige stilstand.'],
      pl: ['Nakładaj bezpośrednio na zardzewiałe powierzchnie — bez piaskowania, bez drogiego przygotowania. AgriGuard wiąże się z rdzą i ją kapsułkuje.','Jedna trwała warstwa odcina wilgoć i tlen — mniej farby, mniej pracy, większe krycie na litr.','Szybkoschnący i łatwy w aplikacji pędzlem, wałkiem lub natryskiem — sprzęt szybko wraca do pracy, bez zbędnych przestojów.'],
      ro: ['Aplicați-l direct pe suprafețele ruginite — fără sablare, fără pregătire costisitoare. AgriGuard aderă la rugină și o încapsulează.','Un singur strat durabil izolează umiditatea și oxigenul — mai puțină vopsea, mai puțină muncă, acoperire mai mare la litru.','Se usucă rapid și se aplică ușor cu pensula, rola sau pulverizatorul — echipamentele revin rapid la lucru, fără opriri inutile.'],
      de: ['Tragen Sie es direkt auf verrostete Oberflächen auf — kein Strahlen, keine teure Vorbehandlung. AgriGuard haftet am Rost und kapselt ihn ein.','Eine dauerhafte Schicht hält Feuchtigkeit und Sauerstoff fern — weniger Farbe, weniger Arbeit, mehr Deckung pro Liter.','Schnelltrocknend und einfach mit Pinsel, Rolle oder Spritze aufzutragen — Geräte sind schnell wieder im Einsatz, ohne unnötige Stillstandzeiten.'],
      fr: ['Appliquez-le directement sur les surfaces rouillées — sans sablage, sans préparation coûteuse. AgriGuard adhère à la rouille et l\'encapsule.','Une seule couche durable bloque l\'humidité et l\'oxygène — moins de peinture, moins de travail, plus de couvrance par litre.','Séchage rapide et application facile au pinceau, au rouleau ou au pistolet — le matériel reprend vite le travail, sans temps d\'arrêt inutile.'],
      es: ['Aplícalo directamente sobre superficies oxidadas — sin chorreado, sin preparación costosa. AgriGuard se adhiere al óxido y lo encapsula.','Una sola capa duradera bloquea la humedad y el oxígeno — menos pintura, menos trabajo, más cobertura por litro.','De secado rápido y fácil de aplicar con brocha, rodillo o pistola — el equipo vuelve pronto al trabajo, sin tiempos muertos innecesarios.'],
      it: ['Applicalo direttamente sulle superfici arrugginite — senza sabbiatura, senza costose preparazioni. AgriGuard aderisce alla ruggine e la incapsula.','Una sola mano duratura blocca umidità e ossigeno — meno vernice, meno lavoro, maggiore copertura per litro.','Asciuga in fretta e si applica facilmente a pennello, rullo o spruzzo — le attrezzature tornano presto al lavoro, senza fermi inutili.'],
      tr: ['Doğrudan paslı yüzeylere uygulayın — kumlama yok, pahalı hazırlık yok. AgriGuard pasa yapışır ve onu kapsüller.','Tek dayanıklı kat nemi ve oksijeni dışarıda tutar — daha az boya, daha az işçilik, litre başına daha fazla kapatma.','Hızlı kuruyan ve fırça, rulo veya püskürtmeyle kolay uygulanan — ekipman gereksiz duruş olmadan hızla işe döner.'] }],

    ['#products .eyebrow', { nl: 'Producten', pl: 'Produkty', ro: 'Produse', de: 'Produkte', fr: 'Produits', es: 'Productos', it: 'Prodotti', tr: 'Ürünler' }],
    ['#products h2', {
      nl: 'Eén coater, <span class="acc">gemaakt om te blijven</span>',
      pl: 'Jedna powłoka, <span class="acc">stworzona, by trwać</span>',
      ro: 'Un singur strat, <span class="acc">creat să dureze</span>',
      de: 'Eine Beschichtung, <span class="acc">gemacht, um zu bleiben</span>',
      fr: 'Un seul revêtement, <span class="acc">fait pour durer</span>',
      es: 'Un solo recubrimiento, <span class="acc">hecho para durar</span>',
      it: 'Un solo rivestimento, <span class="acc">fatto per durare</span>',
      tr: 'Tek kaplama, <span class="acc">kalıcı olmak için yapıldı</span>' }],
    ['#products .lead', {
      nl: 'AgriGuard is een roest-inkapselende coating, onderbouwd door tientallen jaren coatingsonderzoek — ontwikkeld om over roest te gaan en daar te blijven.',
      pl: 'AgriGuard to powłoka kapsułkująca rdzę, oparta na dziesięcioleciach badań nad powłokami — stworzona, by nakładać się na rdzę i tam pozostać.',
      ro: 'AgriGuard este un strat care încapsulează rugina, susținut de zeci de ani de cercetare în vopsele — creat să acopere rugina și să rămână acolo.',
      de: 'AgriGuard ist eine rostkapselnde Beschichtung, gestützt auf jahrzehntelange Beschichtungsforschung — entwickelt, um über Rost zu gehen und dort zu bleiben.',
      fr: 'AgriGuard est un revêtement encapsulant la rouille, fort de décennies de recherche en revêtements — conçu pour recouvrir la rouille et y rester.',
      es: 'AgriGuard es un recubrimiento que encapsula el óxido, respaldado por décadas de investigación en recubrimientos — diseñado para cubrir el óxido y quedarse ahí.',
      it: 'AgriGuard è un rivestimento che incapsula la ruggine, frutto di decenni di ricerca sui rivestimenti — progettato per coprire la ruggine e restare al suo posto.',
      tr: 'AgriGuard, onlarca yıllık kaplama araştırmasıyla desteklenen, pası kapsülleyen bir kaplamadır — pasın üzerine gidip orada kalmak için tasarlandı.' }],
    ['#products .feat .prod-tag', {
      nl: ['Roestcoater','Kleuren','Dekking','Erfgoed'],
      pl: ['Powłoka na rdzę','Kolory','Krycie','Dziedzictwo'],
      ro: ['Strat pe rugină','Culori','Acoperire','Moștenire'],
      de: ['Rost-Coater','Farben','Deckung','Erbe'],
      fr: ['Anti-rouille','Couleurs','Couvrance','Héritage'],
      es: ['Anti-óxido','Colores','Cobertura','Legado'],
      it: ['Anti-ruggine','Colori','Copertura','Heritage'],
      tr: ['Pas kaplaması','Renkler','Kapatma','Miras'] }],
    ['#products .feat span:last-child', {
      nl: ['Een roest-inkapselende coating die direct hecht aan gecorrodeerd staal en het afsluit tegen verdere aantasting.','Verkrijgbaar in duurzame aluminium- en zwarte afwerkingen die opgaan in materieel, constructies en trailers.','Hoogbouwende eenlaagsformule die verder reikt — meer oppervlak met minder liters en minder werk.','Onderbouwd door tientallen jaren industriële coatingsexpertise van Baril, afgestemd op Noord-Amerikaanse omstandigheden.'],
      pl: ['Powłoka kapsułkująca rdzę, która wiąże się bezpośrednio ze skorodowaną stalą i odcina ją od dalszych uszkodzeń.','Dostępna w trwałych wykończeniach aluminiowym i czarnym, które wtapiają się w sprzęt, konstrukcje i przyczepy.','Wysokowydajna jednowarstwowa formuła, która starcza na dłużej — większe pokrycie przy mniejszej liczbie litrów i mniejszym nakładzie pracy.','Oparta na dziesięcioleciach przemysłowej wiedzy Baril o powłokach, dopasowana do warunków północnoamerykańskich.'],
      ro: ['Un strat care încapsulează rugina, aderă direct la oțelul corodat și îl izolează împotriva deteriorărilor ulterioare.','Disponibil în finisaje durabile aluminiu și negru, care se integrează pe echipamente, structuri și remorci.','Formulă într-un singur strat, cu putere mare de acoperire — mai mult suprafață cu mai puțini litri și mai puțină muncă.','Susținut de zeci de ani de expertiză Baril în vopsele industriale, adaptat condițiilor nord-americane.'],
      de: ['Eine rostkapselnde Beschichtung, die direkt auf korrodiertem Stahl haftet und ihn gegen weiteren Angriff abschließt.','Erhältlich in robusten Aluminium- und Schwarztönen, die sich auf Geräten, Konstruktionen und Anhängern einfügen.','Hochbauende Einschicht-Formel, die weiter reicht — mehr Fläche mit weniger Litern und weniger Arbeit.','Gestützt auf jahrzehntelange industrielle Beschichtungsexpertise von Baril, abgestimmt auf nordamerikanische Bedingungen.'],
      fr: ['Un revêtement encapsulant la rouille qui adhère directement à l\'acier corrodé et le scelle contre toute attaque ultérieure.','Disponible en finitions aluminium et noir durables qui se fondent sur le matériel, les structures et les remorques.','Formule monocouche à fort pouvoir garnissant qui s\'étend davantage — plus de surface avec moins de litres et moins de travail.','Forte de décennies d\'expertise Baril en revêtements industriels, adaptée aux conditions nord-américaines.'],
      es: ['Un recubrimiento que encapsula el óxido y se adhiere directamente al acero corroído, sellándolo contra nuevos ataques.','Disponible en acabados duraderos de aluminio y negro que se integran en equipos, estructuras y remolques.','Fórmula monocapa de alto espesor que rinde más — más superficie con menos litros y menos trabajo.','Respaldado por décadas de experiencia de Baril en recubrimientos industriales, ajustado a las condiciones norteamericanas.'],
      it: ['Un rivestimento che incapsula la ruggine, aderisce direttamente all\'acciaio corroso e lo sigilla contro ulteriori attacchi.','Disponibile in finiture durevoli alluminio e nero che si integrano su attrezzature, strutture e rimorchi.','Formula monostrato ad alto spessore che rende di più — più superficie con meno litri e meno lavoro.','Frutto di decenni di esperienza Baril nei rivestimenti industriali, calibrato sulle condizioni nordamericane.'],
      tr: ['Korozyona uğramış çeliğe doğrudan yapışan ve onu daha fazla aşınmaya karşı kapatan, pası kapsülleyen bir kaplama.','Ekipman, yapı ve römorklara uyum sağlayan dayanıklı alüminyum ve siyah son katlarda mevcut.','Daha ileri giden yüksek dolgulu tek kat formülü — daha az litreyle ve daha az işçilikle daha fazla yüzey.','Baril\'in onlarca yıllık endüstriyel kaplama uzmanlığıyla desteklenir ve Kuzey Amerika koşullarına göre ayarlanmıştır.'] }],

    ['#performance .eyebrow', { nl: 'Prestaties', pl: 'Wydajność', ro: 'Performanță', de: 'Leistung', fr: 'Performance', es: 'Rendimiento', it: 'Prestazioni', tr: 'Performans' }],
    ['#performance h2', {
      nl: 'Ontwikkeld om <span class="acc">corrosie te verslaan</span>',
      pl: 'Stworzony, by <span class="acc">pokonać korozję</span>',
      ro: 'Creat să <span class="acc">învingă coroziunea</span>',
      de: 'Entwickelt, um <span class="acc">Korrosion zu besiegen</span>',
      fr: 'Conçu pour <span class="acc">vaincre la corrosion</span>',
      es: 'Diseñado para <span class="acc">vencer la corrosión</span>',
      it: 'Progettato per <span class="acc">battere la corrosione</span>',
      tr: '<span class="acc">Korozyonu yenmek</span> için tasarlandı' }],
    ['#performance .lead', {
      nl: 'AgriGuard stopt roest waar hij zit — kapselt corrosie in en sluit oppervlakken af tegen vocht, zuurstof en de elementen.',
      pl: 'AgriGuard zatrzymuje rdzę tam, gdzie się znajduje — kapsułkuje korozję i odcina powierzchnie od wilgoci, tlenu i żywiołów.',
      ro: 'AgriGuard oprește rugina acolo unde se află — încapsulează coroziunea și izolează suprafețele de umiditate, oxigen și intemperii.',
      de: 'AgriGuard stoppt Rost dort, wo er ist — kapselt Korrosion ein und schließt Oberflächen gegen Feuchtigkeit, Sauerstoff und Witterung ab.',
      fr: 'AgriGuard stoppe la rouille là où elle se trouve — encapsule la corrosion et isole les surfaces de l\'humidité, de l\'oxygène et des intempéries.',
      es: 'AgriGuard detiene el óxido donde está — encapsula la corrosión y aísla las superficies de la humedad, el oxígeno y las inclemencias.',
      it: 'AgriGuard ferma la ruggine dove si trova — incapsula la corrosione e isola le superfici da umidità, ossigeno e intemperie.',
      tr: 'AgriGuard pası olduğu yerde durdurur — korozyonu kapsüller ve yüzeyleri neme, oksijene ve hava koşullarına karşı yalıtır.' }],
    ['#performance .pills span', {
      nl: ['Kapselt roest in','Geen stralen','Kwast / Roller / Spuit','Snel drogend'],
      pl: ['Kapsułkuje rdzę','Bez piaskowania','Pędzel / Wałek / Natrysk','Szybkoschnący'],
      ro: ['Încapsulează rugina','Fără sablare','Pensulă / Rolă / Pulverizare','Uscare rapidă'],
      de: ['Kapselt Rost ein','Kein Strahlen','Pinsel / Rolle / Spritzen','Schnelltrocknend'],
      fr: ['Encapsule la rouille','Sans sablage','Pinceau / Rouleau / Pistolet','Séchage rapide'],
      es: ['Encapsula el óxido','Sin chorreado','Brocha / Rodillo / Pistola','Secado rápido'],
      it: ['Incapsula la ruggine','Senza sabbiatura','Pennello / Rullo / Spruzzo','Asciugatura rapida'],
      tr: ['Pası kapsüller','Kumlama yok','Fırça / Rulo / Püskürtme','Hızlı kuruma'] }],
    ['#performance .feat b', {
      nl: ['Kapselt roest in','Geen stralen','Snel drogend','Chemische bestendigheid','Kwast, roller of spuit','Duurzaam op lange termijn'],
      pl: ['Kapsułkuje rdzę','Bez piaskowania','Szybkoschnący','Odporność chemiczna','Pędzel, wałek lub natrysk','Trwałość na lata'],
      ro: ['Încapsulează rugina','Fără sablare','Uscare rapidă','Rezistență chimică','Pensulă, rolă sau pulverizare','Durabilitate pe termen lung'],
      de: ['Kapselt Rost ein','Kein Strahlen','Schnelltrocknend','Chemikalienbeständigkeit','Pinsel, Rolle oder Spritze','Langfristig haltbar'],
      fr: ['Encapsule la rouille','Sans sablage','Séchage rapide','Résistance chimique','Pinceau, rouleau ou pistolet','Durabilité à long terme'],
      es: ['Encapsula el óxido','Sin chorreado','Secado rápido','Resistencia química','Brocha, rodillo o pistola','Durabilidad a largo plazo'],
      it: ['Incapsula la ruggine','Senza sabbiatura','Asciugatura rapida','Resistenza chimica','Pennello, rullo o spruzzo','Durabilità a lungo termine'],
      tr: ['Pası kapsüller','Kumlama yok','Hızlı kuruma','Kimyasal direnç','Fırça, rulo veya püskürtme','Uzun ömürlü dayanıklılık'] }],
    ['#performance .feat span', {
      nl: ['Hecht aan en sluit bestaande roest af, en houdt het vocht en de zuurstof buiten die corrosie laten doorwoekeren.','Sla de dure voorbehandeling over — breng direct aan op geroeste oppervlakken en bespaar tijd, werk en geld.','Droogt snel, zodat materieel sneller weer aan het werk gaat met minder stilstand tussen lagen.','Bestand tegen de meststoffen, brandstoffen en agressieve chemicaliën die landbouw- en wagenparkmaterieel zwaar belasten.','Breng het aan zoals de klus vraagt — flexibele applicatie voor in het veld, de werkplaats of de lijn.','Een taaie, weerbestendige film die seizoen na seizoen blijft beschermen bij zwaar buitengebruik.'],
      pl: ['Wiąże się z istniejącą rdzą i ją odcina, blokując wilgoć i tlen, które podtrzymują rozprzestrzenianie się korozji.','Pomiń kosztowne przygotowanie — nakładaj wprost na zardzewiałe powierzchnie i oszczędzaj czas, pracę i pieniądze.','Szybko schnie, więc sprzęt szybciej wraca do pracy, z mniejszymi przerwami między warstwami.','Odporny na nawozy, paliwa i agresywne chemikalia, które niszczą sprzęt rolniczy i flotowy.','Nakładaj tak, jak wymaga tego zadanie — elastyczna aplikacja w terenie, w warsztacie lub na linii.','Twarda, odporna na warunki atmosferyczne powłoka, która chroni sezon po sezonie przy intensywnym użytkowaniu na zewnątrz.'],
      ro: ['Aderă la rugina existentă și o izolează, blocând umiditatea și oxigenul care întrețin extinderea coroziunii.','Săriți peste pregătirea costisitoare — aplicați direct pe suprafețele ruginite și economisiți timp, muncă și bani.','Se usucă rapid, astfel încât echipamentele revin mai repede la lucru, cu mai puține opriri între straturi.','Rezistă la îngrășămintele, combustibilii și substanțele chimice agresive care solicită echipamentele agricole și de parc auto.','Aplicați-l așa cum cere lucrarea — aplicare flexibilă pe teren, în atelier sau pe linie.','O peliculă dură, rezistentă la intemperii, care continuă să protejeze sezon după sezon, în utilizare intensă în aer liber.'],
      de: ['Haftet an vorhandenem Rost und schließt ihn ab, hält Feuchtigkeit und Sauerstoff fern, die Korrosion weitertreiben.','Sparen Sie sich die teure Vorbehandlung — tragen Sie direkt auf verrostete Oberflächen auf und sparen Sie Zeit, Arbeit und Geld.','Trocknet schnell, sodass Geräte schneller wieder im Einsatz sind, mit weniger Stillstand zwischen den Schichten.','Beständig gegen die Düngemittel, Kraftstoffe und aggressiven Chemikalien, die Landwirtschafts- und Fuhrparkgeräte stark beanspruchen.','Tragen Sie es so auf, wie es die Aufgabe verlangt — flexible Applikation im Feld, in der Werkstatt oder an der Linie.','Ein zäher, witterungsbeständiger Film, der Saison für Saison bei hartem Außeneinsatz weiter schützt.'],
      fr: ['Adhère à la rouille existante et la scelle, bloquant l\'humidité et l\'oxygène qui entretiennent la propagation de la corrosion.','Évitez la préparation coûteuse — appliquez directement sur les surfaces rouillées et gagnez du temps, du travail et de l\'argent.','Séchage rapide pour que le matériel reprenne le travail plus vite, avec moins d\'arrêts entre les couches.','Résiste aux engrais, carburants et produits chimiques agressifs qui malmènent le matériel agricole et de flotte.','Appliquez-le selon les besoins du chantier — application flexible au champ, à l\'atelier ou sur la ligne.','Un film résistant et tenace face aux intempéries, qui protège saison après saison en usage extérieur intensif.'],
      es: ['Se adhiere al óxido existente y lo sella, bloqueando la humedad y el oxígeno que mantienen la propagación de la corrosión.','Sáltate la costosa preparación — aplica directamente sobre superficies oxidadas y ahorra tiempo, trabajo y dinero.','Seca rápido, para que el equipo vuelva antes al trabajo con menos paradas entre capas.','Resiste los fertilizantes, combustibles y productos químicos agresivos que castigan los equipos agrícolas y de flota.','Aplícalo según lo exija el trabajo — aplicación flexible en el campo, el taller o la línea.','Una película dura y resistente a la intemperie que sigue protegiendo temporada tras temporada en uso exterior intensivo.'],
      it: ['Aderisce alla ruggine esistente e la sigilla, bloccando umidità e ossigeno che alimentano la diffusione della corrosione.','Salta la costosa preparazione — applica direttamente sulle superfici arrugginite e risparmia tempo, lavoro e denaro.','Asciuga in fretta, così le attrezzature tornano prima al lavoro, con meno fermi tra le mani.','Resiste a fertilizzanti, carburanti e prodotti chimici aggressivi che mettono a dura prova mezzi agricoli e di flotta.','Applicalo come richiede il lavoro — applicazione flessibile sul campo, in officina o sulla linea.','Una pellicola tenace e resistente alle intemperie che continua a proteggere stagione dopo stagione, nell\'uso esterno intensivo.'],
      tr: ['Mevcut pasa yapışır ve onu kapatır; korozyonun yayılmasını sürdüren nemi ve oksijeni dışarıda tutar.','Pahalı hazırlığı atlayın — doğrudan paslı yüzeylere uygulayın ve zaman, işçilik ve para tasarrufu sağlayın.','Hızlı kurur, böylece ekipman katlar arasında daha az duruşla işe daha çabuk döner.','Tarım ve filo ekipmanlarını zorlayan gübrelere, yakıtlara ve agresif kimyasallara karşı dayanıklıdır.','İşin gerektirdiği şekilde uygulayın — sahada, atölyede veya hatta esnek uygulama.','Yoğun dış mekan kullanımında sezon sezon korumaya devam eden sağlam, hava koşullarına dayanıklı bir film.'] }],

    ['#apply .eyebrow', { nl: 'Toepassingen', pl: 'Zastosowania', ro: 'Aplicații', de: 'Anwendungen', fr: 'Applications', es: 'Aplicaciones', it: 'Applicazioni', tr: 'Uygulamalar' }],
    ['#apply h2', {
      nl: 'Bescherming voor<br><span class="acc">materieel dat hard werkt</span>',
      pl: 'Ochrona dla<br><span class="acc">sprzętu, który ciężko pracuje</span>',
      ro: 'Protecție pentru<br><span class="acc">echipamente care muncesc din greu</span>',
      de: 'Schutz für<br><span class="acc">Geräte, die hart arbeiten</span>',
      fr: 'Une protection pour<br><span class="acc">le matériel qui travaille dur</span>',
      es: 'Protección para<br><span class="acc">equipos que trabajan duro</span>',
      it: 'Protezione per<br><span class="acc">attrezzature che lavorano duro</span>',
      tr: '<span class="acc">Çok çalışan ekipmanlar</span><br>için koruma' }],
    ['#apply .lead', {
      nl: 'Waar staal weer, chemicaliën en slijtage tegenkomt, houdt AgriGuard roest de baas — in het veld, op de weg en op de bouwplaats.',
      pl: 'Wszędzie tam, gdzie stal styka się z pogodą, chemikaliami i zużyciem, AgriGuard nie pozwala rdzy przejąć kontroli — w terenie, na drodze i na budowie.',
      ro: 'Oriunde oțelul întâlnește vremea, substanțele chimice și uzura, AgriGuard nu lasă rugina să preia controlul — pe teren, pe drum și pe șantier.',
      de: 'Wo Stahl auf Witterung, Chemikalien und Verschleiß trifft, lässt AgriGuard Rost nicht die Oberhand gewinnen — im Feld, auf der Straße und auf der Baustelle.',
      fr: 'Partout où l\'acier affronte les intempéries, les produits chimiques et l\'usure, AgriGuard empêche la rouille de prendre le dessus — au champ, sur la route et sur le chantier.',
      es: 'Allá donde el acero se enfrenta al clima, los productos químicos y el desgaste, AgriGuard impide que el óxido tome el control — en el campo, en la carretera y en la obra.',
      it: 'Ovunque l\'acciaio affronti intemperie, sostanze chimiche e usura, AgriGuard impedisce alla ruggine di prendere il sopravvento — sul campo, su strada e in cantiere.',
      tr: 'Çeliğin hava koşulları, kimyasallar ve aşınmayla buluştuğu her yerde AgriGuard pasın kontrolü ele geçirmesine izin vermez — tarlada, yolda ve şantiyede.' }],
    ['#apply .sheet-row b', {
      nl: ['Landbouwmaterieel','Bouw &amp; grondverzet','Vrachtwagens &amp; trailers','Constructies &amp; staal','Verhuur- &amp; veilingvloten','Professionele schilders'],
      pl: ['Sprzęt rolniczy','Budownictwo i roboty ziemne','Ciężarówki i przyczepy','Konstrukcje i stal','Flot wynajmu i aukcji','Malarze profesjonalni'],
      ro: ['Echipamente agricole','Construcții și terasamente','Camioane și remorci','Structuri și oțel','Flote de închiriere și licitație','Zugravi profesioniști'],
      de: ['Landwirtschaftsgeräte','Bau &amp; Erdbewegung','Lkw &amp; Anhänger','Konstruktionen &amp; Stahl','Miet- &amp; Auktionsflotten','Profi-Lackierer'],
      fr: ['Matériel agricole','Construction et terrassement','Camions et remorques','Structures et acier','Flottes de location et d\'enchères','Peintres professionnels'],
      es: ['Equipo agrícola','Construcción y movimiento de tierras','Camiones y remolques','Estructuras y acero','Flotas de alquiler y subasta','Pintores profesionales'],
      it: ['Attrezzature agricole','Edilizia e movimento terra','Camion e rimorchi','Strutture e acciaio','Flotte di noleggio e asta','Verniciatori professionali'],
      tr: ['Tarım ekipmanları','İnşaat &amp; hafriyat','Kamyon &amp; römork','Yapılar &amp; çelik','Kiralama &amp; mezat filoları','Profesyonel boyacılar'] }],
    ['#apply .sheet-row span', {
      nl: ['Tractoren, werktuigen, silo\'s en machines die blootstaan aan weer en meststoffen.','Graafmachines, laders en zwaar materieel dat het zwaar te verduren krijgt op de bouwplaats.','Chassis, laadbakken en onderstellen die strijd leveren met strooizout, vocht en corrosie.','Hekwerk, poorten, leuningen en constructiestaal dat het hele jaar blootstaat aan de elementen.','Verfris en bescherm verouderend materieel om levensduur en restwaarde te verlengen.','Een betrouwbare roestcoater voor professionals die minder lagen en snellere doorlooptijden willen.'],
      pl: ['Ciągniki, maszyny, silosy i sprzęt narażone na pogodę i nawozy.','Koparki, ładowarki i ciężki sprzęt, który dostaje w kość na budowie.','Ramy, skrzynie ładunkowe i podwozia walczące z solą drogową, wilgocią i korozją.','Ogrodzenia, bramy, balustrady i stal konstrukcyjna wystawione na żywioły przez cały rok.','Odśwież i zabezpiecz starzejący się sprzęt, by wydłużyć żywotność i wartość odsprzedaży.','Niezawodna powłoka antykorozyjna dla profesjonalistów, którzy potrzebują mniej warstw i szybszej pracy.'],
      ro: ['Tractoare, utilaje, silozuri și mașini expuse la vreme și îngrășăminte.','Excavatoare, încărcătoare și echipamente grele care îndură multe pe șantier.','Șasiuri, benzi și trenuri de rulare care luptă cu sarea de drum, umiditatea și coroziunea.','Garduri, porți, balustrade și oțel structural expuse la intemperii tot anul.','Reîmprospătați și protejați echipamentele învechite pentru a prelungi durata de viață și valoarea de revânzare.','Un strat anticoroziv de încredere pentru profesioniștii care vor mai puține straturi și termene mai scurte.'],
      de: ['Traktoren, Anbaugeräte, Silos und Maschinen, die Witterung und Düngemitteln ausgesetzt sind.','Bagger, Lader und schwere Geräte, die auf der Baustelle hart rangenommen werden.','Rahmen, Ladeflächen und Unterböden, die gegen Streusalz, Feuchtigkeit und Korrosion ankämpfen.','Zäune, Tore, Geländer und Baustahl, die das ganze Jahr der Witterung ausgesetzt sind.','Frischen Sie alternde Geräte auf und schützen Sie sie, um Lebensdauer und Wiederverkaufswert zu erhöhen.','Ein zuverlässiger Rost-Coater für Profis, die weniger Schichten und schnellere Durchlaufzeiten brauchen.'],
      fr: ['Tracteurs, outils, silos et machines exposés aux intempéries et aux engrais.','Pelles, chargeuses et engins lourds qui en voient de toutes les couleurs sur le chantier.','Châssis, bennes et trains roulants qui luttent contre le sel de déneigement, l\'humidité et la corrosion.','Clôtures, portails, garde-corps et acier de structure exposés aux intempéries toute l\'année.','Rénovez et protégez le matériel vieillissant pour prolonger sa durée de vie et sa valeur de revente.','Un anti-rouille fiable pour les pros qui veulent moins de couches et des délais plus courts.'],
      es: ['Tractores, aperos, silos y máquinas expuestos al clima y los fertilizantes.','Excavadoras, cargadoras y equipo pesado que se lleva una paliza en la obra.','Chasis, cajas y bajos que luchan contra la sal de carretera, la humedad y la corrosión.','Vallas, portones, barandillas y acero estructural expuestos a la intemperie todo el año.','Renueva y protege equipos envejecidos para alargar su vida útil y su valor de reventa.','Un anti-óxido fiable para profesionales que quieren menos capas y plazos más rápidos.'],
      it: ['Trattori, attrezzi, sili e macchine esposti a intemperie e fertilizzanti.','Escavatori, pale e mezzi pesanti che ne vedono di tutti i colori in cantiere.','Telai, cassoni e sottoscocche che combattono contro sale stradale, umidità e corrosione.','Recinzioni, cancelli, ringhiere e acciaio strutturale esposti alle intemperie tutto l\'anno.','Rinnova e proteggi le attrezzature datate per prolungarne vita utile e valore di rivendita.','Un anti-ruggine affidabile per i professionisti che vogliono meno mani e tempi più rapidi.'],
      tr: ['Hava koşullarına ve gübrelere maruz kalan traktörler, ekipmanlar, silolar ve makineler.','Şantiyede zorlu koşullara dayanan ekskavatörler, yükleyiciler ve ağır ekipmanlar.','Yol tuzu, nem ve korozyonla mücadele eden şasiler, kasalar ve alt takımlar.','Yıl boyu hava koşullarına maruz kalan çitler, kapılar, korkuluklar ve yapısal çelik.','Hizmet ömrünü ve ikinci el değerini uzatmak için yaşlanan ekipmanı yenileyin ve koruyun.','Daha az kat ve daha hızlı teslim isteyen profesyoneller için güvenilir bir pas kaplaması.'] }],

    ['#contact .eyebrow', { nl: 'Aan de slag', pl: 'Zacznij', ro: 'Începe', de: 'Loslegen', fr: 'Commencer', es: 'Empezar', it: 'Inizia', tr: 'Başlayın' }],
    ['#contact h2', {
      nl: 'Stop roest op uw materieel',
      pl: 'Zatrzymaj rdzę na swoim sprzęcie',
      ro: 'Opriți rugina pe echipamentele dvs.',
      de: 'Stoppen Sie Rost an Ihren Geräten',
      fr: 'Stoppez la rouille sur votre matériel',
      es: 'Detén el óxido en tu equipo',
      it: 'Ferma la ruggine sulle tue attrezzature',
      tr: 'Ekipmanınızdaki pası durdurun' }],
    ['#contact p', {
      nl: 'Ontdek hoe AgriGuard over roest gaat en blijft beschermen — overleg met onze coatingspecialisten over uw materieel, uw wagenpark of uw volgende klus.',
      pl: 'Odkryj, jak AgriGuard nakłada się na rdzę i nadal chroni — porozmawiaj z naszymi specjalistami o swoim sprzęcie, flocie lub kolejnym zadaniu.',
      ro: 'Descoperiți cum AgriGuard acoperă rugina și continuă să protejeze — discutați cu specialiștii noștri despre echipamentele, parcul auto sau următoarea dvs. lucrare.',
      de: 'Entdecken Sie, wie AgriGuard über Rost geht und weiter schützt — sprechen Sie mit unseren Beschichtungsexperten über Ihre Geräte, Ihren Fuhrpark oder Ihren nächsten Auftrag.',
      fr: 'Découvrez comment AgriGuard recouvre la rouille et continue de protéger — échangez avec nos experts en revêtements sur votre matériel, votre flotte ou votre prochain chantier.',
      es: 'Descubre cómo AgriGuard cubre el óxido y sigue protegiendo — habla con nuestros especialistas en recubrimientos sobre tu equipo, tu flota o tu próximo trabajo.',
      it: 'Scopri come AgriGuard copre la ruggine e continua a proteggere — parla con i nostri specialisti dei rivestimenti delle tue attrezzature, della tua flotta o del tuo prossimo lavoro.',
      tr: 'AgriGuard\'ın pasın üzerine nasıl gidip korumaya devam ettiğini keşfedin — ekipmanınız, filonuz veya bir sonraki işiniz hakkında kaplama uzmanlarımıza danışın.' }],
    ['#contact .hero-cta .btn-solid', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri', de: 'Kontakt &amp; Standorte', fr: 'Contact et sites', es: 'Contacto y sedes', it: 'Contatto e sedi', tr: 'İletişim &amp; lokasyonlar' }],
    ['#contact .hero-cta .btn-ghost', { nl: 'Ontdek Baril Group', pl: 'Poznaj Baril Group', ro: 'Descoperă Baril Group', de: 'Baril Group entdecken', fr: 'Découvrir le groupe Baril', es: 'Descubrir Baril Group', it: 'Scopri Baril Group', tr: 'Baril Group\'u keşfedin' }],

    ['.foot-claim', {
      nl: 'Roestwerende coatings die roest in zijn spoor stoppen.',
      pl: 'Powłoki antykorozyjne, które zatrzymują rdzę w miejscu.',
      ro: 'Vopsele anticorozive care opresc rugina pe loc.',
      de: 'Rostschutz-Beschichtungen, die Rost auf der Stelle stoppen.',
      fr: 'Des revêtements antirouille qui stoppent la rouille net.',
      es: 'Recubrimientos antioxidantes que detienen el óxido en seco.',
      it: 'Rivestimenti antiruggine che fermano la ruggine sul nascere.',
      tr: 'Pası olduğu yerde durduran pas önleyici kaplamalar.' }],
    ['footer .foot-grid div:nth-child(2) a', {
      nl: ['AgriGuard Rust Coater','Aluminium &amp; Zwart','Prestaties','Toepassingen'],
      pl: ['AgriGuard Rust Coater','Aluminium i czerń','Wydajność','Zastosowania'],
      ro: ['AgriGuard Rust Coater','Aluminiu și negru','Performanță','Aplicații'],
      de: ['AgriGuard Rust Coater','Aluminium &amp; Schwarz','Leistung','Anwendungen'],
      fr: ['AgriGuard Rust Coater','Aluminium et noir','Performance','Applications'],
      es: ['AgriGuard Rust Coater','Aluminio y negro','Rendimiento','Aplicaciones'],
      it: ['AgriGuard Rust Coater','Alluminio e nero','Prestazioni','Applicazioni'],
      tr: ['AgriGuard Rust Coater','Alüminyum &amp; Siyah','Performans','Uygulamalar'] }],
    ['footer h3', {
      nl: ['Producten','Baril Group'],
      pl: ['Produkty','Baril Group'],
      ro: ['Produse','Baril Group'],
      de: ['Produkte','Baril Group'],
      fr: ['Produits','Baril Group'],
      es: ['Productos','Baril Group'],
      it: ['Prodotti','Baril Group'],
      tr: ['Ürünler','Baril Group'] }],
    ['.foot-bottom span', {"nl":["© AgriGuard · een merk van Baril Group · Angola, IN","Stop roest in zijn spoor."],"pl":["© AgriGuard · marka Baril Group · Angola, IN","Zatrzymaj rdzę w miejscu."],"ro":["© AgriGuard · o marcă Baril Group · Angola, IN","Oprește rugina pe loc."],"de":["© AgriGuard · eine Marke von Baril Group · Angola, IN","Stoppen Sie Rost auf der Stelle."],"fr":["© AgriGuard · une marque de Baril Group · Angola, IN","Stoppez la rouille net."],"es":["© AgriGuard · una marca de Baril Group · Angola, IN","Detén el óxido en seco."],"it":["© AgriGuard · un marchio di Baril Group · Angola, IN","Ferma la ruggine sul nascere."],"tr":["© AgriGuard · bir Baril Group markası · Angola, IN","Pası olduğu yerde durdurun."]}]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('agriguard-lang') || 'en'; } catch (e) {}
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
    try { localStorage.setItem('agriguard-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro', 'de', 'fr', 'es', 'it', 'tr'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
