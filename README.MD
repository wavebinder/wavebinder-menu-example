# Wavebinder Menu Example

Complete example application for composing a fixed menu, with an Angular frontend and two coordinated mini backends.

The project was created as a **technical example** and as a playground for experimenting with compatibility logic between dishes, guests, and economic/nutritional constraints.

---

## 📁 Repository structure

```
/
├── front/              → Angular frontend
├── back/               → Node.js backend
```

---

## Overview

The application is composed of **three main parts**:

### ➤ Frontend

* Single Component App built with Angular
* UI management, application state, and selection logic
* No external UI libraries
* Animations and visualizations implemented using plain HTML/CSS

Main features:

* season selection
* guest management (diets, allergies, preferences, budget)
* compatible dish selection
* nutritional analysis of the menu
* visual indication of guests with insufficient budget

---

### ➤ Backend

Provides the core data used by the application:

* ingredients
* dishes
* compatibility rules

This is the **first service that must be started**, as it supplies the data consumed by the other modules.

---

## Running the project

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

The application will be available at:

```
http://localhost:4200
```

---

## Architectural choices

* State managed locally inside the main component
* No global store (NgRx, etc.) by design
* Deterministic and easily readable logic
* Clear separation between UI and data layers

---

## Technology stack

* Angular
* TypeScript
* Node.js
* HTML5 / CSS3

No external UI or charting libraries are used.

---

## Project status

This project is **example-only**, but fully functional.

Possible future extensions:

* automatic guest-based filters and suggestions
* menu export
* configuration persistence
* end-to-end automated tests

---

## License

All rights reserved.
