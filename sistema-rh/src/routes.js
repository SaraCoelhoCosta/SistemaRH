import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './frontend/auth/login';
import Cadastro from './frontend/auth/cadastro';

export default function RoutesRH() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={< Login />} />
                <Route exact path="/cadastro" element={< Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}