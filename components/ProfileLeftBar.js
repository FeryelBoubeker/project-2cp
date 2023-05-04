import React from "react";
import logo from '../img-and-icons/logo.svg'
import { AiOutlineUnorderedList, AiFillSetting } from 'react-icons/ai'
import { GoHeart } from 'react-icons/go'
import { BsFillSave2Fill } from 'react-icons/bs'
import { BiAddToQueue } from 'react-icons/bi'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { Link } from "react-router-dom";



 



const ProfileLeftBar = ({className}) =>{

    return(
        <>

       <div className={className}>
             
          <div className="list logo"><img src={logo}></img></div>
          <Link to="/user" className="list listing-page">
            <AiOutlineUnorderedList/> Listing Page </Link>
          <Link to="/user/saveliste" className="list Saved"><BsFillSave2Fill/> Saved</Link> 
          <Link to="/user/setings" className="list Setings"><AiFillSetting/> Setings</Link>
          <div className="list line"></div>
          <Link to="/user/AddPublication" className="list Add-Publication"><BiAddToQueue/> Add Publication</Link>
          <div className="list line"></div>
          < Link to="/user/login" className="list Logout"><RiLogoutBoxLine/> Logout</Link>

        </div>

       </>
     
    );
}
export default ProfileLeftBar;