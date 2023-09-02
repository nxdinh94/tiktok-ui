import { useState,forwardRef } from "react";
import images from "~/assets/images";

const Image = forwardRef(({src, alt,...props}, ref) => {
    const [fallback, setFallback] = useState('');
    
    const handleError = () =>{
        setFallback(images.altImage);
    }
    return ( 
        <img ref={ref} {...props } alt src={fallback || src} onError={handleError}/>
    );
})

export default Image;