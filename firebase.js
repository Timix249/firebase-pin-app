import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxAJpc5XahxpWQ8W4KAaASeKZsjcFZoGU",
  authDomain: "test-3-d1891.firebaseapp.com",
  projectId: "test-3-d1891",
  storageBucket: "test-3-d1891.firebasestorage.app",
  messagingSenderId: "230311167031",
  appId: "1:230311167031:web:f0678d67f6c61ef0c42bb2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
