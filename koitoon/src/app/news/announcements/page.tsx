"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import { cardsData, Card } from "@/app/board/Data"; // 정확한 경로로 수정하세요
import {
LanguageProvider,
  default as LanguageContext,
} from "@/context/Language"; // 올바르게 import
import useFont from '@/app/hooks/UseFont';

import AOS from "aos";
import "aos/dist/aos.css";

const textContent = {
  KO: {
    home: "홈",
    news: "NEWS",
    notice: "회사소식",
    sel1: "제목",
    sel2: "내용",
    sel3: "제목 + 내용",
    ready: "검색어를 입력해주세요",
    ing: "입력중",
    empty: "에 대한 검색 결과가 없습니다. 다른 키워드로 검색해보세요.",
    empty2: " 다른 키워드로 검색해보세요.",
  },
  EN: {
    home: "Home",
    news: "News",
    notice: "company news",
    sel1: "Title",
    sel2: "Content",
    sel3: "Title + Content",
    ready: "Please enter a search term",
    ing: "Entering",
    empty: "No search results for ",
    empty2: "Try searching with a different keyword.",
  },
};

const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init(); // AOS 초기화
  }, []);

  const [visibleCount, setVisibleCount] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilter, setSearchFilter] = useState("title");
  const [placeholder, setPlaceholder] = useState("검색어를 입력해주세요");
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const filteredCards = cardsData.filter((card) => {
    if (searchFilter === "title") {
      return card.title.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (searchFilter === "content") {
      return card.content.toLowerCase().includes(searchQuery.toLowerCase());
    } else {
      return (
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prevCount) =>
            Math.min(prevCount + 5, filteredCards.length)
          );
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [filteredCards.length]);

  const handleCardClick = (card: Card) => {
    window.location.href = `/board?id=${card.id}&image=${card.imageUrl}`;
  };

  const { language } = useContext(LanguageContext);
  const text = textContent[language];
  useFont(); // 커스텀 훅 사용

  return (
    <RootLayout>
      {/* PC 화면용 */}
      <div className="hidden sm:block pad:block">
        <div className="main_image">
          {/* <Image width={100} height={50} layout="intrinsic" objectFit="cover" src={bg} width='5000' alt="bg" />
          <div className="main_image_text font-bold">대체 이미지 파일 요청</div> */}
        </div>

        <div className="text-sm sm:breadcrumbs pad:breadcrumbs" data-aos="fade-up">
          <ul className="ss:hidden">
            <li>
              <a href="/">{text.home}</a>
            </li>
            <li>
              <a>{text.news}</a>
            </li>
            <li>{text.notice}</li>
          </ul>
          <div className="text-4xl my-[4rem] ss:text-center font-bold">
            {text.notice}
          </div>
        </div>
        <div className="flex mb-4" data-aos="fade-up">
          <select
            className="select select-ghost w-[10rem] max-w-xs mr-2 ss:w-[7rem] ss:text-[0.6rem] border border-gray-300"
            onChange={(e) => setSearchFilter(e.target.value)}
          >
            <option className="hover:bg-gray-500 " value="title">
              {text.sel1}
            </option>
            <option className="hover:bg-gray-500 " value="content">
              {text.sel2}
            </option>
            <option className="hover:bg-gray-500 " value="title+content">
              {text.sel3}
            </option>
          </select>
          <label className="input input-bordered flex items-center gap-2 w-[20rem]">
            <input
              type="text"
              className="grow ss:w-[6rem] ss:text-[0.5rem]"
              placeholder={placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setPlaceholder(text.ing)}
              onBlur={() => setPlaceholder(text.ready)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <hr className="my-[2rem]" />

        {filteredCards.length > 0 ? (
          filteredCards.slice(0, visibleCount).map((card) => (
            <div key={card.id} onClick={() => handleCardClick(card)}>
              <div className="flex mb-4 cursor-pointer" data-aos="fade-up">
              <div className="relative sm:h-[170px] sm:w-[350px] pad:h-[200px] pad:w-[500px]">
                  <Image src={card.imageUrl} alt={card.title} fill objectFit="cover"/>
                </div>
                <div className="w-3/4 p-4">
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                  <p className="mt-2">{card.content}</p>
                  <p className="mt-4 text-gray-500">{card.date}</p>
                </div>
              </div>
              <hr className="my-[2rem]" />
            </div>
          ))
        ) : (
          <div className="text-center mt-24">
            <p className="font-bold text-2xl">
              {language == "KO"
                ? "'" + searchQuery + "'" + text.empty
                : text.empty + "'" + searchQuery + "'"}
            </p>
            <p className="text-gray-400 mt-8">{text.empty2}</p>
          </div>
        )}
        <div ref={loadMoreRef} className="h-16"></div>
      </div>

      {/* 모바일 화면용 */}
      <div className="ss:block sm:hidden pad:hidden">
        <div className="main_image">
          {/* <Image width={100} height={50} layout="intrinsic" objectFit="cover" src={bg} width='5000' alt="bg" />
          <div className="main_image_text font-bold">대체 이미지 파일 요청</div> */}
        </div>

        <div className="text-sm sm:breadcrumbs pad:breadcrumbs" data-aos="fade-up">
          <ul className="ss:hidden">
            <li>
              <a href="/">{text.home}</a>
            </li>
            <li>
              <a>{text.news}</a>
            </li>
            <li>{text.notice}</li>
          </ul>
          <div className="text-4xl my-[4rem] ss:text-center font-bold">
            {text.notice}
          </div>
        </div>
        <div className="flex mb-4" data-aos="fade-up">
          <select
            className="select select-ghost w-[10rem] max-w-xs mr-2 ss:w-[7rem] ss:text-[0.6rem] border border-gray-300"
            onChange={(e) => setSearchFilter(e.target.value)}
          >
            <option className="hover:bg-gray-500 " value="title">
              {text.sel1}
            </option>
            <option className="hover:bg-gray-500 " value="content">
              {text.sel2}
            </option>
            <option className="hover:bg-gray-500 " value="title+content">
              {text.sel3}
            </option>
          </select>
          <label className="input input-bordered flex items-center gap-2 w-[20rem]">
            <input
              type="text"
              className="grow ss:w-[6rem] ss:text-[0.5rem]"
              placeholder={placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setPlaceholder(text.ing)}
              onBlur={() => setPlaceholder(text.ready)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <hr className="my-[2rem]" />

        {filteredCards.length > 0 ? (
          filteredCards.slice(0, visibleCount).map((card) => (
            <div key={card.id} onClick={() => handleCardClick(card)}>
              <div className="flex flex-col mb-4 cursor-pointer" data-aos="fade-up">
                <div className="relative w-full" style={{ height: "250px" }}>
                  <Image src={card.imageUrl} alt={card.title} fill objectFit="cover" />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                  <p className="mt-2">{card.content}</p>
                  <p className="mt-4 text-gray-500">{card.date}</p>
                </div>
              </div>
              <hr className="my-[2rem]" />
            </div>
          ))
        ) : (
          <div className="text-center mt-24">
            <p className="font-bold text-2xl">
              {language == "KO"
                ? "'" + searchQuery + "'" + text.empty
                : text.empty + "'" + searchQuery + "'"}
            </p>
            <p className="text-gray-400 mt-8">{text.empty2}</p>
          </div>
        )}
        <div ref={loadMoreRef} className="h-16"></div>
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
