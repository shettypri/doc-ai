// import React from 'react'
import "../../Styles/admin/Dashboard/Dashboard.css"
import { Link } from 'react-router-dom'
import publication from "../../assets/Admin/Dash-board/publication.jpg"
import research from "../../assets/Admin/Dash-board/research.jpg"
import account from "../../assets/Admin/Dash-board/account.png"

const Dashboard = () => {

  return (
    <>
      <div className="dash-board">
        <div className="card-dash">
          <div className="heading">
            Publication
          </div>
          <Link to='/Dashboard/Form'> 
          <img src={publication} alt="" height={'200px'} width="295px" /> 
          </Link>
        </div>


        <div className="card-dash">
          <div className="heading">
            Research
          </div>
          <Link to='/Dashboard/Form'>
            <img src={research} alt="" height={"200px"} width={"295"} />
          </Link>

        </div>

        <div className="card-dash">
          <div className="heading">
            Account
          </div>
          <Link to='/Account'>
          <img src={account} alt=""  height={"200px"} width={"295"}/>
          </Link>


        </div>
      </div>

    </>
  )
}

export default Dashboard