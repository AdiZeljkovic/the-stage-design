import { DatabaseSync } from 'node:sqlite';
import path from 'path';
import fs from 'fs';
import bcrypt from 'bcryptjs';

const DATA_DIR = path.join(__dirname, '..', 'data');
const UPLOADS_DIR = path.join(__dirname, '..', 'uploads');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

const db = new DatabaseSync(path.join(DATA_DIR, 'database.sqlite'));
db.exec('PRAGMA journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT NOT NULL,
    author TEXT NOT NULL DEFAULT 'The Stage Tim',
    published_at TEXT NOT NULL,
    read_time INTEGER NOT NULL DEFAULT 5,
    featured INTEGER NOT NULL DEFAULT 0,
    tags TEXT NOT NULL DEFAULT '[]',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS gallery_images (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    filename TEXT NOT NULL,
    alt TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'OSTALO',
    url TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS contact_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT DEFAULT '',
    service TEXT DEFAULT '',
    message TEXT NOT NULL,
    is_read INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS site_settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS service_content (
    slug TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    data TEXT NOT NULL,
    hero_image_url TEXT,
    sort_order INTEGER NOT NULL DEFAULT 0,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Add source column to gallery_images if it doesn't exist yet
try {
  db.exec("ALTER TABLE gallery_images ADD COLUMN source TEXT NOT NULL DEFAULT 'uploaded'");
} catch {
  // column already exists
}

// Seed admin user
const adminUser = db.prepare('SELECT id FROM admin_users WHERE username = ?').get('admin');
if (!adminUser) {
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  const hash = bcrypt.hashSync(adminPassword, 10);
  db.prepare('INSERT INTO admin_users (username, password_hash) VALUES (?, ?)').run('admin', hash);
  console.log('✓ Admin korisnik kreiran');
}

// Seed default site settings
const settingsCount = (db.prepare('SELECT COUNT(*) as count FROM site_settings').get() as { count: number }).count;
if (settingsCount === 0) {
  const defaults: [string, string][] = [
    ['siteName', 'THE STAGE'],
    ['tagline', 'Vaša Scena za Nezaboravne Trenutke'],
    ['phone', '+387 62 307 151'],
    ['email', 'thestagesarajevo@gmail.com'],
    ['address', 'Zmaja od Bosne 4, Sarajevo 71000, BiH'],
    ['instagramUrl', 'https://www.instagram.com/the_stage_sarajevo/'],
    ['instagramHandle', '@the_stage_sarajevo'],
    ['tiktokUrl', 'https://www.tiktok.com/@the_stage_sarajevo'],
    ['tiktokHandle', '@the_stage_sarajevo'],
    ['facebookUrl', ''],
    ['facebookHandle', ''],
    ['youtubeUrl', ''],
    ['youtubeHandle', ''],
    ['heroTitle', 'THE STAGE SARAJEVO'],
    ['heroSubtitle', 'Vaša Scena za Nezaboravne Trenutke'],
    ['heroPromo', ''],
    ['rodjendaniPrice', '350 KM'],
    ['rodjendaniCapacity', 'do 10 osoba'],
    ['djevojackePrice', '400 KM'],
    ['djevojackeCapacity', 'do 10 osoba'],
    ['babyShowerPrice', '300 KM'],
    ['babyShowerCapacity', 'do 15 osoba'],
    ['italianNightPrice', '50 KM po osobi'],
    ['sipPaintPrice', '50 KM po osobi'],
    ['sminkanjePriceParty', '60 KM'],
    ['sminkanjePriceBridal', '100 KM'],
    ['sminkanjePriceTrial', '80 KM'],
    ['sminkanjePriceLesson', '80 KM'],
    ['najamSize', '75 m²'],
    ['najamCapacity', 'do 30 osoba'],
  ];
  db.exec('BEGIN');
  const insert = db.prepare('INSERT OR IGNORE INTO site_settings (key, value) VALUES (?, ?)');
  for (const [key, value] of defaults) insert.run(key, value);
  db.exec('COMMIT');
  console.log('✓ Podrazumjevane postavke kreirane');
}

// Add new social media settings if they don't exist yet
{
  const insert = db.prepare('INSERT OR IGNORE INTO site_settings (key, value) VALUES (?, ?)');
  insert.run('facebookUrl', '');
  insert.run('facebookHandle', '');
  insert.run('youtubeUrl', '');
  insert.run('youtubeHandle', '');
}

// Migrate placeholder contact info to real values
{
  const migrate = db.prepare('UPDATE site_settings SET value = ? WHERE key = ? AND value = ?');
  migrate.run('+387 62 307 151', 'phone', '+387 XX XXX XXX');
  migrate.run('thestagesarajevo@gmail.com', 'email', 'info@thestage.ba');
  migrate.run('Zmaja od Bosne 4, Sarajevo 71000, BiH', 'address', 'Adresa u centru grada, Sarajevo');
  migrate.run('https://www.instagram.com/the_stage_sarajevo/', 'instagramUrl', 'https://instagram.com/thestage');
  migrate.run('@the_stage_sarajevo', 'instagramHandle', '@thestage');
  migrate.run('https://www.tiktok.com/@the_stage_sarajevo', 'tiktokUrl', 'https://tiktok.com/@thestage');
  migrate.run('@the_stage_sarajevo', 'tiktokHandle', '@thestage');
}

// Seed blog posts
const blogCount = (db.prepare('SELECT COUNT(*) as count FROM blog_posts').get() as { count: number }).count;
if (blogCount === 0) {
  const seedPosts = [
    ['djevojacka-vecer-sarajevo-kompletni-vodic', 'Djevojačka večer u Sarajevu: sve što trebate znati za nezaboravnu proslavu', 'Organizirate djevojačku večer za svoju najbolju prijateljicu? Otkrijte kako stvoriti večer o kojoj će se pričati godinama.', 'Kad je Amina nazvala svoje četiri najbliže prijateljice s vijesti o zarukama, prva misao svake od njih bila je ista: kako joj priuštiti [djevojačku večer](/usluge/djevojacke) kakvu zaslužuje?\n\nLokacija je, bez ikakve sumnje, najvažnija odluka koju ćete donijeti. U srcu Sarajeva, The Stage nudi savršen prostor — toplo osvjetljenje, prilagodljiv ambijent, fotografski savršene kutove.\n\nŠto se aktivnosti tiče, kreativne radionice poput [Sip & Paint](/usluge/sip-paint) večeri postale su pravi hit. [Profesionalno šminkanje](/usluge/sminkanje) za cijelu ekipu transformira obično druženje u pravi glamur event.\n\nVaša prijateljica to zaslužuje. I vi to možete stvoriti.', 'Djevojačke večeri', 'The Stage Tim', '2025-12-28', 7, 1, '["djevojačka večer","sarajevo","proslave","mladenka"]'],
    ['djecji-rodjendan-ideje-koje-djeca-obozavaju', 'Dječji rođendan koji vaše dijete neće zaboraviti', 'Umjesto još jedne zabave koju će dijete zaboraviti za tjedan dana, saznajte kako stvoriti magične trenutke.', 'Djeca ne pamte stvari. Pamte osjećaje. Ova jednostavna istina mijenja sve što znamo o organizaciji [dječjih rođendana](/usluge/rodjendani).\n\nKreativne radionice s "odnesi kući" rezultatom pokazale su se iznimno uspješnima. Transformacija prostora u potpuno drugu realnost ima magičan učinak na dječju maštu.\n\n[Profesionalno šminkanje](/usluge/sminkanje) za djecu potpuno je drugačije iskustvo od kućnih bojica iz supermarketa. Kada petogodišnjakinja pogleda u ogledalo i vidi princezu — to je trenutak čiste magije.\n\nVaše dijete neće pamtiti koliko je koštala torta. Pamtit će trenutak kad se osjećalo posebno.', 'Rođendani', 'The Stage Tim', '2025-12-26', 8, 1, '["dječji rođendan","ideje","organizacija","sarajevo"]'],
    ['baby-shower-moderna-proslava-trudnice', 'Baby shower u BiH: vodič za modernu proslavu', 'Baby shower više nije američki trend — postala je tradicija koju bosanske žene prihvataju svim srcem.', 'Baby shower je ritual prelaska — označavanje transformacije žene u majku, jedna od najvećih promjena koje ljudsko biće može doživjeti.\n\nIdealno vrijeme za organizaciju je između 32. i 36. tjedna trudnoće. Lokacija čini ogromnu razliku — [profesionalni prostor](/usluge/najam) nudi savršene fotografije i osjećaj posebnosti.\n\nZaboravite dosadne igre pogađanja opsega trbuha. Stanica za poruke budućnosti, gdje svaki gost piše poruku za bebu, postaje neprocjenjiva obiteljska relikvija.', 'Baby Shower', 'The Stage Tim', '2025-12-24', 9, 0, '["baby shower","trudnoća","proslava","sarajevo"]'],
    ['sip-and-paint-kreativnost-druzenje-sarajevo', 'Sip & Paint: zašto je ovo postala najtraženija grupna aktivnost u Sarajevu', 'Niste umjetnik? Savršeno. Upravo zato ćete obožavati Sip & Paint.', 'Kada je Maja predložila [Sip & Paint](/usluge/sip-paint) za svoj trideseti rođendan, reakcije prijateljica bile su predvidljivo skeptične. Tri sata kasnije, ista ta grupa postavljala je svoje slike na Instagram.\n\nKoncept je jednostavan: ulazite u prostor s ugodnim osvjetljenjem, pred vama platno i boje, u ruci čaša omiljenog pića. Instruktor vas vodi korak po korak.\n\nZa [djevojačke večeri](/usluge/djevojacke), za team building, za romantične večeri — Sip & Paint nudi nešto što je teško opisati riječima.', 'Aktivnosti', 'The Stage Tim', '2025-12-22', 7, 1, '["sip and paint","kreativnost","sarajevo","team building"]'],
    ['profesionalno-sminkanje-savjeti-strucnjaka', 'Profesionalno šminkanje: tajne koje makeup artisti rijetko otkrivaju', 'Otkrijte što zaista čini razliku između makeup-a koji traje i onog koji nestaje do ponoći.', 'Profesionalci znaju jednu stvar koju amateri redovito podcjenjuju: priprema kože je pola posla.\n\n[Profesionalno šminkanje](/usluge/sminkanje) za grupne događaje poput [djevojačkih večeri](/usluge/djevojacke) ima svoja posebna pravila. Rezervirajte više vremena nego što mislite da trebate.\n\nProfesionalno šminkanje nije luksuz. To je investicija u samopouzdanje.', 'Ljepota', 'The Stage Tim', '2025-12-20', 8, 0, '["šminkanje","makeup","savjeti","profesionalno"]'],
    ['italian-night-sarajevo-kulinarska-avantura', 'Italian Night u Sarajevu: kada Toskana dođe do vas', 'Ne trebate avion do Italije za autentično iskustvo.', 'Zatvorite oči na trenutak. Miris svježe pečene focacce ispunjava prostor. Zvuk talijanske glazbe. Čaša Chianti vina. To je [Italian Night](/usluge/italian-night) u srcu Sarajeva.\n\nAntipasti, Carbonara, Tiramisu — sve autentično, sve napravljeno s ljubavlju.\n\nZa romantične večeri, korporativne događaje, okrugle godišnjice. Buon appetito!', 'Tematske večeri', 'The Stage Tim', '2025-12-18', 7, 0, '["italian night","tematska večer","hrana","sarajevo"]'],
    ['kako-odabrati-event-prostor-sarajevo', 'Kako odabrati savršen event prostor u Sarajevu', 'Lokacija čini ili lomi događaj. Naučite koje greške izbjegavati.', 'Lokacija određuje atmosferu, tok događaja, kvalitetu fotografija i ukupni dojam. Sedam ključnih pitanja koja morate postaviti: stvarni kapacitet, šta je uključeno, catering pravila, vrijeme za pripremu, osvjetljenje, akustika, Plan B.\n\nSavršeni [prostor](/usluge/najam) nije nužno najveći ili najskuplji — to je prostor koji priča priču i ima karakter.', 'Savjeti', 'The Stage Tim', '2025-12-16', 8, 0, '["event prostor","organizacija","sarajevo","savjeti"]'],
    ['trendovi-u-proslavama-2025', 'Trendovi u proslavama 2025: šta će gosti očekivati ove godine', 'Zaboravite sve što ste znali o tradicionalnim proslavama.', 'Najznačajniji trend koji vidimo u 2025. godini je pomak od stvari prema iskustvima. Intimnost pobjeđuje veličinu. Personalizacija je dosegla ekstreme.\n\n[Djevojačke večeri](/usluge/djevojacke) i [rođendani](/usluge/rodjendani) na The Stage potpuno se prilagođavaju viziji klijenta.\n\n2025. će biti godina autentičnosti.', 'Trendovi', 'The Stage Tim', '2025-12-14', 7, 0, '["trendovi","proslave","2025","organizacija"]'],
  ];

  db.exec('BEGIN');
  const insertPost = db.prepare(`
    INSERT INTO blog_posts (slug, title, excerpt, content, category, author, published_at, read_time, featured, tags)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  for (const post of seedPosts) insertPost.run(...post);
  db.exec('COMMIT');
  console.log(`✓ Blog postovi seeded (${seedPosts.length})`);
}

// Seed service content
const serviceCount = (db.prepare('SELECT COUNT(*) as count FROM service_content').get() as { count: number }).count;
if (serviceCount === 0) {
  const services: Array<[string, string, string, number]> = [
    ['rodjendani', 'Rođendani', JSON.stringify({
      heroTitle: 'Rođendani Sarajevo',
      heroTagline: 'Tri jedinstvena rođendanska iskustva u Sarajevu za nezaboravan dan',
      seoTitle: 'Rođendani Sarajevo | Cijena od 350 KM | The Stage',
      seoDescription: 'Organizacija rođendana u Sarajevu. Make-up Birthday, Sip & Paint i Interaktivne igre. Cijena 350 KM za grupu do 10 osoba. Rezervišite termin!',
      stat1Value: '350 KM', stat1Label: 'Cijena po grupi',
      stat2Value: 'Do 10 osoba', stat2Label: 'Moguća doplata za više',
      stat3Value: '3 Paketa', stat3Label: 'Odaberite svoj stil',
      mainDescription: 'Organiziramo nezaboravne proslave za sve uzraste s tri jedinstvena paketa.',
      ctaText: 'Rezervišite termin',
      note: '*Dodatne opcije: Torta uz doplatu i rezervaciju. Mogućnost doplate za profesionalnog fotografa.',
      packages: [
        {
          title: '1. Make-up Birthday',
          subtitle: 'Ekskluzivni Kurs Šminkanja',
          description: 'Postanite zvijezda na svoj dan! U spektakularnom okruženju, osigurali smo fantastične uslove da naučite osnove šminkanja pod vodstvom jedne od najpoznatijih makeup artistica u BiH, Nermine Nerme Ibrulj.\n\nNaučite male trikove vrhunskih majstora, pravilno nanošenje, te odabir boja i stilova koji pristaju baš vašem licu.',
          items: [
            'Korištenje samo najboljih, high-end proizvoda',
            'Moguć odabir tematskog šminkanja (fantasy, basic natural, oriental, full face)',
            'Fotografiranje ispred specijalno dizajniranih "Instagrammable" pozadina',
            'Odjeća i rekviziti za jedinstven izgled',
            'Naš hit koktel "Pink Lemonade" s jestivim šljokicama',
            'Snack bar (kokice, muffins, grickalice, slatkiši)',
            'Neograničeni sokovi',
            'Gift bag za slavljenicu'
          ]
        },
        {
          title: '2. Sip & Paint Birthday',
          subtitle: 'Kreativnost, Druženje i Opuštena Zabava',
          description: 'Sip & Paint rođendan je savršen spoj kreativnosti, druženja i opuštene zabave. Umjesto klasične proslave, slavljenica i gosti dobijaju iskustvo koje se pamti i nešto što nose kući – vlastito umjetničko djelo.\n\nProslava počinje uz piće po izboru, laganu muziku i pripremljen prostor sa platnima, bojama, kistovima i svim potrebnim materijalima.',
          items: [
            'Privatno rezervisan prostor za vašu grupu',
            'Sav slikarski materijal (platna, boje, kistovi)',
            'Vodstvo animatora/instruktora kroz cijeli event',
            'Piće po izboru i lagana muzika',
            'Snack bar',
            'Vaše umjetničko djelo za ponijeti kući',
            'Gift bag za slavljenicu'
          ]
        },
        {
          title: '3. Interaktivne Društvene Igre',
          subtitle: 'Zabava, Smijeh i Takmičenje',
          description: 'Za nezaboravan provod, osigurali smo niz takmičarskih igara pogodnih za sve uzraste. Naše osoblje vas vodi kroz svijet smijeha i zabave koji garantovano izgleda sjajno uživo i na kameri.',
          items: [
            'Igre poput Ping Pong Balls Challenge, Guess the Line, Gluhi Telefoni, Wheel of Luck',
            'Vrijeme za ples uz hits playlistu ispod disko kugle',
            'Snack bar',
            'Neograničena pića (Coca-Cola, Mojito limunada, ledeni čaj)',
            'Gift bag za slavljenika/slavljenicu'
          ]
        }
      ]
    }), 1],
    ['djevojacke', 'Djevojačke Večeri', JSON.stringify({
      heroTitle: 'Djevojačke Večeri Sarajevo',
      heroTagline: 'Proslavite posljednje dane slobode sa stilom',
      seoTitle: 'Djevojačke Večeri Sarajevo | 350 KM | The Stage',
      seoDescription: 'Organizacija djevojačkih večeri u Sarajevu. Bride to be proslava sa dekoracijom, igrama i muzikom. Cijena 350 KM. Rezervišite termin!',
      stat1Value: '350 KM', stat1Label: 'Kompletna proslava',
      stat2Value: 'Bride to Be', stat2Label: 'Potpuna personalizacija',
      stat3Value: 'Sve Uključeno', stat3Label: 'Dekoracija, igre, muzika',
      mainDescription: 'Tražite savršeno mjesto za djevojačku veče u Sarajevu? Kreiramo savršenu "Bride to be" atmosferu uz potpunu personalizaciju. Prepustite se zabavi i stvarajte uspomene koje će trajati zauvijek.',
      ctaText: 'Rezervišite termin',
      packages: [
        {
          title: 'Djevojačka Večer',
          subtitle: 'Bride to Be Paket',
          description: '',
          items: [
            'Prilagođenu scenografiju uz LED znak "Bride to be"',
            'Tematski mobilijar (posuđe, odjeća, lente, veo, naočale, lepeze...)',
            'Mnogobrojne rekvizite za nezaboravno fotografiranje',
            'Tehničku opremu za snimanje',
            'Interaktivne i zabavne igre za cijelo društvo',
            'Snack bar',
            'Ozvukom i personaliziranu muzičku listu',
            'Moguć dogovor o dodatnoj personalizaciji i organizaciji'
          ]
        }
      ]
    }), 2],
    ['baby-shower', 'Baby Shower', JSON.stringify({
      heroTitle: 'Baby Shower Sarajevo',
      heroTagline: 'Savršeno okruženje da buduću mamu iznenadite poklonima',
      seoTitle: 'Baby Shower Sarajevo | 300 KM | The Stage',
      seoDescription: 'Organizacija baby shower proslava u Sarajevu. Fotogeničan prostor, snack bar i dekoracija. Cijena 300 KM. Rezervišite termin!',
      stat1Value: '300 KM', stat1Label: 'Kompletna proslava',
      stat2Value: 'Fotogenično', stat2Label: 'Savršeno za uspomene',
      stat3Value: 'Snack Bar', stat3Label: 'Neograničeni sokovi',
      mainDescription: 'Tražite savršen prostor za baby shower u Sarajevu? The Stage nudi savršeno okruženje za proslavu baby shower-a. U fotogeničnom i prikladno uređenom prostoru, stvorite nezaboravne trenutke sa budućom mamom i najbližima.',
      ctaText: 'Rezervišite termin',
      packages: [
        {
          title: 'Baby Shower Paket',
          subtitle: '',
          description: '',
          items: [
            'Savršeno uređen prostor i pozadine za slikanje',
            'Mjesto za sjedenje, ples i druženje',
            'Neograničen snack and soda bar',
            'Opremu za snimanje i slikanje kako bi trenuci ostali zabilježeni'
          ]
        }
      ]
    }), 3],
    ['italian-night', 'Italian Night', JSON.stringify({
      heroTitle: 'Italian Night Sarajevo',
      heroTagline: 'Pasta & Spritz - Iskustvo talijanskog glamura',
      seoTitle: 'Italian Night Sarajevo | Pasta & Spritz | The Stage',
      seoDescription: 'Italian Night u Sarajevu - naučite praviti pastu i talijanska pića. Savršen date night ili izlazak s prijateljima!',
      stat1Value: 'Po dogovoru', stat1Label: 'Cijena',
      stat2Value: '18+', stat2Label: 'Samo punoljetni',
      stat3Value: 'Pasta & Spritz', stat3Label: 'Autentično iskustvo',
      mainDescription: 'Tražite jedinstveno iskustvo u Sarajevu? Italian Night je savršen \'date night\' ili izlazak s prijateljima! Doživite autentično italijansko iskustvo dok pravite pastu od nule – od brašna, jaja i soli.',
      ctaText: 'Rezervišite termin',
      note: 'Potrebno je rezervirati mjesto unaprijed. Italian Night se organizuje na zahtjev za grupe, kontaktirajte nas za dostupne termine.',
      packages: [
        {
          title: 'Italian Night Iskustvo',
          subtitle: '',
          description: '',
          items: [
            'Sve potrebne sastojke i alate za pravljenje paste',
            'Vođenje kroz proces od strane iskusnog edukatora',
            'Individualnu radnu stanicu za svakog učesnika',
            'Degustaciju klasičnih italijanskih pića (Aperol Spritz, Limoncello, Fruit Prosecco)',
            'Atmosferu uz najbolje talijanske hitove',
            'Degustaciju vlastite hrane na kraju iskustva',
            'Fotografiranje tokom cjelokupnog procesa'
          ]
        }
      ]
    }), 4],
    ['sip-paint', 'Sip & Paint', JSON.stringify({
      heroTitle: 'Sip and Paint Sarajevo',
      heroTagline: 'Opustite se uz kist, platno i koktel',
      seoTitle: 'Sip and Paint Sarajevo | The Stage',
      seoDescription: 'Sip & Paint večeri u Sarajevu - slikanje uz koktele. Svakog drugog četvrtka. Idealan izlazak s prijateljicama!',
      stat1Value: 'Po dogovoru', stat1Label: 'Cijena',
      stat2Value: '18+', stat2Label: 'Samo punoljetni',
      stat3Value: 'Drugi Četvrtak', stat3Label: '20:00-22:00h',
      mainDescription: 'Tražite kreativno iskustvo u Sarajevu? Izvedi prijateljicu, mamu ili sestru na nezaboravno Sip and Paint iskustvo! Svakog drugog četvrtka u mjesecu (20:00 - 22:00h) pijuckamo koktele, slušamo muziku i opuštamo se uz kist i platno.',
      ctaText: 'Rezervišite mjesto',
      packages: [
        {
          title: 'Sip & Paint Večer',
          subtitle: '',
          description: 'Ne morate znati slikati! Naše iskustvo je dizajnirano za sve nivoe - od početnika do iskusnih umjetnika.',
          items: [
            'Slikarsko platno i sve potrebne boje',
            'Neograničene koktele (ili virgin koktele)',
            'Slane i slatke grickalice',
            'Vođenje kroz proces slikanja korak po korak',
            'Opuštenu atmosferu uz dobru muziku',
            'Vaša umjetnička djela koja nosite kući'
          ]
        }
      ]
    }), 5],
    ['sminkanje', 'Profesionalno Šminkanje', JSON.stringify({
      heroTitle: 'Profesionalno Šminkanje Sarajevo',
      heroTagline: 'Vrhunska umjetnost šminkanja za sve prilike',
      seoTitle: 'Profesionalno Šminkanje Sarajevo | The Stage',
      seoDescription: 'Profesionalno šminkanje u Sarajevu za vjenčanja, mature, foto sesije. High-end proizvodi: Dior, YSL, MAC. Zatražite ponudu!',
      stat1Value: 'Po Dogovoru', stat1Label: 'Prilagođene cijene',
      stat2Value: 'Solo ili Grupa', stat2Label: 'Sve prilike',
      stat3Value: 'Premium', stat3Label: 'High-end proizvodi',
      mainDescription: 'Tražite profesionalno šminkanje u Sarajevu? Prepustite se beskrajno talentiranim rukama vrhunskih šminkerica s karijerama na TV-u, filmu i muzičkoj industriji. U The Stage-u nudimo profesionalno šminkanje za sve prilike - od vjenčanja i matura do foto sesija i specijalnih događaja.',
      ctaText: 'Zatražite ponudu',
      packages: [
        {
          title: 'Posebne prilike',
          subtitle: 'Vjenčanja, mature, svečane večeri',
          description: 'Vjenčanja, mature, diplomiranja, svečane večeri i svi drugi važni trenutci u vašem životu.',
          items: []
        },
        {
          title: 'Foto & video sesije',
          subtitle: 'Profesionalna šminka za fotografije',
          description: 'Profesionalna šminka za fotografije, video produkcije, i društvene mreže.',
          items: []
        },
        {
          title: 'Grupno šminkanje',
          subtitle: 'Djevojačke večeri i proslave',
          description: 'Idealno za djevojačke večeri, rođendane i druge grupne proslave.',
          items: []
        },
        {
          title: 'Edukacija',
          subtitle: 'Naučite tajne šminkanja',
          description: 'Naučite tajne profesionalnog šminkanja direktno od iskusnih majstora.',
          items: []
        }
      ]
    }), 6],
    ['najam', 'Najam Prostora', JSON.stringify({
      heroTitle: 'Najam Prostora Sarajevo',
      heroTagline: 'Multipraktični prostor za sve vaše potrebe',
      seoTitle: 'Najam Prostora Sarajevo | Podcast Studio | The Stage',
      seoDescription: 'Najam event prostora u Sarajevu - 75m² u centru grada. Podcast studio, foto sesije, prezentacije i radionice. Zatražite ponudu!',
      stat1Value: 'Po Dogovoru', stat1Label: 'Prilagođene cijene',
      stat2Value: '75 m²', stat2Label: 'Multifunkcionalan prostor',
      stat3Value: 'Centar Grada', stat3Label: 'Parking dostupan',
      mainDescription: 'Tražite prostor za najam u Sarajevu? The Stage nudi idealnu i prepoznatljivu lokaciju u centru grada s parking opcijama. Zahvaljujući multipraktičnosti, prostor se lako transformiše iz krajnje ozbiljnog u moderan i zabavan set-up.',
      ctaText: 'Zatražite ponudu',
      packages: [
        {
          title: 'Najam za snimanje podcasta',
          subtitle: 'Podcast Studio',
          description: 'Profesionalno opremljen prostor za snimanje podcasta u srcu grada. Idealno za kreatore sadržaja, influencere i profesionalce.',
          items: [
            'Kvalitetna audio oprema',
            'Prepoznatljiva i prilagodljiva lokacija',
            'Moderna i ozbiljna ili zabavna atmosfera prema potrebi',
            'Parking opcije u blizini'
          ]
        },
        {
          title: 'Najam za prezentacije i evente',
          subtitle: 'Prezentacije i Eventi',
          description: '75 kvadrata savršenog prostora za vaš idući influencerski event, lansiranje proizvoda, poslovnu prezentaciju ili edukativnu radionicu.',
          items: [
            'Scenske elemente i dekoraciju',
            'Displaye za proizvode',
            'Fleksibilnu konfiguraciju prostora',
            'Audio i vizuelnu opremu',
            'Profesionalnu atmosferu'
          ]
        },
        {
          title: 'Studio za fotografiranje',
          subtitle: 'Foto Studio',
          description: 'Za sve bitne datume koje želite uramiti – mature, vjenčanja, diplomiranja, rođendane ili profesionalne headshots.',
          items: [
            'Suradnja s vrhunskim fotografima',
            'Raznovrsne pozadine i set-upove',
            'Profesionalno osvjetljenje',
            '"Instagrammable" kutke',
            'Rekvizite prema potrebi'
          ]
        },
        {
          title: 'Edukativne radionice',
          subtitle: 'Radionice i Treninzi',
          description: 'Idealan prostor za vođenje edukativnih radionica, treninga, seminara i grupnih sesija.',
          items: [
            'Fleksibilno sjedenje za do 30 osoba',
            'Prezentacijska oprema',
            'Inspirativno okruženje',
            'Prostor za praktične vježbe'
          ]
        }
      ]
    }), 7],
  ];

  db.exec('BEGIN');
  const insertService = db.prepare(
    'INSERT INTO service_content (slug, name, data, sort_order) VALUES (?, ?, ?, ?)'
  );
  for (const s of services) insertService.run(...s);
  db.exec('COMMIT');
  console.log('✓ Sadržaj usluga seeded');
}

// Seed static gallery images from src/assets/gallery/
const staticImages = [
  { filename: 'bachelorette-1.jpg', alt: 'Djevojačka večer dekoracija', category: 'DJEVOJAČKE' },
  { filename: 'bachelorette-2.jpg', alt: 'Djevojačka večer Sarajevo', category: 'DJEVOJAČKE' },
  { filename: 'birthday-1.jpg', alt: 'Rođendan The Stage', category: 'ROĐENDANI' },
  { filename: 'birthday-2.jpg', alt: 'Proslava rođendana Sarajevo', category: 'ROĐENDANI' },
  { filename: 'event-1.jpg', alt: 'Event u The Stage', category: 'EVENTI' },
  { filename: 'event-2.jpg', alt: 'Poseban event Sarajevo', category: 'EVENTI' },
  { filename: 'makeup-1.jpg', alt: 'Profesionalno šminkanje', category: 'MAKEUP' },
  { filename: 'makeup-2.jpg', alt: 'Makeup studio The Stage', category: 'MAKEUP' },
  { filename: 'makeup-3.jpg', alt: 'Beauty šminkanje Sarajevo', category: 'MAKEUP' },
  { filename: 'space-1.jpg', alt: 'The Stage prostor', category: 'PROSTOR' },
  { filename: 'space-2.jpg', alt: 'Event prostor interijer', category: 'PROSTOR' },
  { filename: 'space-3.jpg', alt: 'The Stage ambijent', category: 'PROSTOR' },
];

for (const img of staticImages) {
  const existing = db.prepare("SELECT id FROM gallery_images WHERE filename = ? AND source = 'static'").get(img.filename);
  if (!existing) {
    // Relative URL — resolved against the current origin on the frontend.
    const url = `/gallery-assets/${img.filename}`;
    db.prepare(
      "INSERT INTO gallery_images (filename, alt, category, url, source) VALUES (?, ?, ?, ?, 'static')"
    ).run(img.filename, img.alt, img.category, url);
  }
}

// One-time migration: rewrite any previously-seeded absolute localhost URLs to
// relative paths so old databases display images correctly after this update.
db.exec(`
  UPDATE gallery_images
  SET url = '/' || substr(url, instr(url, '/uploads/') + 1)
  WHERE url LIKE 'http://localhost%/uploads/%';
  UPDATE gallery_images
  SET url = '/' || substr(url, instr(url, '/gallery-assets/') + 1)
  WHERE url LIKE 'http://localhost%/gallery-assets/%';
  UPDATE service_content
  SET hero_image_url = '/' || substr(hero_image_url, instr(hero_image_url, '/uploads/') + 1)
  WHERE hero_image_url LIKE 'http://localhost%/uploads/%';
`);

export default db;

