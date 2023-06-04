import {React, useEffect} from 'react'
import "../../../Styles/doctor/06_About/About.css"
import tempImage from "../../../assets/Doctor/Images/pexels-drew-rae-580679.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {Row, Col} from 'react-bootstrap/';
import image1 from "../../../assets/Doctor/Images/contactusbg.jpeg"

const About = () => {
  return (
    <>
      <section className="hero">
        <div className="heading">
          <p style={{ background: 'black' }}>About Us</p>
        </div>
        <div className="containerabus">
          <div className="hero-content">
            <h2 style={{ color: '#fff' }}>Welcome to <span>PrognosisAI</span></h2>
            <p style={{ color: '#fff' }}>PrognosisAI is a website that provides medical information to patients and healthcare professionals. PrognosisAI uses artificial intelligence to analyze patient data and provide personalized predictions of disease progression and treatment outcomes.</p>
            {/* <button class="cta-button" style="color: #fff;">Learn More</button> */}
          </div>
          <div className="hero-image">
            <img style={{ height: '250px', width: '400px' }} src={tempImage} />
          </div>
        </div>
        <div className="containerteam">
          <h1 id="ourteam" style={{ color: '#fff' }} ><b>TEAM</b></h1><br />
          <center>
            <Row >
              <Col md={4} sm={1} className="abtimgcont">
                <div class="our-team">
                  <img src={image1} alt=""/>
                    <div class="team-content">
                      <h3 class="title">Williamson</h3>
                      <span class="post">web developer</span>
                      <ul class="social-links">
                        <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} size='lg'/></a></li>
                      </ul>
                    </div>
                </div>
              </Col>
              <Col md={4} sm={1}>
                <div class="our-team">
                  <img src={image1} alt=""/>
                    <div class="team-content">
                      <h3 class="title">Williamson</h3>
                      <span class="post">web developer</span>
                      <ul class="social-links">
                        <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} size='lg'/></a></li>
                      </ul>
                    </div>
                </div>
              </Col>
              <Col md={4} sm={1}>
                <div class="our-team">
                  <img src={image1} alt=""/>
                    <div class="team-content">
                      <h3 class="title">Williamson</h3>
                      <span class="post">web developer</span>
                      <ul class="social-links">
                        <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} size='lg'/></a></li>
                      </ul>
                    </div>
                </div>
              </Col>
            </Row>
          </center>
        </div>
      </section>
    </>
  )
}

export default About