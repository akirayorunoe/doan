import React from 'react';
import "../../styles/components/Policy/Text.css"
import Content from './Content';
const Policy = () => {
    return (<div className="Policy">
      <div className="container" >
        <div className="policyInfo">
          <h1>Our Policy</h1>
          <h2> Privacy Policy for Company Name</h2>
         <Content/>
<h2> Shipping policy</h2>
<br/>
<table id="shippingPrice">
<thead>
<tr id="row-head">
  <td id="Location">LOCATION</td>
  <td id="Shipping-area">SHIPPING AREA</td>
  <td id="Price">PRICE</td>
  <td id="Free-for-bill">FREE FOR BILL</td>

</tr>
</thead>
<tbody>
<tr id="row-body1">
  <td id="Location1">City</td>
  <td id="Shipping-area1">TP HCM, Ha Noi, Da Nang</td>
  <td id="Price1">2$</td>
  <td id="Free-for-bill1">Over 20$</td>
</tr>
<tr id="row-body2">
  <td id="Location2">Country</td>
  <td id="Shipping-area2">Other</td>
  <td id="Price2">4$</td>
  <td id="Free-for-bill2">Over 50$</td>
</tr>
</tbody>
</table>
          </div>          
          </div>
      </div>
    )
  }
export default Policy;