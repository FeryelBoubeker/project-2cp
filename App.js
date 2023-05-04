
import './App.css';
import ProfileLeftBar from './components/ProfileLeftBar';
import UserInfo from './components/UserInfo';
import ProfileNavbar from './components/ProfileNavbar';
import HomePage from './components/HomePage'
import Picture from './components/Picture';
import picture1 from './img-and-icons/publication1.webp'
import picture2 from './img-and-icons/picture2.png'
import SavedCard from './Savedcard'
import cardimg1 from "./img-and-icons/cardimg1.png"
import ChangeAccount from './components/ChangeAccount';
import Publication from './components/publication';
import NameChanger from './components/NameChager'
import Changeprofilepic from './components/changeprofile'
import UpdatePlaces from './components/Placesvisitedupdate'
import AboutYourSelf from './components/Aboutyourself'
import ChangePasseWord from './components/ChangePassword'
import UpdateHobies from './components/hobies';
import OthersProfile from './components/OthersProfiles';


import {FaBell}  from 'react-icons/fa'
import {IoIosArrowBack} from 'react-icons/io'
import {HiViewList} from'react-icons/hi'
import {RxCross2} from 'react-icons/rx'
import {IoIosArrowDown} from 'react-icons/io'
import {IoIosArrowUp} from 'react-icons/io'

import { useState } from "react";
import profile from './img-and-icons/profile.svg'
import AddPublication from './components/addpublication'




import { Link, Routes, Route } from 'react-router-dom';


 /* this variables will be taken from the backend specificly the inputs of each user*/
 const name = "Boubeker feryel"; 
 const bio = "I have no special talent. I am only passionately curious. – Albert Einstein hfhg I have no special talent. I am only passionately curious. – Albert Einstein hfhgI have no special talent. I am only passionately curious. – Albert Einstein hfhgI have no special talent. I am only passionately curious. – Albert Einstein hfhg"; 
 const picture = [<img  src={picture1} className="picture" alt= "hgchjvfyjvt" ></img>, <img src={picture2} className='picture' alt= "hgc"></img>]

 /*classeName of the img has to be picture*/
 const cards = [
  {
    id: 1,
    placeName: "Ben Chicao", 
    location: "Mdeia",
    SavedCardimgurl: {picture1}

  }
 ]


function App() {
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
  return (
    < >
    
      <Routes>

        <Route path='/' element={<HomePage className="homepage"/>}></Route>
        
        <Route path = "/user" element= {
        <>
          
          <div className='profilepage'>  
              
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
          </div> 
          
        </>
      }/>
        <Route path='/user/saveliste' element={
          <div className='savelistpage'>
            <ProfileNavbar name={name}/>
            <div className='savelist'>
              <ProfileLeftBar className="ProfileLeftBar"/>
              <div className='cardcontainer'>
               <SavedCard  placeName={cards[0].placeName} location={cards[0].location} SavedCardimgurl={cards[0].SavedCardimgurl}/>
               <SavedCard  placeName={cards[0].placeName} location={cards[0].location} SavedCardimgurl={cards[0].SavedCardimgurl}/>
               <SavedCard  placeName={cards[0].placeName} location={cards[0].location} SavedCardimgurl={cards[0].SavedCardimgurl}/>
               <SavedCard  placeName={cards[0].placeName} location={cards[0].location} SavedCardimgurl={cards[0].SavedCardimgurl}/>
               <SavedCard  placeName={cards[0].placeName} location={cards[0].location} SavedCardimgurl={cards[0].SavedCardimgurl}/>
               <SavedCard  placeName={cards[0].placeName} location={cards[0].location} SavedCardimgurl={cards[0].SavedCardimgurl}/>
               <SavedCard  placeName={cards[0].placeName} location={cards[0].location} SavedCardimgurl={cards[0].SavedCardimgurl}/>
               <SavedCard  placeName={cards[0].placeName} location={cards[0].location} SavedCardimgurl={cards[0].SavedCardimgurl}/>
               <SavedCard  placeName={cards[0].placeName} location={cards[0].location} SavedCardimgurl={cards[0].SavedCardimgurl}/>
               <SavedCard  placeName={cards[0].placeName} location={cards[0].location} SavedCardimgurl={cards[0].SavedCardimgurl}/>
               <SavedCard  placeName={cards[0].placeName} location={cards[0].location} SavedCardimgurl={cards[0].SavedCardimgurl}/>

              </div>
              
            </div>
          </div>

        }></Route>

        <Route path='/user/setings' element={
          <div className='setingspage'>
            <ProfileNavbar name={name} />
            <div className='setingsandleftbar'>
              <ProfileLeftBar className="ProfileLeftBar" ></ProfileLeftBar>
              <div className='allthesetings'>
                <NameChanger></NameChanger>
                <Changeprofilepic></Changeprofilepic>
                <UpdatePlaces></UpdatePlaces>
                <AboutYourSelf></AboutYourSelf>
                <ChangePasseWord></ChangePasseWord>
                <UpdateHobies></UpdateHobies>
                
              </div>
            </div>
          </div>
        }></Route>
       


       <Route  path='/user/AddPublication'   element={
               <div className='addpub-page' >
                <ProfileNavbar name={name} />
                <div className='addpub-and-leftbar'>
                    <ProfileLeftBar className="ProfileLeftBar" ></ProfileLeftBar>
                    <AddPublication></AddPublication>
                </div>
                </div>
       }></Route>
           
             <Route path='/OtherUser'  element={
                  <OthersProfile></OthersProfile>
             }
             
             ></Route>

           


      </Routes>
   



      
      
          
      
      </>
  );
}

export default App;
