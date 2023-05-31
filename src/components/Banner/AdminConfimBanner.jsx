import React from 'react'
import "../../Styles/Banner/AdminConfirmBanner.css"
import { useState } from 'react';

const AdminConfimBanner = () => {
    const [banerShow, setBanerShow] = useState(true)
    
  return (
    <>
    {
        banerShow &&
        <div className="Adminbanner-details">
            <h4>
                Please wait for admin to accept request
            
            </h4>


        </div>
    }
</>
    
  );
};

export default AdminConfimBanner;