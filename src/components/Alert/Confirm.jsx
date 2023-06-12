import React from 'react'
import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import "../../Styles/Alert/Confirm.css"

function Confirm(props) {
const [confirm, setConfirm] = useState(true)


  return (
    <>
    {confirm &&(
        <div className="confirm-message" role='alert'>
            <h2> {props.confirm}</h2>
          <section>
            <div className={"confirm-btn"}>
              <button>
                ok
              </button>
              <button>
                cancel
              </button>
            </div>
          </section>




          {/*<section>*/}
          {/*         <FontAwesomeIcon className="xmark" id="closemark" icon={faXmark} size="xl" style={{color: "#ffffff"}}*/}
          {/*          onClick={()=>*/}
          {/*              setConfirm(false)}*/}
          {/*          />*/}
            {/*</section>*/}
        </div>
        )}
    
    
    </>
   
  )
}

export default Confirm;