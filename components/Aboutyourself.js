import React from "react";
import {IoIosArrowUp} from 'react-icons/io'
import { useState } from "react";
import {MdKeyboardArrowDown} from 'react-icons/md'
import {FaCheck} from 'react-icons/fa'



const AboutYourSelf = ()=>{
    const [clickOnarrow, setClickOnarrow]=  useState(true);
    const ArrowHandler= ()=> {
        setClickOnarrow(!clickOnarrow);
    }
    const [bio, setbio]= useState('');

    const BioHandler= (e)=> {
        setbio(e.target.value);
     }
    return(
        <div className="UpdatePlaces">
            {clickOnarrow ? 
            <div className="arrowandchange">
                 <div className= 'changenametext'>About yourself</div>
              <div> <IoIosArrowUp onClick={ArrowHandler}></IoIosArrowUp></div>
           </div>:<>
           <div className="arrowandchange">
                 <div className= 'changenametext'>About yourself</div>
              <div style={{color:'#FF9D17', fontSize: '30px'}}> <MdKeyboardArrowDown onClick={ArrowHandler}></MdKeyboardArrowDown></div>
           </div>
           <div className="wilayainput">
                 
                 <form  className="addwilayafome">
                 <textarea className="changetextarea"
                 type="text"
                    required
                    name="changeName"
                    value={bio}
                    onChange={BioHandler}
                 ></textarea>
                 <button type="submit" className="addwilayabtn"><FaCheck/></button>
                 </form>
               </div>
            </>}
        </div>
    );
}

export default AboutYourSelf;