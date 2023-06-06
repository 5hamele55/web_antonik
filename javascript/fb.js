
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";


form.onsubmit = async function (event) {
  event.preventDefault()
  const firebaseConfig = {
    apiKey: "AIzaSyAEGvlWR5Pvl31rZlWmWVRox6aOlB03r20",
    authDomain: "antonik.firebaseapp.com",
    projectId: "antonik",
    storageBucket: "antonik.appspot.com",
    messagingSenderId: "414080138341",
    appId: "1:414080138341:web:7138e64e736ea838c55a8c",
    measurementId: "G-8CTWFG96BV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const form = document.getElementById("form")
  try {
    await addDoc(collection(db, "orders"), {
      name: form.name.value,
      phone: form.phone.value,
      time: serverTimestamp()
    });
    alert(`${form.name.value}, дякуємо за заявку. Найближчим часом наш менеджер з Вами зв'яжеться.`)
    form.reset()
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}