import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../../../Styles/doctor/05_Project/Project.css"
import {ClockLoader} from "react-spinners";
import {RingLoader} from "react-spinners/";

const Project = () => {
    return (
        <>
            <div className={"project-main"}>
                <RingLoader
                    color="#b47c0c"
                    size={285}
                />

                <h1>
                    Coming Soon.........
                </h1>
            </div>
        </>
    )
}

export default Project