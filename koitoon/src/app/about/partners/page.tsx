"use client";

import React, { useEffect, useContext } from "react";
import bg from "../../../../public/images/history_bg.jpg";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import LanguageContext from "@/context/Language"
import {LocationComponent} from "@/components/contents/LangComponent"






const HomePage: React.FC = () => {
  const clientId = "oygjgwg355"; // 네이버 지도 API 클라이언트 ID

  return (
    <RootLayout>
      <div className="main_image">
        <Image src={bg} width='5000' alt="bg" />
        <div className="main_image_text font-bold">대체 이미지 파일 요청</div>
      </div>

      <div>어떤사이트를 참고 할까요?</div>
    </RootLayout>
  );
};

export default HomePage;
