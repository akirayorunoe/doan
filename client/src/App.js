import React,{useEffect, lazy, Suspense} from "react";
import "./App.css";
import Nav from "./components/General/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./fonts/Roboto-Regular.ttf";
import About from "./containers/About";
import Home from "./containers/Home";
import signUp from "./containers/signUp";
import Policy from "./containers/Policy";
import Forgot_pass from "./containers/ForgetPass";
import ChangePass from './containers/ChangePass'
import Products from "./containers/Product";
import ProductInfo from "./components/Product/ProductInfo";
import Cart from "./components/General/Cart";
import SearchPage from "./containers/SearchPage";
import {useDispatch} from 'react-redux';
import {usrLogin} from './action/user-login'
import axios from 'axios';
import UserPage from "./containers/UserPage";
import MessengerCustomerChat from 'react-messenger-customer-chat';
const Header = lazy(() => import('./components/General/Header'));
const Footer = lazy(() => import('./components/General/footer'));
function App() {
  const dispatch=useDispatch();
  useEffect( ()=>{
    const token = localStorage.getItem('auth-token')
    if(token)
    {async function fetchUser()
    {
    //console.log('token',token)
    await axios.get('http://localhost:3030/login',{headers:{"auth-token":token}}).then((data)=>{
        return dispatch(usrLogin(data.data))})}
fetchUser();}
}
  ,[]);
  return (
    <Router>
      <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
      <Header/>
      </Suspense>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path ="/Policy" component={Policy}/>
          <Route path="/About" exact component={About} />
          <Route path="/SignUp" exact component={signUp} /> 
          <Route path="/ForgetPass" exact component={Forgot_pass} />
          <Route path="/Products" exact component={Products}/>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/Products/:id" component={ProductInfo}/>
          <Route path="/Search" component={SearchPage}/>
          <Route path="/User" component={UserPage}/>
          <Route path="/ChangePass" component={ChangePass}/>
      </Switch>
      </Suspense>      
      <div>
      <MessengerCustomerChat
        pageId="100367225056687"
        appId="183057163147995"
      />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
      <Footer />
      </Suspense>
    </div>
  </Router>
  );
}

export default App;
