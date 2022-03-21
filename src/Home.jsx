import React from 'react';
import Navbar from "./Navbar";
import BdayGiftsboxs from "./BdayGiftsboxs.jsx";
import Anniversary from "./Anniversary.jsx";
import Occasions from "./Occasions";
import Personalized from "./Personalized";
import Categories from './Categories.jsx';
import Slider from "./Slider.jsx";
import SaleBanner from "./SaleBanner.jsx";
import EmailUpdates from "./EmailUpdates.jsx";
import {Switch, Route }from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Categories />
        <Slider />
        <BdayGiftsboxs />
           <div className='anniversaryandoccasions'>
              <Anniversary />
              <Occasions />
          </div>
         <Personalized /> 
         <EmailUpdates />
         <SaleBanner />
         <Footer />
    </div>
  );
};

export default Home;