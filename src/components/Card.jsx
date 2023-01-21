import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const card = ({foto, title, description}) => {
    return (
        <Card className='text-center mb-3' style={{ width: '20rem'}}>
            <Card.Img variant="top" src={foto} />
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text> {description} </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default card;