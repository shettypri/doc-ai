import React from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../../../Styles/doctor/05_Project/Project.css"

const Project = () => {
    return (
        <>
            <center>
                <Container className='projcont'>
                    <Row className="projrow g-3">
                        {cards.slice(0, 3).map((card, i) => (
                        <Col sm>
                            <Card className='gridcard'>
                                <Card.Body>This is some text within a card body.</Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card className='gridcard'>
                                <Card.Body>This is some text within a card body.</Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card className='gridcard'>
                                <Card.Body>This is some text within a card body.</Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                    <Row className="projrow g-3">
                        <Col sm>
                            <Card className='gridcard'>
                                <Card.Body>This is some text within a card body.</Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card className='gridcard'>
                                <Card.Body>This is some text within a card body.</Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card className='gridcard'>
                                <Card.Body>This is some text within a card body.</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </center>
        </>
    )
}

export default Project