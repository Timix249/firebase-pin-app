# Firebase PIN App

## Setup

1. Firebase Projekt erstellen
2. Firestore aktivieren
3. Firebase Config in firebase.js einfügen
4. Auf GitHub hochladen
5. GitHub Pages aktivieren

## Firestore Regeln

```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if true;
    }
  }
}
```
