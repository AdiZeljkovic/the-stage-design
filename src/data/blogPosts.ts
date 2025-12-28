export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  featured: boolean;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "djevojacka-vecer-sarajevo-kompletni-vodic",
    title: "Djevojačka Večer u Sarajevu: Sve Što Trebate Znati za Nezaboravnu Proslavu",
    excerpt: "Organizirate djevojačku večer za svoju najbolju prijateljicu? Otkrijte kako stvoriti večer o kojoj će se pričati godinama - od izbora lokacije do aktivnosti koje će oduševiti svaku buduću mladenku.",
    content: `
## Zašto je djevojačka večer više od "samo jedne večeri"

Sjetite se trenutka kada vam je prijateljica rekla da se udaje. Taj bljesak u njenim očima, osmijeh koji nije mogla sakriti. Sada je na vama da joj priredite večer koja će biti dostojna tog trenutka.

Djevojačka večer nije samo tradicija. To je posljednji ples slobode, smijeh do suza s najbližim prijateljicama, i uspomene koje će grijati srce dugo nakon što se venčanica spremi u ormar.

## Kako odabrati lokaciju koja će sve ostaviti bez daha

Zaboravite generic restorane i bučne klubove. Moderna mladenka zaslužuje prostor koji priča priču - njenu priču.

**Evo na što obratiti pažnju:**

- **Privatnost** - Intimni prostor samo za vašu ekipu, bez radoznalih pogleda
- **Fleksibilnost** - Mogućnost personalizacije dekoracije prema vašoj viziji
- **Ambient** - Osvjetljenje, muzika i atmosfera koja se prilagođava vašem planu
- **Lokacija** - Centralna pozicija u Sarajevu, lako dostupna svim gostima

The Stage Sarajevo dizajniran je upravo za ovakve trenutke. Zamislite privatni prostor gdje svaki detalj možete prilagoditi - od zlatnih balona s imenom mladenke do elegantnog osvjetljenja koje stvara savršenu atmosferu za fotografije.

## Aktivnosti koje će zaista oduševiti

Odbacite zastarjele igre koje nitko zapravo ne želi igrati. Evo što moderne mladenke stvarno vole:

### Kreativne radionice
**Sip & Paint večer** - Svaka prijateljica slika svoje remek-djelo uz čašu omiljenog pića. Na kraju večeri, mladenka odlazi kući s unikatnim umjetničkim djelima svojih najbližih.

### Glamurozno iskustvo
**Profesionalno šminkanje za cijelu ekipu** - Zamislite: sve izgledaju kao da su sišle s naslovnice. Savršeno za grupne fotografije koje će krasiti Instagram godinama.

### Personalizirane igre
Umjesto generičkih igara, napravite kviz o mladenki i mladoženji. "Tko bolje poznaje par?" garantira smijeh i iznenađujuće odgovore.

## Dekoracija koja govori "ovo je njezina večer"

Detalji čine razliku između obične zabave i nezaboravnog događaja.

**Elementi koji nikad ne iznevjere:**
- Personalizirani neon znak s imenom ili datumom vjenčanja
- Balon instalacija u njezinim omiljenim bojama
- Polaroid zid za instant uspomene
- Elegantni rekviziti za fotografije

## Budžet: Kako postići luksuz bez luksuzne cijene

Tajna nije u trošenju više novca - već u pametnijem trošenju.

**Prioriteti koji se isplate:**
1. Kvalitetna lokacija s uključenom dekoracijom
2. Jedna "wow" aktivnost umjesto pet prosječnih
3. Profesionalne fotografije (Instagram filteri ne mogu zamijeniti pravo osvjetljenje)

**Gdje uštedjeti:**
- DIY pozivnice i zahvalnice
- Potluck sistem za grickalice
- Spotify playlista umjesto DJ-a

## Zaključak: Učinite to nezaboravnim

Na kraju dana, djevojačka večer nije o savršenstvu. Radi se o ljubavi, prijateljstvu i stvaranju uspomena koje će mladenka nositi sa sobom u novi životni poglavlje.

Počnite planirati danas. Vaša prijateljica to zaslužuje.
    `,
    category: "Djevojačke večeri",
    author: "The Stage Tim",
    publishedAt: "2024-12-20",
    readTime: 7,
    featured: true,
    image: "/src/assets/services/djevojacke-hero.jpg",
    tags: ["djevojačka večer", "sarajevo", "proslave", "mladenka", "organizacija"]
  },
  {
    id: "2",
    slug: "djecji-rodjendan-ideje-koje-djeca-obozavaju",
    title: "Dječji Rođendan koji će Vaše Dijete Pamtiti: 7 Ideja koje Roditelji Često Previde",
    excerpt: "Umjesto još jedne rođendanske zabave koju će dijete zaboraviti za tjedan dana, saznajte kako stvoriti magične trenutke koji će ostati urezani u sjećanje zauvijek.",
    content: `
## Istina o dječjim rođendanima koju nitko ne govori

Koliko dječjih rođendana se zapravo sjećate iz vlastitog djetinjstva? Vjerojatno jedan ili dva. I to nisu bili oni s najskupljim tortama ili najviše poklona - bili su to oni gdje se dogodilo nešto posebno.

Kao roditelj, imate priliku stvoriti upravo takav trenutak za svoje dijete. Ne savršen, nego poseban.

## Zašto tradicionalne zabave više ne funkcioniraju

Djeca danas odrastaju okružena stimulacijom. Tableti, pametni telefoni, streaming servisi - sve se natječe za njihovu pažnju. Još jedan balon i papirna kapa jednostavno više nisu dovoljni.

**Ono što djeca zapravo žele:**
- Biti heroj priče, ne samo promatrač
- Stvoriti nešto svojim rukama
- Osjećaj avanture i otkrića
- Vrijeme s prijateljima bez ekrana

## 7 Ideja koje transformiraju rođendan

### 1. Kreativna radionica s opipljivim rezultatom

Djeca obožavaju odnositi nešto kući. Organizirajte radionicu gdje svatko stvara vlastito umjetničko djelo - sliku, nakit, ili čak mali komad namještaja za lutke.

**Zašto funkcionira:** Svaki put kada dijete pogleda svoju kreaciju, sjetit će se tog dana.

### 2. Interaktivna misterija ili potraga za blagom

Pretvorite prostor u scenu iz avanturističkog filma. Tragovi, zagonetke, skriveno blago - djeca postaju detektivi ili istraživači.

**Pro tip:** Prilagodite težinu zagonetki dobi djece. Prelagano je dosadno, preteško frustrirajuće.

### 3. Mini talent show

Svako dijete ima nešto u čemu je dobro. Pjevanje, plesanje, vicevi, mađioničarski trikovi - dajte im pozornicu i gledajte kako blistaju.

### 4. Tematska transformacija prostora

Umjesto generičke dekoracije, potpuno transformirajte prostor. Podmornica, svemirska stanica, čarobnjačka škola - kada djeca uđu, trebaju osjetiti da su ušla u drugi svijet.

### 5. Profesionalno face painting i kostimiranje

Djeca vole pretvaranje. Profesionalno šminkanje ih transformira u likove koje obožavaju - od princeza do superheroja.

### 6. Kulinarska avantura

Mali kuharski show gdje djeca prave vlastite pizze, cupcakes ili sladoled. Kaotično? Da. Nezaboravno? Apsolutno.

### 7. Foto studio iskustvo

Profesionalna rasvjeta, rekviziti, pozadine - djeca se osjećaju kao prave zvijezde. Roditelji dobivaju fotografije koje vrijede više od bilo kojeg poklona.

## Kako izbjeći najčešće greške

**Greška #1: Previše aktivnosti**
Manje je više. Tri dobro organizirane aktivnosti pobjeđuju deset užurbanih.

**Greška #2: Ignoriranje starosne razlike**
Ako su gosti različitih dobi, pripremite paralelne aktivnosti.

**Greška #3: Zaboravljanje roditelja**
Ugodna zona za roditelje = opuštena djeca.

## Lokacija čini polovicu posla

Organizacija kod kuće zvuči ekonomično dok ne izračunate: čišćenje prije, čišćenje poslije, stres od potencijalne štete, ograničen prostor za igru.

Profesionalni prostor nudi:
- Sigurno okruženje dizajnirano za djecu
- Dekoraciju uključenu u cijenu
- Nema stresa s pospremanjem
- Profesionalnu podršku tijekom događaja

## Vaš sljedeći korak

Rođendan vašeg djeteta je za _____ dana. Dovoljno vremena za organizaciju, ali ne za odgađanje.

Zamislite izraz na licu vašeg djeteta kada uđe u prostor dizajniran samo za njega. To je trenutak koji nije moguće kupiti - ali ga je moguće stvoriti.
    `,
    category: "Rođendani",
    author: "The Stage Tim",
    publishedAt: "2024-12-15",
    readTime: 8,
    featured: true,
    image: "/src/assets/services/rodjendani-hero.jpg",
    tags: ["dječji rođendan", "ideje", "organizacija", "sarajevo", "proslave"]
  },
  {
    id: "3",
    slug: "baby-shower-moderna-proslava-trudnice",
    title: "Baby Shower u BiH: Kako Organizirati Modernu Proslavu koju će Buduća Mama Obožavati",
    excerpt: "Baby shower više nije američki trend - postala je tradicija koju bosanske žene prihvataju svim srcem. Saznajte kako organizirati proslavu koja će rasplakati buduću mamu od sreće.",
    content: `
## Nova tradicija koja osvaja srca

Prije deset godina, baby shower u Bosni i Hercegovini bio je egzotičan pojam. Danas? Skoro svaka buduća mama sanjari o trenutku kada će njene najbliže prijateljice i porodica proslaviti novo poglavlje njenog života.

I to s dobrim razlogom.

## Zašto baby shower znači više od poklona

Da budemo iskreni - bebe trebaju puno stvari. Pelene, odjeća, oprema. Baby shower pomaže praktično.

Ali pravi značaj leži dublje.

**Baby shower je:**
- Ritual prelaska - označavanje transformacije žene u majku
- Mreža podrške - pokazivanje budućoj mami da nije sama
- Vrijeme za nju - prije nego što sve postane o bebi
- Stvaranje zajednice - povezivanje ljudi koji će biti dio djetetovog života

## Kada organizirati: Tajna savršenog tajminga

**Idealno vrijeme: 6-8 tjedana prije termina**

Zašto? Buduća mama još uvijek se osjeća dovoljno dobro za uživanje, ali je već dovoljno blizu porodu da uzbuđenje bude na vrhuncu.

**Izbjegavajte:**
- Prerano (prije 7. mjeseca) - može se činiti preuranjeno
- Prekasno (nakon 36. tjedna) - mama je umorna i moguće neugodno

## Tema: Da ili ne?

Tematske proslave mogu biti prekrasne, ali nisu obavezne.

**Popularne teme koje uvijek funkcioniraju:**
- "Ready to Pop" - zabavna, vesela atmosfera
- Oblaci i zvijezde - neutralno i elegantno
- Safari životinje - idealno ako se spol ne otkriva
- Čarobna šuma - romantično i magično

**Ako odabirete temu:**
Neka sve bude suptilno usklađeno, ne pretjerano tematski. Elegancija pobjeđuje karnevalski izgled.

## Gender Reveal: Uključiti ili odvojiti?

Trend kombiniranja baby showera s otkrivanjem spola djeteta raste.

**Prednosti kombiniranja:**
- Jedan veliki event umjesto dva
- Veće iznenađenje, više emocija
- Praktičnije za goste

**Kada odvojiti:**
- Ako želite intimniju baby shower samo za žene
- Ako gender reveal uključuje širu porodicu

## Aktivnosti koje stvaraju uspomene

Zaboravite dosadne igre pogađanja opsega trbuha. Evo što moderne mame zapravo vole:

### Stanica za poruke
Svaki gost piše poruku za bebu koju će pročitati na određeni rođendan (1., 5., 18.). Zamislite emocije kada ta pisma stignu!

### Knjiga savjeta
Umjesto potpisivanja čestitke, gosti popunjavaju stranice knjige sa svojim roditeljskim savjetima, smiješnim anegdotama i željama.

### DIY stanica
Ukrašavanje bodija ili pravljenje mobilea za krevetić - gosti stvaraju nešto za bebu.

### Vremenska kapsula
Novine od tog dana, poruke, male predmete - sve se zaključava i otvara na djetetov 18. rođendan.

## Hrana koja oduševljava

Elegantni finger food nadmašuje sjedenje za stolom:

- Mini sendviči i bruschette
- Voćne i slatke "bar" stanice
- Baby-themed kolačići
- Torta kao centralni element

**Napomena:** Uvijek provjerite ima li ograničenja u ishrani trudnice!

## Prostor koji priča priču

Dom može biti ugodan, ali profesionalni prostor nudi nešto što dom ne može:

- Neutralan teren - gosti se osjećaju kao gosti, ne kao posjetitelji
- Profesionalnu dekoraciju - bez stresa dan prije
- Savršene fotografije - rasvjeta i pozadine osmišljene za to
- Mami daje osjećaj posebnosti - jer ona jeste posebna

## Zaključak: Stvorite trenutak

Baby shower nije o savršenstvu. Radi se o ljubavi, zajedništvu i slavljenju nove ljubavi koja dolazi na svijet.

Kada ta mala beba jednog dana pita: "Mama, jesam li bila željana?" - pokazat ćete joj fotografije tog dana. I odgovor će biti kristalno jasan.
    `,
    category: "Baby Shower",
    author: "The Stage Tim",
    publishedAt: "2024-12-10",
    readTime: 9,
    featured: false,
    image: "/src/assets/services/baby-shower-hero.jpg",
    tags: ["baby shower", "trudnoća", "proslava", "organizacija", "sarajevo"]
  },
  {
    id: "4",
    slug: "sip-and-paint-kreativnost-druzenje-sarajevo",
    title: "Sip & Paint: Zašto je Ovo Postala Najtraženija Grupna Aktivnost u Sarajevu",
    excerpt: "Niste umjetnik? Savršeno. Upravo zato ćete obožavati Sip & Paint. Otkrijte zašto tisuće Sarajlija zamjenjuju klasične izlaske ovom jedinstvenom kombinacijom kreativnosti i druženja.",
    content: `
## Priznajte: Posljednji put ste crtali u osnovnoj školi

I to je potpuno u redu. Zapravo, to je upravo razlog zašto bi trebali probati Sip & Paint.

Vidite, ova večer nije za umjetnike. Ona je za ljude koji su zaboravili koliko je lijepo stvoriti nešto rukama. Za one koji provode dane gledajući u ekrane. Za ekipe koje traže nešto drugačije od još jedne večeri u istom kafiću.

## Što je zapravo Sip & Paint?

Zamislite ovo: Ulazite u prostor s ugodnim osvjetljenjem. Pred vama je platno, boje i kistovi. U ruci čaša omiljenog pića. Instruktor vas korak po korak vodi kroz stvaranje slike.

**Dva sata kasnije:**
- Vi: "Ja sam ovo napravila?!"
- Vaše prijateljice: "Ovo ide na zid!"
- Instagram: Dobija novu objavu koju ljudi zapravo lajkaju

## Zašto ovo funkcionira čak i ako "nemate talenta"

Tajna je u metodi.

Profesionalni instruktor razbija sliku na jednostavne korake. Svaki korak je toliko jasan da ga doslovno svatko može pratiti. A opet, svačije platno na kraju izgleda jedinstveno - jer ste vi jedinstveni.

**Nema pogrešnih poteza.** Slučajno ste napravili mrlju? Čestitam, to je sada umjetnički izraz. Boje su se pomiješale? Upravo ste stvorili gradient koji niste planirali ali izgleda sjajno.

## Za koga je Sip & Paint savršen?

### Djevojačke večeri s razlikom
Umjesto još jednog kluba gdje se ne čujete od muzike, sjedite u ugodnom prostoru, razgovarate, smijete se i stvarate. Na kraju večeri imate umjetnička djela i fotografije koje nisu zamućene od lošeg osvjetljenja.

### Team building koji ljudi zapravo žele
Budimo iskreni - većina team buildinga je prisila. "Obvezno druženje" koje nitko ne želi. Sip & Paint je iznimka. Kolege se opuštaju, hijerarhija nestaje kada svi pokušavaju nacrtati isto drvo, a razgovori teku prirodno.

### Romantične večeri
Umjesto još jedne večere u restoranu, stvorite nešto zajedno. Dvije slike, dva pogleda na istu temu - savršen simbol veze.

### Rođendani za odrasle
"Šta želiš za rođendan?" Ako ste umorni od ovog pitanja, evo odgovora. Iskustvo koje uključuje vaše najdraže, a ne još jednu stvar koja će skupljati prašinu.

## Šta donijeti sa sobom?

**Apsolutno ništa.**

Ozbiljno. Sav materijal je uključen:
- Platno, boje, kistovi
- Zaštitna pregača (za one koji se boje za odjeću)
- Piće po izboru

**Jedino što trebate ponijeti:** Otvoreni um i spremnost za zabavu.

## FAQ koji svi pitaju

**"Moram li znati crtati?"**
Ne. Doslovno ne. To je poanta.

**"Šta ako mi slika bude užasna?"**
Neće. Ali čak i da bude - to je dio zabave. Najsmiješnije slike često postaju najdraže uspomene.

**"Koliko traje?"**
Tipično 2-2.5 sata. Dovoljno da završite djelo bez žurbe.

**"Mogu li donijeti vlastito piće?"**
Ovisi o lokaciji. The Stage nudi piće po izboru uključeno u cijenu.

## Zašto je Sarajevo prigrlilo ovaj trend

Sarajevo je grad koji voli druženje. Kahva se ne pije, ona se ispija satima uz razgovor. Sip & Paint je prirodni nastavak te kulture - ali s kreativnim twistom.

Plus, u doba kada svi žele "experience" umjesto stvari, ovo je poklon koji ima smisla. Umjesto još jedne šolje ili parfema, poklanjate večer ispunjenu smijehom i stvaranjem.

## Vaš prvi korak

Skupite ekipu. Odaberite datum. Rezervirajte termin.

Za dva sata, držat ćete u rukama vlastitu sliku i pitati se zašto ovo niste probali prije.

Umjetnik ili ne - večer koju ćete pamtiti vas čeka.
    `,
    category: "Aktivnosti",
    author: "The Stage Tim",
    publishedAt: "2024-12-05",
    readTime: 7,
    featured: true,
    image: "/src/assets/services/sip-paint-hero.jpg",
    tags: ["sip and paint", "kreativnost", "druženje", "sarajevo", "team building"]
  },
  {
    id: "5",
    slug: "profesionalno-sminkanje-savjeti-strucnjaka",
    title: "Profesionalno Šminkanje: 8 Tajni koje Makeup Artisti Ne Govore Svima",
    excerpt: "Nakon stotina lica i nebrojenih posebnih prilika, naša šminkerica otkriva što zaista čini razliku između makeup-a koji traje i onog koji nestaje do ponoći.",
    content: `
## Zašto vaš makeup ne izgleda kao na YouTubeu

Gledate tutorijale, kupujete iste proizvode, pratite iste korake - a rezultat jednostavno nije isti.

Nije do vas. Je do konteksta.

Profesionalno šminkanje nije samo o proizvodima ili tehnici. Radi se o razumijevanju lica, osvjetljenja, prilike i - možda najvažnije - dugotrajnosti.

## Tajna #1: Priprema kože je pola posla

Profesionalci znaju: makeup je dobar koliko i platno na kojem počiva.

**72 sata prije velikog dana:**
- Izbjegavajte nove proizvode (moguće alergijske reakcije)
- Pijte više vode nego inače
- Lagana eksfolijacija 48 sati prije

**Sat vremena prije:**
- Čista, hidratizirana koža
- Primer koji odgovara vašem tipu kože
- Nikakvih teških kremama neposredno prije

## Tajna #2: Pravi proizvodi za pravu priliku

Svatko ne treba iste proizvode.

**Za fotografije (vjenčanje, matura):**
- HD puderi koji ne reflektiraju bljesak
- Postavke koje traju 12+ sati
- Vodootporni proizvodi za suzne trenutke

**Za večernji izlazak:**
- Proizvodi s više pigmenta
- Highlighter koji hvata svjetlo
- Smjeliji izbori boja

**Za svakodnevicu:**
- Lagane teksture
- Prirodniji finish
- Višenamjenski proizvodi

## Tajna #3: Osvjetljenje mijenja sve

Razlog zašto makeup izgleda sjajno u kupaonici, a čudno na fotografijama? Osvjetljenje.

Profesionalno šminkanje uvijek uzima u obzir gdje ćete provesti večer:
- Toplo osvjetljenje = hladniji tonovi makeup-a
- Hladno osvjetljenje = topliji tonovi
- Bljesak fotoaparata = specijalizirana tehnika

## Tajna #4: Manje je gotovo uvijek više

Najčešća greška amaterskog šminkanja? Previše slojeva.

Profesionalci grade makeup polako, sloj po sloj, procjenjujući nakon svakog koraka. Lakše je dodati nego oduzeti.

## Tajna #5: Tehnike koje stvarno rade

**Bakeing (isplati se):** Nanošenje pudera ispod očiju i na T-zonu za dugotrajnost.

**Konturiranje (oprez):** U životu treba biti suptilnije nego na Instagramu. Kamera oprašta, ogledalo ne.

**Setting spray (obavezno):** Završni korak koji većina preskače - a ne bi trebala.

## Tajna #6: Timing je ključan

Za vjenčanje ili veliku proslavu, planirajte da makeup bude gotov **1-1.5 sati prije** nego što trebate izgledati savršeno.

Zašto? Proizvodi se trebaju "slegati". Prvih 30 minuta nakon nanošenja, lice se prilagođava. Tek tada vidite konačni rezultat.

## Tajna #7: Grupno šminkanje ima svoja pravila

Šminkate se s prijateljicama za djevojačku ili matursko veče?

**Savjet profesionalaca:**
- Rezervirajte više vremena nego što mislite da trebate
- Krenite od onih s najjednostavnijim zahtjevima
- Ostavite mladenku/slavljenicu za kraj (najmanje žurbe)
- Fotografije radite na kraju, kada su svi gotovi

## Tajna #8: Investicija koja se isplati

"Zašto bih platila profesionalno šminkanje kad imam YouTube?"

**Zato što:**
- Profesionalac vidi vaše lice objektivno
- Posjeduje kvalitetnije proizvode nego što biste sami kupili
- Zna kako lice reagira na bljesak, suze, znoj
- Oslobađa vas stresa na vaš veliki dan

Zamislite: Umjesto da 3 sata prije svadbe nervozno popravljate eyeliner, opušteno pijete kahvu dok stručnjak radi svoje.

## Kada angažirati profesionalca?

**Obavezno:**
- Vjenčanje
- Svečani događaji koji se fotografiraju
- Profesionalna fotografiranja

**Preporučeno:**
- Mature i proslave
- Djevojačke večeri (grupni paketi)
- Značajne godišnjice

## Vaš sljedeći korak

Profesionalno šminkanje nije luksuz. To je investicija u osjećaj samopouzdanja na vaš najvažniji dan.

Zaslužujete pogledati fotografije za godinu dana i pomisliti: "Bila sam prelijepa" - ne "Što je bilo s tim sjenilom?"
    `,
    category: "Ljepota",
    author: "The Stage Tim",
    publishedAt: "2024-11-28",
    readTime: 8,
    featured: false,
    image: "/src/assets/services/sminkanje-hero.jpg",
    tags: ["šminkanje", "makeup", "savjeti", "profesionalno", "ljepota"]
  },
  {
    id: "6",
    slug: "italian-night-sarajevo-kulinarska-avantura",
    title: "Italian Night u Sarajevu: Kada Toskana Dođe do Vas",
    excerpt: "Ne trebate avion do Italije za autentično iskustvo. Otkrijte kako jedna večer može prenijeti duh Mediterana direktno u srce Sarajeva - hrana, muzika, atmosfera i la dolce vita.",
    content: `
## Zašto svi sanjamo o Italiji

Zatvorite oči na trenutak.

Miris svježe pečene focacce. Zvuk talijanske glazbe u pozadini. Čaša Chianti vina u ruci. Smijeh prijatelja oko dugačkog stola prekrivenog bijelim stolnjakom.

To nije odmor koji si ne možete priuštiti. To je večer koju možete imati ovdje, sada, u Sarajevu.

## Šta Italian Night zapravo znači?

Ne govorimo o pizzi iz dostave i checkered stolnjacima iz IKEA-e.

Pravi Italian Night je uranjanje u kulturu - od hrane, preko muzike, do načina druženja. Italijani ne jedu da bi preživjeli. Oni žive da bi jeli. I to je filozofija koju donosimo u svaku večer.

## Hrana: Srce svakog okupljanja

### Antipasti - Početak priče
Stol pun malih zdjelica: masline, sušena rajčica, bruschetta sa svježim bosiljkom, carpaccio, burrata koja se topi pod prstima. Nije to predjelo - to je pozivnica za razgovor.

### Primi Piatti - Tradicija na tanjuru
Pasta napravljena s ljubavlju. Carbonara sa savršeno kremastom teksturom. Risotto koji je toliko puta promiješan da je postao svila.

### Secondi - Za one koji hoće više
Nježna teletina, riba iz mora, pile sa kaparima i limunom.

### Dolci - Završetak koji pamtite
Tiramisu koji se topi na jeziku. Panna cotta s bobičastim voćem. Cannoli hrskavi izvana, kremasti iznutra.

## Više od hrane: Atmosfera

Talijanska večera nije samo u hrani - ona je u svemu oko nje.

**Dekoracija:**
- Topla svijetla koja podsjećaju na talijanske ulice
- Svježe cvijeće na stolovima
- Elegancija bez pretjerivanja

**Muzika:**
- Klasični talijanski hitovi
- Jazz verzije poznatih pjesama
- Živahno, ali ne preteško

**Dress code:**
- Elegantno ležerno
- Zamislite: večera na terasi u Firenci

## Za koje prilike je Italian Night savršen?

### Romantične večeri
Godišnjice, proslave, ili jednostavno "nedostajao si mi" večer. Ništa ne govori "volim te" kao ručno pravljeni gnocchi.

### Korporativni događaji s dušom
Umjesto dosadnih poslovnih večera, iznenadite kolege iskustvom. Razgovori teku lakše uz dobro vino i prave špagete.

### Okrugle brojke
50. rođendan? 25 godina braka? Velike prilike zaslužuju velike geste.

### Prijateljska okupljanja
Grupa prijatelja koja se dugo nije vidjela? Italian Night stvara atmosferu gdje se priče lakše dijele.

## Što očekivati na The Stage Italian Night

- **Privatni prostor** samo za vašu grupu
- **Autentični menu** kreiran za ovu priliku
- **Svo piće uključeno** u paket
- **Dekoracija** koja transformira prostor
- **Muzika** koja stvara pravu atmosferu
- **Fotografije** za uspomenu

## Često postavljana pitanja

**Minimalan broj gostiju?**
10 osoba. Idealno je 15-25 za pravu italijansku atmosferu dugačkog stola.

**Mogu li prilagoditi menu?**
Da. Vegetarijanske opcije, alergije, posebni zahtjevi - sve je moguće uz prethodnu najavu.

**Koliko traje večer?**
Planiramo 3-4 sata. Jer kao pravi Italijani - ne žurimo.

## La Dolce Vita vas čeka

Italija nije samo mjesto. To je stanje uma. Način života gdje je hrana ljubav, gdje je razgovor umjetnost, gdje je svaki obrok slavlje.

Ne morate čekati odmor. Ne morate kupovati avionske karte.

Italija dolazi k vama.

*Buon appetito!*
    `,
    category: "Tematske večeri",
    author: "The Stage Tim",
    publishedAt: "2024-11-20",
    readTime: 7,
    featured: false,
    image: "/src/assets/services/italian-night-hero.jpg",
    tags: ["italian night", "tematska večer", "hrana", "italija", "sarajevo"]
  },
  {
    id: "7",
    slug: "kako-odabrati-event-prostor-sarajevo",
    title: "Kako Odabrati Savršen Event Prostor u Sarajevu: Vodič za Pametne Organizatore",
    excerpt: "Lokacija čini ili lomi događaj. Naučite koje greške izbjegavati i na što obratiti pažnju prije nego potpišete bilo što - savjeti od profesionalaca koji su vidjeli sve.",
    content: `
## Zašto je izbor prostora najvažnija odluka

Možete imati savršen catering, prelijepu dekoraciju i najbolji DJ u gradu - ako prostor ne valja, ništa od toga neće spasiti događaj.

Prostor određuje:
- Atmosferu koju gosti osjećaju čim uđu
- Tok događaja i kako se ljudi kreću
- Kvalitetu fotografija i videa
- Ukupni dojam koji ostaje

## 7 Pitanja koja morate postaviti prije rezervacije

### 1. Koja je stvarna kapacitet?
"Prima do 50 ljudi" može značiti "50 ljudi može stati" - ne "50 ljudi može udobno proslaviti".

**Pravilo palca:** Uzmite navedeni kapacitet i smanjite za 20% za udobno druženje.

### 2. Šta je uključeno u cijenu?
Jeftinija opcija često postaje skuplja kada dodate:
- Stolove i stolice (često extra)
- Dekoraciju (gotovo uvijek extra)
- Audio opremu (iznenađujuće često extra)
- Čišćenje (ponekad naplativo)

**Pitajte za itemiziranu ponudu.** Usporedite jabuke s jabukama.

### 3. Kakva su pravila za catering?
Neki prostori:
- Zahtijevaju korištenje njihovog cateringa (skuplje, ali manje stresa)
- Dozvoljavaju vanjski catering (jeftinije, ali više koordinacije)
- Imaju "corkage fee" za donošenje vlastitog pića

### 4. Koliko vremena za pripremu i pospremanje?
Ako vam treba 2 sata za postavljanje, a dobijete prostor 30 minuta prije - problem.

**Tražite:** Minimalno 1-2 sata prije za pripremu, 30-60 minuta poslije za pospremanje.

### 5. Kakvo je osvjetljenje?
Ovo većina ljudi zaboravi pitati. A onda dobiju fotografije na kojima svi izgledaju umorno.

**Idealno:**
- Prirodno svjetlo za dnevne događaje
- Prigušivo osvjetljenje za večernje
- Mogućnost dodavanja dekorativnih svjetala

### 6. Kakva je akustika?
Prostor sa previše jeke = nemoguće vođenje razgovora = nezadovoljni gosti.

**Testirajte:** Prošetajte prostorom, razgovarajte normalno. Ako se morate derati - tražite dalje.

### 7. Koji je Plan B za loše vrijeme?
Ako planirate vanjski element - šta ako pada kiša? Šta ako je prehladno?

**Tražite:** Prostor s fleksibilnim opcijama ili krovnim rješenjima.

## Crvene zastavice koje ne smijete ignorirati

🚩 **"Provjerit ću i javim se"** - Ako osoblje ne zna odgovor, nešto nije u redu

🚩 **Nejasni ugovori** - Sve mora biti napisano. Sve.

🚩 **Negativne recenzije o istim problemima** - Jedan nezadovoljan gost je iznimka. Pet s istom pritužbom je obrazac.

🚩 **Pritisak za brzu odluku** - "Samo danas imamo ovaj termin" je često laž

🚩 **Nema reference fotografija** - Prostor koji izgleda dobro prazan možda ne izgleda dobro pun

## Šta čini prostor zaista posebnim

Savršeni prostor nije nužno najveći ili najskuplji. To je prostor koji:

- **Priča priču** - Ima karakter i osobnost
- **Fleksibilan je** - Može se prilagoditi vašoj viziji
- **Ima podršku** - Osoblje koje pomaže, ne ometa
- **Osjeća se privatno** - Vaš događaj, vaši gosti, vaš prostor

## Zaključak: Investirajte vrijeme prije nego novac

Posjetite prostor osobno. Zamislite svoje goste unutra. Pitajte sve što vas zanima.

Dobra lokacija olakšava sve ostalo. Loša lokacija otežava sve, bez obzira koliko truda uložite.

Vaši gosti možda neće primijetiti savršen prostor. Ali će definitivno primijetiti loš.

Nemojte štedjeti na temeljima.
    `,
    category: "Savjeti",
    author: "The Stage Tim",
    publishedAt: "2024-11-15",
    readTime: 8,
    featured: false,
    image: "/src/assets/services/najam-hero.jpg",
    tags: ["event prostor", "organizacija", "sarajevo", "savjeti", "lokacija"]
  },
  {
    id: "8",
    slug: "trendovi-u-proslavama-2025",
    title: "Trendovi u Proslavama 2025: Šta će Gosti Očekivati Ove Godine",
    excerpt: "Zaboravite sve što ste znali o tradicionalnim proslavama. Nova godina donosi nove standarde - evo šta vaši gosti očekuju i kako ostati ispred krivulje.",
    content: `
## Pravila igre su se promijenila

Pandemija je sve promijenila. Uključujući i to kako ljudi proslavljaju.

Oni koji su preživjeli izolaciju sada žele više - više povezanosti, više značenja, više autentičnosti. Površna slavlja više nisu dovoljna.

## Trend #1: Iskustva umjesto stvari

"Šta želiš za poklon?" postaje irelevantno pitanje.

Ljudi žele:
- Zajedničke aktivnosti (Sip & Paint, radionice, cooking class)
- Uspomene koje se dijele (a ne predmeti koji skupljaju prašinu)
- Priče za ispričati ("Sjećaš se kada smo...")

**Za organizatore:** Planirajte interaktivne elemente. Pasivno sjedenje je prošlost.

## Trend #2: Intimnost nad veličinom

Mega svadbe sa 500 gostiju? Izlaze iz mode.

Nove proslave su:
- Manja lista gostiju (kvaliteta nad kvantitetom)
- Dublje povezivanje (vrijeme za svakog gosta)
- Veći budžet po osobi (bolje iskustvo za manje ljudi)

**Za organizatore:** Ne bojte se smanjiti listu. Boljih 20 gostiju je vrijedno više od mediokriteta za 50.

## Trend #3: Održivost nije opcija

Mlađe generacije to zahtijevaju, starije počinju cijeniti.

Ovo nije samo o "zelenoj" priči - to je o praktičnosti:
- Manje otpada = manje čišćenja
- Lokalni caterers = svježija hrana
- Digitalne pozivnice = brže i jeftinije

**Za organizatore:** Pitajte se: "Mora li ovo biti jednokratno?"

## Trend #4: Hibridni događaji ostaju

Ne možete svi uvijek biti na istom mjestu.

Hibridni elementi:
- Live stream za daleke goste
- Digitalni guestbook
- Online igre i interakcije

**Za organizatore:** Tehnologija može poboljšati, ne zamijeniti živo iskustvo.

## Trend #5: Personalizacija do ekstrema

Generic proslave osjećaju se hladno.

Novi standard:
- Dekoracija priča priču o slavljeniku
- Menu reflektira ukuse, ne tradiciju
- Aktivnosti odgovaraju grupi, ne trendu

**Za organizatore:** Pitajte: "Šta je jedinstveno za OVU osobu/par/grupu?"

## Trend #6: Svjesnost o mentalnom zdravlju

Proslave ne moraju biti stresne za organizatore ili goste.

Novi pristup:
- Tihe zone za introverte
- Jasna komunikacija očekivanja
- Prihvaćanje da savršenstvo nije cilj

**Za organizatore:** Vaše mentalno zdravlje je dio eventa. Ako ste iscrpljeni - pokazat će se.

## Trend #7: Fotogeničnost sa svrhom

Instagram moments su još uvijek važni - ali sa zaokretom.

Umjesto generičkih pozadina:
- Personalizirane foto instalacije
- Momenti koji se prirodno događaju
- Kvaliteta nad kvantitetom (jedna sjajna fotka > 50 prosječnih)

**Za organizatore:** Dizajnirajte prostor za fotografije, ali ne dopustite da to upravlja cijelim eventovm.

## Trend #8: Povratak klasici

Ironično, u doba tehnologije, ljudi žele:
- Licem u lice razgovore
- Igre bez ekrana
- Sporo uživanje u hrani
- Prisutnost u trenutku

**Za organizatore:** Phone-free zone postaju popularne. Razmislite o tome.

## Kako primijeniti ove trendove

Ne morate implementirati sve. Ali razmislite:

1. **Šta odgovara vašoj grupi?** Ne silite trendove koji nisu prirodni
2. **Šta možete realistično izvesti?** Jedan trend dobro > pet loše
3. **Šta će zaista poboljšati iskustvo?** Ne radite promjene radi promjena

## Zaključak

Trendovi dolaze i odlaze. Ali suština ostaje ista: okupiti ljude, stvoriti uspomene, proslaviti trenutke.

2025. će biti godina autentičnosti. Godina manje pretvaranja i više povezivanja.

Hoćete li biti dio tog pokreta?
    `,
    category: "Trendovi",
    author: "The Stage Tim",
    publishedAt: "2024-11-10",
    readTime: 9,
    featured: false,
    image: "/src/assets/gallery/event-1.jpg",
    tags: ["trendovi", "proslave", "2025", "organizacija", "eventi"]
  },
  {
    id: "9",
    slug: "personalizacija-proslave-detalji-koji-cine-razliku",
    title: "Personalizacija Proslave: Sitni Detalji koji Vaše Goste Ostavljaju Bez Riječi",
    excerpt: "Svatko može rezervirati prostor i naručiti tortu. Ali pravi čarobnjaci organizacije znaju da su najmanji detalji oni koji stvaraju najveće uspomene. Evo kako postati jedan od njih.",
    content: `
## Zašto gosti pamte sitnice

Zamislite dvije proslave.

**Proslava A:** Lijep prostor, ukusna hrana, ugodna muzika. Sve je "u redu".

**Proslava B:** Prosječan prostor, prosječna hrana. Ali - na svakom mjestu čeka ručno napisana poruka zašto je taj gost poseban. Playlist uključuje pjesme koje znače nešto slavljeniku. Fotografije iz zajedničkih uspomena ukrašavaju zidove.

Koju proslavu pamtite za godinu dana?

Personalizacija nije o budžetu. Ona je o pažnji.

## Elementi koje možete personalizirati

### 1. Pisane riječi

- **Place cards sa značenjem** - Umjesto samo imena, dodajte kratku rečenicu: "Hvala što si bila uz mene kada..."
- **Menu opisi** - "Ovo je recept od baka Fatime" znači više od "Tradicionalni kolač"
- **Zahvalnice** - Personalizirane, ne generičke

### 2. Vizualni elementi

- **Photo journey** - Kronologija fotografija slavljenika
- **Memory map** - Zid sa mjestima koja znače nešto
- **Artwork gostiju** - Zamolite goste da unaprijed pošalju crtež ili poruku

### 3. Audio iskustvo

- **Their song playlist** - Pjesme koje znače nešto slavljeniku
- **Voice messages** - Gosti unaprijed snime poruke za reprodukciju
- **Osobni DJ** - Glazba koja prati priču večeri

### 4. Okusna personalizacija

- **Signature cocktail** - Nazvan po slavljeniku
- **Memory menu** - Jela iz važnih trenutaka života
- **Allergy awareness** - Zapamtiti potrebe svakog gosta

### 5. Interaktivni elementi

- **Custom quiz** - "Koliko dobro poznaješ _____?"
- **Bucket list stanica** - Gosti dodaju željene avanture
- **Time capsule** - Poruke za budućnost

## Primjeri iz stvarnog života

### Djevojačka večer za ljubiteljicu putovanja
- Svaka dekoracija predstavlja zemlju koju je posjetila
- Kokteli nazvani po gradovima
- Gosti dijele priče sa zajedničkih putovanja

### Rođendan za mamu koja voli vrt
- Žive biljke umjesto rezanog cvijeća (koje odnosi kući)
- Menu baziran na povrću iz njenog vrta
- Svaki gost donosi sjemenku za sadnju

### Baby shower za parove koji su se upoznali online
- Dekoracija sa "matching" elementima
- Timeline njihove online priče
- Gosti pogađaju screenshot njihovih prvih poruka

## Kako prikupiti informacije

Ne možete personalizirati bez poznavanja detalja.

**Tajno istraživanje:**
- Pitajte bliske osobe za omiljene stvari
- Pregledajte stare fotografije
- Primijetite šta ih čini sretnima

**Direktno pitanje (za vlastitu proslavu):**
- "Koja pjesma te vraća u sretno vrijeme?"
- "Koje jelo te podsjeća na djetinjstvo?"
- "Tko su ljudi bez kojih ne možeš zamisliti slavlje?"

## Budžet nije izgovor

Personalizacija ne mora koštati više:

**Besplatno:**
- Rukom pisane poruke
- Playlist kreacija
- Fotografije iz prošlosti
- Priče i sjećanja

**Nisko budžet:**
- DIY dekoracija s osobnim značenjem
- Potluck style sa pričama iza jela
- Personalizirani printani materijali

## Zamke koje treba izbjeći

❌ **Over-personalizacija** - Previše insiderskih referenci alienira goste koji nisu "u temi"

❌ **Neugodne uspomene** - Provjerite da reference nisu bolne za nekoga

❌ **Kompliciranost** - Ako zahtijeva objašnjenje od 5 minuta, vjerojatno je previše

## Zaključak: Srce svake personalizacije

Na kraju, personalizacija se svodi na jedno pitanje:

"Kako mogu pokazati ovoj osobi da je viđena, cijenjena i voljena?"

Odgovor na to pitanje vodi do detalja koji ostaju u srcu zauvijek.

Ne trebate veliki budžet. Trebate veliku pažnju.

I to je nešto što novac ne može kupiti - ali ljubav može stvoriti.
    `,
    category: "Savjeti",
    author: "The Stage Tim",
    publishedAt: "2024-11-05",
    readTime: 8,
    featured: false,
    image: "/src/assets/gallery/birthday-1.jpg",
    tags: ["personalizacija", "detalji", "organizacija", "proslave", "savjeti"]
  },
  {
    id: "10",
    slug: "team-building-aktivnosti-koje-zaposlenici-zapravo-zele",
    title: "Team Building koji Zaposlenici Neće Mrziti: Aktivnosti koje Zaista Povezuju",
    excerpt: "Priznajte - riječ 'team building' izaziva kolektivni uzdah u vašem uredu. Ali ne mora biti tako. Otkrijte kako organizirati okupljanje koje će ljudi stvarno željeti ponoviti.",
    content: `
## Hajde da budemo iskreni

Tradicionalni team building ima lošu reputaciju. I uglavnom zasluženo.

"Obvezna zabava" je oksimoron. Trust fall vježbe nisu spojile nikog osim onih koji su zajedno padali. I ne, još jedan pub quiz neće riješiti komunikacijske probleme u timu.

Ali team building - pravi, efektivan team building - može učiniti čuda. Pod uvjetom da se radi ispravno.

## Zašto većina team buildinga propada

**Problem #1: Prisila**
"Obvezno prisustvo" ubija atmosferu prije nego što je počela.

**Problem #2: Nerelevantne aktivnosti**
Paintball za tim računovođa? Zašto?

**Problem #3: Ignoriranje introverata**
Glasne, natjecateljske aktivnosti pogoduju samo ekstravertima.

**Problem #4: Fokus na zabavu, ne na svrhu**
Zabava koja ne gradi ništa je samo trošenje budžeta.

## Šta zapravo funkcionira

### Kreativne radionice

**Sip & Paint za timove:**
- Egalitarno iskustvo - svi su jednako (ne)sposobni
- Razgovori teku prirodno dok ruke rade
- Svačiji rezultat je drugačiji - metafora za tim
- Opuštena atmosfera ruši hijerarhijske barijere

**Kulinarsko iskustvo:**
- Zajednički cilj (napraviti jelo)
- Prirodna podjela uloga
- Dijeljenje rezultata (bukvalno)

### Rješavanje problema bez pritiska

**Escape room elementi:**
- Zahtijeva suradnju
- Različite vještine dolaze do izražaja
- Vremenski ograničeno ali bez pravog stresa

### Dijeljenje priča

**Format "Life story":**
- Svaki član tima dijeli 3 minute o nečemu osobnom
- Nevjerovatno efektivno za stvaranje empatije
- Iznenađujuće koliko malo znamo jedni o drugima

## Framework za planiranje

### Korak 1: Definirajte svrhu
- Integracija novih članova?
- Poboljšanje komunikacije?
- Nagrađivanje nakon velikog projekta?
- Svaka svrha zahtijeva drugačiji pristup.

### Korak 2: Poznajte svoj tim
- Dob i interesi
- Introvertni vs. ekstrovertni omjer
- Fizička ograničenja
- Kulturne osjetljivosti

### Korak 3: Odaberite pravi format
- Pola dana ili cijeli dan?
- Radnim danom ili vikendom?
- U radnom prostoru ili van njega?

### Korak 4: Ostavite prostor za izbor
- Različite aktivnosti za različite tipove
- Mogućnost povlačenja bez stigme
- Fleksibilno vrijeme dolaska/odlaska

## Aktivnosti koje preporučujemo

### Za timove do 10 ljudi
- **Tematska večer** (Italian Night style) - intimna, opuštena
- **Grupni Sip & Paint** - kreativan, efikasan icebreaker
- **Privatna kulinarska radionica** - kolaborativna, s opipljivim rezultatom

### Za timove 10-25 ljudi
- **Rotacijske radionice** - različite stanice, miješanje grupa
- **Zajednička umjetnička instalacija** - svi doprinose jednom djelu
- **Story slam format** - svako dijeli, svi slušaju

### Za veće grupe
- **Festival format** - različite aktivnosti, slobodan izbor
- **Hibridni eventi** - kombinacija zajedničkih i opcionalnih elemenata

## Mjerenje uspjeha

Ne možete uvijek mjeriti "povezanost". Ali možete pratiti:

**Neposredno:**
- Anketa zadovoljstva (anonimna!)
- Primijetite li ljude kako razgovaraju koji inače ne razgovaraju?
- Fotografije - izgledaju li ljudi opušteno?

**Dugoročno:**
- Poboljšana međutimska komunikacija?
- Manje neugodne tišine u zajedničkim prostorima?
- Spominju li zaposlenici event pozitivno?

## Česta pitanja

**"Treba li team building biti obvezatan?"**
Idealno ne. Ali ako mora - napravite ga toliko dobrim da će ljudi poželjeti doći.

**"Alkohol da ili ne?"**
Opcija, nikad prisila. I uvijek bezalkoholne alternative.

**"Koliko često?"**
Kvaliteta > kvantiteta. Jedan odličan event godišnje pobjeđuje četiri prosječna.

## Zaključak

Team building nije trošak. To je investicija u ljude koji čine vašu organizaciju.

Ali kao svaka investicija - može se utrošiti pametno ili baciti u vjetar.

Sljedeći put kad planirate, zapitajte se: "Bih li JA želio/la ići na ovo?"

Ako je odgovor "ne" - radite iznova.

Ako je "da" - na pravom ste putu.
    `,
    category: "Korporativno",
    author: "The Stage Tim",
    publishedAt: "2024-10-28",
    readTime: 9,
    featured: false,
    image: "/src/assets/services/presentations-events.jpg",
    tags: ["team building", "korporativno", "zaposlenici", "aktivnosti", "sarajevo"]
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(blogPosts.map(post => post.category))];
};
