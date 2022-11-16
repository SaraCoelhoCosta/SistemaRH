import './candidato.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cadastrar, atualizar, listarUmCandidato } from "../../controller/candidatoController";
import Sidebar from "../components/sidebar";

export default function Cadastro() {

    const { id } = useParams();

    const navigate = useNavigate();

    // Validação de campos
    const [validated, setValidated] = useState(false);

    // Cadastro
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    useEffect(() => {
        if (id) {
            listarUmCandidato(id).then((res) => {
                setNome(res.get('nome'));
                setEmail(res.get('email'));
                setTelefone(res.get('telefone'));
            });
        }
    }, [id]);

    async function enviar(ev) {
        const formulario = ev.currentTarget;

        ev.preventDefault();
        if (formulario.checkValidity() === false) {
            ev.stopPropagation();
        }

        setValidated(true);

        if (id) {
            await atualizar(id, nome, email, telefone).then((res) => {
                if (res) {
                    alert('Candidato atualizado!');
                    navigate('/home');
                }
                else {
                    alert('Candidato NÃO atualizado!');
                }
            });
        } else {
            await cadastrar(nome, email, telefone).then((res) => {
                if (res) {
                    alert('Candidato cadastrado!');
                    navigate('/home');
                }
                else {
                    alert('Candidato NÃO cadastrado!');
                }
            });
        }

    };

    return (
        <div className="fundo-candidato">
            <div className="menu">
                <Sidebar />
            </div>
            <Form className="form-cadCandidato" noValidate validated={validated} onSubmit={enviar}>
                <div className="conteudo-candidato">
                    <div className="conteudo-formulario-candidato">
                        <h3 className="titulo-formulario-candidato">Cadastrar candidato</h3>
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
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="phone" value={telefone}
                                onChange={(e) => setTelefone(e.target.value)} required placeholder="Telefone" />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Campo telefone é obrigatório.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                                    <Button variant="outline-danger" type="submit">
                                        Cancelar
                                    </Button>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                                    <Button variant="primary" type="submit">
                                        Cadastrar
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Form>
        </div>
    );
}