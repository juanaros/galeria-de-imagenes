import './App.css';
import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div>
      <Header title="Galería de Imágenes con React"/>
      <Container>
      <Row className="justify-content-md-center">
        <Col><Card foto="https://images.pexels.com/photos/11769616/pexels-photo-11769616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="West Highland White Terrier" description="Un precioso west highland white terrier" /></Col>
        <Col><Card foto="https://images.pexels.com/photos/511187/pexels-photo-511187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Golden retriever" description="Un excelente golden retriever" /></Col>
        <Col><Card foto="https://images.pexels.com/photos/5860550/pexels-photo-5860550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Pitbull" description="Un fantastico pitbull" /></Col>
      </Row>
      </Container>
      <Footer texto="Galeria de fotos de perros" />
    </div>
  )
}

export default App;
