//https://www.shebrowsandbeauty.com/

import { BrowserRouter as Browser, Switch, Route } from "react-router-dom"
import {Helmet} from "react-helmet";

import Home from "./pages/Home"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import AboutUs from "./pages/AboutUs"
import Beauty from "./pages/Beauty"
import MakeUp from "./pages/MakeUp"
import Reviews from "./pages/Reviews"

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
        </Switch>
      </Browser> 
      <Footer/>    
    </div>
  );
}

export default App;
