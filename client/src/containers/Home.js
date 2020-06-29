import React, {Suspense, lazy} from 'react';
import '../styles/containers/Home.css';
import BgHeader from '../components/Home/BgHeader';
// import CardList from '../components/Home/cardList/Cardlist';
// import CircleWrapper from '../components/Home/CircleWrapper';
// import HotBar from '../components/Home/HotBar';
// import HotList from '../components/Home/cardList/HotList';

// const BgHeader = lazy(()=>import('../components/Home/BgHeader'));
const HotList =lazy(()=>import('../components/Home/cardList/HotList'));
const CircleWrapper = lazy(()=>import( '../components/Home/CircleWrapper'));
const HotBar = lazy (()=>import('../components/Home/HotBar'));
const Home =()=>{
        return (
           <div className="home">
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
        </div>
        );
        }
export default Home;
