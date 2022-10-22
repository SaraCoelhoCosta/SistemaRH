import './home.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Home() {
    return (
        <div className="card-formulario-home">
            <Form>
                <div className="conteudo-formulario-home">
                    <h3 className="titulo-formulario-home">Home</h3>

                    <Form.Group className="d-grid gap-2 mt-3" controlId="formBasicButton">
                        <Button variant="danger" type="submit">
                            Sair
                        </Button>
                    </Form.Group>
                </div>
            </Form>
        </div>
    );
}