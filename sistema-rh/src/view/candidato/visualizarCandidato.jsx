import './visualizarCandidato.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from "react";
import Sidebar from "../components/sidebar";

export default function VisualizarCandidato() {

    return (
        <div className="fundo-visuCandidato">
            <div className="menu">
                <Sidebar />
            </div>
            <Row>
                <Col>
                    <h2 className="title-vCand">Visualizar Candidatos</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="titulo1-vCand">Designer</h3>
                    <div className="dados-vcandidato">
                        <p>
                            Nome: Lara
                        </p>
                        <p>
                            E-mail: lara@gmail.com
                        </p>
                        <p>
                            Telefone: 73999999999
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="titulo2-vCand">Perfil Comportamental</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form className="form-visuCandidato" >
                        <div className="conteudo-Vaga">
                            <div className="conteudo-formulario-vaga">
                                <Form.Group className="mb-3" controlId="formBasicTitle">
                                    <Row>
                                        <Col>
                                            <Form.Label>Colaborativo</Form.Label>
                                        </Col>
                                        <Col>
                                            <Form.Range min="0" max="5" value="4"/>
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
                                            <Form.Range min="0" max="5" value="3"/>
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
                                            <Form.Range min="0" max="5" value="3"/>
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
                                            <Form.Range min="0" max="5" value="1"/>
                                        </Col>
                                        <Col>
                                            <Form.Label>Vigilante</Form.Label>
                                        </Col>
                                    </Row>
                                </Form.Group>

                            </div>
                            
                        </div>
                    </Form>
                </Col>
            </Row>
            <div className="buttons-visu">
                <Button className="botao-esquerdo" variant="outline-danger" to={`/home`}>Cancelar</Button>{' '}
                <Button className="botao-direito" variant="primary" to={`/candidato/s4zXWThzyoMHLztuxZ8I`}>Editar</Button>{' '}
            </div>
        </div>
    );
}