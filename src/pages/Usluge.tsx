import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Usluge = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20 bg-cream min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-serif font-bold text-center text-dark-grey mb-4">
            Naše usluge
          </h1>
          <p className="text-center text-soft-grey mb-12 text-lg">
            Cjenovnik i detalji svih dostupnih paketa
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {/* Rođendani */}
            <AccordionItem value="rodjendani" id="rodjendani" className="bg-warm-white rounded-lg shadow-soft px-6">
              <AccordionTrigger className="text-xl font-serif font-semibold text-dark-grey hover:text-gold">
                Rođendani (400 KM)
              </AccordionTrigger>
              <AccordionContent className="text-soft-grey space-y-4 pt-4">
                <p className="text-sm italic">Za do 10 osoba, moguća doplata za više</p>
                <p>Nudimo tri jedinstvena rođendanska iskustva. Odaberite svoj savršeni paket:</p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-dark-grey mb-2">1. Make-up Birthday</h4>
                    <p className="font-medium mb-2">Ekskluzivni kurs šminkanja</p>
                    <p className="mb-3">
                      Postanite zvijezda na svoj dan! U spektakularnom okruženju, osigurali smo fantastične uslove da naučite osnove šminkanja 
                      pod vodstvom jedne od najpoznatijih makeup artistica u BiH, Nermine Nerme Ibrulj.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>Korištenje samo najboljih, high-end proizvoda</li>
                      <li>Moguć odabir tematskog šminkanja (fantasy, basic natural, oriental, full face)</li>
                      <li>Fotografiranje ispred specijalno dizajniranih "Instagrammable" pozadina</li>
                      <li>Odjeća i rekviziti za jedinstven izgled</li>
                      <li>Naš hit koktel "Pink Lemonade" s jestivim šljokicama</li>
                      <li>Snack bar (kokice, muffins, grickalice, slatkiši)</li>
                      <li>Neograničeni sokovi</li>
                      <li>Gift bag za slavljenicu</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-dark-grey mb-2">2. TikTok Izazov</h4>
                    <p className="font-medium mb-2">Zaplešite do zvijezda</p>
                    <p className="mb-3">
                      Zabavite se uz najnovije plesne izazove! Naš tim vas vodi kroz 10 trending TikTok izazova, 
                      savladavanje koreografije, snimanje i ocjenjivanje.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>Pojedinačne i grupne aktivnosti</li>
                      <li>Tehnička oprema i pomoć pri snimanju videa za društvene mreže</li>
                      <li>Slikanje ispred posebno dizajniranih zidova (backdrop)</li>
                      <li>"TikTok Most Viral" music playlista</li>
                      <li>Snack bar</li>
                      <li>Neograničena pića (Coca-Cola, Mojito limunada, ledeni čaj)</li>
                      <li>Gift bag za slavljenika/slavljenicu</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-dark-grey mb-2">3. Interaktivne Društvene Igre</h4>
                    <p className="font-medium mb-2">Zabava, smijeh i takmičenje</p>
                    <p className="mb-3">
                      Za nezaboravan provod, osigurali smo niz takmičarskih igara pogodnih za sve uzraste. 
                      Naše osoblje vas vodi kroz svijet smijeha i zabave koji garantovano izgleda sjajno uživo i na kameri.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>Igre poput Ping Pong Balls Challenge, Guess the Line, Gluhi Telefoni, Wheel of Luck</li>
                      <li>Vrijeme za ples uz hits playlistu ispod disko kugle</li>
                      <li>Snack bar</li>
                      <li>Neograničena pića (Coca-Cola, Mojito limunada, ledeni čaj)</li>
                      <li>Gift bag za slavljenika/slavljenicu</li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm italic mt-4">
                  Dodatne opcije: Torta uz doplatu i rezervaciju. Mogućnost doplate za profesionalnog fotografa.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Djevojačke Večeri */}
            <AccordionItem value="djevojacke" id="djevojacke" className="bg-warm-white rounded-lg shadow-soft px-6">
              <AccordionTrigger className="text-xl font-serif font-semibold text-dark-grey hover:text-gold">
                Djevojačke Večeri (400 KM)
              </AccordionTrigger>
              <AccordionContent className="text-soft-grey space-y-4 pt-4">
                <p>
                  Proslavite posljednje dane slobode sa stilom! Kreiramo savršenu "Bride to be" atmosferu uz potpunu personalizaciju.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li>Prilagođenu scenografiju uz LED znak "Bride to be"</li>
                  <li>Tematski mobilijar (posuđe, odjeća, lente, veo, naočale, lepeze...)</li>
                  <li>Mnogobrojne rekvizite za nezaboravno fotografiranje</li>
                  <li>Tehničku opremu za snimanje</li>
                  <li>Interaktivne i zabavne igre za cijelo društvo</li>
                  <li>Snack bar</li>
                  <li>Ozvučenje i personaliziranu muzičku listu</li>
                </ul>
                <p className="text-sm italic">Moguć dogovor o dodatnoj personalizaciji i organizaciji</p>
              </AccordionContent>
            </AccordionItem>

            {/* Tematske Večeri */}
            <AccordionItem value="tematske" className="bg-warm-white rounded-lg shadow-soft px-6">
              <AccordionTrigger className="text-xl font-serif font-semibold text-dark-grey hover:text-gold">
                Tematske Večeri
              </AccordionTrigger>
              <AccordionContent className="text-soft-grey space-y-6 pt-4">
                <div id="italian-night">
                  <h4 className="font-semibold text-dark-grey mb-2">Italian Night (Pasta & Spritz)</h4>
                  <p className="text-sm italic mb-2">(Samo za punoljetne) - 50 KM po osobi</p>
                  <p>
                    Savršen 'date night' ili izlazak s prijateljima! Pravljenje paste od nule – od brašna, jaja i soli. 
                    Svako dobija svoju stanicu za rad pod vodstvom edukatora, uz smijeh, slikanje i talijanske hitove.
                  </p>
                  <p className="mt-2">
                    Osim paste, učimo praviti (i degustirati) klasična talijanska pića: Aperol, Limoncello i Fruit Prosecco. 
                    Na kraju, uživajte u degustaciji vlastite hrane! Potrebno je rezervirati mjesto.
                  </p>
                </div>

                <div id="sip-paint">
                  <h4 className="font-semibold text-dark-grey mb-2">Sip and Paint</h4>
                  <p className="text-sm italic mb-2">(Samo za punoljetne) - 50 KM po osobi</p>
                  <p>
                    Izvedi prijateljicu, mamu ili sestru! Svakog drugog četvrtka u mjesecu (20:00 - 22:00h) pijuckamo koktele, 
                    slušamo muziku i opuštamo se uz kist i platno. Fun fact: ne morate znati slikati!
                  </p>
                  <p className="mt-2">
                    Uključuje: Slikarsko platno i boje, neograničene koktele (ili virgin koktele), te slane i slatke grickalice. 
                    Kući nosite svoja umjetnička djela. Potrebno je rezervirati mjesto.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-dark-grey mb-2">Girls Night Party</h4>
                  <p>
                    Pratite naše društvene mreže i saznajte temu iduće zabave! Obucite haljinu koju nemate gdje obući, 
                    dođite u pidžami ili se maskirajte. Očekuju vas takmičenja, smijeh, kokteli, ples i vrijedne nagrade.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Baby Shower */}
            <AccordionItem value="baby-shower" id="baby-shower" className="bg-warm-white rounded-lg shadow-soft px-6">
              <AccordionTrigger className="text-xl font-serif font-semibold text-dark-grey hover:text-gold">
                Baby Shower (300 KM)
              </AccordionTrigger>
              <AccordionContent className="text-soft-grey space-y-4 pt-4">
                <p>
                  Savršeno okruženje da buduću mamu iznenadite poklonima. Stvorite uspomene za cijeli život u fotogeničnom 
                  i prikladno uređenom prostoru.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li>Savršeno uređen prostor i pozadine za slikanje</li>
                  <li>Mjesto za sjedenje, ples i druženje</li>
                  <li>Neograničen snack and soda bar</li>
                  <li>Opremu za snimanje i slikanje kako bi trenuci ostali zabilježeni</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Profesionalno Šminkanje */}
            <AccordionItem value="sminkanje" id="sminkanje" className="bg-warm-white rounded-lg shadow-soft px-6">
              <AccordionTrigger className="text-xl font-serif font-semibold text-dark-grey hover:text-gold">
                Profesionalno Šminkanje (Po dogovoru)
              </AccordionTrigger>
              <AccordionContent className="text-soft-grey space-y-4 pt-4">
                <p>
                  Pojedinačno ili za grupe, za svaku priliku. Prepustite se beskrajno talentiranim rukama vrhunskih šminkerica 
                  s karijerama na TV-u, filmu i muzičkoj industriji.
                </p>
                <p className="font-medium">
                  Koristimo isključivo high-end proizvode: Dior, YSL, Haus Labs, Estee Lauder, Huda, Too Faced, Kryolan, MAC i mnogi drugi.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Najam Prostora */}
            <AccordionItem value="najam" id="najam" className="bg-warm-white rounded-lg shadow-soft px-6">
              <AccordionTrigger className="text-xl font-serif font-semibold text-dark-grey hover:text-gold">
                Najam Prostora (Po dogovoru)
              </AccordionTrigger>
              <AccordionContent className="text-soft-grey space-y-6 pt-4">
                <div id="podcast">
                  <h4 className="font-semibold text-dark-grey mb-2">1. Najam za snimanje podcasta</h4>
                  <p>
                    Idealna i prepoznatljiva lokacija u centru grada s parking opcijama. Zahvaljujući multipraktičnosti, 
                    prostor se lako transformiše iz krajnje ozbiljnog u moderan i zabavan set-up.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-dark-grey mb-2">2. Najam za prezentacije i evente</h4>
                  <p>
                    75 kvadrata pažljivo uređenog prostora može postati lokacija za vaš idući influencerski event ili lansiranje proizvoda. 
                    Nudimo scenske elemente, displaye za proizvode i dekoracije.
                  </p>
                </div>

                <div id="foto">
                  <h4 className="font-semibold text-dark-grey mb-2">3. Studio za fotografiranje</h4>
                  <p>
                    Za sve bitne datume koje želite uramiti – mature, vjenčanja, diplomiranje. Nudimo suradnju s vrhunskim fotografima.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-dark-grey mb-2">4. Edukativne radionice</h4>
                </div>

                <div>
                  <h4 className="font-semibold text-dark-grey mb-2">5. Ostali privatni i poslovni događaji</h4>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Usluge;
