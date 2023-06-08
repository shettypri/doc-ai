import 'bootstrap/dist/css/bootstrap.min.css'
import "../../../Styles/doctor/05_Project/Project.css"
import {RingLoader} from "react-spinners/";
import {useState} from "react";
import axios from "axios";

const Project = () => {

    const [demoImage, setDemoImage] = useState(null);
    const [demoAnswer, setDemoAnswer] = useState("");

    const handleImage = async ()=>{
        const formData = new FormData();
        formData.append('image', demoImage);

        try {
            const response = await axios.post('http://127.0.0.1:8500/members',   formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            console.log(response)
            setDemoAnswer(response.data); // Handle the response from the notebook if needed
        } catch (error) {
            console.log("error")
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