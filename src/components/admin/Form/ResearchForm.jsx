import { React, useEffect, useRef, useState } from 'react'
import "../../../Styles/admin/Form/Research.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { researchDataIntoFirestore, researchGifUpload, reserachImageUpload } from "../../../App/Slice/formSlice.js";
import validator from 'validator'


const ResearchForm = () => {

    const [urlerr, setErrorMessage] = useState('')

    const validate = (value) => {

        if (validator.isURL(value)) {
            setErrorMessage('')
        } else {
            setErrorMessage('Is Not Valid URL')
        }
    }
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [uploadImage, setUploadImage] = useState("")
    const [uploadGif, setuploadGif] = useState("")
    const [authorName, setAuthorName] = useState('Dr. ')
    const [urlgif, setUrlgif] = useState("")
    const [imageUrl, setImageUrl] = useState("");
    const [count, setCount] = useState(0);
    const [researchPaperLink, setResearchPaperLink] = useState("")
    const [finalPublicationData, setFinalPublicationData] = useState({
        title: "",
        description: "",
        imageUrl: "",
        gifUrl: "",
        researcherList: "",
        researchPaperLink: "",
    });

    const [authorsList, setAuthorsList] = useState([])

    const [error, seterror] = useState(false)

    // const folderImage = 'Research/image'

    const dispatch = useDispatch()

    const { researchUploadState } = useSelector(state =>
        state.formReducer)

    useEffect(() => {
        if (researchUploadState.isImageUploaded) {
            setImageUrl(researchUploadState.imageUrl)
        }
        console.log("image uploaded");
    }, [researchUploadState.isImageUploaded]);


    useEffect(() => {
        if (researchUploadState.gifIsUploaded) {
            setUrlgif(researchUploadState.gifUrl)
        }
        console.log("gif uploaded");
    }, [researchUploadState.gifIsUploaded]);

    useEffect(() => {
        if (researchUploadState.isBothFileUploaded) {

            console.log("trigerrr............... ")
            dispatch(researchDataIntoFirestore(publicationData))
        }
    }, [researchUploadState.isBothFileUploaded]);

    if (researchUploadState.gifIsUploaded && researchUploadState.isImageUploaded) {
        var publicationData = {
            "title": title,
            "description": description,
            "imageUrl": imageUrl,
            "authors": authorsList,
            "gifUrl": urlgif,
            "link": researchPaperLink
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            title.length == 0 || description.length == 0 || authorsList.length == 0 || imageRef.length == 0 || gifref.length == 0
        ) {
            seterror(true);
        } else {
            dispatch(reserachImageUpload(uploadImage))
            dispatch(researchGifUpload(uploadGif))
        }

    }
    const addAuthor = () => {
        if (authorName != "Dr. ") {
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
    const gifref = useRef()

    const navigate = useNavigate()
    return (
        <>
            <div className="main-form">

                <div className={"Form-back-button"}>
                    <FontAwesomeIcon icon={faArrowLeft}
                        size="xl"
                        style={{ color: "#ffffff", cursor: 'pointer' }}
                        onClick={() => {
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
                            <label>
                                Research Title:
                            </label>
                            <input type="text"
                                value={title}
                                onChange={
                                    (e) => {
                                        setTitle(e.target.value)
                                    }
                                }
                                required />
                        </div>
                        <div className="messages">
                            {error && title.length <= 0 ?
                                <label>Title can not be empty</label> : ""}
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
                            {error && uploadImage <= 0 ?
                                <label>Please upload images</label> : ""}
                        </div>


                        <div className="form-fields">
                            <label>
                                Upload Gif:
                            </label>
                            <input
                                type="file"
                                accept=".gif"
                                ref={gifref}

                                onChange={
                                    (e) => {
                                        setuploadGif(e.target.files[0])

                                    }
                                }
                                required
                            />
                        </div>
                        <div className="messages">
                            {error && uploadGif <= 0 ?
                                <label>Please upload gif </label> : ""}
                        </div>
                    </div>

                    <div className="form-right">
                        <div className="form-fields">
                            <label>
                                Research Description:
                            </label>

                            <textarea
                                rows={6}
                                required
                                maxLength={5000}
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value), setCount(e.target.value.length);
                                }}
                            />
                        </div>
                        <div className="messages">
                            {error && description.length <= 0 ?
                                <lable>Description can not be empty </lable> : ""}
                            <span id="count_message">{count}/5000</span>
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
                                                        style={{ color: "#ff0000", cursor: "pointer" }}
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
                            <label>
                                Researchers:
                            </label>

                            <div className="input-container">

                                <input type="text"
                                    value={authorName}
                                    onChange={
                                        (e) => {
                                            setAuthorName(e.target.value)
                                        }
                                    }
                                    required />
                                <button onClick={addAuthor} style={{ borderRadius: "5px" }}>
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
                                Research Paper Link:
                            </label>
                            <input type="text"
                                value={researchPaperLink}
                                onChange={
                                    (e) => {
                                        setResearchPaperLink(e.target.value), validate(e.target.value)
                                    }
                                }
                                required />
                        </div>
                        <div className="messages">
                            {error && title.length <= 0 ?
                                <label>Paper Link cannot be empty</label> : ""}
                        </div>
                        <label className="messages">{urlerr}</label>


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