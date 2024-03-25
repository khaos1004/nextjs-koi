"use client";

import React, { useEffect, useContext } from "react";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import historybg from "@/../public/images/history_bg.jpg"
import laod from "@/../public/images/laod.jpg"
import bg from "../../../../public/images/history_bg.jpg";
import sub from "../../../../public/images/eBig_logo.png";






const HomePage: React.FC = () => {
  const clientId = "oygjgwg355"; // 네이버 지도 API 클라이언트 ID

  return (
    <RootLayout>
       <div className="main_image">
          <Image src={bg} width='5000' alt="bg" />
          <div className="main_image_text font-bold">대체 이미지 파일 요청</div>
        </div>

        <div className="te text-center text-2xl my-8">연혁</div>
        <div className="main_image">
          
          <Image src={sub} width='300' className="c items-center bg-center content-center ml-[32rem] my-9" alt="bg" />          
          <div className="main_image_text text-black">대체 이미지 파일 요청</div>        
        </div>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic">2000</time>
      <div className="text-lg font-black">메인제목 무엇으로 채울까요</div>
      설명이 들어갑니다 무엇으로 채울까요
    </div>
    <hr/>
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">2002</time>
      <div className="text-lg font-black">메인제목 무엇으로 채울까요</div>
      설명이 들어갑니다 무엇으로 채울까요
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic">2014</time>
      <div className="text-lg font-black">메인제목 무엇으로 채울까요</div>
      설명이 들어갑니다 무엇으로 채울까요
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">2024</time>
      <div className="text-lg font-black">메인제목 무엇으로 채울까요</div>
      설명이 들어갑니다 무엇으로 채울까요
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic">2024</time>
      <div className="text-lg font-black">메인제목 무엇으로 채울까요</div>
      설명이 들어갑니다 무엇으로 채울까요
    </div>
  </li>
</ul>
    </RootLayout>
  );
};

export default HomePage;
