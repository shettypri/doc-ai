import React from 'react'
import Home from '../02_Home/Home'
import Research from '../03_Research/Research'
import Publication from '../04_Publication/Publication'
import Contact from '../07_Contact/Contact'
import About from '../06_About_Us/About'

const Main = () => {
    return (
    <>
        <Home/>
        <div className='fillerdiv' style={{height:"50%"}}>
        </div>
        <Research/>
        {/* <Publication/>
        <Contact/>
        <About/> */}
    </>
    )
}

export default Main