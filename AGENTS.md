# AGENTS.md – Spor gennem mørket

> Udkast til projektets fælles instruktioner til Codex i PhpStorm. Baseret på projektets hidtidige beslutninger. Punkter markeret som uafklarede må ikke behandles som godkendte krav.

## Projekt og målgruppe

Vi udvikler et responsivt website til Temaprojekt 3 (FFP3) på multimediedesigneruddannelsen. Projektet kombinerer design, kode og usability og promoverer et Halloween-event med særligt fokus på personer med protanopi (rødblindhed).

Konceptet er en Halloween Walk i en skov: Deltagerne følger ledetråde, løser en mordgåde og har én time til at undslippe. Der er arbejdet med 10–15 ledetråde og gule markeringer/caution tape. Detaljer om den fysiske oplevelse er konceptinput og skal kun vises på websitet, når de er bekræftet i indholdet.

Den centrale persona er Anders, en mand i 30'erne med protanopi. Han er ambivert, har en tæt vennegruppe, holder af holdbaserede spilaftener og tager ofte en ven med til arrangementer. Han bruger primært mobilen og har behov for tydelige oplysninger, overskuelig navigation og en tryg bookingrejse. Hans mål er en sikker, sjov oplevelse i naturen og socialt samvær.

Team: Heidi, Halenur, Emma, Cecilie og Trine. Antag ikke ejerskab over bestemte filer eller komponenter uden en konkret aftale.

## Læs og undersøg før ændringer

- Læs eksisterende projektfiler, eventuelle lokale AGENTS.md-filer og relevante opgavekrav først.
- Undersøg Git-status og eksisterende kode, før du foreslår en filstruktur eller redigerer.
- Brug den aktuelle opgavebeskrivelse til afleveringskrav og den godkendte Figma-prototype til design. Tidligere hukommelse må ikke tilsidesætte aktuelle, bekræftede beslutninger.
- Skeln mellem observationer, krav, antagelser og forslag. Oplys om modstridende krav, før du implementerer det berørte område.
- Undersøg selv forhold, som kan findes i filer og tilgængelige værktøjer. Spørg brugeren om beslutninger, der ikke kan udledes.
- Hvis opgaven kun er analyse, må du ikke ændre kode eller Figma.

## Fire sider og trinvis implementering

Den hidtidige sidestruktur er:

1. Forside.
2. Oplevelsen.
3. Praktisk info.
4. Book billetter.

Bekræft sammenhængen med de fire aktuelle Figma-sider/frames. En Figma-page kan indeholde flere frames; sidetal må ikke udledes alene af Figma-filens page-antal. Booking kan have flere tilstande eller trin uden at være flere selvstændige websider.

Arbejd med én side ad gangen:

1. Læs sidens Figma-design, indhold og eksisterende kode.
2. Analysér layout, brugerrejse, interaktion, responsivitet og tilgængelighed.
3. Præsenter konkrete ændringsforslag og afklar åbne beslutninger.
4. Implementér den godkendte side og dens nødvendige fælles komponenter.
5. Kontrollér resultatet og rapportér ændringer, kontrolresultater og begrænsninger.
6. Afvent brugerens bekræftelse før næste side, medmindre brugeren udtrykkeligt har godkendt flere trin samlet.

## Designændringer kræver godkendelse

Figma er det visuelle udgangspunkt. Designet må gerne fremstå mere professionelt, men ændringer må ikke indføres stiltiende.

- Foreslå relevante forbedringer i spacing, alignment, hierarki, læsbarhed og komponentkonsistens.
- Registrér hvert forslag med ID, side/komponent, observation, konkret ændring, begrundelse, prioritet og status.
- Brug status: Afventer godkendelse, Godkendt eller Afvist.
- Implementér kun godkendte afvigelser fra Figma. Dette gælder også visuel finpudsning.
- Medtag de godkendte ændrings-ID'er i implementeringsplanen og den endelige Codex-prompt.
- Nye forslag under implementeringen kræver særskilt godkendelse. Stilhed tæller ikke som godkendelse.
- Almindelige kodevalg og fejlrettelser inden for en godkendt løsning kan udføres uden en ny godkendelsesrunde, når de ikke ændrer aftalt udseende, indhold eller funktionalitet.
- Hvis en tilgængelighedsfejl kræver en synlig designændring, forklar problemet og foreslå en konkret løsning til godkendelse.

