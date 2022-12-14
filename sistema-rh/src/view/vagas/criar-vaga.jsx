import './criar-vaga.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, listarUmaVaga } from "../../controller/vagaController";
import Sidebar from "../components/sidebar";

export default function CriarVaga() {

    const { id } = useParams();

    const navigate = useNavigate();

    // Validação de campos
    const [validated, setValidated] = useState(false);

    // Cadastro
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    
    useEffect(() => {
        if (id) {
            listarUmaVaga(id).then((res) => {
                setTitulo(res.get('titulo'));
                setDescricao(res.get('descricao'));
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
            await atualizar(id, titulo, descricao).then((res) => {
                if (res) {
                    alert('Vaga atualizada!');
                    navigate('/home');
                }
                else {
                    alert('Vaga NÃO atualizada!');
                }
            });
        } else {
            
            //await cadastrar(titulo, descricao).then((res) => {
                
                    alert('Vaga cadastrada!');
                    navigate('/vagaObjetivo', {
                        'titulo':titulo,
                        'descricao': descricao,
                    });
                //});
        }
    };

    return (
        <div className="fundo">
            <div className="menu">
                <Sidebar />
            </div>
            <Form className="form-vaga" noValidate validated={validated} onSubmit={enviar}>
                <div className="conteudo-vaga1">
                    <div className="conteudo-formulario-vaga">
                        <h1 classname="titulo-tela">Criar Vaga</h1>
                        <h3 className="titulo-formulario-vaga">Qual vaga gostaria de criar?</h3>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Título da vaga</Form.Label>
                            <Form.Control type="text" required value={titulo} maxlength="30"
                                onChange={(e) => setTitulo(e.target.value)} placeholder="Insira o título da vaga" />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Campo título é obrigatório.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label>Descrição da vaga</Form.Label>
                            <Form.Control as="textarea" rows={5} required value={descricao}
                                onChange={(e) => setDescricao(e.target.value)} placeholder="Insira uma descrição" />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Campo descrição é obrigatório.
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
                                        Próxima etapa
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