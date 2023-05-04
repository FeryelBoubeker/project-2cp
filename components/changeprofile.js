import React from "react";
import {IoIosArrowUp} from 'react-icons/io'
import { useState } from "react";
import {MdKeyboardArrowDown} from 'react-icons/md'
import {MdCloudUpload, MdDelete} from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'




const Changeprofilepic = ()=>{
    const [clickOnarrow, setClickOnarrow]=  useState(true);
    const ArrowHandler= ()=> {
        setClickOnarrow(!clickOnarrow);
    }
    const [image, setImage]= useState(null);
    const [Filename, setFilename] = useState('No image is added');
    return(
        <div className="changeprofilepicwarper">
           {clickOnarrow ? 
           <div className="arrowandchange">
                 <div className= 'changenametext'>Change Profile picture</div>
              <div> <IoIosArrowUp onClick={ArrowHandler}></IoIosArrowUp></div>
           </div>: <>
           <div className="arrowandchange">
                    <div className= 'changenametext'>Change Profile picture</div>
                    <div style={{color:'#FF9D17', fontSize: '30px'}}> <MdKeyboardArrowDown onClick={ArrowHandler}></MdKeyboardArrowDown></div>
                </div>
              <div><form className="addpub-form" onClick={() => document.querySelector('.publication-img').click()}>
                      <input type="file"  accept="image/*"  className="publication-img" hidden
                        onChange={
                          ({target: {files}}) => {
                          
                            files[0] && setFilename(files[0].name) 
                            if(files){
                                setImage(URL.createObjectURL(files[0]))
                              }
                            }
                          }
                      >
                      
                      </input>
                      {image ? 
                          <img src={image} className="img-uploaded" alt={Filename} width={70} height={70} style={{objectFit: 'fill'}}/>
                          :
                          
                          <div style={{display : 'flex', flexDirection : " column", alignItems: 'center', justifyContent : ' center'}}>
                                <MdCloudUpload color="#FA4301" size={60} ></MdCloudUpload>
                                <div style={{color: '#FA4301'}}>Brows to uploaded</div>
                          <div/></div> 
                        
                      }
              </form>
              <div className="delete-containe" >

                <AiFillFileImage color="#FA4301" style={{marginLeft: '  10px'}}></AiFillFileImage>
                <div style={{marginRight: '30px'}}>{Filename}</div>
                <MdDelete color="#FA4301" style={{cursor : 'pointer'}}
                onClick={()=>{
                setFilename('No image added')
                setImage(null)}
                }></MdDelete>
                </div>
           </div>
           <button type="submit" className="Getstartedbtn" >Change</button>
           
           </>}
        </div>
    );
}

export default Changeprofilepic;