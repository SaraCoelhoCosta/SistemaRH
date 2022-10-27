import { collection, addDoc } from 'firebase/firestore';
import { db } from './config';

const table = 'candidatos';
const Candidato = collection(db, table);

// Cria usuário
const cadastrar = async (nome, email, telefone) => {
    try {    
        await addDoc(Candidato, {
            nome: nome,
            email: email,
            telefone: telefone,
        });
        return true;
    } catch (error) {
        return false;
    }
};

export {
    cadastrar,
}