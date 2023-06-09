import React, { useState } from 'react'
import "../../Styles/Register/UserDetails.css"
import { uploadImgToStore } from './docCRUD'
import { useDispatch, useSelector } from 'react-redux'
import { dataUploadFireBaseReducers, imageUploadReducers } from "../../App/Slice/registerSlice.js";
import { auth } from "../../config/firebase-config.js";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
    const dispatch = useDispatch()

    const { id } = useSelector(
        state => state.userReducer
    )
    const [docImage, setDocImage] = useState("")
    const [doctorDetails, setDoctorDetails] = useState({
        "id": `${id}`,
        "firstName": "",
        "lastName": "",
        "dateOfBirth": "",
        "email": "",
        "phoneNumber": sessionStorage.getItem("mobileNumber"),
        "address": "",
        "city": "",
        "pincode": "",
        "Specialization": "",
        "doctorId": "",
        isFormFilled: true,
        isAdmin: false,
        isDocAuthorized: false,
        isDocShow: true,
    })


    const doctorValue = (e) => {
        setDoctorDetails({
            ...doctorDetails, [e.target.name]: e.target.value
        })
    }
    const { isImageUploaded, imageError, imageUrl, isDataUploaded, resultInsert } = useSelector(
        state => state.registerReducer
    )

    const handleDetails = async (e) => {
        e.preventDefault();
        dispatch(imageUploadReducers(docImage))
    }

    const storeDataIntoFireStore = () => {
        doctorDetails['imageUrl'] = imageUrl
        console.log(doctorDetails)
        dispatch(dataUploadFireBaseReducers(doctorDetails))
    }
    const navigate = useNavigate()
    if (isDataUploaded) {
        navigate("/")
    }
    if (isImageUploaded) {
        storeDataIntoFireStore()
    }



    return (
        <>
            <div className="containerus">
                <div className="titleus">Register</div>
                <br />
                <form action="#">
                    <div className="user-detailsus">
                        <div className="input-boxus">
                            <span className="detailsus">Full Name</span>
                            <input type="text"
                                name='FullName'
                                onChange={doctorValue}
                                placeholder="Enter Full Name" required />
                        </div>



                        {/* <div className="input-boxus">
                            <span className="detailsus">DOB</span>
                            <input type="date"
                                name='dateOfBirth'
                                onChange={doctorValue}
                                placeholder="Enter Date of Birth"
                                required />
                        </div> */}

                        <div className="input-boxus">
                            <span className="detailsus">Email</span>
                            <input type="text"
                                name='email'
                                onChange={doctorValue}
                                placeholder="Enter Email"
                                required />
                        </div>

                        <div className="input-boxus">
                            <span className="detailsus">Phone No</span>
                            <input type="text"
                                name='phoneNumber'
                                onChange={doctorValue}
                                placeholder="Enter Phone number"
                                maxLength={10}
                                value={doctorDetails.phoneNumber}
                                disabled={true}
                                required />
                        </div>
                        <div className="input-boxus">
                            <span className="detailsus">Hospital</span>
                            <input type="text"
                                placeholder="Enter Hospital"
                                name='hospital'
                                onChange={doctorValue}
                                required />
                        </div>
                        {/* <div className="input-boxus">
                            <span className="detailsus">Address</span>
                            <textarea type="text"
                                      placeholder="Enter Address"
                                      required style={{width: '300px', height: '70px'}}
                                      name={"address"}
                                      onChange={doctorValue}
                            />
                        </div> */}
                        <div className="input-boxus">
                            <span className="detailsus">City</span>
                            <input type="text"
                                name='city'
                                onChange={doctorValue}
                                placeholder="Enter City" required />
                        </div>

                        {/* <div className="input-boxus">
                            <span className="detailsus">Pincode</span>
                            <input type="text"
                                   name='pincode'
                                   onChange={doctorValue}
                                   placeholder="Enter Pincode" required/>
                        </div> */}

                        <div className="input-boxus">
                            <span className="detailsus">Specialization</span>
                            {/* <input type="text" placeholder="Enter  Specialization" required /> */}
                            <select className='dropdwn'
                                name="Specialization"
                                onChange={doctorValue}
                                id="specialization"
                            >
                                <option value="" defaultChecked>Select Specialization</option>
                                <option value="Other">Other</option>
                                <option value="Allergists/Immunologists">Allergists/Immunologists</option>
                                <option value="Anesthesiologists">Anesthesiologists</option>
                                <option value="Cardiologists">Cardiologists</option>
                                <option value="Colon and Rectal Surgeons">Colon and Rectal Surgeons</option>
                                <option value="Critical Care Medicine Specialists">Critical Care Medicine Specialists
                                </option>
                                <option value="Dermatologists">Dermatologists</option>
                                <option value="Endocrinologists">Endocrinologists</option>
                                <option value="Emergency Medicine Specialists">Emergency Medicine Specialists</option>
                                <option value="Family Physicians">Family Physicians</option>
                                <option value="Gastroenterologists">Gastroenterologists</option>
                                <option value="Geriatric Medicine Specialists">Geriatric Medicine Specialists</option>
                                <option value="Hematologists">Hematologists</option>
                                <option value="Hospice and Palliative Medicine Specialists">Hospice and Palliative
                                    Medicine Specialists
                                </option>
                                <option value="Infectious Disease Specialists">Infectious Disease Specialists</option>
                                <option value="Internists">Internists</option>
                                <option value="Medical Geneticists">Medical Geneticists</option>
                                <option value="Nephrologists">Nephrologists</option>
                                <option value="Neurologists">Neurologists</option>
                                <option value="Obstetricians and Gynecologists">Obstetricians and Gynecologists</option>
                                <option value="Oncologists">Oncologists</option>
                                <option value="Ophthalmologists">Ophthalmologists</option>
                                <option value="Osteopaths">Osteopaths</option>
                                <option value="Otolaryngologists">Otolaryngologists</option>
                                <option value="Pathologists">Pathologists</option>
                                <option value="Pediatricians">Pediatricians</option>
                                <option value="Physiatrists">Physiatrists</option>
                                <option value="Plastic Surgeons">Plastic Surgeons</option>
                                <option value="Podiatrists">Podiatrists</option>
                                <option value="Preventive Medicine Specialists">Preventive Medicine Specialists</option>
                                <option value="Psychiatrists">Psychiatrists</option>
                                <option value="Pulmonologists">Pulmonologists</option>
                                <option value="Radiologists">Radiologists</option>
                                <option value="Rheumatologists">Rheumatologists</option>
                                <option value="Sleep Medicine Specialists">Sleep Medicine Specialists</option>
                                <option value="Sports Medicine Specialists">Sports Medicine Specialists</option>
                                <option value="General Surgeons">General Surgeons</option>
                                <option value="Urologists">Urologists</option>
                            </select>
                        </div>

                        {/* <div className="input-boxus">
                            <span className="detailsus">Doctor ID</span>
                            <input type="text"
                                   onChange={doctorValue}
                                   name='doctorId'
                                   placeholder="Enter Doctor ID" required/>
                        </div> */}
                        {/* <div className="imagepreviewus">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    setDocImage(e.target.files[0])
                                }
                                }
                                id="actual-btn" hidden/>
                            <label className='lbl' htmlFor="actual-btn">

                                Choose File
                            </label>

                            <span id="file-chosen">
                                &nbsp;&nbsp;
                                    No file chosen
                            </span>
                        </div> */}
                        <div className="buttonus">
                            <input type="submit"
                                value={"Submit"}
                                onClick={handleDetails} />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UserDetails