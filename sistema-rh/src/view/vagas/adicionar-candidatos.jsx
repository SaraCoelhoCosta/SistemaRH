import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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

                <h6 className="titulo-select">Selecione os candidatos</h6>
                <div className="select-candidato">
                    <Form.Select aria-label="Default select example">
                        <option>Selecione</option>
                        <option value="1">João</option>
                        <option value="2">Maria</option>
                        <option value="3">Cecília</option>
                    </Form.Select>

                    <Link className="button-add" variant="outline-dark" size="lg">
                        Adicionar
                    </Link>
                </div>
            </div>
           
        </Form>
    </div>
    
    
  );
}