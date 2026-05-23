import { db } from "./firebase.js";

import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.savePin = async function(){

  const username =
    document.getElementById("username").value;

  const pin =
    document.getElementById("pin").value;

  await setDoc(doc(db, "users", username), {
    pin: pin
  });

  document.getElementById("status").innerText =
    "PIN gespeichert";
}

window.login = async function(){

  const username =
    document.getElementById("username").value;

  const pin =
    document.getElementById("pin").value;

  const docRef = doc(db, "users", username);

  const snap = await getDoc(docRef);

  if(!snap.exists()){

    document.getElementById("status").innerText =
      "Benutzer nicht gefunden";

    return;
  }

  const data = snap.data();

  if(pin === data.pin){

    document.getElementById("status").innerText =
      "Login erfolgreich";

  }else{

    document.getElementById("status").innerText =
      "Falsche PIN";

  }

}
