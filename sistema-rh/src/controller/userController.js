import { db, auth } from './config';
import { collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const table = 'usuarios';
const User = collection(db, table);

// Cria usuário
const cadastrar = async (nome, email, senha) => {
    try {
        const doc = await createUserWithEmailAndPassword(auth, email, senha);
        const usuario = doc.user;
        
        await addDoc(User, {
            uid: usuario.uid,
            nome: nome,
            email: email,
        });
        return usuario;
    } catch (error) {
        return null;
    }
};

// Logar conta de usuário
const logar = async (email, senha) => {
    try {
        await signInWithEmailAndPassword(auth, email, senha);
        return true;
    } catch (error) {
        return false;
    }
};

// Sair da conta do usuário
const sair = async (req, res) => {
    try {
        await signOut(auth);
        res.send({ msg: 'Usuário saiu!' });
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};

// Verificar se está logado
const verificarLogin = async (req, res) => {
    const usuario = auth.currentUser;

    if (usuario) {
        res.send({ msg: 'Usuário logado!' });
    } else {
        res.send({ msg: 'Nenhum usuário logado!' });
    }
};


export {
    cadastrar,
    logar,
    sair,
    verificarLogin,
}