import "./home.css";
import Carousel from "react-bootstrap/Carousel";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
//import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Sidebar from "../components/sidebar";
import { listarVagas } from "../../controller/vagaController";
import { useState, useEffect } from "react";
//import Footer from "../components/footer";


export default function Home() {
    const [vagas, setVagas] = useState([]);

    useEffect(() => {
        listarVagas().then((res) => {
            setVagas(res);
        });
    });

    return (
        <div className="fundo-dashboard">
            <div className="menu">
                <Sidebar />
            </div>

            <div>
                <Row>
                    <Col>
                        <Carousel variant="dark">
                            {vagas.map(vaga => (
                                <Carousel.Item interval={10000000000000}>
                                    <Form className="form-dash" key={vaga.id} onSubmit="enviar">
                                        <div className="conteudo-home">
                                            <h3 className="titulo-page">Atividades Recentes nas Vagas</h3>
                                            <Link className="button-esq" variant="outline-dark" size="lg" to={`/revisarCandidato/${vaga.id}`} >
                                                {vaga.get('titulo')}
                                            </Link>
                                        </div>
                                    </Form>
                                </Carousel.Item>
                            ))}
                            <Carousel.Caption>
                                <h5 className="title5">Ver todas</h5>
                            </Carousel.Caption>
                        </Carousel>
                    </Col>

                    <Col>
                        <Form className="form-dash">
                            <div className="conteudo-home">
                                <h3 className="titulo-page">Avaliações Pendentes</h3>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <td><PersonOutlinedIcon /></td>
                                            <td>João da Silva</td>
                                            <td>Operador</td>
                                            <td className="button-lista">
                                                <WatchLaterOutlinedIcon className="icone-lista" />
                                                Reenviar
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><PersonOutlinedIcon /></td>
                                            <td>João da Silva</td>
                                            <td>Operador</td>
                                            <td className="button-lista">
                                                <WatchLaterOutlinedIcon className="icone-lista" />
                                                Reenviar
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><PersonOutlinedIcon /></td>
                                            <td>João da Silva</td>
                                            <td>Operador</td>
                                            <td className="button-lista">
                                                <WatchLaterOutlinedIcon className="icone-lista" />
                                                Reenviar
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><PersonOutlinedIcon /></td>
                                            <td>João da Silva</td>
                                            <td>Operador</td>
                                            <td className="button-lista">
                                                <WatchLaterOutlinedIcon className="icone-lista" />
                                                Reenviar
                                            </td>
                                        </tr>
                                    </thead>
                                </Table>
                                <h5 className="title5">Ver todas</h5>
                            </div>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form className="form-dash">
                            <div className="conteudo-home">
                                <h3 className="titulo-page">Finalizados Recentemente</h3>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <td><PersonOutlinedIcon /></td>
                                            <td>João da Silva</td>
                                            <td>Operador</td>
                                            <td className="button-lista">
                                                <SendOutlinedIcon className="icone2-lista" />
                                                Enviar
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><PersonOutlinedIcon /></td>
                                            <td>João da Silva</td>
                                            <td>Operador</td>
                                            <td className="button-lista">
                                                <WatchLaterOutlinedIcon className="icone-lista" />
                                                Reenviar
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><PersonOutlinedIcon /></td>
                                            <td>João da Silva</td>
                                            <td>Operador</td>
                                            <td className="button-lista">
                                                <WatchLaterOutlinedIcon className="icone-lista" />
                                                Reenviar
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><PersonOutlinedIcon /></td>
                                            <td>João da Silva</td>
                                            <td>Operador</td>
                                            <td className="button-lista">
                                                <SendOutlinedIcon className="icone2-lista" />
                                                Enviar
                                            </td>
                                        </tr>
                                    </thead>
                                </Table>
                                <h5 className="title5">Ver todas</h5>
                            </div>
                        </Form>
                    </Col>

                    <Col>
                        <Form className="form-dash">
                            <div className="conteudo-home">
                                <h3 className="titulo-page">Finalizados Recentemente</h3>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <td><PersonOutlinedIcon /></td>
                                            <td>João da Silva</td>
                                            <td>Operador</td>
                                            <td className="button-lista">
                                                <SendOutlinedIcon className="icone2-lista" />
                                                Enviar
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><PersonOutlinedIcon /></td>
                                            <td>João da Silva</td>
                                            <td>Operador</td>
                                            <td className="button-lista">
                                                <WatchLaterOutlinedIcon className="icone-lista" />
                                                Reenviar
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><PersonOutlinedIcon /></td>
                                            <td>João da Silva</td>
                                            <td>Operador</td>
                                            <td className="button-lista">
                                                <WatchLaterOutlinedIcon className="icone-lista" />
                                                Reenviar
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><PersonOutlinedIcon /></td>
                                            <td>João da Silva</td>
                                            <td>Operador</td>
                                            <td className="button-lista">
                                                <SendOutlinedIcon className="icone2-lista" />
                                                Enviar
                                            </td>
                                        </tr>
                                    </thead>
                                </Table>
                                <h5 className="title5">Ver todas</h5>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}