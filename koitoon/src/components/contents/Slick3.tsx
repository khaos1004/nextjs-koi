'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Image1 from '@/../../public/images/3.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slick3: React.FC = () => {

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };

    return (
        <div className='my-8 flex'>
            {/* <h2>Right to Left</h2> */}
            <Slider {...settings}>
                <div className='bg-yellow-400'><img src='@/../../public/images/3.jpg' /></div>
                {/* <div className='bg-yellow-400'><Image src={Image1} width={300} height={300} alt='test' /></div>
                <div className='bg-yellow-400'><Image src={Image1} width={300} height={300} alt='test' /></div>
                <div className='bg-yellow-400'><Image src={Image1} width={300} height={300} alt='test' /></div> */}
                {/* <div className='bg-yellow-400'><Image src={Image2} width={350} height={350} alt='test' /></div>
        <div className='bg-yellow-400'><Image src={Image3} width={350} height={350}  alt='test' /></div>
        <div className='bg-yellow-400'><Image src={Image4} width={350} height={350}  alt='test' /></div>
        <div className='bg-yellow-400'><Image src={Image5} width={350} height={350}  alt='test' /></div>
        <div className='bg-yellow-400'><Image src={Image6} width={350} height={350}  alt='test' /></div>         */}
            </Slider>
        </div>
    );
};

export default Slick3;


//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }