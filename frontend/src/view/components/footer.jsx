import './footer.css';
import Card from 'react-bootstrap/Card';
import React from 'react';

export default function Footer() {
  return (
    
    <div id="rodape-container">
        <Card className="text-center">
            <Card.Footer className="text-center text-muted">
                <img src="http://localhost:3000/logoRH.png" alt="Logo da empresa" className="logo" />
                <Card.Text>
                <hr/>
                  &copy; 2022 Lara & Sara. Todos os direitos reservados.
                </Card.Text>
            </Card.Footer>
        </Card>
    </div>
  );
}