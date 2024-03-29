"use client";

import React, { useEffect, useContext } from "react";
import bg from "../../../../public/images/history_bg.jpg";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import LanguageContext from "@/context/Language";
import { LocationComponent } from "@/components/contents/LangComponent";
import too from "../../../../public/images/partner/파트너사_투믹스.png";
import dl from "../../../../public/images/partner/파트너사_DLsitecomipo.png";
import book from "../../../../public/images/partner/파트너사_bookcube.png";
import nhn from "../../../../public/images/partner/파트너사_nhn코미코.png";
import naver from "../../../../public/images/partner/파트너사_네이버시리즈.png";
import lala from "../../../../public/images/partner/파트너사_라라툰.webp";
import legin from "../../../../public/images/partner/파트너사_레진코믹스.png";
import ridy from "../../../../public/images/partner/파트너사_리디.png";
import ma from "../../../../public/images/partner/파트너사_마녀코믹스.jpg";
import me from "../../../../public/images/partner/파트너사_메타툰.png";
import bom from "../../../../public/images/partner/파트너사_봄툰.jpg";
import bookpal from "../../../../public/images/partner/파트너사_북팔.png";
import blue from "../../../../public/images/partner/파트너사_블루픽.png";
import any from "../../../../public/images/partner/파트너사_애니툰.png";
import every from "../../../../public/images/partner/파트너사_에브리웨이.png";
import orm from "../../../../public/images/partner/파트너사_오름미디어.png";
import one from "../../../../public/images/partner/파트너사_원스토리.png";
import onestore from "../../../../public/images/partner//파트너사_원스토어.jpg";
import wiz from "../../../../public/images/partner/파트너사_위즈덤하우스.jpg";
import kaka from "../../../../public/images/partner/파트너사_카카오페이지.png";
import tapas from "../../../../public/images/partner/파트너사_타파스.png";
import topco from "../../../../public/images/partner/파트너사_탑코.png";
import piner from "../../../../public/images/partner/파트너사_피너툰.png";
import sun from "../../../../public/images/partner/파트너사_해와달.png";

const HomePage: React.FC = () => {
  const clientId = "oygjgwg355"; // 네이버 지도 API 클라이언트 ID

  return (
    <RootLayout>
      <div className="main_image">
        {/* <Image width={100} height={50} layout="intrinsic" objectFit="cover" src={bg} width='5000' alt="bg" />
        <div className="main_image_text font-bold">대체 이미지 파일 요청</div> */}
      </div>

      <div className="text-sm breadcrumbs" data-aos="fade-up">
        <ul>
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>파트너사</li>
        </ul>
        <div className="text-4xl my-[4rem] font-medium">파트너사</div>
      </div>

      <div className="hidden ss:grid grid-cols-3 gap-4 mb-[7.5rem]" data-aos="fade-up">        
        {/* 각 파트너 로고를 여기에 배치합니다. 예시: */}
        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex flex-col justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={30}
              height={30}
              layout="intrinsic"
              objectFit="contain"
              src={too}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">투믹스</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="contain"
              src={dl}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">DLsite <br />comipo</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={book}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">북큐브</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={170}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={naver}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">네이버시리즈</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={40}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={lala}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">라라툰</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={70}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={legin}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">레진코믹스</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={ridy}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">리디</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={40}
              height={20}
              layout="intrinsic"
              objectFit="cover"
              src={ma}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">마녀코믹스</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={me}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">메타툰</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={bom}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">봄툰</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={bookpal}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">북팔</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={80}
              height={50}
              layout="contain"
              objectFit="cover"
              src={blue}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">블루픽</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={150}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={any}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">애니툰</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={180}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={every}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">에브리웨이</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={50}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={orm}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">오름미디어</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={one}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">원스토리</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={onestore}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">원스토어</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={wiz}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">위즈덤하우스</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={kaka}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">카카오페이지</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={tapas}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">타파스</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={150}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={topco}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">탑코</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={piner}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">피너툰</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={35}
              height={100}
              layout="contain"
              objectFit="contain"
              src={sun}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">해와달</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={120}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={nhn}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">nhn코미코</p>
        </div>
      </div>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


      <div className="ss:hidden grid grid-cols-3 gap-4 mb-[7.5rem]" data-aos="fade-up">        
        {/* 각 파트너 로고를 여기에 배치합니다. 예시: */}
        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex flex-col justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={85}
              height={30}
              layout="intrinsic"
              objectFit="contain"
              src={too}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">투믹스</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="contain"
              src={dl}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">DLsite comipo</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={book}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">북큐브</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={170}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={naver}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">네이버시리즈</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={85}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={lala}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">라라툰</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={140}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={legin}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">레진코믹스</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={120}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={ridy}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">리디</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={85}
              height={20}
              layout="intrinsic"
              objectFit="cover"
              src={ma}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">마녀코믹스</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={me}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">메타툰</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={bom}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">봄툰</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={bookpal}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">북팔</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={80}
              height={50}
              layout="contain"
              objectFit="cover"
              src={blue}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">블루픽</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={150}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={any}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">애니툰</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={180}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={every}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">에브리웨이</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={80}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={orm}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">오름미디어</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={one}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">원스토리</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={onestore}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">원스토어</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={wiz}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">위즈덤하우스</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={kaka}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">카카오페이지</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={tapas}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">타파스</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={150}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={topco}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">탑코</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={piner}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">피너툰</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={75}
              height={100}
              layout="contain"
              objectFit="contain"
              src={sun}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">해와달</p>
        </div>
        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 shadow-lg h-[120px] w-[300px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[100px]">
            <Image
              width={120}
              height={50}
              layout="intrinsic"
              objectFit="cover"
              src={nhn}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">nhn코미코</p>
        </div>
      </div>
    </RootLayout>
  );
};

export default HomePage;
