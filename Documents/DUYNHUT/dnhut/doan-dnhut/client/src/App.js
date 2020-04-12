import React,{useState} from "react";
import Home from "./containers/Home";
import "./App.css";
import Header from "./components/General/Header";
import Nav from "./components/General/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./fonts/Fondamento-Regular.ttf";
import About from "./containers/About";
import signUp from "./containers/signUp";
import Footer from "./components/General/footer";
import Policy from "./containers/Policy";
import Forgot_pass from "./containers/ForgetPass";

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path ="/Policy" component={Policy}/>
          <Route path="/About" exact component={About} />
          <Route path="/SignUp" exact component={signUp} /> 
          <Route path="/ForgetPass" exact component={Forgot_pass} /> 
      </Switch>
          <Footer />
    </div>
  </Router>
  );
}

export default App;
