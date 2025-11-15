/**
 * CENTRALIZED CONTENT CONFIGURATION
 * 
 * This file contains all editable content for The Stage website.
 * To update content, simply modify the values in this file.
 * Changes will automatically reflect across the entire site.
 */

export const siteContent = {
  // ============= GENERAL SETTINGS =============
  general: {
    siteName: "THE STAGE",
    tagline: "Vaša Scena za Nezaboravne Trenutke",
    phone: "+387 XX XXX XXX",
    email: "info@thestage.ba",
    address: "Adresa u centru grada, Sarajevo",
    instagramUrl: "https://instagram.com/thestage",
    tiktokUrl: "https://tiktok.com/@thestage",
  },

  // ============= HOMEPAGE =============
  homepage: {
    hero: {
      title: "THE STAGE",
      subtitle: "Vaša Scena za Nezaboravne Trenutke",
      ctaPrimary: "Pogledajte Usluge",
      ctaSecondary: "Istražite Galeriju",
    },
    services: {
      title: "Naša Ponuda",
      items: [
        {
          name: "Proslave",
          description: "Rođendani, Djevojačke Večeri, Baby Shower",
        },
        {
          name: "Tematske Večeri",
          description: "Italian Night, Sip & Paint",
        },
        {
          name: "Profesionalne Usluge",
          description: "Šminkanje, Edukacije",
        },
        {
          name: "Najam Prostora",
          description: "Podcast, Eventi, Foto",
        },
      ],
    },
    about: {
      title: "Mjesto Gdje Se Stvaraju Uspomene",
      description:
        "Dobrodošli u The Stage, ekskluzivni prostor u srcu grada dizajniran za vaše najposebnije trenutke. Od luksuznih rođendanskih proslava do profesionalnih evenata, naš tim pretvara svaku viziju u stvarnost.",
      paymentNote: "Napomena: Sve iz naše ponude moguće je platiti kartično i na rate.",
    },
    gallery: {
      title: "Trenuci Uhvaćeni na Sceni",
      ctaButton: "Pogledajte Cijelu Galeriju",
    },
  },

  // ============= O NAMA PAGE =============
  about: {
    hero: {
      title: "O Nama",
      subtitle: "Upoznajte The Stage",
    },
    story: {
      title: "Više od Prostora. Mi smo Doživljaj.",
      description:
        "The Stage je rođen iz želje da se stvori jedinstvena platforma u Sarajevu – mjesto gdje se profesionalizam susreće sa zabavom, a luksuz postaje dostupan. Od intimnih proslava do velikih evenata, stvaramo nezaboravna iskustva.",
    },
    team: {
      title: "Upoznajte Tim",
      featured: {
        name: "Nermina Nerma Ibrulj",
        title: "Glavna Makeup Artistica & Kreativna Direktorica",
        bio: "Sa godinama iskustva na televiziji, filmu i u muzičkoj industriji, Nerma donosi dašak svjetskog glamura u The Stage. Njena strast prema umjetnosti i predanost savršenstvu čine svaki event jedinstvenim.",
      },
    },
    values: [
      {
        title: "Profesionalnost",
        description: "Vrhunska kvaliteta u svakom detalju",
      },
      {
        title: "Kreativnost",
        description: "Jedinstvena iskustva prilagođena vama",
      },
      {
        title: "Ekskluzivnost",
        description: "Premium usluge po pristupačnim cijenama",
      },
    ],
  },

  // ============= GALERIJA PAGE =============
  gallery: {
    title: "Galerija",
    subtitle: "Pogledajte naše nezaboravne trenutke",
    filters: ["SVI", "ROĐENDANI", "DJEVOJAČKE", "EVENTI", "PROSTOR", "MAKEUP"],
  },

  // ============= KONTAKT PAGE =============
  contact: {
    hero: {
      title: "Stupite na Scenu",
      description:
        "Kontaktirajte nas za rezervacije, upite ili da zajedno isplaniramo vaš savršeni događaj.",
    },
    form: {
      nameLabel: "Ime i Prezime",
      emailLabel: "Email Adresa",
      phoneLabel: "Broj Telefona",
      serviceLabel: "Odaberite Uslugu",
      messageLabel: "Vaša Poruka",
      submitButton: "Pošalji Upit",
      services: [
        "Rođendani",
        "Djevojačke Večeri",
        "Baby Shower",
        "Italian Night",
        "Sip and Paint",
        "Profesionalno Šminkanje",
        "Najam Prostora",
        "Ostalo",
      ],
    },
  },

  // ============= NAVIGATION =============
  navigation: {
    home: "Početna",
    services: "Usluge",
    gallery: "Galerija",
    about: "O nama",
    contact: "Kontakt",
    ctaButton: "Rezervišite Termin",
  },

  // ============= FOOTER =============
  footer: {
    description: "Vaša scena za nezaboravne trenutke u srcu Sarajeva.",
    quickLinks: {
      title: "Brzi Linkovi",
      links: [
        { name: "Početna", url: "/" },
        { name: "Usluge", url: "/usluge" },
        { name: "Galerija", url: "/galerija" },
        { name: "Kontakt", url: "/kontakt" },
      ],
    },
    copyright: "© 2025 The Stage. Sva prava zadržana.",
  },

  // ============= SERVICES MANAGER =============
  services: {
    rodjendani: {
      name: "Rođendani",
      price: "400 KM",
      priceNote: "Za do 10 osoba, moguća doplata za više",
      tagline: "Tri jedinstvena rođendanska iskustva za nezaboravan dan",
      packages: [
        {
          name: "Make-up Birthday",
          subtitle: "Ekskluzivni Kurs Šminkanja",
          description:
            "Postanite zvijezda na svoj dan! U spektakularnom okruženju, osigurali smo fantastične uslove da naučite osnove šminkanja pod vodstvom jedne od najpoznatijih makeup artistica u BiH, Nermine Nerme Ibrulj.",
        },
        {
          name: "TikTok Izazov",
          subtitle: "Zaplešite do Zvijezda",
          description:
            "Zabavite se uz najnovije plesne izazove! Naš tim vas vodi kroz 10 trending TikTok izazova, savladavanje koreografije, snimanje i ocjenjivanje.",
        },
        {
          name: "Interaktivne Društvene Igre",
          subtitle: "Zabava, Smijeh i Takmičenje",
          description:
            "Za nezaboravan provod, osigurali smo niz takmičarskih igara pogodnih za sve uzraste.",
        },
      ],
    },
    djevojacke: {
      name: "Djevojačke Večeri",
      price: "400 KM",
      priceNote: "Sve što vam treba za savršenu djevojačku večer",
      tagline: "Proslavite posljednje dane slobode sa stilom",
      description:
        "Kreiramo savršenu 'Bride to be' atmosferu uz potpunu personalizaciju. Prepustite se zabavi i stvarajte uspomene koje će trajati zauvijek.",
    },
    babyShower: {
      name: "Baby Shower",
      price: "300 KM",
      priceNote: "Stvorite uspomene za cijeli život",
      tagline: "Savršeno okruženje da buduću mamu iznenadite poklonima",
      description:
        "The Stage nudi savršeno okruženje za proslavu baby shower-a. U fotogeničnom i prikladno uređenom prostoru, stvorite nezaboravne trenutke sa budućom mamom i najbližima.",
    },
    italianNight: {
      name: "Italian Night",
      price: "50 KM po osobi",
      priceNote: "Samo za punoljetne",
      tagline: "Pasta & Spritz - Iskustvo talijanskog glamura",
      description:
        "Savršen 'date night' ili izlazak s prijateljima! Doživite autentično italijansko iskustvo dok pravite pastu od nule – od brašna, jaja i soli.",
    },
    sipPaint: {
      name: "Sip and Paint",
      price: "50 KM po osobi",
      priceNote: "Samo za punoljetne",
      tagline: "Opustite se uz kist, platno i koktel",
      schedule: "Svakog drugog četvrtka u mjesecu (20:00 - 22:00h)",
      description:
        "Izvedi prijateljicu, mamu ili sestru na nezaboravno kreativno iskustvo! Pijuckamo koktele, slušamo muziku i opuštamo se uz kist i platno.",
    },
    sminkanje: {
      name: "Profesionalno Šminkanje",
      price: "Cijena po dogovoru",
      priceNote: "Pojedinačno ili za grupe",
      tagline: "Vrhunska umjetnost šminkanja za sve prilike",
      description:
        "Prepustite se beskrajno talentiranim rukama vrhunskih šminkerica s karijerama na TV-u, filmu i muzičkoj industriji.",
      brands: ["Dior", "YSL", "Haus Labs", "Estee Lauder", "Huda Beauty", "Too Faced", "Kryolan", "MAC"],
    },
    najam: {
      name: "Najam Prostora",
      price: "Cijena po dogovoru",
      priceNote: "75 kvadrata pažljivo uređenog prostora",
      tagline: "Multipraktični prostor za sve vaše potrebe",
      description:
        "Idealna i prepoznatljiva lokacija u centru grada s parking opcijama. Zahvaljujući multipraktičnosti, prostor se lako transformiše iz krajnje ozbiljnog u moderan i zabavan set-up.",
      types: [
        "Najam za Snimanje Podcasta",
        "Najam za Prezentacije i Evente",
        "Studio za Fotografiranje",
        "Edukativne Radionice",
        "Privatni i Poslovni Događaji",
      ],
    },
  },
};

export default siteContent;
