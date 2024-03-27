"use client";

import React, { useEffect, useContext } from "react";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
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
        <div className="text-4xl my-[4rem] text-[#EE511F]">ABOUT US</div>
      </div>
    </RootLayout>
  );
};

export default HomePage;
