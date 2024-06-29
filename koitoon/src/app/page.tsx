"use client";

import Header from "@/components/public/header/Header";
import Side from "@/components/public/side/Side";
import Footer from "@/components/public/footer/Footer";
import { useEffect, useState, useContext } from "react";
import {
  LanguageProvider,
  default as LanguageContext,
} from "@/context/Language"; // 올바르게 import
import MainTop from "@/../../public/images/main/메인_배경.jpg";
import MainCenter from "@/../../public/images/main/메인_채용.jpg";
import Arrow from "@/../../public/images/main/free-icon-direction-arrow-4939761.png";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowR from "../../public/svg/arrowR";
import ArrowLong from "../../public/svg/arrowLong";
import useFont from "@/app/hooks/UseFont";
import {allCardsData} from "@/app/webtoon/Data"



const textContent = {
  KO: {
    leading: "웹툰 트렌드와 문화를 선도하고 작가와 독자를 연결하는",
    globalStudio: "글로벌 웹툰 제작사",
    goToWorks: "회사 소개",
    more: "MORE",
    recruit: "RECRUIT",
    recruitment: "직원채용",
    recruitmentDescription:
      "글로벌 웹툰을 만들어 나갈 실력있고 열정적인 인재들을 찾고 있습니다.",
  },
  EN: {
    leading:
      "Leading webtoon trends and culture, connecting authors and readers",
    globalStudio: "Global Webtoon Studio",
    goToWorks: "Company introduction",
    more: "MORE",
    recruit: "RECRUIT",
    recruitment: "Recruitment",
    recruitmentDescription:
      "We are looking for talented and passionate individuals to create global webtoons.",
  },
};

