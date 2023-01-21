import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

const Footer = (props) => {
    return <footer className='bg-dark p-5 text-center fixed-bottom fs-4'>{props.texto}
            <br/>
            <p>Desarrollado por Juan Aros en 2023</p>
            <Badge bg="primary" text="light">Cuida a tus perros ❤</Badge>
        </footer>
}

export default Footer;