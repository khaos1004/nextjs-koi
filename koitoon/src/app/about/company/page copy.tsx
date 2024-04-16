"use client";

import React, {
  useEffect,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import Main from "@/../public/images/about/메인.jpg";
import Mid from "@/../public/images/about/Mask group.png";
import Language from "@/context/Language";
import historybg from "@/../public/images/history_bg.jpg";
import laod from "@/../public/images/laod.jpg";
import bg from "../../../../public/images/history_bg.jpg";
import sub from "../../../../public/images/eBig_logo.png";
import Header from "@/components/public/header/Header";
import Side from "@/components/public/side/Side";
import Footer from "@/components/public/footer/Footer";
import MainTop from "@/../../public/images/main/메인_배경.jpg";

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
            {" "}
            {/* 네비게이션 바 */}
            <Header />
          </div>
          <Side />
          <div className="flex flex-row min-h-screen w-screen my-[1rem]">
            <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
            <div className="flex-3 w-4/6">
              {" "}
              {/* 중앙 컨텐츠 영역 (3/5) */}
              <div className="main_image">
                {/* <Image width={100} height={50} layout="intrinsic" objectFit="cover" src={bg} width='5000' alt="bg" />
              <div className="main_image_text font-bold">대체 이미지 파일 요청</div> */}
              </div>
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
                <div>
                  <div className="text-left text-4xl">
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
                  <div className="mt-12">
                    <span className="font-bold">웹툰코이컨텐츠</span>는 다양한
                    장르와 스토리로 독자들에게 맞춤형 콘텐츠를 제공하며,
                    작가들에게는 더 많은 창작 활동을 지원합니다.
                  </div>
                </div>
                <Image
                  src={Main}
                  alt="ad"
                  className="w-[30rem] h-[30rem] rounded-full mb-[10rem] shadow-custom-up shadow-orange-500"
                />
              </div>
              <div className="">
                <Image src={Mid} alt="dsa" className=" w-full" />
              </div>
              <div className="justify-center items-center text-center">
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
                    <time className="font-mono italic">1984</time>
                    <div className="text-lg font-black">
                      First Macintosh computer
                    </div>
                    The Apple Macintosh—later rebranded as the Macintosh 128K—is
                    the original Apple Macintosh personal computer. It played a
                    pivotal role in establishing desktop publishing as a general
                    office function. The motherboard, a 9 in (23 cm) CRT
                    monitor, and a floppy drive were housed in a beige case with
                    integrated carrying handle; it came with a keyboard and
                    single-button mouse.
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
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
                    iMac is a family of all-in-one Mac desktop computers
                    designed and built by Apple Inc. It has been the primary
                    part of Apple's consumer desktop offerings since its debut
                    in August 1998, and has evolved through seven distinct forms
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
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
                    The iPod is a discontinued series of portable media players
                    and multi-purpose mobile devices designed and marketed by
                    Apple Inc. The first version was released on October 23,
                    2001, about 8+1⁄2 months after the Macintosh version of
                    iTunes was released. Apple sold an estimated 450 million
                    iPod products as of 2022. Apple discontinued the iPod
                    product line on May 10, 2022. At over 20 years, the iPod
                    brand is the oldest to be discontinued by Apple
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
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
                    iPhone is a line of smartphones produced by Apple Inc. that
                    use Apple's own iOS mobile operating system. The
                    first-generation iPhone was announced by then-Apple CEO
                    Steve Jobs on January 9, 2007. Since then, Apple has
                    annually released new iPhone models and iOS updates. As of
                    November 1, 2018, more than 2.2 billion iPhones had been
                    sold. As of 2022, the iPhone accounts for 15.6% of global
                    smartphone market share
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
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
                    The Apple Watch is a line of smartwatches produced by Apple
                    Inc. It incorporates fitness tracking, health-oriented
                    capabilities, and wireless telecommunication, and integrates
                    with iOS and other Apple products and services
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1"></div> {/* 오른쪽 여백 (1/5) */}
          </div>
          <Footer />
        </div>
      </LanguageProvider>
    </>
  );
};

export default HomePage;
