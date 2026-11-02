# Spor i mørket
Studieprojekt – hjemmeside til en Halloween Walk med escaperoom elementer.

Hjemmesiden er et studieprojekt om et Halloween-event i en skov.

## Sider og mappestruktur

- `index.html`: Forside.
- `praktisk-info.html`: Praktisk information.
- `book-billetter.html`: Booking af billetter.
- `oplevelsen.html`: Oplevelsen.

```text
spor-i-morket/
├── index.html
├── praktisk-info.html
├── book-billetter.html
├── oplevelsen.html
├── css/
│   └── style.css
├── images/
│   └── .gitkeep
├── README.md
└── .gitignore
```

## Gruppemedlemmer

Skriv gruppemedlemmernes navne her:

- Navn:
- Navn:
- Navn:

## Commit, push og pull

- **Commit** gemmer et sæt ændringer i den lokale Git-historik.
- **Push** sender lokale commits til det fælles fjernrepository.
- **Pull** henter ændringer fra fjernrepositoryet og integrerer dem i den lokale gren.

## Afprøv forsiden lokalt

Åbn `index.html` via PhpStorms browserpreview, eller kør fra projektmappen:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Åbn derefter `http://127.0.0.1:8000/index.html`. Stop serveren med Ctrl+C.

Forsiden bruger lokale fonte i `fonts/`, billeder i `images/`, fælles styles i
`css/style.css` og menu-/safezone-interaktioner i `js/main.js`. Der kræves ingen
pakker eller buildproces. Undersiderne er fortsat skabeloner.

### Godkendte ændringer og kontrol

- F01, F04 og F05: 90 minutter, præcise sprogrettelser og primær booking-CTA.
- F02: mørke infokortoverskrifter på orange, beregnet kontrast 8,77:1.
- F03: ruteoverskrift, fast signaturforklaring og tekstlig kortbeskrivelse.
- F06: desktopafstanden mellem hero og kort er fortsat 138 px.
- F07: responsivt layout og mobilmenu; fælles navigation og footer-styles.
- F08: safezoner med hover, tastaturfokus, tryk, gentaget tryk, lukning udenfor
  og Escape. `aria-expanded` og den synlige forklaring styres samlet.
- F09 er et nyt forslag, **afventer godkendelse**: skift safezonernes lyse tekst
  til #11120D. Lys tekst på blå cirkel giver kun ca. 1,88:1; mørk tekst ville give
  ca. 9,05:1. Figma-farven er bevaret indtil godkendelse.

JavaScript-syntaks, lokale filstier, ID-referencer, tagbalance og
`git diff --check` er kontrolleret. Den lokale server leverer HTTP 200.
Browserkontrol kunne ikke gennemføres, da browserforbindelsen ikke var
 tilgængelig, og adgang til lokal Chrome ikke blev godkendt. Layout ved
320/375/768/1024/1440 px, zoom, faktisk fontvisning, fokus, mus/touch,
markørplacering og konsol skal derfor stadig afprøves i browseren.
Den installerede Tidy-version understøtter ikke HTML5; fuld HTML5- og
CSS-validering er ikke gennemført. Prototypeforbindelser er ikke verificeret;
koden følger de oplyste destinationsstier og de hentede safezone-varianter.

## Oplevelsen – implementering O01–O08

Åbn `http://127.0.0.1:8000/oplevelsen.html` efter start af serveren ovenfor,
eller brug PhpStorms browserpreview på `oplevelsen.html`.

- O01–O03: 13 faktiske Figma-billeder i en vandret desktopmosaik. Den tomme
  billedplads er fjernet. Swipe suppleres af Forrige/Næste og piletaster, når
  galleriet har fokus. Knappernes `aria-disabled` angiver begyndelse/slutning,
  mens fokus bevares. Ingen automatisk rulning. Teksten om 2026 er bevaret.
- O04 og O06: otte ledetråde fordelt på fire strækninger, konsekvent dansk
  "safezoner" og "Undslipper I mørket?". Spillet varer 90 minutter; den
  samlede besøgstid er cirka 1½–2 timer.
- O05: samme kortasset, safezone-kontroller, signaturforklaring og JavaScript
  som forsiden. Oplevelsen har sine egne kortkoordinater fra Figma.
- O07: én billedrække og stablede infobokse på mobil, derefter rutetekst,
  kort, CTA'er og fælles footer. Nye sidestyles er tilføjet efter eksisterende
  CSS; forsidens HTML og fælles JavaScript er uændrede.
- O08: FAQ-linket forventer `praktisk-info.html#faq`. **Afsnittet findes endnu
  ikke.** Tilføj `id="faq"` til FAQ-sektionen, når Praktisk info implementeres.
  `book-billetter.html` er fortsat kun en skabelon uden bookingfunktion.

### Udførte kontroller og begrænsninger

