import React from 'react';
import "../../Styles/Alert/error.css";

 function Error(props) {
    return (
        <>
            <div>
                <div className="alert " role="alert">
                   <h2>
                       {props.error}
                   </h2>
                </div>
            </div>
        </>
    );
}

export default Error;