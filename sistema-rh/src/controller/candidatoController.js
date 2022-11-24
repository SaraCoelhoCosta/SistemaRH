import { collection, addDoc, updateDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from './config';

const table = 'candidatos';
const Candidatos = collection(db, table);

// Criar
const cadastrarCandidato = async (nome, email, telefone, objetivos) => {
    if (nome !== "" && email !== "" && telefone !== "" && objetivos != null) {
        try {
            await addDoc(Candidatos, {
                'nome': nome,
                'email': email,
                'telefone': telefone,
                'objetivos': objetivos,
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
const atualizarCandidato = async (id, nome, email, telefone) => {
    if (nome !== "" && email !== "" && telefone !== "" && (id !== '' || id !== null)) {
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
const listarUmCandidato = async (id) => {
    const dados = doc(db, table, id);
    const candidato = await getDoc(dados);
    if (candidato.exists()) {
        return candidato;
    } else {
        return null;
    }
};

// Listar todos
const listarCandidatos = async () => {
    const todosCandidatos = await (await getDocs(Candidatos)).docs;
    return todosCandidatos;
};

export {
    cadastrarCandidato,
    atualizarCandidato,
    listarUmCandidato,
    listarCandidatos,
}