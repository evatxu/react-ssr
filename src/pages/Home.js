import React from 'react';
import CallInfo from '../components/CallInfo';
import DemoCarousel from '../components/swiper';
import LinTabs from './home/LinTabs';
import ProductBj from './home/productBj'
import '../external.css';
import RecommendNews from './home/RecommendNews';
import KhBj from './home/KhBj';
import Points from './home/Points';
import ProductBj2 from './home/ProduceBj2';

export const Home = () => {
  return (
    <>
      <CallInfo />
      <DemoCarousel />
      <div class="product-bj-2">
        <ProductBj2 />
      </div>
      <div>
        <KhBj />
      </div>
      <div>
        <Points />
      </div>
      <div className="tabs-container" >
          <LinTabs />
          {/* <LinTabs2 /> */}
      </div>
      <ProductBj />
      <RecommendNews />
    </>
  );
};
