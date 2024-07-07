"use client";

import React, { useEffect, useContext } from "react";
import {
  LanguageProvider,
  default as LanguageContext,
} from "@/context/Language";
import AOS from "aos";
import "aos/dist/aos.css";
import useFont from "@/app/hooks/UseFont";
import PC from "@/components/view/about/Pc";
import Pad from "@/components/view/about/Pad";
import Mobile from "@/components/view/about/Mobile";

const HomePage: React.FC = () => {
  const { language } = useContext(LanguageContext);
  useFont(); // 커스텀 훅 사용

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  return (
    <>
      <div className="hidden sm:block ">
        <PC />
      </div>
      <div className="hidden pad:block ">
        <Pad />
      </div>
      <div className="hidden ss:block ">
        <Mobile />
      </div>
    </>
  );
};

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}
