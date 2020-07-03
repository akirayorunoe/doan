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
            <div className="fruit-cate">
        <NavLink to='/Products/?filter=fruit' onClick={()=>{dispatch(filterChoose('fruit'));}}>
             <Circle image='https://res.cloudinary.com/testuncleveggieimg/image/upload/c_scale,w_300/v1593613737/ofruits_pqhba5.webp' name="ORGANIC FRUITS"/>
        </NavLink>
            </div>
            <div className="veg-cate">
        <NavLink to='/Products/?filter=vegetables' onClick={()=>{dispatch(filterChoose('vegetables'));}}>
            <Circle image='https://res.cloudinary.com/testuncleveggieimg/image/upload/c_scale,w_300/v1593613732/ovegets_lannqf.webp' name="ORGANIC VEGETABLES"/>
        </NavLink>
        </div>
        <div className="spi-cate">
        <NavLink to='/Products/?filter=spices' onClick={()=>{dispatch(filterChoose('spices'));}}>
            <Circle image='https://res.cloudinary.com/testuncleveggieimg/image/upload/c_scale,w_300/v1593613740/ospices_smuuse.webp' name="ORGANIC SPICES"/>
        </NavLink>
        </div>
        </div>
    );
}
export default CircleWrapper;