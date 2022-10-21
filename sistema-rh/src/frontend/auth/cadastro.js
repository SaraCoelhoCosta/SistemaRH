import './cadastro.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cadastro() {


    // Validação de campos
    const [validated, setValidated] = useState(false);
    
    // Cadastro
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");

    const enviar = (evento) => {
        const formulario = evento.currentTarget;
        if (formulario.checkValidity() === false) {
            evento.preventDefault();
            evento.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="card-formulario-cadastro">
            <Form noValidate validated={validated} onSubmit={enviar}>
                <div className="conteudo-formulario-cadastro">
                    <h3 className="titulo-formulario-cadastro">Cadastro</h3>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" required value={nome}
                            onChange={(e) => setNome(e.target.value)} placeholder="Insira seu nome completo" />
                        <Form.Control.Feedback></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Campo nome é obrigatório.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" required value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder="Insira seu e-mail" />
                        <Form.Control.Feedback></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Campo e-mail é obrigatório.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" value={senha}
                            onChange={(e) => setSenha(e.target.value)} required placeholder="Senha" />
                        <Form.Control.Feedback></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Campo senha é obrigatório.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                        <Button variant="primary" type="submit">
                            Cadastrar
                        </Button>
                    </Form.Group>
                    <Form.Group className="text-center mt-3" controlId="formBasicText">
                        Já possui cadastro? <Link to="/">Login</Link>
                    </Form.Group>
                </div>
            </Form>
        </div>
    );
}