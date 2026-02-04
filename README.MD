# Wavebinder Menu Example

Esempio completo di applicazione per la composizione di un menù fisso, con frontend Angular e due mini-backend coordinati.

Il progetto nasce come **esempio tecnico** e come playground per logiche di compatibilità tra piatti, ospiti e vincoli economici/nutrizionali.

---

## 📁 Struttura della repository

```
/
├── front/              → frontend Angular
├── back/               → backend NodeJS
```

---

## Panoramica

L’applicazione è composta da **tre parti principali**:

### ➤ Frontend

* Single Component App in Angular
* Gestione UI, stato applicativo e logica di selezione
* Nessuna libreria grafica esterna
* Animazioni e visualizzazioni realizzate solo con HTML/CSS

Funzionalità principali:

* selezione stagione
* gestione ospiti (diete, allergie, preferenze, budget)
* selezione piatti compatibili
* analisi nutrizionale del menù
* segnalazione visiva degli ospiti con budget insufficiente

---

### ➤ Backend

Espone i dati fondamentali dell’applicazione:

* ingredienti
* piatti
* regole di compatibilità

È il **primo servizio da avviare**, perché fornisce i dati utilizzati dagli altri moduli.

---

## Avvio del progetto

### 1️⃣ Backend

```bash
cd back
npm install
cross-env CONFIG_PATH=autodb.config npx wavebinder-autodb-back
node src/server.js
```

---

### 3️⃣ Frontend

```bash
cd front
npm install
ng serve
```

Applicazione disponibile su:

```
http://localhost:4200
```

---

## Scelte architetturali

* Stato gestito localmente nel component principale
* Nessun global store (NgRx, ecc.) per scelta progettuale
* Logica deterministica e facilmente leggibile
* Separazione chiara tra UI e dati

---

## Stack tecnologico

* Angular
* TypeScript
* Node.js
* HTML5 / CSS3

Nessuna dipendenza grafica o libreria di charting esterna.

---

## Stato del progetto

Il progetto è **solo un esempio**, ma completamente funzionante.

Possibili evoluzioni:

* filtri e suggerimenti automatici per ospite
* esportazione del menù
* salvataggio configurazioni
* test automatici end-to-end

---

## Licenza

Tutti i diritti riservati.
