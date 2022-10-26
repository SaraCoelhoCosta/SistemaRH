import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configurações do BD
const firebaseConfig = {
  apiKey: "AIzaSyDur3-0L-3tKGJSmFCURRU-ufklnWvr94A",
  authDomain: "sistema-rh-a492d.firebaseapp.com",
  projectId: "sistema-rh-a492d",
  storageBucket: "sistema-rh-a492d.appspot.com",
  messagingSenderId: "459562926388",
  appId: "1:459562926388:web:5d94a3e29a721e50a7a561",
  measurementId: "G-8Z3NHZTC4Y"
};

// Inicializando BD
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export {db, auth};
