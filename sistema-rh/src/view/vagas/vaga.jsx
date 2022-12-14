import './criar-vaga.css';
import "./adicionar-candidatos.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sidebar from "../components/sidebar";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listarUmaVaga, cadastrarVaga } from "../../controller/vagaController";
import { listarCandidatos } from "../../controller/candidatoController";

export default function Vaga() {

    const min = 0;
    const max = 5;
    const randomColab = Math.floor((Math.random() * (max - min)));
    const randomImp = Math.floor((Math.random() * (max - min)));
    const randomInt = Math.floor((Math.random() * (max - min)));
    const randomRes = Math.floor((Math.random() * (max - min)));

    const { id } = useParams();

    const navigate = useNavigate();

    const [colInd, setColInd] = useState(0);
    const [resSoc, setResSoc] = useState(0);
    const [impVig, setImpVig] = useState(0);
    const [intPac, setIntPac] = useState(0);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idCandidato, setIdCandidato] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [candidatos, setCandidatos] = useState([]);
    const [passo, setPasso] = useState([true, false, false]);

    useEffect(() => {
        if (id) {
            listarUmaVaga(id).then((res) => {
                setTitulo(res.get('titulo'));
                setDescricao(res.get('descricao'));
            });
        }
        listarCandidatos().then((res) => {
            setCandidatos(res);
        });
    }, [id]);

    async function Finalizar() {
        await cadastrarVaga({
            'titulo': titulo,
            'descricao': descricao,
            'objetivos': {
                'colaborativo': colInd,
                'impulsivo': impVig,
                'intenso': intPac,
                'reservado': resSoc,
            },
            'candidatos': [
                {
                    'id': idCandidato,
                    'nome': nome,
                    'email': email,
                    'objetivos': {
                        'colaborativo': randomColab,
                        'impulsivo': randomImp,
                        'intenso': randomInt,
                        'reservado': randomRes,
                    },
                },
            ],
        }).then((res) => {

            if (res !== null) {
                alert('Vaga cadastrada!');
            }
            else {
                alert('Vaga N??O cadastrada!');
            }
        });
    };

    return (
        <div className="fundo">
            <div className="menu">
                <Sidebar />
            </div>
            {passo[0] &&
                <Form className="form-vaga">
                    <div className="conteudo-vaga1">
                        <div className="conteudo-formulario-vaga">
                            <h1 classname="titulo-tela">Criar Vaga</h1>
                            <h3 className="titulo-formulario-vaga">Qual vaga gostaria de criar?</h3>
                            <Form.Group className="mb-3" controlId="formBasicTitle">
                                <Form.Label>T??tulo da vaga</Form.Label>
                                <Form.Control type="text" required value={titulo} maxlength="30"
                                    onChange={(e) => setTitulo(e.target.value)} placeholder="Insira o t??tulo da vaga" />
                                <Form.Control.Feedback></Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Campo t??tulo ?? obrigat??rio.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDescription">
                                <Form.Label>Descri????o da vaga</Form.Label>
                                <Form.Control as="textarea" rows={5} required value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)} placeholder="Insira uma descri????o" />
                                <Form.Control.Feedback></Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Campo descri????o ?? obrigat??rio.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                                        <Button variant="outline-danger" type="submit" onClick={() => { navigate('/home') }}>
                                            Cancelar
                                        </Button>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                                        <Button variant="primary" type="submit" onClick={() => { setPasso([false, true, false]) }}>
                                            Pr??xima etapa
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
                                        <Form.Label>Soci??vel</Form.Label>
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
                                        <Button variant="outline-danger" type="submit" onClick={() => { setPasso([true, false, false]) }}>
                                            Cancelar
                                        </Button>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                                        <Button variant="primary" type="submit" onClick={() => { setPasso([false, false, true]) }}>
                                            Pr??xima etapa
                                        </Button>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Form>
            }
            {passo[2] &&
                <Form className="form-addCandidato">
                    <div className="conteudo">
                        <h1 classname="titulo-tela">Criar Vaga</h1>

                        <h2 className="titulo-secao">Adicionar Candidatos</h2>

                        <h6 className="titulo-botoes">Enviar formul??rio para os candidatos para a vaga de Designer</h6>
                        <Button className="button-left" variant="outline-secondary" size="lg">Criar um link</Button>
                        <Button className="button-right" variant="outline-secondary" size="lg">Criar e-mail</Button>


                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Selecione os candidatos</Form.Label>
                            <Form.Select aria-label="Default select example"
                                className="form-control"
                                value={nome}
                                onChange={(e) => {setNome(e.target.value)}}
                            >
                                <option>Selecione</option>
                                {candidatos.map(candidato =>
                                    <option value={candidato.get('nome')}
                                    >
                                        {candidato.get('email')}
                                    </option>
                                )}
                            </Form.Select>
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                                    <Button variant="outline-danger" type="button" onClick={() => { setPasso([false, true, false]); }}>
                                        Cancelar
                                    </Button>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                                    <Button variant="primary" type="button" onClick={() => { Finalizar(); }}>
                                        Finalizar
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                </Form>
            }
        </div >
    );
}