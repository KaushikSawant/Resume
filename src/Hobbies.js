import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {FcSportsMode} from "react-icons/fc"
function Hobbies(){
    return(
        <div className="row justify-content-end">
            <div className="col-12 col-md-8 card bgProject">
                <div>
                    <h3>Interests:</h3>
                    <p><FcSportsMode size="2em"/>I love playing Football and Basketball.</p>
                </div>
            </div> 
        </div>    
    )

}

export default Hobbies;