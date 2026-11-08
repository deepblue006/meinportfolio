# Mein Portfolio – so kommt die App aufs Handy

Die App ist eine PWA: eine Webseite, die du wie eine App auf den Startbildschirm legst. Sie braucht eine eigene https-Adresse. Am einfachsten kostenlos über GitHub Pages oder Netlify.

## 1. Online stellen

Hochgeladen wird **der Inhalt des Ordners `mein-portfolio`**, nicht die ZIP-Datei selbst. Die Datei `mein-portfolio-start.json` liegt bewusst außerhalb dieses Ordners: Sie enthält deine Positionen und gehört nicht ins Netz.

**GitHub Pages (geht auch am iPhone):**
1. ZIP in der Dateien-App antippen, dann wird sie entpackt.
2. Auf github.com (in Safari, nicht in der GitHub-App) ein neues Repository anlegen, z. B. `portfolio`, Sichtbarkeit **Public** (Pages ist im kostenlosen Konto nur für öffentliche Repositorys).
3. **Add file → Upload files**: `index.html`, `manifest.webmanifest`, `sw.js` und `ANLEITUNG.md` hochladen → Commit.
4. Den Ordner `icons` nachladen: **Add file → Create new file**, als Name `icons/x` eingeben und speichern, dann im Ordner `icons` die vier PNG-Dateien hochladen und `x` löschen. Am Rechner geht es einfacher: den ganzen Ordnerinhalt ins Upload-Fenster ziehen.
5. **Settings → Pages → Branch `main`, Ordner `/ (root)` → Save.**
6. Nach 1–2 Minuten läuft die App unter `https://DEINNAME.github.io/portfolio/`.

Öffentlich sichtbar ist dann nur der Programmcode. Deine Positionen und API-Schlüssel liegen nur im Speicher deines Handys.

**Netlify (am Rechner):** https://app.netlify.com/drop öffnen und den Ordner `mein-portfolio` ins Fenster ziehen.

## 2. Aufs Handy holen

- **iPhone:** Adresse in Safari öffnen → Teilen → „Zum Home-Bildschirm“.
- **Android:** In Chrome öffnen → Menü → „App installieren“.

## 3. Einrichten

1. Kostenlosen Schlüssel auf https://www.alphavantage.co/support/#api-key holen und in der App unter **Einstellungen** eintragen. Damit kommen die Aktienkurse.
   Optional: kostenlosen CoinGecko-Demo-Schlüssel (https://www.coingecko.com/en/api/pricing) eintragen – Krypto läuft aber auch ohne.
2. Unter **Einstellungen → Datei laden** die Datei `mein-portfolio-start.json` (liegt neben dem Ordner) wählen. Dann stehen Amazon, Netflix, deine 8 Kryptos von Bitvavo, Startkapital 12.000 €, Ziel 30.000 €, die Cash-Konten (inkl. 1.000 € Krypto-Reserve) und der Krypto-Rücksetzer-Plan drin.
3. Neue Kryptos über **+ Position → Krypto** anlegen (Suche findet die CoinGecko-ID). Bei Krypto-Käufen Datum und Stück unter „Käufe für die Haltefrist“ eintragen – daraus berechnet die App, ab wann ein Verkauf steuerfrei ist.
4. Guthaben bei Trade Republic und Bitvavo unter **Cash-Reserve** aktuell halten.
5. **Krypto-Rücksetzer-Plan** (unter den Krypto-Positionen): zeigt, wie weit der Krypto-Bestand seit dem Bezugstag gefallen ist. Bei −20 % und −30 % erscheint oben ein Hinweis. Nach dem Kauf im Plan „Gekauft“ tippen (zweimal), den Kauf mit Datum bei der Position unter „Käufe für die Haltefrist“ eintragen und das Bitvavo-Guthaben senken.

## Kursquellen

| Was | Quelle | Schlüssel |
|---|---|---|
| Aktien | Alpha Vantage (25 Abrufe am Tag, 1 Abruf je Aktie) | ja, kostenlos |
| Krypto | CoinGecko (ohne Schlüssel, oder Demo-Schlüssel: 10.000 Abrufe im Monat) | optional, kostenlos |
| Wechselkurse | EZB über Frankfurter | nein |

Krypto und Wechselkurse holt die App beim Öffnen und alle 2 Minuten. Aktien holt sie sparsam: höchstens alle 60 Minuten (einstellbar), am Wochenende gar nicht, und nie mehr als 25 Abrufe am Tag. Bei 2 Aktien reicht das für rund 12 Aktualisierungen am Tag, bei 6 Aktien für 4.

Symbole: US-Werte ohne Zusatz (AMZN), Toronto mit .TRT (CSU.TRT), Xetra mit .DEX (SAP.DEX), London mit .LON.

## Neue Version einspielen

1. Bei GitHub nur die geänderten Dateien ersetzen (Claude sagt dir jeweils, welche). Nach jeder Änderung ist `sw.js` dabei, damit das Handy die neue Version lädt.
2. App öffnen, schließen und wieder öffnen – dann ist die neue Version aktiv. Deine Daten bleiben erhalten.

**Neues Icon (iPhone):** iOS übernimmt ein geändertes Icon nicht von selbst. Dafür:
1. In der App **Einstellungen → Als Datei sichern**.
2. App vom Home-Bildschirm löschen (dabei löscht iOS auch ihre Daten).
3. Adresse in Safari öffnen → Teilen → „Zum Home-Bildschirm“.
4. **Einstellungen → Datei laden** mit der Sicherung, dann den Alpha-Vantage-Schlüssel neu eintragen.

## Sichern

Einstellungen → **Als Datei sichern**. Der API-Schlüssel wird dabei nicht mitgespeichert.
