/* Language switch for the Fortis one-pager. English is authored in the DOM;
   NL / PL / RO / DE / FR live in the MAP as [selector, {nl, pl, ro, de, fr}].
   PL/RO/DE/FR are machine translations — refine as needed. Product names
   (FortiMax, AquaFort, FortiCure, FortiDur) are kept untranslated. */
(() => {
  'use strict';
  const MAP = [
    ['.navlinks a', {
      nl: ['Waarom Fortis','Producten','Prestaties','Toepassingen','Contact'],
      pl: ['Dlaczego Fortis','Produkty','Wydajność','Zastosowania','Kontakt'],
      ro: ['De ce Fortis','Produse','Performanță','Aplicații','Contact'],
      de: ['Warum Fortis','Produkte','Leistung','Anwendungen','Kontakt'],
      fr: ['Pourquoi Fortis','Produits','Performance','Applications','Contact'] }],
    ['header .eyebrow', {
      nl: 'Fortis — Industriële metaalcoatings · Een merk van Baril Group',
      pl: 'Fortis — Przemysłowe powłoki do metalu · Marka Baril Group',
      ro: 'Fortis — Vopsele industriale pentru metal · O marcă Baril Group',
      de: 'Fortis — Industrielle Metallbeschichtungen · Eine Marke der Baril Group',
      fr: 'Fortis — Revêtements industriels pour métal · Une marque du groupe Baril' }],
    ['header h1', {
      nl: 'IJzersterke<br><span class="acc">bescherming</span><br>voor metaal',
      pl: 'Żelazna<br><span class="acc">ochrona</span><br>metalu',
      ro: 'Protecție<br><span class="acc">puternică</span><br>pentru metal',
      de: 'Eisenstarker<br><span class="acc">Schutz</span><br>für Metall',
      fr: 'Une protection<br><span class="acc">à toute épreuve</span><br>pour le métal' }],
    ['.hero-sub', {
      nl: 'Industriële primers en toplagen die <strong>maximale oppervlaktebescherming</strong> bieden onder alle atmosferische omstandigheden — gemaakt voor de metaalverwerkende industrie en snelle industriële verwerking.',
      pl: 'Przemysłowe podkłady i powłoki nawierzchniowe zapewniające <strong>maksymalną ochronę powierzchni</strong> w każdych warunkach atmosferycznych — stworzone dla przemysłu metalowego i szybkiej aplikacji przemysłowej.',
      ro: 'Grunduri și straturi de finisare industriale care oferă <strong>protecție maximă a suprafeței</strong> în orice condiții atmosferice — create pentru industria prelucrării metalelor și aplicare industrială rapidă.',
      de: 'Industrielle Grundierungen und Decklacke, die <strong>maximalen Oberflächenschutz</strong> unter allen atmosphärischen Bedingungen bieten — entwickelt für die metallverarbeitende Industrie und schnelle industrielle Verarbeitung.',
      fr: 'Primaires et couches de finition industriels offrant une <strong>protection maximale des surfaces</strong> dans toutes les conditions atmosphériques — conçus pour l\'industrie de transformation des métaux et une application industrielle rapide.' }],
    ['header .hero-cta .btn-solid', { nl: 'Bekijk de producten', pl: 'Zobacz produkty', ro: 'Vezi produsele', de: 'Produkte entdecken', fr: 'Découvrir les produits' }],
    ['header .hero-cta .btn-ghost', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri', de: 'Kontakt &amp; Standorte', fr: 'Contact et sites' }],
    ['.hero-foot span:first-child', {
      nl: 'Alkyd · Watergedragen · Epoxy · Polyurethaan',
      pl: 'Alkid · Wodorozcieńczalne · Epoksyd · Poliuretan',
      ro: 'Alchidic · Pe bază de apă · Epoxi · Poliuretan',
      de: 'Alkyd · Wasserbasiert · Epoxid · Polyurethan',
      fr: 'Alkyde · Hydrodiluable · Époxy · Polyuréthane' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează', de: 'Scrollen', fr: 'Défiler' }],

    ['#mission .eyebrow', { nl: 'Waarom Fortis', pl: 'Dlaczego Fortis', ro: 'De ce Fortis', de: 'Warum Fortis', fr: 'Pourquoi Fortis' }],
    ['.mission-quote', {
      nl: 'Metaal verdient bescherming die blijft. Fortis levert <em>ijzersterke</em> primers en toplagen — ontwikkeld voor maximale oppervlaktebescherming onder alle atmosferische omstandigheden, en klaar voor snelle industriële verwerking.',
      pl: 'Metal zasługuje na ochronę, która trwa. Fortis dostarcza <em>żelazne</em> podkłady i powłoki nawierzchniowe — opracowane dla maksymalnej ochrony powierzchni w każdych warunkach atmosferycznych i gotowe do szybkiej aplikacji przemysłowej.',
      ro: 'Metalul merită o protecție care durează. Fortis oferă grunduri și straturi de finisare <em>puternice</em> — dezvoltate pentru protecție maximă a suprafeței în orice condiții atmosferice și gata pentru aplicare industrială rapidă.',
      de: 'Metall verdient Schutz, der hält. Fortis liefert <em>eisenstarke</em> Grundierungen und Decklacke — entwickelt für maximalen Oberflächenschutz unter allen atmosphärischen Bedingungen und bereit für die schnelle industrielle Verarbeitung.',
      fr: 'Le métal mérite une protection qui dure. Fortis propose des primaires et des couches de finition <em>ultra-résistants</em> — conçus pour une protection maximale des surfaces dans toutes les conditions atmosphériques et prêts pour une application industrielle rapide.' }],
    ['#mission .mm b', {
      nl: ['Maximale bescherming','Gemaakt voor de lakstraat','Elke kleur, elke glansgraad'],
      pl: ['Maksymalna ochrona','Stworzony na linię','Każdy kolor, każdy połysk'],
      ro: ['Protecție maximă','Creat pentru linie','Orice culoare, orice luciu'],
      de: ['Maximaler Schutz','Für die Lackierstraße gemacht','Jede Farbe, jeder Glanzgrad'],
      fr: ['Protection maximale','Conçu pour la ligne','Toute couleur, tout brillant'] }],
    ['#mission .mm span', {
      nl: ['Industriële primers en toplagen die metaal maximale oppervlaktebescherming geven onder alle atmosferische omstandigheden.','Geschikt voor automatische lakstraten en conventionele spuittechnieken — perfect voor snelle elektrostatische nat-in-nat applicatie.','In te kleuren met de universele hoog geconcentreerde Baril kleurpasta\'s; alkyd- en PU-systemen in glansgraden 10, 30, 60 en full gloss.'],
      pl: ['Przemysłowe podkłady i powłoki nawierzchniowe zapewniające metalowi maksymalną ochronę powierzchni w każdych warunkach atmosferycznych.','Nadają się do automatycznych linii lakierniczych i konwencjonalnych technik natryskowych — idealne do szybkiej aplikacji elektrostatycznej mokro-na-mokro.','Barwione uniwersalnymi, wysoko skoncentrowanymi pastami Baril; systemy alkidowe i PU w połyskach 10, 30, 60 i full gloss.'],
      ro: ['Grunduri și straturi de finisare industriale care oferă metalului protecție maximă a suprafeței în orice condiții atmosferice.','Potrivite pentru linii automate de vopsire și tehnici convenționale de pulverizare — perfecte pentru aplicarea electrostatică rapidă ud-pe-ud.','Nuanțabile cu pastele de culoare universale, înalt concentrate, Baril; sisteme alchidice și PU în luciurile 10, 30, 60 și full gloss.'],
      de: ['Industrielle Grundierungen und Decklacke, die Metall maximalen Oberflächenschutz unter allen atmosphärischen Bedingungen bieten.','Geeignet für automatische Lackierstraßen und konventionelle Spritzverfahren — perfekt für die schnelle elektrostatische Nass-in-Nass-Applikation.','Einfärbbar mit den universellen, hochkonzentrierten Baril-Farbpasten; Alkyd- und PU-Systeme in den Glanzgraden 10, 30, 60 und Vollglanz.'],
      fr: ['Des primaires et couches de finition industriels qui offrent au métal une protection maximale des surfaces dans toutes les conditions atmosphériques.','Adaptés aux lignes de peinture automatiques et aux techniques de pulvérisation conventionnelles — parfaits pour l\'application électrostatique humide-sur-humide rapide.','Teintables avec les pâtes colorantes universelles hautement concentrées de Baril ; systèmes alkyde et PU en brillances 10, 30, 60 et brillant intégral.'] }],

    ['#products .eyebrow', { nl: 'Producten', pl: 'Produkty', ro: 'Produse', de: 'Produkte', fr: 'Produits' }],
    ['#products h2', {
      nl: 'Vier systemen, <span class="acc">één standaard</span>',
      pl: 'Cztery systemy, <span class="acc">jeden standard</span>',
      ro: 'Patru sisteme, <span class="acc">un standard</span>',
      de: 'Vier Systeme, <span class="acc">ein Standard</span>',
      fr: 'Quatre systèmes, <span class="acc">une référence</span>' }],
    ['#products .lead', {
      nl: 'Het Fortis-assortiment dekt elke stap van industriële metaalafwerking — primers en toplagen, solventgedragen en watergedragen, afgestemd op de eisen van de lakstraat.',
      pl: 'Asortyment Fortis obejmuje każdy etap przemysłowego wykańczania metalu — podkłady i powłoki nawierzchniowe, rozpuszczalnikowe i wodorozcieńczalne, dopasowane do wymagań linii.',
      ro: 'Gama Fortis acoperă fiecare etapă a finisării industriale a metalului — grunduri și straturi de finisare, pe bază de solvent și de apă, adaptate cerințelor liniei.',
      de: 'Das Fortis-Sortiment deckt jeden Schritt der industriellen Metallveredelung ab — Grundierungen und Decklacke, lösemittel- und wasserbasiert, abgestimmt auf die Anforderungen der Lackierstraße.',
      fr: 'La gamme Fortis couvre chaque étape de la finition industrielle du métal — primaires et couches de finition, à base de solvant et d\'eau, adaptés aux exigences de la ligne.' }],
    ['#products .feat .prod-tag', {
      nl: ['Alkyd · 1K','Watergedragen','Epoxy primer','Polyurethaan · 2K'],
      pl: ['Alkid · 1K','Wodorozcieńczalny','Podkład epoksydowy','Poliuretan · 2K'],
      ro: ['Alchidic · 1K','Pe bază de apă','Grund epoxidic','Poliuretan · 2K'],
      de: ['Alkyd · 1K','Wasserbasiert','Epoxid-Grundierung','Polyurethan · 2K'],
      fr: ['Alkyde · 1K','Hydrodiluable','Primaire époxy','Polyuréthane · 2K'] }],
    ['#products .feat span:last-child', {
      nl: ['Snelle, eencomponenten alkyd-toplagen voor efficiënte industriële afwerking van uiteenlopende objecten.','Watergedragen coatings met lage emissie voor duurzame industriële bescherming, zonder in te boeten op duurzaamheid.','Hechtsterke epoxy-primers die een duurzame basis leggen op ferro- en non-ferrometalen.','Tweecomponenten polyurethaan-toplagen voor maximale duurzaamheid, glansbehoud en chemische bestendigheid.'],
      pl: ['Szybkie, jednoskładnikowe powłoki alkidowe do wydajnego wykańczania przemysłowego szerokiej gamy obiektów.','Niskoemisyjne powłoki wodorozcieńczalne do zrównoważonej ochrony przemysłowej, bez kompromisów w trwałości.','Podkłady epoksydowe o wysokiej przyczepności, tworzące trwałą bazę na metalach żelaznych i nieżelaznych.','Dwuskładnikowe powłoki poliuretanowe dla maksymalnej trwałości, zachowania połysku i odporności chemicznej.'],
      ro: ['Straturi de finisare alchidice, monocomponente, rapide, pentru finisarea industrială eficientă a unei game largi de obiecte.','Vopsele pe bază de apă cu emisii reduse pentru protecție industrială durabilă, fără compromisuri privind durabilitatea.','Grunduri epoxidice cu aderență ridicată care creează o bază durabilă pe metale feroase și neferoase.','Straturi de finisare poliuretanice bicomponente pentru durabilitate maximă, păstrarea luciului și rezistență chimică.'],
      de: ['Schnelle, einkomponentige Alkyd-Decklacke für die effiziente industrielle Veredelung unterschiedlichster Objekte.','Emissionsarme wasserbasierte Beschichtungen für nachhaltigen industriellen Schutz, ohne Abstriche bei der Beständigkeit.','Haftstarke Epoxid-Grundierungen, die eine dauerhafte Basis auf Eisen- und Nichteisenmetallen schaffen.','Zweikomponentige Polyurethan-Decklacke für maximale Beständigkeit, Glanzerhalt und Chemikalienbeständigkeit.'],
      fr: ['Couches de finition alkyde monocomposantes et rapides pour une finition industrielle efficace d\'une large gamme d\'objets.','Revêtements hydrodiluables à faibles émissions pour une protection industrielle durable, sans compromis sur la résistance.','Primaires époxy à forte adhérence qui créent une base durable sur les métaux ferreux et non ferreux.','Couches de finition polyuréthane bicomposantes pour une durabilité, une tenue du brillant et une résistance chimique maximales.'] }],

    ['#performance .eyebrow', { nl: 'Prestaties', pl: 'Wydajność', ro: 'Performanță', de: 'Leistung', fr: 'Performance' }],
    ['#performance h2', {
      nl: 'Gemaakt voor <span class="acc">de lakstraat</span>',
      pl: 'Stworzony na <span class="acc">linię</span>',
      ro: 'Creat pentru <span class="acc">linie</span>',
      de: 'Gemacht für <span class="acc">die Lackierstraße</span>',
      fr: 'Conçu pour <span class="acc">la ligne</span>' }],
    ['#performance .lead', {
      nl: 'De industriële primers en toplagen van Fortis bieden maximale oppervlaktebescherming onder alle atmosferische omstandigheden — gebouwd om te draaien op moderne productielijnen.',
      pl: 'Przemysłowe podkłady i powłoki nawierzchniowe Fortis zapewniają maksymalną ochronę powierzchni w każdych warunkach atmosferycznych — zbudowane do pracy na nowoczesnych liniach produkcyjnych.',
      ro: 'Grundurile și straturile de finisare industriale Fortis oferă protecție maximă a suprafeței în orice condiții atmosferice — construite pentru a funcționa pe linii de producție moderne.',
      de: 'Die industriellen Grundierungen und Decklacke von Fortis bieten maximalen Oberflächenschutz unter allen atmosphärischen Bedingungen — gebaut für den Einsatz auf modernen Produktionslinien.',
      fr: 'Les primaires et couches de finition industriels de Fortis offrent une protection maximale des surfaces dans toutes les conditions atmosphériques — conçus pour fonctionner sur les lignes de production modernes.' }],
    ['#performance .pills span', {
      nl: ['Ferro &amp; non-ferro','Glans 10 / 30 / 60 / Full','Elektrostatisch','Nat-in-nat'],
      pl: ['Żelazne i nieżelazne','Połysk 10 / 30 / 60 / Full','Elektrostatyczny','Mokro-na-mokro'],
      ro: ['Feroase și neferoase','Luciu 10 / 30 / 60 / Full','Electrostatic','Ud-pe-ud'],
      de: ['Eisen &amp; Nichteisen','Glanz 10 / 30 / 60 / Voll','Elektrostatisch','Nass-in-Nass'],
      fr: ['Ferreux et non ferreux','Brillance 10 / 30 / 60 / Intégral','Électrostatique','Humide-sur-humide'] }],
    ['#performance .feat b', {
      nl: ['Atmosferische bestendigheid','Elektrostatisch nat-in-nat','Lakstraat &amp; conventioneel','Elke kleur','Glans op maat','Duurzaam ontworpen'],
      pl: ['Odporność atmosferyczna','Elektrostatyczny mokro-na-mokro','Linia i konwencjonalnie','Każdy kolor','Połysk na zamówienie','Trwały z założenia'],
      ro: ['Rezistență atmosferică','Electrostatic ud-pe-ud','Linie și convențional','Orice culoare','Luciu la cerere','Durabil prin design'],
      de: ['Witterungsbeständigkeit','Elektrostatisch nass-in-nass','Straße &amp; konventionell','Jede Farbe','Glanz nach Wunsch','Dauerhaft konzipiert'],
      fr: ['Résistance atmosphérique','Électrostatique humide-sur-humide','Ligne et conventionnel','Toute couleur','Brillance sur mesure','Durable par conception'] }],
    ['#performance .feat span', {
      nl: ['Maximale oppervlaktebescherming onder alle atmosferische omstandigheden, binnen en buiten.','Perfect geschikt voor snelle elektrostatische nat-in-nat applicatie voor een hoge doorvoer.','Gemaakt voor automatische lakstraten, en net zo goed thuis met conventionele spuittechnieken.','Spuit uw objecten in iedere gewenste kleur met de universele hoog geconcentreerde Baril kleurpasta\'s.','Alkyd- en polyurethaan laksystemen, verkrijgbaar in glans 10, 30, 60 en full gloss.','Primers en toplagen die metalen objecten duurzaam beschermen en hun footprint verkleinen.'],
      pl: ['Maksymalna ochrona powierzchni w każdych warunkach atmosferycznych, wewnątrz i na zewnątrz.','Idealnie nadaje się do szybkiej aplikacji elektrostatycznej mokro-na-mokro przy wysokiej przepustowości.','Stworzony do automatycznych linii lakierniczych, równie dobry przy konwencjonalnym natrysku.','Maluj swoje obiekty w dowolnym kolorze uniwersalnymi, wysoko skoncentrowanymi pastami Baril.','Systemy lakiernicze alkidowe i poliuretanowe dostępne w połysku 10, 30, 60 i full gloss.','Podkłady i powłoki, które trwale chronią metalowe obiekty i zmniejszają ich ślad środowiskowy.'],
      ro: ['Protecție maximă a suprafeței în orice condiții atmosferice, în interior și exterior.','Perfect potrivit pentru aplicarea electrostatică rapidă ud-pe-ud, pentru un debit ridicat.','Creat pentru linii automate de vopsire și la fel de potrivit pentru tehnici convenționale de pulverizare.','Vopsiți obiectele în orice culoare cu pastele de culoare universale, înalt concentrate, Baril.','Sisteme de vopsire alchidice și poliuretanice, disponibile în luciu 10, 30, 60 și full gloss.','Grunduri și straturi de finisare care protejează durabil obiectele metalice și le reduc amprenta.'],
      de: ['Maximaler Oberflächenschutz unter allen atmosphärischen Bedingungen, innen und außen.','Perfekt geeignet für die schnelle elektrostatische Nass-in-Nass-Applikation bei hohem Durchsatz.','Gemacht für automatische Lackierstraßen und ebenso zu Hause bei konventionellen Spritzverfahren.','Lackieren Sie Ihre Objekte in jeder gewünschten Farbe mit den universellen, hochkonzentrierten Baril-Farbpasten.','Alkyd- und Polyurethan-Lacksysteme, erhältlich in Glanz 10, 30, 60 und Vollglanz.','Grundierungen und Decklacke, die Metallobjekte dauerhaft schützen und ihren Fußabdruck verringern.'],
      fr: ['Protection maximale des surfaces dans toutes les conditions atmosphériques, à l\'intérieur comme à l\'extérieur.','Parfaitement adapté à l\'application électrostatique humide-sur-humide rapide pour un débit élevé.','Conçu pour les lignes de peinture automatiques, et tout aussi à l\'aise avec les techniques de pulvérisation conventionnelles.','Peignez vos objets dans n\'importe quelle couleur grâce aux pâtes colorantes universelles hautement concentrées de Baril.','Systèmes de laque alkyde et polyuréthane, disponibles en brillance 10, 30, 60 et brillant intégral.','Des primaires et des couches de finition qui protègent durablement les objets métalliques et réduisent leur empreinte.'] }],

    ['#apply .eyebrow', { nl: 'Toepassingen', pl: 'Zastosowania', ro: 'Aplicații', de: 'Anwendungen', fr: 'Applications' }],
    ['#apply h2', {
      nl: 'Coatings voor de<br><span class="acc">metaalverwerkende industrie</span>',
      pl: 'Powłoki dla<br><span class="acc">przemysłu metalowego</span>',
      ro: 'Vopsele pentru<br><span class="acc">industria metalurgică</span>',
      de: 'Beschichtungen für die<br><span class="acc">metallverarbeitende Industrie</span>',
      fr: 'Des revêtements pour<br><span class="acc">l\'industrie du métal</span>' }],
    ['#apply .lead', {
      nl: 'We leveren Fortis-coatings via het Fortis-dealernetwerk aan de metaalverwerkende industrie — ijzersterke verfsystemen voor elk metalen object.',
      pl: 'Dostarczamy powłoki Fortis przez sieć dealerów Fortis do przemysłu metalowego — żelazne systemy lakiernicze do każdego metalowego obiektu.',
      ro: 'Livrăm vopselele Fortis prin rețeaua de dealeri Fortis către industria prelucrării metalelor — sisteme de vopsire puternice pentru orice obiect metalic.',
      de: 'Wir liefern Fortis-Beschichtungen über das Fortis-Händlernetz an die metallverarbeitende Industrie — eisenstarke Lacksysteme für jedes Metallobjekt.',
      fr: 'Nous livrons les revêtements Fortis à l\'industrie de transformation des métaux via le réseau de distributeurs Fortis — des systèmes de peinture ultra-résistants pour tout objet métallique.' }],
    ['#apply .sheet-row b', {
      nl: ['Metaalbewerking','Machinebouw','Mobiele machines','Kraan &amp; lift','Containers &amp; hekwerk','Meubilair &amp; kunststof'],
      pl: ['Obróbka metali','Budowa maszyn','Maszyny mobilne','Dźwigi i windy','Kontenery i ogrodzenia','Meble i tworzywa'],
      ro: ['Prelucrarea metalelor','Construcția de mașini','Utilaje mobile','Macarale și lifturi','Containere și garduri','Mobilier și plastic'],
      de: ['Metallverarbeitung','Maschinenbau','Mobile Maschinen','Kran &amp; Aufzug','Container &amp; Zäune','Möbel &amp; Kunststoff'],
      fr: ['Travail des métaux','Construction de machines','Engins mobiles','Grues et levage','Conteneurs et clôtures','Mobilier et plastiques'] }],
    ['#apply .sheet-row span', {
      nl: ['Coatings voor de metaalverwerkende industrie en algemene industriële afwerking.','Coatings voor machine- en apparatenbouw.','Coatings voor landbouwmechanisatie en grondverzetmachines.','Coatings voor kraan- en liftbouw.','Coatings voor containerbouw en hekwerk.','Coatings voor straat- en parkmeubilair en kunststofverwerking.'],
      pl: ['Powłoki dla przemysłu metalowego i ogólnego wykańczania przemysłowego.','Powłoki do budowy maszyn i urządzeń.','Powłoki do maszyn rolniczych i sprzętu do robót ziemnych.','Powłoki do budowy dźwigów i wind.','Powłoki do budowy kontenerów i ogrodzeń.','Powłoki do mebli miejskich i parkowych oraz przetwórstwa tworzyw.'],
      ro: ['Vopsele pentru industria prelucrării metalelor și finisarea industrială generală.','Vopsele pentru construcția de mașini și echipamente.','Vopsele pentru utilaje agricole și echipamente de terasamente.','Vopsele pentru construcția de macarale și lifturi.','Vopsele pentru construcția de containere și garduri.','Vopsele pentru mobilier stradal și de parc și prelucrarea plasticului.'],
      de: ['Beschichtungen für die metallverarbeitende Industrie und die allgemeine industrielle Veredelung.','Beschichtungen für den Maschinen- und Apparatebau.','Beschichtungen für Landmaschinen und Erdbewegungsgeräte.','Beschichtungen für den Kran- und Aufzugbau.','Beschichtungen für den Containerbau und Zäune.','Beschichtungen für Stadt- und Parkmobiliar und die Kunststoffverarbeitung.'],
      fr: ['Revêtements pour l\'industrie de transformation des métaux et la finition industrielle générale.','Revêtements pour la construction de machines et d\'équipements.','Revêtements pour les machines agricoles et les engins de terrassement.','Revêtements pour la construction de grues et d\'ascenseurs.','Revêtements pour la construction de conteneurs et les clôtures.','Revêtements pour le mobilier urbain et de parc et la transformation des plastiques.'] }],

    ['#contact .eyebrow', { nl: 'Aan de slag', pl: 'Zacznij', ro: 'Începe', de: 'Loslegen', fr: 'Commencer' }],
    ['#contact h2', { nl: 'Vind een Fortis-dealer', pl: 'Znajdź dealera Fortis', ro: 'Găsește un dealer Fortis', de: 'Einen Fortis-Händler finden', fr: 'Trouver un distributeur Fortis' }],
    ['#contact p', {
      nl: 'Ontdek de ijzersterke verfsystemen van het Fortis-pakket en zoek een dealer in uw regio — of overleg met onze coatingspecialisten over uw lakstraat.',
      pl: 'Odkryj żelazne systemy lakiernicze z oferty Fortis i znajdź dealera w swoim regionie — lub porozmawiaj z naszymi specjalistami o swojej linii.',
      ro: 'Descoperiți sistemele de vopsire puternice din gama Fortis și găsiți un dealer în regiunea dumneavoastră — sau discutați cu specialiștii noștri despre linia dvs.',
      de: 'Entdecken Sie die eisenstarken Lacksysteme des Fortis-Sortiments und finden Sie einen Händler in Ihrer Region — oder sprechen Sie mit unseren Beschichtungsexperten über Ihre Lackierstraße.',
      fr: 'Découvrez les systèmes de peinture ultra-résistants de la gamme Fortis et trouvez un distributeur dans votre région — ou échangez avec nos experts en revêtements à propos de votre ligne.' }],
    ['#contact .hero-cta .btn-solid', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri', de: 'Kontakt &amp; Standorte', fr: 'Contact et sites' }],
    ['#contact .hero-cta .btn-ghost', { nl: 'Ontdek Baril Group', pl: 'Poznaj Baril Group', ro: 'Descoperă Baril Group', de: 'Baril Group entdecken', fr: 'Découvrir le groupe Baril' }],

    ['.foot-claim', {
      nl: 'IJzersterke industriële coatings voor metaal.',
      pl: 'Żelazne powłoki przemysłowe do metalu.',
      ro: 'Vopsele industriale puternice pentru metal.',
      de: 'Eisenstarke Industriebeschichtungen für Metall.',
      fr: 'Des revêtements industriels ultra-résistants pour le métal.' }],
    ['footer h5', {
      nl: ['Producten','Baril Group'],
      pl: ['Produkty','Baril Group'],
      ro: ['Produse','Baril Group'],
      de: ['Produkte','Baril Group'],
      fr: ['Produits','Baril Group'] }],
    ['.foot-bottom span', {
      nl: ["© Fortis · een merk van Baril Group · 's-Hertogenbosch NL",'IJzersterke bescherming voor metaal.'],
      pl: ["© Fortis · marka Baril Group · 's-Hertogenbosch NL",'Żelazna ochrona metalu.'],
      ro: ["© Fortis · o marcă Baril Group · 's-Hertogenbosch NL",'Protecție puternică pentru metal.'],
      de: ["© Fortis · eine Marke der Baril Group · 's-Hertogenbosch NL",'Eisenstarker Schutz für Metall.'],
      fr: ["© Fortis · une marque du groupe Baril · 's-Hertogenbosch NL",'Une protection à toute épreuve pour le métal.'] }]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('fortis-lang') || 'en'; } catch (e) {}
  if (!['en', 'nl', 'pl', 'ro', 'de', 'fr', 'es', 'it'].includes(lang)) lang = 'en';

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
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro', 'de', 'fr', 'es', 'it'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
