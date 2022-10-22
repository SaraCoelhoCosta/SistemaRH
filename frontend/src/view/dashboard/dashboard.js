import './dashboard.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Dashboard() {
    return (
        <div className="card-formulario-dashboard">
            <Form>
                <div className="conteudo-formulario-dashboard">
                    <h3 className="titulo-formulario-dashboard">Dashboard</h3>

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