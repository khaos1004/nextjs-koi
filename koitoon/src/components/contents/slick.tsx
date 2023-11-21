'use client'

import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import dynamic from 'next/dynamic';
import Image from "next/image";
import We from '@/../../public/images/we.jpeg'

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="items-center">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>
                <Image 
                    src={We}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                 />
            </h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}