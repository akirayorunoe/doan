import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../components/Home/cardList/Card';
import { addToCart } from '../action/cart-action';
import { connect } from 'react-redux'
const SearchPage = (props) => {
    const searchInput = useSelector(state => {
        return state.searchReducer.name
    });
    const  handleClick=(id)=> {
    props.addToCart(id)
      }
    const searchResult = useSelector(state => state.searchReducer.data);
    return (<div className="SearchPage">
        <div style={{ marginBottom: '10px' }}>
            <p>Search Result:{searchInput}</p>
            <hr></hr>
        </div>

        {

            searchResult.map(item => {
                //     return <div>
                // <p>{item._id}</p>
                // <p>{item.name}</p>
                // <p>{item.price}</p>
                // </div>
                return <div className="card-container" key={item.id}>

                  
                    <Link to={`/Products/${item._id}`}>
                        <Card
                            key={item._id}
                            img={item.img}
                            price={Math.round(item.price * 100) / 100}
                            productName={item.name}
                            id={item.id}
                            handleClick={handleClick}
                        />
                    </Link>
                </div>
            })
        }
    </div>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.cartReducer
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id, quantity) => { dispatch(addToCart(id, quantity)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
