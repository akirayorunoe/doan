import React from 'react';
import '../../../styles/components/Home/Card.css';
import {Link} from 'react-router-dom';

export default class Card extends React.Component {
    render() {
        return (
            <div className="card text-left" >
                <div>
                    <img className="productImg" src={this.props.img} alt={this.props.productName} />
                </div>
                <div>
                    <h4>{this.props.productName}</h4>
                </div>
                <div>
                    <p>Giá: {this.props.price}</p>
                </div>
                <Link>
                <div className="cartIcon">
                    <img src="https://img.icons8.com/bubbles/50/000000/buy.png" alt="cart-icon" />
                </div>
                </Link>
            </div>
        )
    }
}
