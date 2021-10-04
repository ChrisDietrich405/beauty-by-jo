import { useState } from "react"

import "../styles/components/tab.scss"

export default function Tab() {

    const [currentService, setCurrentService] = useState(0)

    const services = [
        {
            name: "Eyelash tinting",
            image: "/images/slideshow1.jpg"
        },
        {
            name: "Eyelash waxing",
            image: "/images/slideshow2.jpg"
        },
        {
            name: "Eyebrow cleaning",
            image: "/images/slideshow3.jpg"
        },
    ]


    return (
        <div className="tab-container">
            <ul>
            {services.map((service, index) =>     
               <li><button onClick={() => setCurrentService(index)}>{service.name}</button></li>
               )}
            </ul>
            <div className="selected-content">
                <div className="selected-content-image">
                    <img src={services[currentService].image} alt="services image" />
                </div>
                <div className="selected-content-text">
                    <h4>{services[currentService].name}</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus hic, culpa porro autem, modi, sed inventore commodi officiis nulla ab adipisci quibusdam?</p>
                    
                </div>
                
            </div>
        </div>
        

    )
}