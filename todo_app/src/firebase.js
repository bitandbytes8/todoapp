// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAAkyUbSNFo-zpdY-HF2iGJo8_xvgVG9j8",
  authDomain: "todoapp-3e0cd.firebaseapp.com",
  projectId: "todoapp-3e0cd",
  storageBucket: "todoapp-3e0cd.appspot.com",
  messagingSenderId: "169087065109",
  appId: "1:169087065109:web:71c8ea12e73041e0dd421c",
  measurementId: "G-DPCV6MY1XF"
})
const db = firebaseApp.firestore();
export default db;
// export { db };