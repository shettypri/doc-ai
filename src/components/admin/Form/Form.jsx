// import React from 'react'
import '../../../Styles/admin/Form/Form.css'
import { Link } from "react-router-dom"

const FormPage = () => {
  return (
    <>
   
    <div>
    <center />
    <div className="form-container main-form">
      <div>
        <h2 className="center" style={{color: 'white'}}>Publication</h2>
        <div className="form-group">
          <label htmlFor="project-title">Publication Title:</label>
          <input type="text" id="project-title" style={{width: '300px'}} name="project-title" required />
        </div>
        <div className="form-group">
          <label htmlFor="author-details">Author Details:</label>
          <div className="input-container" style={{width: '300px'}}>
            <input type="text" id="key-benefits" name="key-benefits" style={{width: '300px'}} required />
            <button style={{color: 'white'}}>Add</button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="key-benefits">Key Benefits:</label>
          <div className="input-container" style={{width: '300px'}}>
            <input type="text" id="key-benefits" name="key-benefits" style={{width: '300px'}} required />
            <button style={{color: 'white'}}>Add</button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="project-image">Upload Image:</label>
          <input type="file" id="project-image" name="project-image" accept="image/*" required />
        </div>
      </div>
      <div style={{marginTop: '65px'}}>
        <div className="form-group">
          <label htmlFor="project-description">Publication Description:</label>
          <textarea id="project-description" style={{width: '318px', borderRadius: '5px'}} name="project-description" rows={5} required defaultValue={""} />
        </div>
        <div className="form-group">
          <input type="submit" defaultValue="Submit" />
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default FormPage