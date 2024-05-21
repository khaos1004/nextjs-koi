"use client";

import React, { useEffect, useState, useRef } from "react";
import bg from "../../../../public/images/history_bg.jpg";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import LanguageContext from "@/context/Language";
import { LocationComponent } from "@/components/contents/LangComponent";
import Empty from "@/../../public/images/main/thumbnail2.png";

// 카드 데이터 배열
const cardsData = [
  { id: 1, title: '제목 1', content: '본문 1' },
  { id: 2, title: '제목 2', content: '본문 2' },
  { id: 3, title: '제목 3', content: '본문 3' },
  { id: 4, title: '제목 4', content: '본문 4' },
  { id: 5, title: '제목 5', content: '본문 5' },
  { id: 6, title: '제목 6', content: '본문 6' },
  { id: 7, title: '제목 7', content: '본문 7' },
  { id: 8, title: '제목 8', content: '본문 8' },
  { id: 9, title: '제목 9', content: '본문 9' },
  { id: 10, title: '제목 10', content: '본문 10' },
];

const HomePage: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilter, setSearchFilter] = useState('title');
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prevCount) => Math.min(prevCount + 5, filteredCards.length));
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
  }, []);

  const filteredCards = cardsData.filter((card) => {
    if (searchFilter === 'title') {
      return card.title.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (searchFilter === 'content') {
      return card.content.toLowerCase().includes(searchQuery.toLowerCase());
    } else {
      return card.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
             card.content.toLowerCase().includes(searchQuery.toLowerCase());
    }
  });

  return (
    <RootLayout>
      <div className="main_image">
        {/* <Image width={100} height={50} layout="intrinsic" objectFit="cover" src={bg} width='5000' alt="bg" />
        <div className="main_image_text font-bold">대체 이미지 파일 요청</div> */}
      </div>

      <div className="text-sm breadcrumbs" data-aos="fade-up">
        <ul>
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a>NEWS</a>
          </li>
          <li>회사소식</li>
        </ul>
        <div className="text-4xl my-[4rem] font-medium">회사소식</div>
      </div>
      <div className="flex">

        
        <select 
          className="select select-ghost w-[10rem] max-w-xs mr-2"
          onChange={(e) => setSearchFilter(e.target.value)}
        >
          <option className="hover:bg-gray-500 " value="title">제목</option>
          <option className="hover:bg-gray-500 " value="content">내용</option>
          <option className="hover:bg-gray-500 " value="title+content">제목 + 내용</option>
        </select>
        <label className="input input-bordered flex items-center gap-2 w-[20rem]">
          <input
            type="text"
            className="grow"
            placeholder="검색어를 입력해주세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
          <div key={card.id}>
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <Image src={Empty} alt="aa" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.content}</p>
              </div>
            </div>
            <hr className="my-[2rem]" />
          </div>
        ))
      ) : (
        <div className="text-center mt-24">
          <p className="font-bold text-2xl">'{searchQuery}'에 대한 검색 결과가 없습니다.</p>
          <p className="text-gray-400 mt-8">다른 키워드로 검색해보세요.</p>
        </div>
      )}
      <div ref={loadMoreRef} className="h-16"></div>
   
      <hr className="my-[2rem]" />
    </RootLayout>
  );
};

export default HomePage;
