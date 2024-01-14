'use client'

import React, { useEffect } from 'react';
import mainlo from "../../../../public/images/logo_웹툰코이컨텐츠(B)_한글.png"

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
        const mapCenter = new window.naver.maps.LatLng(37.5518460, 126.9199291); // 지도의 중심 좌표 (회사 위치)
    
        // 지도 생성
        const map = new window.naver.maps.Map('map', {
          center: mapCenter,
          zoom: 19
        });
    
    
       // 마커 생성
        const marker = new window.naver.maps.Marker({
            position: mapCenter,
            map: map
        });


        // 정보 창 생성 및 설정
        const infoWindow = new window.naver.maps.InfoWindow({
        content: '<div class="textMap">툰코이</div>', // 여기에 회사 이름을 넣으세요.
        anchorSize: new window.naver.maps.Size(0, 0)
        });
  
        // 정보 창을 마커에 바로 표시
        infoWindow.open(map, marker);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}&submodules=geocoder`;
    script.addEventListener('load', initMap);
    document.head.appendChild(script);
  }, [clientId]);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

const HomePage: React.FC = () => {
  const clientId = 'oygjgwg355'; // 네이버 지도 API 클라이언트 ID

  return (
    <div className="App w-[50rem] my-[15rem] mx-[30rem]">
      <NaverMap clientId={clientId} />
    </div>
  );
}

export default HomePage;
