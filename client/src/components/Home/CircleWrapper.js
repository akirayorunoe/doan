import React from 'react';
import Circle from '../Home/Circle';
import { NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {filterChoose} from '../../action/sort-action';
import ofruit from '../../assets/ofruits.jpeg';
import ovegets from '../../assets/ovegets.jpeg';
import ospices from '../../assets/ospices.jpeg';
import '../../styles/components/Home/CircleWrapper.css';
const CircleWrapper=()=>{
    const dispatch=useDispatch();

    return(
        <div className="circle-wrapper">
        <NavLink to='/Products/?filter=fruit' onClick={()=>{dispatch(filterChoose('fruit'));}}>
             <Circle image='https://res.cloudinary.com/tutor-app/image/upload/c_scale,q_80,w_200/v1593531702/ofruits_mj7buj.webp' name="ORGANIC FRUITS"/>
        </NavLink>
        <NavLink to='/Products/?filter=vegetables' onClick={()=>{dispatch(filterChoose('vegetables'));}}>
            <Circle image='https://res.cloudinary.com/tutor-app/image/upload/c_scale,w_200/v1593531717/ospices_huoqsk.webp' name="ORGANIC VEGETABLES"/>
        </NavLink>
        <NavLink to='/Products/?filter=spices' onClick={()=>{dispatch(filterChoose('spices'));}}>
            <Circle image='https://res.cloudinary.com/tutor-app/image/upload/c_scale,w_200/v1593531719/ovegets_piun3f.webp' name="ORGANIC SPICES"/>
        </NavLink>
        </div>
    );
}
export default CircleWrapper;