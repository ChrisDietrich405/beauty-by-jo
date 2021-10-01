import { useState } from "react"

export default function Tab() {

    const [currentService, setCurrentService] = useState(0)

    const services = [
        {
            name: "Eyelash tinting"
        },
        {
            name: "Eyelash waxing"
        },
        {
            name: "Eyebrow cleaning"
        },
    ]


    return (
        <>
        <ul>
        {services.map((service, index) =>     
           <li><button onClick={() => setCurrentService(index)}>{service.name}</button></li>
           )}
        </ul>
        <div>
            {services[currentService].name}
        </div>
        </>

    )
}