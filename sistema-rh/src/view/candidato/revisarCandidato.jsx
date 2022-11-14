import './revisarCandidato.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';
import React from "react";
import Sidebar from "../components/sidebar";

export default function RevisarCandidato() {

    return (
        <div className="fundo-revisarCand">
            <div className="menu">
                <Sidebar />
            </div>
            <Row>
                <Col>
                    <h2 className="title-rCand">Revisar Candidatos</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="titulo1-rCand">Vaga: Designer</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form className="form-vagaCand" >
                        <div className="conteudo-candVaga">
                            <div className="conteudo-formulario-vaga">
                                <p className="title-tableCand">João da Silva</p>
                                <Form.Group className="mb-3" controlId="formBasicTitle">
                                   
                                    <Row>
                                        <Col>
                                            <Form.Label>Colaborativo</Form.Label>
                                        </Col>
                                        <Col>
                                            <Form.Range min="0" max="5" />
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
                                            <Form.Range min="0" max="5" />
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
                                            <Form.Range min="0" max="5" />
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
                                            <Form.Range min="0" max="5" />
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
                </Col>
            </Row>
            
            <Row>              
                <Col>                   
                    <div className="conteudo-home">
                        <h3 className="titulo-rCand">Candidatos</h3>                                
                        <Table striped bordered hover className="table-candidatos" responsive>
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Status do Questionário</th>
                                    <th>Afinidade com a Vaga</th>
                                    <th>Nota do Questionário</th>
                                    <th>Entrevistar</th>
                                    <th>Visualizar</th>
                                </tr>
                                <tr>
                                    <td><Form.Check aria-label="option 1" /></td>
                                    <td>João da Silva</td>
                                    <td>joao@gmail.com</td>
                                    <td className="feito">Feito</td>
                                    <td>10</td>
                                    <td>9</td>
                                    <td>
                                        <ToggleButton
                                            className="mb-2"
                                            id="toggle-check"
                                            type="checkbox"
                                            variant="primary"
                                            value="1"
                                        >
                                            Sim
                                        </ToggleButton>
                                    </td>
                                    <td>
                                        <ToggleButton
                                            className="mb-2"
                                            id="toggle-check"
                                            type="checkbox"
                                            variant="primary"
                                            value="1"
                                        >
                                            Visualizar
                                        </ToggleButton>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check aria-label="option 1" /></td>
                                    <td>João da Silva</td>
                                    <td>joao@gmail.com</td>
                                    <td className="feito">Feito</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>
                                        <ToggleButton
                                            className="mb-2"
                                            id="toggle-check"
                                            type="checkbox"
                                            variant="primary"
                                            value="1"
                                        >
                                            Sim
                                        </ToggleButton>
                                    </td>
                                    <td>
                                        <ToggleButton
                                            className="mb-2"
                                            id="toggle-check"
                                            type="checkbox"
                                            variant="primary"
                                            value="1"
                                        >
                                            Visualizar
                                        </ToggleButton>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check aria-label="option 1" /></td>
                                    <td>João da Silva</td>
                                    <td>joao@gmail.com</td>
                                    <td className="pendente">Pendente</td>
                                    <td>7</td>
                                    <td>7</td>
                                    <td>
                                        <ToggleButton
                                            className="mb-2"
                                            id="toggle-check"
                                            type="checkbox"
                                            variant="outline-primary"
                                            value="1"
                                        >
                                            Não
                                        </ToggleButton>
                                    </td>
                                    <td>
                                        <ToggleButton
                                            className="mb-2"
                                            id="toggle-check"
                                            type="checkbox"
                                            variant="outline-primary"
                                            value="1"
                                        >
                                            Visualizar
                                        </ToggleButton>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Form.Check aria-label="option 1" /></td>
                                    <td>João da Silva</td>
                                    <td>joao@gmail.com</td>
                                    <td className="pendente">Pendente</td>
                                    <td>5</td>
                                    <td>5</td>
                                    <td>
                                        <ToggleButton
                                            className="mb-2"
                                            id="toggle-check"
                                            type="checkbox"
                                            variant="outline-primary"
                                            value="1"
                                        >
                                            Não
                                        </ToggleButton>
                                    </td>
                                    <td>
                                        <ToggleButton
                                            className="mb-2"
                                            id="toggle-check"
                                            type="checkbox"
                                            variant="primary"
                                            value="1"
                                        >
                                            Visualizar
                                        </ToggleButton>
                                    </td>
                                </tr>    
                            </thead>
                            <tbody>
                                                          
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>
    );
}