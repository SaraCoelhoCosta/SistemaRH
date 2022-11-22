import { collection, addDoc, updateDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from './config';

const table = 'vagas';
const Vagas = collection(db, table);

// Criar
const cadastrarVaga = async (dados) => {
    try {
        return await (await addDoc(Vagas, dados)).id;
    } catch (error) {
        return null;
    }
};

// Atualiza
const atualizarVaga = async (id, candidatos) => {
    if (id != null) {
        try {
            const vaga = doc(db, table, id);
            await updateDoc(vaga, {
                'candidatos': candidatos,
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