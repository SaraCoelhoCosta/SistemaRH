const { db, auth } = require('../config');
const { collection, addDoc } = require('firebase/firestore');
const { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require('firebase/auth');

const table = 'usuarios';
const User = collection(db, table);

module.exports = {

    // Cria usuário
    async cadastrar(req, res) {
        try {
            const { nome, email, senha } = req.body;
            const doc = await createUserWithEmailAndPassword(auth, email, senha);
            const usuario = doc.user;
            await addDoc(User, {
                uid: usuario.uid,
                nome: nome,
                email: email,
            });
            console.log('Usuário cadastrado!');
            res.send({ msg: 'Usuário cadastrado!' });
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    },

    // Logar conta de usuário
    async logar(req, res) {
        try {
            const { email, senha } = req.body;
            await signInWithEmailAndPassword(auth, email, senha);
            console.log('Usuário logado!');
            res.send({ msg: 'Usuário logado!' });
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    },

    // Sair da conta do usuário
    async sair(req, res) {
        try {
            await signOut(auth);
            res.send({ msg: 'Usuário saiu!' });
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    },

    // Verificar se está logado
    async verificarLogin(req, res) {
        const usuario = auth.currentUser;

        if (usuario) {
            res.send({ msg: 'Usuário logado!' });
        } else {
            res.send({ msg: 'Nenhum usuário logado!' });
        }
    },
}