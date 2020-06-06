import {SORT_TYPE} from '../action/action-type.js';

const initState={
route:'/'
}
const sortType = (state=initState,action={})=>{
switch(action.type){
    case SORT_TYPE:
       switch(action.route){
           case 'a-z':
        return {...state,route:'?sort=a-z'}
        case 'z-a':
            return {...state,route:'?sort=z-a'}
        case 'high_low':
            return {...state,route:'?sort=high_low'}
        case 'low_high':
            return {...state,route:'?sort=low_high'}
        case 'fruit':
            return {...state,route:'?filter=fruit'}
        case 'vegetables':
            return {...state,route:'?filter=vegetable'}
        case 'spices':
            return {...state,route:'?filter=spice'}
        case 'default':
            return {...state,route:'/'}
       }
       break;
    default: return state;
}
}

export default sortType;