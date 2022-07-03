import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import tu1 from '../images/tu1.jpeg';
import tu2 from '../images/tu2.jpeg';
import tu3 from '../images/tu3.jpeg';
import tu4 from '../images/tu4.jpeg';

const list  = [
  {
    url: tu1,
    alt: 'images',
    label: '图1'
  },
  {
    url: tu2,
    alt: 'images',
    label: '图2'
  },
  {
    url: tu3,
    alt: 'images',
    label: '图3'
  },
  {
    url: tu4,
    alt: 'images',
    label: '图4'
  }

]

function DemoCarousel() {
  return (
    <Carousel key="myCarousel">
      {
        list.map((item, index) => (<div key={index}>
        <img src={item.url} alt={item.alt} />
        {/* <p className="legend">{item.label}</p> */}
      </div>))
      }
    </Carousel>
  );
}

export default DemoCarousel;
