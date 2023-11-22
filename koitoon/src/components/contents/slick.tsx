'use client'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import dynamic from 'next/dynamic';
import Image from "next/image";
import We from '@/../../public/images/we.jpeg'

const Slider = dynamic(() => import('react-slick'), { ssr: false });


export default function Page() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <>
      {/* <div className="">         */}
        <Slider className="bg-blue-200 justify-center my-8"{...settings}>
          <div><Image src={We} width={200} height={200} alt="image" /></div>
          <div><Image src={We} width={200} height={200} alt="image" /><h3>2</h3></div>
          <div><Image src={We} width={200} height={200} alt="image" /><h3>3</h3></div>
          <div><Image src={We} width={200} height={200} alt="image" /><h3>4</h3></div>
          <div><Image src={We} width={200} height={200} alt="image" /><h3>5</h3></div>
          <div><Image src={We} width={200} height={200} alt="image" /><h3>6</h3></div>
          <div><Image src={We} width={200} height={200} alt="image" /><h3>7</h3></div>
          <div><Image src={We} width={200} height={200} alt="image" /><h3>8</h3></div>
          <div><Image src={We} width={200} height={200} alt="image" /><h3>9</h3></div>
        </Slider>
      {/* </div> */}
    </>
  );
}