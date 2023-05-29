// import React from 'react'
import  { useState } from 'react'
import "../../../../Styles/admin/Account/Form/UpdateForm.css"
import { uploadImgToStore } from '../../../../components/Register/docCRUD.js'
import { auth } from '../../../../config/firebase-config';


const UpdateForm = () => {
    console.log(auth.uid);
    const [doctorDetails, setDoctorDetails] = useState({
        "firstName": "",
        "lastName": "",
        "dateOfBirth": "",
        "email": "",
        "phoneNumber": "",
        "address": "",
        "city": "",
        "pincode": "",
        "Specialization": "",
        "doctorId": "",
        "imageUrl": "",
        isFormFilled:true,
        isAdmin: false,
        isDocAuthorized:false
    })
    const [docImage, setDocImage] = useState("")
    
    const doctorValue = (e) => {
        setDoctorDetails({
            ...doctorDetails, [e.target.name]: e.target.value
        })
    }
    const handleDetails = async (e) => {
        e.preventDefault();
        // console.log(doctorDetails);
        try {
            // const imageUrl = await uploadImgToStore(docImage, docImage.name)
            setDoctorDetails({
                ...doctorDetails,["imageUrl"]:await uploadImgToStore(docImage, docImage.name)
            })
            console.log("After updating the values");
            console.log(doctorDetails);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
    <div className="containerus">
    <div className="titleus">update details</div><br />
    <form action="#">
        <div className="user-detailsus">
            <div className="input-boxus">
                <span className="detailsus">First Name</span>
                <input type="text"
                    name='firstName' disabled
                    onChange={doctorValue}
                    placeholder="Enter First Name" required />
            </div>

            <div className="input-boxus">
                <span className="detailsus">Last Name</span>
                <input type="text" disabled
                    placeholder="Enter Last Name"
                    name='lastName'
                    onChange={doctorValue}
                    required />
            </div>

            <div className="input-boxus">
                <span className="detailsus">DOB</span>
                <input type="date"
                    name='dateOfBirth' disabled
                    onChange={doctorValue}
                    placeholder="Enter Date of Birth" required />
            </div>

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
                    required />
            </div>
            <div className="input-boxus">
                <span className="detailsus">Address</span>
                <textarea type="text" placeholder="Enter Address" required style={{ width: '300px', height: '70px' }} defaultValue={""} />
            </div>
            <div className="input-boxus">
                <span className="detailsus">City</span>
                <input type="text"
                    name='city'
                    onChange={doctorValue}
                    placeholder="Enter City" required />
            </div>

            <div className="input-boxus">
                <span className="detailsus">Pincode</span>
                <input type="text"
                    name='pincode'
                    onChange={doctorValue}
                    placeholder="Enter Pincode" required />
            </div>

            <div className="input-boxus">
                <span className="detailsus">Specialization</span>
                <input type="text" disabled
                    name='Specialization'
                    onChange={handleDetails}
                    placeholder="Enter  Specialization" required />
            </div>

            <div className="input-boxus">
                <span className="detailsus">Doctor ID</span>
                <input type="text" disabled
                    onChange={handleDetails}
                    name='doctorId'
                    placeholder="Enter Doctor ID" required />
            </div>
            <div className="imagepreviewus">
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        setDocImage(e.target.files[0])
                    }
                    }
                    name="image"
                    id="actual-btn" hidden />
                <label className='lbl' htmlFor="actual-btn">Choose File</label>
                <span id="file-chosen">
                    No file chosen
                </span>
            </div>
            <div className="buttonus">
                <input type="submit"
                    value={"submit"}
                    onClick={handleDetails} />
            </div>
        </div>
    </form>
</div>
</>
       
   
  )
}

export default UpdateForm