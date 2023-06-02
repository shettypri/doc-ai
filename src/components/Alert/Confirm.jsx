import React from 'react'
import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const Confirm = (props) => {
const [confirm, setconfirm] = useState(true)


  return (
    <>
    {
        confirm&&
        <div className="confirm-message" role='alert'>
            <h4> {props.Confirm}</h4>

            <section>
                   <FontAwesomeIcon className="xmark" id="closemark" icon={faXmark} size="xl" style={{color: "#ffffff",}}
                    onClick={()=>
                        setconfirm(false)}
                    />
                    </section>
        </div>
    }
    
    
    </>
   
  )
}

export default Confirm