import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GridProject = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                    1 of 3
                </Col>
                <Col xs lg="2">
                    1 of 3
                </Col>
                <Col xs lg="2">
                    1 of 3
                </Col>
            </Row>
        </Container>
    )
}

export default GridProject