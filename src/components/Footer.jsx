import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

const Footer = (props) => {
    return <footer className='bg-dark mt-5 p-4 text-center fs-5'>{props.texto}
            <br/>
            <p>Juan Aros 2023</p>
            <Badge bg="primary" text="light">Cuida a tus perros ❤</Badge>
        </footer>
}

export default Footer;