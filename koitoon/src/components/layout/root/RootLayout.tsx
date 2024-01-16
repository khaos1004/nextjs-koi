'use client'
import Header from "@/components/public/header/Header"
import Side from "@/components/public/side/Side"
import DaisySide from "@/components/public/side/DaisySide"
import Content from "@/components/public/contents/Content"
import Footer from "@/components/public/footer/Footer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import Slick from "@/components/contents/Slick";
import Slick2 from "@/components/contents/Sick2";
import Slick3 from "@/components/contents/Slick3";
import Slick4 from "@/components/contents/Slick4";
import We1 from '@/../../public/images/3.jpg'
import { motion } from 'framer-motion';
import '../../../app/aos.css';
import { useEffect } from "react";
import AOS from "aos";
import Language from "@/context/Language"
import { useContext, ReactNode, useState, Dispatch, SetStateAction } from "react"
import { user } from "@nextui-org/react"
import LanguageContext from "@/context/Language"
import LangComponent from "@/components/contents/LangComponent"

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

const RootLayout = ({children}:any) => {    
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    });

    const { language } = useContext(LanguageContext);
    const introText = intro[language]; // 언어에 따라 intro 객체에서 텍스트 가져오기

    return (
        <LanguageProvider>
        <div className="flex flex-col">
            <div className="h-16"> {/* 네비게이션 바 */}
                <Header />
            </div>
            <Side />      
            <div className="flex flex-row min-h-screen w-screen my-[1rem]">
                <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
                <div className="flex-3 w-4/6"> {/* 중앙 컨텐츠 영역 (3/5) */}
                    {children}                                                    
                </div>
                <div className="flex-1"></div> {/* 오른쪽 여백 (1/5) */}
            </div>                
        <Footer />
    </div>
    </LanguageProvider>
    )
}

export default RootLayout;
