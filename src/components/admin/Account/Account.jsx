import React from 'react'
import { Link } from 'react-router-dom'
import "../../../Styles/admin/Account/Account.css"

const Account = () => {
    const Accountslist = [
        {"name":"name1","designation":"designation1"},
        {"name":"name2","designation":"designation2"},
        {"name":"name3","designation":"designation3"},
        {"name":"name4","designation":"designation4"}
    ]


  return (
    <>
     { <table>
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
                        
                         <tr key={index}>
                            <td>{val.name}</td>
                            <td>{val.designation}</td>
                            </tr>
                            
                          
    
                        )
    
                    })
                }
               
                </div>
                
            </table> }
        
    
    
    </>
  )
}

export default Account