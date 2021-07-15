import Eyebrow from "../assets/images/home2.jpg"
import { useRef, useEffect } from "react"

export default function ZoomInZoomOut() {

    const scrollTo = useRef()

    useEffect(() => {
        const eventListener = () => {
            if(window.pageYOffset >= scrollTo.current.getBoundingClientRect().y) {
                scrollTo.current.classList.add("zoom-in-out-box")
            }
            console.log(window.pageYOffset >= scrollTo.current.getBoundingClientRect().y)
        } 
        window.addEventListener("scroll", eventListener)
        return () => window.removeEventListener("scroll", eventListener)
    })
    
    return (
        
        <img ref={scrollTo} src={Eyebrow}/>
    )
}
