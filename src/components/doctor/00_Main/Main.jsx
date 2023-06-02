import React from 'react'
import Home from '../02_Home/Home.jsx'
import Research from '../03_Research/Research'
import Publication from '../04_Publication/Publication'
import Contact from '../07_Contact/Contact'
import About from '../06_About_Us/About'
import "../../../Styles/doctor/00_Main/Main.css"
import {Container, Row, Col} from 'react-bootstrap/'

const Main = () => {
    return (
        <>
            <Container fluid className='Hero'>
                <center>
                    <Row className='Vd'>
                        <Col><Home/></Col>
                    </Row>
                    <Row className='Section1' id={"Research"}>
                        <Col><Research/></Col>
                    </Row>
                    <Row className='Section2' id={Publication}>
                        <Col><Publication/></Col>
                    </Row>
                    <Row className='Section3' id={"About"}>
                        <Col><About/></Col>
                    </Row>
                    <Row className='Section4' id={"Contact"}>
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