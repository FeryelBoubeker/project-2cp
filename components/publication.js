import React from "react";
import {BsFillHeartFill} from "react-icons/bs"
import { useState } from "react";
import {RxCross1} from "react-icons/rx"




const Publication = (props) => {
    const [likes, setLikes]= useState(0);
    const [onelike, setOnelike]= useState(false);
    const[heartclassname, setHeartclassename]= useState("whiteheart");


    const DeleteImage = ()=> {
      var image = document.getElementById(props.idimg);
      image.remove();
    }

    const Editcaption =()=>{
      
    }


    const LikeHandler= ()=>{

        if(!onelike){
            setLikes(likes+ 1);
            setOnelike(true)
            setHeartclassename('redheart');
        }
        else{
          setLikes(likes-1)
          setOnelike(false)
          setHeartclassename('whiteheart');

        }
    }
  return props.clickedonimg ? (
    <div className="publicationcomponent">
        <div className="publicationcontainer">
            <div className="clossing"onClick={() => props.setClickonimg(false)}><RxCross1></RxCross1></div>
            <div className="publicationimg">{props.image}</div>
            <div className="likesandcaption">
               <div className="thelikes">
                <div >
                    <BsFillHeartFill onClick={LikeHandler} className={heartclassname}>
                        </BsFillHeartFill>
                </div>
                <div className="likes">{likes}</div>
              </div> 
              <div className="caption">{props.caption}</div>
            </div>
            <div >
              <button onClick={DeleteImage}>delete image</button>
              <button onClick={Editcaption}>edit caption</button>
            </div>
        </div>
    </div>
  ) : (
    <></>
  );
};

export default Publication;