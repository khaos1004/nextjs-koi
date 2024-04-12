"use client";

import React, { useEffect, useContext } from "react";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import Main from "@/../public/images/about/메인.jpg";
import Mid from "@/../public/images/about/Mask group.png";
import historybg from "@/../public/images/history_bg.jpg";
import laod from "@/../public/images/laod.jpg";
import bg from "../../../../public/images/history_bg.jpg";
import sub from "../../../../public/images/eBig_logo.png";

const HomePage: React.FC = () => {
  const clientId = "oygjgwg355"; // 네이버 지도 API 클라이언트 ID

  return (
    <RootLayout>
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
        <div className="text-4xl my-[4rem] text-[#EE511F] font-bold">ABOUT US</div>
      </div>
      <div className="flex">
        <div>
          <div className="a text-left text-4xl">
            <span className=""><span className="font-semibold">웹툰 트렌드</span>와 
            <span className="font-semibold"></span>문화</span>를 선도하고 
            <span className="font-semibold">작가와 독자</span>를 <span className="font-semibold">연결</span>
            하는<span className="font-semibold">글로벌 웹툰 제작사</span>
          </div>
          <div className="mt-12"><span className="font-semibold">웹툰코이컨텐츠</span>는 다양한 장르와 스토리로 독자들에게 맞춤형 콘텐츠를 제공하며, 작가들에게는 더 많은 창작 활동을 지원합니다.</div>
        </div>
        <Image src={Main} alt='ad' className="w-[30rem] h-[30rem] rounded-full mb-[10rem] shadow-custom-up shadow-orange-500" />
      </div>

      <div className="relative ">
        <Image src={Mid} alt='dsa' className="absolute w-full"/>
      </div>

      


    </RootLayout>
  );
};

export default HomePage;
