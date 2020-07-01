import React from "react";
import Image from '../../assets/organic.jpg';
import '../../styles/components/Home/BgHeader.css';
const BgHeader=()=>{
    return(
      <img className="header-image" src={Image} alt="header-img"/> 
    );
}
export default BgHeader;