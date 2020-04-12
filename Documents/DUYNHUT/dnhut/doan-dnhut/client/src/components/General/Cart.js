import React from 'react';
import '../../styles/components/General/Cart.css';
import cam from '../../assets/aboutImage/bgAbout.jpeg';
const Cart =()=>{
    return(
        <div className="cart-container">
          <div className="cart-box">
              <p>Product in cart</p>
             <div className="cart-product">
                 <img src={cam} alt="anh"/>
             </div>
             <div className="cart-product">
                 <img src={cam} alt="anh1"/>
             </div>
             <div className="cart-total">Total:1000d</div>
             <div className="cart-end"> <p>Uncle Vegie</p> </div>
          
          </div>
           
        </div>
    );
}
export default Cart;