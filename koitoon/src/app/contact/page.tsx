"use client";

import React, { useState, useEffect, useContext } from "react";
import mainlo from "../../../../public/images/logo_웹툰코이컨텐츠(B)_한글.png";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import {
  LanguageProvider,
  default as LanguageContext,
} from "@/context/Language";
import EmailModal from "@/components/EmailModal";
import AOS from "aos";
import "aos/dist/aos.css";
import useFont from '@/app/hooks/UseFont';

const textContent = {
  KO: {
    breadcrumbs: ["홈", "CONTACT"],
    contact: "CONTACT",
    directions: "오시는 길",
    company: "(주)웹툰코이컨텐츠",
    address: "(04042) 서울특별시 마포구 잔다리로 30-11, 3층",
    businessInquiry: "비즈니스 문의",
    inquiryDetails:
      "아래 연락처 또는 이메일로 문의하시면 검토 후 빠른 시일 내 연락 드리겠습니다.",
    phone: "TEL : 02-2602-5250",
    email: "E-Mail : koicontent@koicontent.com",
    inquireButton: "문의하기",
    map:"웹툰코이컨텐츠"
  },
  EN: {
    breadcrumbs: ["Home", "CONTACT"],
    contact: "CONTACT",
    directions: "Directions",
    company: "Webtoon Koi Content Co. Ltd.",
    address: "3rd Floor, 30-11 Jandari-ro, Mapo-gu, Seoul, 04042, South Korea",
    businessInquiry: "Business Inquiry",
    inquiryDetails:
      "Please contact us via the phone number or email below. We will review your inquiry and get back to you as soon as possible.",
    phone: "TEL: 02-2602-5250",
    email: "E-Mail: koicontent@koicontent.com",
    inquireButton: "Inquire",
    map:"WebtoonKoiContents"
  },
};

declare global {
  interface Window {
    naver: any;
  }
}

interface NaverMapProps {
  clientId: string;
}

const HomePage: React.FC = () => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    AOS.init(); // AOS 초기화
  }, []);

  const text = textContent[language];
  console.log(text);
  const clientId = "56dbq7r4x6"; // 네이버 지도 API 클라이언트 ID
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const NaverMap: React.FC<NaverMapProps> = ({ clientId }) => {
    const initMap = () => {
      const mapCenter = new window.naver.maps.LatLng(37.551846, 126.9199291); // 지도의 중심 좌표 (회사 위치)
  
      // 지도 생성
      const map = new window.naver.maps.Map("map", {
        center: mapCenter,
        zoom: 15,
      });
  
      // 마커 생성
      const marker = new window.naver.maps.Marker({
        position: mapCenter,
        map: map,
      });
  
      // 정보 창 생성 및 설정
      const infoWindow = new window.naver.maps.InfoWindow({
        content:
          `<a target="_blank" href="https://map.naver.com/p/entry/place/1303772060?c=18.98,0,0,0,dh" class="bounce"><div class="textMap bounce">${text.map}</div></a>`, // 여기에 회사 이름을 넣으세요.
        anchorSize: new window.naver.maps.Size(0, 0),
      });
  
      // 정보 창을 마커에 바로 표시
      infoWindow.open(map, marker);
    };
  
    useEffect(() => {
      const script = document.createElement("script");
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
      script.addEventListener("load", initMap);
      document.head.appendChild(script);
    }, [clientId]);
  
    return <div id="map" style={{ width: "100%", height: "400px" }} />;
  };

  useFont(); // 커스텀 훅 사용

  return (
    <RootLayout>
      <div className="text-sm sm:breadcrumbs pad:breadcrumbs" data-aos="fade-up">
        <ul className="ss:hidden">
          {text.breadcrumbs.map((breadcrumb, index) => (
            <li key={index}>
              <a href="/">{breadcrumb}</a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="text-4xl my-[2rem] font-bold text-[#EE511F]"
        data-aos="fade-up"
      >
        {text.contact}
      </div>
      <div className="flex-row" data-aos="fade-up">
        <div className="text text-3xl font-bold">{text.directions}</div>
        <div className="mt-4 font-bold">{text.company}</div>
        <div className="mb-[2rem]">{text.address}</div>
      </div>

      <div className="App" data-aos="fade-up">
        <div data-aos="fade-up" className="z-1">
          <NaverMap clientId={clientId} />
        </div>
      </div>
      <hr className="my-[2rem]" />
      <div className="flex-row mb-[7rem]" data-aos="fade-up">
        <div className="text text-3xl font-bold">{text.businessInquiry}</div>
        <div className="my-4">{text.inquiryDetails}</div>
        <div className="">{text.phone}</div>
        <div className="">{text.email}</div>
        {/* <button
          className="btn my-8 rounded-3xl h-[2rem] bg-slate-900 text-white w-[7rem] hover:bg-orange-500"
          onClick={openModal}
        >
          {content.inquireButton}
        </button> */}
      </div>
      <EmailModal isOpen={isModalOpen} onClose={closeModal} />
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
