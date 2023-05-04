import React from "react";
import {IoIosArrowUp} from 'react-icons/io'
import { useState } from "react";
import {MdKeyboardArrowDown} from 'react-icons/md'
import {FaCheck} from 'react-icons/fa'




const NameChanger = ()=>{
    const [clickOnarrow, setClickOnarrow]=  useState(true);
    const ArrowHandler= ()=> {
        setClickOnarrow(!clickOnarrow);
    }

    const [changeName, setchangename]= useState('');

    const ChngeNameHandler= (e)=> {
        setchangename(e.target.value);
     }

    return(
        <div className="namechangewrapper">
             { clickOnarrow ?
              <div className="arrowandchange">
              <div className= 'changenametext'>Change Profile Name</div>
              <div> <IoIosArrowUp onClick={ArrowHandler}></IoIosArrowUp></div>
              </div>

            : <>
              <div className="arrowandchange">
                <div className= 'changenametext'>Change Profile Name</div>
                <div style={{color:'#FF9D17', fontSize: '30px'}}> <MdKeyboardArrowDown onClick={ArrowHandler} ></MdKeyboardArrowDown></div>
               </div>
               <div className="nameinput">
                 <div className="newprofiletext">New Profile Name :</div>
                 <form  className="changenamefome">
                 <input className="changeinput"
                 type="text"
                    required
                    name="changeName"
                    value={changeName}
                    onChange={ChngeNameHandler}
                 ></input>
                 <button type="submit" className="changenamebtn"><FaCheck/></button>
                 </form>
               </div>
               
            </>}

        </div>
    );
}


export default NameChanger;