'use client'
import React, { useRef, useCallback } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import We1 from '@/../../public/images/3.jpg';
import We2 from '@/../../public/images/4.jpg';
import We4 from '@/../../public/images/6.jpeg';
import Arrowbutton from '@/../public/svg/right-arrow-7_icon-icons.com_69946'


const SimpleSlider1 = () => {
  const slickRef = useRef<Slider>(null);
  interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }
  
  const CustomPrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
      <div
        className={`custom-arrow ${className}`}
        style={{ ...style, display: "block" }} // 여기에 Tailwind CSS 클래스 추가 가능
        onClick={onClick}
      >
        {/* 화살표 아이콘 또는 텍스트 */}
      </div>
    );
  };
  
  const CustomNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
      <div
        className={`custom-arrow ${className}`}
        style={{ ...style, display: "block" }} // 여기에 Tailwind CSS 클래스 추가 가능
        onClick={onClick}
      >
        {/* 화살표 아이콘 또는 텍스트 */}
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay : true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  const previous = useCallback(() => {
    if (slickRef.current) {
      slickRef.current.slickPrev();
    }
  }, []);

  const next = useCallback(() => {
    if (slickRef.current) {
      slickRef.current.slickNext();
    }
  }, []);

  return (    
<>
<div className='flex mt-52' data-aos="fade-up"
     data-aos-duration="3000" >          
    <div className='w-[35rem]'>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><Image src={We1} alt={'aa'}  /></figure>
        <div className="card-body">
            <h2 className="card-title">
            Toon!
            <div className="badge badge-secondary">작품소개</div>
            </h2>
            <p>히트!?</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Toon</div> 
            <div className="badge badge-outline">Koi</div>
            </div>
        </div>
        </div>

      </div>
      <div className='w-[35rem]'>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><figure><Image src={We2} alt={'aa'}  /></figure></figure>
        <div className="card-body">
            <h2 className="card-title">
            Toon!
            <div className="badge badge-secondary">작품소개</div>
            </h2>
            <p>히트!</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Book</div> 
            <div className="badge badge-outline">Best!</div>
            </div>
        </div>
        </div>
        
      </div>
      <div className='w-[35rem]'>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><figure><Image src={We4} alt={'aa'}  /></figure></figure>
        <div className="card-body">
            <h2 className="card-title">
            Toon!
            <div className="badge badge-secondary">작품소개</div>
            </h2>
            <p>히트!</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Book</div> 
            <div className="badge badge-outline">Best!</div>
            </div>
        </div>
        </div>
        
      </div>
      </div>
      
    </>
  );
}

export default SimpleSlider1;
