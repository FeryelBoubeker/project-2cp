import React from "react";
import profile from '../img-and-icons/profile.svg'
import { useState } from "react";
import {HiViewList} from 'react-icons/hi'
import {FaBell} from 'react-icons/fa'
import{IoIosArrowUp, IoIosArrowDown, IoIosArrowBack} from 'react-icons/io'

import ChangeAccount from  './ChangeAccount'
import picture1 from '../img-and-icons/publication1.webp'
import { Link, Routes, Route } from 'react-router-dom';
import Publication from "./publication";
import ProfileLeftBar from './ProfileLeftBar'
import UserInfo from './UserInfo'
import {RxCross2}  from 'react-icons/rx'




const name = "Boubeker feryel"; 
const bio = "I have no special talent. I am only passionately curious. – Albert Einstein hfhg I have no special talent. I am only passionately curious. – Albert Einstein hfhgI have no special talent. I am only passionately curious. – Albert Einstein hfhgI have no special talent. I am only passionately curious. – Albert Einstein hfhg"; 




const SelfProfile = ()=> {
  const [clickOnlist, setClickOnlist]= useState(true);
  const [clickonimg, setClickonimg] = useState(false);
  const ClickonimgHandler = () =>{
    setClickonimg(!clickonimg);
  }

  const clickList = ()=>{
      setClickOnlist(!clickOnlist)
  }

  const [clickOnarrow, setClickOnarrow]= useState(false);
  
  const clickArrow = ()=>{
      setClickOnarrow(!clickOnarrow)
  }
    return(
        <> <div className='profilepage'>  
              
        {clickOnlist ? <>
            <div className="ProfileNavbar">
              <div className="phone-responsive-icon" onClick={clickList}>
                <HiViewList className="res-icon"/>
              </div>
              <div className="right-nav">
                <div className="bell">
                  <FaBell/>
                </div>
                <div className="profile-button">
                  <img src={profile}/>
                  <div className="name-name">
                    {name.substring(0,2)}..
                  </div>
                  <div className="arrows" onClick={clickArrow}>
                    {clickOnarrow ? <><IoIosArrowUp/> <ChangeAccount/></>: <IoIosArrowDown/> }
                  </div> 
                    
                </div>
                <Link to="/" className="back"><IoIosArrowBack className="Thearrow"/>Back</Link>
              </div>
              


            </div>   
          <Publication clickedonimg={clickonimg} 
              image={<img  src={picture1} className="picture" alt= "hgchjvfyjvt" ></img>}
              caption={<>bla bla bla bala bla bla bala bla bala bala bala aba </>}
              setClickonimg= {setClickonimg}
              idimg='img'
           ></Publication>
          
        <div className='flex'>
            <ProfileLeftBar className="ProfileLeftBar"/> 
            <div className='secondflex'>
              <UserInfo name={name} bio={bio} limit={160}/>
              <div className='pictures'>
              <img  src={picture1} className="picture" alt= "hgchjvfyjvt" onClick={ClickonimgHandler} id='img'></img>
              <img  src={picture1} className='picture' alt= "hgc"  onClick={ClickonimgHandler} id='img'></img>
              <img  src={picture1} className='picture' alt= "hgc"  onClick={ClickonimgHandler} id='img'></img>
              <img  src={picture1} className='picture' alt= "hgc"  onClick={ClickonimgHandler} id='img'></img>
              <img  src={picture1} className='picture' alt= "hgc"  onClick={ClickonimgHandler} id='img'></img>

              </div>
            </div>
        </div>
        </>
        : <>< div className="flexresponsiveleftbar"><RxCross2 className="res-icon" onClick={clickList}/><ProfileLeftBar className="responsiveleftbar"/></ div></>
}
  </div> </>
    )
    ;
}


export default SelfProfile;
