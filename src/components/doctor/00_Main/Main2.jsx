import {React, useEffect} from 'react'
import Home from '../02_Home/Home'
import Publication from '../04_Publication/Publication'
import "../../../Styles/doctor/00_Main/Main2.css"
import { Container } from 'react-bootstrap'
import Research from '../03_Research/Research'
import Contact from '../07_Contact/Contact'
import About from '../06_About_Us/About'


const Main2 = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <>
            <div className='maindiv'>
                <section className="first" id='first'>
                    <center>
                        <Home />
                    </center>
                </section>
                <section className="second" id='second'>
                    <center>
                        <Research />
                    </center>
                </section>
                <section className="third" id='third'>
                    <center>
                        <Publication />
                    </center>
                </section>
                <section className="four" id='fourth'>
                    <center>
                        <About />
                    </center>
                </section>
                <section className="five" id='fifth'>
                    <center>
                        <Contact />
                    </center>
                </section>
            </div>
        </>
    )
}

export default Main2