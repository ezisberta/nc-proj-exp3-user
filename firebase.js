import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6hnxWtwZwcyjuo1VU42k4gOF6lKNUAvI",
  authDomain: "nc-proj-spiking-exp3-user.firebaseapp.com",
  projectId: "nc-proj-spiking-exp3-user",
  storageBucket: "nc-proj-spiking-exp3-user.appspot.com",
  messagingSenderId: "238709937105",
  appId: "1:238709937105:web:9d83acc7e6c813642446f0",
  measurementId: "G-JYRP1YKTV2",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
