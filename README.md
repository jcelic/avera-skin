# Avera Skin - Homepage

Responzivan homepage izrađen prema Figma predlošku, u HTML5, CSS3 i Vanilla JavaScriptu.

## Pokretanje

Otvoriti `index.html` u pregledniku.

Podaci se učitavaju iz `data/*.json` pomoću `fetch`, što radi samo preko lokalnog servera (npr. Live Server u VS Codeu). Kad se stranica otvori izravno (`file://`), koriste se isti podaci zapisani u `script.js`.

## Implementirane funkcionalnosti

- **Header** - News dropdown i odabir jezika (zatvaranje klikom izvan i tipkom Escape), hamburger izbornik na manjim ekranima, Search modal (pretraga eventa i članaka po naslovu), Login modal s validacijom
- **Hero** - CTA vodi na sekciju Categories
- **Categories** - 5 kartica generiranih iz podataka, raspored 2 + 2 + 1 na mobitelu
- **Events** - timeline, 6 eventa, View all / View less
- **Journal** - asimetrični CSS Grid (2 × 2, kartice različitih visina) na desktopu i mobitelu, modal s detaljima članka i popisom svih članaka
- **Newsletter** - validacija, simulirano slanje, poruke dostupne čitačima ekrana (`aria-live`)
- **Footer** - logo, ikone društvenih mreža, grupe poveznica, newsletter i pravni dio, prilagođeni desktopu i mobitelu
- **Nedostupne stranice** - linkovi na stranice koje ne postoje (navigacija, News, footer, društvene mreže, See more) imaju stvarne putanje umjesto `href="#"`, a klik na njih prikazuje demo poruku (toast)

### Bonus

1. Filtriranje eventa po kategoriji i sortiranje po datumu
2. Učitavanje podataka iz JSON-a pomoću `fetch`, uz loading i empty stanja; ako učitavanje ne uspije, greška se ispisuje u konzolu i koriste se rezervni podaci
3. Scroll animacije pomoću `IntersectionObserver`, isključene uz `prefers-reduced-motion`
4. Odabrani jezik sprema se u `localStorage`

## Odstupanja od Figme

- Mobilni predložak ne prikazuje odabir jezika, Search i Login; postavljeni su u header uz hamburger kako bi bili dostupni bez otvaranja izbornika
- Header ostaje fiksiran na vrhu tijekom cijelog scrolla, i na desktopu i na mobitelu (u predlošku na desktopu prati samo hero, a na mobitelu se odmah pomiče sa stranicom), kako bi navigacija uvijek bila dostupna; pri scrollu postaje tamniji i niži radi čitljivosti preko sadržaja
- Hero je visine punog ekrana (`100vh`) umjesto fiksnih 1000px iz predloška, kako bi na svakom ekranu ispunio cijeli prvi prikaz bez vidljivog dijela sljedeće sekcije
- Filteri i sortiranje eventa nisu u dizajnu; dodani su zbog bonus zadatka
- Modali (Search, Login, Journal), otvoreni mobilni izbornik i toast poruke nisu u predlošku; oblikovani su u stilu ostatka stranice
- Ikona X (zatvaranje mobilnog izbornika i modala) nije u predlošku; SVG oblik preuzet je iz Material Symbols i umetnut izravno u HTML

## Utrošeno vrijeme

Oko 20 sati ukupno - osnovni zadatak, bonus zadaci te sređivanje i refaktoriranje koda.

## Tehničke odluke

- `clamp()` za naslove i veće razmake umjesto puno breakpointa; media queries samo za razlike u layoutu
- `<dialog>` za modale umjesto `div`-a s vlastitom JS logikom
- Jedna funkcija `loadData` za sve JSON datoteke umjesto ponavljanja `fetch` koda, s rezervnim podacima ako učitavanje ne uspije
- Hover efekti unutar `@media (hover: hover)`, kako se na touch uređajima ne bi "zaglavili" nakon dodira
- `matchMedia` umjesto `resize` eventa za zatvaranje mobilnog izbornika, jer se okida samo pri prelasku granice od 1150px
- Fontovi s Google Fonts umjesto lokalnih datoteka; zato nema mape `assets/fonts`

## Poznati nedostaci

- Bez lokalnog servera `fetch` ne uspijeva, pa se u konzoli pojavljuju poruke o grešci, a koriste se rezervni podaci
- Podaci postoje na dva mjesta (JSON i `script.js`) kako bi stranica radila i bez servera
- Odabir jezika je demonstracijski, bez stvarnog prijevoda
