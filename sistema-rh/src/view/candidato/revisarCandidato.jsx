import './revisarCandidato.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Sidebar from "../components/sidebar";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { listarUm } from '../../controller/vagaController';


export default function RevisarCandidato() {
    const { id } = useParams();

    const [titulo, setTitulo] = useState("");
    const [objetivos, setObjetivos] = useState({});

    useEffect(() => {
        if (id) {
            listarUm(id).then((res) => {
                setTitulo(res.get('titulo'));
                setObjetivos(res.get('objetivo'));
            });
        }
    }, [id]);

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
                    <h3 className="titulo1-rCand">Vaga: {titulo}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form className="form-vagaCand" >
                        <div className="conteudo-candVaga">
                            <div className="conteudo-formulario-vaga">
                                
                                <Form.Group className="mb-3" controlId="formBasicTitle">
                                   
                                    <Row>
                                        <Col>
                                            <Form.Label>Colaborativo</Form.Label>
                                        </Col>
                                        <Col>
                                            <Form.Range min="0" max="5" value={objetivos['colaborativo/independente']}/>
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
                                            <Form.Range min="0" max="5" value={objetivos['reservado/sociavel']}/>
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
                                            <Form.Range min="0" max="5" value={objetivos['intenso/paciente']}/>
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
                                            <Form.Range min="0" max="5" value={objetivos['impulsivo/vigilante']}/>
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
                            </thead>
                            <tbody>
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
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>
    );
}