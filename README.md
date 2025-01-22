# Moment 1.1 - Webbplats med Razor
#### DT191G – Webbutveckling med .NET
#### Av Kajsa Classon, VT25. 

En enklare webbplats skapad med ASP.net Core (ASP.NET Core Web App (Razor Pages)).

### Uppgiftsbeskrivning
Webbplatsen ska bestå av tre stycken separata Razor-pages, samt en gemensam mall för samtliga undersidor en "Shared"-fil med namnet _Layout.cshtml.

Webbplatsen ska ha stöd för statiska filer från wwwroot, från vilken CSS- och JavaScript-filer ska laddas in.

Webbplatsen ska utsmyckas grafiskt med hjälp av CSS, och det ska finnas någon form av valfri JavaScript-funktionalitet som ska ligga i en extern JavaScript-fil.

Webbplatsen redovisas med källkod samt en inspelad film där du demonstrerar din webbplats.

#### Sidor
Webbplatsen ska innehålla följande undersidor:
* Startsida med valfri information
* Razor - undersida med diverse innehåll skapat dynamiskt med Razor (se nedan)
* Om Sidan - information om dig som skapat webbplatsen

##### Razor-sidan
På sidan för Razor ska följande saker implementeras med Razor-syntax:

* En lista (list) med de kurser du läst i programmet i sträng-format (ex: "dt057g, Webbutveckling I"). Denna lista ska sedan skrivas ut till skärmen med lämplig loop, i form av en "unordered list".
* Datum och och klockslag som sidan besöks ska läsas in och skrivas ut på skärmen.
* En kontroll (med if-sats) ska göras som kontrollerar om det vid besöket är fredag - om så är fallet ska texten "Idag är det fredag!" skrivas ut, annars "Idag är det inte fredag!".
