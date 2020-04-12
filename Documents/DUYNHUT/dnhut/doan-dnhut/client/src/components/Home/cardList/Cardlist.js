import React from 'react';
import '../../../styles/components/Home/Cardlist.css';
import Card from '../cardList/Card';
import {data} from '../../../data/data';
//use this in product page :v
class Cardlist extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  createList(){
    let content = [];
    let result = [];
    data.map((item)=>{
      if((item.id % 4) == 0 || item.id == 0){
        result.push(
          <ul className="row">
            {content}
          </ul>
        );
      }
      else{
        content.push(
            <Card 
            key={item.id}
            img={item.img.src}
            price={item.price}
            productName={item.productName}
            />
        )
      }
    })
    console.log(result);
    return result;
  }
  render() {
    return (
      <div className="cardlist-container">
        <div className="cardList">
          {this.createList()}
        </div>
      </div>
    )
  }
}
export default Cardlist;

