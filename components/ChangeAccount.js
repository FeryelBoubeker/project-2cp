import react from "react"
import {RiArrowRightSLine} from "react-icons/ri"
import {Link } from "react-router-dom"
import { useState } from "react"




const ChangeAccount = () =>{
    const [clickOnarrow, setClickOnarrow]=  useState(true);
    const ArrowHandler= ()=> {
        setClickOnarrow(!clickOnarrow);
    }
        return(
            <div className="changeaccount">
                
                <Link to="/login">
                    <div className="switchaccount">
                          <div className="switch" >Switch accounts</div>
                           <div className="switchaccoutnicon">
                           <RiArrowRightSLine></RiArrowRightSLine>
                        </div>
                    </div>
                </Link>
            </div>
        );
}


export default ChangeAccount;