import { useState, useEffect } from "react"

import Pic1 from "../assets/images/home1.jpg"
import Pic2 from "../assets/images/home3.jpg"
import Pic3 from "../assets/images/home6.jpg"

import "../styles/components/slideshow.scss"

export default function SlideShow() {

    const [currentPicture, setCurrentPicture] = useState(0)

    const pics = [Pic1, Pic2, Pic3]

    useEffect(() => {
        const slideshow = setInterval(() => {
            if(currentPicture === pics.length - 1) {
                setCurrentPicture(0)
            } else {
                setCurrentPicture(currentPicture + 1)
            }
        }, 3000 ) 
        return () => clearInterval(slideshow)
    }, [currentPicture, pics])
    
    return (
        <div className="slideshow-container"><img src={pics[currentPicture]} alt="" /></div>
    )

}