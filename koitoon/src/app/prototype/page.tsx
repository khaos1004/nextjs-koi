'use client'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('react-slick'), { ssr: false });


export default function Page() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <>
      <div className="snap-x">        
        <Slider className="bg-blue-200 w-[40rem] justify-center items-center snap-center"{...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>7</h3></div>
          <div><h3>8</h3></div>
          <div><h3>9</h3></div>
        </Slider>
      </div>
    </>
  );
}

