import React from 'react'
import Home from '../02_Home/Home'
import Research from '../03_Research/Research'
import Publication from '../04_Publication/Publication'
import Contact from '../07_Contact/Contact'
import About from '../06_About_Us/About'
import "../../../Styles/doctor/00_Main/Main.css"
import { Container, Row, Col } from 'react-bootstrap/'

const Main = () => {
    return (
        <>
            <Container fluid className='Hero'>
                <center>
                    <Row className='Vd'>
                        <Col><Home/></Col>
                    </Row>
                    <Row className='Section1'>
                        <Col><Research/></Col>
                    </Row>
                    <Row className='Section2'>
                        <Col><Publication/></Col>
                    </Row>
                    <Row className='Section3'>
                        <Col><About/></Col>
                    </Row>
                    <Row className='Section4'>
                        <Col><Contact/></Col>
                    </Row>
                </center>
            </Container>
            

            {/* <Publication/> */}
            {/* <Contact/> */}
            {/* <About/> */}
        </>
    )
}

export default Main