import React from 'react';
import "../../Styles/Alert/Error.css";

 function Error(props) {
    return (
        <>
            <div>
                <div className="alert-error " role="alert">
                   <h2>
                       {props.error}
                   </h2>
                </div>
            </div>
        </>
    );
}

export default Error;