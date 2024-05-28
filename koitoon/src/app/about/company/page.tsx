"use client";

import React, {
  useEffect,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  createContext,
} from "react";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import Main from "@/../public/images/about/메인.jpg";
import Mid from "@/../public/images/about/Mask group.png";
import t1 from "@/../public/images/about/icon_about/content-creator.png";
import t2 from "@/../public/images/about/icon_about/worldwide.png";
import t3 from "@/../public/images/about/icon_about/planing.png";
// import Language from "@/context/Language";
import historybg from "@/../public/images/history_bg.jpg";
import laod from "@/../public/images/laod.jpg";
import bg from "../../../../public/images/history_bg.jpg";
import sub from "../../../../public/images/eBig_logo.png";
import Header from "@/components/public/header/Header";
import Side from "@/components/public/side/Side";
import Footer from "@/components/public/footer/Footer";

interface LanguageContextType {
  language: "KO" | "EN";
  setLanguage: Dispatch<SetStateAction<"KO" | "EN">>;
}

const Language = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = React.useState<"KO" | "EN">("KO");

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
          <div
            className="flex flex-row min-h-screen w-screen mt-[1rem]"
            data-aos="fade-up"
          >
            <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
            <div className="flex-3 w-4/6">
              {/* 중앙 컨텐츠 영역 (3/5) */}
              <div className="text-sm sm:breadcrumbs">
                <ul className="ss:hidden">
                  <li>
                    <a href="/">홈</a>
                  </li>
                  <li>
                    <a>ABOUT</a>
                  </li>
                  <li>회사소개</li>
                </ul>
                <div className="text-4xl my-[4rem] text-[#EE511F] font-bold ss:text-center">
                  ABOUT US
                </div>
              </div>
              <div className="flex">
                <div className="w-[40rem]">
                  <div className="text-left text-4xl w-auto">
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

                <div className="ml-4 flex w-[20rem]">
                  <Image
                    src={Main}
                    alt="ad"
                    className="w-[15rem] h-[15rem] rounded-full shadow-custom-up shadow-orange-500 min-w-[15rem] ml-8"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1"></div> {/* 오른쪽 여백 (1/5) */}
          </div>
        </div>
        {/* --------------------------------------------------------------- */}

        
        <div className="relative w-full h-[25rem] flex items-start justify-start bg-black">
      <Image src={Mid} alt="Company Background" layout="fill" className="object-cover" />
      
      {/* 좌측 상단 COMPANY PROFILE 섹션 */}
      <div className="absolute top-10 left- text-white">
        <div className="text-orange-600 text-2xl font-bold mb-6">COMPANY PROFILE</div>
        <div className="text-gray-300 space-y-4">
          <div>
            <span className="block text-gray-400">설립연도</span>
            <span className="text-lg">2015년 10월 02일</span>
          </div>
          <div>
            <span className="block text-gray-400">대표이사</span>
            <span className="text-lg">이준형 대표</span>
          </div>
          <div>
            <span className="block text-gray-400">본사위치</span>
            <span className="text-lg">서울시 마포구 잔다리로 30-11</span>
          </div>
        </div>
      </div>
      
      {/* 중앙에서 우측 하단 BUSINESS AREA 섹션 */}
      <div className="absolute bottom-10 right-10 text-white text-center">
        <div className="text-orange-600 text-2xl font-bold">BUSINESS AREA</div>
        <div className="flex justify-center mt-8 space-x-8">
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center rounded-full h-[3rem] w-[3rem] border border-orange-500 mb-2">
              <Image src={t1} alt="Content Creator" width={40} height={40} />
            </div>
            <div className="flex items-center">
              <span className="bg-orange-500 w-3 h-3 rounded-full mr-2"></span>
              <span className="font-bold text-xs">웹툰 콘텐츠 제작</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center rounded-full h-[3rem] w-[3rem] border border-orange-500 mb-2">
              <Image src={t2} alt="Worldwide" width={40} height={40} />
            </div>
            <div className="flex items-center">
              <span className="bg-orange-500 w-3 h-3 rounded-full mr-2"></span>
              <span className="font-bold text-xs">해외 유통</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center rounded-full h-[3rem] w-[3rem] border border-orange-500 mb-2">
              <Image src={t3} alt="AI Webtoon" width={40} height={40} />
            </div>
            <div className="flex items-center">
              <span className="bg-orange-500 w-3 h-3 rounded-full mr-2"></span>
              <span className="font-bold text-xs">
                AI웹툰 제작
                <br /> 기술 개발
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
        

        {/* -------------------------------------------------------------- */}
        <div className="flex flex-row min-h-screen w-screen my-[1rem] relative ">
          <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
          <div className="flex-3 w-4/6">
            {" "}
            {/* 중앙 컨텐츠 영역 (3/5) */}
            <div
              className="ju justify-center items-center text-center"
              data-aos="fade-up"
            >
              <div className="text-4xl my-[4rem] text-[#EE511F] font-bold">
                HISTORY
              </div>
            </div>
            {/* ---------------------------------------------------------------------------------------------- */}
            {/* ---------------------------------------------------------------------------------------------- */}
            <ul
              className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
              data-aos="fade-up"
            >
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
                  <time className="text-3xl text-orange-600">2024</time>
                  <div className="justify-start items-start text-left">                 
                  <span className="text-xl font-semibold mr-4">07월</span> 2차 저작물 업무 협약(에브리웨어/챗툰)<br /> 
                  <span className="text-xl font-semibold mr-4">05월</span> 국가공인기술평가 우수기업 인증<br />   
                  <span className="text-xl font-semibold mr-4">04월</span> 노블 코믹스 작품연재 계약 완료 및 런칭 예정<br />                                                                                    
                  </div>
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
                <div className="timeline-end mb-10 w-auto">
                  <time className="text-3xl text-orange-600">2023</time><br />
                  <span className="text-xl font-semibold mr-4">12월</span> <span className="text-orange-600">㈜웹툰코이컨텐츠 법인 설립</span><br />
                  <span className="text-xl font-semibold mr-4">10월</span> 비비온 JP 계약체결 및 일본 진출 (20작품)<br />
                  <span className="text-xl font-semibold mr-4">07월</span> 2차 저작물 업무 협약 (에브리웨이)<br />
                  <span className="text-xl font-semibold mr-4">05월</span> 국가공인기술평가 우수기업 인증<br />
                  <span className="text-xl font-semibold mr-4">04월</span> 노블코믹스 작품 연재 계약 완료 및 런칭 예정 (애니툰 노블코믹스/피너툰/해와달)<br />
                  <span className="text-xl font-semibold mr-4">02월</span> 오름미디어 US 계약체결 및 유럽 진출 (7작품)<br />

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
                <time className="text-3xl text-orange-600">2022</time><br />
                  <div className="justify-start items-start text-left">                
                  <span className="text-xl font-semibold mr-4">12월</span> 매출액 23억 돌파<br />  
                  <span className="text-xl font-semibold mr-4">11월</span> 블루픽 노블코믹스 작품 연재 계약 완료<br />
                  <span className="text-xl font-semibold mr-[3.75rem]"></span><span className="text-orange-600 ">㈜툰코이 법인 설립</span> <br />
                  <span className="text-xl font-semibold mr-4">07월</span> 연재 작품 90개 달성<br />
                  <span className="text-xl font-semibold mr-4">02월</span> 비비온 JP 계약체결 및 일본 진출 (11작품)<br />
                  <span className="text-xl font-semibold mr-4">01월</span> 레진 US 글로벌 계약 체결 (15작품)<br />

                  </div>
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
                  <time className="text-3xl text-orange-600">2021</time><br />
                  <span className="text-xl font-semibold mr-4">11월</span> 연재 작품 70개 달성<br />
                  <span className="text-xl font-semibold mr-4">07월</span> 코핀 US 글로벌 진출 (25작품)<br />
                  <span className="text-xl font-semibold mr-4">06월</span> 플랫폼 아튜브 MOU 체결<br />
                  
                  
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
                  <time className="text-3xl text-orange-600">2020</time><br />
                  <div className="justify-start items-start text-left">      
                  <span className="text-xl font-semibold mr-4">03월</span> 국내 10개 업체 서비스 자체 IP 컨텐츠 런칭<br />        
                  </div>          
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
                  <time className="text-3xl text-orange-600">2019</time><br />
                  <span className="text-xl font-semibold mr-4">10월</span> 연재 작품 50개 달성<br />
                  <span className="text-xl font-semibold mr-4">02월</span> 애니툰 작품 계약 완료 및 런칭<br />                  
                  
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
                  <time className="text-3xl text-orange-600">2018</time><br />
                  <div className="justify-start items-start text-left">      
                  <span className="text-xl font-semibold mr-4">05월</span> 매출액 10억 이상 돌파<br />               
                  </div>
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
                  <time className="text-3xl text-orange-600">2016</time><br />
                  <span className="text-xl font-semibold mr-4">12월</span> 정산금 7억 5천 달성<br />   
                  <span className="text-xl font-semibold mr-4">05월</span> 탑툰 작품 연재 계약 완료 및 런칭<br />                                
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
                  <time className="text-3xl text-orange-600">2015</time><br />
                  <div className="justify-start items-start text-left">                        
                  <span className="text-xl font-semibold mr-4">11월</span> 투믹스 12작품 연재 계약 완료 및 런칭<br />         
                  <span className="text-xl font-semibold mr-4">10월</span> <span className=" text-orange-600">웹툰코이컨텐츠 설립</span><br />
                  </div>        
                </div>
                
                
                <hr className="bg-orange-500" />                
              </li>     
              <li>
                <hr />                                        
              </li>         
            </ul>
            <div className="relative h-screen w-screen"></div>
          </div>
          <div className="flex-1"></div> {/* 오른쪽 여백 (1/5) */}
        </div>
        <div className="flex flex-col">
          <Footer />
        </div>

        {/* <div className="absolute top-10 left-10 bg-orange-500 rounded-full lg:h-[20rem] lg:w-[20rem] opacity-10 z-0 lg:mt-[145rem] lg:ml-[15rem] ss:mt-[95rem] ss:ml-[20rem]"></div>
        <div className="absolute top-10 left-10 bg-orange-600 rounded-full lg:h-[20rem] lg:w-[20rem] opacity-90 z-0 lg:mt-[95rem] lg:ml-[70rem] ss:mt-[95rem] ss:ml-[25 rem] overflow-hidden"></div> */}
      </LanguageProvider>
    </>
  );
};

export default HomePage;
