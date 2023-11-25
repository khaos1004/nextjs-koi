'use client'

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import dynamic from 'next/dynamic';
import Image from "next/image";
import We1 from '@/../../public/images/3.jpg'
import We2 from '@/../../public/images/4.jpg'
import We4 from '@/../../public/images/6.jpeg'
import We5 from '@/../../public/images/7.jpg'
import { Component } from "react";


// Dynamically import the Slider component to avoid SSR issues
const Slider = dynamic(() => import('react-slick'), {
  ssr: false, // This line is important. It's what prevents server-side render
});


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
          <Slider {...settings}>
            <div>
              <Image src={We1} alt="ad" /> 
              <Image src={We2} alt="ad" /> 
            </div>            
          </Slider>                   
      </div>

    );
    
  }
}
