import React from "react";


import ProfileNavbar from "./ProfileNavbar";
import picture1 from '../img-and-icons/publication1.webp'
import { useState } from "react";



import UserInfo from "./UserInfo";


const name = 'Yacin CheurfiBelhadj';
const bio = ' i am yacin i love traveling in algeria it has a lot of beautiful yet underated places, i am looking forward to visit as many as i can '

const OthersProfile = ()=> {
  const [clickonimg, setClickonimg] = useState(false);
  const ClickonimgHandler = () =>{
    setClickonimg(!clickonimg);
  }

    return(
        <div className="profilepage">
            <ProfileNavbar name={name}></ProfileNavbar>
            <div className="secondflex-forothers-profiles">
                    <div className="secondflex-wraper">
                        <UserInfo name={name} bio={bio} limit={160}></UserInfo>
                        <div className="pictures">
                        <img  src={picture1} className="picture" alt= "hgchjvfyjvt" onClick={ClickonimgHandler} id='img'></img>
                            <img  src={picture1} className='picture' alt= "hgc"  onClick={ClickonimgHandler} id='img'></img>
                            <img  src={picture1} className='picture' alt= "hgc"  onClick={ClickonimgHandler} id='img'></img>
                            <img  src={picture1} className='picture' alt= "hgc"  onClick={ClickonimgHandler} id='img'></img>
                            <img  src={picture1} className='picture' alt= "hgc"  onClick={ClickonimgHandler} id='img'></img>
                        </div>

                    </div>
            </div>
        </div>
    );
}


export default OthersProfile; 