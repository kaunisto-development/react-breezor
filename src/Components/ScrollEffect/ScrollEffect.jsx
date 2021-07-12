import React, { useState, useEffect } from "react";

function ScrollEffect() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)

            if (offset >= 80) {
                console.log(element)
                    
            } else {
              
                console.log(element)
            }
        

    }}
    , [])
    console.log(offset);
    return (
        <>

        </>
    )
};

export default ScrollEffect;