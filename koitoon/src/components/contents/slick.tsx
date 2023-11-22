'use client'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import dynamic from 'next/dynamic';
import Image from "next/image";
import We from '@/../../public/images/3.jpg'
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
      slidesToScroll: 3
    };

    return (
      <div className="flex justify-center items-center my-[5rem]"> {/* 전체 화면 높이와 flex 중앙 정렬 */}
        <div className="w-auto h-auto"> {/* 최대 너비를 md 사이즈로 설정하고, 양쪽 마진 자동 */}
          <Slider {...settings}>
            <div>
              <Image src={We} width={300} height={500} alt="ad" layout="responsive" />
            </div>                      
            {/* 여기에 다른 슬라이드들을 추가하세요 */}
          </Slider>
        </div>
      </div>
    );
    
  }
}