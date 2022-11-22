import './criar-vaga.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sidebar from "../components/sidebar";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listarUmaVaga } from "../../controller/vagaController";

export default function Vaga() {

    const { id } = useParams();

    const navigate = useNavigate();

    // Validação de campos
    const [validated, setValidated] = useState(false);

    const [colInd, setColInd] = useState(0);
    const [resSoc, setResSoc] = useState(0);
    const [impVig, setImpVig] = useState(0);
    const [intPac, setIntPac] = useState(0);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [passo, setPasso] = useState([true, false, false]);

    useEffect(() => {
        if (id) {
            listarUmaVaga(id).then((res) => {
                setTitulo(res.get('titulo'));
                setDescricao(res.get('descricao'));
            });
        }
    }, [id]);

    async function Finalizar(ev) {
        const formulario = ev.currentTarget;

        ev.preventDefault();
        if (formulario.checkValidity() === false) {
            ev.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <div className="fundo">
            <div className="menu">
                <Sidebar />
            </div>
            {passo[0] &&
                <Form className="form-vaga" noValidate validated={validated}>
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
                                        <Button variant="outline-danger" type="submit" onClick={() => {navigate('/home')}}>
                                            Cancelar
                                        </Button>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                                        <Button variant="primary" type="submit" onClick={() => {setPasso([false, true, false])}}>
                                            Próxima etapa
                                        </Button>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Form>
            }
            {passo[1] &&
                <Form className="form-vaga">
                    <div className="conteudo-vaga1">
                        <div className="conteudo-formulario-vaga">
                            <h1 classname="titulo-tela">Criar Vaga</h1>

                            <h3 className="titulo-formulario-vaga">Quais os objetivos da vaga?</h3>

                            <Form.Group className="mb-3" controlId="formBasicTitle">
                                <Row>
                                    <Col>
                                        <Form.Label>Colaborativo</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Range min="0" max="5" value={colInd}
                                            onChange={(e) => setColInd(e.target.value)} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Independente</Form.Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>Reservado</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Range min="0" max="5" value={resSoc}
                                            onChange={(e) => setResSoc(e.target.value)} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Sociável</Form.Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>Intenso</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Range min="0" max="5" value={intPac}
                                            onChange={(e) => setIntPac(e.target.value)} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Paciente</Form.Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>Impulsivo</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Range min="0" max="5" value={impVig}
                                            onChange={(e) => setImpVig(e.target.value)} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Vigilante</Form.Label>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                                        <Button variant="outline-danger" type="submit" onClick={() => {setPasso([true, false, false])}}>
                                            Cancelar
                                        </Button>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                                        <Button variant="primary" type="submit" onClick={() => {setPasso([false, false, true])}}>
                                            Próxima etapa
                                        </Button>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Form>
            }
            {passo[2] &&
                <Form className="form-addCandidato" noValidate validated={validated}>
                    <div className="conteudo">
                        <h1 classname="titulo-tela">Criar Vaga</h1>

                        <h2 className="titulo-secao">Adicionar Candidatos</h2>

                        <h6 className="titulo-botoes">Enviar formulário para os candidatos para a vaga de Designer</h6>
                        <Button className="button-left" variant="outline-secondary" size="lg">Criar um link</Button>
                        <Button className="button-right" variant="outline-secondary" size="lg">Criar e-mail</Button>

                        <Form.Group className="mb-3 emails" controlId="formGroupEmail">
                            <Form.Label>Digite os e-mails separados por vírgula</Form.Label>
                            <Form.Control type="email" placeholder="fulano@gmail.com, ciclano@gmail.com" />
                        </Form.Group>

                        <div className="dados-candidato">
                            <Row>
                                <Col>
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control placeholder="Fulano" />
                                </Col>
                                <Col>
                                    <Form.Label>Sobrenome</Form.Label>
                                    <Form.Control placeholder="Silva" />
                                </Col>
                                <Col>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="fulano@gmail.com" />
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col>
                                <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                                    <Button variant="outline-danger" type="submit" onClick={() => {setPasso([false, true, false])}}>
                                        Cancelar
                                    </Button>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                                    <Button variant="primary" type="submit" onClick={() => {Finalizar()}}>
                                        Finalizar
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                </Form>
            }
        </div>
    );
}