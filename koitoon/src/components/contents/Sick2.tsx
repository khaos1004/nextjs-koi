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
    // <div className='grid'>
<>
<div className='flex mt-52' data-aos="fade-up"
     data-aos-duration="3000" >
      <div className="text-area">
          <div className="hGroup aos-init aos-animate" data-aos="fade-up">
            <p className="title text-[6rem] italic text-sky-400 text-bold font-['SundayLemon']"><span className='text-sky-600' f-point="">Toon</span>Koi</p>
          </div>

          <div className="about-text aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <p className="font-['SundayLemon'] pb-4">스토리의 힘을 믿는 사람들</p>
            <p className="title text-3xl mb-2">Toon Koi!</p>

            <p className="text text-sky-400 mt-2">
              <hr />
               웹소설과 웹툰을 제작·유통하고, 확보된 IP를 기반으로 영화·드라마·게임·뮤지컬 등 다양한 분야로 확장해 나가고 있는 콘텐츠 전문 기업입니다.
            </p>

            <div className='flex items-center mt-8'>
            <p className="btn"><a href="" className="mr-4">VIEW MORE </a>     </p>
            <Arrowbutton className='animate-bounce w-4 h-4' />
            </div>         


            {/* < /> */}
          </div>
        </div>
    <div className='w-[35rem]'>
      <Slider ref={slickRef} {...settings}>
        <div className=''>        
          <Image src={We1} alt="ad" className='object-cover object-center w-full h-80 rounded-3xl pl-2' />               
        </div>    
        <div className=''>
          <Image src={We2} alt="ad" className='object-cover object-center w-full h-80 rounded-3xl pl-2' />               
        </div>
        <div className=''>          
          <Image src={We4} alt="ad" className='object-cover object-center w-full h-80 rounded-3xl pl-2' />               
        </div> 
        <div className=''>          
          <Image src={We4} alt="ad" className='object-cover object-center w-full h-80 rounded-3xl pl-2' />               
        </div>        
      </Slider>
      <button onClick={previous}></button>
      <button onClick={next}></button>
      </div>
      </div>
    </>
  );
}

export default SimpleSlider1;
