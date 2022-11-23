import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configurações do BD
const firebaseConfig = {
  apiKey: "AIzaSyDbwxG3m18gEZtKZQbldMwxs5ElkhvgEZs",
  authDomain: "sistem-rh.firebaseapp.com",
  projectId: "sistem-rh",
  storageBucket: "sistem-rh.appspot.com",
  messagingSenderId: "240696841537",
  appId: "1:240696841537:web:0fc508bd3a067796a7bdc0",
};

// Inicializando BD
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db, auth};
