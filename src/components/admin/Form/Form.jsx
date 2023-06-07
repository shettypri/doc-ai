import React from "react";
import { useRef, useState } from "react";
import "../../../Styles/admin/Form/Form.css";
import cancel from "../../../assets/Admin/Dash-board/close.png";
import ImageUpload from "./ImageUpload";
import storeInDataBase from "./storeInDataBase";
import Error from "../../Alert/Error";
import Alert from 'react-bootstrap/Alert';
import Loading from "../../Alert/Loading";
import Success from "../../Alert/Success";
import { Form, useNavigate } from "react-router-dom";
import success from "../../Alert/Success";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const FormPage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [uploadImage, setUploadImage] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [key_benefits, setkey_benefits] = useState("");
    const [uploadPdf, setuploadPdf] = useState("");

    const [authorsList, setAuthorsList] = useState([]);
    const [publicationUrl, setPublicationUrl] = useState([]);

    const [error, setError] = useState(false);
    const [count, setCount] = React.useState(0);

    const folderImage = "Publications/image";
    const folderPdf = "Publications/pdf";


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            title.length == 0 ||
            description.length == 0 ||
            authorsList.length == 0 || publicationUrl.length == 0

        ) {
            setError(true);
            console.log("clicked error");
        } else {
            console.log("else part");
            const fileName = imageRef.current.files[0].name;
            const isImageUploaded = await ImageUpload(
                uploadImage,
                fileName,
                folderImage
            );

            // const pdfname = imageRef.current.files[0].name;
            // const isPdfUploaded = await ImageUpload(uploadPdf, pdfname, folderPdf);

            if (isImageUploaded) {// && isPdfUploaded) {
                console.log("DOne");

                const finalData = {
                    title: title,
                    description: description,
                    imageUrl: isImageUploaded,
                    authors: authorsList,
                    publicationUrl: publicationUrl
                };
                console.log(finalData)
                storeInDataBase(finalData, "Publications");
            }
        }
    };
    const addAuthor = () => {
        if (authorName != "") {
            setAuthorsList((oldArray) => [...oldArray, authorName]);
            setAuthorName("");
        }
    };


    const removeAuthor = (index) => {
        setAuthorsList([
            ...authorsList.slice(0, index),
            ...authorsList.slice(index + 1, authorsList.length),
        ]);
    };
    // const removeKeyBenefits = (index) => {
    //     setKeyBenefitsList([
    //         ...keyBenefitsList.slice(0, index),
    //         ...keyBenefitsList.slice(index + 1, keyBenefitsList.length),
    //     ]);
    // };

    const imageRef = useRef();
    const navigate = useNavigate()
    return (
        <>
            <div className="main-form">
                <div className={"Form-back-button"}>
                    <FontAwesomeIcon icon={faArrowLeft}
                        size="xl"
                        style={{ color: "#ffffff", }}
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
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className="lable-message">
                            {error &&
                                title.length <= 0 ?
                                <label>Title can not be empty</label> : ""}
                        </div>


                        <div className="form-fields">
                            <label>Publication Description:</label>
                            <textarea
                                rows={6}
                                required
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value),setCount(e.target.value.length);
                                }}
                            />
                        </div>
                        <div className="lable-message">
                            {error && description <= 0 ?
                                <label>Description can not be empty</label> : ""}
                        <span id="count_message">{count}/5000</span>
                        </div>
                        


                        <div className="form-fields">
                            <label>Upload Image:</label>
                            <input
                                type="file"
                                accept="image/*"
                                ref={imageRef}
                                // value={uploadImage}
                                onChange={(e) => {
                                    setUploadImage(e.target.files[0]);
                                }}
                                required
                            />
                        </div>
                        <div className="lable-message">
                            {error && uploadImage.length <= 0 ?
                                <lable>
                                    Image cannot be empty
                                </lable> : ""}

                        </div>
                    </div>
                    <div className="form-right">
                        <div className="form-fields">
                            <label>Enter the publication link:</label>
                            <input
                                type="text"
                                value={publicationUrl}
                                onChange={(e) => {
                                    setPublicationUrl(e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className="lable-message">
                            {error && publicationUrl.length <= 0 ?
                                <lable>
                                    Publication Link cannot be empty
                                </lable> : ""}

                        </div>

                        <div className="list-arrays">
                            <div className="array-box">
                                {authorsList.map((val, index) => {
                                    return (
                                        <>
                                            <div className="added-array" key={index}>
                                                <p>{val}</p>
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
                                })}
                            </div>
                        </div>

                        <div className="form-fields">
                            <label>Author Details:</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    value={authorName}
                                    // onClick={inputLength}
                                    onChange={(e) => {
                                        setAuthorName(e.target.value);
                                    }}
                                    required
                                />
                                <button onClick={addAuthor}>Add</button>
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
};

export default FormPage;
