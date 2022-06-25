// "react-slideshow-image": "^3.5.0",  - from package.json

// 'react-scripts' is not recognized as an internal or external command,
// operable program or batch file. I tried to install react-script, then I
// tried npm install

//services pages book button should be black, dollar and time icon should be twice the size

//create your account button
//password - user should have the ability to see the password they are typing
// and they need to type the password twice when they create a password

//MVP

//FAQ
//for any questions that only have one item don't have a bullet

import { BrowserRouter as Browser, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "react-datetime/css/react-datetime.css";

import createStore from "./store";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";
import AboutUs from "./pages/AboutUs";
import MakeUp from "./pages/MakeUp";
import Lashes from "./pages/Lashes";
import Waxing from "./pages/Waxing";
import Eyebrow from "./pages/Eyebrow";
import Vagacial from "./pages/Vagacial";
import Facials from "./pages/Facials";
import Testimonials from "./pages/Testimonials";
import Policies from "./pages/Policies";
import Contact from "./pages/Contact";

import "@popperjs/core";
import "bootstrap/dist/js/bootstrap";

import "./styles/global.scss";
import ResetPassword from "./pages/ResetPassword";
import Navbar2 from "./components/Navbar2";

const { store, persistor } = createStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Beauty By Jo</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <Browser>
            <Header />
            {/* <NavBar /> */}
            <Navbar2 />
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/make-up" component={MakeUp} />
              <Route path="/lashes" component={Lashes} />
              <Route path="/waxing" component={Waxing} />
              <Route path="/eyebrow" component={Eyebrow} />
              <Route path="/vagacial" component={Vagacial} />
              <Route path="/facials" component={Facials} />
              <Route path="/testimonials" component={Testimonials} />
              <Route path="/policies" component={Policies} />
              <Route path="/signin" component={SignIn} />
              <Route path="/create-account" component={CreateAccount} />
              <Route path="/contact" component={Contact} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/reset-password/:hash" component={ResetPassword} />
            </Switch>
            <Footer />
          </Browser>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
