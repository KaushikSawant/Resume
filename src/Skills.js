import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Skills(){
    return(
        <div className="row justify-content-end">
            <div className="col-12 col-md-8">
                <h3>Technical Skills:</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Java</th>
                            <th>Javascript</th>
                            <th>React.js</th>
                            <th>MySQL</th>
                            <th>Cpp</th>
                            <th>Nodejs</th>
                        </tr>    
                    </thead>    
                </table> 
            </div>   
        </div>
    )
}

export default Skills;