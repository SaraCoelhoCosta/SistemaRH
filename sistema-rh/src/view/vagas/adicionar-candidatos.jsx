import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./adicionar-candidatos.css";
import Sidebar from "../components/sidebar";

export default function AdicionarCandidato() {
  return (
    <div className="fundo-vaga3">
        <div className="menu">
            <Sidebar />
        </div>
        <Form className="form-addCandidato">
            <div className="conteudo">
                <h1 classname="titulo-tela">Criar Vaga</h1>

                <h2 className="titulo-secao">Adicionar Candidatos</h2>

                <h6 className="titulo-botoes">Enviar formulário para os candidatos para a vaga de Designer</h6>
                <Button className="button-left" variant="outline-secondary" size="lg">Criar um link</Button>{' '}
                <Button className="button-right" variant="outline-secondary" size="lg">Criar e-mail</Button>{' '}

                <Form.Group className="mb-3 emails" controlId="formGroupEmail">
                    <Form.Label>Digite os e-mails separados por vírgula</Form.Label>
                    <Form.Control type="email" placeholder="fulano@gmail.com, ciclano@gmail.com" />
                </Form.Group>

                <div className="dados-candidato">
                    <Row>
                        <Col>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control placeholder="Fulano" />
                        </Col>
                        <Col>
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control placeholder="Silva" />
                        </Col>
                        <Col>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="fulano@gmail.com" />
                        </Col>
                    </Row>
                    <Row className="button-acesso">
                        <Col>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control placeholder="Fulano" />
                        </Col>
                        <Col>
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control placeholder="Silva" />
                        </Col>
                        <Col>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="fulano@gmail.com" />
                        </Col>
                    </Row>
                </div>
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
                                Finalizar
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </div>
           
        </Form>
    </div>
    
    
  );
}