import { useState, useEffect } from "react"
import { FaQuoteLeft } from "react-icons/fa";

import "../styles/components/tab.scss"

export default function Tab() {

    const [currentService, setCurrentService] = useState(0)

    const services = [
        {
            name: "Maria",
            image: "/images/slideshow1.jpg"
        },
        {
            name: "Nia",
            image: "/images/slideshow2.jpg"
        },
        {
            name: "Hailey",
            image: "/images/slideshow3.jpg"
        },
    ]

    useEffect(() => {
        setTimeout(() => {
            
            if(currentService == services.length - 1) {
                setCurrentService(0)
            } else {
                setCurrentService(currentService + 1)
            } 
        }, 5000)
    }, [currentService])

    // const handleButtonClick = () => {
    //     setCurrentService(2)
    // }

    return (
        <div className="tab-container">
            <ul>
            {services.map((service, index) =>     
            //    <li><button onClick={handleButtonClick}>{service.name}</button></li>
                  <li><button onClick={() => setCurrentService(index)}>{service.name}</button></li>
               )}
            </ul>
            <div className="selected-content">
                <div className="selected-content-image">
                    <img src={services[currentService].image} alt="services image" />
                </div>
                <div className="selected-content-text">
                    <div className="selected-content-quote">
                        <FaQuoteLeft/><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus hic, culpa porro autem, modi, sed inventore commodi officiis nulla ab adipisci quibusdam?</p>              
                    </div>
                    <h4>{services[currentService].name}</h4>
                </div>
                
            </div>
        </div>
        

    )
}