import './home.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { sair } from "../../controller/userController";

export default function Home() {

    const navigate = useNavigate();

    async function enviar(ev) {
        ev.preventDefault();
        await sair().then((res) => {
            if (res) {
                navigate('/');
            }
        });
    };

    return (
        <div className="card-formulario-home">
            <Form onSubmit={enviar}>
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