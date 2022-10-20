import './cadastro.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Cadastro() {
    return (
        <div className="card-formulario-cadastro">
            <Form>
                <div className="conteudo-formulario-cadastro">
                    <h3 className="titulo-formulario-cadastro">Cadastro</h3>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="name" placeholder="Insira seu nome completo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Insira seu e-mail" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>
                    <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                    </Form.Group>
                    <Form.Group className="text-center mt-3" controlId="formBasicText">
                        Já possui cadastro? <Link to="/">Login</Link>
                    </Form.Group>
                </div>
            </Form>
        </div>
    );
}