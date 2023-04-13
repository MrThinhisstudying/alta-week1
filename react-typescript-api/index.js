const express = require("express");
const bodyParser = require("body-parser");
const {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
} = require("firebase/firestore");
const { db } = require("./config/firebase");
const app = express();
app.use(bodyParser.json());
// app.get("/animals", async (req, res) => {
//   const querySnapshot = await getDocs(collection(db, "animals"));
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });
//   return res.send("Received a GET HTTP method");
// });

app.get("/animals", async (req, res) => {
  try {
    const animals = [];
    const querySnapshot = await getDocs(collection(db, "animals"));
    querySnapshot.forEach((doc) => {
      animals.push(doc.data());
    });
    return res.status(200).json(animals);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.post("/addAnimals", async (req, res) => {
  const animalData = req.body;
  const newDocRef = await addDoc(collection(db, "animals"), animalData);
  console.log("Added new document with ID: ", newDocRef.id);
  return res.send("Received a POST HTTP method");
});

app.listen(5999, () => {
  console.log("Server started on port 5999");
});
