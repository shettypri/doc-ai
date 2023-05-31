import React from 'react'
import "../../Styles/Banner/AdminConfirmBanner.css"
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

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


         <section>
         <FontAwesomeIcon className="xmark"icon={faXmark} size="xl" style={{color: "#ffffff",}}
                    onClick={()=>
                      setBanerShow(false)}
                      />  
         </section>
                      </div>
    }
</>
    
  );
};

export default AdminConfimBanner;