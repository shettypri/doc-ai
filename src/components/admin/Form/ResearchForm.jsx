import { useRef, useState } from 'react'
import cancel from "../../../assets/Admin/Dash-board/close.png"
import ImageUpload from './ImageUpload'
import storeInDataBase from './storeInDataBase'
import "../../../Styles/admin/Form/Research.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from "react-router-dom";

const ResearchForm = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [uploadImage, setUploadImage] = useState("")
    const [authorName, setAuthorName] = useState('Dr. ')

    const [authorsList, setAuthorsList] = useState([])

    const [error, seterror] = useState(false)

    const folderImage = 'Research/image'

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            title.length == 0 || description.length == 0 || authorsList.length == 0 || imageRef.length==0
        ) {
            seterror(true);

        }
        else {
            const fileName = imageRef.current.files[0].name
            const isImageUploaded = await ImageUpload(uploadImage, fileName, folderImage)

            if (isImageUploaded) {
                console.log("DONE");

                const finalData = {
                    "title": title,
                    "description": description,
                    "imageUrl": isImageUploaded,
                    "authors": authorsList,

                }
                storeInDataBase(finalData, 'Research')
            }

        }

    }
    const addAuthor = () => {
        if (authorName != "") {
            setAuthorsList(oldArray => [...oldArray, authorName])
            setAuthorName("Dr. ")
        }
    }


    const removeAuthor = (index) => {
        setAuthorsList([
            ...authorsList.slice(0, index),
            ...authorsList.slice(index + 1, authorsList.length)
        ])

    }

    const imageRef = useRef()
    const navigate = useNavigate()
    return (
        <>
            <div className="main-form">

                    <div className={"Form-back-button"}>
                        <FontAwesomeIcon icon={faArrowLeft}
                                         size="xl"
                                         style={{color: "#ffffff",}}
                        onClick={()=>{
                            navigate("/Dashboard")
                        }}
                        />
                    </div>
                <div className="form-heading">
                    <p>Research</p>
                </div>

                <div className="font-content">
                    <div className="form-left">
                        <div className="form-fields">
                            <label >
                                Research Title:
                            </label>
                            <input type="text"
                                value={title}
                                onChange={
                                    (e) => { setTitle(e.target.value) }
                                }
                                required />
                        </div>
                        <div className="messages">
                            {error && title.length <= 0 ?
                                <label>Title can not be empty</label> : ""}
                        </div>

                        <div className="list-arrays">
                            <div className="array-box">
                                {
                                    authorsList.map((val, index) => {
                                        return (
                                            <>
                                                <div className="added-array" key={index}>
                                                    <p>{val}</p>
                                                    <FontAwesomeIcon icon={faCircleXmark} size="xl"
                                                                       style={{color: "#ff0000",cursor:'pointer'}}
                                                        height={"25px"} width="25px"
                                                        onClick={() => removeAuthor(index)}
                                                    />
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>


                        <div className="form-fields">
                            <label >
                                Researchers:
                            </label>

                            <div className="input-container">

                                <input type="text"
                                    value={authorName}
                                    onChange={
                                        (e) => { setAuthorName(e.target.value) }
                                    }
                                    required />
                                <button onClick={addAuthor}>
                                    Add
                                </button>
                            </div>
                        </div>
                        <div className="messages">
                            {error && authorsList.length <= 0 ?
                                <label>Researcher can not be empty</label>
                                : ""}
                        </div>

                        <div className="form-fields">
                            <label>
                                Upload Image:
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                ref={imageRef}
                                // value={uploadImage}
                                onChange={
                                    (e) => {
                                        setUploadImage(e.target.files[0])

                                    }
                                }
                                required
                            />
                        </div>
                        <div className="messages">
                            {error && uploadImage<=0?
                                <label>Please upload images</label> : ""}
                        </div>
                    </div>

                    <div className="form-right">
                        <div className="form-fields">
                            <label >
                                Research Description:
                            </label>

                            <textarea
                                rows={6}
                                required
                                value={description}
                                onChange={
                                    (e) => {
                                        setDescription(e.target.value)
                                    }
                                }
                            />
                        </div>
                        <div className="messages">
                            {error && description.length <= 0 ?
                                <lable>description can not be empty </lable> : ""}
                        </div>


                        <div className="form-button">
                            <button className="formSubmit"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResearchForm