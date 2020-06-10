import React from 'react';
import '../../../styles/components/Home/Cardlist.css';
import Card from '../cardList/Card';
// import { data } from '../../../data/data';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../action/cart-action';
import { connect } from 'react-redux'
import Axios from 'axios';
import Pagination from "../../Product/Pagination/Pagination";
// import Pagination from '../../Product/Pagination/Pagination';
//use this in product page :v
class Cardlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  
  state={
    productsData:[],
    maxPage:0,
    currentPage:1
  }
  //   createList(){
  //   let content = [];
  //   let result = [];
  //   data.map((item)=>{
  //     if((item.id % 4) == 0){
  //       result.push(
  //         <ul className="row">
  //           {content}
  //         </ul>
  //       );
  //     }
  //     else{
  //       content.push(
  //           <Card 
  //           key={item.id}
  //           img={item.img.src}
  //           price={item.price}
  //           productName={item.productName}
  //           />
  //       )
  //     }
  //   })
  //   console.log(result);
  //   return result;
  // }
 async componentDidMount(){
   do
   {
     console.log(`http://localhost:3030/products${this.props.routee==='/'?`?page=${this.props.number}`:`${this.props.routee}&page=${this.props.number}`}`)
      await Axios.get(`http://localhost:3030/products${this.props.routee==='/'?`?page=${this.props.number}`:`${this.props.routee}&page=${this.props.number}`}`)
    .then(data=>data.data)
      .then(data=>this.setState({productsData:data.result,maxPage:data.maxPage})).catch(err=>console.log(err))}
      while(this.state.productsData.length===0);
  }
 async componentDidUpdate(prevProps, prevState){
  console.log(`http://localhost:3030/products${this.props.routee==='/'?`?page=${this.props.number}`:`${this.props.routee}&page=${this.props.number}`}`)
    if(prevProps.route!==this.props.route||this.props.number!==prevProps.number){
      console.log(`http://localhost:3030/products${this.props.routee==='/'?`?page=${this.props.number}`:`${this.props.routee}&page=${this.props.number}`}`)
      do
      { 
        await Axios.get(`http://localhost:3030/products${this.props.routee==='/'?`?page=${this.props.number}`:`${this.props.routee}&page=${this.props.number}`}`)
       .then(data=>{
         console.log(data)
        return data.data})
         .then(data=>this.setState({productsData:data.result,maxPage:data.maxPage})).catch(err=>console.log(err))}
         while(this.state.productsData.length===0);
    }
  }
  // async componentDidMount2(){
  //   do
  //   {
  //     console.log(`http://localhost:3030/products${this.props.routee==='/'?`?page=${this.props.number}`:`${this.props.route}&page=${this.props.number}`}`)
  //      await Axios.get(`http://localhost:3030/products${this.props.routee==='/'?`?page=${this.props.number}`:`${this.props.route}&page=${this.props.number}`}`)
  //    .then(data=>data.data)
  //      .then(data=>this.setState({productsData:data.result,maxPage:data.maxPage})).catch(err=>console.log(err))}
  //      while(this.state.productsData.length===0);
  //  }
  handleClick(id) {
    this.props.addToCart(id)
  }

  // createList() {
  //   const result = []
  //   this.props.items.map(item =>
  //     result.push(
  //       <div className="card-container" key={item.id}>
  //         <Link to={`/Products/${item.id}`}>
  //           <Card
  //             key={item.id}
  //             img={item.img.src}
  //             price={item.price}
  //             productName={item.productName}
  //             id={item.id}
  //             handleClick={this.handleClick}
  //           />
  //         </Link>
  //       </div>
  //     )
  //   )
  //   return result;
  // }

  render() {
    console.log(this.state);
    const listCard = this.state.productsData.map(item => (
      <div className="card-container" key={item.id}>
        <Link to={`/Products/${item._id}`}>
          <Card
            key={item._id}
            img={item.img}
            price={Math.round(item.price*100)/100}
            productName={item.name}
            id={item.id}
            handleClick={this.handleClick}
          />
        </Link>
        {/* <Pagination

        /> */}
      </div>))
      //console.log(this.state.maxPage);
    return (
      <div className="cardlist-wrapper">
      <div className="cardlist-container">
        {listCard}
      </div>
      <Pagination maxPage={this.state.maxPage}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.items,
    route: state.sortReducer.route,
    routee:state.filterRuducer.routee,
    number:state.paginationReducer.number

  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cardlist);





