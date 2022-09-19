import React from 'react'
import Header from '../components/Header/Header';
import Showcase from '../components/Showcase/Showcase';
import WebShopInfo from '../components/WebshopInfo/WebShopInfo';
import ShopByCategories from '../components/ShopByCategories/ShopByCategories';
import NewArrivals from '../components/NewArrivals/NewArrivals';

const Home = () => {
  return (
    <>
        <Header />
        <Showcase />
        <WebShopInfo />
        <ShopByCategories />
        <NewArrivals />
        <div style={{height: "500px"}}></div>
    </>
  )
}

export default Home