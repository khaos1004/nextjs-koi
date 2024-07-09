"use client";

import React, { useState, useContext, useEffect } from "react";
import RootLayout from "@/components/layout/root/RootLayout";
import {
  LanguageProvider,
  default as LanguageContext,
} from "@/context/Language";
import useFont from "@/app/hooks/UseFont";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { allCardsData } from "@/app/webtoon/Data";

interface CardData {
  id: number;
  image: any;
  url: any;
  title: string;
  content: string;
  hashtags: string;
  author: string;
  startDate: string;
  type: "연재작" | "완결작";
}

const textContent = {
  KO: {
    type1: "연재작",
    type2: "완결작",
    home: "홈",
    work: "작품",
  },
  EN: {
    type1: "Serial Work",
    type2: "A Completed Work",
    home: "Home",
    work: "WORK",
  },
};

const HomePage: React.FC = () => {
  const { language } = useContext(LanguageContext);
  useFont(); // 커스텀 훅 사용

  useEffect(() => {
    AOS.init(); // AOS 초기화
  }, []);

  const text = textContent[language];

  const [selectedType, setSelectedType] = useState<"연재작" | "완결작">("연재작");
  const [filteredCards, setFilteredCards] = useState<CardData[]>([]);

  useEffect(() => {
    const sortedCards = allCardsData
      .filter((card) => card.type === selectedType && isValidDate(card.startDate))
      .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
    setFilteredCards(sortedCards);
  }, [selectedType]);

  const isValidDate = (dateString: string) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  };

  return (
    <RootLayout>
      <div className="main_image"></div>

      <div className="text-sm sm:breadcrumbs pad:breadcrumbs">
        <ul className="hidden sm:flex pad:flex">
          <li>
            <a href="/">{text.home}</a>
          </li>
          <li>
            <a>WEBTOON</a>
          </li>
        </ul>
        <div
            className="font-bold text-[40px] mt-[4rem] mb-[1rem] ss:text-center"
            style={{ lineHeight: "1.6" }}
          >{text.work}</div>
      </div>

      <div className="flex justify-center items-center mb-[3rem]">
        <button
          className={`mr-4 text-2xl font-bold  ${
            selectedType === "연재작" ? "text-[#EE511F]" : "hover:text-[#EE511F] opacity-30"
          }`}
          onClick={() => setSelectedType("연재작")}
        >
          {text.type1}
        </button>
        <button
          className={`text-2xl font-bold ${
            selectedType === "완결작" ? "text-[#EE511F]" : "hover:text-[#EE511F] opacity-30"
          }`}
          onClick={() => setSelectedType("완결작")}
        >
          {text.type2}
        </button>
      </div>

      <div className="grid ss:grid-cols-2 sm:grid-cols-4 pad:grid-cols-3 gap-4 ss:gap-2 sm:gap-5 pad:gap-5 mb-[7.5rem]">
        {filteredCards.map((card) => (
          <div key={card.id} className="flex flex-col items-center mb-8">
            <div className="relative group overflow-hidden rounded-lg w-full" style={{ paddingBottom: "130%" }}>
              <Image
                src={card.image}
                alt="작품 이미지"
                layout="fill"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <div className="text-white font-semibold text-sm mb-2 ss:text-[10px]">
                  {card.hashtags}
                </div>
                <div className="text-white font-bold text-sm ss:text-[7px]">
                  {card.author}
                </div>
                <div className="text-lg ss:text-xs text-white">ㅡ</div>
                <div className="text-white text-xs mb-4 ss:mb-0 ss:font-thin ss:text-[7px]">
                  {card.content.length > 20 ? card.content.substring(0, 20) + "..." : card.content}
                </div>
                <Link href={card.url} target="_blank">
                  <button className="ss:text-[8px] ss:min-w-[3rem] min-w-[5rem] bg-transparent text-white ss:px-1 px-4 ss:py-1 py-2 rounded-full border border-white transition-all duration-300 hover:bg-white hover:text-black">
                    View +
                  </button>
                </Link>
              </div>
            </div>
            <div className="text-lg font-medium mt-4 ss:text-sm font-korean">{card.title}</div>
          </div>
        ))}
      </div>
    </RootLayout>
  );
};

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}
