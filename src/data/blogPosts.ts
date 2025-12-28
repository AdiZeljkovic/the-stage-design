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
    slug: "kako-organizovati-savrsenu-djevojacku-vecer",
    title: "Kako Organizovati Savršenu Djevojačku Večer",
    excerpt: "Planirate djevojačku večer za svoju najbolju prijateljicu? Evo kompletnog vodiča za nezaboravnu proslavu.",
    content: `
## Planiranje Djevojačke Večeri

Djevojačka večer je jedan od najvažnijih događaja prije vjenčanja. To je prilika da buduća mladenka provede kvalitetno vrijeme sa svojim najbližim prijateljicama i stvori uspomene koje će trajati cijeli život.

### 1. Odaberite Savršenu Lokaciju

Izbor lokacije je ključan za uspješnu djevojačku večer. The Stage Sarajevo nudi:
- Intimnu atmosferu prilagođenu vašoj grupi
- Kompletnu dekoraciju prema vašim željama
- Profesionalno osvjetljenje i muziku
- Mogućnost keteringa

### 2. Aktivnosti Koje Će Svi Obožavati

Umjesto klasičnih igara, razmislite o:
- **Sip & Paint** - Slikajte uz čašu vina
- **Profesionalno šminkanje** - Glamurozni izgled za cijelu ekipu
- **Foto sesija** - Profesionalne fotografije za uspomenu
- **Radionice** - Kreativne aktivnosti za povezivanje

### 3. Dekoracija i Atmosfera

Zlatna, roza ili bijela paleta boja savršeno odgovaraju djevojačkim večerima. Dodajte:
- Balone sa imenom mladenke
- Personalizirane čaše i rekvizite
- Cvijeće i svijeće za romantičnu atmosferu

### Zaključak

Djevojačka večer ne mora biti stresna za organizatora. Prepustite se profesionalcima i uživajte u svakom trenutku sa svojim prijateljicama.
    `,
    category: "Događaji",
    author: "The Stage Tim",
    publishedAt: "2024-12-15",
    readTime: 5,
    featured: true,
    image: "/src/assets/services/djevojacke-hero.jpg",
    tags: ["djevojačka večer", "proslave", "savjeti"]
  },
  {
    id: "2",
    slug: "5-ideja-za-jedinstven-djeciji-rodjendan",
    title: "5 Ideja za Jedinstven Dječiji Rođendan",
    excerpt: "Želite napraviti rođendan koji će vaše dijete pamtiti? Otkrijte kreativne ideje koje će oduševiti i djecu i roditelje.",
    content: `
## Kreativni Dječiji Rođendani

Svako dijete zaslužuje poseban dan. Evo pet ideja koje će učiniti rođendan nezaboravnim.

### 1. Tematska Proslava

Odaberite temu koju vaše dijete voli:
- Princeze i vitezovi
- Superheroji
- Dinosaurusi
- Jednorozi i čarolije

### 2. Kreativne Radionice

Djeca obožavaju stvarati nešto svojim rukama:
- Slikanje na platnu
- Izrada nakita
- Dekoriranje kolača
- Pravljenje slime-a

### 3. Interaktivne Igre

Zabava je ključna:
- Treasure hunt po prostoru
- Mini olimpijske igre
- Karaoke takmičenje
- Modni show

### 4. Profesionalno Šminkanje za Djecu

Nježno šminkanje sa sigurnim proizvodima koje djeca obožavaju.

### 5. Foto Kutak

Napravite Instagram-worthy kutak sa:
- Zabavnim rekvizitima
- Tematskom pozadinom
- Polaroid kamerom

### Rezervišite Svoj Termin

The Stage Sarajevo nudi sve ove opcije i više. Kontaktirajte nas za personaliziranu ponudu.
    `,
    category: "Rođendani",
    author: "The Stage Tim",
    publishedAt: "2024-12-10",
    readTime: 4,
    featured: true,
    image: "/src/assets/services/rodjendani-hero.jpg",
    tags: ["rođendan", "djeca", "ideje", "proslave"]
  },
  {
    id: "3",
    slug: "vodic-za-baby-shower-u-sarajevu",
    title: "Kompletan Vodič za Baby Shower u Sarajevu",
    excerpt: "Sve što trebate znati o organizaciji baby shower proslave - od pozivnica do dekoracije.",
    content: `
## Baby Shower - Tradicija Koja Osvaja BiH

Baby shower proslave postaju sve popularnije u Bosni i Hercegovini. Evo kako organizovati savršenu proslavu.

### Šta je Baby Shower?

Baby shower je proslava u čast buduće mame, obično organizirana 4-6 sedmica prije porođaja. Tradicija potiče iz Amerike, ali se sve više usvaja širom svijeta.

### Kada Organizovati?

Idealno vrijeme je:
- 4-6 sedmica prije termina
- Vikend popodne (14-17h)
- Kada se mama osjeća najbolje

### Tema i Dekoracija

Popularne teme:
- Reveal party (otkrivanje spola)
- Safari životinje
- Oblaci i zvijezde
- Klasična roza/plava

### Aktivnosti

- Pogađanje veličine bebe
- Pisanje poruka za budućnost
- Baby bingo
- Izrada pelena-torte

### Catering

Ponudite:
- Mini sendviče
- Voće i kolačiće
- Baby-themed tortu
- Bezalkoholne koktele

### Lokacija u Sarajevu

The Stage Sarajevo nudi:
- Klimatizirani prostor
- Kompletnu dekoraciju
- Profesionalnu fotografiju
- Fleksibilne pakete
    `,
    category: "Baby Shower",
    author: "The Stage Tim",
    publishedAt: "2024-12-05",
    readTime: 6,
    featured: false,
    image: "/src/assets/services/baby-shower-hero.jpg",
    tags: ["baby shower", "trudnoća", "proslave"]
  },
  {
    id: "4",
    slug: "sip-and-paint-trend-koji-osvaja-sarajevo",
    title: "Sip & Paint: Trend Koji Osvaja Sarajevo",
    excerpt: "Otkrijte zašto je Sip & Paint postao najpopularnija grupna aktivnost za odrasle u gradu.",
    content: `
## Zašto Je Sip & Paint Toliko Popularan?

Sip & Paint kombinuje dvije stvari koje svi volimo - kreativnost i druženje. Evo zašto biste trebali probati.

### Šta je Sip & Paint?

Sip & Paint je kreativna radionica gdje:
- Slikate uz vodstvo instruktora
- Uživate u piću (vino, sok, kahva)
- Družite se sa prijateljima
- Odnose vlastito umjetničko djelo

### Za Koga Je?

Doslovno za svakoga! Nije potrebno nikakvo iskustvo:
- Teambuilding za firme
- Djevojačke večeri
- Romantični datei
- Rođendani za odrasle
- Girls night out

### Kako Izgleda Večer?

1. **Uvod (15 min)** - Upoznavanje sa materijalima
2. **Slikanje (2h)** - Korak po korak uz instruktora
3. **Druženje** - Uživanje u piću i razgovoru
4. **Fotografiranje** - Uspomene sa vašim djelom

### Zašto The Stage?

Naš Sip & Paint uključuje:
- Sav potreban materijal
- Profesionalnog instruktora
- Piće po izboru
- Ambijent sa osvjetljenjem
- Muziku po vašem ukusu
    `,
    category: "Aktivnosti",
    author: "The Stage Tim",
    publishedAt: "2024-11-28",
    readTime: 4,
    featured: false,
    image: "/src/assets/services/sip-paint-hero.jpg",
    tags: ["sip and paint", "kreativnost", "radionice"]
  },
  {
    id: "5",
    slug: "profesionalno-sminkanje-za-posebne-prilike",
    title: "Profesionalno Šminkanje za Posebne Prilike",
    excerpt: "Savjeti od naše profesionalne šminkerice za savršen izgled na vašem velikom danu.",
    content: `
## Savršen Makeup za Svaku Priliku

Bilo da se radi o vjenčanju, maturskoj večeri ili važnom eventu, profesionalno šminkanje čini razliku.

### Zašto Profesionalno Šminkanje?

- Dugotrajnost garantirana
- Profesionalni proizvodi
- Prilagođeno vašem tipu kože
- Fotografski savršeno

### Vrste Šminkanja

#### Svadbeno Šminkanje
- Próba šminke obavezna
- Vodootporni proizvodi
- Prirodan ali glamurozan izgled
- Touch-up kit za dan

#### Matursko Šminkanje
- Trendi izgled
- Prilagođeno mladoj koži
- Dugotrajno za cijelu noć

#### Večernje Šminkanje
- Dramatičnije oči
- Konturing za fotografije
- Smjeli usne

### Priprema Kože

Za najbolji rezultat:
- Očistite lice sat vremena prije
- Hidrirajte kožu
- Izbjegavajte nove proizvode
- Donesite referentne slike

### Grupno Šminkanje

Idealno za:
- Djevojačke večeri
- Rođendane
- Fashion evente

The Stage nudi grupne pakete šminkanja sa popustom.
    `,
    category: "Ljepota",
    author: "The Stage Tim",
    publishedAt: "2024-11-20",
    readTime: 5,
    featured: false,
    image: "/src/assets/services/sminkanje-hero.jpg",
    tags: ["šminkanje", "ljepota", "makeup"]
  },
  {
    id: "6",
    slug: "italian-night-autenticno-iskustvo-u-sarajevu",
    title: "Italian Night: Autentično Iskustvo u Sarajevu",
    excerpt: "Doživite čaroliju Italije bez putovanja - atmosfera, hrana i muzika direktno u srcu Sarajeva.",
    content: `
## La Dolce Vita u Sarajevu

Italian Night je jedinstveno iskustvo koje spaja najbolje od italijanske kulture, kuhinje i atmosfere.

### Šta Vas Očekuje?

- Autentična italijanska atmosfera
- Dekoracija inspirirana Toskanom
- Muzika uživo ili DJ sa italijanskim hitovima
- Tradicionalna italijanska hrana

### Menu Highlights

#### Antipasti
- Bruschetta sa svježim paradajzom
- Carpaccio
- Burrata sa pestom

#### Primi Piatti
- Pasta carbonara
- Risotto ai funghi
- Gnocchi sa četiri sira

#### Dolci
- Tiramisu
- Panna cotta
- Cannoli

### Idealno Za

- Romantične večeri
- Korporativne evente
- Proslave godišnjica
- Rođendane za odrasle
- Grupna druženja

### Dress Code

Elegantno casual - zamislite večeru na terasi u Firenci.

### Rezervacije

Italian Night organizujemo na zahtjev za grupe od 10+ osoba. Kontaktirajte nas za više informacija.
    `,
    category: "Događaji",
    author: "The Stage Tim",
    publishedAt: "2024-11-15",
    readTime: 4,
    featured: false,
    image: "/src/assets/services/italian-night-hero.jpg",
    tags: ["italian night", "tematske večeri", "hrana"]
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
