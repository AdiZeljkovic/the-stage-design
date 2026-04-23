import { getBlogImage } from '@/lib/blogImages';

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
  tags: string[];
}

// Helper function to get post with resolved image
export interface BlogPostWithImage extends BlogPost {
  image: string;
}

export const getPostImage = (post: BlogPost): string => {
  return getBlogImage(post.slug, post.category);
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "djevojacka-vecer-sarajevo-kompletni-vodic",
    title: "Djevojačka večer u Sarajevu: sve što trebate znati za nezaboravnu proslavu",
    excerpt: "Organizirate djevojačku večer za svoju najbolju prijateljicu? Otkrijte kako stvoriti večer o kojoj će se pričati godinama - od izbora lokacije do aktivnosti koje će oduševiti svaku buduću mladenku.",
    content: `Kad je Amina nazvala svoje četiri najbliže prijateljice s vijesti o zarukama, prva misao svake od njih bila je ista: kako joj priuštiti [djevojačku večer](/usluge/djevojacke) kakvu zaslužuje? Ovo pitanje, naizgled jednostavno, u sebi krije čitav labirint odluka, kompromisa i kreativnih izazova s kojima se suoči svaka kuma, svaka djeveruša, svaka grupa prijateljica koja želi da njihova buduća mladenka osjeti koliko je voljena.

Tradicija djevojačkih večeri seže daleko u prošlost, ali ono što danas smatramo "pravom" djevojačkom večeri ima malo veze s obredima naših baka. Statistike pokazuju da prosječna djevojačka večer u Europi danas uključuje između 8 i 12 gostiju, traje od 4 do 8 sati, a fokus se sve više pomiče s pukog "provoda" prema stvaranju autentičnih uspomena. Istraživanje provedeno 2023. godine pokazalo je da čak 78% ispitanica kao najvažniji element uspješne djevojačke večeri navodi "osjećaj posebnosti i pažnje", dok je samo 23% stavilo naglasak na "zabavu u klasičnom smislu".

Što to govori o modernoj djevojačkoj večeri? Prije svega, da su plastične krune iz kineske radnje definitivno prošlost. Da obilazak bučnih klubova sve više izgleda zamorno. Da neugodne igre koje nitko zapravo ne želi igrati polako nestaju iz repertoara. Moderna djevojačka večer personalizirana je do najmanjeg detalja, fokusirana na kvalitetno vrijeme umjesto na količinu aktivnosti, vizualno atraktivna ali istovremeno autentična, opuštena a opet posebna.

Lokacija je, bez ikakve sumnje, najvažnija odluka koju ćete donijeti. Istraživanja konzistentno pokazuju da 73% gostiju pamti lokaciju događaja bolje od bilo kojeg drugog elementa, čak bolje od hrane, aktivnosti ili poklona. Mjesto gdje slavite doslovno definira cijelo iskustvo. Intimni [privatni prostor](/usluge/najam) samo za vašu grupu, bez radoznalih pogleda stranaca, s mogućnošću prilagodbe dekoracije vašoj viziji, ambijentom koji se može transformirati od glamuroznog do ležernog, i centralnom lokacijom koja svim gostima olakšava dolazak — to je formula koja nikad ne iznevjeri.

U srcu Sarajeva, The Stage nudi upravo takav prostor. Kada uđete, prva stvar koju primijetite jest osvjetljenje — toplo, prilagodljivo, dizajnirano da svaka fotografija izgleda kao da ju je snimio profesionalac. Zidovi mogu biti vaše platno — bilo da želite elegantnu minimalističku atmosferu ili eksploziju boja i balona. Prostor je dovoljno velik da svi mogu plesati, ali dovoljno intiman da se razgovor čuje bez vikanja.

Što se aktivnosti tiče, prestanite guglati "igre za djevojačku večer". Većina tih prijedloga zastarjela je za barem desetljeće. Ono što zaista funkcionira su kreativne radionice poput [Sip & Paint](/usluge/sip-paint) večeri, koje su postale hit iz dobrog razloga. Zamislite: svaka prijateljica slika svoje djelo uz čašu vina, razgovor teče prirodno bez prisilnih "ice-breakera", a na kraju mladenka odlazi kući s unikatnim umjetničkim djelima svojih najbližih. Te slike postaju uspomena koja traje godinama, visi na zidu novog doma, podsjeća na večer punu smijeha.

[Profesionalno šminkanje](/usluge/sminkanje) za cijelu ekipu transformira obično druženje u pravi glamur event. Rezultat su fotografije koje izgledaju kao s naslovnice — bez filtera, bez aplikacija za uređivanje, samo profesionalna tehnika i kvalitetni proizvodi. Zamislite album s djevojačke večeri gdje svaka od vas izgleda poput modela. To nije luksuz rezerviran za poznate — to je dostupno, i zaslužujete to.

Tajna uspješnog budžeta nije u trošenju više novca, već u pametnijem trošenju. Investirajte u kvalitetnu lokaciju s uključenom dekoracijom, jer ćete uštediti sate posla i stresa. Odlučite se za jednu "wow" aktivnost umjesto pet prosječnih, jer jedna nezaboravna uspomena vrijedi više od pet "okej" trenutaka. Profesionalne fotografije nisu trošak nego investicija — za godinu dana nećete žaliti ni jednu marku potrošenu na kvalitetne slike. S druge strane, možete uštedjeti na pozivnicama koristeći Canvu, organizirati potluck sistem za grickalice, i zamijeniti DJ-a pažljivo kreiranom Spotify playlistom.

Aminina djevojačka večer završila je u 2 ujutro. Nitko nije želio otići. Godinu dana kasnije, na njenom vjenčanju, svaka prijateljica u svom govoru spomenula je tu večer. To je moć dobro osmišljene proslave — nije u savršenstvu, već u stvaranju trenutaka koji ostaju. Vaša prijateljica to zaslužuje. I vi to možete stvoriti.

`,
    category: "Djevojačke večeri",
    author: "The Stage Tim",
    publishedAt: "2025-12-28",
    readTime: 7,
    featured: true,
    tags: ["djevojačka večer", "sarajevo", "proslave", "mladenka", "organizacija"]
  },
  {
    id: "2",
    slug: "djecji-rodjendan-ideje-koje-djeca-obozavaju",
    title: "Dječji rođendan koji vaše dijete neće zaboraviti: ideje koje roditelji često previde",
    excerpt: "Umjesto još jedne rođendanske zabave koju će dijete zaboraviti za tjedan dana, saznajte kako stvoriti magične trenutke koji će ostati urezani u sjećanje zauvijek.",
    content: `Pitala sam svoju desetogodišnju nećakinju koji joj je rođendan bio najbolji. Očekivala sam da će izabrati onaj s najvećom tortom, ili možda onaj s najviše poklona. Umjesto toga, bez razmišljanja je rekla: "Onaj gdje sam s prijateljicama slikala na platnu, jer sam se osjećala kao prava umjetnica."

Djeca ne pamte stvari. Pamte osjećaje. Ova jednostavna istina mijenja sve što znamo o organizaciji [dječjih rođendana](/usluge/rodjendani).

Razlog zašto klasične zabave više ne funkcioniraju leži u načinu na koji današnja djeca odrastaju. Okružena su konstantnom stimulacijom — YouTube, TikTok, videoigre, sve se natječe za njihovu pažnju svake sekunde dana. Još jedan balon i papirna kapa? To je pozadinska buka. Da biste zaista zarobili pažnju djeteta i stvorili uspomenu koja traje, morate razumjeti što djeca stvarno žele: biti heroj priče, ne pasivni promatrač; stvoriti nešto svojim rukama; osjećaj avanture i otkrića; kvalitetno vrijeme s prijateljima bez ekrana.

Kreativne radionice s "odnesi kući" rezultatom pokazale su se iznimno uspješnima. Djeca obožavaju odnositi nešto što su sami napravili. Organizirajte radionicu slikanja, izrade nakita, ili ukrašavanja kolačića. Psihološka istraživanja potvrđuju zašto ovo funkcionira: svaki put kad dijete pogleda svoju kreaciju, aktivira se isti dio mozga koji je bio aktivan tijekom stvaranja. Ta slika na zidu dječje sobe nije samo dekoracija — to je okidač za ponovno proživljavanje sreće s tog posebnog dana.

Transformacija prostora u potpuno drugu realnost ima magičan učinak na dječju maštu. Podmornica, svemirska stanica, čarobnjačka škola — kada djeca uđu u prostor koji je kompletno transformiran, osjećaju da su ušla u drugi svijet. Na The Stage nudimo mogućnost kompletne tematske dekoracije — od inicijalne ideje do finalne realizacije. Roditelji često dolaze s vizijom, a mi je pretvaramo u stvarnost. Jedan otac nedavno je rekao: "Kad je moja kći ušla i vidjela prostor pretvoren u dvorac iz njene omiljene bajke, izraz na njenom licu bio je neprocjenjiv."

[Profesionalno šminkanje](/usluge/sminkanje) za djecu potpuno je drugačije iskustvo od kućnih bojica iz supermarketa. Transformacija u omiljenog lika stvara čaroliju koju je teško opisati riječima. Kada petogodišnjakinja pogleda u ogledalo i vidi princezu, ili kada sedmogodišnjak ugleda Spider-Mana koji gleda natrag — to je trenutak čiste magije.

Tri su greške koje morate izbjeći po svaku cijenu. Prva je previše aktivnosti — djeca postaju prenadražena, a tri dobro organizirane aktivnosti uvijek su bolje od sedam nabrzinu izvedenih. Druga je ignoriranje dobnih razlika među gostima — stariji se dosađuju dok mlađi ne mogu pratiti, pa je rješenje osmisliti paralelne aktivnosti prilagođene različitim uzrastima. Treća greška je zaboravljanje roditelja — neugodni roditelji stvaraju nervoznu djecu, zato je bitno osigurati ugodnu zonu za odrasle s kavom i kolačima dok djeca uživaju.

Dilema između organizacije kod kuće i profesionalnog prostora zapravo nije tako teška kad se sagleda šira slika. Organizacija kod kuće je besplatna, ali donosi čišćenje prije i poslije, stres od potencijalne štete na namještaju, i ograničen prostor za aktivnosti. S druge strane, [profesionalni prostor](/usluge/najam) nudi sigurno okruženje dizajnirano za djecu, dekoraciju koja je uključena u cijenu, nula stresa s pospremanjem, i profesionalnu podršku tijekom cijelog događaja.

Vaše dijete neće pamtiti koliko je koštala torta. Neće pamtiti brand poklona. Pamtit će trenutak kad se osjećalo posebno, kad su svi bili tu samo za njega, kad je prostor bio čaroban. To nije moguće kupiti, ali moguće je stvoriti.

`,
    category: "Rođendani",
    author: "The Stage Tim",
    publishedAt: "2025-12-26",
    readTime: 8,
    featured: true,
    tags: ["dječji rođendan", "ideje", "organizacija", "sarajevo", "proslave"]
  },
  {
    id: "3",
    slug: "baby-shower-moderna-proslava-trudnice",
    title: "Baby shower u BiH: vodič za modernu proslavu koju će buduća mama obožavati",
    excerpt: "Baby shower više nije američki trend — postala je tradicija koju bosanske žene prihvataju svim srcem. Saznajte kako organizirati proslavu koja će rasplakati buduću mamu od sreće.",
    content: `Lejla je bila u sedmom mjesecu trudnoće kada ju je sestra iznenadila. "Mislila sam da idemo na ručak", rekla mi je kasnije, još uvijek sa suzama u očima. "Umjesto toga, ušla sam u prostor pun mojih najbližih prijateljica, balone u obliku oblaka, stol pun poklona za moju bebu. Plakala sam sat vremena. Od sreće."

Ovo je moć dobro organiziranog [baby showera](/usluge/baby-shower). To nije samo američki trend koji smo preuzeli — postala je tradicija koju bosanske žene prihvataju svim srcem, prilagođavajući je našem mentalitetu i običajima.

Da budemo praktični na trenutak: bebe trebaju mnogo stvari. Pelene, odjeća, oprema, kosmetika, namještaj. Baby shower definitivno pomaže financijski. Ali pravi značaj ove proslave ide daleko dublje od materijalnog. Baby shower je ritual prelaska — označavanje transformacije žene u majku, jedna od najvećih promjena koje ljudsko biće može doživjeti. To je demonstracija mreže podrške, pokazivanje budućoj mami da nije sama u onome što dolazi. To je vrijeme posvećeno njoj, prije nego što apsolutno sve postane o bebi. I to je stvaranje zajednice — povezivanje ljudi koji će biti dio djetetovog života.

Idealno vrijeme za organizaciju je između 32. i 36. tjedna trudnoće. Zašto baš tada? Buduća mama još uvijek se osjeća dovoljno energično za uživanje u proslavi, ali je već dovoljno blizu porodu da uzbuđenje bude na vrhuncu. Trbuh je vidljiv, spol je vjerojatno poznat, i emocionalna povezanost s bebom doseže intenzitet koji čini svaki poklon, svaku poruku, svaki zagrljaj višestruko značajnijim.

Tematske proslave mogu biti prekrasne, ali nisu obavezne. "Ready to Pop" tema s balonima i veselom atmosferom uvijek je siguran izbor. Oblaci i zvijezde nude neutralnu eleganciju koja funkcionira bez obzira na spol bebe. Safari životinje su idealne ako se spol ne otkriva do rođenja. Čarobna šuma donosi romantičan i magičan ugođaj. Zlatno pravilo glasi: neka sve bude suptilno usklađeno, ne pretjerano tematski. Elegancija uvijek pobjeđuje karnevalski izgled.

Trend kombiniranja baby showera s otkrivanjem spola raste iz godine u godinu. Prednosti su očite: jedan veliki event umjesto dva, veće iznenađenje s više emocija, praktičnije za goste koji putuju. Međutim, ponekad ima smisla odvojiti ove dvije proslave — ako želite intimniju atmosferu samo za žene, ili ako gender reveal uključuje širu porodicu dok baby shower ostaje u užem krugu.

Zaboravite dosadne igre pogađanja opsega trbuha koje su svi vidjeli stotinu puta. Ono što zaista stvara uspomene je stanica za poruke budućnosti, gdje svaki gost piše poruku za bebu koju će pročitati na određeni rođendan — prvi, peti, osamnaesti. Zamislite emocije kada ta pisma stignu! Knjiga savjeta, gdje gosti umjesto potpisivanja generične čestitke popunjavaju stranice svojih roditeljskih iskustava, smiješnih anegdota i želja, postaje neprocjenjiva obiteljska relikvija. DIY stanica za ukrašavanje bodića ili pravljenje mobilea za krevetić omogućava gostima da stvore nešto personalizirano, s ljubavlju.

Lokacija čini ogromnu razliku. Organizacija kod kuće ima svoj šarm, ali [profesionalni prostor](/usluge/najam) nudi nešto što dom jednostavno ne može: neutralan teren gdje se gosti osjećaju kao gosti a ne kao posjetitelji nečijeg doma, profesionalnu dekoraciju bez stresa dan prije, savršene fotografije zahvaljujući rasvjeti i pozadinama osmišljenima za tu svrhu, i osjećaj posebnosti — jer ona zaista jest posebna.

Kada ta mala beba jednog dana pita: "Mama, jesam li bila željena?", pokazat ćete joj fotografije s baby showera. I odgovor će biti kristalno jasan.`,
    category: "Baby Shower",
    author: "The Stage Tim",
    publishedAt: "2025-12-24",
    readTime: 9,
    featured: false,
    tags: ["baby shower", "trudnoća", "proslava", "organizacija", "sarajevo"]
  },
  {
    id: "4",
    slug: "sip-and-paint-kreativnost-druzenje-sarajevo",
    title: "Sip & Paint: zašto je ovo postala najtraženija grupna aktivnost u Sarajevu",
    excerpt: "Niste umjetnik? Savršeno. Upravo zato ćete obožavati Sip & Paint. Otkrijte zašto tisuće Sarajlija zamjenjuju klasične izlaske ovom jedinstvenom kombinacijom kreativnosti i druženja.",
    content: `Kada je Maja predložila [Sip & Paint](/usluge/sip-paint) za svoj trideseti rođendan, reakcije prijateljica bile su predvidljivo skeptične. "Ja ne znam crtati." "Bit će neugodno." "Zar ne možemo jednostavno u restoran?" Tri sata kasnije, ista ta grupa postavljala je svoje slike na Instagram s komentarima poput: "Gdje je ovo bilo cijeli moj život?"

Koncept je jednostavan ali genijalan. Ulazite u prostor s ugodnim osvjetljenjem. Pred vama je platno, boje i kistovi — sve postavljeno i spremno. U ruci čaša omiljenog pića. Instruktor vas korak po korak vodi kroz stvaranje slike. Dva sata kasnije gledate u svoje djelo i ne možete vjerovati da ste ga vi napravili. Vaše prijateljice reagiraju isto. Instagram dobiva novu objavu koju ljudi zaista lajkaju, ne iz pristojnosti nego iz iskrenog divljenja.

Tajna zašto ovo funkcionira čak i ako "nemate talenta" leži u metodi. Profesionalni instruktor razbija složenu sliku na jednostavne, lako pratljive korake. Svaki korak je toliko jasan da ga doslovno svatko može izvesti. A opet, svačije platno na kraju izgleda jedinstveno — jer ste vi jedinstveni, vaš potez kista nosi vaš rukopis, vaš izbor nijansi odražava vašu osobnost. Nema pogrešnih poteza u Sip & Paint svijetu. Slučajna mrlja? Umjetnički izraz. Boje se pomiješale neočekivano? Upravo ste stvorili gradient koji niste planirali, ali izgleda fantastično.

Za [djevojačke večeri](/usluge/djevojacke), Sip & Paint nudi alternativu koja postaje sve popularnija. Umjesto još jednog kluba gdje se ne čujete od muzike, sjedite u ugodnom prostoru, razgovarate, smijete se i stvarate. Na kraju večeri imate umjetnička djela i fotografije koje nisu zamućene od lošeg osvjetljenja ili pretjeranog bljeska. Mladenka odlazi kući s kolekcijom unikatnih slika od svojih najbližih, uspomenom koja će krasiti zidove njenog novog doma.

Za team building aktivnosti, Sip & Paint je rijetka iznimka od pravila da "obvezno druženje" nitko ne želi. Hijerarhija nestaje kad svi pokušavaju nacrtati isto drvo. Direktor se bori s perspektivom jednako kao i pripravnik. Razgovori teku prirodno jer ruke rade nešto opuštajuće. Nitko ne gleda na sat, nitko ne čeka da završi. Na The Stage organiziramo korporativne Sip & Paint večeri koje su postale najtraženiji format team buildinga — jer ljudi zapravo žele doći.

Za romantične večeri, parovi otkrivaju novu dimenziju zajedničkog vremena. Umjesto još jedne večere u restoranu gdje gledate u telefone između jela, stvarate nešto zajedno. Dvije slike, dva pogleda na istu temu — savršen simbol veze. Mnogi parovi koje smo ugostili kažu da im je ta večer pokazala novu stranu partnera, kreativnu stranu koju nisu znali da postoji.

Što trebate ponijeti sa sobom? Apsolutno ništa. Ozbiljno. Sav materijal je uključen: platno profesionalne kvalitete, akrilne boje i kistovi, zaštitna pregača, piće po izboru. Jedino što trebate donijeti je otvoren um i spremnost za zabavu.

Skupite ekipu. Odaberite datum. Za dva sata, držat ćete u rukama vlastitu sliku i pitati se zašto ovo niste probali prije. Umjetnik ili ne — večer koju ćete pamtiti vas čeka.`,
    category: "Aktivnosti",
    author: "The Stage Tim",
    publishedAt: "2025-12-22",
    readTime: 7,
    featured: true,
    tags: ["sip and paint", "kreativnost", "druženje", "sarajevo", "team building"]
  },
  {
    id: "5",
    slug: "profesionalno-sminkanje-savjeti-strucnjaka",
    title: "Profesionalno šminkanje: tajne koje makeup artisti rijetko otkrivaju",
    excerpt: "Nakon stotina lica i nebrojenih posebnih prilika, naša šminkerica otkriva što zaista čini razliku između makeup-a koji traje i onog koji nestaje do ponoći.",
    content: `Sara je za svoje vjenčanje gledala 47 YouTube tutorijala. Kupila je identične proizvode. Pratila iste korake, pauzirala video, primjenjivala, ponavljala. Rezultat na dan vjenčanja? "Zašto ne izgleda kao na videu?" Nije do nje. Je do konteksta koji tutorijali nikad ne pokazuju.

Profesionalci znaju jednu stvar koju amateri redovito podcjenjuju: priprema kože je pola posla. Makeup je dobar onoliko koliko je dobro platno na kojem počiva. Sedamdeset dva sata prije velikog dana trebali biste izbjegavati nove proizvode zbog moguće alergijske reakcije, piti više vode nego inače, i napraviti laganu eksfolijaciju — ali ne dan prije. Sat vremena prije samog šminkanja koža mora biti čista i hidratizirana, primer mora odgovarati vašem tipu kože, i nikakve teške kreme neposredno prije nanošenja baze.

Svatko ne treba iste proizvode za svaku priliku. Za fotografiranje su ključni HD puderi bez refleksije i vodootporne formule jer bljesak kamere nemilosrdno otkriva svaku nesavršenost. Za večernji izlazak trebate više pigmenta i highlighter koji hvata svjetlo i stvara dimenziju. Za svakodnevicu su idealne lagane teksture i višenamjenski proizvodi koji štede vrijeme.

Razlog zašto makeup izgleda sjajno u kupaonici a čudno na fotografijama? Osvjetljenje mijenja apsolutno sve. Toplo osvjetljenje zahtijeva hladnije tonove makeup-a. Hladno osvjetljenje traži toplije nijanse. Bljesak fotoaparata zahtijeva specijaliziranu tehniku i izbjegavanje proizvoda s SPF-om koji stvaraju bijeli odsjaj na slikama.

Najčešća greška amaterskog šminkanja je previše slojeva. Više proizvoda ne znači bolji rezultat — često znači upravo suprotno. Profesionalci grade makeup polako, sloj po sloj, procjenjujući nakon svakog koraka. Lakše je dodati nego oduzeti, i to je zlatno pravilo koje biste trebali usvojiti.

[Profesionalno šminkanje](/usluge/sminkanje) za grupne događaje poput [djevojačkih večeri](/usluge/djevojacke) ima svoja posebna pravila. Rezervirajte više vremena nego što mislite da trebate jer uvijek se dogodi nešto nepredviđeno. Počnite od osoba s najjednostavnijim zahtjevima i ostavite mladenku ili slavljenicu za kraj. Fotografije radite tek kada su svi potpuno gotovi, jer ćete u suprotnom imati neusklađene slike.

Za vjenčanje ili veliku proslavu, planirajte da makeup bude gotov najmanje sat i pol prije nego što trebate izgledati savršeno. Razlog je jednostavan: proizvodi se trebaju "slegati", a prvih 30 minuta nakon nanošenja lice se prilagođava. Taj period mirovanja čini razliku između makeup-a koji izgleda nanesen i makeup-a koji izgleda kao vaša koža — samo bolje.

"Zašto bih platila profesionalno šminkanje kad imam YouTube?" Zato što profesionalac vidi vaše lice objektivno, posjeduje kvalitetnije proizvode nego što ih možete kupiti u drogeriji, zna kako lice reagira na bljesak, suze, znoj, i oslobađa vas stresa na vaš veliki dan. Zamislite: umjesto da tri sata prije svadbe nervozno popravljate eyeliner, opušteno pijete kahvu dok stručnjak radi svoje.

Profesionalno šminkanje nije luksuz. To je investicija u samopouzdanje. Zaslužujete pogledati fotografije za godinu dana i pomisliti: "Bila sam prelijepa."`,
    category: "Ljepota",
    author: "The Stage Tim",
    publishedAt: "2025-12-20",
    readTime: 8,
    featured: false,
    tags: ["šminkanje", "makeup", "savjeti", "profesionalno", "ljepota"]
  },
  {
    id: "6",
    slug: "italian-night-sarajevo-kulinarska-avantura",
    title: "Italian Night u Sarajevu: kada Toskana dođe do vas",
    excerpt: "Ne trebate avion do Italije za autentično iskustvo. Otkrijte kako jedna večer može prenijeti duh Mediterana direktno u srce Sarajeva — hrana, muzika, atmosfera i la dolce vita.",
    content: `Zatvorite oči na trenutak. Miris svježe pečene focacce ispunjava prostor. Zvuk talijanske glazbe u pozadini stvara atmosferu koja vas transportira stotinama kilometara južnije. Čaša Chianti vina u ruci, hladna i teška. Smijeh prijatelja oko dugačkog stola prekrivenog bijelim stolnjakom. To nije luksuzni odmor koji si ne možete priuštiti. To je [Italian Night](/usluge/italian-night) večer koju možete imati ovdje, sada, u srcu Sarajeva.

Ne govorimo o pizzi iz dostave i kariranim stolnjacima iz Ikee. Pravi Italian Night je uranjanje u kulturu — od hrane, preko muzike, do načina druženja koji definira talijanski pristup životu. Italijani ne jedu da bi preživjeli, oni žive da bi jeli. To je filozofija koju donosimo u svaku večer, i vjerujte — osjetit ćete razliku od prvog zalogaja.

Antipasti nisu predjelo — to je pozivnica za razgovor. Stol pun malih zdjelica: masline s Jadrana, sušena rajčica iz Apulije, bruschetta sa svježim bosiljkom, carpaccio koji se topi na jeziku, burrata koja pušta mliječnu kremu pod prstima. Svatko uzima po malo od svega, razmjenjuju se komentari, prepričavaju se priče, i polako se gradi atmosfera večeri.

Primi piatti donosi tradiciju na tanjur. Carbonara sa savršeno kremastom teksturom, napravljena po receptu koji smo donijeli direktno iz Rima — bez vrhnja, samo jaja, guanciale, pecorino i papar. Risotto koji je promiješan toliko puta da je postao svilenkast, svako zrno riže nosi okus temeljca i parmezana. Pasta napravljena s ljubavlju, onako kako se radila generacijama prije nego što su supermarketi ponudili instant verzije.

Dolci završetak je koji pamtite danima. Tiramisu koji se topi na jeziku, slojevi mascarpone kreme i kahvom natopljenih savoyardi keksića stvaraju simfoniju okusa. Panna cotta s bobičastim voćem, kremasta i nježna. Cannoli hrskavi izvana, kremasti iznutra, upravo onakvi kakve biste pojeli na ulicama Palerma.

Talijanska večera nije samo u hrani — ona je u svemu oko nje. Dekoracija prostora uključuje topla svjetla koja podsjećaju na ulice Firence, svježe cvijeće na stolovima, eleganciju bez pretjerivanja. Muzika je pažljivo birana: klasični talijanski hitovi, jazz verzije poznatih pjesama, živahno ali ne pretjerano glasno da ometa razgovor. Dress code je elegantno ležeran — zamislite večeru na terasi u Toskani.

Za romantične večeri — godišnjice, proslave, ili jednostavno "nedostajao si mi" geste — ništa ne govori "volim te" kao ručno pravljeni gnocchi u društvu osobe koju volite. Za korporativne događaje s dušom, umjesto dosadnih poslovnih večera koje svi žele da što prije završe, iznenadite kolege iskustvom koje će prepričavati tjednima. Razgovori teku lakše uz dobro vino, a poslovni odnosi grade se upravo u ovakvim neformalnim trenucima.

Za okrugle brojke poput pedesetog [rođendana](/usluge/rodjendani) ili dvadeset pet godina braka, velike prilike zaslužuju velike geste. Italian Night nudi upravo to — večer koja se osjeća posebno od prvog do zadnjeg trenutka. Za prijateljska okupljanja, pogotovo kada se grupa dugo nije vidjela, atmosfera dugačkog stola potiče dijeljenje priča i stvaranje novih uspomena.

Na The Stage Italian Night, sve je uključeno u paket: privatni prostor samo za vašu grupu, autentični menu kreiran za ovu priliku, piće, kompletna transformacija prostora s dekoracijom, pažljivo odabrana muzička playlista, i fotografije za uspomenu. Minimalan broj gostiju je deset osoba, a idealna veličina grupe za pravu atmosferu dugačkog stola je između petnaest i dvadeset pet. Trajanje večeri je tri do četiri sata — jer kao pravi Italijani, ne žurimo. Vegetarijanske opcije, alergije, posebni zahtjevi — sve je moguće uz prethodnu najavu.

Italija nije samo mjesto na karti. To je stanje uma, način života gdje je hrana ljubav, razgovor umjetnost, a svaki obrok slavlje. Ne morate čekati odmor. Ne morate kupovati avionske karte. Italija dolazi k vama. Buon appetito!`,
    category: "Tematske večeri",
    author: "The Stage Tim",
    publishedAt: "2025-12-18",
    readTime: 7,
    featured: false,
    tags: ["italian night", "tematska večer", "hrana", "italija", "sarajevo"]
  },
  {
    id: "7",
    slug: "kako-odabrati-event-prostor-sarajevo",
    title: "Kako odabrati savršen event prostor u Sarajevu: vodič za pametne organizatore",
    excerpt: "Lokacija čini ili lomi događaj. Naučite koje greške izbjegavati i na što obratiti pažnju prije nego potpišete bilo što — savjeti od profesionalaca koji su vidjeli sve.",
    content: `Emina je rezervirala "savršen" prostor za svoju [djevojačku večer](/usluge/djevojacke). Na fotografijama je izgledao prekrasno — visoki stropovi, elegantna rasvjeta, stilski namještaj. U stvarnosti je čekalo razočarenje: bučan restoran gdje se jedva čula s prijateljicama, loše osvjetljenje koje je upropastilo svaku fotografiju, i osoblje koje ih je žurilo da završe jer je sljedeća grupa čekala. "Da sam znala na što obratiti pažnju", rekla mi je kasnije, "sve bi bilo potpuno drugačije."

Eminina priča nije rijetka. Upravo suprotno — to je iskustvo koje dijele mnogi organizatori koji su naučili teži put da lokacija doslovno čini ili lomi događaj. Možete imati savršen catering s Michelinovom zvjezdicom, prelijepu dekoraciju iz najekskluzivnije cvjećarne i najboljeg DJ-a u gradu. Ako prostor ne valja, ništa od toga neće spasiti vaš događaj.

Prostor određuje atmosferu koju gosti osjećaju čim uđu — i tu prvu impresiju nikad ne možete ponoviti. Određuje tok događaja i kako se ljudi prirodno kreću kroz prostor. Utječe na kvalitetu fotografija i videa jer loše osvjetljenje ne može popraviti ni najbolji fotograf. I na kraju, definira ukupni dojam koji ostaje tjednima i mjesecima nakon događaja.

Prije nego rezervirate bilo što, postoji sedam ključnih pitanja koja morate postaviti. Prvo, koja je stvarna kapacitet? Navedeni "prima do 50 ljudi" može značiti "50 ljudi može fizički stati" a ne "50 ljudi može udobno proslaviti". Pravilo je jednostavno: navedeni kapacitet smanjite za dvadeset posto za realistično udobno druženje.

Drugo, što je uključeno u cijenu? Jeftinija opcija često postaje skuplja kada počnete dodavati stavke. Stolovi i stolice su često ekstra. Dekoracija je gotovo uvijek ekstra. Audio oprema je iznenađujuće često ekstra. Čišćenje je ponekad naplativo. Tražite detaljnu, itemiziranu ponudu i uspoređujte jabuke s jabukama.

Treće, kakva su pravila za catering? Interni catering znači manje koordinacije ali može biti skuplje. Vanjski catering nudi više izbora ali zahtijeva više logistike. Vlastita hrana je najjeftinija opcija ali donosi najviše posla.

Četvrto, koliko vremena dobijate za pripremu i pospremanje? Ako vam treba dva sata za postavljanje dekoracije, a prostor dobijate trideset minuta prije početka — imate ozbiljan problem. Tražite minimalno sat do dva sata prije događaja i trideset do šezdeset minuta poslije.

Peto, kakvo je osvjetljenje? Ovo je pitanje koje većina ljudi zaboravi postaviti, a onda dobiju fotografije na kojima svi izgledaju umorno, blijedo, ili dvadeset godina starije. Posjetite prostor u vrijeme kada planirate održati događaj i provjerite kako svjetlo pada.

Šesto, kakva je akustika? Prostor s previše jeke čini vođenje normalnog razgovora nemogućim, a nezadovoljni gosti ne prave dobre proslave. Jednostavan test: prošetajte prostorom i razgovarajte normalnim glasom. Ako se morate derati da vas sugovornik čuje — tražite dalje.

Sedmo, koji je Plan B za loše vrijeme? Ako planirate bilo koji vanjski element, morate znati što se događa ako padne kiša.

Postoje crvene zastavice koje ne smijete ignorirati. "Provjerit ću i javim se" kao odgovor na osnovna pitanja — ako osoblje ne zna odgovor, nešto nije u redu. Nejasni ugovori gdje nije sve crno na bijelo napisano. Negativne recenzije o istim problemima — jedan nezadovoljan gost je iznimka, pet s identičnom pritužbom je obrazac. Pritisak za brzu odluku poput "samo danas imamo ovaj termin" je često prodajna taktika. I nedostatak referentnih fotografija — prostor koji izgleda dobro prazan možda ne izgleda dobro pun.

Savršeni prostor nije nužno najveći ili najskuplji. To je [prostor](/usluge/najam) koji priča priču i ima karakter, koji je fleksibilan i može se prilagoditi vašoj viziji, koji ima podršku — osoblje koje pomaže, ne ometa, i koji se osjeća privatno jer je vaš događaj za vaše goste.

Posjetite prostor osobno. Zamislite svoje goste unutra. Pitajte sve što vas zanima, čak i ako vam se čini glupo. Dobra lokacija olakšava sve ostalo. Loša otežava sve, bez obzira koliko truda uložite. Vaši gosti možda neće primijetiti savršen prostor. Ali će definitivno primijetiti loš.

`,
    category: "Savjeti",
    author: "The Stage Tim",
    publishedAt: "2025-12-16",
    readTime: 8,
    featured: false,
    tags: ["event prostor", "organizacija", "sarajevo", "savjeti", "lokacija"]
  },
  {
    id: "8",
    slug: "trendovi-u-proslavama-2025",
    title: "Trendovi u proslavama 2025: šta će gosti očekivati ove godine",
    excerpt: "Zaboravite sve što ste znali o tradicionalnim proslavama. Nova godina donosi nove standarde — evo šta vaši gosti očekuju i kako ostati ispred krivulje.",
    content: `Pandemija je promijenila sve. Uključujući, možda posebno, način na koji ljudi proslavljaju važne trenutke u životu. Oni koji su preživjeli periode izolacije sada žele više — više povezanosti, više značenja, više autentičnosti. Površna slavlja više jednostavno nisu dovoljna. Istraživanja pokazuju da je 67% ljudi nakon 2020. godine promijenilo prioritete kada su proslave u pitanju, stavljajući naglasak na kvalitetu iskustva umjesto na veličinu ili raskoš.

Najznačajniji trend koji vidimo u 2025. godini je pomak od stvari prema iskustvima. "Šta želiš za poklon?" postaje sve više irelevantno pitanje. Ljudi žele zajedničke aktivnosti poput [Sip & Paint](/usluge/sip-paint) večeri, radionica, cooking class događaja. Žele uspomene koje se dijele, priče za ispričati, fotografije koje pokazuju stvarne trenutke a ne namještene poze. Za organizatore to znači jedno: planirajte interaktivne elemente jer pasivno sjedenje je prošlost.

Intimnost pobjeđuje veličinu u svim segmentima. Mega svadbe s petsto gostiju polako izlaze iz mode. Nove proslave karakterizira manja lista gostiju gdje se fokus stavlja na kvalitetu umjesto na kvantitetu, dublje povezivanje jer ima vremena za svakog gosta, i veći budžet po osobi što rezultira boljim iskustvom za manje ljudi. Bolje je imati dvadeset gostiju koji će pamtiti večer zauvijek nego stotinu gostiju koji će zaboraviti događaj za mjesec dana.

Održivost više nije opcija nego očekivanje. Mlađe generacije to zahtijevaju, a starije počinju cijeniti praktičnost koja dolazi uz ekološki osviješten pristup. Manje otpada znači manje čišćenja. Lokalni caterers znači svježiju hranu s boljim okusom. Digitalne pozivnice su brže, jeftinije i jednako elegantne kao papirnate. Proslave koje ostavljaju hrpe plastičnog otpada počinju izgledati zastarjelo i neodgovorno.

Personalizacija je dosegla ekstreme koji su prije bili nezamislivi. Generične proslave osjećaju se hladno i bezdušno. Novi standard zahtijeva da dekoracija priča priču o slavljeniku, da menu reflektira ukuse a ne slijepo slijeđenje tradicije, da aktivnosti odgovaraju grupi a ne trenutnom trendu. [Djevojačke večeri](/usluge/djevojacke) i [rođendani](/usluge/rodjendani) koje organiziramo na The Stage potpuno se prilagođavaju viziji klijenta — ne nudimo gotove pakete nego gradimo svaku proslavu od nule.

Svjesnost o mentalnom zdravlju ulazi u prostor organizacije događaja. Proslave ne moraju biti stresne za organizatora ni za goste. Novi pristup uključuje tihe zone za introverte koji trebaju predah od socijalne stimulacije, jasnu komunikaciju očekivanja unaprijed, i prihvaćanje činjenice da savršenstvo nije cilj — autentičnost jest.

Instagram momenti su još uvijek važni, ali s značajnim zaokretom. Umjesto generičkih pozadina za selfije, traže se personalizirane foto instalacije koje imaju značenje za slavljenika. Umjesto namještenih poza, cijene se momenti koji se prirodno događaju i hvataju pravu emociju. Kvaliteta je pobijedila kvantitetu — jedna savršena fotografija vrijedi više od pedeset prosječnih.

Ironično, u doba najintenzivnije tehnologije koju je čovječanstvo ikad doživjelo, ljudi žele povratak klasici. Licem u lice razgovori bez pogleda u telefon. Igre bez ekrana koje uključuju smijeh i fizičku prisutnost. Sporo uživanje u hrani umjesto brzog fotografiranja jela. Prisutnost u trenutku umjesto gledanja događaja kroz ekran mobitela. Phone-free zone na proslavama postaju sve popularnije i sve traženije.

Kako primijeniti ove trendove? Ne morate implementirati sve. Pitajte se što odgovara vašoj specifičnoj grupi, što možete realistično izvesti s dostupnim budžetom i vremenom, i što će zaista poboljšati iskustvo umjesto da samo prati modu. 2025. će biti godina autentičnosti. Godina manje pretvaranja i više stvarnog povezivanja. Trendovi dolaze i odlaze, ali suština ostaje nepromijenjena već tisućljećima: okupiti ljude, stvoriti uspomene, proslaviti trenutke.`,
    category: "Trendovi",
    author: "The Stage Tim",
    publishedAt: "2025-12-14",
    readTime: 7,
    featured: false,
    tags: ["trendovi", "proslave", "2025", "organizacija", "eventi"]
  },
  {
    id: "9",
    slug: "personalizacija-proslave-detalji-koji-cine-razliku",
    title: "Personalizacija proslave: sitni detalji koji vaše goste ostavljaju bez riječi",
    excerpt: "Svatko može rezervirati prostor i naručiti tortu. Ali pravi čarobnjaci organizacije znaju da su najmanji detalji oni koji stvaraju najveće uspomene.",
    content: `Zamislite dvije proslave. Proslava A ima lijep prostor, ukusnu hranu, ugodnu muziku. Sve je tehnički "u redu", profesionalno izvedeno, bez greške. Proslava B ima prosječan prostor i prosječnu hranu. Ali na svakom mjestu čeka ručno napisana poruka zašto je baš taj gost poseban za slavljenika. Playlist uključuje pjesme koje znače nešto, koje bude uspomene. Fotografije iz zajedničkih trenutaka ukrašavaju zidove. Torta ima oblik nečega što samo najbliži razumiju.

Koju proslavu pamtite za godinu dana? Koju prepričavate prijateljima? Odgovor je uvijek isti, bez iznimke. Personalizacija nije o budžetu. Ona je o pažnji.

Elementi koje možete personalizirati su brojniji nego što većina ljudi pretpostavlja. Pisane riječi imaju nevjerojatnu moć. Place cards sa značenjem — umjesto samo imena, dodajte kratku rečenicu poput "Hvala što si bila uz mene kada mi je bilo najteže" ili "Sjećaš se onog vikenda u Mostaru?" Menu opisi koji kažu "Ovo je recept od baka Fatime" znače neizmjerno više od "Tradicionalni kolač". Zahvalnice koje su personalizirane, ne generički printane s istim tekstom za sve.

Vizualni elementi mogu transformirati prostor. Photo journey kroz godine slavljenika, od djetinjstva do danas, čini goste dijelom priče. Memory map sa značajnim mjestima — grad gdje se upoznao s partnerom, kafić gdje se sastaje s prijateljima, plaža s nezaboravnog odmora. Artwork koji su gosti unaprijed pripremili, čak i ako je dječji crtež, ima emocionalnu težinu koju kupljena dekoracija ne može dostići.

Audio iskustvo često se zapostavlja a ima ogroman utjecaj na atmosferu. Playlist sa pjesmama koje znače nešto — prva pjesma na koju ste plesali, hit s mature, pjesma koja je svirala kad ste se prvi put poljubili. Voice poruke od gostiju koji nisu mogli doći osobno dodaju emocionalnu dimenziju. Muzika koja prati tok večeri, od živahnijeg početka do mirnijeg završetka.

Okusna personalizacija je možda najsubtilnija ali i najpamtljivija. Signature cocktail nazvan po slavljeniku s sastojcima koje voli. Memory menu — jela iz važnih trenutaka života: torta po receptu pokojne bake, pašta koju je jeo na prvom putovanju u Italiju. Zapamtiti alergije i preferencije svakog gosta, bez da to oni moraju spominjati.

[Djevojačka](/usluge/djevojacke) za ljubiteljicu putovanja može uključivati dekoraciju gdje svaki element predstavlja zemlju koju je posjetila, koktele nazvane po gradovima, goste koji dijele priče sa zajedničkih avantura. [Rođendan](/usluge/rodjendani) za mamu koja voli vrt može imati žive biljke umjesto rezanog cvijeća koje ona odnosi kući, menu baziran na povrću iz njenog vrta, svakog gosta koji donosi sjemenku za sadnju. [Baby shower](/usluge/baby-shower) za par koji se upoznao online može uključivati timeline njihove digitalne ljubavne priče, goste koji pogađaju screenshot prvih poruka.

Kako prikupiti informacije za ovaj nivo personalizacije? Tajno istraživanje uključuje razgovor s bliskim osobama o omiljenim stvarima slavljenika, pregledavanje starih fotografija za inspiraciju, primjećivanje što ih čini sretnima u svakodnevici. Za vlastitu proslavu, direktno se pitajte: koja pjesma me vraća u sretno vrijeme? Koje jelo me podsjeća na djetinjstvo? Tko su ljudi bez kojih ne mogu zamisliti slavlje?

Budžet nije izgovor. Rukom pisane poruke su besplatne a neprocjenjive. Kreiranje playliste ne košta ništa osim vremena i ljubavi. Fotografije iz prošlosti već postoje, trebaju samo isprintati. Priče i sjećanja su besplatna i najvrednija.

Postoje zamke koje treba svjesno izbjeći. Over-personalizacija s previše insiderskih referenci može otuđiti goste koji nisu "u temi". Neugodne uspomene koje možda nisu sretne za nekoga od prisutnih. Kompliciranost — ako nešto zahtijeva objašnjenje od pet minuta, vjerojatno je previše.

Na kraju, personalizacija se svodi na jedno jednostavno pitanje: kako mogu pokazati ovoj osobi da je viđena, cijenjena i voljena? Odgovor na to pitanje vodi do detalja koji ostaju u srcu zauvijek.`,
    category: "Savjeti",
    author: "The Stage Tim",
    publishedAt: "2025-12-12",
    readTime: 8,
    featured: false,
    tags: ["personalizacija", "detalji", "organizacija", "proslave", "savjeti"]
  },
  {
    id: "10",
    slug: "team-building-aktivnosti-koje-zaposlenici-zapravo-zele",
    title: "Team building koji zaposlenici neće mrziti: aktivnosti koje zaista povezuju",
    excerpt: "Priznajte — riječ 'team building' izaziva kolektivni uzdah u vašem uredu. Ali ne mora biti tako. Otkrijte kako organizirati okupljanje koje će ljudi stvarno željeti ponoviti.",
    content: `Hajde da budemo potpuno iskreni jedni prema drugima. Tradicionalni team building ima lošu reputaciju. I uglavnom zasluženo. "Obvezna zabava" je oksimoron koji svatko prepoznaje. Trust fall vježbe nisu spojile nikog u povijesti korporativnog svijeta. I ne, još jedan pub quiz neće riješiti komunikacijske probleme u timu koji jedva razmjenjuje mailove.

Ali pravi team building može učiniti čuda za dinamiku tima. Pod uvjetom da se radi ispravno, s razumijevanjem što ljude zaista motivira i povezuje.

Zašto većina team building aktivnosti propada? Problem broj jedan je prisila. Kada nešto postane obavezno, atmosfera je mrtva prije nego događaj uopće počne. Ljudi dolaze s obrambenim stavom umjesto otvorenog uma. Problem broj dva su nerelevantne aktivnosti. Paintball za tim računovođa čiji najintenzivniji fizički napor je hod do printera? Problem broj tri je ignoriranje introverata. Aktivnosti dizajnirane za ekstroverte ostavljaju polovicu tima neugodno i iscrpljeno. Problem broj četiri je fokus na zabavu bez svrhe. Trošenje budžeta bez ikakvih rezultata osim fotografija za LinkedIn.

Što zapravo funkcionira pokazalo se kroz godine iskustva s korporativnim klijentima. [Sip & Paint za timove](/usluge/sip-paint) ima karakteristike koje čine savršenu team building aktivnost. Svi su jednako nesposobni — i to stvara egalitarno iskustvo gdje hijerarhija nestaje. Direktor se bori s perspektivom jednako kao pripravnik. Razgovori teku prirodno dok ruke rade nešto opuštajuće, bez prisilnih "ice-breaker" pitanja. Svačiji rezultat je drugačiji — i to postaje metafora za tim gdje raznolikost doprinosi cjelini.

[Italian Night](/usluge/italian-night) za korporativne grupe nudi drugačiji ali jednako efektivan format. Zajednički cilj — uživati u večeri — povezuje ljude bez natjecateljskog pritiska. Prirodna podjela razgovora po manjim grupama za stolom omogućava dublje povezivanje. Dijeljenje hrane, doslovno iz istih zdjela, stvara osjećaj zajedništva koji je teško postići na drugi način.

Format "Life story" postao je iznenađujuće popularan u korporativnom svijetu. Svaki član tima dijeli tri minute o nečemu osobnom iz svog života — djetinjstvu, hobijima, putovanjima, snovima. Nevjerojatno je efektivno za stvaranje empatije među kolegama koji su se godinama viđali samo u kontekstu posla.

Planiranje team buildinga koji funkcionira zahtijeva strukturirani pristup. Korak jedan je jasno definiranje svrhe. Je li cilj integracija novih članova tima? Poboljšanje komunikacije između odjela? Nagrađivanje nakon velikog projekta? Svaka svrha zahtijeva potpuno drugačiji pristup. Korak dva je poznavanje svog tima. Kolika je prosječna dob i koje su interese? Kakav je omjer introvertnih i ekstrovertnih tipova? Postoje li fizička ograničenja koja treba uzeti u obzir? Kulturne osjetljivosti? Korak tri je ostavljanje prostora za izbor. Različite aktivnosti za različite tipove osobnosti. Mogućnost povlačenja bez stigme za one koji trebaju predah. Fleksibilno vrijeme bez krutog rasporeda.

Mjerenje uspjeha team buildinga ima neposrednu i dugoročnu komponentu. Neposredno, provedite anonimnu anketu zadovoljstva jer ljudi će biti iskreniji. Promatrajte jesu li ljudi koji inače ne razgovaraju počeli komunicirati. Pogledajte fotografije — izgledaju li ljudi opušteno ili napeto? Dugoročno, pratite je li se međutimska komunikacija poboljšala. Spominju li zaposlenici event pozitivno mjesecima kasnije?

Česta pitanja s kojima se susrećemo: Treba li team building biti obavezan? Idealno ne. Ali ako mora — napravite ga toliko dobrim da će ljudi željeti doći. Alkohol da ili ne? Uvijek kao opcija, nikad kao prisila, i uvijek s bezalkoholnim alternativama. Koliko često organizirati? Kvaliteta pobjeđuje kvantitetu. Jedan odličan event godišnje vrijedniji je od četiri prosječna.

Team building nije trošak u budžetu. To je investicija u ljude koji čine vašu organizaciju, u odnose koji određuju produktivnost, u kulturu koja privlači talente. Ali kao svaka investicija — može se utrošiti pametno ili baciti u vjetar.

Sljedeći put kad planirate team building, zapitajte se iskreno: bih li ja želio ići na ovo? Ako je odgovor "ne" — radite iznova dok ne postane "da".`,
    category: "Korporativno",
    author: "The Stage Tim",
    publishedAt: "2025-12-10",
    readTime: 8,
    featured: false,
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
