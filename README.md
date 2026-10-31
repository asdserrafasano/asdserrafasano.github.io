# Effetto Serra – sito della ASDP Roberto Serra Fasano

Sito e web app della pallamano Serra Fasano, pubblicato con GitHub Pages sul dominio `https://pallamanoserra.net/` (file `CNAME`; il vecchio indirizzo `https://asdserrafasano.github.io/` reindirizza al nuovo). Le richieste di iscrizione arrivano a asdserrafasano@gmail.com tramite FormSubmit.

## Struttura
- `index.html` – tutto il sito (testi, stile, calendario, classifica, rassegna stampa)
- `sw.js` – funzionamento offline della web app. **A ogni modifica aumenta il numero in `VERSIONE`** (es. `effetto-serra-v20` → `effetto-serra-v20`)
- `manifest.webmanifest` e `icons/` – installazione come app

## Dati aggiornati ogni settimana (dentro `index.html`)
- `const risultati=[...]` – risultati Serie A Silver girone B: `[giornata, casa, ospite, gol casa, gol ospite]`. Classifica e calendario si calcolano da soli.
- `const partite=[...]` – calendario della Serra Fasano (22 giornate). Campo facoltativo `tv:'https://www.youtube.com/watch?v=...'` per il link alla diretta/replica della partita su Pallamano TV FIGH.
- `const articoli=[...]` – rassegna stampa "Dicono di noi": `{data:'AAAA-MM-GG', testata, titolo, link}`.

## Organico (testo in `index.html`)
- Sezione `#organigramma` (menu Società): organigramma societario.
- Blocco `#rosa` dentro la sezione Silver: rosa per ruolo e staff tecnico. Da aggiornare a ogni nuova stagione o cambio di organico.

Nomi squadre usati in `risultati`: Innotech Serra Fasano, Lions Teramo, Aretusa, Romagna, Camerano, CUS Palermo, Genea Lanzara, Monteprandone, Prime Service Sannio, TeamNetwork Albatro Nexgen, Puntoshop24 Putignano, Proger Pall. Chieti 1975.
