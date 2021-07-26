import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {FaJava} from "react-icons/fa"
import {GrReactjs} from "react-icons/gr"
import {FaDatabase} from "react-icons/fa"
import {FaNodeJs} from "react-icons/fa"

function Skills(){
    return(
        <div className="row justify-content-end">
            <div className="col-12 col-md-8 bgProject">
                <h3>Technical Skills:</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th><FaJava size="1.5em"/>Java</th>
                            <th><GrReactjs size="1.5em"/>React.js</th>
                            <th>JavaScript</th>
                            <th><FaNodeJs size="1.2em"/>Nodejs</th>
                            <th><FaDatabase size="1.2em"/>MySQL</th>
                            
                            <th>CPP</th>
                        </tr>    
                    </thead>    
                </table> 
            </div>   
        </div>
    )
}

export default Skills;