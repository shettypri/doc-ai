import React from 'react'
import { Link } from 'react-router-dom'
import "../../../Styles/doctor/02_Home/Home.css"
import backgroundVideo from "../../../assets/Doctor/Videos/bgvid2.mp4"
const Home = () => {
    return (
        <>

            <div className={"Home-main"}>
                    <center>
                        <section className="video-background">
                            <video src={backgroundVideo}  autoPlay muted />
                        </section>
                    </center>
                <section className="contenthm bg-transparent">
                    <center>
                        <div className="containerhm">
                            <Link to="/ResearchviewAll" className="button">
                                <div className="button__line" />
                                <div className="button__line" />
                                <span className="button__text">Get Report</span>
                                <div className="button__drow1" />
                                <div className="button__drow2" />
                            </Link>
                        </div>
                    </center>
                </section>
            </div>
        </>
    )
}

export default Home