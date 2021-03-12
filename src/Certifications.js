import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Certifications(){
    return(
        <div className="row justify-content-end">
            <div className="col-12 col-md-8">
                <h3>Certifications:</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Microsoft Azure Fundamentals AZ-900</th>
                        </tr>
                        <tr>
                            <th>Introduction to FinTech</th>
                        </tr>    
                    </thead>    
                </table>
            </div>
        </div>    
    )

}
export default Certifications;