import React from 'react';
import {useSelector} from 'react-redux';
const SearchPage =()=>{
    const searchInput=useSelector(state=>{
        return state.searchReducer.name});
    const searchResult=useSelector(state=>state.searchReducer.data);
        return (<div className="SearchPage">
            <p>Search Result:{searchInput}</p>
            {
            searchResult.map(item=>{
                return <div>
            <p>{item._id}</p>
            <p>{item.name}</p>
            <p>{item.price}</p>
            </div>
            })
            }
        </div>
        );
    }
export default SearchPage;
