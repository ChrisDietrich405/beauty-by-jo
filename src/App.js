//https://www.shebrowsandbeauty.com/
//https://artofallurement.com/

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
import Reviews from "./pages/Reviews"
import Policies from "./pages/Policies"
import Calendar from "./pages/Calendar"

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
          <Route path="/reviews" component={Reviews}/>
          <Route path="/policies" component={Policies}/>
          <Route path="/calendar" component={Calendar}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/create-account" component={CreateAccount}/>
        </Switch>
      </Browser> 
      <Footer/>    
    </div>
  );
}

export default App;