function HomePage() {
  const { language } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = allCardsData.length;

  useFont(); // 커스텀 훅 사용

  useEffect(() => {
    AOS.init(); // AOS 초기화
  }, []);

  const handleNext = () => {
    const isMobile = window.innerWidth < 768;
    const imagesPerSlide = isMobile ? 2 : window.innerWidth < 1024 ? 3 : 4;
    if (currentIndex + imagesPerSlide >= totalImages) {
      setCurrentIndex(totalImages - imagesPerSlide);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + imagesPerSlide);
    }
  };

  const handlePrev = () => {
    const isMobile = window.innerWidth < 768;
    const imagesPerSlide = isMobile ? 2 : window.innerWidth < 1024 ? 3 : 4;
    if (currentIndex - imagesPerSlide < 0) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - imagesPerSlide);
    }
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const imagesPerSlide = isMobile ? 2 : window.innerWidth < 1024 ? 3 : 4;

  const text = textContent[language];

  return (
    <>
    <div className="flex flex-col">
      <div className="h-16">
        <Header />
      </div>
      <Side />
      <div className="main_image relative w-full h-[35rem]" data-aos="fade-up">
        <div className="relative w-full h-full">
          <Image
            src={MainTop}
            alt="Main background"
            fill
            objectFit="cover"
            className="brightness-50 sm:object-cover object-contain"
          />
        </div>

        <div className="main_image_text absolute inset-0 flex flex-col justify-center items-center text-center">
          <div className="">
            <span className="font-thin text-left">{text.leading}</span>
            <span className="font-bold"> {text.globalStudio}</span>
          </div>
          <div className="text-5xl font-bold hidden sm:flex">
            WEBTOON&nbsp; <br className="" />{" "}
            <span className="te text-[#EE511F]">KOI CONTENT</span>
          </div>

          <div className="text-3xl font-bold hidden pad:flex">
            WEBTOON&nbsp; <br className="" />{" "}
            <span className="te text-[#EE511F]">KOI CONTENT</span>
          </div>

          <div className="hidden ss:flex text-2xl font-bold">
            WEBTOON
            <br className="" />{" "}
            <span className="te text-[#EE511F]">KOI CONTENT</span>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/about/company">
              <button className="btn text-white rounded-3xl sm:w-[10rem] hover:bg-[#EE511F] bg-inherit">
                {text.goToWorks} &nbsp; &nbsp; <ArrowR />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="flex flex-row min-h-screen w-screen my-[1rem] mb-[10rem]"
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
            <div className="font-medium flex justify-center items-center cursor-pointer">
              <Link href="/webtoon" className="flex">
                {text.more} &nbsp; <ArrowLong />
              </Link>
            </div>
          </div>
          <div className="grid ss:grid-cols-2 sm:grid-cols-4 pad:grid-cols-3 gap-8 mb-[2rem] ">
            {allCardsData
              .slice(currentIndex, currentIndex + imagesPerSlide)
              .map((card) => (
                <div key={card.id} className="flex flex-col items-center mb-8">
                  <div className="relative group overflow-hidden rounded-lg w-full h-[20rem]">
                    <Image
                      src={card.image}
                      alt="작품 이미지"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                      <div className="text-white font-semibold text-sm mb-2">
                        {card.hashtags}
                      </div>
                      <div className="text-white font-bold text-sm">
                        {card.author}
                      </div>
                      <div className="text-lg text-white">ㅡ</div>
                      <div className="text-white text-xs mb-4">
                        {card.content.length > 25
                          ? card.content.substring(0, 25) + "..."
                          : card.content}
                      </div>
                      <Link href={card.url} target="_blank">
                        <button className="bg-transparent text-white px-4 py-2 rounded-full border border-white transition-all duration-300 hover:bg-white hover:text-black">
                          View +
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="text-lg font-medium mt-4">{card.title}</div>
                </div>
              ))}
          </div>
          <div className="flex justify-center mt-8 items-center">
            <button
              onClick={handlePrev}
              className={`bg-white rounded-full hover:bg-gray-100 mr-4 stroke-1 stroke-[#BDBDBD] ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === 0}
            >
              {/* 이전 버튼 */}
              <svg
                className="h-8 w-8 m-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className={`bg-white rounded-full hover:bg-gray-100 ml-4 stroke-1 stroke-[#BDBDBD] ${
                currentIndex + imagesPerSlide >= totalImages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentIndex + imagesPerSlide >= totalImages}
            >
              {/* 다음 버튼 */}
              <svg
                className="h-8 w-8 m-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="flex text-center items-center justify-between mt-[7rem] mb-8">
            <div className="text-4xl ss:text-2xl font-bold">{text.recruit}</div>
            <div className="font-medium flex justify-center items-center cursor-pointer">
              <Link href="/news/recruitment" className="flex">
                {text.more} &nbsp; <ArrowLong />
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


<div className="flex flex-col">
      <div className="h-16">
        <Header />
      </div>
      <Side />
      <div className="main_image relative w-full h-[35rem]" data-aos="fade-up">
        <div className="relative w-full h-full">
          <Image
            src={MainTop}
            alt="Main background"
            fill
            objectFit="cover"
            className="brightness-50 sm:object-cover object-contain"
          />
        </div>

        <div className="main_image_text absolute inset-0 flex flex-col justify-center items-center text-center">
          <div className="">
            <span className="font-thin text-left">{text.leading}</span>
            <span className="font-bold"> {text.globalStudio}</span>
          </div>
          <div className="text-5xl font-bold hidden sm:flex">
            WEBTOON&nbsp; <br className="" />{" "}
            <span className="te text-[#EE511F]">KOI CONTENT</span>
          </div>

          <div className="text-3xl font-bold hidden pad:flex">
            WEBTOON&nbsp; <br className="" />{" "}
            <span className="te text-[#EE511F]">KOI CONTENT</span>
          </div>

          <div className="hidden ss:flex text-2xl font-bold">
            WEBTOON
            <br className="" />{" "}
            <span className="te text-[#EE511F]">KOI CONTENT</span>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/about/company">
              <button className="btn text-white rounded-3xl sm:w-[10rem] hover:bg-[#EE511F] bg-inherit">
                {text.goToWorks} &nbsp; &nbsp; <ArrowR />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="flex flex-row min-h-screen w-screen my-[1rem] mb-[10rem]"
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
            <div className="font-medium flex justify-center items-center cursor-pointer">
              <Link href="/webtoon" className="flex">
                {text.more} &nbsp; <ArrowLong />
              </Link>
            </div>
          </div>
          <div className="grid ss:grid-cols-2 sm:grid-cols-4 pad:grid-cols-3 gap-8 mb-[2rem] ">
            {allCardsData
              .slice(currentIndex, currentIndex + imagesPerSlide)
              .map((card) => (
                <div key={card.id} className="flex flex-col items-center mb-8">
                  <div className="relative group overflow-hidden rounded-lg w-full h-[20rem]">
                    <Image
                      src={card.image}
                      alt="작품 이미지"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                      <div className="text-white font-semibold text-sm mb-2">
                        {card.hashtags}
                      </div>
                      <div className="text-white font-bold text-sm">
                        {card.author}
                      </div>
                      <div className="text-lg text-white">ㅡ</div>
                      <div className="text-white text-xs mb-4">
                        {card.content.length > 25
                          ? card.content.substring(0, 25) + "..."
                          : card.content}
                      </div>
                      <Link href={card.url} target="_blank">
                        <button className="bg-transparent text-white px-4 py-2 rounded-full border border-white transition-all duration-300 hover:bg-white hover:text-black">
                          View +
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="text-lg font-medium mt-4">{card.title}</div>
                </div>
              ))}
          </div>
          <div className="flex justify-center mt-8 items-center">
            <button
              onClick={handlePrev}
              className={`bg-white rounded-full hover:bg-gray-100 mr-4 stroke-1 stroke-[#BDBDBD] ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === 0}
            >
              {/* 이전 버튼 */}
              <svg
                className="h-8 w-8 m-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className={`bg-white rounded-full hover:bg-gray-100 ml-4 stroke-1 stroke-[#BDBDBD] ${
                currentIndex + imagesPerSlide >= totalImages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentIndex + imagesPerSlide >= totalImages}
            >
              {/* 다음 버튼 */}
              <svg
                className="h-8 w-8 m-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="flex text-center items-center justify-between mt-[7rem] mb-8">
            <div className="text-4xl ss:text-2xl font-bold">{text.recruit}</div>
            <div className="font-medium flex justify-center items-center cursor-pointer">
              <Link href="/news/recruitment" className="flex">
                {text.more} &nbsp; <ArrowLong />
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


    <div className="flex flex-col">
      <div className="h-16">
        <Header />
      </div>
      <Side />
      <div className="main_image relative w-full h-[35rem]" data-aos="fade-up">
        <div className="relative w-full h-full">
          <Image
            src={MainTop}
            alt="Main background"
            fill
            objectFit="cover"
            className="brightness-50 sm:object-cover object-contain"
          />
        </div>

        <div className="main_image_text absolute inset-0 flex flex-col justify-center items-center text-center">
          <div className="">
            <span className="font-thin text-left">{text.leading}</span>
            <span className="font-bold"> {text.globalStudio}</span>
          </div>
          <div className="text-5xl font-bold hidden sm:flex">
            WEBTOON&nbsp; <br className="" />{" "}
            <span className="te text-[#EE511F]">KOI CONTENT</span>
          </div>

          <div className="text-3xl font-bold hidden pad:flex">
            WEBTOON&nbsp; <br className="" />{" "}
            <span className="te text-[#EE511F]">KOI CONTENT</span>
          </div>

          <div className="hidden ss:flex text-2xl font-bold">
            WEBTOON
            <br className="" />{" "}
            <span className="te text-[#EE511F]">KOI CONTENT</span>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/about/company">
              <button className="btn text-white rounded-3xl sm:w-[10rem] hover:bg-[#EE511F] bg-inherit">
                {text.goToWorks} &nbsp; &nbsp; <ArrowR />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="flex flex-row min-h-screen w-screen my-[1rem] mb-[10rem]"
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
            <div className="font-medium flex justify-center items-center cursor-pointer">
              <Link href="/webtoon" className="flex">
                {text.more} &nbsp; <ArrowLong />
              </Link>
            </div>
          </div>
          <div className="grid ss:grid-cols-2 sm:grid-cols-4 pad:grid-cols-3 gap-8 mb-[2rem] ">
            {allCardsData
              .slice(currentIndex, currentIndex + imagesPerSlide)
              .map((card) => (
                <div key={card.id} className="flex flex-col items-center mb-8">
                  <div className="relative group overflow-hidden rounded-lg w-full h-[20rem]">
                    <Image
                      src={card.image}
                      alt="작품 이미지"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                      <div className="text-white font-semibold text-sm mb-2">
                        {card.hashtags}
                      </div>
                      <div className="text-white font-bold text-sm">
                        {card.author}
                      </div>
                      <div className="text-lg text-white">ㅡ</div>
                      <div className="text-white text-xs mb-4">
                        {card.content.length > 25
                          ? card.content.substring(0, 25) + "..."
                          : card.content}
                      </div>
                      <Link href={card.url} target="_blank">
                        <button className="bg-transparent text-white px-4 py-2 rounded-full border border-white transition-all duration-300 hover:bg-white hover:text-black">
                          View +
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="text-lg font-medium mt-4">{card.title}</div>
                </div>
              ))}
          </div>
          <div className="flex justify-center mt-8 items-center">
            <button
              onClick={handlePrev}
              className={`bg-white rounded-full hover:bg-gray-100 mr-4 stroke-1 stroke-[#BDBDBD] ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === 0}
            >
              {/* 이전 버튼 */}
              <svg
                className="h-8 w-8 m-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className={`bg-white rounded-full hover:bg-gray-100 ml-4 stroke-1 stroke-[#BDBDBD] ${
                currentIndex + imagesPerSlide >= totalImages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentIndex + imagesPerSlide >= totalImages}
            >
              {/* 다음 버튼 */}
              <svg
                className="h-8 w-8 m-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="flex text-center items-center justify-between mt-[7rem] mb-8">
            <div className="text-4xl ss:text-2xl font-bold">{text.recruit}</div>
            <div className="font-medium flex justify-center items-center cursor-pointer">
              <Link href="/news/recruitment" className="flex">
                {text.more} &nbsp; <ArrowLong />
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
    </>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}