// import React from 'react'
import image1 from "../../../assets/Doctor/Images/rch1.png"
import image2 from "../../../assets/Doctor/Images/pexels-drew-rae-580679.jpg"
import "../../../Styles/doctor/03_Research/Research.css"
const Research = () => {
    const screenArray = [
        [
            "Cancer Screening AI",
            "AI for Cancer detection",
            "By detecting early-stage cancers, AI enables management that can increase chance of survival"
        ],
        [

            "Cancer Screening AI",
            "AI for Cancer detection",
            "By detecting early-stage cancers, AI enables management that can increase chance of survival"
        ]
    ]
    return (
        <>
            <center>
                <div className="containerrch">
                    <center>
                        <h2>Saving Lives Through Technology</h2>
                        <br />
                    </center>
                    <div className="row row-cols-1 row-cols-md-2 g-1">
                        {
                            screenArray.map((contentValue, index) => {
                                return (
                                    <>
                                        <div className="col-sm-6 mb-3 mb-sm-0" key={index} >
                                            <div className="card bg-transparent container-ai" id="carocard">
                                                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval={2000}>
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                            <img src={image1} height="350px" className="d-block w-100 rounded-4" alt="..." />
                                                        </div>
                                                        <div className="carousel-item ">

                                                            <img src={image2} height="350px" className="d-block w-100 rounded-4" alt="..." />
                                                        </div>

                                                    </div>
                                                    <div className="card-img-overlay bg-transparent container-text">
                                                        {
                                                            contentValue.map((values, index) => {
                                                                return (
                                                                    <>
                                                                        <p className="card-text bg-transparent" key={index}>
                                                                            {values}
                                                                        </p>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                        <div className="d-flex flex-row bg-transparent">
                                                            <div className="p-2 bg-transparent">
                                                                <button className="container-button">
                                                                    <i className="fa-solid fa-circle-arrow-right fa-2xl" />
                                                                </button>
                                                            </div>
                                                        </div>

                                                        
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                )
                            })
                        }
                    </div>
                </div>
            </center>
        </>
    )
}

export default Research