import React from "react";
import {IoIosArrowUp} from 'react-icons/io'
import { useState } from "react";
import {MdKeyboardArrowDown} from 'react-icons/md'


const Changeprofilepic = ()=>{
    const [clickOnarrow, setClickOnarrow]=  useState(true);
    const ArrowHandler= ()=> {
        setClickOnarrow(!clickOnarrow);
    }
    return(
        <div className="changeprofilepicwarper">
           {clickOnarrow ? 
           <div className="arrowandchange">
                 <div className= 'changenametext'>Change Profile picture</div>
              <div> <IoIosArrowUp onClick={ArrowHandler}></IoIosArrowUp></div>
           </div>: <>
           <div className="arrowandchange">
                 <div className= 'changenametext'>Change Profile picture</div>
              <div style={{color:'#FF9D17', fontSize: '30px'}}> <MdKeyboardArrowDown onClick={ArrowHandler}></MdKeyboardArrowDown></div>
           </div>
          
           </>}
        </div>
    );
}

export default Changeprofilepic;