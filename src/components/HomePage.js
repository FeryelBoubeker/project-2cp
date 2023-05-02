import React from "react";
import './HomePage.css'
import blobe2 from '../img-and-icons/blobe2.svg'
import blobe1 from '../img-and-icons/blobe1.svg'
import homepicture from '../img-and-icons/homepicture.svg'
import test from '../img-and-icons/test2.jpg'
import servecies from '../img-and-icons/services.svg'
import algeriamap from '../img-and-icons/algeriamap.svg'
import { useState } from "react";
import {Link as RouterLink} from "react-router-dom"



import {Link} from 'react-scroll'
import {MdLocationOn, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {RiArrowRightSLine} from "react-icons/ri"


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HomePage = () => {
  const [username, setUsername]= useState("");
  const [useremail, setUseremail]= useState("");
   const EmailHandler= (e)=> {
      setUseremail(e.target.value);
   }
   const NameHandler= (e)=> {
    setUsername(e.target.value);
 }
 const [userfeedback, setUserfeedback]= useState("");
   const FeedbackHandler= (e)=> {
      setUserfeedback(e.target.value);
   }
    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1
        }
      };
    return(
        <>
           <div classeName='thenav'>nav bar</div>
           <div className='homeflex'>
              
              <div className='homeflex1'>
                    <div className='discover'>
                    <div className='asikel'>
                        Assikel
                    </div>
                    <div className='discovertext'>
                        Discover the beauty of underated places in algeria
                    </div>
                    <button className='Getstartedbtn'><Link  to="bestplaces" spy={true} smooth={true} offset={600} duration={700}><div className="getstqrtedtext">Get Started</div></Link></button>
                    </div>
             </div>
              <div className='alltheglobs'>
                  <div className="blobe"><img src={blobe2} classeName='blobe' atr='vhv' style={{width: "550px", height: '530px', position: "relative", right: "70px", top: "80px"}}></img></div>
                  <div className="blobe"><img src={blobe1} classeName='blobe' atr='vhv' style={{width: "550px", height: '530px', position: "relative", right: "70px", top: "80px"}}></img></div>
                  
                  <div className="blobe"><img src={homepicture} classeName='blobe'atr='vhv'style={{ rotate: "195deg", position: "relative", top: "100px", width: "500px", height: '460px'}}></img></div>
                

                </div>
                
            </div>
            <div className="bestplaces">
                <div className="lin1"></div>
                <div className="thetextbestplaces">Best places to visit</div>
                <div className="lin1"></div>


            </div>
            <Carousel responsive={responsive} showDots={true} draggable={true} className="carasoul" id="bestplaces">
            
            <div className="slisingimgcontainer">
              <img src={test} className="slidinigimg" style={{ width : "285px", height: "285px", objectFit: "cover" }}/>
              <div className="locationandqndseemore">
                <div className="theplacename">Theplace name</div>
            
                <div className="location"><MdLocationOn />Locationnnnnnnnnnn</div>
                <Link classeName='seemore' to='/distination/1' style={{textDecoration: "none", color: "white", color: "#FA4301" , cursor:"pointer"}}>See More<RiArrowRightSLine className="arrow"></RiArrowRightSLine></Link>
              </div>
             
             </div>

             <div className="slisingimgcontainer">
              <img src={test} className="slidinigimg" style={{ width : "285px", height: "285px", objectFit: "cover" }}/>
              <div className="locationandqndseemore">
                <div className="theplacename">Theplace name</div>
            
                <div className="location"><MdLocationOn />Locationnnnnnnnnnn</div>
                <Link classeName='seemore' to='/distination/1' style={{textDecoration: "none", color: "white", color: "#FA4301" , cursor:"pointer"}}>See More<RiArrowRightSLine className="arrow"></RiArrowRightSLine></Link>
              </div>
             
             </div>
             <div className="slisingimgcontainer">
              <img src={test} className="slidinigimg" style={{ width : "285px", height: "285px", objectFit: "cover" }}/>
              <div className="locationandqndseemore">
                <div className="theplacename">Theplace name</div>
            
                <div className="location"><MdLocationOn />Locationnnnnnnnnnn</div>
                <Link classeName='seemore' to='/distination/1' style={{textDecoration: "none", color: "white", color: "#FA4301", cursor:"pointer" }}>See More<RiArrowRightSLine className="arrow"></RiArrowRightSLine></Link>
              </div>
             
             </div>
             <div className="slisingimgcontainer">
              <img src={test} className="slidinigimg" style={{ width : "285px", height: "285px", objectFit: "cover" }}/>
              <div className="locationandqndseemore">
                <div className="theplacename">Theplace name</div>
            
                <div className="location"><MdLocationOn />Locationnnnnnnnnnn</div>
                <Link classeName='seemore' to='/distination/1' style={{textDecoration: "none", color: "white", color: "#FA4301", cursor:"pointer" }}>See More<RiArrowRightSLine className="arrow"></RiArrowRightSLine></Link>
              </div>
             
             </div>
             <div className="slisingimgcontainer">
              <img src={test} className="slidinigimg" style={{ width : "285px", height: "285px", objectFit: "cover" }}/>
              <div className="locationandqndseemore">
                <div className="theplacename">Theplace name</div>
            
                <div className="location"><MdLocationOn />Locationnnnnnnnnnn</div>
                <Link classeName='seemore' to='/distination/1' style={{textDecoration: "none", color: "white", color: "#FA4301" , cursor:"pointer"}}>See More<RiArrowRightSLine className="arrow"></RiArrowRightSLine></Link>
              </div>
             
             </div>
             <div className="slisingimgcontainer">
              <img src={test} className="slidinigimg" style={{ width : "285px", height: "285px", objectFit: "cover" }}/>
              <div className="locationandqndseemore">
                <div className="theplacename">Theplace name</div>
            
                <div className="location"><MdLocationOn />Locationnnnnnnnnnn</div>
                <Link classeName='seemore' to='/distination/1' style={{textDecoration: "none", color: "white", color: "#FA4301" , cursor:"pointer"}}>See More<RiArrowRightSLine className="arrow"></RiArrowRightSLine></Link>
              </div>
             
             </div>
            
            </Carousel>


           <div className="circle">
           
           </div>


           <div className="theservecies">
              <div className="service-wraper" >
                <img src={servecies} className = 'serviceimg' id='serviceimg1'alt="ser" style={{position : "relative" , bottom: "70px", right: "40%"}} ></img>
                <RouterLink to= "/SearchBar" className="random-place-to-go" style={{zIndex: "3", position: "absolute",  top: "0px", right: "65%", fontSize: "35px" , cursor: "pointer", textDecoration: " none", color: "black"}}>Random Place To Go</RouterLink>
                </div>
               <div className="service-wraper">
                <img src={servecies} className = 'serviceimg' id='serviceimg2' alt="ser" style={{position : "relative" , top: "20px", right: "10%"}} ></img>
                <RouterLink to = "/SearchBar"className="Search-for-destination"style={{zIndex: "3", position: "absolute",  top: "100px", left: "10%", fontSize: "35px", cursor: "pointer", textDecoration: " none", color: "black"}}>Search For Destination</RouterLink >
                </div>
                <div classeName="service-wraper">
                  <img src={servecies} className = 'serviceimg ' id='serviceimg3' alt="ser"style={{position : "relative" , top: "20px", left: "10%"}} ></img>
                  <RouterLink to = "/SearchBar" className="add-publication-servive"style={{zIndex: "3", position: "absolute",  bottom: "220px", left: "52%", fontSize: "35px", cursor: "pointer", textDecoration: " none", color: "black"}}>Add Publication</RouterLink >
                </div>
               
                <div className="service-wraper">
                    <img src={servecies} className = 'serviceimg ' id='serviceimg1'alt="ser" style={{position : "relative" , bottom: "70px", left: "40%"}}></img>
                    <RouterLink to = "/AddDistination" className="add-destination-service"style={{zIndex: "3", position: "absolute",  top: "20px", left: "65%", fontSize: "35px", cursor: "pointer", textDecoration: " none", color: "black"}}>
                      Add Destination
                    </RouterLink >
                </div>
           </div>
            <div className="knowmore">
                <div className="lin1"></div>
                <div className="thetextbestplaces">Know More About Us</div>
                <div className="lin1"></div>


            </div>
            <div className="aboutus">
              <div className="aboutustext">
                <span > About Us</span><br></br>
               <p className="aboutus-para">Have you ever wondered about going on vacation in Algeria but did not know the perfect place to choose? Our team composed of six people passionate in traveling and discovering got you.
                  We dive deep with our recommendations to suit every taste.
                  In our website, you will find the best destinations with a collection of photographs and reviews from our dear subscribers. You can also share your own pictures and opinion on your profile to help others and give them more inspiration.
                  To love is to share, so take advantage of our offer and dig with us to find picturesque and unique places. 
               </p>
                </div>

               <img src={algeriamap} className='algeria-pic'alt="algeria map" style={{width: "600px", height: "600px"}}></img>
          
            </div>
           <form className="feedbackform">
           <div className="feedback-text">Enter Your Feedback Here :</div>
           <div className="name-and-email">

              <input className='feedbackInput'type="text"
              name="name"
                value={username} 
                onChange={NameHandler} 
                placeholder="Name"
                required
                ></input>
              <input type="email" className='feedbackInput'
              name="email"
              value={useremail} 
              onChange={EmailHandler}
              placeholder="Email"
              required
              ></input>

            </div>
              <textarea className="feedtextarea"
              value={userfeedback}
               name="feedback" 
               placeholder="Feedback" 
               onChange={FeedbackHandler}
               required
               ></textarea>

             <button className="submit" type="submit">Subscribe</button>
           </form>
           
            

           
                    
        </>
    );
}


export default HomePage;