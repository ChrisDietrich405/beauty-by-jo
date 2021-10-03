//switch navbar and service calender
//https://www.shebrowsandbeauty.com/
//https://artofallurement.com/
//instead of calendar it should schedule an appointment
//https://booksy.com/en-us/s/hair-braids?availableFor=2021-09-22Tmorning
//the user needs to fill out the three inputs (category, date, time) and then they will
//be taken to the specific category page
//to the right of the three inputs there will be a search button that directs them to the specific page
//when the user chooses the date they will be directed to the time 

import { useState } from "react"
import { BrowserRouter as Browser, Switch, Route } from "react-router-dom"
import {Helmet} from "react-helmet";


import Home from "./pages/Home"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import SignIn from "./components/SignIn"
import CreateAccount from "./components/CreateAccount"
import AboutUs from "./pages/AboutUs"
import Beauty from "./pages/Beauty"
import MakeUp from "./pages/MakeUp"
import Vagacial from "./pages/Vagacial"
import SkinCare from "./pages/SkinCare"
import Reviews from "./pages/Reviews"
import Policies from "./pages/Policies"
import AppointmentCalendar from "./pages/AppointmentCalendar"

import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap'  //bootstrap uses popperjs 

import "./styles/global.scss"


function App() {

 

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Beauty By Jo</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Browser>
        <Header/>
        <NavBar/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/about-us"  component={AboutUs}/>
          <Route path="/beauty" component={Beauty}/>
          <Route path="/make-up" component={MakeUp}/>
          <Route path="/vagacial" component={Vagacial}/>
          <Route path="/skin-care" component={SkinCare}/>
          <Route path="/reviews" component={Reviews}/>
          <Route path="/policies" component={Policies}/>
          <Route path="/calendar" component={AppointmentCalendar}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/create-account" component={CreateAccount}/>
        </Switch>
      </Browser> 
      <Footer/>    
    </div>
  );
}

export default App;
