import React from "react";
import {MdCloudUpload, MdDelete} from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'

import { useState } from "react";

const AddPublication= ()=> {

    const [image, setImage]= useState(null);
    const [Filename, setFilename] = useState('No image is added');
    const [adddiscription, setDiscription]= useState('');

    const DscriptionHandler= (e)=> {
        setDiscription(e.target.value);
     }
    return(
         <div className="addpub-container">
            <div className="add-pub-text" >Add Publication</div>
            <div className='add-pub-flex' style={{display: 'flex', justifyContent: 'space-around'}}>
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
            <div className="add-dis-contan">
              <div className="add-dis-text">Add discription : </div>
              <textarea className="add-dis-textarea"
                  type="text"
                      
                      name="discription"
                      value={adddiscription}
                      onChange={DscriptionHandler}
                  ></textarea>
                  <br></br>
                <button type="submit" className="Post" >Post</button>
            </div>
            </div>     
         </div>
    );
}



export default AddPublication;