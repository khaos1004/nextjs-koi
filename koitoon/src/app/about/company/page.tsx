"use client";

import React, {
  useEffect,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import Main from "@/../public/images/about/메인.jpg";
import Mid from "@/../public/images/about/Mask group.png";
import t1 from "@/../public/images/about/icon_about/content-creator.png";
import t2 from "@/../public/images/about/icon_about/worldwide.png";
import t3 from "@/../public/images/about/icon_about/planing.png";
import Language from "@/context/Language";
import historybg from "@/../public/images/history_bg.jpg";
import laod from "@/../public/images/laod.jpg";
import bg from "../../../../public/images/history_bg.jpg";
import sub from "../../../../public/images/eBig_logo.png";
import Header from "@/components/public/header/Header";
import Side from "@/components/public/side/Side";
import Footer from "@/components/public/footer/Footer";

interface LanguageProviderProps {
  children: ReactNode;
}

interface LanguageContextType {
  language: "KO" | "EN";
  setLanguage: Dispatch<SetStateAction<"KO" | "EN">>;
}

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>("KO");
  return (
    <Language.Provider value={{ language, setLanguage }}>
      {children}
    </Language.Provider>
  );
};

const HomePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 4; // 이미지 총 개수

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000); // 3초마다 이미지 변경
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <LanguageProvider>
        <div className="flex flex-col">
          <div className="h-16">
            <Header />
          </div>
          <Side />
          <div className="flex flex-row min-h-screen w-screen mt-[1rem]">
            <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
            <div className="flex-3 w-4/6">
              {" "}
              {/* 중앙 컨텐츠 영역 (3/5) */}
              <div className="text-sm breadcrumbs">
                <ul>
                  <li>
                    <a href="/">홈</a>
                  </li>
                  <li>
                    <a>ABOUT</a>
                  </li>
                  <li>회사소개</li>
                </ul>
                <div className="text-4xl my-[4rem] text-[#EE511F] font-bold">
                  ABOUT US
                </div>
              </div>
              <div className="flex">
                <div className="w-[40rem]">
                  <div className="text-left text-4xl w-[36rem]">
                    <span className="font-bold">웹툰 트렌드</span>
                    <span className="font-thin">와 </span>
                    <span className="font-bold">문화</span>
                    <span className="font-thin">를 선도하고 </span>
                    <span className="font-bold">작가와 독자</span>
                    <span className="font-thin">를</span>{" "}
                    <span className="font-bold">연결</span>
                    <span className="font-thin">하는 </span>
                    <span className="font-bold">글로벌 웹툰 제작사</span>
                  </div>
                  <div className="mt-12 w-[15rem]">
                    <span className="font-bold">웹툰코이컨텐츠</span>는 다양한
                    장르와 스토리로 독자들에게 맞춤형 콘텐츠를 제공하며,
                    작가들에게는 더 많은 창작 활동을 지원합니다.
                  </div>
                </div>

                <div className="ml-4">
                  <Image
                    src={Main}
                    alt="ad"
                    className="w-[20rem] h-[20rem] rounded-full shadow-custom-up shadow-orange-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1"></div> {/* 오른쪽 여백 (1/5) */}
          </div>
        </div>
        {/* --------------------------------------------------------------- */}

        <div className="flex flex-row">
          <div className="main_image">
            <Image src={Mid} alt="dsa" layout="" className="h-[25rem]" />
            <div className="main_image_text pr-[35rem] pb-[10rem] text-lg font-semibold ">
              <div className="text-orange-600">COMPANY PROFILE</div>
            </div>
            <div className="flex main_image_text">
              <div className="block dark:text-gray-800 text-gray-500 pr-[31rem] pb-[5rem]">
                <span>설립연도</span>{" "}
                <span className=" text-white ml-8">2015년 10월 02일</span>
              </div>
              {/* <div className="block text-sm text-white dark:text-gray-800 ml-2">
                2015년 10월 02일
              </div> */}
            </div>
            <div className="flex main_image_text">
              <div className="block dark:text-gray-800 text-gray-500 pr-[34rem] pb-[1rem]">
                <span>대표이사</span>{" "}
                <span className=" text-white ml-8">이준형 대표</span>
              </div>
              {/* <div className="block text-sm text-white dark:text-gray-800 ml-2">
                이준형 대표
              </div> */}
            </div>
            <div className="flex main_image_text">
              <div className="block dark:text-gray-800 text-gray-500 pr-[26rem] pt-[3.5rem]">
                <span>본사위치</span>{" "}
                <span className=" text-white ml-8">
                  서울시 마포구 잔다리로 30-11
                </span>
              </div>
            </div>
            <div className="main_image_text pl-[15rem] pt-[2rem] text-lg font-semibold ">
              <div className="text-orange-600">BUSINESS AREA</div>
            </div>

            <div className="main_image_text pl-[15rem] pt-[13rem] text-lg font-semibold flex">
            
              <div className="flex justify-center items-center rounded-full h-24 w-24 border border-orange-500 ml-[15rem] mr-8">
                <Image src={t1} alt="대체 텍스트" width={80} height={80} />
              </div>

              <div className="flex justify-center items-center rounded-full h-24 w-24 border border-orange-500 mr-8">
                <Image src={t2} alt="대체 텍스트" width={80} height={80} />
              </div>

              <div className="flex justify-center items-center rounded-full h-24 w-24 border border-orange-500">
                <Image src={t3} alt="대체 텍스트" width={80} height={80} />
              </div>
          
            </div>

            {/* <div className="main_image_text justify-center items-center content-center">
              <div className="text-left">
                <span className="">
                  
                </span>{" "}
                <span className="font-semibold">글로벌 웹툰 제작사</span>
              </div>
              <div className="text-5xl font-bold">
                WEBTOON <span className="te text-orange-700">KOI CONTENT</span>
              </div>
              <div className="flex justify-center mt-8">
                <button className="btn  text-white rounded-3xl w-[13rem] hover:bg-orange-500 bg-inherit">
                  작품 바로가기 &nbsp; &nbsp; &gt;{" "}
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* -------------------------------------------------------------- */}
        <div className="flex flex-row min-h-screen w-screen my-[1rem]">
          <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
          <div className="flex-3 w-4/6">
            {" "}
            {/* 중앙 컨텐츠 영역 (3/5) */}
            <div className="ju justify-center items-center text-center">
              <div className="text-4xl my-[4rem] text-[#EE511F] font-bold">
                HISTORY
              </div>
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="">1984</time>
                  <div className="">Firster</div>
                  The
                </div>
                <hr className="bg-orange-500" />
              </li>
              <li>
                <hr className="bg-orange-500" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">1998</time>
                  <div className="text-lg font-black">iMac</div>
                  iMac
                </div>
                <hr className="bg-orange-500" />
              </li>
              <li>
                <hr className="bg-orange-500" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="font-mono italic">2001</time>
                  <div className="text-lg font-black">iPod</div>
                  The
                </div>
                <hr className="bg-orange-500" />
              </li>
              <li>
                <hr className="bg-orange-500" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">2007</time>
                  <div className="text-lg font-black">iPhone</div>
                  iPhone
                </div>
                <hr className="bg-orange-500" />
              </li>
              <li>
                <hr className="bg-orange-500" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="font-mono italic">2015</time>
                  <div className="text-lg font-black">Apple Watch</div>
                  The App
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1"></div> {/* 오른쪽 여백 (1/5) */}
        </div>
        <div className="flex flex-col">
          <Footer />
        </div>
      </LanguageProvider>
    </>
  );
};

export default HomePage;
