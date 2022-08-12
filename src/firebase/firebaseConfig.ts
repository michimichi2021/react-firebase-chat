import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCH1jwdeG5j3KNVRwwmfimXkrtA1tQ9ln4",
  authDomain: "my-app-7b1bf.firebaseapp.com",
  projectId: "my-app-7b1bf",
  storageBucket: "my-app-7b1bf.appspot.com",
  messagingSenderId: "479784673781",
  appId: "1:479784673781:web:f3f11819efc4b7fa80c0bc",
  measurementId: "G-ZE6823LQNX"
};


const firebase = initializeApp(firebaseConfig)
const firestore = getFirestore(firebase)
const fireauth = getAuth(firebase)
const firestorage = getStorage(firebase)

export const firebaseApp = {
  firestore,
  fireauth,
  firestorage,
}