import React, { useState } from 'react';
import './Gallery.css';
import Images from '../../Images';
import { SRLWrapper } from 'simple-react-lightbox';

export default function Gallery() {

    const [selectedImg, setSelectedImg] = useState(Images[0]);

    return (
     <SRLWrapper>
        <div className='galleryInner'>
           
           
           <div className='galleryContainer'>
                <img src={selectedImg} alt="Selected" className='selected'/>
            </div>
            <div className='myGalleryContainer'>
                {Images.map((img, index) => (
                    <img style={{border: selectedImg === img ? ' 1px solid black' : ''}} key={index} src={img} alt="img" onClick={() => setSelectedImg(img)} />
                ))}
            </div>
             
        </div>
         </SRLWrapper>
    )
}

