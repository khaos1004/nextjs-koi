"use client";

import Header from "@/components/public/header/Header";
import Side from "@/components/public/side/Side";
import Footer from "@/components/public/footer/Footer";
import { useEffect, useState, useContext } from "react";
import { LanguageProvider, default as LanguageContext } from "@/context/Language"; // 올바르게 import
import MainTop from "@/../../public/images/main/메인_배경.jpg";
import MainCenter from "@/../../public/images/main/메인_채용.jpg";
import Arrow from "@/../../public/images/main/free-icon-direction-arrow-4939761.png";
import Image from "next/image";
import Link from "next/link";

import Partner1 from "@/../../public/images/partner/파트너사_bookcube.png";
import Partner2 from "@/../../public/images/partner/파트너사_네이버시리즈.png";
import Partner3 from "@/../../public/images/partner/파트너사_bookcube.png";
import Partner4 from "@/../../public/images/partner/파트너사_bookcube.png";
import Partner5 from "@/../../public/images/partner/파트너사_리디.png";
import Partner6 from "@/../../public/images/partner/파트너사_bookcube.png";
import Partner7 from "@/../../public/images/partner/파트너사_bookcube.png";
import Partner8 from "@/../../public/images/partner/파트너사_네이버시리즈.png";

const images = [Partner1, Partner2, Partner3, Partner4, Partner5, Partner6, Partner7, Partner8];

const textContent = {
  KO: {
    leading: "웹툰 트렌드와 문화를 선도하고 작가와 독자를 연결하는",
    globalStudio: "글로벌 웹툰 제작사",
    goToWorks: "작품 바로가기",
    more: "MORE",
    recruit: "RECRUIT",
    recruitment: "직원채용",
    recruitmentDescription: "글로벌 웹툰을 만들어 나갈 실력있고 열정적인 인재들을 찾고 있습니다.",
  },
  EN: {
    leading: "Leading webtoon trends and culture, connecting authors and readers",
    globalStudio: "Global Webtoon Studio",
    goToWorks: "Go to Works",
    more: "MORE",
    recruit: "RECRUIT",
    recruitment: "Recruitment",
    recruitmentDescription: "We are looking for talented and passionate individuals to create global webtoons.",
  },
};

function HomePage() {
  const { language } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const handleNext = () => {
    const isMobile = window.innerWidth < 768;
    const imagesPerSlide = isMobile ? 2 : 4;
    setCurrentIndex((prevIndex) => (prevIndex + imagesPerSlide) % totalImages);
  };

  const handlePrev = () => {
    const isMobile = window.innerWidth < 768;
    const imagesPerSlide = isMobile ? 2 : 4;
    setCurrentIndex((prevIndex) =>
      prevIndex - imagesPerSlide < 0 ? totalImages - imagesPerSlide : prevIndex - imagesPerSlide
    );
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const imagesPerSlide = isMobile ? 2 : 4;

  const text = textContent[language];

  return (
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
            <span>{text.leading}</span>
            <span className="font-semibold">{text.globalStudio}</span>
          </div>
          <div className="text-5xl font-bold hidden sm:flex">
            WEBTOON&nbsp; <br className="" />{" "}
            <span className="te text-orange-700">KOI CONTENT</span>
          </div>

          <div className="sm:hidden text-3xl font-bold justify-center items-center text-center">
            WEBTOON
            <br className="" /> <span className="te text-orange-700">KOI CONTENT</span>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/about/company">
              <button className="btn text-white rounded-3xl w-[13rem] hover:bg-orange-500 bg-inherit">
                {text.goToWorks} &nbsp; &nbsp; &gt;{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="flex flex-row min-h-screen w-screen my-[1rem] mb-[15rem]"
        data-aos="fade-up"
      >
        <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
        <div className="flex-3 w-4/6">
          {" "}
          {/* 중앙 컨텐츠 영역 (3/5) */}
          <div className="flex text-center items-center justify-between">
            <div className="text-4xl my-[4rem] font-bold ss:text-xl">
              WEBTOON
            </div>
            <div className="font-medium flex justify-center items-center hover:text-orange-600 cursor-pointer">
              <Link href="/webtoon" className="flex">
                {text.more} &nbsp;{" "}
                <Image
                  src={Arrow}
                  alt="Arrow"
                  className="h-[1.5rem] w-[1.5rem]"
                />
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex space-x-4 overflow-hidden shadow-md">
            {images
              .slice(currentIndex, currentIndex + imagesPerSlide)
              .map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index}`}
                  className="w-1/4 shadow-2xl"
                  width={100}
                  height={100} // 이미지 크기 조정
                />
              ))}
          </div>
          <div className="hidden ss:flex space-x-4 overflow-hidden shadow-md">
            {images
              .slice(currentIndex, currentIndex + imagesPerSlide / 2)
              .map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index}`}
                  className="w-1/2 shadow-2xl"
                  width={100}
                  height={100} // 이미지 크기 조정
                />
              ))}
          </div>
          <div className="flex justify-center mt-8 items-center">
            <button
              onClick={handlePrev}
              className="bg-white rounded-full hover:bg-gray-100 mr-4 stroke-1 stroke-[#BDBDBD]"
            >
              {/* 이전 버튼 */}
              <svg
                className="h-8 w-8 m-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="bg-white rounded-full hover:bg-gray-100 ml-4 stroke-1 stroke-[#BDBDBD]"
            >
              {/* 다음 버튼 */}
              <svg
                className="h-8 w-8 m-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="flex text-center items-center justify-between mt-[4rem] mb-8">
            <div className="text-4xl ss:text-2xl font-bold">{text.recruit}</div>
            <div className="font-medium flex justify-center items-center hover:text-orange-600 cursor-pointer">
              <Link href="/news/recruitment" className="flex">
                {text.more} &nbsp;{" "}
                <Image
                  src={Arrow}
                  alt="Arrow"
                  className="h-[1.5rem] w-[1.5rem]"
                />
              </Link>
            </div>
          </div>
          <Image
            src={MainCenter}
            alt="Main center"
            className="brightness-50 w-full h-[20rem] mb-8"
          />
          <div>
            <div className="text-3xl mb-4 font-medium ">{text.recruitment}</div>
            <div className="font-medium">{text.recruitmentDescription}</div>
          </div>
        </div>
        <div className="flex-1"></div> {/* 오른쪽 여백 (1/5) */}
      </div>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}
