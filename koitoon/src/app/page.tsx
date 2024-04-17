'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Header from "@/components/public/header/Header"
import Side from "@/components/public/side/Side"
import Footer from "@/components/public/footer/Footer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Language from "@/context/Language"
import { useEffect, useContext, ReactNode, useState, Dispatch, SetStateAction } from "react"
import LanguageContext from "@/context/Language"
import MainTop from "@/../../public/images/main/메인_배경.jpg"
import MainCenter from "@/../../public/images/main/메인_채용.jpg"
import Empty from "@/../../public/images/main/thumbnail2.png"
import Arrow from "@/../../public/images/main/free-icon-direction-arrow-4939761.png"
import Image from "next/image";

const images = [
  // 여기에 이미지 경로를 배열로 넣어주세요
  '<Empty>',
  '/path/to/your/image2.jpg',
  '/path/to/your/image3.jpg',
  '/path/to/your/image4.jpg',
];


interface LanguageProviderProps {
  children: ReactNode;
}

interface LanguageContextType {
  language: 'KO' | 'EN';
  setLanguage: Dispatch<SetStateAction<'KO' | 'EN'>>;
}

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>('KO');
  return (
      <Language.Provider value={{ language, setLanguage }}>
          {children}
      </Language.Provider>
  );
};

type lang = {
  KO: string,
  EN: string
};



const intro: any = {
  KO: "툰코이'은 한국에서 개발된 웹툰 플랫폼입니다. 이 플랫폼은 다양한 장르의 웹툰을 제공하며 한국의 웹툰 시장에서 주목받고 있는 서비스 중 하나입니다. 코이툰은 사용자 친화적인 인터페이스와 독특한 콘텐츠로 인기를 얻고 있으며 한국뿐만 아니라 해외에서도 사용자들에게 접근하고 있습니다. 이 플랫폼은 신진 작가들에게 작품을 게시할 기회를 제공함으로써 다양한 스토리와 예술 스타일을 선보이고 있습니다. 웹툰은 디지털 만화의 한 형태로 스크롤하여 읽을 수 있는 형식이 특징이며, 코이툰은 이러한 현대적인 만화 소비 방식을 잘 반영하고 있습니다.",
  EN: "ToonKoi is a webtoon platform developed in Korea. The platform provides various genres of webtoons, and it is one of the services that is receiving attention in the Korean webtoon market. Koitoon is gaining popularity for its user-friendly interface and unique content, and it is reaching users not only in Korea but also abroad. The platform presents a variety of stories and art styles by providing opportunities for up-and-coming writers to post their works. Webtoons are a form of digital cartoons, featuring a format that can be read by scrolling, and Koitoon well reflects this modern way of spending cartoons."
};

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
    <>
      <LanguageProvider>
            <div className="flex flex-col">
                <div className="h-16"> {/* 네비게이션 바 */}
                    <Header />
                </div>     
                <Side />   
                <div className="main_image" data-aos="fade-up">
                  <Image src={MainTop} alt="aa" className="brightness-50 w-full h-[25rem] " />  
                  <div className="main_image_text justify-center items-center content-center">
                    <div className="text-center">
                      <span className="">웹툰 트렌드와 문화를 선도하고 작가와 독자를 연결하는</span> <span className="font-semibold">글로벌 웹툰 제작사</span>
                    </div>
                    <div className="text-5xl font-bold">WEBTOON <span className="te text-orange-700">KOI CONTENT</span></div>
                    <div className="flex justify-center mt-8"><button className="btn  text-white rounded-3xl w-[13rem] hover:bg-orange-500 bg-inherit">작품 바로가기 &nbsp; &nbsp; &gt; </button></div>
                  </div>                  
                </div>    
                <div className="flex flex-row min-h-screen w-screen my-[1rem]" data-aos="fade-up">
                    <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
                    <div className="flex-3 w-4/6"> {/* 중앙 컨텐츠 영역 (3/5) */}


                      <div className="flex text-center items-center justify-between ">
                      {/* <a href="https://www.flaticon.com/kr/free-icons/" title="방향 아이콘">방향 아이콘 제작자: Andy Horvath - Flaticon</a> */}
                        <div className="text-4xl my-[4rem] font-bold">WEBTOON</div>
                        <div className="font-medium flex justify-center items-center hover:text-orange-600 cursor-pointer">MORE &nbsp; <Image src={Arrow} alt="sa" className="h-[1.5rem] w-[1.5rem]" /></div>
                      </div>

                      <div className="flex space-x-4 overflow-hidden shadow-2xl">
                        <Image src={Empty} alt="Thumbnail" className="w-1/4 shadow-2xl" />
                        
                        <Image src={Empty} alt="Thumbnail" className="w-1/4 shadow-2xl" />
                        <Image src={Empty} alt="Thumbnail" className="w-1/4 shadow-2xl" />
                        <Image src={Empty} alt="Thumbnail" className="w-1/4 shadow-2xl" />
                      </div>
                      <div className="flex justify-center mt-8 items-center">

                        <button
                            className=" bg-white rounded-full shadow-md hover:bg-gray-100 mr-4">
                            {/* 이전 버튼 */}
                            <svg className="h-8 w-8 m-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M15 19l-7-7 7-7"></path>
                            </svg>
                          </button>

                        <button
                          className=" bg-white rounded-full shadow-md hover:bg-gray-100 ml-4">
                          {/* 다음 버튼 */}
                          <svg className="h-8 w-8 m-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 5l7 7-7 7"></path>
                          </svg>
                        </button>
                        
                      </div>

                     

                      <div className="flex text-center items-center justify-between mt-[4rem] mb-8">
                        <div className="text-4xl font-bold">RECRUIT</div>
                        <div className="font-medium flex justify-center items-center hover:text-orange-600 cursor-pointer">MORE &nbsp; <Image src={Arrow} alt="sa" className="h-[1.5rem] w-[1.5rem]" /></div>
                      </div>
                      <Image src={MainCenter} alt="aa" className="brightness-50 w-full h-[20rem] mb-8" />  

                      <div className="">
                        <div className="text-3xl mb-4 font-medium">지원채용</div>
                        <div className="font-medium">글로벌 웹툰을 만들어 나갈 실력있고 열정적인 인재들을 찾고 있습니다.</div>
                      </div>

                    </div>
                    <div className="flex-1"></div> {/* 오른쪽 여백 (1/5) */}
                </div>
                <Footer />
            </div>
        </LanguageProvider>
    </>
  );
}
