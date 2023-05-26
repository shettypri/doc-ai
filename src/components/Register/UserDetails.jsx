import React from 'react'
import "../../Styles/Register/UserDetails.css"
const UserDetails = () => {
    return (
        <>
            <div className="containerus">
                <div className="titleus">Register</div><br />
                <form action="#">
                    <div className="user-detailsus">
                        <div className="input-boxus">
                            <span className="detailsus">First Name</span>
                            <input type="text" placeholder="Enter First Name" required />
                        </div>
                        <div className="input-boxus">
                            <span className="detailsus">Last Name</span>
                            <input type="text" placeholder="Enter Last Name" required />
                        </div>
                        <div className="input-boxus">
                            <span className="detailsus">DOB</span>
                            <input type="date" placeholder="Enter Date of Birth" required />
                        </div>
                        <div className="input-boxus">
                            <span className="detailsus">Email</span>
                            <input type="text" placeholder="Enter Email" required />
                        </div>
                        <div className="input-boxus">
                            <span className="detailsus">Phone No</span>
                            <input type="text" placeholder="Enter Phone number" maxLength={10} required />
                        </div>
                        <div className="input-boxus">
                            <span className="detailsus">Address</span>
                            <textarea type="text" placeholder="Enter Address" required style={{ width: '300px', height: '70px' }} defaultValue={""} />
                        </div>
                        <div className="input-boxus">
                            <span className="detailsus">City</span>
                            <input type="text" placeholder="Enter City" required />
                        </div>
                        <div className="input-boxus">
                            <span className="detailsus">Pincode</span>
                            <input type="text" placeholder="Enter Pincode" required />
                        </div>
                        <div className="input-boxus">
                            <span className="detailsus">Specialization</span>
                            {/* <input type="text" placeholder="Enter  Specialization" required /> */}
                            <select name="specialization" id="specialization">
                                <option value="" defaultChecked>Select Specialization</option>
                                <option value="Other">Other</option>
                                <option value="Allergists/Immunologists">Allergists/Immunologists</option>
                                <option value="Anesthesiologists">Anesthesiologists</option>
                                <option value="Cardiologists">Cardiologists</option>
                                <option value="Colon and Rectal Surgeons">Colon and Rectal Surgeons</option>
                                <option value="Critical Care Medicine Specialists">Critical Care Medicine Specialists</option>
                                <option value="Dermatologists">Dermatologists</option>
                                <option value="Endocrinologists">Endocrinologists</option>
                                <option value="Emergency Medicine Specialists">Emergency Medicine Specialists</option>
                                <option value="Family Physicians">Family Physicians</option>
                                <option value="Gastroenterologists">Gastroenterologists</option>
                                <option value="Geriatric Medicine Specialists">Geriatric Medicine Specialists</option>
                                <option value="Hematologists">Hematologists</option>
                                <option value="Hospice and Palliative Medicine Specialists">Hospice and Palliative Medicine Specialists</option>
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
                        <div className="input-boxus">
                            <span className="detailsus">Doctor ID</span>
                            <input type="text" placeholder="Enter Doctor ID" required />
                        </div>
                        <div className="imagepreviewus">
                            <input type="file" name="image" id="actual-btn" accept=".png,.jpeg,.jpg" hidden />
                            <label className='lbl' htmlFor="actual-btn">Choose File</label>
                            <span id="file-chosen">No file chosen</span>
                            {/* <input type="submit" value="Upload"> */}
                        </div>
                        <div className="buttonus">
                            <input type="submit" defaultValue="Register" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UserDetails