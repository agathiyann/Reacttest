import { useState } from 'react';
import './UploadEDFs.css';
import { IoDocumentsSharp } from 'react-icons/io5';
import { MdDelete} from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

function UploadEDFs(){
    const [image, setImage] = useState (null)
const [fileName, setFileName] = useState ("No selected file")
    return(
        <main>
            <form onClick={()=> document.querySelector(".input-field").click()}
             >
                <input type="file" accept='EDF/*' className='input-field' hidden 
                onChange={({ target: {files}}) => {
                         files[0] && setFileName (files[0].name)
                              if(files) {
                             setImage (URL.createObjectURL(files[0]))
                              }
                }}
                            />
                {image ? 
                <img src={image} width={150} height ={150} alt= {fileName }/>:
                <><>
                        <IoDocumentsSharp color='#1475cf' size={60} />
                        <h1></h1>

                        <p className='brow'> Browse Files  </p>
                    </><h6>or drop files here</h6></>
}
            </form>
            <section className='deleteb'> 
            < AiFillFileImage color='#1475cf'/>
            <span>
             {fileName}
             <MdDelete onClick={()=>{setFileName("No Selected File") 
             setImage(null)
            }}
            />
            </span>
            </section>
        </main>
    )
}
export default UploadEDFs;
