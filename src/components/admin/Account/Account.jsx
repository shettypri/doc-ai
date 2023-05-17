import React from 'react'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <>
    <div className="main-dashboard">
        <div className="card1">
            <Link className='publications' to={"/src/components/admin/Form/Form.jsx"}></Link>

        </div>
        <div className="card2">
        <Link className='research' to={"/src/components/admin/Form/Form.jsx"}></Link>
        </div>
        <div className="card3">

        </div>
    </div>
    </>
  )
}

export default Account