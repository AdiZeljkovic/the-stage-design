import { Helmet } from "react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "Koliko košta najam event prostora The Stage Sarajevo?",
    answer: "Cijene najma kreću se od 50 KM za najam prostora po satu. Paketi za rođendane kreću od 350 KM, djevojačke večeri od 350 KM, a baby shower od 300 KM. Sip & Paint i Italian Night večeri koštaju 50 KM po osobi.",
  },
  {
    question: "Gdje se nalazi The Stage Sarajevo?",
    answer: "The Stage Sarajevo nalazi se na adresi Zmaja od Bosne 4, 71000 Sarajevo, u samom centru grada.",
  },
  {
    question: "Koje usluge nudi The Stage Sarajevo?",
    answer: "Nudimo organizaciju rođendana, djevojačkih večeri, baby shower proslava, Sip & Paint kreativnih večeri, Italian Night tematskih večeri, profesionalno šminkanje, te najam prostora za podcast, foto sesije i poslovne događaje.",
  },
  {
    question: "Da li je moguće platiti kartično i na rate?",
    answer: "Da, sve iz naše ponude moguće je platiti kartično i na rate.",
  },
  {
    question: "Kako mogu rezervisati termin?",
    answer: "Termin možete rezervisati putem kontakt forme na našoj web stranici, pozivom na broj +387 62 307 151, ili putem naših društvenih mreža (Instagram, Facebook, TikTok).",
  },
  {
    question: "Koliko osoba može stati u prostor?",
    answer: "Naš prostor je idealan za manje i srednje grupe. Za tačne kapacitete ovisno o tipu događaja, kontaktirajte nas direktno.",
  },
  {
    question: "Da li nudite usluge šminkanja?",
    answer: "Da, nudimo profesionalne usluge šminkanja za sve prilike - od svakodnevnog looka do glamuroznog šminkanja za posebne prilike. Cijena kreće od 70 KM.",
  },
  {
    question: "Šta uključuje Sip & Paint večer?",
    answer: "Sip & Paint uključuje sav potreban materijal za slikanje (platno, boje, kistove), stručno vodstvo kroz proces slikanja, te osvježavajuće napitke. Cijena je 50 KM po osobi.",
  },
];

const FAQSchema = ({ faqs = defaultFAQs }: FAQSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default FAQSchema;
