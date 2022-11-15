import { collection, addDoc, updateDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from './config';

const table = 'vagas';
const Vagas = collection(db, table);

// Cria usuário
const cadastrar = async (titulo, descricao) => {
    if (titulo !== "" && descricao !== "") {
        try {
            await addDoc(Vagas, {
                'titulo': titulo,
                'descricao': descricao,
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
const atualizar = async (id, titulo, descricao) => {
    if (titulo !== "" && descricao !== "") {
        try {
            const vaga = doc(db, table, id);
            await updateDoc(vaga, {
                'titulo': titulo,
                'descricao': descricao,
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
    const vaga = await getDoc(dados);
    if (vaga.exists()) {
        return vaga;
    } else {
        return null;
    }
};

// Listar todos
const listarTodos = async () => {
    const todasVagas = await (await getDocs(Vagas)).docs;
    return todasVagas;
};

export {
    cadastrar,
    atualizar,
    listarUm,
    listarTodos,
}