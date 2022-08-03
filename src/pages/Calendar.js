import { useState } from "react"
import { Link } from "react-router-dom"
import DatePicker from 'react-date-picker'

import "../components/SignIn"

import "../styles/pages/calendar.scss"

export default function Calendar() {

    const [isTimeVisible, setIsTimeVisible] = useState(false)
    const [service, setService] = useState(null)
    const [value, onChange] = useState(new Date())
    const [serviceArray, setServiceArray] = useState([
        {
            name: "Eyebrow",
            hidden: false,
            id: 1
        }, 
        {
            name: "Waxing",
            hidden: false,
            id: 2
        }, 
      
        {
            name: "Lashes",
            hidden: false,
            id: 4
        }, 
        {
            name: "Skin Treatments",
            hidden: false,
            id: 5
        }, 
    ])

    const timeArray = ["1:00", "3:00", "5:00", "7:00", "9:00", "11:00"]

    const selectService = (selectedService) => {
        if (service === null) {  //the initial value of the service is null meaning nothing has been clicked
            //next a service gets clicked and we run the following code 
            const serviceArrayCopy = serviceArray.map(serviceItem => { 
            if(serviceItem.id === selectedService.id) {  //the selectedService here represents what the user clicks
                return {...selectedService, hidden: false} 
            }  
            return {...serviceItem, hidden: true}   //else statement //if the user doesn't click on an item it's hidden
            })
            setServiceArray(serviceArrayCopy);
            setService(selectedService)  //WHAT IS THIS FOR? //this resets the ability of the clicked item to toggle back 
            //to showing the whole list 
        } else {
            const serviceArrayCopy = serviceArray.map(service => ({...service, hidden: false})); //WHAT IS THIS FOR?
            setServiceArray(serviceArrayCopy);  //when you click a second time on a service it will show all the services 
            setService(null)
        }
    }


    return (
        <div className="calendar">
            <div className="wizard">
                <div className="header" style={service ? { height: "150vh" }: { height: "220vh"}}>
                    <ul className="links-container">
                        <li className="choose-appt">Choose appointment</li>
                        <li className="customer-info">Customer info</li>
                        <li className="confirmation">Confirmation</li>
                    </ul>
                    <div className="login">
                        <p>Returning?</p>
                        <Link to="/signin" className="">
                        <span className="">Sign in</span></Link> 
                    </div>
                    <div className="services">
                        <p>Choose a category....</p>
                        <ul className="services-container">
                            {serviceArray.map(service => (  //service here refers to the service on the next line
                                service.hidden === false && <li key={service.id} onClick={() => selectService(service)}>{service.name}</li>
                            ))}                       
                        </ul>
                    </div>
                    <div className="appointment-container">
                        <h4>Choose a day and time that works for you.</h4>
                        <div className="date-picker-container">
                            <div className="date-container">
                                <DatePicker
                                    onChange={() => setIsTimeVisible(true)}
                                    value={value}
                                />
                            </div>
                            <div className="time-container">
                                {isTimeVisible ? 
                                    timeArray.map(hour => (
                                        <div className="time-content">
                                            {hour}
                                        </div>
                                    ))
                                
                                : null }
                            </div>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
    )
}