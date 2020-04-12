import React from 'react';
import '../../styles/components/Home/HotBar.css';
const HotBar=()=>{
    return(
        <div className="bar-wrapper">
            <div className="hot-text">
                <p>HOT!!!</p>
            </div>
            <div className="watchmore">
                <p>Xem thêm</p>
            </div>
        </div>
    );
}
export default HotBar;