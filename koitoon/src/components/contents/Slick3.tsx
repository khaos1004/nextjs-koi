'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Image1 from '@/../../public/images/1.png'
import Image2 from '@/../../public/images/2.png'
import Image3 from '@/../../public/images/3.png'
import Image4 from '@/../../public/images/4.png'
import Image5 from '@/../../public/images/5.png'
import Image6 from '@/../../public/images/6.png'

const Rtl: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true
    };

    return (
        <div className='my-8 flex'>
            {/* <h2>Right to Left</h2> */}
            <Slider {...settings}>
                <div className='bg-yellow-400'><Image src={Image1} width={300} height={300} alt='test' /></div>
                <div className='bg-yellow-400'><Image src={Image1} width={300} height={300} alt='test' /></div>
                <div className='bg-yellow-400'><Image src={Image1} width={300} height={300} alt='test' /></div>
                <div className='bg-yellow-400'><Image src={Image1} width={300} height={300} alt='test' /></div>
                {/* <div className='bg-yellow-400'><Image src={Image2} width={350} height={350} alt='test' /></div>
        <div className='bg-yellow-400'><Image src={Image3} width={350} height={350}  alt='test' /></div>
        <div className='bg-yellow-400'><Image src={Image4} width={350} height={350}  alt='test' /></div>
        <div className='bg-yellow-400'><Image src={Image5} width={350} height={350}  alt='test' /></div>
        <div className='bg-yellow-400'><Image src={Image6} width={350} height={350}  alt='test' /></div>         */}
            </Slider>
        </div>
    );
};

export default Rtl;
