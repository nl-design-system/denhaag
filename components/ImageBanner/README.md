# Image banner

## Introductie

De image banner is een card die wordt gebruikt om personen of andere onderwerpen aandacht te geven.

## Wanneer te gebruiken

Gebruik de image banner wanneer er een visuele sectie op de pagina nodig is, bijvoorbeeld als er een persoon of ander
onderwerp (zoals een gebouw) centraal gezet wordt.

## Wanneer niet te gebruiken

Gebruik de image banner niet als je enkel een quote of informatie wil tonen. Het beeld is het belangrijkste aan deze
card en daarom moet er ook bewust een afbeelding worden uitgekozen.

## Gerelateerde componenten

- Image content link: gebruik de image content link als je een een foto in combinatie met een link meer wilt laten
  opvallen.
- Image list card: gebruik de image list card als je specifieke personen of andere onderwerpen wilt benadrukken in
  groepen.
- Blockquote: gebruik de blockquote als je enkel een quote wilt tonen waarbij het niet nodig is om te linken naar een
  andere pagina

## Atonomie

De image navigation card bestaat uit:

1. Image: afbeelding van een persoon of onderwerp
2. Container: vlak waar de tekst op staat
3. Title: titel die vertelt waar de afbeelding over gaat of een quote
4. Subtitle (optioneel): naam van de persoon of andere extra informatie
5. Icon: pijl icoon die aangeeft dat je kunt navigeren naar een andere pagina

## Interactiviteit

De image navigation card bevat de staten:

- default
- hover
- selected

## Ontwerp eigenschappen

### Typography

- Title:
  -- Small: TheMix/md/700
  -- Big: TheMix/xl/700
- Description: TheSans/sm/400

### Colors

- Title: text color Grey/5
- Description: text color Green/3
- Arrow icon: svg color Blue/3

### Interactive states

- Hover: subtitle wordt zichtbaar en image zoomt in (zie Animatie)
- Focus: border color Ocher/5

### Structure

- Container:
  -- padding-top, padding-left and padding-right 16px
  -- margin-bottom, margin-left and margin-right 24px
- Title: padding-bottom 4px
- Subtitle: padding-bottom 4px
- Icon: padding-bottom 8px

### Grootte

Small
Container: max-height 155px

Big

- Container: max-width 315px

De hoogte van de container mag bij zowel de small als de big variant maximaal 4 regels in totaal bevatten. Voorbeeld:

- Als een titel bestaat uit 3 regels, dan mag de ondertitel max. 1 regel zijn.
- Als de titel bestaat uit 2 regels, dan mag de ondertitel max. 2 regels zijn.
- Als de titel bestaat uit 1 regel, dan mag de ondertitel max. 3 regels zijn.

## Animatie

- On hover:
  -- Transition: ease-in-out 200ms
  -- Arrow: move-right 4px
  --- Move
  -- Image:
  --- Zoom → 2,5%

- On click:
- Transition: ease-in-out 100ms
- Transform: 1px;
- Image:
  -- Zoom → 2,5%
  -- Box-shadow: inset → 0 4px 50px rgba(0, 0, 0, 0, 0.02);

## Toegankelijkheid

Zorg ervoor dat de image navigation card toegankelijk is voor iedereen, ongeacht hun beperkingen. Gebruik alt-tekst bij
afbeeldingen en zorg ervoor dat de tekst op de card goed leesbaar is.

## Content richtlijnen

### Title

- Maak de titel niet te lang waardoor het te veel de foto bedekt.
- De tithle moet beknopt zijn en alleen de belangrijkste informatie bevatten.

### Subtitle

- Houd er rekening mee dat de subtitel pas zichtbaar wordt wanneer er overheen gehoverd wordt. Daarom mag het geen
  inhoudelijke informatie hebben, die over het hoofd gezien kan worden. Zie dit echt als extra toelichting.

## Best practices

- Zorg ervoor dat het belangrijkste onderdeel van de foto boven het midden van de foto zit. Zodat de container (het
  witte vlak) niet te erover valt.
- Zorg voor een duidelijke en aantrekkelijke afbeelding: de afbeelding is het belangrijkste element van de image card en
  moet dus van goede kwaliteit zijn en de aandacht trekken.
- Kies voor een rustige foto wanneer er meer dan 1 card naast elkaar gebruikt wordt.
- Zorg ervoor dat de afbeelding relevant is voor de inhoud van de card en dat de belangrijkste kenmerken van de
  afbeelding duidelijk zichtbaar zijn.
- De breedte van de card is afhankelijk van de grid.
- Gebruik minstens 2 cards bij elkaar. De image navigation card mag niet op zichzelf staand zijn.
- Er is geen maximum aan de hoeveelheid cards die je mag tonen in een groep.

## Relevante links

- https://uxdesign.cc/8-best-practices-for-ui-card-design-898f45bb60cc
