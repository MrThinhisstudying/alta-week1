const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyCUmE70pW5VH9qScNOikFA3NoO-jPmL8SA",
  authDomain: "alta-week1.firebaseapp.com",
  projectId: "alta-week1",
  storageBucket: "alta-week1.appspot.com",
  messagingSenderId: "286467606512",
  appId: "1:286467606512:web:8754e4aabe2c922969ff35",
  measurementId: "G-XC77XB4NE6",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
module.exports = { app, db };
