import './criar-vaga.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cadastrarVaga, atualizarVaga, listarUmaVaga } from "../../controller/vagaController";
import Sidebar from "../components/sidebar";

export default function VagaObjetivo({ dados }) {

    const { id } = useParams();

    const navigate = useNavigate();

    // Validação de campos
    const [validated, setValidated] = useState(false);

    // Cadastro
    const [titulo, setTitulo] = useState("");
    const [colInd, setColInd] = useState(0);
    const [resSoc, setResSoc] = useState(0);
    const [impVig, setImpVig] = useState(0);
    const [intPac, setIntPac] = useState(0);
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
            await atualizarVaga(id, titulo, descricao).then((res) => {
                if (res) {
                    alert('Vaga atualizada!');
                    navigate('/home');
                }
                else {
                    alert('Vaga NÃO atualizada!');
                }
            });
        } else {

            dados.set(
                'objetivo', {
                'colaborativo/independente': colInd,
                'reservado/sociavel': resSoc,
                'intenso/paciente': intPac,
                'impulsivo/vigilante': impVig,
            },
            );
            await cadastrarVaga("teste", "ABC", dados).then((res) => {
                if (res) {
                    alert('Vaga cadastrada!');
                    navigate('/home');
                }
                else {
                    alert('Vaga NÃO cadastrada!');
                }
            });
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