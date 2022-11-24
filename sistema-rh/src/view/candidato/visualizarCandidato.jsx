import './visualizarCandidato.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from "react";
import Sidebar from "../components/sidebar";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listarUmCandidato } from '../../controller/candidatoController';

export default function VisualizarCandidato() {

    const { id } = useParams();
    const navigate = useNavigate();
    // Cadastro
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [objetivos, setObjetivos] = useState({});

    useEffect(() => {
        if (id) {
            listarUmCandidato(id).then((res) => {
                setNome(res.get('nome'));
                setEmail(res.get('email'));
                setTelefone(res.get('telefone'));
                setObjetivos(res.get('objetivos'));
            });
        }
    }, [id]);

    async function editar() {
        navigate(`/candidato/${id}`);
    };

    function cancelar() {
        navigate('/home');
    };

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
                            Nome: {(nome !== '' && nome !== null) ? nome : "Lara Teste"}
                        </p>
                        <p>
                            E-mail: {(email !== '' && email !== null) ? email : "laraTeste@gmail.com"}
                        </p>
                        <p>
                            Telefone: {(telefone !== '' && telefone !== null) ? telefone : "73999999999"}
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
                                            <Form.Range min="0" max="5" value={(objetivos['colaborativo'] != null) ? objetivos['colaborativo'] : 0}/>
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
                                            <Form.Range min="0" max="5" value={(objetivos['reservado'] != null) ? objetivos['reservado'] : 0}/>
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
                                            <Form.Range min="0" max="5" value={(objetivos['intenso'] != null) ? objetivos['intenso'] : 0}/>
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
                                            <Form.Range min="0" max="5" value={(objetivos['impulsivo'] != null) ? objetivos['impulsivo'] : 0}/>
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
                <Button className="botao-esquerdo" variant="outline-danger" onClick={cancelar}>Cancelar</Button>
                <Button className="botao-direito" variant="primary"  onClick={editar}>Editar</Button>
            </div>
        </div>
    );
}