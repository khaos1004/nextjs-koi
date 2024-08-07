"use client";

import React, { useEffect, useContext } from "react";
import bg from "../../../../public/images/history_bg.jpg";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import {
  LanguageProvider,
  default as LanguageContext,
} from "@/context/Language"; // 올바르게 import
import AOS from "aos";
import "aos/dist/aos.css";
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
import useFont from "@/app/hooks/UseFont";

const textContent = {
  KO: {
    home: "홈",
    about: "ABOUT",
    partner: "파트너사",
  },
  EN: {
    home: "Home",
    about: "About",
    partner: "Partner Company",
  },
};

const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init(); // AOS 초기화
  }, []);
  const { language } = useContext(LanguageContext);

  const text = textContent[language];
  useFont(); // 커스텀 훅 사용

  useEffect(() => {
    const elements = document.querySelectorAll('body *');
    elements.forEach((element) => {
      // 텍스트 컨텐츠에서 HTML 주석과 공백 문자를 제거
      const textContent = (element.textContent?.replace(/<!--.*?-->/g, '').trim()) || '';
      if (/^[\x00-\x7F]*$/.test(textContent)) {
        element.classList.add('font-english');
      } else {
        element.classList.add('font-korean');
      }
    });
  }, []);

  return (
    <RootLayout>
      <div
        className="text-sm sm:breadcrumbs pad:breadcrumbs"
        data-aos="fade-up"
      >
        <ul className="hidden sm:flex pad:flex">
          <li>
            <a href="/">{text.home}</a>
          </li>
          <li>
            <a>{text.about}</a>
          </li>
          <li>{text.partner}</li>
        </ul>
        <div
            className="font-bold text-[40px] mt-[4rem] mb-[1rem] ss:text-center"
            style={{ lineHeight: "1.6" }}
          >
          {text.partner}
        </div>
      </div>
      <div
        className="hidden ss:grid grid-cols-2 gap-4 mb-[7.5rem]"
        data-aos="fade-up"
      >
        {/* 각 파트너 로고를 여기에 배치합니다. 예시: */}

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={ridy}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">리디</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={170}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={naver}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">네이버시리즈</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={kaka}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">카카오페이지</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={bom}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">봄툰</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[100px] w-[50px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={70}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={nhn}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">nhn comico</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={150}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={topco}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">탑코/탑툰</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="contain"
              src={dl}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">
            DLsite <br />
            comipo
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={180}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={every}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">에브리웨이</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={piner}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">피너툰</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 rounded-lg flex flex-col justify-center items-center ss:h-[50px] ss:w-[95px]">
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
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={70}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={legin}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">레진코믹스</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={wiz}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">위즈덤하우스</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
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
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={tapas}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">타파스</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={one}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">원스토리</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={35}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={lala}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">라라툰</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={me}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">메타툰</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={80}
              height={50}
              layout="contain"
              style={{ objectFit: "cover" }}
              src={blue}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">블루픽</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={bookpal}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">북팔</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={50}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={orm}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">오름미디어</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={onestore}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">원스토어</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={book}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">북큐브</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={35}
              height={20}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={ma}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">마녀코믹스</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={150}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={any}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">애니툰</p>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div
        className="hidden sm:grid grid-cols-4 gap-1 mb-[7.5rem]"
        data-aos="fade-up"
      >
        {/* 각 파트너 로고를 여기에 배치합니다. 예시: */}

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={120}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={ridy}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">리디</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={170}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={naver}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">네이버시리즈</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={kaka}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">카카오페이지</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={bom}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">봄툰</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={nhn}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">nhn코미코</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={150}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={topco}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">탑코/탑툰</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
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
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={180}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={every}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">에브리웨이</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={piner}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">피너툰</p>
        </div>

        <div className="flex flex-col items-center mb-[1rem]">
          <div className="p-4 h-[80px] w-[210px] rounded-lg flex flex-col justify-center items-center ss:h-[50px] ss:w-[95px] border border-gray-300">
            {" "}
            {/* 테두리 추가 */}
            <Image
              width={50}
              height={50}
              layout="intrinsic"
              objectFit="contain"
              src={too}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">투믹스</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={140}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={legin}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">레진코믹스</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={wiz}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">위즈덤하우스</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={50}
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
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={tapas}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">타파스</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={one}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">원스토리</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={55}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={lala}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">라라툰</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={me}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">메타툰</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={80}
              height={50}
              layout="contain"
              style={{ objectFit: "cover" }}
              src={blue}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">블루픽</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={bookpal}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">북팔</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={80}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={orm}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">오름미디어</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={onestore}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">원스토어</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={book}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">북큐브</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={55}
              height={20}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={ma}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">마녀코믹스</p>
        </div>

        <div className="flex flex-col items-center mb-[2rem]">
          <div className="p-4 border border-gray-300 h-[80px] w-[210px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={150}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={any}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">애니툰</p>
        </div>
      </div>

      {/* ////////////////pad//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div
        className="hidden pad:grid grid-cols-3 gap-4 mb-[7.5rem]"
        data-aos="fade-up"
      >
        {/* 각 파트너 로고를 여기에 배치합니다. 예시: */}

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={ridy}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">리디</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={170}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={naver}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">네이버시리즈</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={kaka}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">카카오페이지</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={bom}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">봄툰</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={110}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={nhn}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">nhn comico</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={150}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={topco}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">탑코/탑툰</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              objectFit="contain"
              src={dl}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">
            DLsite <br />
            comipo
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={180}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={every}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">에브리웨이</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={piner}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">피너툰</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex flex-col justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={50}
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
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={90}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={legin}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">레진코믹스</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={wiz}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">위즈덤하우스</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
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
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={100}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={tapas}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">타파스</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={one}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">원스토리</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={35}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={lala}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">라라툰</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={me}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">메타툰</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={80}
              height={50}
              layout="contain"
              style={{ objectFit: "cover" }}
              src={blue}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">블루픽</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={bookpal}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">북팔</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={50}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={orm}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">오름미디어</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={onestore}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">원스토어</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={190}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={book}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">북큐브</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={35}
              height={20}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={ma}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">마녀코믹스</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-4 border border-gray-300 h-[80px] w-[165px] rounded-lg flex justify-center items-center ss:h-[50px] ss:w-[95px]">
            <Image
              width={150}
              height={50}
              layout="intrinsic"
              style={{ objectFit: "cover" }}
              src={any}
              alt="Partner Logo 1"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">애니툰</p>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
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
