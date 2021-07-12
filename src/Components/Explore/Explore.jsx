import React from 'react';
import Gallery from './Gallery/Gallery';
import SimpleReactLightbox from 'simple-react-lightbox';
import './Explore.css';


const Explore = () => {
    return (
        <div className='exploreInner'>
            <div>
                <SimpleReactLightbox>
                    <Gallery />
                </SimpleReactLightbox>
            </div>
            <div className='galleryDesc'>
                <div>Обзор тура:</div>
                <p>Среди сыроваров есть тенденция, что они не хотят делиться своими секретами и рецептами. Говорят, что это очень сложное дело...что нужно ехать в Европу или идти в подмастерье к настоящему сыровару на несколько лет, да и то не факт, что тебе раскроют все секреты. Но это не так!</p>
            </div>
        </div>
    )
}

export default Explore;
