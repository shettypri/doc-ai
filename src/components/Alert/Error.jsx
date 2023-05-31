import React from 'react';
import "../../Styles/Alert/Error.css";

 function Error(props) {
    return (
        <>
            <div>
                <div className="alert-error " role="alert">
                   <h3>
                       {props.error}
                   </h3>
                </div>
            </div>
        </>
    );
}

export default Error;