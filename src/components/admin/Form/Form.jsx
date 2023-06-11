import React, {useEffect} from "react";
import {useRef, useState} from "react";
import "../../../Styles/admin/Form/Form.css";
import cancel from "../../../assets/Admin/Dash-board/close.png";
import ImageUpload from "./ImageUpload";
import storeInDataBase from "./storeInDataBase";
import Error from "../../Alert/Error";
import Alert from 'react-bootstrap/Alert';
import Loading from "../../Alert/Loading";
import Success from "../../Alert/Success";
import {Form, useNavigate} from "react-router-dom";
import success from "../../Alert/Success";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Modal, Button} from 'react-bootstrap/';


const FormPage = () => {
    const imageRef = useRef();
    const navigate = useNavigate()
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => {
            setShow(true);
        }
        const [uploadImage, setUploadImage] = useState("");
        const [authorsList, setAuthorsList] = useState([]);

        const [error, setError] = useState(false);
        const [count, setCount] = React.useState(0);

        const [authorData, setAuthorData] = useState({
            name: "",
            designation: "",
            profileLink: "",
        });
        const [authorError, setAuthorError] = useState(false);

        const folderImage = "Publications/image";

        const [publicationFormData, setPublicationFormData] = useState({
            title: "",
            description: "",
            refernceLink: "",
        });

        const authorChange = (event) => {
            setAuthorData({
                ...authorData, [event.target.name]: event.target.value
            })
        }

        const handlePublicationFormData = (event) => {
            setPublicationFormData({
                ...publicationFormData, [event.target.name]: event.target.value
            })
            if (event.target.name === "description") {
                setCount(event.target.value.length)
            }
        }


        const handleSubmit = async (e) => {
            e.preventDefault();
            if (publicationFormData.title.length === 0 || publicationFormData.description.length === 0 ||
                authorsList.length === 0 || uploadImage.name.length === 0 ||
                publicationFormData.refernceLink.length === 0) {
                setError(true);
                console.log("clicked error");
            } else {
                const fileName = imageRef.current.files[0].name;
                const isImageUploaded = await ImageUpload(
                    uploadImage, fileName, folderImage
                )
                if (uploadImage.name.length !== 0) {
                    publicationFormData['imageUrl'] = isImageUploaded
                    console.log(publicationFormData.imageUrl)
                }
                publicationFormData['authors'] = authorsList
                console.log(publicationFormData)
                storeInDataBase(publicationFormData, "Publications")
                navigate(
                    "/Dashboard/Form"
                )
            }
        };
        const addAuthor = () => {
            if (authorData.name !== "" && authorData.designation !== "") {
                setAuthorsList(authorsList.concat(authorData))
                setShow(false);
                setAuthorData({
                    ...authorData,
                    ["name"]: "",
                    ["designation"]: "",
                    ["profileLink"]: "",
                })
            } else {
                setAuthorError(true)
            }
        };


        const removeAuthor = (index) => {
            setAuthorsList([
                ...authorsList.slice(0, index),
                ...authorsList.slice(index + 1, authorsList.length),
            ]);
        };



        return (
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                        <Modal.Title>Enter Doctor Details </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-fields">
                            <label style={{color: "black"}}>Enter Doctor Name : </label>
                            <input
                                style={{border: "2px solid black"}}
                                type="text"
                                name={"name"}
                                value={authorData.name}
                                onChange={authorChange}
                                required
                            />
                        </div>
                        <div className="lable-message">
                            {authorError &&
                                authorData.name.length === 0 &&
                                (<label>Title cannot be empty</label>)
                            }
                        </div>

                        <div className="form-fields">
                            <label style={{color: "black"}}>Enter Designation : </label>
                            <input
                                style={{border: "2px solid black"}}
                                type="text"
                                name={"designation"}
                                value={authorData.designation}
                                onChange={authorChange}
                                required
                            />
                        </div>
                        <div className="lable-message">
                            {authorError &&
                                authorData.designation.length === 0 &&
                                (<label>Title can not be empty</label>)
                            }
                        </div>
                        <div className="form-fields">
                            <label style={{color: "black"}}>Enter Link to Contact : </label>
                            <input
                                style={{border: "2px solid black"}}
                                type="text"
                                name={"profileLink"}
                                value={authorData.profileLink}
                                // onClick={inputLength}
                                onChange={authorChange}
                                required
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <a style={{backgroundColor: "brown", padding: "5px 5px", cursor: "pointer", borderRadius: "5px"}}
                           onClick={handleClose}>
                            Close
                        </a>
                        <a style={{backgroundColor: "green", padding: "5px 5px", cursor: "pointer", borderRadius: "5px"}}
                           onClick={addAuthor}>Add Doctor</a>
                    </Modal.Footer>
                </Modal>
                <div className="main-form">
                    <div className={"Form-back-button"}>
                        <FontAwesomeIcon icon={faArrowLeft}
                                         size="xl"
                                         style={{color: "#ffffff",}}
                                         onClick={() => {
                                             navigate("/Dashboard")
                                         }}
                        />
                    </div>
                    <div className="form-heading">
                        <p>Publication</p>
                    </div>
                    <div className="alert-messages">
                        {/* {Error && <Error error={"form not subbmitted try again!!!"}/>} */}
                        {/* {<Loading/>} */}
                        {/* {Success && <Success success={"Details uploaded successfully"} />} */}

                    </div>

                    <div className="font-content">
                        <div className="form-left">
                            <div className="form-fields">
                                <label>Publication Title:</label>
                                <input
                                    type="text"
                                    name={"title"}
                                    value={publicationFormData.title}
                                    onChange={handlePublicationFormData}
                                    required
                                />
                            </div>
                            <div className="lable-message">
                                {error &&
                                    publicationFormData.title.length <= 0 &&
                                    (<label>Title can not be empty</label>)
                                }
                            </div>


                            <div className="form-fields">
                                <label>Publication Description:</label>
                                <textarea
                                    rows={6}
                                    required
                                    maxLength={5000}
                                    name={"description"}
                                    value={publicationFormData.description}
                                    onChange={handlePublicationFormData}
                                />
                            </div>
                            <div className="lable-message">
                                {error &&
                                    publicationFormData.description <= 0 &&
                                    (<label>Description can not be empty</label>)
                                }
                                <span id="count_message">{count}/5000</span>
                            </div>


                            <div className="form-fields">
                                <label>Upload Image:</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={imageRef}
                                    onChange={(e) => {
                                        setUploadImage(e.target.files[0]);
                                    }}
                                    required
                                />
                            </div>
                            <div className="lable-message">
                                {error &&
                                    uploadImage.name === 0 &&
                                    (<lable>
                                        Image cannot be empty
                                    </lable>)
                                }

                            </div>
                        </div>
                        <div className="form-right">
                            <div className="form-fields">
                                <label>Enter the publication link:</label>
                                <input
                                    type="text"
                                    name={"refernceLink"}
                                    value={publicationFormData.refernceLink}
                                    onChange={handlePublicationFormData}
                                    required
                                />
                            </div>
                            <div className="lable-message">
                                {error &&
                                    publicationFormData.refernceLink <= 0 &&
                                    (<lable>
                                        Publication Link cannot be empty
                                    </lable>)
                                }

                            </div>

                            <div className="list-arrays">
                                <div className="array-box">
                                    {
                                        authorsList.length > 0 &&
                                        (authorsList.map((val, index) => {
                                                return (
                                                    <>
                                                        <div className="added-array" key={index}>
                                                            <p>{val.name}</p>
                                                            <img
                                                                src={cancel}
                                                                alt="width"
                                                                height={"25px"}
                                                                width="25px"
                                                                onClick={() => removeAuthor(index)}
                                                            />
                                                        </div>
                                                    </>
                                                );
                                            })
                                        )}
                                </div>
                            </div>

                            <div className="form-fields">
                                <label>Author Details:</label>
                                <div className="input-container">
                                    <button onClick={handleShow}>Add</button>
                                </div>
                            </div>
                            <div className="lable-message">
                                {error && authorsList.length <= 0 ?
                                    <lable>
                                        Author name can not be empty
                                    </lable> : ""}

                            </div>

                            <div className="form-button">
                                <button
                                    className="formSubmit"
                                    onClick={handleSubmit}
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
;

export default FormPage;
