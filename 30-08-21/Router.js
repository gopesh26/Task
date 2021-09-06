import React, { Fragment } from "react";
import "./index.css"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function App() {
  const name = 'John Doe'
  return (
   <Router>
    <main>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`/about/${name}`}>About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about/:name"  component={About} />
      <Route path="/contact"  component={Contact} />
    </Switch>
    </main>
</Router>
  );
}

const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
  );

const About = ({match:{params:{name}}}) => (
  // props.match.params.name
  <Fragment>
    <h1>About {name}</h1>
    <FakeText />
  </Fragment>
);

const Contact = () => (
  <Fragment>
    <h1>Contact</h1>
    <FakeText />
  </Fragment>
  );
