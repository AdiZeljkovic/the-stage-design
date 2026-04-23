import { Helmet } from "react-helmet-async";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  price?: string;
  priceCurrency?: string;
}

const ServiceSchema = ({ 
  name, 
  description, 
  url, 
  image,
  price,
  priceCurrency = "BAM"
}: ServiceSchemaProps) => {
  const serviceSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": `https://thestage.ba${url}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "The Stage Sarajevo",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Skenderija 28",
        "addressLocality": "Sarajevo",
        "postalCode": "71000",
        "addressCountry": "BA"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Sarajevo"
    }
  };

  if (image) {
    serviceSchema.image = image;
  }

  if (price) {
    serviceSchema.offers = {
      "@type": "Offer",
      "price": price,
      "priceCurrency": priceCurrency,
      "availability": "https://schema.org/InStock"
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
