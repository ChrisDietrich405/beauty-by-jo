import { BrowserRouter as Browser, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
ffffff;

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "react-datetime/css/react-datetime.css";

import createStore from "./store";

import Home from "./pages/Home";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";
import AboutUs from "./pages/AboutUs";
import Beauty from "./pages/Beauty";
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
            <NavBar />
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/beauty" component={Beauty} />
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
            </Switch>
            <Footer />
          </Browser>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
