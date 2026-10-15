# Effetto Serra – sito della ASDP Roberto Serra Fasano

Sito e web app della pallamano Serra Fasano, pubblicato con GitHub Pages (`https://asdserrafasano.github.io/`). Le richieste di iscrizione arrivano a asdserrafasano@gmail.com tramite FormSubmit.

## Struttura
- `index.html` – tutto il sito (testi, stile, calendario, classifica, rassegna stampa)
- `sw.js` – funzionamento offline della web app. **A ogni modifica aumenta il numero in `VERSIONE`** (es. `effetto-serra-v20` → `effetto-serra-v20`)
- `manifest.webmanifest` e `icons/` – installazione come app

## Dati aggiornati ogni settimana (dentro `index.html`)
- `const risultati=[...]` – risultati Serie A Silver girone B: `[giornata, casa, ospite, gol casa, gol ospite]`. Classifica e calendario si calcolano da soli.
- `const partite=[...]` – calendario della Serra Fasano (22 giornate).
- `const articoli=[...]` – rassegna stampa "Dicono di noi": `{data:'AAAA-MM-GG', testata, titolo, link}`.

Nomi squadre usati in `risultati`: Innotech Serra Fasano, Lions Teramo, Aretusa, Romagna, Camerano, CUS Palermo, Genea Lanzara, Monteprandone, Prime Service Sannio, TeamNetwork Albatro Nexgen, Puntoshop24 Putignano, Proger Pall. Chieti 1975.
