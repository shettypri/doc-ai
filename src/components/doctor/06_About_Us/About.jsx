// import React from 'react'
import "../../../Styles/doctor/06_About/About.css"
const About = () => {
  return (
    <>
      <section className="hero">
        <div className="heading">
          <h1 style={{ background: 'black' }}>About Us</h1>
        </div>
        <div className="containerabus">
          <div className="hero-content">
            <h2 style={{ color: '#fff'}}>Welcome to Our Website</h2>
            <p style={{ color: '#fff' }}>PrognosisAI is a website that provides medical information to patients and healthcare professionals. It was founded in 2015 by Dr. Michael Smith, a physician and computer scientist. PrognosisAI uses artificial intelligence to analyze patient data and provide personalized predictions of disease progression and treatment outcomes.</p>
            {/* <button class="cta-button" style="color: #fff;">Learn More</button> */}
          </div>
          <div className="hero-image">
            <img style={{ height: '400px', width: '600px' }} src="pic44.jpg" />
          </div>
        </div>
        <div className="containerteam">
          <h1 id="ourteam" style={{ color: '#fff' }}><b>OUR TEAM</b></h1><br />
          <center>
            <div className="row" style={{ color: '#fff' }}>
              <div className="col profile">
                <div className="img-box" style={{ width: '500px', height: '200px' }}>
                  <img src="person3.jpg" className="img-responsive" />
                  <ul>
                    <a href="#">
                      <li> <i className="fa fa-facebook" aria-hidden="true" /></li>
                    </a>
                    <a href="#">
                      <li> <i className="fa fa-twitter" aria-hidden="true" /></li>
                    </a>
                    <a href="#">
                      <li> <i className="fa fa-linkedin" aria-hidden="true" /></li>
                    </a>
                  </ul>
                </div>
                <h2 id="next">Basavesh</h2>
                <h3 id="pos">Business Head</h3>
              </div>
              <div className="col profile" style={{ color: '#fff' }}>
                <div className="img-box" style={{ width: '400px' }}>
                  <img src="person3.jpg" className="img-responsive" />
                  <ul>
                    <a href="#">
                      <li> <i className="fa fa-facebook" aria-hidden="true" /></li>
                    </a>
                    <a href="#">
                      <li> <i className="fa fa-twitter" aria-hidden="true" /></li>
                    </a>
                    <a href="#">
                      <li> <i className="fa fa-linkedin" aria-hidden="true" /></li>
                    </a>
                  </ul>
                </div>
                <h2 id="next">Satish</h2>
                <h3 id="pos">Business Head</h3>
              </div>
              <div className="col profile">
                <div className="img-box" style={{ width: '400px' }}>
                  <img src="person3.jpg" className="img-responsive" />
                  <ul>
                    <a href="#">
                      <li> <i className="fa fa-facebook" aria-hidden="true" /></li>
                    </a>
                    <a href="#">
                      <li> <i className="fa fa-twitter" aria-hidden="true" /></li>
                    </a>
                    <a href="#">
                      <li> <i className="fa fa-linkedin" aria-hidden="true" /></li>
                    </a>
                  </ul>
                </div>
                <h2 id="next">Ramesh</h2>
                <h3 id="pos">Business Head</h3>
              </div>
            </div>
          </center>
        </div>
      </section>
    </>
  )
}

export default About