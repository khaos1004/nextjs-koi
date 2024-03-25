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

        <div className="te text-center text-2xl my-8">회사소개</div>
        <div className="main_image">
          
          <Image src={sub} width='300' className="c items-center bg-center content-center ml-[31rem] my-9" alt="bg" />          
          <div className="main_image_text text-black">대체 이미지 파일 요청</div>        
        </div>
        <div className="te text-center text-2xl my-8">툰코이</div>
        <div className="te text-center my-8 text-xl">웹소설과 웹툰을 제작·유통하고, 확보된 IP를 기반으로 영화·드라마·게임·뮤지컬 등 다양한 분야로 확장해 나가고 있는 콘텐츠 전문 기업입니다.</div>
        <hr className=" bg-slate-600"/>

        <div className="main_image my-8">
          <div className="bg-auto bg-no-repeat bg-center"></div>
          <div className="main_image_text font-bold">대체 이미지 파일 요청</div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl my-8">
        <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">WEBNOVEL BUSINESS</h2>
          <p>로맨스, 로맨스 판타지, BL, 판타지, 무협을 중심으로 다양한 웹소설 콘텐츠를 기획·생산하여 국내·외 플랫폼에 유통하는 등 원작 IP를 기반으로 한 콘텐츠 사업을 관리합니다.
강력한 작가 네트워크 및 웹소설 전문 PD 육성, 관리체계 구축으로 최고의 매니지먼트 서비스를 제공하며 작품의 퀄리티를 높입니다.</p>          
        </div>
      </div>
      <hr className=" bg-slate-600"/>
      <div className="card lg:card-side bg-base-100 shadow-xl my-8">
        <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">WEBTOON BUSINESS</h2>
          <p>로맨스, 로맨스 판타지, BL, 판타지, 무협을 중심으로 다양한 웹소설 콘텐츠를 기획·생산하여 국내·외 플랫폼에 유통하는 등 원작 IP를 기반으로 한 콘텐츠 사업을 관리합니다.
강력한 작가 네트워크 및 웹소설 전문 PD 육성, 관리체계 구축으로 최고의 매니지먼트 서비스를 제공하며 작품의 퀄리티를 높입니다.</p>        
        </div>
      </div>
      <hr className=" bg-slate-600"/>
      <div className="card lg:card-side bg-base-100 shadow-xl my-8">
        <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" width={300} height={300} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">
ASP, B2B BUSINESS</h2>
          <p>로맨스, 로맨스 판타지, BL, 판타지, 무협을 중심으로 다양한 웹소설 콘텐츠를 기획·생산하여 국내·외 플랫폼에 유통하는 등 원작 IP를 기반으로 한 콘텐츠 사업을 관리합니다.
강력한 작가 네트워크 및 웹소설 전문 PD 육성, 관리체계 구축으로 최고의 매니지먼트 서비스를 제공하며 작품의 퀄리티를 높입니다.</p>          
        </div>
      </div>
      <hr className=" bg-slate-600"/>

    </RootLayout>
  );
};

export default HomePage;
