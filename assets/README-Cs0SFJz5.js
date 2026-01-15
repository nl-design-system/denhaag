const e=`<!-- @license CC0-1.0 -->

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/contact-timeline.svg)](https://www.npmjs.com/package/@gemeente-denhaag/contact-timeline)

## Documentatie

## Introductie

Een contact timeline is een visuele weergave van de interacties (hierna: contactmomenten) tussen een gebruiker en de gemeente. Het stelt de gebruiker in staat om snel en eenvoudig de geschiedenis van hun contactmomenten met een medewerker te begrijpen en te doorlopen.

## Wanneer gebruiken

Gebruik een contact timeline wanneer er contactmomenten tussen een gebruiker en de gemeente in een chronologische volgorde getoond moet worden. Deze contactmomenten hebben altijd te maken met een zaak of product die de gebruiker bij de gemeente heeft (lopen).

## Wanneer niet gebruiken

Gebruik een contact timeline niet wanneer er geen contactmomenten hoeven te worden gepresenteerd. Gebruik in plaats daarvan Procedure als je een proces wilt weergeven in chronologische volgorde waar geen interactie mogelijk is.

## Anatomie

Een contact timeline bestaat uit:

1. Date: communiceert de datum van wanneer het contactmoment heeft plaatsgevonden.
2. Separator: visuele indicatie tussen de date en channel op kleine viewports.
3. Marker: visuele indicatie die is verbonden met de line.
4. Line: de lijn die is verbonden met de marker.
5. Channel: het kanaal van het contactmoment.
6. Label: beschrijft het onderwerp van het contactmoment.
7. Trailing icon: laat zien dat het mogelijk is om het contactmoment in- en uit te klappen.
8. Sender label: geeft aan wie de afzender van het contactmoment is.
9. Subtext: communiceert de inhoud van het contactmoment.
10. File (optioneel): een bijlage.

## Staten

De contact timeline bevat de staten:

- default
- hover
- focus

## Ontwerpeigenschappen

### Typografie

🖥️ Desktop

- Date: TheSans/md/400
- Channel: TheSans/md/400
- Label: TheSans/lg/700
- Sender label: TheSans/sm/700
- Subtext: TheSans/md/400

📱 Mobile

- Date: TheSans/md/400
- Channel: TheSans/md/400
- Label: TheSans/lg/700
- Sender label: TheSans/md/700
- Subtext: TheSans/md/400

### Kleur

Default:

- Date: text color Grey/4
- Separator: svg color Grey/4
- Marker: svg color Grey/2
- Line: color Grey/2
- Channel: text color Grey/4
- Label: text color Grey/5
- Trailing icon: svg color Grey/4
- Sender label: text color Grey/5
- Subtext: text color Grey/4
- File: zoals beschreven staat bij het component File.

Hover:

- Label: text color Green/3
- Trailing icon: svg color Green/3
- Trailing icon: svg color Green/3
- File: zoals beschreven staat bij het component File.

Focus:

- Label and trailing icon: border color Ocher/5
- File: zoals beschreven staat bij het component File.

### Structuur

🖥️ Desktop

- Marker: padding-left 8px
- Channel: padding-left 16px
- Label: padding-left 24px
- Trailing icon: padding-left 4px
- Subtext: padding-bottom 24px
- File: padding-bottom 24px

📱 Mobile

- Label: padding-left 16px
- Sender label: padding-top 16px
- Subtext: padding-bottom 24px
- File: padding-bottom 32px

### Grootte

- Date: max-width 96px
- Separator: size 4px
- Marker: size 16px
- Line: bottom height 24px
- Channel: max-width 80px
- Trailing icon: size 24px

## Animatie

Bekijk de animatie

## Best practices

### Do’s

- Houd de contact timeline zo eenvoudig en overzichtelijk mogelijk, zodat de gebruiker snel kan begrijpen wat er is gebeurd.
- Zorg voor een chronologische volgorde van de interacties, van nieuw (boven) naar oud (onder).
- Zorg voor een consistente stijl en lay-out met andere componenten.
- Plaats bij de channel mail de inhoud van de mail zonder opmaak en maak gebruik van alinea’s zoals in de mail.
- Laat de gehele tijdlijn in één keer zien.

### Dont’s

- Overlaad de contact timeline niet met te veel informatie of onnodige details.
- Gebruik geen dubbelzinnige of verwarrende labels voor de verschillende soorten contactmomenten.
- Gebruik niet te veel kleuren of iconen die de gebruiker kunnen afleiden of verwarren.

## Content richtlijnen

### Label

- Gebruik duidelijke labels om de verschillende contactmomenten te onderscheiden.
- Gebruik labels die gemakkelijk te begrijpen zijn en het contactmoment duidelijk omschrijven.
- Houd de labels kort en krachtig.
- Schrijf de naam van de zaak of product niet zoals je dat bij de e-mail notificatie doet. Bijvoorbeeld: schrijf ‘Geef informatie’ in plaats van ‘Geef informatie voor uw aanvraag subsidie geluidsisolatie’.

### Channel

Er zijn 5 soorten kanalen die bij de contact timeline voorkomen.

1. mail
2. brief
3. balie
4. telefoon
5. mijn vraag

Schrijf de kanalen in kleine letters, zoals hierboven.

### Sender label

De afzender kan bestaan uit de volgende attributen:

- Voorletter(s) en achternaam ingelogde. Bijvoorbeeld: ‘A. Klap’.
- Gemeente Den Haag

### Subtext

De inhoud van een contactmoment kan uit onderstaande elementen bestaan. Dit verschilt per kanaal.

- Aanhef: ‘Beste [geslacht] [achternaam],’
- Context: beschrijft in voltooid deelwoord waar het contactmoment over gaat. Bijvoorbeeld: ‘U heeft op [datum] een mail ontvangen. Dit staat erin:’
- Inhoud: dit kan een notitie zijn die is geschreven door een medewerker, een geschreven tekst door de gebruiker, een bijlage of een mailinhoud zonder opmaak.
- Slot: ‘Met vriendelijke groet,Gemeente Den Haag’

Hieronder is een overzicht te zien van de opbouw per kanaal.

- mail: aanhef, context, mailinhoud, slot.
- brief: bijlage.
- balie: aanhef, context, notities van medewerker, slot.
- telefoon: aanhef, context, notities van medewerker, slot.
- mijn vraag: geschreven tekst door gebruiker.

### Date

- Communiceer datums op de volgende manier: [dag]-[maand]-[jaar]. Bijvoorbeeld: ‘1-5-2023’.
- Als een contactmoment eergisteren, gisteren of vandaag heeft plaatsgevonden, communiceer deze dan op de volgende manier:
  - vandaag
  - gisteren
  - eergisteren

## Toegankelijkheid

- Zorg voor duidelijke en beknopte tekstbeschrijvingen voor elk contactmoment die in de tijdlijn wordt weergegeven. Gebruik hierbij beschrijvende taal en vermijd jargon.
- Maak de tijdslijn gemakkelijk te navigeren met behulp van duidelijke knoppen voor het scrollen door de tijdlijn en voor het selecteren van een specifieke contactmoment.
- Zorg ervoor dat de tijdlijn ook toegankelijk is voor gebruikers die alleen met een toetsenbord navigeren, door het gebruik van duidelijke focusindicatoren en toetsenbordnavigatie.
- Zorg ervoor dat de tijdlijn ook werkt met screenreaders, door het gebruik van beschrijvende HTML-elementen en ARIA-attributen die de inhoud en navigatie van de tijdlijn beschrijven.

## Onderzoek

In januari en in februari 2023 is er onderzoek gedaan naar dit component.

Bevindingen:

- Overzicht contact timeline is erg waardevol​.
- Op mobiel is de contact timeline soms niet direct duidelijk​. Deze is in maart 2023 aangepast om het duidelijker en rustiger te maken.

## Gerelateerde componenten

- Form navigation: Gebruik de form navigation om de voortgang van de gebruiker door een reeks stappen in een formulier te laten zien
- Status: Gebruik de status om een reeks informatie in het proces van een lopende zaak weer te geven.
- Procedure: Gebruik de procedure wanneer een gebruiker moet worden geïnformeerd over de komende stappen.

## Meer informatie online

-
`;export{e as r};
