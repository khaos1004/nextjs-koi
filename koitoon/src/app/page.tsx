"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/public/header/Header";
import Side from "@/components/public/side/Side";
import Footer from "@/components/public/footer/Footer";
import { useEffect, useState } from "react";
import { LanguageProvider } from "@/context/Language";
import MainTop from "@/../../public/images/main/메인_배경.jpg";
import MainCenter from "@/../../public/images/main/메인_채용.jpg";
import Empty from "@/../../public/images/main/thumbnail2.png";
import Arrow from "@/../../public/images/main/free-icon-direction-arrow-4939761.png";
import Image from "next/image";

const images = [
  Empty,
  "/path/to/your/image2.jpg",
  "/path/to/your/image3.jpg",
  "/path/to/your/image4.jpg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 4; // 이미지 총 개수

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000); // 3초마다 이미지 변경
    return () => clearInterval(interval);
  }, []);

  return (
    <LanguageProvider>
      <div className="flex flex-col">
        <div className="h-16">
          <Header />
        </div>
        <Side />
        <div className="main_image" data-aos="fade-up">
          <Image
            src={MainTop}
            alt="Main background"
            className="brightness-50 w-full h-[25rem]"
          />
          <div className="main_image_text justify-center items-center content-center">
            <div className="text-center">
              <span className="">
                웹툰 트렌드와 문화를 선도하고 작가와 독자를 연결하는
              </span>{" "}
              <span className="font-semibold">글로벌 웹툰 제작사</span>
            </div>
            <div className="text-5xl font-bold">
              WEBTOON <span className="te text-orange-700">KOI CONTENT</span>
            </div>
            <div className="flex justify-center mt-8">
              <button className="btn text-white rounded-3xl w-[13rem] hover:bg-orange-500 bg-inherit">
                작품 바로가기 &nbsp; &nbsp; &gt;{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row min-h-screen w-screen my-[1rem] mb-[15rem]" data-aos="fade-up">
          <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
          <div className="flex-3 w-4/6"> {/* 중앙 컨텐츠 영역 (3/5) */}
            <div className="flex text-center items-center justify-between">
              <div className="text-4xl my-[4rem] font-bold">WEBTOON</div>
              <div className="font-medium flex justify-center items-center hover:text-orange-600 cursor-pointer">
                MORE &nbsp; <Image src={Arrow} alt="Arrow" className="h-[1.5rem] w-[1.5rem]" />
              </div>
            </div>
            <div className="flex space-x-4 overflow-hidden shadow-md">
              <Image src={Empty} alt="Thumbnail" className="w-1/4 shadow-2xl" />
              <Image src={Empty} alt="Thumbnail" className="w-1/4 shadow-2xl" />
              <Image src={Empty} alt="Thumbnail" className="w-1/4 shadow-2xl" />
              <Image src={Empty} alt="Thumbnail" className="w-1/4 shadow-2xl" />
            </div>
            <div className="flex justify-center mt-8 items-center">
              <button className="bg-white rounded-full hover:bg-gray-100 mr-4 stroke-1 stroke-[#BDBDBD]">
                {/* 이전 버튼 */}
                <svg className="h-8 w-8 m-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button className="bg-white rounded-full hover:bg-gray-100 ml-4 stroke-1 stroke-[#BDBDBD]">
                {/* 다음 버튼 */}
                <svg className="h-8 w-8 m-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <div className="flex text-center items-center justify-between mt-[4rem] mb-8">
              <div className="text-4xl font-bold">RECRUIT</div>
              <div className="font-medium flex justify-center items-center hover:text-orange-600 cursor-pointer">
                MORE &nbsp; <Image src={Arrow} alt="Arrow" className="h-[1.5rem] w-[1.5rem]" />
              </div>
            </div>
            <Image src={MainCenter} alt="Main center" className="brightness-50 w-full h-[20rem] mb-8" />
            <div>
              <div className="text-3xl mb-4 font-medium">직원채용</div>
              <div className="font-medium">
                글로벌 웹툰을 만들어 나갈 실력있고 열정적인 인재들을 찾고 있습니다.
              </div>
            </div>
          </div>
          <div className="flex-1"></div> {/* 오른쪽 여백 (1/5) */}
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
