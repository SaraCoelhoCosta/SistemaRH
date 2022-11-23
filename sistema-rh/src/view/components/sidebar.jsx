import './sidebar.css';
import "../home/home.css"
import { SidebarData } from "./sidebarData.jsx";
import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { sair, retornarEmail, retornarNome } from "../../controller/userController";

export default function Sidebar() {

    const navigate = useNavigate();
    const [email, setEmail] = useState([]);
    const [nome, setNome] = useState([]);

    useEffect(() => {
        retornarEmail().then((res) => {
            setEmail(res);
        });
    });

    useEffect(() => {
        retornarNome().then((res) => {
            setNome(res);
        });
    });

    async function enviar(ev) {
        ev.preventDefault();
        await sair().then((res) => {
            if (res) {
                navigate('/');
            }
        });
    };

    return (

        <div className="sidebar">
            <div className="logo-rh">
                <img src="http://localhost:3000/recrutamento1.png" alt="Logo" width="200px" height="100px" />
            </div>

            <div className="sidebar-menu">
                <h5 classname="titulo-secao">Menu</h5>
                <ul className="sidebarList">
                    {SidebarData.map((valor, key) => {
                        return (
                            <li
                                key={key}
                                className="row"
                                id={window.location.pathname == valor.link ? "active" : ""}
                                onClick={() => {
                                    window.location.pathname = valor.link;
                                }}
                            >
                                <div id="icon">{valor.icon}</div>
                                <div id="title">{valor.title}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <hr className="linha" />

            <div className="perfil">
                <h5 classname="titulo-secao">Perfil</h5>
                <p class="d-flex align-items-center  text-decoration-none " data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="http://localhost:3000/foto-perfil.jpg" alt="Foto do perfil" width="32" height="32" class="rounded-circle me-2" />

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={nome} />
                            <Form.Control plaintext readOnly defaultValue={email} />
                        </Col>
                    </Form.Group>
                </p>

            </div>

            <div className="botao-sair">
                <Form onSubmit={enviar}>
                    <div className="conteudo-formulario-home">
                        <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                            <Button className="button-sair" variant="danger" type="submit">
                                Sair
                            </Button>
                        </Form.Group>
                    </div>
                </Form>
            </div>
        </div>
    );
}