import React from 'react';
import '../../../styles/components/Home/HotList.css';
import Card from '../cardList/Card';
import {data} from '../../../data/data';

const hData = data.slice(0,4);
class HotList extends React.Component{
    constructor(){
      super();
      this.state={};
    }
    createHotList(){
      let hotContent = [];
      hData.map((item)=>{
          hotContent.push(
              <li>
              <Card 
                key={item.id}
                img={item.img.src}
                price={item.price}
                productName={item.productName}
                />
              </li>
          )
        }
      );
      console.log(hotContent);
      return hotContent;
    }
    render(){
      return (
          <div className="hotList">
          <ul>
              {this.createHotList()}
          </ul>
          </div>
      )
    }
  }
export default HotList;

// hData.map((item)=>{
//     hotContent.push(
//         <li>
//         <Card 
//           key={item.id}
//           img={item.img.src}
//           price={item.price}
//           productName={item.productName}
//           />
//         </li>
//     )
//   }