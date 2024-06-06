"use client";

import { useEffect, useState } from "react";
import RootLayout from "@/components/layout/root/RootLayout";
import { cardsData, Card } from "@/app/board/Data"; // 정확한 경로로 수정하세요.
import Link from "next/link";

const BoardPage: React.FC = () => {
  const [card, setCard] = useState<Card | null>(null);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const imageUrl = urlParams.get('image');
    const foundCard = cardsData.find(card => card.id === parseInt(id as string, 10));
    setCard(foundCard || null);
    setImage(imageUrl || null);
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
      <div className="main_image">
        {/* 추가 이미지 설정 */}
      </div>
      <div className="text-sm sm:breadcrumbs" data-aos="fade-up">
        <ul className="ss:hidden">
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a>NEWS</a>
          </li>
          <li>회사소식</li>
        </ul>        
      </div>

      <div className="text-4xl my-[1rem] font-medium text-center">{card.title}</div>
      <div className="text-center text-gray-500 mb-4">{card.date}</div>
      {image && (
        <div className="flex justify-center my-4">
          <div className="min-w-[200px] max-w-[15rem] min-h-[200px] max-h-[15rem]">
            <img src={image} alt="게시글 이미지" className="object-cover w-full h-full" />
          </div>
        </div>
      )}
      <div className="max-w-3xl mx-auto">
        <p className="text-lg">{card.content}</p>
      </div>

      <hr className="my-[2rem]" />

      <div className="flex justify-center items-center mb-[4rem]">
        <button className="btn btn-neutral w-[5rem] hover:bg-[#EE511F]">
          <Link href="news/announcements">목록</Link>
        </button>
      </div>

    </RootLayout>
  );
};

export default BoardPage;
