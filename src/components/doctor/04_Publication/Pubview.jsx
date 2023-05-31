import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import "../../../Styles/doctor/04_Publication/Pubview.css"
import image1 from "../../../assets/Doctor/Images/rch1.png"
const Pubview = () => {
    return (
        <>
            <Container className='contpubview'>
                <Row>
                    <Col sm={4}>
                        <Card className='imgcontainer bg-transparent'>
                            <img src={image1} alt="..." />
                        </Card>

                    </Col>
                    <Col sm={8}>
                        <Card className='pubtitle bg-transparent'>
                            <h1>title</h1>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        vughvjv
                    </Col>
                    <Col sm={8}>sm=8</Col>
                </Row>
            </Container>
            {/* <section className="pubv">
                <div className="pubhead">
                    <h1 style={{ background: 'black' }}>Publication</h1>
                </div>
                <div className="containerpub">
                    <div className="pubv-image">
                        <img style={{ height: '250px', width: '450px' }} src="pic44.jpg" />
                    </div>
                    <div className="pubv-content">
                        <h2 style={{ color: '#fff' }}><b>Immune phenotypes classified by deep learning-based H&amp;E tissue analyzer
                            demonstrate distinct immune landscape and transcriptomic features in ovarian cancer</b></h2>
                        <p style={{ color: '#fff' }}>Horyun Choi et al. - AACR (2023)</p>
                        <div className="abstract">
                            <h2 style={{ color: '#fff' }}><b>Abstract</b></h2>
                            <p style={{ color: 'blanchedalmond' }}>Deep learning-based H&amp;E slide analyzer, Lunit-SCOPE IO can
                                classify the tumor microenvironment as three immune phenotypes (IPs): inflamed, immune-excluded
                                and immune-desert. In our previous study, the IPs demonstrated distinct survival outcome and
                                immunologic landscape in endometrial cancer. To further explore the application of IPs in other
                                type of cancer, we applied Lunit-SCOPE in ovarian cancer (OV) and compared tumor
                                microenvironments based on the IPs.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Pubview