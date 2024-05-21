"use client";

import React, { useState } from "react";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import Empty from "@/../../public/images/main/thumbnail2.png";

interface CardData {
  id: number;
  title: string;
  content: string;
  hashtags: string;
  author: string;
  type: '연재작' | '완결작';
}

const allCardsData: CardData[] = [
  { id: 1, title: '연재작#1', content: '작품 설명 1', hashtags: '#해시태그1 #해시태그2', author: '작가 1', type: '연재작' },
  { id: 2, title: '완결작#1', content: '작품 설명 2', hashtags: '#해시태그1 #해시태그2', author: '작가 2', type: '완결작' },
  { id: 3, title: '연재작#2', content: '작품 설명 3', hashtags: '#해시태그1 #해시태그2', author: '작가 3', type: '연재작' },
  { id: 4, title: '완결작#2', content: '작품 설명 4', hashtags: '#해시태그1 #해시태그2', author: '작가 4', type: '완결작' },
  { id: 5, title: '연재작#3', content: '작품 설명 5', hashtags: '#해시태그1 #해시태그2', author: '작가 5', type: '연재작' },
  { id: 6, title: '완결작#3', content: '작품 설명 6', hashtags: '#해시태그1 #해시태그2', author: '작가 6', type: '완결작' },
  { id: 7, title: '연재작#4', content: '작품 설명 7', hashtags: '#해시태그1 #해시태그2', author: '작가 7', type: '연재작' },
  { id: 8, title: '완결작#4', content: '작품 설명 8', hashtags: '#해시태그1 #해시태그2', author: '작가 8', type: '완결작' },
  { id: 9, title: '연재작#5', content: '작품 설명 1', hashtags: '#해시태그1 #해시태그2', author: '작가 1', type: '연재작' },
  { id: 10, title: '완결작#5', content: '작품 설명 2', hashtags: '#해시태그1 #해시태그2', author: '작가 2', type: '완결작' },
  { id: 11, title: '연재작#6', content: '작품 설명 3', hashtags: '#해시태그1 #해시태그2', author: '작가 3', type: '연재작' },
  { id: 12, title: '완결작#6', content: '작품 설명 4', hashtags: '#해시태그1 #해시태그2', author: '작가 4', type: '완결작' },
  { id: 13, title: '연재작#7', content: '작품 설명 5', hashtags: '#해시태그1 #해시태그2', author: '작가 5', type: '연재작' },
  { id: 14, title: '완결작#7', content: '작품 설명 6', hashtags: '#해시태그1 #해시태그2', author: '작가 6', type: '완결작' },
  { id: 15, title: '연재작#8', content: '작품 설명 7', hashtags: '#해시태그1 #해시태그2', author: '작가 7', type: '연재작' },
  { id: 16, title: '완결작#8', content: '작품 설명 8', hashtags: '#해시태그1 #해시태그2', author: '작가 8', type: '완결작' },
  { id: 17, title: '연재작#9', content: '작품 설명 1', hashtags: '#해시태그1 #해시태그2', author: '작가 1', type: '연재작' },
  { id: 18, title: '완결작#9', content: '작품 설명 2', hashtags: '#해시태그1 #해시태그2', author: '작가 2', type: '완결작' },
  { id: 19, title: '연재작#10', content: '작품 설명 3', hashtags: '#해시태그1 #해시태그2', author: '작가 3', type: '연재작' },
  { id: 20, title: '완결작#10', content: '작품 설명 4', hashtags: '#해시태그1 #해시태그2', author: '작가 4', type: '완결작' },
  { id: 21, title: '연재작#11', content: '작품 설명 5', hashtags: '#해시태그1 #해시태그2', author: '작가 5', type: '연재작' },
  { id: 22, title: '완결작#11', content: '작품 설명 6', hashtags: '#해시태그1 #해시태그2', author: '작가 6', type: '완결작' },
  { id: 23, title: '연재작#12', content: '작품 설명 7', hashtags: '#해시태그1 #해시태그2', author: '작가 7', type: '연재작' },
  { id: 24, title: '완결작#12', content: '작품 설명 8', hashtags: '#해시태그1 #해시태그2', author: '작가 8', type: '완결작' },
];

const HomePage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'연재작' | '완결작'>('연재작');

  const filteredCards = allCardsData.filter(card => card.type === selectedType);

  return (
    <RootLayout>
      <div className="main_image">
        {/* <Image width={100} height={50} layout="intrinsic" objectFit="cover" src={bg} width='5000' alt="bg" />
        <div className="main_image_text font-bold">대체 이미지 파일 요청</div> */}
      </div>

      <div className="text-sm sm:breadcrumbs" data-aos="fade-up">
        <ul className="ss:hidden">
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a>WEBTOON</a>
          </li>          
        </ul>
        <div className="text-4xl my-[4rem] font-medium">작품</div>
      </div>

      <div className="flex justify-center items-center mb-[3rem]">
        <button 
          className={`mr-4 text-2xl ${selectedType === '연재작' ? 'text-orange-700' : 'hover:text-orange-700'}`} 
          onClick={() => setSelectedType('연재작')}
        >
          연재작
        </button>
        <button 
          className={`text-2xl ${selectedType === '완결작' ? 'text-orange-700' : 'hover:text-orange-700'}`} 
          onClick={() => setSelectedType('완결작')}
        >
          완결작
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-[7.5rem]" data-aos="fade-up">
        {filteredCards.map((card) => (
          <div key={card.id} className="flex flex-col items-center mb-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg w-full">
              <Image 
                src={Empty} 
                alt="작품 이미지" 
                layout="responsive"
                width={250}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <div className="text-white font-bold text-lg mb-2">{card.title}</div>
                <div className="text-white text-sm mb-4">{card.content}</div>
                <button className="bg-transparent text-white px-4 py-2 rounded-full border border-white transition-all duration-300 hover:bg-white hover:text-black">
                  View +
                </button>
              </div>
            </div>
            <div className="text-lg font-medium mt-4">{card.title}</div>        
          </div>
        ))}
      </div>
    </RootLayout>
  );
};

export default HomePage;
