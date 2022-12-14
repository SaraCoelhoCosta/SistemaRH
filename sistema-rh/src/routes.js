import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './view/auth/login';
import Cadastro from './view/auth/cadastro';
import Home from './view/home/home';
import Candidato from './view/candidato/candidato';
import CriarVaga from './view/vagas/vaga';
import VagaObjetivo from './view/vagas/vaga-objetivo';
import AdicionarCandidato from './view/vagas/adicionar-candidatos';
import RevisarCandidato from './view/candidato/revisarCandidato';
import VisualizarCandidato from './view/candidato/visualizarCandidato';


export default function RoutesRH() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={< Login />} />
                <Route exact path="/cadastro" element={< Cadastro />} />
                <Route exact path="/home" element={< Home />} />
                <Route exact path="/candidato" element={< Candidato />} />
                <Route exact path="/candidato/:id" element={< Candidato />} />
                <Route exact path="/vaga" element={< CriarVaga />} />
                <Route exact path="/vagaObjetivo" element={< VagaObjetivo />} />
                <Route exact path="/adicionarCandidato" element={< AdicionarCandidato />} />
                <Route exact path="/revisarCandidato" element={< RevisarCandidato />} />
                <Route exact path="/revisarCandidato/:id" element={< RevisarCandidato />} />
                <Route exact path="/visualizarCandidato" element={< VisualizarCandidato />} />
            </Routes>
        </BrowserRouter>
    );
}