Figma-screenshot, galleriudsnit og prototypeforbindelser er læst. Figma angiver
vandret galleri og hover-skift af safezone-variant. Alle 13 billeder og tre
ikoner er hentet lokalt; billedfiler og dimensioner er kontrolleret.

JavaScript-syntaks, `git diff --check`, tagbalance, én h1, unikke ID'er,
ID-referencer, alt-attributter og lokale filstier består. Siden og 22 unikke
asset-/kode-URL'er returnerer HTTP 200 med ikke-tomme svar. En midlertidig
JavaScript-test med simuleret DOM består for galleriets begyndelse/slutning,
gentagne tryk, piletast, resize og reduced motion; den tester ikke browseradfærd.
Forsidens HTML og den eksisterende del af CSS er sammenlignet med tilstanden
før dette trin og er uændrede.

Beregnet kontrast ud fra CSS: lys brødtekst på baggrund 16,97:1, orange på
baggrund 8,77:1 og blå kontrolkant på baggrund 10,64:1. Den tidligere F09 om
safezone-tekstens utilstrækkelige kontrast afventer fortsat godkendelse;
Figma-farven er bevaret.

Der er ingen tilsluttet browser, og tidligere adgang til lokal Chrome blev
ikke godkendt. Visuel sammenligning ved 1440 px, test ved
320/375/768/1024 px, zoom, faktisk billedbeskæring og markørplacering,
mus/tastatur/touch og konsol er derfor **ikke browserverificeret**.
HTML5-/CSS-validering er ikke gennemført; den installerede Tidy-version
understøtter ikke HTML5. Ingen ændringer er foretaget i Praktisk info eller
Book billetter, og ingen commits, push eller deployment er udført.

## Praktisk info – implementering P01–P08

Åbn `http://127.0.0.1:8000/praktisk-info.html` med den lokale server, eller brug
PhpStorms browserpreview på `praktisk-info.html`.

- P01: infokortene genbruger mørke Haunt AOE-overskrifter (#11120D) på orange
  (#E5A53E), med eksisterende form og kant. Beregnet kontrast: 8,77:1.
- P02: starttiderne er præciseret til "Starttider hver dag kl. 18.00–22.45."
  Perioden er bevaret, og der angives ingen lukketid.
- P03: FAQ'en bruger tre selvstændige native `details`/`summary`-elementer.
  Hele spørgsmålsrækken er kontrollen, og plus/minus viser tilstanden. Flere
  svar kan åbnes samtidig. Svarene har automatisk højde i dokumentflowet og
  bruger Poppins. FAQ'en kræver ingen ny JavaScript eller animation.
- P04: introduktion, spørgsmål og svar følger de godkendte tekster.
- P05/P06: FAQ-punktet "Spørgsmål?" er fjernet. Kontaktområdet er bevaret med
  `tel:+4522222222` og `mailto:kontakt@sporgennemmorket.dk`.
- P07/P08: FAQ-listen er maksimalt 626 px og venstrestillet på desktop. På
  mobil fylder den indholdsbredden; kort og kontaktoplysninger stables.
  Navigation og footer genbruger eksisterende løsninger.

FAQ-målet `praktisk-info.html#faq` **findes nu**. Oplevelsens eksisterende
link matcher det og er ikke ændret. Dette erstatter de tidligere noters
oplysning om, at FAQ-målet manglede. Book billetter er fortsat en skabelon
uden bookingfunktion og er ikke implementeret i dette trin.

### Kontrol af Praktisk info

Figma-screenshot og de tre separate svarframes er læst. Ingen nye assets eller
fonte er nødvendige. Kontrol af tagbalance, én h1, unikke ID'er, ID-referencer,
filstier, fontfiler, kontaktdestinationer, JavaScript-syntaks og
`git diff --check` består. Siden leveres med HTTP 200. De tre FAQ-elementer
har ingen fælles `name`-gruppe og kan derfor være åbne uafhængigt.

Beregnet kontrast fra CSS: kortoverskrifter 8,77:1, brødtekst på sidens baggrund
16,97:1 og FAQ-tekst på den sammensatte baggrund cirka 14,47:1.
Forsidens, Oplevelsens og Book billetternes HTML samt fælles JavaScript er
sammenlignet med filerne før dette trin og er uændrede. Den tidligere CSS er
uændret; nye regler er afgrænset til Praktisk info og dens FAQ-klasser.

Der er fortsat ingen tilsluttet browser. Visuel sammenligning ved 1440 px,
320/375/768/1024 px, zoom, overflow, tastatur/fokus, alle FAQ-åbningstilstande,
klik på det direkte FAQ-link og konsol er derfor **ikke browserverificeret**.
Fuld HTML5-/CSS-validering er ikke gennemført. Prøv især alle tre svar åbne
samtidig, og kontrollér, at kontaktområde og footer skubbes ned. Brug Tab til
spørgsmålene og Enter/Mellemrum til at åbne og lukke dem.
