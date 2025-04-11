"use client";

import { useEffect, useState, useContext } from "react";
import RootLayout from "@/components/layout/root/RootLayout";
import { cardsData, Card } from "@/app/board/Data"; // 정확한 경로로 수정하세요.
import Link from "next/link";
import {
  LanguageProvider,
  default as LanguageContext,
} from "@/context/Language"; // 올바르게 import

import AOS from "aos";
import "aos/dist/aos.css";
import useFont from '@/app/hooks/UseFont';
import Image from "next/image";

const textContent = {
  KO: {
    home: "홈",
    news:"NEWS",
    notice:"회사소식",
    sel1: "목록",
    sel2:"내용",
    sel3:"제목 + 내용",
    ready:"검색어를 입력해주세요",    
    ing:"입력중",
    empty:"에 대한 검색 결과가 없습니다. 다른 키워드로 검색해보세요.",
    empty2:" 다른 키워드로 검색해보세요."
  },
  EN: {
    home: "Home",
    news:"News",
    notice:"company news",
    sel1: "List",
    sel2:"Content",
    sel3:"Title + Content",
    ready:"Please enter a search term",    
    ing:"Entering",    
    empty:"No search results for ",
    empty2:"Try searching with a different keyword."
  },
};

const BoardPage: React.FC = () => {
  const [card, setCard] = useState<Card | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const { language } = useContext(LanguageContext);
  const text = textContent[language];
  useFont(); // 커스텀 훅 사용

  useEffect(() => {
    AOS.init(); // AOS 초기화
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const imageUrl = urlParams.get("image");
    const foundCard = cardsData.find(
      (card) => card.id === parseInt(id as string, 10)
    );
    setCard(foundCard || null);
    setImage(imageUrl || null);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('body *');
    elements.forEach((element) => {
      // 텍스트 컨텐츠에서 HTML 주석과 공백 문자를 제거
      const textContent = (element.textContent?.replace(/<!--.*?-->/g, '').trim()) || '';
      if (/^[\x00-\x7F]*$/.test(textContent)) {
        element.classList.add('font-english');
      } else {
        element.classList.add('font-korean');
      }
    });
  }, []);

  if (!card) {
    return (
      <RootLayout>
        <div className="text-center mt-24">
          <p className="font-bold text-2xl">해당 기사를 찾을 수 없습니다.</p>
          <p className="text-gray-400 mt-8">다른 기사를 선택해주세요.</p>
        </div>
      </RootLayout>
    );
  }


  

  
  return (
    <RootLayout>
      <div className="main_image">{/* 추가 이미지 설정 */}</div>
      <div className="text-sm sm:breadcrumbs" data-aos="fade-up">
        <ul className="ss:hidden">
          <li>
            <a href="/">{text.home}</a>
          </li>
          <li>
            <a>{text.news}</a>
          </li>
          <li>{text.notice}</li>
        </ul>
      </div>

      <div className="text-4xl my-[1rem] font-medium text-center">
        {card.title}
      </div>
      <div className="text-center text-gray-500 mb-4">{card.date}</div>
      {image && (
        <div className="flex justify-center my-4">
          <div className="min-w-[200px] max-w-[15rem] min-h-[200px] max-h-[15rem]">
            <Image
              src={image}
              alt="게시글 이미지"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      )}
      <div className="max-w-3xl mx-auto">
        <p className="text-lg">{card.content}</p>
      </div>

      <hr className="my-[2rem]" />

      <div className="flex justify-center items-center mb-[4rem]">
        <button className="btn btn-neutral w-[5rem] hover:bg-[#EE511F]">
          <Link href="/news/announcements">{text.sel1}</Link>
        </button>
      </div>
    </RootLayout>
  );
};

export default function Home() {
  return (
    <LanguageProvider>
      <BoardPage />
    </LanguageProvider>
  );
}
