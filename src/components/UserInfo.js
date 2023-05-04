
import React from "react";
import profile from '../img-and-icons/profile.svg'
import { useState } from "react";
import Intrests from "./Intrests";
import Wilaya from "./Wilaya";
 
const theintrest= ["photography", "art", "travel"]
const lesWilaya= ["mdia", "oran", "anaba"]

const UserInfo = ({name, bio, limit}) => {
   const [expanded, setexpanded]= useState(false);
   const [readMore, setreadMore]= useState(true);

   const isexpanded = () => {
        setexpanded(!expanded)
   }
   const readMoreLess = ()=>{
        setreadMore(!readMore);
   }
 
    return(
        <>
          <div className="userinfo" >
             <div className="info"> 
                <div className="name">{name}</div>
                <div className="bio">{bio.length > limit ? (
                      <div>
                        {expanded ? (
                          <div className="biotext">{bio}<button className="readbtn" onClick={isexpanded}>Read Less</button></div>
                        ) : (
                          <div className="biotext">
                            {bio.slice(0, limit)}
                            ...<button className="readbtn" onClick={isexpanded}>Read More</button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>{bio}</div>
                    )}
                  </div> 
                <div className="itrests">
                   <Intrests theintrest={theintrest[0]}/>
                   <Intrests theintrest={theintrest[1]}/>
                   <Intrests theintrest={theintrest[2]}/>
                   <Intrests theintrest={theintrest[2]}/>
                   <Intrests theintrest={theintrest[2]}/>
                   <Intrests theintrest={theintrest[2]}/>
                   <Intrests theintrest={theintrest[2]}/>
                   <Intrests theintrest={theintrest[2]}/>
                   <Intrests theintrest={theintrest[2]}/>
                   <Intrests theintrest={theintrest[2]}/>

          
                </div> 
                <div className="Wilaya">
                   <Wilaya oneWilaya={lesWilaya[0]}/>
                   <Wilaya oneWilaya={lesWilaya[1]}/>
                   <Wilaya oneWilaya={lesWilaya[2]}/>
              
                </div>
             </div>
            <img src={profile} alt="jhvuyu" className="profile"></img>

          </div>
        </>
    );
}
export default UserInfo;