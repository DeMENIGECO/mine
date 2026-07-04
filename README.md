# Mine

**Mine** è un admin panel leggero basato su Node.js ed Express che permette di gestire dinamicamente:

- Modelli (models.json)
- Dati (db.json)
- Utenti (users.json)
- API personalizzate (urls.js)

---

## 🚀 Installazione

```bash
npm install mine
```

Oppure per sviluppo locale:

```bash
git clone https://github.com/DeMENIGECO/mine
cd mine
npm install
```

---

## ▶️ Avvio

All'interno del tuo progetto (non dentro Mine):

```bash
node node_modules/mine/server.js
```

Oppure usando la CLI:

```bash
npx mine start
```

---

## 📁 Struttura del progetto utente

Quando avvii Mine, legge i file dalla cartella corrente:

```
project/
│
├── models.json
├── db.json
├── users.json
└── urls.js   (opzionale)
```

---

## 📦 models.json

Esempio:

```json
[
  {
    "name": "example",
    "viewed": "Esempio",
    "fields": {
      "date": "DateField",
      "time": "TimeField",
      "text": "LongTextField:: max:1000"
    }
  }
]
```

### 📌 Campi

"text": "LongTextField:: max:1000"

Significa:
- campo text
- tipo LongTextField
- parametro max = 1000

---

## 👥 users.json

```json
[
  {
    "id": 0,
    "name": "Admin",
    "staff": true,
    "passwordHash": "hash-password-sha256"
  }
]
```

---

## 🗃 db.json

```json
[
  {
    "id": 0,
    "model": "example",
    "text": "ciao"
  }
]
```

---

## 🌐 urls.js

```js
module.exports = [
  {
    method: "get",
    path: "/hello",
    handler: (req, res) => {
      res.json({ message: "Hello from Mine!" });
    }
  }
];
```

---

## 🧠 Funzionalità

- Admin panel web
- CRUD utenti
- CRUD database basato su modelli
- API personalizzate
- Routing dinamico

---

## ⚙ CLI

npx mine start

---

## 📌 Versione

0.1.0 Alpha
