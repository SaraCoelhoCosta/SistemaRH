const { collection, addDoc, getDoc, doc, deleteDoc, updateDoc, getDocs } = require('firebase/firestore');
const { db } = require('../config');

const table = 'usuarios'
const User = collection(db, table);

module.exports = {

    // Cria usuário
    async create(req, res) {
        const data = req.body;
        await addDoc(User, data);
        res.send({ msg: 'Usuário adicionado!' });
    },

    // Lista todos os usuários
    async list(req, res) {
        const allUsers = await (await getDocs(User)).docs.map(doc => doc.data());
        res.send( allUsers );
    },

    // Lista apenas 1 usuário
    async show(req, res) {
        const { id } = req.params;
        const data = doc(db, table, id);
        const user = await getDoc(data);
        if (user.exists()) {
            res.send(user.data());
        } else {
            res.send({ msg: 'Nenhum usuário encontrado!' });
        }
    },

    // Atualiza usuário
    async update(req, res) {
        const { id } = req.params;
        const data = doc(db, table, id);
        await updateDoc(data, req.body);
        res.send({ msg: 'Usuário atualizado!' });
    },

    // Deleta um usuário
    async delete(req, res) {
        const { id } = req.params;
        const data = doc(db, table, id);
        await deleteDoc(data);
        res.send({ msg: 'Usuário deletado!' });
    },

}