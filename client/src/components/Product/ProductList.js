import React from "react";
import '../../styles/components/Product/ProductList.css';
import { NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {filterChoose} from '../../action/filter-action'
function ProductList(){
    // const [appear,setAppear]=useState(false);

    const checkActive = (match, location) => {
        //some additional logic to verify you are in the home URI
        if (!location) return false;
        const { pathname } = location;
        // console.log(pathname);
        return pathname === "";
    }
    
    const styles = {
        backgroundColor: '#B0EACD'
    }
    const dispatch=useDispatch();
 function selectFunc(e) {
       // console.log(e.target.value)
        dispatch(filterChoose(e.target.value))
    }
    return(
        <nav>
            <ul className="Product-list">
            <li className="Fruit">
            {/* <NavLink to='/Products?filter=fruit' isActive={checkActive} activeStyle={styles}><p>Fruits</p></NavLink>                
                <NavLink to='/Products/Fruits/Viet'activeStyle={styles}><li>Vegatable</li></NavLink>
                <NavLink to='/Products/Fruits/Import'activeStyle={styles}><li>Spice</li></NavLink>  */}
                 <select name="SortBy" id="SortBy" onChange={selectFunc} >
            <option value="" selected disabled hidden>Choose here</option>
            <option value="fruit">fruit</option>
            <option value="vegatable">vegatable</option>
            <option value="spice">spice</option>
                </select>
            </li>
            </ul>
        </nav>
    )
}

export default ProductList;