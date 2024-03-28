"use client";

import React, { useEffect, useContext } from "react";
import mainlo from "../../../../public/images/logo_웹툰코이컨텐츠(B)_한글.png";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import LanguageContext from "@/context/Language"
import {LocationComponent} from "@/components/contents/LangComponent"

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
      content: '<a target="_blank" href="https://map.naver.com/p/entry/place/1303772060?c=18.98,0,0,0,dh" className="bounce"><div className="textMap bounce">툰코이</div></a>', // 여기에 회사 이름을 넣으세요.
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
      

<div id="sticky-banner"  className="fixed top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
    <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <span className="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                    <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z"/>
                </svg>
                <span className="sr-only">Light bulb</span>
            </span>
            <span>New brand identity has been launched for the <a href="https://flowbite.com" className="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">Flowbite Library</a></span>
        </p>
    </div>
    <div className="flex items-center">
        <button data-dismiss-target="#sticky-banner" type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close banner</span>
        </button>
    </div>
</div>


    </RootLayout>
  );
};

export default HomePage;
