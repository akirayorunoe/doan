import React from 'react';
import '../../styles/components/Home/HotBar.css';
import { NavLink } from 'react-router-dom';
const HotBar=()=>{
    return(
        <div className="bar-wrapper">
            <div className="hot-text">
                <p>HOT!!!</p>
            </div>
            <div className="watchmore">
                <p><NavLink to='/Products/'>Xem thêm</NavLink></p>
            </div>
        </div>
    );
}
export default HotBar;