"use client";
import { MenuProvider } from "@/context/MenuContext";
import Header from "@/components/public/header/Header";
import Side from "@/components/public/side/Side";
import Footer from "@/components/public/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../app/aos.css";
import AOS from "aos";
import { useEffect, ReactNode } from "react";
import { LanguageProvider } from "@/context/Language";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <LanguageProvider>
      <MenuProvider>
        <div className="flex flex-col">
          <div className="h-16">
            <Header />
          </div>
          <Side />
          <div className="flex flex-row min-h-screen w-screen my-[1rem]">
            <div className="flex-1"></div>
            <div className="flex-3 w-4/6">
              {children}
            </div>
            <div className="flex-1"></div>
          </div>
          <Footer />
        </div>
      </MenuProvider>
    </LanguageProvider>
  );
};

export default RootLayout;
