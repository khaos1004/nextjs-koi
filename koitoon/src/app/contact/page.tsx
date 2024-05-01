"use client";

import React, { useEffect, useContext } from "react";
import mainlo from "../../../../public/images/logo_웹툰코이컨텐츠(B)_한글.png";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import LanguageContext from "@/context/Language";
import { LocationComponent } from "@/components/contents/LangComponent";

declare global {
  interface Window {
    naver: any;
  }
}

interface NaverMapProps {
  clientId: string;
}

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
        '<a target="_blank" href="https://map.naver.com/p/entry/place/1303772060?c=18.98,0,0,0,dh" class="bounce"><div class="textMap bounce">툰코이</div></a>', // 여기에 회사 이름을 넣으세요.
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

const HomePage: React.FC = () => {
  const clientId = "oygjgwg355"; // 네이버 지도 API 클라이언트 ID

  return (
    <RootLayout>
      <div className="text-sm breadcrumbs hidden lg:flex" data-aos="fade-up">
        <ul className="">
          <li>
            <a href="/">홈</a>
          </li>
          <li>CONTACT</li>
        </ul>        
      </div>
      <div className="text-4xl my-[2rem] font-medium text-orange-500" data-aos="fade-up">CONTACT</div>
      <div className="flex-row" data-aos="fade-up">
        <div className="text text-3xl">오시는 길</div>
        <div className="mt-8 font-bold">(주)웹툰코이컨텐츠</div>
        <div className="mb-[2rem]">(04042) 서울특별시 마포구 잔다리로 30-11, 3층</div>
      </div>      

      <div className="App" data-aos="fade-up">
        <div data-aos="fade-up">
          <NaverMap clientId={clientId} />
          {/* <dl className="flex bg-gray-200 items-center justify-center h-[4rem]">
            <dt>본사</dt>
            <dd className="flex text-xs">
              <p className="mx-2">
                <strong>ADDRESS.</strong>서울 마포구 잔다리로 30-11
              </p>
              <p className="mr-2">
                <strong>TEL.</strong>010-5682-4220
              </p>
              <p className="mr-2">
                <strong>EMAIL.</strong>dbcjdals@ToonKoi.com
              </p>
            </dd>
          </dl> */}
        </div>
      </div>
      <hr className="my-[2rem]" />
      <div className="flex-row mb-[5rem]" data-aos="fade-up">
        <div className="text text-3xl">비즈니스 문의</div>
        <div className="my-4">아래 연락처 또는 이메일로 문의하시면 검토 후 빠른 시일 내 연락 드리겠습니다.</div>
        <div className="">TEL : 02-2602-5250</div>
        <div className="">E-Mail : koicontent@koicontent.com</div>
        <button className="btn my-8 rounded-3xl h-[2rem] bg-slate-900 text-white w-[7rem] hover:bg-orange-500">문의하기</button>
      </div>  
    </RootLayout>
  );
};

export default HomePage;
