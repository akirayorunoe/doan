import React from "react";
import Image from '../../assets/organic.jpg';
import '../../styles/components/Home/BgHeader.css';
const BgHeader=(props)=>{
    return(
      <img className="header-image" src='https://res.cloudinary.com/tutor-app/image/upload/c_scale,q_auto,w_448/v1593532037/organic_vpljye.webp' alt="header-img"/> 
    );
}
export default BgHeader;