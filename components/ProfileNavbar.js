import React from "react";
import {FaBell}  from 'react-icons/fa'
import {IoIosArrowBack} from 'react-icons/io'
import {HiViewList} from'react-icons/hi'
import {RxCross2} from 'react-icons/rx'
import {IoIosArrowDown} from 'react-icons/io'
import {IoIosArrowUp} from 'react-icons/io'
import { Link, useLinkClickHandler } from "react-router-dom";
import { useState } from "react";
import profile from '../img-and-icons/profile.svg'
import ProfileLeftBar from "./ProfileLeftBar";
import ChangeAccount from './ChangeAccount';


const ProfileNavbar= ({name})=> {
  const [clickOnlist, setClickOnlist]= useState(true);
  

  
    const clickList = ()=>{
        setClickOnlist(!clickOnlist)
       
    }
    const [clickOnarrow, setClickOnarrow]= useState(false);
  
    const clickArrow = ()=>{
        setClickOnarrow(!clickOnarrow)
    }
    
  
    return(
            <>
              <div className="ProfileNavbar">
                <div className="phone-responsive-icon" onClick={clickList}>
                  {clickOnlist ? <HiViewList className="res-icon"/>: < div className="flexresponsiveleftbar"><RxCross2 className="res-icon"/><ProfileLeftBar className="responsiveleftbar"/></ div>}
                </div>
                <div className="right-nav" >
                  <div className="bell">
                    <FaBell/>
                  </div>
                  <div className="profile-button">
                    <img src={profile}/>
                    <div className="name-name">
                      {name.substring(0,2)}..
                    </div>
                    <div className="arrows" onClick={clickArrow}>
                      {clickOnarrow ?  <><IoIosArrowUp/> <ChangeAccount/></>:
                      <IoIosArrowDown/> }
                    </div> 
                      
                  </div>
                  <Link to="/" className="back"><IoIosArrowBack className="Thearrow"/>Back</Link>
                </div>
                 


              </div>   
            
            </>
    );
}


export default ProfileNavbar ;



















 