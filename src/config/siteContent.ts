/**
 * ═══════════════════════════════════════════════════════════════
 * THE STAGE - CENTRALIZOVANA KONFIGURACIJA SADRŽAJA
 * ═══════════════════════════════════════════════════════════════
 * 
 * Ovaj fajl sadrži KOMPLETAN UREDIV SADRŽAJ za web sajt The Stage.
 * 
 * ŠTA MOŽETE UREDITI:
 * ✓ Sve tekstove (naslovi, opisi, dugmići, linkovi)
 * ✓ Sve slike (putanje do slika)
 * ✓ Sve cijene i informacije o uslugama
 * ✓ Kontakt informacije
 * ✓ Social media linkove
 * ✓ Sve labele za forme
 * 
 * KAKO UREDITI:
 * 1. Pronađite sekciju koju želite promijeniti
 * 2. Promijenite tekst ili putanju do slike
 * 3. Sačuvajte fajl
 * 4. Promjene će se automatski prikazati na sajtu
 * 
 * UPOZORENJE: Ne mijenjajte nazive ključeva (keys), samo vrijednosti (values)!
 */

export const siteContent = {
  // ═══════════════════════════════════════════════════════════════
  // OPŠTE POSTAVKE - Informacije koje se koriste kroz cijeli sajt
  // ═══════════════════════════════════════════════════════════════
  general: {
    siteName: "THE STAGE",
    tagline: "Vaša Scena za Nezaboravne Trenutke",
    phone: "+387 XX XXX XXX",
    email: "info@thestage.ba",
    address: "Adresa u centru grada, Sarajevo",
    instagramUrl: "https://instagram.com/thestage",
    instagramHandle: "@thestage",
    tiktokUrl: "https://tiktok.com/@thestage",
    tiktokHandle: "@thestage",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.4753388997635!2d18.413076315555877!3d43.856429879114334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8e8c36e0741%3A0x71f6f4f8c1f8e8c8!2sSarajevo!5e0!3m2!1sen!2sba!4v1234567890123!5m2!1sen!2sba",
  },

  // ═══════════════════════════════════════════════════════════════
  // NAVIGACIJA - Glavni meni i linkovi
  // ═══════════════════════════════════════════════════════════════
  navigation: {
    logo: "THE STAGE",
    links: {
      home: "Početna",
      services: "Usluge",
      gallery: "Galerija",
      about: "O nama",
      contact: "Kontakt",
    },
    ctaButton: {
      text: "Rezervišite termin",
      link: "/kontakt",
    },
    servicesDropdown: [
      { name: "Rođendani", url: "/usluge/rodjendani" },
      { name: "Djevojačke Večeri", url: "/usluge/djevojacke" },
      { name: "Baby Shower", url: "/usluge/baby-shower" },
      { name: "Italian Night", url: "/usluge/italian-night" },
      { name: "Sip and Paint", url: "/usluge/sip-paint" },
      { name: "Profesionalno Šminkanje", url: "/usluge/sminkanje" },
      { name: "Najam Prostora", url: "/usluge/najam" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // FOOTER - Dno sajta
  // ═══════════════════════════════════════════════════════════════
  footer: {
    logo: "THE STAGE",
    links: [
      { name: "Početna", url: "/" },
      { name: "Usluge", url: "/usluge" },
      { name: "Galerija", url: "/galerija" },
      { name: "Kontakt", url: "/kontakt" },
    ],
    copyright: "© 2025 The Stage. Sva prava zadržana.",
    socialMedia: {
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // POČETNA STRANICA (Homepage / Index)
  // ═══════════════════════════════════════════════════════════════
  homepage: {
    // Hero sekcija (velika slika na vrhu)
    hero: {
      backgroundImage: "/src/assets/hero-background.jpg", // Putanja do hero slike
      title: "THE STAGE",
      subtitle: "Vaša Scena za Nezaboravne Trenutke",
      ctaPrimary: {
        text: "Pogledajte Usluge",
        link: "/usluge",
      },
      ctaSecondary: {
        text: "Istražite Galeriju",
        link: "/galerija",
      },
    },

    // Pregled usluga (4 kartice)
    services: {
      sectionTitle: "Naša Ponuda",
      cards: [
        {
          icon: "Sparkles", // Ne mijenjajte ovo (naziv ikone)
          title: "Proslave",
          description: "Rođendani, djevojačke večeri i baby shower u luksunom okruženju",
        },
        {
          icon: "Calendar",
          title: "Tematske Večeri",
          description: "Italian Night, Sip & Paint i druge jedinstvene večeri",
        },
        {
          icon: "Palette",
          title: "Profesionalne Usluge",
          description: "Šminkanje, edukacije i kreativne radionice",
        },
        {
          icon: "Users",
          title: "Najam Prostora",
          description: "Podcast studio, eventi, foto sesije i poslovni skupovi",
        },
      ],
    },

    // O nama sekcija
    about: {
      image: "/src/assets/hero-background.jpg", // Putanja do slike
      imageAlt: "The Stage prostor",
      title: "Mjesto Gdje Se Stvaraju Uspomene",
      description: "Dobrodošli u The Stage, ekskluzivni prostor u srcu grada dizajniran za vaše najposebnije trenutke. Od luksuznih rođendanskih proslava do profesionalnih evenata, naš tim pretvara svaku viziju u stvarnost.",
      paymentNote: "Napomena: Sve iz naše ponude moguće je platiti kartično i na rate.",
      ctaButton: {
        text: "Saznajte Više",
        link: "/o-nama",
      },
    },

    // Galerija pregled
    gallery: {
      sectionTitle: "Trenuci Uhvaćeni na Sceni",
      subtitle: "Pogledajte kako pretvaramo vizije u stvarnost",
      placeholderImages: 8, // Broj placeholder slika
      ctaButton: {
        text: "Pogledajte Cijelu Galeriju",
        link: "/galerija",
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // O NAMA STRANICA
  // ═══════════════════════════════════════════════════════════════
  about: {
    // Hero sekcija
    hero: {
      backgroundImage: "/src/assets/hero-background.jpg",
      title: "O Nama",
    },

    // Naša priča
    story: {
      title: "Više od Prostora. Mi smo Doživljaj.",
      paragraphs: [
        "The Stage je rođen iz želje da se stvori jedinstvena platforma u Sarajevu – mjesto gdje se profesionalizam susreće sa zabavom, a luksuz postaje dostupan svima koji žele da svoje posebne trenutke učine nezaboravnim.",
        "Naš prostor od 75 kvadrata pažljivo je dizajniran da bude višenamjenski – od intimnih rođendanskih proslava do profesionalnih podcast snimanja, od edukativnih radionica do glamuroznih lansiranja proizvoda. Svaki kutak The Stage-a je kreiran s pažnjom prema detaljima, nudeći savršenu pozadinu za fotografije i uspomene.",
        "Naš tim čine kreativci, organizatori i umjetnici koji dijele istu strast: stvaranje nezaboravnih iskustava. Vjerujemo da svaki događaj zaslužuje da bude poseban, i tu smo da vašu viziju pretvorimo u stvarnost.",
      ],
      imagePlaceholder: "Detalj prostora",
    },

    // Tim
    team: {
      sectionTitle: "Upoznajte Tim",
      subtitle: "Ljudi koji stvaraju magiju",
      featured: {
        name: "Nermina Nerma Ibrulj",
        title: "Glavna Makeup Artistica & Kreativna Direktorica",
        imagePlaceholder: "Nermina Ibrulj",
        bio: [
          "Sa godinama iskustva na televiziji, filmu i u muzičkoj industriji, Nerma donosi dašak svjetskog glamura u 'The Stage'. Njena strast prema ljepoti i umjetnosti šminkanja pretvara svaki makeup appointment u jedinstveno iskustvo.",
          "Kao edukatorica, Nerma dijeli svoje znanje i inspirira nove generacije makeup artista, koristeći isključivo najkvalitetnije high-end proizvode i tehnike koje je savladala radeći s najvećim imenima regiona.",
        ],
        instagram: {
          url: "https://instagram.com",
          handle: "@nermaibrulj",
        },
        tiktok: {
          url: "https://tiktok.com",
          handle: "@nermaibrulj",
        },
      },
    },

    // Vrijednosti
    values: {
      sectionTitle: "Naše Vrijednosti",
      items: [
        {
          emoji: "✨",
          title: "Kvalitet",
          description: "Koristimo samo najkvalitetnije proizvode i materijale, jer vaši trenuci zaslužuju savršenstvo.",
        },
        {
          emoji: "💫",
          title: "Kreativnost",
          description: "Svaki događaj je jedinstven. Slušamo vaše ideje i pretvaramo ih u stvarnost s kreativnim pristupom.",
        },
        {
          emoji: "🤝",
          title: "Posvećenost",
          description: "Vaš uspjeh je naš uspjeh. Trudimo se da svaki detalj bude savršen i da vi uživate u svom posebnom danu.",
        },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // GALERIJA STRANICA
  // ═══════════════════════════════════════════════════════════════
  gallery: {
    title: "Galerija",
    subtitle: "Trenuci koji pričaju priču",
    filters: ["SVI", "ROĐENDANI", "DJEVOJAČKE", "EVENTI", "PROSTOR", "MAKEUP"],
    // Ovdje možete dodati putanje do pravih slika
    images: [
      // Format: { category: "ROĐENDANI", src: "/putanja/do/slike.jpg" }
      // Trenutno koristi placeholder slike
    ],
    lightbox: {
      prevButton: "‹",
      nextButton: "›",
      closeButton: "✕",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // KONTAKT STRANICA
  // ═══════════════════════════════════════════════════════════════
  contact: {
    hero: {
      title: "Stupite na Scenu",
      description: "Kontaktirajte nas za rezervacije, upite ili da zajedno isplaniramo vaš savršeni događaj.",
    },
    form: {
      labels: {
        name: "Ime i Prezime",
        email: "Email Adresa",
        phone: "Broj Telefona",
        service: "Odaberite Uslugu",
        message: "Vaša Poruka",
      },
      placeholders: {
        name: "Ime i Prezime",
        email: "Email Adresa",
        phone: "Broj Telefona",
        service: "Odaberite Uslugu",
        message: "Vaša Poruka",
      },
      services: [
        { value: "rodjendani", label: "Rođendani" },
        { value: "djevojacke", label: "Djevojačke Večeri" },
        { value: "baby-shower", label: "Baby Shower" },
        { value: "italian-night", label: "Italian Night" },
        { value: "sip-paint", label: "Sip and Paint" },
        { value: "sminkanje", label: "Profesionalno Šminkanje" },
        { value: "najam", label: "Najam Prostora" },
        { value: "ostalo", label: "Ostalo" },
      ],
      submitButton: "Pošalji Upit",
      successMessage: {
        title: "Poruka poslana!",
        description: "Kontaktirat ćemo vas u najkraćem mogućem roku.",
      },
    },
    contactInfo: {
      address: {
        icon: "MapPin",
        text: "Adresa u centru grada, Sarajevo",
      },
      phone: {
        icon: "Phone",
        text: "+387 XX XXX XXX",
      },
      email: {
        icon: "Mail",
        text: "info@thestage.ba",
      },
    },
    map: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.4753388997635!2d18.413076315555877!3d43.856429879114334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8e8c36e0741%3A0x71f6f4f8c1f8e8c8!2sSarajevo!5e0!3m2!1sen!2sba!4v1234567890123!5m2!1sen!2sba",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // USLUGE - Sve pojedinačne servisne stranice
  // ═══════════════════════════════════════════════════════════════
  services: {
    // ROĐENDANI
    rodjendani: {
      name: "Rođendani",
      heroImage: "/src/assets/hero-background.jpg",
      tagline: "Tri jedinstvena rođendanska iskustva za nezaboravan dan",
      keyInfo: {
        price: "400 KM",
        capacity: "do 10 osoba",
        note: "Moguća doplata za više osoba",
        additionalInfo: "Uključeno piće i dekoracija",
      },
      packages: [
        {
          name: "Make-up Birthday",
          subtitle: "Ekskluzivni Kurs Šminkanja",
          description: "Postanite zvijezda na svoj dan! U spektakularnom okruženju, osigurali smo fantastične uslove da naučite osnove šminkanja pod vodstvom jedne od najpoznatijih makeup artistica u BiH, Nermine Nerme Ibrulj.",
          features: [
            "Profesionalni makeup tutorijal",
            "High-end proizvodi",
            "Personalizirani savjeti",
          ],
        },
        {
          name: "TikTok Izazov",
          subtitle: "Zaplešite do Zvijezda",
          description: "Zabavite se uz najnovije plesne izazove! Naš tim vas vodi kroz 10 trending TikTok izazova, savladavanje koreografije, snimanje i ocjenjivanje.",
          features: [
            "10 TikTok plesnih izazova",
            "Profesionalno snimanje",
            "Takmičenje i nagrade",
          ],
        },
        {
          name: "Interaktivne Društvene Igre",
          subtitle: "Zabava, Smijeh i Takmičenje",
          description: "Za nezaboravan provod, osigurali smo niz takmičarskih igara pogodnih za sve uzraste.",
          features: [
            "Razne društvene igre",
            "Pogodno za sve uzraste",
            "Zabava i smijeh zagarantovani",
          ],
        },
      ],
      ctaButton: {
        text: "Rezervišite Rođendan",
        link: "/kontakt",
      },
    },

    // DJEVOJAČKE VEČERI
    djevojacke: {
      name: "Djevojačke Večeri",
      heroImage: "/src/assets/hero-background.jpg",
      tagline: "Proslavite posljednje dane slobode sa stilom",
      keyInfo: {
        price: "400 KM",
        capacity: "do 10 osoba",
        note: "Sve što vam treba za savršenu djevojačku večer",
        additionalInfo: "Personalizovana dekoracija i atmosfera",
      },
      description: "Kreiramo savršenu 'Bride to be' atmosferu uz potpunu personalizaciju. Prepustite se zabavi i stvarajte uspomene koje će trajati zauvijek.",
      features: [
        "Potpuna personalizacija",
        "Bride to be dekoracija",
        "Foto sesija uključena",
        "Prosecco i grickalice",
        "Playlist po želji",
      ],
      ctaButton: {
        text: "Rezervišite Djevojačku",
        link: "/kontakt",
      },
    },

    // BABY SHOWER
    babyShower: {
      name: "Baby Shower",
      heroImage: "/src/assets/hero-background.jpg",
      tagline: "Savršeno okruženje da buduću mamu iznenadite poklonima",
      keyInfo: {
        price: "300 KM",
        capacity: "do 15 osoba",
        note: "Stvorite uspomene za cijeli život",
        additionalInfo: "Tema po želji (dječak/djevojčica)",
      },
      description: "The Stage nudi savršeno okruženje za proslavu baby shower-a. U fotogeničnom i prikladno uređenom prostoru, stvorite nezaboravne trenutke sa budućom mamom i najbližima.",
      features: [
        "Personalizovana dekoracija",
        "Fotogenično okruženje",
        "Piće i slatkiši",
        "Igre za baby shower",
        "Prostor za poklone",
      ],
      ctaButton: {
        text: "Rezervišite Baby Shower",
        link: "/kontakt",
      },
    },

    // ITALIAN NIGHT
    italianNight: {
      name: "Italian Night",
      heroImage: "/src/assets/hero-background.jpg",
      tagline: "Pasta & Spritz - Iskustvo talijanskog glamura",
      keyInfo: {
        price: "50 KM",
        priceNote: "po osobi",
        capacity: "Ograničen broj mjesta",
        note: "Samo za punoljetne",
        additionalInfo: "Rezervacije obavezne",
      },
      description: "Savršen 'date night' ili izlazak s prijateljima! Doživite autentično italijansko iskustvo dok pravite pastu od nule – od brašna, jaja i soli.",
      features: [
        "Priprema paste od nule",
        "Aperol Spritz welcome drink",
        "Talijanska muzika i ambijent",
        "Profesionalni kuvar vodi",
        "Večera uz vino",
      ],
      schedule: "Mjesečno (provjerite Instagram za datume)",
      ctaButton: {
        text: "Rezervišite Mjesto",
        link: "/kontakt",
      },
    },

    // SIP AND PAINT
    sipPaint: {
      name: "Sip and Paint",
      heroImage: "/src/assets/hero-background.jpg",
      tagline: "Opustite se uz kist, platno i koktel",
      keyInfo: {
        price: "50 KM",
        priceNote: "po osobi",
        capacity: "Ograničen broj mjesta",
        note: "Samo za punoljetne",
        additionalInfo: "Svi materijali uključeni",
      },
      schedule: "Svakog drugog četvrtka u mjesecu (20:00 - 22:00h)",
      description: "Oslobodite svog unutrašnjeg umjetnika! Bez obzira na nivo iskustva, naš instruktor će vas voditi kroz kreaciju vašeg umjetničkog djela.",
      features: [
        "Svi materijali uključeni",
        "Profesionalni instruktor",
        "Welcome drink",
        "Opuštena atmosfera",
        "Vaša slika ide kući sa vama",
      ],
      ctaButton: {
        text: "Rezervišite Mjesto",
        link: "/kontakt",
      },
    },

    // PROFESIONALNO ŠMINKANJE
    sminkanje: {
      name: "Profesionalno Šminkanje",
      heroImage: "/src/assets/hero-background.jpg",
      tagline: "Budite spremni za svaku priliku",
      keyInfo: {
        prices: {
          party: "60 KM - Party Make-up",
          bridal: "100 KM - Vjenčani Make-up",
          trial: "80 KM - Vjenčani Make-up Proba",
          lesson: "80 KM - Lična Edukacija (2h)",
        },
        note: "Koriste se isključivo high-end proizvodi",
      },
      description: "Nermina Nerma Ibrulj, jedna od najpoznatijih makeup artistica u BiH, donosi vrhunsku uslugu profesionalnog šminkanja.",
      services: [
        {
          name: "Party Make-up",
          price: "60 KM",
          description: "Savršen izgled za svaki event",
        },
        {
          name: "Vjenčani Make-up",
          price: "100 KM",
          description: "Izgledajte najbolje na svoj najvažniji dan",
        },
        {
          name: "Vjenčani Make-up Proba",
          price: "80 KM",
          description: "Savršenstvo zahtijeva pripremu",
        },
        {
          name: "Lična Edukacija",
          price: "80 KM (2 sata)",
          description: "Naučite šminkati se kao profesionalac",
        },
      ],
      ctaButton: {
        text: "Zakažite Termin",
        link: "/kontakt",
      },
    },

    // NAJAM PROSTORA
    najam: {
      name: "Najam Prostora",
      heroImage: "/src/assets/hero-background.jpg",
      tagline: "Vaša scena za bilo koji projekat",
      keyInfo: {
        price: "Cijena na upit",
        size: "75 m²",
        capacity: "do 30 osoba",
        note: "Fleksibilni termini",
        additionalInfo: "Profesionalna oprema dostupna",
      },
      description: "The Stage je više od prostora za proslave – idealan je za razne profesionalne i kreativne projekte.",
      useCases: [
        {
          name: "Podcast Studio",
          description: "Profesionalno okruženje za snimanje",
          features: ["Odlična akustika", "Profesionalna rasvjeta", "Ugođaj i estetika"],
        },
        {
          name: "Video/Foto Produkcija",
          description: "Fotogenični prostor za kreativne projekte",
          features: ["Prirodna svjetlost", "Različiti kutovi", "Instagram-worthy pozadine"],
        },
        {
          name: "Poslovni Eventi",
          description: "Skupovi, prezentacije, team building",
          features: ["Projektor i screen", "Moderno okruženje", "Catering opcije"],
        },
        {
          name: "Radionice i Edukacije",
          description: "Idealno za grupne sesije",
          features: ["Fleksibilni raspored", "Sve što vam treba", "Inspirativno okruženje"],
        },
      ],
      ctaButton: {
        text: "Kontaktirajte nas za Detalje",
        link: "/kontakt",
      },
    },
  },
};

/**
 * ═══════════════════════════════════════════════════════════════
 * DODATNE NAPOMENE ZA UREĐIVANJE
 * ═══════════════════════════════════════════════════════════════
 * 
 * KAKO PROMIJENITI SLIKE:
 * 1. Postavite svoju sliku u folder /src/assets/
 * 2. Promijenite putanju (npr. "/src/assets/moja-slika.jpg")
 * 3. Za hero slike: homepage.hero.backgroundImage
 * 
 * KAKO PROMIJENITI TEKSTOVE:
 * - Samo promijenite vrijednost između navodnika
 * - Primjer: title: "Stari Naslov" → title: "Novi Naslov"
 * 
 * KAKO DODATI NOVE STAVKE:
 * - Kopirajte postojeći objekat i uredite vrijednosti
 * - Primjer: Dodavanje nove usluge u dropdown meni
 * 
 * KAKO PROMIJENITI CIJENE:
 * - Pronađite services sekciju i uredite keyInfo.price
 * 
 * ZA DODATNU POMOĆ:
 * - Pogledajte README_CONTENT_MANAGEMENT.md
 */
