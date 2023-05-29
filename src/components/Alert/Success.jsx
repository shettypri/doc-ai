import React from 'react'
import "../../Styles/Alert/Success.css"

function success(props) {
  return (
    <>
    <div>
         <div className="alert-success" role="alert" >
                    <h2>
                        {props.success}
                    </h2>
                </div>
            </div>
    
    </>
   
  )
}

export default success