import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCl2OFL7jo14FYr8gYM9LxywDlyKgq8QUo",
  authDomain: "miniblog-528cb.firebaseapp.com",
  projectId: "miniblog-528cb",
  storageBucket: "miniblog-528cb.appspot.com",
  messagingSenderId: "787767615318",
  appId: "1:787767615318:web:a68644396fd142e92d00f7"
};

const app = initializeApp(firebaseConfig);

const db = getFireStore(app);

export { db }; 