'use client'
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import We from '@/../../public/images/we.jpeg'

const SlickGoTo: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [updateCount, setUpdateCount] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount => updateCount + 1),
    beforeChange: (_current: number, next: number) => setSlideIndex(next),
  };

  return (
    <div className='my-8'>
      <p>Toonkoi Update: {updateCount} </p>
      <input
        onChange={e => sliderRef.current?.slickGoTo(Number(e.target.value))}
        value={slideIndex}
        type="range"
        min={0}
        max={3}
      />
      <Slider ref={sliderRef} {...settings}>
        <div>
          <Image src={We} alt="Abstract 01" width={500} height={300} />
        </div>
        <div>
          <Image src={We} alt="Abstract 02" width={500} height={300} />
        </div>
        <div>
          <Image src={We} alt="Abstract 03" width={500} height={300} />
        </div>
        <div>
          <Image src={We} alt="Abstract 04" width={500} height={300} />
        </div>
      </Slider>
    </div>
  );
};

export default SlickGoTo;
