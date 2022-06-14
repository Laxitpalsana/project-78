import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyA4tnH1IG136upAe3iatcROY52Qo3wvwWg",
  authDomain: "e-ride-project-61f98.firebaseapp.com",
  projectId: "e-ride-project-61f98",
  storageBucket: "e-ride-project-61f98.appspot.com",
  messagingSenderId: "516163975169",
  appId: "1:516163975169:web:284266f897929e6fd4e800"
};




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


