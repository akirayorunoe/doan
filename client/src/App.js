import React,{useEffect, lazy, Suspense} from "react";
import "./App.css";
//import Nav from "./components/General/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./fonts/Roboto-Regular.ttf";
// import About from "./containers/About";
// import Home from "./containers/Home";
// import signUp from "./containers/signUp";
// import Policy from "./containers/Policy";
// import Forgot_pass from "./containers/ForgetPass";
// import ChangePass from './containers/ChangePass'
// import Products from "./containers/Product";
// import ProductInfo from "./components/Product/ProductInfo";
//import Cart from "./components/General/Cart";
// import SearchPage from "./containers/SearchPage";
// import UserPage from "./containers/UserPage";
import {useDispatch} from 'react-redux';
import {usrLogin} from './action/user-login'
import axios from 'axios';
import MessengerCustomerChat from 'react-messenger-customer-chat';
const Header = lazy(() => import('./components/General/Header'));
const Footer = lazy(() => import('./components/General/footer'));

const Nav = lazy(() => import('./components/General/Nav'));
const About = lazy(() => import('./containers/About'));
const Home = lazy(() => import('./containers/Home'));
const signUp = lazy(() => import('./containers/signUp'));
const Policy = lazy(() => import('./containers/Policy'));
const Forgot_pass = lazy(() => import('./containers/ForgetPass'));
const ChangePass = lazy(() => import('./containers/ChangePass'));
const Products = lazy(() => import('./containers/Product'));
const ProductInfo = lazy(() => import("./components/Product/ProductInfo"));
const Cart = lazy(() => import('./components/General/Cart'));
const SearchPage = lazy(() => import("./containers/SearchPage"));
const UserPage = lazy(() => import("./containers/UserPage"));
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
      <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
      <Header/>
      <Nav />
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
      <div>
      <MessengerCustomerChat
        pageId="100367225056687"
        appId="183057163147995"
      />
      </div>
      <Footer />
    </div>
    </Suspense>
  </Router>
  );
}

export default App;
