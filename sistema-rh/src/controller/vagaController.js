import { collection, addDoc, updateDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from './config';

const table = 'vagas';
const Vagas = collection(db, table);

// Criar
const cadastrarVaga = async (titulo, descricao, dados) => {
    if (titulo !== "" && descricao !== "") {
        try {
            await addDoc(Vagas, dados);
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
const atualizarVaga = async (id, titulo, descricao) => {
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
const listarUmaVaga = async (id) => {
    const dados = doc(db, table, id);
    const vaga = await getDoc(dados);
    if (vaga.exists()) {
        return vaga;
    } else {
        return null;
    }
};

// Listar todos
const listarVagas = async () => {
    const todasVagas = await (await getDocs(Vagas)).docs;
    return todasVagas;
};

export {
    cadastrarVaga,
    atualizarVaga,
    listarUmaVaga,
    listarVagas,
}