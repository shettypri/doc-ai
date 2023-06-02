import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../../../Styles/doctor/05_Project/Project.css"
import {ClockLoader} from "react-spinners";
import {RingLoader} from "react-spinners/";

const Project = () => {
    const openInserver = ()=>{
        console.log("Button CLlicked")
        window. open("http://172.16.20.115:8501")
    }
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

                <div>
                    <button onClick={openInserver}>
                        Click here
                    </button>
                </div>
            </div>
        </>
    )
}

export default Project