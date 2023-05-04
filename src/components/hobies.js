import React from "react";
import {IoIosArrowUp} from 'react-icons/io'
import { useState } from "react";
import {MdKeyboardArrowDown} from 'react-icons/md'
import {FaCheck} from 'react-icons/fa'



const UpdateHobies= ()=>{
    const [clickOnarrow, setClickOnarrow]=  useState(true);
    const ArrowHandler= ()=> {
        setClickOnarrow(!clickOnarrow);
    }
    const [addHobie, setnewHobie]= useState('');

    const HobiHandler= (e)=> {
        setnewHobie(e.target.value);
     }
    return(
        <div className="UpdateHobies">
            {clickOnarrow ? 
            <div className="arrowandchange">
                 <div className= 'changenametext'>Any Hobies</div>
              <div> <IoIosArrowUp onClick={ArrowHandler}></IoIosArrowUp></div>
           </div>:<>
           <div className="arrowandchange">
                 <div className= 'changenametext'>Any Hobies</div>
              <div style={{color:'#FF9D17', fontSize: '30px'}}> <MdKeyboardArrowDown onClick={ArrowHandler}></MdKeyboardArrowDown></div>
           </div>
           <div className="wilayainput">
                 <div className="newilayatext">Add a Hobie :</div>
                 <form  className="addwilayafome">
                 <input className="changeinput"
                 type="text"
                    required
                    name="hobie"
                    value={addHobie}
                    onChange={HobiHandler}
                 ></input>
                 <button type="submit" className="addwilayabtn"><FaCheck/></button>
                 </form>
               </div>
            </>}
        </div>
    );
}

export default UpdateHobies;