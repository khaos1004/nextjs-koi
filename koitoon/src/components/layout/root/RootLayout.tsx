'use client'
import Header from "@/components/public/header/Header"
import Side from "@/components/public/side/Side"
import DaisySide from "@/components/public/side/DaisySide"
import Content from "@/components/public/contents/Content"
import Footer from "@/components/public/footer/Footer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import Slick from "@/components/contents/Slick";
import Slick2 from "@/components/contents/Sick2";
import Slick3 from "@/components/contents/Slick3";
import Slick4 from "@/components/contents/Slick4";
import We1 from '@/../../public/images/3.jpg'
import { motion } from 'framer-motion';
import '../../../app/aos.css';
import { useEffect } from "react";
import AOS from "aos";


const RootLayout = () => {    
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    });
   
    return (
        <div className="flex flex-col">
            <div className="h-16"> {/* 네비게이션 바 */}
                <Header />
            </div>
            <Side />
            {/* <DaisySide /> */}
            
            <div className="flex flex-row min-h-screen w-screen my-[3rem]">
                <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
                <div className="flex-3 w-4/6"> {/* 중앙 컨텐츠 영역 (3/5) */}
                {/* <div className="animate-wiggle w-[30rem] h-[30rem] bg-blue-600">ㅏㄷ개개</div> */}
                    <Slick />  
                    <div data-aos="fade-up">                      
                        <Slick2 />                           
                    </div>  
                    <div data-aos="flip-left"> 
                    <Slick3 />
                    </div> 
                    <div data-aos="flip-up"> 
                    <Slick4 />
                    </div>                                                
                </div>
                <div className="flex-1"></div> {/* 오른쪽 여백 (1/5) */}
            </div>                
        <Footer />
    </div>
    )
}

export default RootLayout;
