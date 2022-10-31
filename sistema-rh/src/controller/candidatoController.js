import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from './config';

const table = 'candidatos';
const Candidato = collection(db, table);

// Cria usuário
const cadastrar = async (nome, email, telefone) => {
    if (nome !== "" && email !== "" && telefone !== "") {
        try {
            await addDoc(Candidato, {
                'nome': nome,
                'email': email,
                'telefone': telefone,
            });
            return true;
        } catch (error) {
            return false;
        }
    }
    else {
        return false;
    }
};

// Atualiza
const atualizar = async (id, nome, email, telefone) => {
    if (nome !== "" && email !== "" && telefone !== "") {
        try {
            const candidato = doc(db, table, id);
            await updateDoc(candidato, {
                'nome': nome,
                'email': email,
                'telefone': telefone,
            });
            return true;
        } catch (error) {
            return false;
        }
    }
    else {
        return false;
    }
};

// Lista apenas 1
const listarUm = async (id) => {
    const dados = doc(db, table, id);
    const candidato = await getDoc(dados);
    if (candidato.exists()) {
        return candidato;
    } else {
        return null;
    }
};

export {
    cadastrar,
    atualizar,
    listarUm,
}