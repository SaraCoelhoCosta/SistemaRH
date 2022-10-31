import './login.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logar } from "../../controller/userController";

export default function Login() {

    const navigate = useNavigate();

    // Validação de campos
    const [validated, setValidated] = useState(false);

    // Login
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function enviar(ev) {
        const formulario = ev.currentTarget;

        ev.preventDefault();
        if (formulario.checkValidity() === false) {
            ev.stopPropagation();
            alert('Preencha os campos!');
        }
        setValidated(true);

        await logar(email, senha).then((res) => {
            if (res) {
                alert('Usuário logado!');
                navigate('/home');
            }
            else {
                alert('Usuário NÃO logado!');
            }
        });
    };

    return (
        <div className="fundo1">
            <div className="col-7 config-col1 bg-col">
            </div>
            <div className="col-5 config-col2">
                <Form className="form-login" noValidate validated={validated} onSubmit={enviar}>
                    <div className="conteudo-formulario-login">
                        <h3 className="titulo-formulario-login">Login</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email"
                                onChange={(e) => setEmail(e.target.value)} required placeholder="Insira seu e-mail" />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Campo e-mail é obrigatório.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password"
                                onChange={(e) => setSenha(e.target.value)} required placeholder="Senha" />
                            <Form.Control.Feedback />
                            <Form.Control.Feedback type="invalid">
                                Campo senha é obrigatório.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Mantenha-me conectado" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <span className="link-primary">Esqueceu senha?</span>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                            <Button variant="primary" type="submit">
                                Entrar
                            </Button>
                        </Form.Group>
                        <Form.Group className="text-center mt-3" controlId="formBasicText">
                            Ainda não possui cadastro? <Link to="/cadastro">Cadastre-se</Link>
                        </Form.Group>
                    </div>
                </Form>
            </div>
        </div>
    );
}