import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWL5KosQfs0kob5c5j8lvv3xAW3VSlbCs",
  authDomain: "instagram-olix.firebaseapp.com",
  projectId: "instagram-olix",
  storageBucket: "instagram-olix.appspot.com",
  messagingSenderId: "968786341424",
  appId: "1:968786341424:web:8bee9d20fde0f0583e47f5",
};

const firebase = initializeApp(firebaseConfig);
const { FieldValue } = getFirestore();
export { firebase, FieldValue };
