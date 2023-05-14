// import React from 'react'
import "../../../Styles/doctor/04_Publication/Publication.css";
import image1 from "../../../assets/Doctor/Images/rch1.png";
import image2 from "../../../assets/Doctor/Images/hi.png";
const Publication = () => {
    const publicationData = [
        {
            image: image1,
            title: " Lunit Meets MDR CE Standards for 3D Breast Tomosynthesis AI Solution",
            date: `Mar 20, 2023 - 2 min read`,
        },
        {
            image: image2,
            title: " Lunit Meets MDR CE Standards for 3D Breast Tomosynthesis AI Solution",
            date: `Mar 20, 2023 - 4 min read`,
        },
        {
            image: image2,
            title: " Lunit Meets MDR CE Standards for 3D Breast Tomosynthesis AI Solution",
            date: `Mar 20, 2023 - 4 min read`,
        },
    ];
    return (
        <>
            <center>
                <div className="containerpb text-center">
                    <p className="publication-heading"> Publications </p>

                    <div className="row row-cols-2 row-cols-lg-3 g-4 g-lg-3 bg-transparent">
                        {publicationData.map((inputValue, index) => {
                            return (
                                <>
                                    <div
                                        className="col bg-transparent publication-card"
                                        key={index}
                                    >
                                        <div className="p-3 card bg-transparent pwd">
                                            <div className="card bg-transparent">
                                                <img
                                                    src={inputValue.image}
                                                    height="250px"
                                                    width="200px"
                                                    className="card-img-top publication-image"
                                                    alt="..."
                                                />
                                            </div>
                                            <div className="card-body publication-content">
                                                <p className="card-title">
                                                    {inputValue.title}
                                                </p>

                                                <p className="card-text fw-lighter">
                                                    {inputValue.date}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </center>
        </>
    );
};

export default Publication;
