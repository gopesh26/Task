
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import LogIn from "./components/LogIn";
import AboutUs from "./components/AboutUs";
  
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home someProps={{ id: 54545454 }} />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/log-in">
          <LogIn />
        </Route>
      </Switch>
    </div>
  );
}
