import React, { Suspense, lazy } from 'react';
import '../styles/containers/Home.css';
// import CardList from '../components/Home/cardList/Cardlist';
const CircleWrapper = lazy(() => import('../components/Home/CircleWrapper'));
const BgHeader = lazy(() => import('../components/Home/BgHeader'));
const HotList = lazy(() => import('../components/Home/cardList/HotList'));
const HotBar = lazy(() => import('../components/Home/HotBar'));
const Home =()=>{
        return (
           <div className="home">
           <Suspense fallback={<div>Loading... </div>}>
            <BgHeader/>
            <CircleWrapper />
            <HotBar/>
            <HotList/>
            {/* <CardList/> */}
            </Suspense>
        </div>
        );
        }
export default Home;
