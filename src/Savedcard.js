import React from "react";
import {MdLocationPin} from 'react-icons/md'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-router-dom'
import cardimg1 from "./img-and-icons/publication1.webp"



const SavedCard=({SavedCardimgurl, placeName, location})=>{
    return(
        <> 
            <div className="card">
                <img src={cardimg1} alt="SavedCardimg" className="savingcardimage"></img>
                <div className="carddiscription">
                    <div className="placename">{placeName}</div>
                    <div className="locationqndseemore">
                        <div className="location"><MdLocationPin/>{location}</div>
                        <Link to='/distination/:id' className="seemoresavingcard">
                            See more<MdKeyboardArrowRight/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SavedCard;
