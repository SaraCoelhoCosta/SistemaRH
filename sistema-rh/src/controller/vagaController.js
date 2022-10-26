import { collection, addDoc, getDoc, doc, deleteDoc, updateDoc, getDocs } from 'firebase/firestore';
import { db } from './config';

const table = 'usuarios'
const User = collection(db, table);

module.exports = {

    // Cria
    async create(req, res) {
        const data = req.body;
        await addDoc(User, data);
        res.send({ msg: 'Usuário adicionado!' });
    },

    // Lista todos
    async list(req, res) {
        const allUsers = await (await getDocs(User)).docs.map(doc => doc.data());
        res.send( allUsers );
    },

    // Lista apenas 1
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

    // Atualiza
    async update(req, res) {
        const { id } = req.params;
        const data = doc(db, table, id);
        await updateDoc(data, req.body);
        res.send({ msg: 'Usuário atualizado!' });
    },

    // Deleta
    async delete(req, res) {
        const { id } = req.params;
        const data = doc(db, table, id);
        await deleteDoc(data);
        res.send({ msg: 'Usuário deletado!' });
    },

}