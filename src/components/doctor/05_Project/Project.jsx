import 'bootstrap/dist/css/bootstrap.min.css'
import "../../../Styles/doctor/05_Project/Project.css"
import {RingLoader} from "react-spinners/";
import {useState} from "react";
import axios from "axios";

const Project = () => {
    // const openInServer = ()=>{
    //     console.log("Button Clicked")
    //     // window.open("http://172.16.20.115:8501")
    //     window.open("http://172.16.4.31:8501")
    // }
    const [demoImage, setDemoImage] = useState(null);

    const [demoAnswer, setDemoAnswer] = useState("Demo answer");

    const handleImage = async ()=>{
        console.log(demoImage)

        const data = {
            name: 'John Doe',
            age: 30,
            email: 'johndoe@example.com'
        };

        try {
            const response = await axios.post('http://localhost:8888/notebooks/example.ipynb', data);
            console.log(response.data); // Handle the response from the notebook if needed
        } catch (error) {
            console.error(error);
        }


    }
    return (
    <>

            {/* <div className={"project-main"}>
                <RingLoader
                    color="#b47c0c"
                    size={285}
                />

                <h1>
                    Coming Soon.........
                </h1>

                <div>
                    <button onClick={openInServer}>
                        Click here
                    </button>
                </div>
            </div>*/}

            <div className={"Demo-project"}>
                <div className={"demo-input"}>
                    <input type={"file"}
                           placeholder={"Enter the image"}
                           // value={demoImage}
                           onChange={
                        (e)=>{
                            setDemoImage(e.target.files[0])
                        }
                    }
                    />
                </div>

                <div className={"demo-button"}>
                    <button onClick={handleImage}>
                        Evalvate
                    </button>
                </div>

                <div className={"demo-answer"}>
                    <h1>
                        {demoAnswer}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Project