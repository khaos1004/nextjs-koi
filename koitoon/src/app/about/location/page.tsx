"use client";

import React, { useEffect, useContext } from "react";
import mainlo from "../../../../public/images/logo_웹툰코이컨텐츠(B)_한글.png";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import LanguageContext from "@/context/Language"
import {LocationComponent} from "@/components/contents/LangComponent"
import bg from "../../../../public/images/history_bg.jpg";
import laod from "../../../../public/images/laod.jpg";
import sub from "../../../../public/images/eBig_logo.png";

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
      content: '<a target="_blank" href="https://map.naver.com/p/entry/place/1303772060?c=18.98,0,0,0,dh" class="bounce"><div class="textMap bounce">툰코이</div></a>', // 여기에 회사 이름을 넣으세요.
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
  
        <div className="main_image">
          <Image src={bg} width='5000' alt="bg" />
          <div className="main_image_text font-bold">대체 이미지 파일 요청</div>
        </div>

        <div className="main_image">
          <Image src={sub} width='300' className="c items-center bg-center content-center ml-[32rem] my-9" alt="bg" />
          <div className="main_image_text font-bold col text-blue-900">대체 이미지 파일 요청</div>
          <div className="justify-center text-center my-2 text-5xl font-['Spoqa Han Sans Neo']"><h1><LocationComponent/></h1></div>
        </div>

        <div className="main_image justify-center items-center justify-items-center mt-8">
          <Image src={laod} width='1000' alt="bg" className="ml-[10rem]" />
          <div className="main_image_text font-bold">대체 이미지 파일 요청</div>
        </div>
    

      <div className="App w-[50rem] my-[3rem] ml-[16rem]">      
        <div data-aos="fade-up">       
            <NaverMap clientId={clientId} />              
        <dl className="flex bg-gray-200 items-center justify-center h-[4rem]">
            <dt>본사</dt>
            <dd className="flex text-xs">
                <p className="mx-2"><strong>ADDRESS.</strong>서울 마포구 잔다리로 30-11</p>
                <p className="mr-2"><strong>TEL.</strong>010-5682-4220</p>
                <p className="mr-2"><strong>EMAIL.</strong>dbcjdals@ToonKoi.com</p>
            </dd>
        </dl>
        </div>
      </div>
    </RootLayout>
  );
};

export default HomePage;
