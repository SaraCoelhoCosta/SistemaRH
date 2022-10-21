const { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } = require('firebase/auth');
const { onAuthStateChanged, getAuth } = require('firebase/auth');
const { collection, addDoc } = require('firebase/firestore');
const { db } = require('../config');

const table = 'usuarios'
const auth = getAuth(db);
const User = collection(db, table);

// Verificando estado de autenticação.
const onAuthStateChanged = async(auth, user => {
  if (user != null){
    console.log('Logado!');
  } else {
    console.log('Nenhum usuário!');
  }
});

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(User, {
      uid: user.uid,
      name,
      email,
      // authProvider: "local",
    });
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  onAuthStateChanged,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};