'use client'
import RootLayout from "@/components/layout/root/RootLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import Slick from "@/components/contents/Slick";
import Slick2 from "@/components/contents/Sick2";
import Slick3 from "@/components/contents/Slick3";
import Slick4 from "@/components/contents/Slick4";
import We1 from '@/../../public/images/3.jpg'
import { motion } from 'framer-motion';
import './aos.css';
import { useEffect } from "react";
import AOS from "aos";
import Language from "@/context/Language"
import { useContext, ReactNode, useState, Dispatch, SetStateAction } from "react"
import { user } from "@nextui-org/react"
import LanguageContext from "@/context/Language"
import {LangComponent} from "@/components/contents/LangComponent"



export default function Home() {

  return (
    <>
      <RootLayout>
        
        <div data-aos="fade-up">
          <LangComponent />
        </div>
        {/* <div data-aos="flip-left"><Slick3 /></div> */}
        {/* https://codepen.io/flaguna/pen/wvzJxRG */}
      </RootLayout>
    </>
  );
}
