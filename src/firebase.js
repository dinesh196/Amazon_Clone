import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhJMrio5u_OIlYUpbhkb1Kd7mau2qRyWw",
  authDomain: "fir-89ca9.firebaseapp.com",
  databaseURL: "https://fir-89ca9.firebaseio.com",
  projectId: "fir-89ca9",
  storageBucket: "fir-89ca9.appspot.com",
  messagingSenderId: "214340276818",
  appId: "1:214340276818:web:8121d60a6027ec33cfc58b",
  measurementId: "G-RGWY5Q4N3B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
