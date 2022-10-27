import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './view/auth/login';
import Cadastro from './view/auth/cadastro';
import Home from './view/home/home';
import Candidato from './view/candidato/candidato';

export default function RoutesRH() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={< Login />} />
                <Route exact path="/cadastro" element={< Cadastro />} />
                <Route exact path="/home" element={< Home />} />
                <Route exact path="/candidato" element={< Candidato />} />
            </Routes>
        </BrowserRouter>
    );
}