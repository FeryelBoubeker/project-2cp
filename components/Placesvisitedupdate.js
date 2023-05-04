import React from "react";
import {IoIosArrowUp} from 'react-icons/io'
import { useState } from "react";
import {MdKeyboardArrowDown} from 'react-icons/md'
import {FaCheck} from 'react-icons/fa'



const UpdatePlaces = ()=>{
    const [clickOnarrow, setClickOnarrow]=  useState(true);
    const ArrowHandler= ()=> {
        setClickOnarrow(!clickOnarrow);
    }
    const [addWilaya, setnewwilaya]= useState('');

    const AddwilayaHandler= (e)=> {
        setnewwilaya(e.target.value);
     }
    return(
        <div className="UpdatePlaces">
            {clickOnarrow ? 
            <div className="arrowandchange">
                 <div className= 'changenametext'>Select your visited places</div>
              <div> <IoIosArrowUp onClick={ArrowHandler}></IoIosArrowUp></div>
           </div>:<>
           <div className="arrowandchange">
                 <div className= 'changenametext'>Select your visited places</div>
              <div style={{color:'#FF9D17', fontSize: '30px'}}> <MdKeyboardArrowDown onClick={ArrowHandler}></MdKeyboardArrowDown></div>
           </div>
           <div className="wilayainput">
                 <div className="newilayatext">Add a wilaya you visited :</div>
                 <form  className="addwilayafome">
                 <input className="changeinput"
                 type="text"
                    required
                    name="changeName"
                    value={addWilaya}
                    onChange={AddwilayaHandler}
                 ></input>
                 <button type="submit" className="addwilayabtn"><FaCheck/></button>
                 </form>
               </div>
            </>}
        </div>
    );
}

export default UpdatePlaces;