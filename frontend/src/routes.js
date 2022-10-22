import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './view/auth/login';
import Cadastro from './view/auth/cadastro';
import Dashboard from './view/dashboard/dashboard';

export default function RoutesRH() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={< Login />} />
                <Route exact path="/cadastro" element={< Cadastro />} />
                <Route exact path="/dashboard" element={< Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}