//https://www.shebrowsandbeauty.com/

import { BrowserRouter as Browser, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import AboutUs from "./pages/AboutUs"
import Beauty from "./pages/Beauty"
import MakeUp from "./pages/MakeUp"
import Reviews from "./pages/Reviews"

import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap'  //bootstrap uses popperjs 


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
