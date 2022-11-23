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
        return true;
    } catch (error) {
        return false;
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
const sair = async () => {
    try {
        await signOut(auth);
        return true;
    } catch (error) {
        return false;
    }
};

// Verificar se está logado
const verificarLogin = async (res) => {
    const usuario = auth.currentUser;

    if (usuario) {
        res.send({ msg: 'Usuário logado!' });
    } else {
        res.send({ msg: 'Nenhum usuário logado!' });
    }
};

// Retorna email
const retornarEmail = async () => {
    const usuario = auth.currentUser;

    if (usuario) {
        return usuario.email;
    } else {
        return null;
    }
};

export {
    cadastrar,
    logar,
    sair,
    verificarLogin,
    retornarEmail,
}