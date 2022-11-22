import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configurações do BD
const firebaseConfig = {
  apiKey: "AIzaSyDp_SxjorMM2u7xA8vkhRhwbRRMH9i-_eE",
  authDomain: "sys-rh.firebaseapp.com",
  projectId: "sys-rh",
  storageBucket: "sys-rh.appspot.com",
  messagingSenderId: "822058865366",
  appId: "1:822058865366:web:afda4397c04614f7cd2f77",
};

// Inicializando BD
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db, auth};
