import React from 'react';
import Circle from '../Home/Circle';
import ofruit from '../../assets/ofruits.jpeg';
import ovegets from '../../assets/ovegets.jpeg';
import ospices from '../../assets/ospices.jpeg';
import '../../styles/components/Home/CircleWrapper.css';
const CircleWrapper=()=>{
    return(
        <div className="circle-wrapper">
          <Circle image={ofruit} name="ORGANIC FRUITS"/>
            <Circle image={ovegets} name="ORGANIC VEGETABLES"/>
            <Circle image={ospices} name="ORGANIC SPICES"/>
        </div>
    );
}
export default CircleWrapper;