## Kritisk afklaring: Grill-metoden

Brug principperne fra Grill-me.md og Grilling.md, når der er behov for at afklare designbeslutninger. Læs filerne, hvis de findes i projektet; antag ikke, at de er installerede værktøjer eller automatisk tilgængelige skills.

- Kortlæg beslutninger og deres afhængigheder: formål → indhold → hierarki → layout → interaktion → implementering.
- Stil i hver runde kun de spørgsmål, hvis forudsætninger allerede er afklaret.
- Giv en kort, begrundet anbefaling til hvert spørgsmål.
- Vent på svar, før afhængige beslutninger behandles.
- Vær kritisk og konkret uden at gentage afklarede spørgsmål eller fremstille personlig smag som en objektiv fejl.
- Afslut med en samlet forståelse og få den bekræftet, før ændringer udføres.

## Visuel retning og Figma

- Bevar den mørke skov- og Halloween-stemning med gul accent og eventuelt caution tape.
- Brug præcise farver, fonte, spacing og størrelser fra den aktuelle godkendte prototype. Opfind ikke værdier ud fra hukommelsen.
- Haunt AOE har været overvejet til logo/displaytekst; den er ikke automatisk godkendt som webfont eller brødtekstfont. Kontrollér valg, tilgængelige fontfiler og anvendelsesret før brug.
- Genbrug styles, komponenter og mønstre. Hold navigation, footer, knapper og formularer konsistente på tværs af siderne.
- Ved redigering i Figma: Brug hensigtsmæssige frames, grid, Auto Layout, constraints og komponentvarianter.
- Brug eksisterende godkendte billeder og assets. Opfind ikke logoer, billeder eller erstatningsindhold uden aftale.
- Hvis kun screenshots er tilgængelige, angiv hvilke mål, interaktioner og responsive tilstande der ikke kan verificeres.

## Tilgængelighed og protanopi

Arbejd mod WCAG 2.2 niveau AA som teknisk kvalitetsmål, medmindre den aktuelle opgavebeskrivelse kræver andet. Det er ikke en påstand om certificering eller fuld overholdelse.

- Formidl aldrig betydning alene med farve. Supplér med tekst, ikoner, form, mønstre eller andre tydelige signaler.
- Antag ikke, at gul på mørk baggrund automatisk har tilstrækkelig kontrast. Kontrollér de konkrete farvepar.
- Relevante kontrolgrænser og betydningsbærende grafiske elementer skal have mindst 3:1 mod tilstødende farver.
- Brug semantisk HTML, logisk overskriftshierarki og én tydelig hovedoverskrift pr. side som projektkonvention.
- Brug links til navigation og knapper til handlinger. Undgå klikbare div-elementer.
- Sørg for tastaturbetjening, logisk fokusrækkefølge, synlig fokusmarkering og ingen tastaturfælder. Fokus må ikke skjules af fastgjorte elementer.
- Brug synlige labels, passende inputtyper, forståelige fejlbeskeder og relevante autocomplete-attributter i formularer.
- Skriv meningsfulde alt-tekster. Brug tom alt-tekst til dekorative billeder.
- Gør indhold brugbart ved zoom og på smalle skærme uden unødvendig vandret scrolling.
- Respektér prefers-reduced-motion. Undgå blink, automatisk lyd og effekter, der forringer læsning eller navigation.
- Brug protanopi-simulering som supplement til kontrastkontrol og brugertest, ikke som bevis for tilgængelighed.
- Skeln mellem det, der kan vurderes i Figma, og det, der kræver kode eller brugertest. Påstå ikke, at skærmlæser- eller tastaturstøtte er testet ud fra et screenshot.

## Kode og responsivitet

