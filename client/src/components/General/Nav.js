import React,{useState} from 'react';
import '../../styles/components/General/Nav.css';
import { NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import cart from '../../assets/cardIcon/cart.png';
// import Cart from '../General/Cart'; 
import { Link } from 'react-router-dom';
import {sortChoose} from '../../action/sort-action';
import {pageReset} from '../../action/paginate';
import Axios from 'axios';
const Nav = () => {
    const dispatch = useDispatch();
    const [searchInput,setSearchInput]=useState('')
    const styles = {
        borderRadius: 10,
        backgroundColor: '#00DD75'
    }
    //https://stackoverflow.com/questions/47879663/root-navlink-always-get-active-class-react-router-dom
    const checkActive = (match, location) => {
        //some additional logic to verify you are in the home URI
        if (!location) return false;
        const { pathname } = location;
        // console.log(pathname);
        return pathname === "/";
    }
    // getList=()=>{
       
    // }
    return (
        <nav className="nav-bar">
            <ul>
                <NavLink to='/' isActive={checkActive} activeStyle={styles}><li>Home</li></NavLink>
                <NavLink to='/Products' activeStyle={styles} onClick={()=>{dispatch(sortChoose('default'));dispatch(pageReset())}}><li>Our product</li></NavLink>
                <NavLink to='/Policy' activeStyle={styles}><li>Policy</li></NavLink>
                <NavLink to='/About' activeStyle={styles}><li>About us</li></NavLink>
            </ul>
            <div id="searchBar">
                <input type="search" id="searchInput" value={searchInput} onChange={(value)=>{return setSearchInput(value.target.value)}}></input>
            </div>
            {/* <div className="img-container"><img src={cart} onClick={()=>{setAppear(!appear)}} alt="cart"></img></div>
            {appear&&<Cart/>} */}
            <Link to ="/cart"><i className="img-container"><img src={cart} alt="cart"></img></i></Link>
        </nav>
       
    );
}
export default Nav;