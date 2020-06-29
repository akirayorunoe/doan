
import React, {Suspense, lazy} from 'react';
import '../styles/containers/Home.css';
// import CardList from '../components/Home/cardList/Cardlist';
// import CircleWrapper from '../components/Home/CircleWrapper';
// import HotBar from '../components/Home/HotBar';
// import HotList from '../components/Home/cardList/HotList';

const HotList =lazy(()=>import('../components/Home/cardList/HotList'));
const CircleWrapper = lazy(()=>import( '../components/Home/CircleWrapper'));
const HotBar = lazy (()=>import('../components/Home/HotBar'));
const BgHeader = lazy(()=>import('../components/Home/BgHeader'));
const Home =()=>{
        return (
           <div className="home">
           <Suspense fallback={<div>Loading... </div>}>
            <BgHeader/>
            <Suspense fallback={<div/>}>
                <CircleWrapper />
            </Suspense>
            <Suspense fallback={<div/>}>
                <HotBar/>
            </Suspense>
            <Suspense fallback={<div/>}> 
                <HotList/>
            </Suspense>
            {/* <CardList/> */}
            </Suspense>
        </div>
        );
        }
export default Home;
