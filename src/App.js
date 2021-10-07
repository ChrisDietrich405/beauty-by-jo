//schedule appointment button- modal for service. after user clicks on service there
// is a modal for the date. after user clicks on the date there is a modal for possible times
//make sure to include a back and forward button for each modal 
//after user picks time it directs you to page with confirmation of appointment, policies
//for unavailable times, dates have a color like gray to demonstrate that it's disabled 




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
import Lashes from "./pages/Lashes"
import Waxing from "./pages/Waxing"
import Eyebrow from "./pages/Eyebrow"
import Vagacial from "./pages/Vagacial"
import Facials from "./pages/Facials"
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
          <Route path="/lashes" component={Lashes}/>
          <Route path="/waxing" component={Waxing}/>
          <Route path="/eyebrow" component={Eyebrow}/>
          <Route path="/vagacial" component={Vagacial}/>
          <Route path="/facials" component={Facials}/>
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
