<!-- @license CC0-1.0 -->

# Action

![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/alert?logo=npm&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/main?logo=github&style=flat-square)

Een task is een interactief element dat je navigeert naar een andere pagina en als doel heeft om een actie uit te voeren.

## When to use

Een task is een interactief element dat je navigeert naar een andere pagina en als doel heeft om een actie uit te voeren.

## When not to use

Een task is een interactief element dat je navigeert naar een andere pagina en als doel heeft om een actie uit te voeren.

## Alternatives and related components

- Link: Gebruik een link wanneer de gewenste actie is om de gebruiker naar een nieuwe pagina te leiden.
- Button: Gebruik een button om acties door te geven die gebruikers kunnen ondernemen en om interactie met de pagina mogelijk te maken.

## Anatomy

Een task bestaat uit:

1. Leading icon (optional): biedt ondersteuning bij de bevestiging.
2. Label: communiceert de taak die je gaat uitvoeren.
3. Subtext: biedt ondersteuning aan de label.
4. Deadline icon (optional): geeft weer dat er een waarschuwing is waar je op moet letten.
5. Date: communiceert de deadline van de taak.
6. Trailing icon: laat zien dat je ergens naartoe navigeert als je interacteert met de taak.
7. Secondary button: toont de actie die zal worden uitgevoerd wanneer de gebruiker ermee communiceert.
8. Primary button: toont de actie die zal worden uitgevoerd wanneer de gebruiker ermee communiceert.
9. Container

## Staten

De task bevat de staten:

- default
- hover
- checked
- focus

## Design properties

**Typography**

- Label: TheSans/md/700
- Subtext: TheSans/md/400
- Date:
  - Default: TheSans/md/400
  - Deadline: TheSans/md/700

**Colors**

Default:

- Label: text color Grey/5
- Subtext: text color Grey/4
- Deadline icon: svg color Orange/4
- Date:
- Default: text color Grey/4
- Deadline: text color Orange/5
- Trailing icon: svg color Blue/3
- Buttons: zoals beschreven staat bij het component Buttons.
- Container: border color Grey/2

Hover:

- Overview:
  - Container: background-color Warm/grey
- Detail:
  - Buttons: zoals beschreven staat bij het component Buttons.

Focus:

- Overview:
  - Container: border color Ocher/5
- Detail:
  - Buttons: zoals beschreven staat bij het component Buttons.

## Best practices

### Do's

- Gebruik pictogrammen en kleuren die gemakkelijk te begrijpen zijn. Gebruik een vinkje om voltooide taken aan te geven en een deadline icoon om achterstallige taken aan te geven.
- Zorg ervoor dat de taak responsief is en goed werkt op verschillende schermformaten en apparaten.
- Zorg voor duidelijke en beschrijvende labels en gebruik contrastrijke kleuren.
- Wanneer een taak is voltooid, animeer dan de bevestiging in de oude taak. De oude taak blijft dus in eerste instantie staan en wordt vervangen door de bevestiging.

### Don'ts

- Gebruik geen kleur als enige manier om informatie over te brengen, zoals bij het markeren van de deadline. Dit kan problematisch zijn voor gebruikers die kleurenblind zijn of die kleuren niet goed kunnen onderscheiden.
- Vermijd het gebruik van kleurencombinaties die onvoldoende contrast bieden en daardoor moeilijk leesbaar zijn voor gebruikers met een visuele beperking.
- Gebruik geen verwarrende, onduidelijke of dubbelzinnige labels voor de elementen van de taak. Zorg ervoor dat de labels duidelijk en beknopt zijn, zodat gebruikers de functie van elk element gemakkelijk kunnen begrijpen.
- Verberg geen belangrijke informatie: Verberg geen belangrijke informatie zoals de checked status of prioriteit van een taak en iconen die mogelijk niet toegankelijk zijn voor alle gebruikers.
- Vermijd onnodige animaties of bewegende elementen in de Task-component. Dit kan afleidend zijn en kan gebruikers afleiden van hun taak of de toegankelijkheid verminderen voor gebruikers met een visuele of cognitieve beperking.

## Content guidelines

Label:

- Gebruik labels die gemakkelijk te begrijpen zijn en de taak duidelijk omschrijven.
- Gebruik bijvoorbeeld in plaats van 'Taak 1' als label 'Verleng uw identiteitskaart’.
- Start de label van een taak die je moet uitvoeren altijd met een werkwoord in gebiedende wijs, gevolgd door een zaak/productnaam. Bijvoorbeeld: ‘Geef informatie voor uw aanvraag subsidie geluidsisolatie’.

Button:
De buttons moeten in de vorm ‘Infinitief (onbepaalde wijs)’ worden geschreven. Bijvoorbeeld: ‘Betalen’, ‘Informatie geven’ en ‘Negeren’.

Subtext:
De subtext moet altijd gelijk zijn wanneer een taak succesvol is uitgevoerd.

Datum:

- Communiceer datums op de volgende manier: ‘vóór [dag] [maand] [jaar]’. Bijvoorbeeld: ‘vóór 1 mei 2023’.
- Als een taak binnen 2 dagen moet uitgevoerd, maak je gebruik van de deadline variant. De datum communiceer je op de volgende manier:

  - nog 2 dagen
  - nog 1 dag
  - vandaag

## Accessibility

Gebruik semantische HTML-tags om de taakcomponent te structureren, zoals <form>, <label> en <input>. Dit maakt het voor schermlezers en andere ondersteunende technologieën gemakkelijker om het doel van de component te begrijpen.

Gebruik contrastrijke kleuren voor tekst en achtergronden om ervoor te zorgen dat de taakcomponent gemakkelijk leesbaar is voor gebruikers met visuele beperkingen. Test het onderdeel met een kleurcontrastcontrole om er zeker van te zijn dat het voldoet aan de toegankelijkheidsrichtlijnen.

Zorg ervoor dat alle functionaliteit binnen de taakcomponent toegankelijk is via een toetsenbord. Gebruikers die geen muis kunnen gebruiken, vertrouwen op toetsenbordnavigatie voor interactie met webpagina's.

Test met hulptechnologieën: test de taakcomponent met behulp van schermlezers en andere hulptechnologieën om ervoor te zorgen dat deze bruikbaar is voor gebruikers met een handicap.
