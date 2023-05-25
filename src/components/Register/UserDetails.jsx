import React from 'react'
import "../../Styles/Register/UserDetails.css"
const UserDetails = () => {
    return (
        <>
            <div className="containerus">
                <div className="titleus">Registartion</div><br />
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
                            <input type="text" placeholder="Enter Date of Birth" required />
                        </div>
                        <div className="input-boxus">
                            <span className="detailsus">Email</span>
                            <input type="text" placeholder="Enter Email" required />
                        </div>
                        <div className="input-boxus">
                            <span className="detailsus">Phone No</span>
                            <input type="text" placeholder="Enter Phone number" required />
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
                            <input type="text" placeholder="Enter  Specialization" required />
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