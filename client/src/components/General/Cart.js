import React,{Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../../action/cart-action'
import '../../styles/components/General/Cart.css';
import Total from '../General/Total'
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class Cart extends Component{
    constructor(props) {
        super(props)
        this.state = {
            cart: []
        }
    }

    componentWillUpdate(){

    }
    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
        let listCard =  this.props.items
        listCard = listCard.concat(cookies.get('cart'))
        cookies.set('cart', listCard, { path: '/' });

        let addedItems = listCard.length ?
            (  
                listCard.map(item=>{
                    return(
                        <li className="cart" key={item.id}>
                            <div className="item-img"> 
                                <img src={item.img} alt={item.name} className=""/>
                            </div>
                        
                            <div className="item-desc">
                                <div className="product-name">
                                    <h2>{item.name}</h2>
                                </div>
                                <div className="price">
                                    <p>Price: {Math.round(item.price*100)/100}$</p> 
                                </div> 
                            </div>
                            <div className="add-remove">
                                <Link to="/cart">
                                    <button className="quantity-btn" onClick={()=>{this.handleSubtractQuantity(item.id)}}>
                                        <span>-</span>
                                    </button>
                                </Link>
                                <p className="quantity">
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <Link to="/cart">
                                    <button className="quantity-btn" onClick={()=>{this.handleAddQuantity(item.id)}}>
                                        <span>+</span>
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <button className="remove-btn"  onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                            </div>
                        </li>
                         
                    )
                })
            ):

             (
                <p style={{textAlign:"center"}}>Nothing.</p>
             )
       return(
            <div className="cart_container">
                <div className="cart_ordered">
                    <div>
                        <h1>You have ordered:</h1>
                    </div>
                    <hr></hr>
                    <ul className="cart_collection">
                        {addedItems}
                    </ul>
                </div>    
                <hr></hr>
                <Total></Total>
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.cartReducer.addedItems,
        //addedItems: state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)