/* Language switch for the Nixol one-pager. English is authored in the DOM;
   NL / PL / RO / DE / FR live in the MAP below as [selector, {nl, pl, ro, de, fr}].
   A value is a string (first match) or an array (one per matched element). */
(() => {
  'use strict';
  const MAP = [
    ['.navlinks a', {
      nl: ['Waarom Nixol','Hoe het werkt','Kenmerken','Duurzaamheid','Toepassingen','Contact'],
      pl: ['Dlaczego Nixol','Jak to działa','Cechy','Zrównoważoność','Zastosowania','Kontakt'],
      ro: ['De ce Nixol','Cum funcționează','Caracteristici','Sustenabilitate','Aplicații','Contact'],
      de: ['Warum Nixol','So funktioniert es','Merkmale','Nachhaltigkeit','Anwendungen','Kontakt'],
      fr: ['Pourquoi Nixol','Comment ça marche','Caractéristiques','Durabilité','Applications','Contact'] }],
    ['header .eyebrow', {
      nl: 'Nixol — Tijdelijke kasschaduw · Een merk van Baril Group',
      pl: 'Nixol — Tymczasowe cieniowanie szklarni · Marka Baril Group',
      ro: 'Nixol — Umbrire temporară pentru sere · O marcă Baril Group',
      de: 'Nixol — Temporäre Gewächshaus-Schattierung · Eine Marke der Baril Group',
      fr: 'Nixol — Ombrage temporaire de serre · Une marque du groupe Baril' }],
    ['header h1', {
      nl: 'Heldere resultaten,<br><span class="sun">seizoen</span><br>na seizoen',
      pl: 'Czyste efekty,<br><span class="sun">sezon</span><br>po sezonie',
      ro: 'Rezultate clare,<br><span class="sun">sezon</span><br>după sezon',
      de: 'Klare Ergebnisse,<br><span class="sun">Saison</span><br>für Saison',
      fr: 'Des résultats nets,<br><span class="sun">saison</span><br>après saison' }],
    ['.hero-sub', {
      nl: 'Een tijdelijke schaduwcoating die jonge gewassen beschermt tegen de felle zon — <strong>optimale lichtregulatie</strong> op glas en polycarbonaat, gemaakt van circulair krijt, veilig voor mens en plant, en volledig verwijderbaar.',
      pl: 'Tymczasowa powłoka cieniująca, która chroni młode uprawy przed ostrym słońcem — <strong>optymalna regulacja światła</strong> na szkle i poliwęglanie, wykonana z obiegowej kredy, bezpieczna dla ludzi i roślin oraz całkowicie usuwalna.',
      ro: 'O acoperire temporară de umbrire care protejează culturile tinere de soarele puternic — <strong>reglare optimă a luminii</strong> pe sticlă și policarbonat, fabricată din cretă circulară, sigură pentru oameni și plante și complet detașabilă.',
      de: 'Eine temporäre Schattierungsbeschichtung, die junge Kulturen vor der grellen Sonne schützt — <strong>optimale Lichtregulierung</strong> auf Glas und Polycarbonat, hergestellt aus zirkulärer Kreide, sicher für Mensch und Pflanze und vollständig entfernbar.',
      fr: 'Un revêtement d\'ombrage temporaire qui protège les jeunes cultures du soleil intense — <strong>régulation optimale de la lumière</strong> sur verre et polycarbonate, fabriqué à partir de craie circulaire, sûr pour l\'homme et la plante, et entièrement amovible.' }],
    ['header .hero-cta .btn-solid', { nl: 'Hoe het werkt', pl: 'Jak to działa', ro: 'Cum funcționează', de: 'So funktioniert es', fr: 'Comment ça marche' }],
    ['header .hero-cta .btn-ghost', { nl: 'Vraag een gratis monster aan', pl: 'Poproś o darmową próbkę', ro: 'Cere o mostră gratuită', de: 'Kostenloses Muster anfordern', fr: 'Demander un échantillon gratuit' }],
    ['.hero-foot span:first-child', {
      nl: 'Glas &amp; polycarbonaat · Nieuwbouw &amp; onderhoud · Volledig verwijderbaar',
      pl: 'Szkło i poliwęglan · Nowe i istniejące · W pełni usuwalna',
      ro: 'Sticlă și policarbonat · Construcție nouă și întreținere · Complet detașabilă',
      de: 'Glas &amp; Polycarbonat · Neubau &amp; Wartung · Vollständig entfernbar',
      fr: 'Verre et polycarbonate · Neuf et entretien · Entièrement amovible' }],
    ['.scroll-hint', { nl: 'Scroll', pl: 'Przewiń', ro: 'Derulează', de: 'Scrollen', fr: 'Défiler' }],

    ['#mission .eyebrow', { nl: 'Waarom Nixol', pl: 'Dlaczego Nixol', ro: 'De ce Nixol', de: 'Warum Nixol', fr: 'Pourquoi Nixol' }],
    ['.mission-quote', {
      nl: 'Jonge gewassen hebben licht nodig — maar niet te veel. Nixol legt een heldere, regelbare laag schaduw aan die <em>de scherpte van de zon wegneemt</em>, en daarna spoorloos verdwijnt.',
      pl: 'Młode uprawy potrzebują światła — ale nie za dużo. Nixol tworzy przejrzystą, kontrolowaną warstwę cienia, która <em>łagodzi ostre słońce</em>, a potem znika bez śladu.',
      ro: 'Culturile tinere au nevoie de lumină — dar nu prea multă. Nixol așază un strat clar și controlabil de umbră care <em>atenuează soarele puternic</em>, apoi dispare fără urmă.',
      de: 'Junge Kulturen brauchen Licht — aber nicht zu viel. Nixol legt eine klare, regulierbare Schattenschicht an, die <em>die Schärfe der Sonne nimmt</em> und danach spurlos verschwindet.',
      fr: 'Les jeunes cultures ont besoin de lumière — mais pas trop. Nixol applique une couche d\'ombre claire et réglable qui <em>atténue l\'intensité du soleil</em>, puis disparaît sans laisser de trace.' }],
    ['#mission .mm b', {
      nl: ['Optimale lichtregulatie','Mild voor jonge gewassen','Volledig verwijderbaar'],
      pl: ['Optymalna regulacja światła','Łagodna dla młodych upraw','Całkowicie usuwalna'],
      ro: ['Reglare optimă a luminii','Blândă cu culturile tinere','Complet detașabilă'],
      de: ['Optimale Lichtregulierung','Schonend für junge Kulturen','Vollständig entfernbar'],
      fr: ['Régulation optimale de la lumière','Douce pour les jeunes cultures','Entièrement amovible'] }],
    ['#mission .mm span', {
      nl: ['De juiste balans tussen lichtinval en bescherming — licht genoeg om te groeien, zacht genoeg om te beschermen.','Verzacht felle zon en hitte zodat zaailingen rustig aanslaan, zonder verbranding of stress.','Als het seizoen keert, wast Nixol er schoon af — geen afbladderen, geen residu, geen verrassingen op het glas.'],
      pl: ['Właściwa równowaga między dostępem światła a ochroną — wystarczająco jasno, by rosnąć, wystarczająco miękko, by chronić.','Łagodzi ostre słońce i upał, aby sadzonki spokojnie się przyjmowały, bez przypaleń i stresu.','Gdy sezon się zmienia, Nixol zmywa się czysto — bez łuszczenia, bez pozostałości, bez niespodzianek na szkle.'],
      ro: ['Echilibrul potrivit între pătrunderea luminii și protecție — suficient de luminos pentru creștere, suficient de blând pentru adăpost.','Atenuează soarele puternic și căldura, astfel încât răsadurile să se dezvolte calm, fără arsuri sau stres.','Când sezonul se schimbă, Nixol se spală curat — fără cojire, fără reziduuri, fără surprize pe sticlă.'],
      de: ['Das richtige Gleichgewicht zwischen Lichteinfall und Schutz — hell genug zum Wachsen, sanft genug zum Schützen.','Mildert grelle Sonne und Hitze, damit Setzlinge ruhig anwachsen, ohne Verbrennung oder Stress.','Wenn die Saison wechselt, wäscht sich Nixol sauber ab — kein Abblättern, keine Rückstände, keine Überraschungen auf dem Glas.'],
      fr: ['Le bon équilibre entre apport de lumière et protection — assez de lumière pour pousser, assez de douceur pour protéger.','Atténue le soleil intense et la chaleur pour que les plants s\'enracinent sereinement, sans brûlure ni stress.','Quand la saison change, Nixol se rince proprement — pas d\'écaillage, pas de résidu, pas de surprise sur le verre.'] }],

    ['#light .eyebrow', { nl: 'Hoe het werkt', pl: 'Jak to działa', ro: 'Cum funcționează', de: 'So funktioniert es', fr: 'Comment ça marche' }],
    ['#light h2', {
      nl: 'Schaduw die <span class="leaf">samenwerkt</span> met het licht',
      pl: 'Cień, który współpracuje <span class="leaf">ze</span> światłem',
      ro: 'Umbră care lucrează <span class="leaf">cu</span> lumina',
      de: 'Schatten, der <span class="leaf">mit</span> dem Licht arbeitet',
      fr: 'Une ombre qui <span class="leaf">travaille avec</span> la lumière' }],
    ['#light .lead', {
      nl: 'Nixol verstrooit binnenvallend zonlicht tot een zachte, gelijkmatige gloed over het gewas. Telers krijgen het klimaat dat ze willen — lagere bladtemperaturen en mildere pieken — terwijl het gewas nog steeds het licht krijgt dat het nodig heeft.',
      pl: 'Nixol rozprasza padające światło słoneczne w miękką, równomierną poświatę nad uprawą. Plantatorzy uzyskują pożądany klimat — niższe temperatury liści i łagodniejsze szczyty — a uprawa wciąż otrzymuje potrzebne światło.',
      ro: 'Nixol difuzează lumina solară într-o strălucire blândă și uniformă peste cultură. Cultivatorii obțin climatul dorit — temperaturi mai scăzute ale frunzelor și vârfuri mai blânde — în timp ce cultura primește în continuare lumina de care are nevoie.',
      de: 'Nixol streut einfallendes Sonnenlicht zu einem sanften, gleichmäßigen Schein über der Kultur. Gärtner erhalten das gewünschte Klima — niedrigere Blatttemperaturen und mildere Spitzen — während die Kultur weiterhin das Licht bekommt, das sie braucht.',
      fr: 'Nixol diffuse la lumière entrante en une lueur douce et uniforme sur la culture. Les producteurs obtiennent le climat qu\'ils veulent — des températures foliaires plus basses et des pics plus doux — tout en laissant à la culture la lumière dont elle a besoin.' }],
    ['#light .badge', { nl: 'Lichtregulatie, geen verduistering', pl: 'Regulacja światła, nie zaciemnienie', ro: 'Reglarea luminii, nu întunecare', de: 'Lichtregulierung, keine Verdunkelung', fr: 'Régulation de la lumière, pas d\'obscurcissement' }],
    ['#light .split-list span', {
      nl: ['Gelijkmatige lichtverstrooiing die hittestress en verbranding bij jonge planten vermindert.','Betrouwbare werking op zowel glas als polycarbonaat.','Afgestemd op het groeiseizoen, en verwijderd zodra het licht milder wordt.'],
      pl: ['Równomierne rozpraszanie światła, które ogranicza stres cieplny i przypalenia młodych roślin.','Niezawodne działanie zarówno na szkle, jak i poliwęglanie.','Dopasowana do sezonu wegetacyjnego, a następnie usuwana, gdy światło łagodnieje.'],
      ro: ['Difuzie uniformă a luminii care reduce stresul termic și arsurile plantelor tinere.','Performanță fiabilă atât pe sticlă, cât și pe policarbonat.','Reglată pentru sezonul de creștere, apoi îndepărtată când lumina se atenuează.'],
      de: ['Gleichmäßige Lichtstreuung, die Hitzestress und Verbrennungen bei jungen Pflanzen reduziert.','Zuverlässige Wirkung auf Glas wie auf Polycarbonat.','Auf die Wachstumssaison abgestimmt und entfernt, sobald das Licht milder wird.'],
      fr: ['Une diffusion uniforme de la lumière qui réduit le stress thermique et les brûlures des jeunes plants.','Une performance fiable sur le verre comme sur le polycarbonate.','Calé sur la saison de croissance, puis retiré dès que la lumière s\'adoucit.'] }],

    ['#features .eyebrow', { nl: 'Wat het onderscheidt', pl: 'Co je wyróżnia', ro: 'Ce îl face diferit', de: 'Was es auszeichnet', fr: 'Ce qui le distingue' }],
    ['#features h2', {
      nl: 'Ontworpen voor de <span class="sun">kas</span>',
      pl: 'Zaprojektowane do <span class="sun">szklarni</span>',
      ro: 'Conceput pentru <span class="sun">seră</span>',
      de: 'Entworfen für das <span class="sun">Gewächshaus</span>',
      fr: 'Conçu pour la <span class="sun">serre</span>' }],
    ['#features .lead', {
      nl: 'Alles wat telers van een schaduwcoating vragen — en niets wat ze willen achterlaten.',
      pl: 'Wszystko, czego plantatorzy oczekują od powłoki cieniującej — i nic, co miałoby pozostać.',
      ro: 'Tot ce cer cultivatorii de la o acoperire de umbrire — și nimic din ce nu vor să rămână.',
      de: 'Alles, was Gärtner von einer Schattierungsbeschichtung verlangen — und nichts, was sie zurücklassen möchten.',
      fr: 'Tout ce que les producteurs attendent d\'un revêtement d\'ombrage — et rien qu\'ils souhaitent voir rester.' }],
    ['#features .feat b', {
      nl: ['Optimale lichtregulatie','Uitstekende hechting','Weerbestendig','Duurzaam','Milieuvriendelijk','Snelle applicatie','Volledig verwijderbaar','Bewezen &amp; gecertificeerd'],
      pl: ['Optymalna regulacja światła','Doskonała przyczepność','Odporna na warunki atmosferyczne','Zrównoważona','Przyjazna środowisku','Szybka aplikacja','Całkowicie usuwalna','Sprawdzona i certyfikowana'],
      ro: ['Reglare optimă a luminii','Aderență excelentă','Rezistentă la intemperii','Sustenabilă','Prietenoasă cu mediul','Aplicare rapidă','Complet detașabilă','Dovedită și certificată'],
      de: ['Optimale Lichtregulierung','Ausgezeichnete Haftung','Witterungsbeständig','Nachhaltig','Umweltfreundlich','Schnelle Applikation','Vollständig entfernbar','Bewährt &amp; zertifiziert'],
      fr: ['Régulation optimale de la lumière','Excellente adhérence','Résistant aux intempéries','Durable','Respectueux de l\'environnement','Application rapide','Entièrement amovible','Éprouvé et certifié'] }],
    ['#features .feat span', {
      nl: ['De juiste balans tussen lichtinval en gewasbescherming.','Speciaal ontwikkeld voor glas en polycarbonaat — voorkomt afbladderen.','Bestand tegen regen, UV-straling en temperatuurschommelingen.','Langdurig effect, en eenvoudig te verwijderen aan het einde van het seizoen.','Lage emissies en veilig voor planten en medewerkers.','Geschikt voor spuiten, rollen of kwasten — en snel droog.','Laat na reiniging geen residu achter op het glas.','Gemaakt binnen een ISO 9001-, 14001- &amp; 45001-kwaliteits- en veiligheidssysteem.'],
      pl: ['Właściwa równowaga między dostępem światła a ochroną upraw.','Specjalnie opracowana do szkła i poliwęglanu — zapobiega łuszczeniu.','Odporna na deszcz, promieniowanie UV i wahania temperatury.','Długotrwały efekt i łatwa do usunięcia po zakończeniu sezonu.','Niska emisja i bezpieczeństwo dla roślin i pracowników.','Nadaje się do natryskiwania, wałkowania lub malowania pędzlem — i szybko schnie.','Nie pozostawia osadu na szkle po umyciu.','Wyprodukowana w systemie jakości i bezpieczeństwa ISO 9001, 14001 i 45001.'],
      ro: ['Echilibrul potrivit între pătrunderea luminii și protecția culturilor.','Special formulată pentru sticlă și policarbonat — previne cojirea.','Rezistentă la ploaie, radiații UV și variații de temperatură.','Efect de lungă durată și ușor de îndepărtat la finalul sezonului.','Emisii reduse și sigură pentru plante și angajați.','Potrivită pentru pulverizare, aplicare cu rola sau pensula — și se usucă rapid.','Nu lasă reziduuri pe sticlă după curățare.','Realizată într-un sistem de calitate și siguranță ISO 9001, 14001 și 45001.'],
      de: ['Das richtige Gleichgewicht zwischen Lichteinfall und Kulturschutz.','Speziell für Glas und Polycarbonat entwickelt — verhindert Abblättern.','Beständig gegen Regen, UV-Strahlung und Temperaturschwankungen.','Langanhaltende Wirkung und am Saisonende einfach zu entfernen.','Geringe Emissionen und sicher für Pflanzen und Mitarbeitende.','Geeignet zum Spritzen, Rollen oder Streichen — und schnell trocknend.','Hinterlässt nach der Reinigung keine Rückstände auf dem Glas.','Hergestellt in einem ISO-9001-, 14001- &amp; 45001-Qualitäts- und Sicherheitssystem.'],
      fr: ['Le bon équilibre entre apport de lumière et protection des cultures.','Spécialement développé pour le verre et le polycarbonate — empêche l\'écaillage.','Résistant à la pluie, aux UV et aux variations de température.','Effet durable, et facile à retirer en fin de saison.','Faibles émissions et sûr pour les plantes et les opérateurs.','Adapté à la pulvérisation, au rouleau ou au pinceau — et séchage rapide.','Ne laisse aucun résidu sur le verre après nettoyage.','Fabriqué selon un système qualité et sécurité ISO 9001, 14001 et 45001.'] }],

    ['#chalk .eyebrow', { nl: 'Circulair &amp; schoon', pl: 'Obiegowa i czysta', ro: 'Circulară și curată', de: 'Zirkulär &amp; sauber', fr: 'Circulaire et propre' }],
    ['#chalk h2', {
      nl: 'Gebouwd op <span class="leaf">circulair krijt</span>',
      pl: 'Oparta na <span class="leaf">obiegowej kredzie</span>',
      ro: 'Bazată pe <span class="leaf">cretă circulară</span>',
      de: 'Aufgebaut auf <span class="leaf">zirkulärer Kreide</span>',
      fr: 'Conçu à partir de <span class="leaf">craie circulaire</span>' }],
    ['#chalk .lead', {
      nl: 'Nixol is gebaseerd op circulair krijt — een van nature rijk aanwezig, gerecycled mineraal. Het doet een seizoen lang zijn werk en keert daarna schoon terug, en laat het glas en het milieu achter zoals het ze aantrof.',
      pl: 'Nixol bazuje na obiegowej kredzie — naturalnie obfitym, pochodzącym z recyklingu minerale. Działa przez sezon, a potem znika czysto, pozostawiając szkło i środowisko w nienaruszonym stanie.',
      ro: 'Nixol se bazează pe cretă circulară — un mineral abundent în natură, reciclat. Își face treaba un sezon, apoi revine curat, lăsând sticla și mediul așa cum le-a găsit.',
      de: 'Nixol basiert auf zirkulärer Kreide — einem natürlich reichlich vorhandenen, recycelten Mineral. Es leistet eine Saison lang seine Arbeit und verschwindet danach sauber, und lässt Glas und Umwelt so zurück, wie es sie vorgefunden hat.',
      fr: 'Nixol repose sur de la craie circulaire — un minéral naturellement abondant et recyclé. Il fait son travail toute une saison, puis s\'efface proprement, laissant le verre et l\'environnement tels qu\'il les a trouvés.' }],
    ['#chalk .stat .n', {
      nl: ['100%','Laag','Circulair'], pl: ['100%','Niska','Obiegowa'], ro: ['100%','Redus','Circular'], de: ['100%','Gering','Zirkulär'], fr: ['100%','Faible','Circulaire'] }],
    ['#chalk .stat .l', {
      nl: ['Verwijderbaar — wast eraf zonder residu.','Emissies — veilig voor planten en de mensen die het aanbrengen.','Krijtgebaseerde formule uit een gerecyclede minerale bron.'],
      pl: ['Usuwalna — zmywa się bez pozostałości.','Emisje — bezpieczna dla roślin i osób ją nakładających.','Receptura na bazie kredy z surowca mineralnego z recyklingu.'],
      ro: ['Detașabilă — se spală fără reziduuri.','Emisii — sigură pentru plante și pentru cei care o aplică.','Formulă pe bază de cretă dintr-o sursă minerală reciclată.'],
      de: ['Entfernbar — wäscht sich ohne Rückstände ab.','Emissionen — sicher für Pflanzen und die Menschen, die es auftragen.','Kreidebasierte Rezeptur aus einer recycelten Mineralquelle.'],
      fr: ['Amovible — se rince sans résidu.','Émissions — sûr pour les plantes et pour ceux qui l\'appliquent.','Formule à base de craie issue d\'une source minérale recyclée.'] }],

    ['#apply .eyebrow', { nl: 'Toepassingen', pl: 'Zastosowania', ro: 'Aplicații', de: 'Anwendungen', fr: 'Applications' }],
    ['#apply h2', {
      nl: 'Gemaakt om te telen <span class="sun">onder glas</span>',
      pl: 'Stworzona do uprawy <span class="sun">pod szkłem</span>',
      ro: 'Creată pentru cultivarea <span class="sun">sub sticlă</span>',
      de: 'Gemacht für den Anbau <span class="sun">unter Glas</span>',
      fr: 'Conçu pour cultiver <span class="sun">sous verre</span>' }],
    ['#apply .lead', {
      nl: 'Een schaduwverf voor kassen in de tuinbouw — geschikt voor nieuwbouw én voor het onderhoud van bestaande kassen.',
      pl: 'Farba cieniująca do szklarni w ogrodnictwie — odpowiednia do nowych konstrukcji i konserwacji istniejących szklarni.',
      ro: 'O vopsea de umbrire pentru sere în horticultură — potrivită pentru construcții noi și pentru întreținerea serelor existente.',
      de: 'Eine Schattierungsfarbe für Gewächshäuser im Gartenbau — geeignet für Neubau und für die Wartung bestehender Gewächshäuser.',
      fr: 'Une peinture d\'ombrage pour les serres horticoles — adaptée à la construction neuve et à l\'entretien des serres existantes.' }],
    ['#apply .badge', { nl: 'Tuinbouw · Glas &amp; polycarbonaat', pl: 'Ogrodnictwo · Szkło i poliwęglan', ro: 'Horticultură · Sticlă și policarbonat', de: 'Gartenbau · Glas &amp; Polycarbonat', fr: 'Horticulture · Verre et polycarbonate' }],
    ['#apply .sheet-row b', {
      nl: ['Ondergronden','Aanbrengen','Gebruik','Verwijdering'],
      pl: ['Powierzchnie','Aplikacja','Zastosowanie','Usuwanie'],
      ro: ['Suprafețe','Aplicare','Utilizare','Îndepărtare'],
      de: ['Untergründe','Auftragen','Einsatz','Entfernung'],
      fr: ['Supports','Application','Usage','Retrait'] }],
    ['#apply .sheet-row span', {
      nl: ['Glazen en polycarbonaat kasdaken en -wanden.','Spuiten, rollen of kwasten — snel droog voor een korte doorlooptijd.','Nieuwbouw &amp; onderhoud van bestaande kassen.','Volledig verwijderbaar, laat na reiniging geen residu achter.'],
      pl: ['Dachy i ściany szklarni ze szkła i poliwęglanu.','Natrysk, wałek lub pędzel — szybkie schnięcie dla krótkiego cyklu.','Nowe konstrukcje i konserwacja istniejących szklarni.','Całkowicie usuwalna, nie pozostawia osadu po umyciu.'],
      ro: ['Acoperișuri și pereți de seră din sticlă și policarbonat.','Pulverizare, rolă sau pensulă — uscare rapidă pentru un ciclu scurt.','Construcții noi și întreținerea serelor existente.','Complet detașabilă, fără reziduuri după curățare.'],
      de: ['Gewächshausdächer und -wände aus Glas und Polycarbonat.','Spritzen, Rollen oder Streichen — schnell trocknend für kurze Durchlaufzeiten.','Neubau &amp; Wartung bestehender Gewächshäuser.','Vollständig entfernbar, hinterlässt nach der Reinigung keine Rückstände.'],
      fr: ['Toits et parois de serre en verre et polycarbonate.','Pulvérisation, rouleau ou pinceau — séchage rapide pour un cycle court.','Construction neuve et entretien des serres existantes.','Entièrement amovible, ne laisse aucun résidu après nettoyage.'] }],

    ['#certs .eyebrow', { nl: 'Certificeringen &amp; keurmerken', pl: 'Certyfikaty i znaki jakości', ro: 'Certificări și mărci de calitate', de: 'Zertifizierungen &amp; Gütesiegel', fr: 'Certifications et labels' }],
    ['#certs h2', {
      nl: 'Kwaliteit, milieu <span class="leaf">&amp; veiligheid</span>',
      pl: 'Jakość, środowisko <span class="leaf">i bezpieczeństwo</span>',
      ro: 'Calitate, mediu <span class="leaf">și siguranță</span>',
      de: 'Qualität, Umwelt <span class="leaf">&amp; Sicherheit</span>',
      fr: 'Qualité, environnement <span class="leaf">et sécurité</span>' }],
    ['#certs .lead', {
      nl: 'Ontwikkeld en geproduceerd binnen de gecertificeerde managementsystemen van Baril Group.',
      pl: 'Opracowana i produkowana w certyfikowanych systemach zarządzania Baril Group.',
      ro: 'Dezvoltată și produsă în cadrul sistemelor de management certificate ale Baril Group.',
      de: 'Entwickelt und produziert innerhalb der zertifizierten Managementsysteme der Baril Group.',
      fr: 'Développé et produit dans le cadre des systèmes de management certifiés du groupe Baril.' }],

    ['.cta-card .eyebrow', { nl: 'Probeer het zelf', pl: 'Wypróbuj sam', ro: 'Încearcă singur', de: 'Selbst ausprobieren', fr: 'Essayez par vous-même' }],
    ['.cta-card h2', { nl: 'Vraag een gratis monster aan', pl: 'Poproś o darmową próbkę', ro: 'Cere o mostră gratuită', de: 'Kostenloses Muster anfordern', fr: 'Demander un échantillon gratuit' }],
    ['.cta-card p', {
      nl: 'Ontvang meer informatie, technische ondersteuning of een gratis monster van Nixol Transparant. Ons team helpt je graag het beste klimaat voor je gewassen te creëren.',
      pl: 'Otrzymaj więcej informacji, wsparcie techniczne lub darmową próbkę Nixol Transparant. Nasz zespół chętnie pomoże stworzyć najlepszy klimat dla Twoich upraw.',
      ro: 'Primește mai multe informații, asistență tehnică sau o mostră gratuită de Nixol Transparant. Echipa noastră te ajută cu plăcere să creezi cel mai bun climat pentru culturile tale.',
      de: 'Erhalte mehr Informationen, technische Unterstützung oder ein kostenloses Muster von Nixol Transparant. Unser Team hilft dir gerne, das beste Klima für deine Kulturen zu schaffen.',
      fr: 'Recevez plus d\'informations, une assistance technique ou un échantillon gratuit de Nixol Transparant. Notre équipe vous aide volontiers à créer le meilleur climat pour vos cultures.' }],
    ['.cta-card .btn-solid', { nl: 'Contact &amp; vestigingen', pl: 'Kontakt i biura', ro: 'Contact și birouri', de: 'Kontakt &amp; Standorte', fr: 'Contact et sites' }],
    ['.cta-card .btn-ghost', { nl: 'Ontdek Baril Group', pl: 'Poznaj Baril Group', ro: 'Descoperă Baril Group', de: 'Baril Group entdecken', fr: 'Découvrir le groupe Baril' }],

    ['.foot-claim', {
      nl: 'Heldere resultaten — schaduw die jonge gewassen beschermt en daarna wegspoelt.',
      pl: 'Czyste efekty — cień, który chroni młode uprawy, a potem się zmywa.',
      ro: 'Rezultate clare — umbră care protejează culturile tinere, apoi se spală.',
      de: 'Klare Ergebnisse — Schatten, der junge Kulturen schützt und sich danach abwäscht.',
      fr: 'Des résultats nets — une ombre qui protège les jeunes cultures puis se rince.' }],
    ['.foot-grid div:nth-child(2) a', {
      nl: ['Hoe het werkt','Kenmerken','Toepassingen','Vraag een monster aan'],
      pl: ['Jak to działa','Cechy','Zastosowania','Poproś o próbkę'],
      ro: ['Cum funcționează','Caracteristici','Aplicații','Cere o mostră'],
      de: ['So funktioniert es','Merkmale','Anwendungen','Muster anfordern'],
      fr: ['Comment ça marche','Caractéristiques','Applications','Demander un échantillon'] }],
    ['.foot-bottom span', {
      nl: ["© Nixol · een merk van Baril Group · 's-Hertogenbosch NL",'Heldere resultaten, seizoen na seizoen.'],
      pl: ["© Nixol · marka Baril Group · 's-Hertogenbosch NL",'Czyste efekty, sezon po sezonie.'],
      ro: ["© Nixol · o marcă Baril Group · 's-Hertogenbosch NL",'Rezultate clare, sezon după sezon.'],
      de: ["© Nixol · eine Marke der Baril Group · 's-Hertogenbosch NL",'Klare Ergebnisse, Saison für Saison.'],
      fr: ["© Nixol · une marque du groupe Baril · 's-Hertogenbosch NL",'Des résultats nets, saison après saison.'] }]
  ];

  const flagBox = document.getElementById('langflags');
  let lang = 'en';
  try { lang = localStorage.getItem('nixol-lang') || 'en'; } catch (e) {}
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
    try { localStorage.setItem('nixol-lang', l); } catch (e) {}
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }

  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!['en', 'nl', 'pl', 'ro', 'de', 'fr', 'es', 'it'].includes(lang)) lang = 'en';
    apply(lang);
  }));

  apply(lang);
})();