- Følg projektets eksisterende tekniske opsætning og filstruktur. Brug som udgangspunkt semantisk HTML, CSS og kun nødvendig JavaScript, hvis projektet ikke allerede fastlægger andet.
- Indfør ikke frameworks, pakker, buildværktøjer eller backend uden aftale. PhpStorm som editor betyder ikke, at projektet skal bruge PHP.
- Brug CSS-variabler til fælles designtokens og Grid/Flexbox til layout. Undgå absolut positionering som grundlag for hele sidelayoutet.
- Tilpas mobil, tablet og desktop efter indholdets behov. Hvis kun desktop er designet, fremlæg en konkret responsiv løsning til godkendelse.
- Brug relative og konsistente filstier, meningsfulde klassenavne og beskrivende assetnavne.
- Hold ændringer fokuserede. Undgå unødvendig refaktorering og nye abstraktioner.
- Optimér billeder, bevar proportioner og angiv dimensioner, hvor det er muligt. Undgå lazy-loading af det primære hero-billede.
- Forklar væsentlige kodevalg på dansk, så gruppen kan forstå og redegøre for løsningen.

## Indhold, SEO og booking

- Skriv klart og på dansk. Kombinér stemning med konkrete oplysninger om oplevelse, varighed, sted, pris og booking, når disse er bekræftet.
- Opfind ikke datoer, adresse, billetpriser, aldersgrænser, ledige pladser eller sikkerhedsforhold.
- Sørg for relevante sidetitler, metabeskrivelser, lang="da" og logisk intern linking.
- Tilføj Open Graph og canonical med korrekte URL'er, når domæne og assets er kendt. Indsæt ikke fiktive produktionsadresser.
- Structured data skal afspejle synligt, bekræftet indhold. Vurder eksempelvis WebSite, WebPage, Organization og Event efter relevans. Krav fra tidligere studieprojekter er ikke automatisk krav her.
- Booking er som udgangspunkt en demonstration, indtil andet er aftalt. Byg ikke betaling, mails, persondatalagring eller eksterne integrationer uden konkret bestilling.
- En demo må ikke give indtryk af, at en rigtig reservation eller betaling er gennemført.

## Samarbejde og Git

- Bevar gruppemedlemmernes arbejde og brugerens lokale ændringer.
- Overskriv ikke filer eller omorganisér projektet uden at undersøge konsekvenserne.
- Undgå destruktive Git-kommandoer, force-push og ændring af delt historik.
- Følg aftalte branches og commitkonventioner. Opret ikke en ny samarbejdsmodel på egen hånd.
- Commit, push, merge og deployment udføres kun, når opgaven omfatter det eller brugeren har bedt om det.
- Læg aldrig adgangskoder, tokens, personoplysninger eller andre hemmeligheder i repositoryet.

## Kvalitetskontrol og aflevering af hvert trin

Kontrollér det, ændringen berører:

- Visuel overensstemmelse med Figma og godkendte ændrings-ID'er.
- Mobil-, tablet- og desktoplayout samt zoom/overflow.
- Navigation, links, knapper og relevante formulartilstande.
- Tastaturbetjening, fokus, semantik, labels og kontrast.
- Manglende assets, ødelagte stier og relevante konsolfejl.
- HTML/CSS-validering og eksisterende projektchecks, hvis værktøjerne er tilgængelige.

Automatiske checks erstatter ikke manuel vurdering. Rapportér ærligt, hvad der er testet, hvilke værktøjer der blev brugt, og hvad der ikke kunne verificeres. Skriv ikke nye tests, der blot gentager implementeringen eller ikke giver relevant sikkerhed.

Afslut hvert trin med en kort status: ændrede filer, hvad der blev ændret og hvorfor, anvendte godkendelser, kontrolresultater og resterende afklaringer.

## Uafklaret før implementering

Afklar kun punkterne, når de er relevante for det aktuelle trin:

- Aktuelt Figma-link og præcise frame-/nodehenvisninger til de fire sider.
- Aktuel opgavebeskrivelse og konkrete afleveringskrav.
- Endelige farvekoder, fonte, assets og responsive designs.
- Eksisterende filstruktur og tekniske rammer.
- Bookingens omfang og eventuelle trin/tilstande.
- Bekræftede eventdata og endeligt domæne.
- Teamets arbejdsfordeling og Git-workflow.