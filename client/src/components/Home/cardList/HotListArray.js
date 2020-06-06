import React from 'react';
import { Link } from 'react-router-dom'
import Card from '../cardList/Card';
import { addToCart } from '../../../action/cart-action'
import { connect } from 'react-redux'
class HotListArray extends React.Component{
    constructor() {
        super();
        this.state = {};
      }
    handleClick = (id) => {
        this.props.addToCart(id)
      }
      
    render()
   {
       console.log(this.props.productsData,'a')
       return (this.props.productsData? this.props.productsData.slice(0, 6).map(item => {
            return <div className="card-container" key={item.id}>
              <Link to={`/Products/${item._id}`}>
                <Card
                  key={item.id}
                  img={item.img}
                  price={item.price}
                  productName={item.name}
                  id={item.id}
                  handleClick={this.handleClick}
                />
              </Link>
            </div>
}):null)}
}
const mapStateToProps = (state) => {
    return {
      items: state.cartReducer.items
    }
  }
  const mapDispatchToProps = (dispatch) => {
  
    return {
      addToCart: (id) => { dispatch(addToCart(id)) }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(HotListArray);