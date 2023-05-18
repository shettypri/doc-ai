import React from 'react'
import { Link } from 'react-router-dom'
import "../Account/Account.css"

const Account = () => {
    const Accountslist = [
        {"name":"name","designation":"designation"},
        {"name":"role","designation":"salary"},
        {"name":"job","designation":"shift"},
        {"name":"time","designation":"shift"}
    ]


  return (
    <>
 
            <table>
                <tr>
                    <td>
                        name
                    </td>
                    <td>
                        designation
                    </td>
                </tr>
                <div className="tablelist">{
                     Accountslist.map((val,index) => {
                        return(
                        <tr>
                            <td>

                            </td>
                            <td>

                            </td>
                        </tr>
                          
    
                        )
    
                    })
                }
               
                </div>
                
            </table>
        
    
    
    </>
  )
}

export default Account