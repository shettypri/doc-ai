// import React from 'react'
import "../../Styles/admin/Dashboard/Dashboard.css"
import { Link } from 'react-router-dom'
import publication from "../../assets/Admin/Dash-board/publication.jpg"

const Dashboard = () => {

  return (
    <>
      <div className="dash-board">
        <div className="card-dash">
          <Link to='/Dashboard/Form'> 
          <img src={publication} alt="" height={'200px'} width="200px" /> 
          </Link>
        </div>
        <div className="card-dash">

        </div>
        <div className="card-dash">

        </div>
      </div>

    </>
  )
}

export default Dashboard