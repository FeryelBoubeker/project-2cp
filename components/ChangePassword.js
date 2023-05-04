import React from "react";
import {IoIosArrowUp} from 'react-icons/io'
import { useState } from "react";
import {MdKeyboardArrowDown} from 'react-icons/md'
import {FaCheck} from 'react-icons/fa'



const ChangePasseWord = ()=>{
    const [clickOnarrow, setClickOnarrow]=  useState(true);
    const ArrowHandler= ()=> {
        setClickOnarrow(!clickOnarrow);
    }
    const [oldPasse, setpldpass]= useState('');

    const OldpassHandler= (e)=> {
        setpldpass(e.target.value);
     }

     const [ChangePasse, setchangepass]= useState('');

    const ChangepassHandler= (e)=> {
        setchangepass(e.target.value);
     }

     const [confirmPasse, setcomfirmpass]= useState('');

    const ConfirmpassHandler= (e)=> {
        setcomfirmpass(e.target.value);
     }
    return(
        <div className="UpdatePlaces">
            {clickOnarrow ? 
            <div className="arrowandchange">
                 <div className= 'changenametext'>Change your password </div>
              <div> <IoIosArrowUp onClick={ArrowHandler}></IoIosArrowUp></div>
           </div>:<>
           <div className="arrowandchange">
                 <div className= 'changenametext'>Change your password :  </div>
              <div style={{color:'#FF9D17', fontSize: '30px'}}> <MdKeyboardArrowDown onClick={ArrowHandler}></MdKeyboardArrowDown></div>
           </div>
           <form  className="oldpassfome">

                <div className="passinput">
                     <div className="oldpassatext">Old password :</div>
                   <input className="changeinput"
                        type="password"
                            required
                            name="oldPasse"
                            value={oldPasse}
                            onChange={OldpassHandler}
                        ></input>
                   
                </div>
                <div className="passinput">
                     <div className="oldpassatext">New password :</div>
                   <input className="changeinput"
                        type="password"
                            required
                            name="ChangePasse"
                            value={ChangePasse}
                            onChange={ChangepassHandler}
                        ></input>
                   
                </div>

                <div className="passinput">
                     <div className="oldpassatext">Confirm password :</div>
                   <input className="changeinput"
                        type="password"
                            required
                            name="confirmPasse"
                            value={confirmPasse}
                            onChange={ConfirmpassHandler}
                        ></input>
                   <button type="submit" className="addwilayabtn"><FaCheck/></button>
                </div>
                
            </form>
            </>}
        </div>
    );
}

export default ChangePasseWord;