// Importando funções
const { initializeApp } = require("firebase/app");
const { getAuth } = require('firebase/auth');
const { onAuthStateChanged } = require('firebase/auth');

// Inicializando BD
const firebaseDB = initializeApp ({
  apiKey: "AIzaSyDur3-0L-3tKGJSmFCURRU-ufklnWvr94A",
  authDomain: "sistema-rh-a492d.firebaseapp.com",
  projectId: "sistema-rh-a492d",
  storageBucket: "sistema-rh-a492d.appspot.com",
  messagingSenderId: "459562926388",
  appId: "1:459562926388:web:5d94a3e29a721e50a7a561",
  measurementId: "G-8Z3NHZTC4Y"
});

// Realizando autenticação
const auth = getAuth(firebaseDB);

// Verificando estado de autenticação.
onAuthStateChanged(auth, user => {

  if (user != null){
    console.log('Logado!');
  } else {
    console.log('Nenhum usuário!');
  }
});
