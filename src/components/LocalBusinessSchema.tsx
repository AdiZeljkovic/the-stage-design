import { Helmet } from "react-helmet-async";

interface LocalBusinessSchemaProps {
  businessName?: string;
  streetAddress?: string;
  telephone?: string;
}

const LocalBusinessSchema = ({
  businessName = "The Stage Sarajevo",
  streetAddress = "Zmaja od Bosne 4",
  telephone = "+387 62 307 151",
}: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://thestage.ba/#organization",
    name: businessName,
    image: "https://thestage.ba/og-image.jpg",
    url: "https://thestage.ba",
    telephone: telephone,
    email: "thestagesarajevo@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: streetAddress,
      addressLocality: "Sarajevo",
      postalCode: "71000",
      addressRegion: "Sarajevo",
      addressCountry: "BA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.856276,
      longitude: 18.403584,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "BAM",
    paymentAccepted: "Cash, Credit Card",
    areaServed: {
      "@type": "City",
      name: "Sarajevo",
      "@id": "https://www.wikidata.org/wiki/Q11194",
    },
    sameAs: [
      "https://www.instagram.com/thestagesarajevo",
      "https://www.facebook.com/thestagesarajevo",
      "https://www.tiktok.com/@thestagesarajevo",
    ],
    description:
      "The Stage Sarajevo je ekskluzivni event prostor za rođendane, djevojačke večeri, baby shower, Sip & Paint, Italian Night i profesionalne usluge šminkanja u Sarajevu.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usluge",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rođendani Sarajevo",
            description: "Organizacija rođendanskih proslava u Sarajevu",
          },
          price: "350",
          priceCurrency: "BAM",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Djevojačke večeri Sarajevo",
            description: "Organizacija djevojačkih večeri u Sarajevu",
          },
          price: "350",
          priceCurrency: "BAM",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Baby Shower Sarajevo",
            description: "Organizacija baby shower proslava u Sarajevu",
          },
          price: "300",
          priceCurrency: "BAM",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sip and Paint Sarajevo",
            description: "Kreativne večeri slikanja uz koktele u Sarajevu",
          },
          price: "50",
          priceCurrency: "BAM",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Italian Night Sarajevo",
            description: "Tematske talijanske večeri s pravljenjem paste u Sarajevu",
          },
          price: "50",
          priceCurrency: "BAM",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Profesionalno šminkanje Sarajevo",
            description: "Profesionalne usluge šminkanja za sve prilike u Sarajevu",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Najam prostora Sarajevo",
            description: "Najam event prostora za podcast, foto sesije i evente u Sarajevu",
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
