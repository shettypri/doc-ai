
import "../../Styles/Alert/Success.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';

function success(props) {
  const [successShow, setsuccessShow] = useState(true);
  return (
    <>
      {successShow && (
        <div>
          <div className="alert_success" role="alert">
            <h2>{props.success}</h2>
            <FontAwesomeIcon
              className="xmark"
              id="closemark"
              icon={faXmark}
              size="xl"
              style={{ color: "#ffffff" }}
              onClick={() => setsuccessShow(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default success;
