import React from "react";
import "../../styles/components/General/Nav.css";
import { NavLink } from "react-router-dom";
// import Button from './Button';
import cart from "../../assets/cardIcon/cart.png";
// import Cart from '../General/Cart';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  // const [appear,setAppear]=useState(false)
  const styles = {
    borderRadius: 10,
    backgroundColor: "#00DD75",
  };
  //https://stackoverflow.com/questions/47879663/root-navlink-always-get-active-class-react-router-dom
  const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if (!location) return false;
    const { pathname } = location;
    // console.log(pathname);
    return pathname === "/";
  };

  return (
    <nav className="nav-bar navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <FontAwesomeIcon icon={faBars} />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav">
          <NavLink to="/" isActive={checkActive} activeStyle={styles}>
            <li className="nav-item">Home</li>
          </NavLink>
          <NavLink to="/Products" activeStyle={styles}>
            <li className="nav-item">Our product</li>
          </NavLink>
          <NavLink to="/Policy" activeStyle={styles}>
            <li className="nav-item">Policy</li>
          </NavLink>
          <NavLink to="/About" activeStyle={styles}>
            <li className="nav-item">About us</li>
          </NavLink>
        </ul>
      </div>

      <div id="searchBar">
        <input type="search" id="searchInput"></input>
      </div>
      {/* <div className="img-container"><img src={cart} onClick={()=>{setAppear(!appear)}} alt="cart"></img></div>
            {appear&&<Cart/>} */}
      <Link to="/cart">
        <i className="img-container">
          <img src={cart} alt="cart"></img>
        </i>
      </Link>
    </nav>
  );
};
export default Nav;