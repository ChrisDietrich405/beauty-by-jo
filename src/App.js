import { BrowserRouter as Browser, Switch, Route } from "react-router-dom";
// import { Helmet } from "react-helmet";
import {Helmet, HelmetProvider} from "react-helmet-async"

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

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
import Facials from "./pages/Facials";
import Testimonials from "./pages/Testimonials";
import Policies from "./pages/Policies";
import Contact from "./pages/Contact";

import ResetPassword from "./pages/ResetPassword";
import Navbar2 from "./components/Navbar2";

import "@popperjs/core";
import "bootstrap/dist/js/bootstrap";

import "./styles/global.scss";
import "react-datetime/css/react-datetime.css";

const { store, persistor } = createStore();

function App() {
  return (
    <HelmetProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Beauty By Jo</title>
          </Helmet>
          <Browser>
            <Header />
            <Navbar2 />
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/make-up" component={MakeUp} />
              <Route path="/lashes" component={Lashes} />
              <Route path="/waxing" component={Waxing} />
              <Route path="/eyebrow" component={Eyebrow} />
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

    </HelmetProvider>
  );
}

export default App;
