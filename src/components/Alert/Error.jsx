import React, { useState } from 'react';
import "../../Styles/Alert/Error.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'



 function Error(props) {
    const [errorShow, seterrorShow] = useState(true)
    return (
        <>{

        errorShow &&
            <div>
                <div className="alert-error " role="alert">
                   <h3>
                       {props.error}
                   </h3>
                   <section>
                   <FontAwesomeIcon className="xmark" id="closemark" icon={faXmark} size="xl" style={{color: "#ffffff",}}
                    onClick={()=>
                        seterrorShow(false)}
                    />
                    </section>
                   
                </div>
                
            </div>
        }
        </>
    );
}

export default Error;