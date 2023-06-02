import React from 'react'
import Home from '../02_Home/Home'
import Publication from '../04_Publication/Publication'
import "../../../Styles/doctor/00_Main/Main2.css"
import { Container } from 'react-bootstrap'
import Research from '../03_Research/Research'
import Contact from '../07_Contact/Contact'
import About from '../06_About_Us/About'

const Main2 = () => {
    return (
        <>
            <div className='maindiv'>
                <section className="first">
                    <center>
                        <Home />
                    </center>
                </section>
                <section className="second">
                    <center>
                        <Research />
                    </center>
                </section>
                <section className="third">
                    <center>
                        <Publication />
                    </center>
                </section>
                <section className="four">
                    <center>
                        <About />
                    </center>
                </section>
                <section className="five">
                    <center>
                        <Contact />
                    </center>
                </section>
            </div>
        </>
    )
}

export default Main2