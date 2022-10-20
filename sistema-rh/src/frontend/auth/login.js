import './login.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Login() {

    return (
        <div className="card-formulario-login">
            <Form>
                <div className="conteudo-formulario-login">
                    <h3 className="titulo-formulario-login">Login</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Insira seu e-mail" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Mantenha-me conectado" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <span className="link-primary">Esqueceu senha?</span>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                    </Form.Group>
                    <Form.Group className="text-center mt-3" controlId="formBasicText">
                        Ainda não possui cadastro? <Link to="/cadastro">Cadastre-se</Link>
                    </Form.Group>
                </div>
            </Form>
        </div>
    );
}