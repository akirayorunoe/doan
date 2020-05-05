import React,{Component} from 'react';
import '../../../styles/components/Home/Card.css';
import { Link } from 'react-router-dom';
class Card extends Component{
    render() {
        console.log(this.props)
        return (
            <div className="card text-left" >
                <div>
                    <img className="productImg" src={this.props.img} alt={this.props.productName} />
                </div>
                <div className="productName">
                    <h4>{this.props.productName}</h4>
                </div>
                <div>
                    <p>Giá: {this.props.price} dong</p>
                </div>
                <Link>
                <div className="cartIcon">
                    <img src="https://img.icons8.com/bubbles/50/000000/buy.png" alt="cart-icon"  onClick={()=>this.props.handleClick(this.props.id)}/>
                </div>
                </Link>
            </div>
        )
    }
    }

    
    export default Card
