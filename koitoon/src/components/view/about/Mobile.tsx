"use client";

import React, { useEffect, useContext } from "react";
import Image from "next/image";
import Main from "../../../../public/images/about/메인.jpg";
import Mid from "@/../public/images/about/Mask group.png";
import t1 from "@/../public/images/about/icon_about/content-creator.png";
import t2 from "@/../public/images/about/icon_about/worldwide.png";
import t3 from "@/../public/images/about/icon_about/planing.png";
import MainAbout from "@/../public/images/about/mainabout.jpg";
import Header from "@/components/public/header/Header";
import Footer from "@/components/public/footer/Footer";
import {
  LanguageProvider,
  default as LanguageContext,
} from "@/context/Language";
import AOS from "aos";
import "aos/dist/aos.css";
import useFont from "@/app/hooks/UseFont";
import { textContent } from "./Data";

const HomePage: React.FC = () => {
  const { language } = useContext(LanguageContext);
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

  useEffect(() => {
    AOS.init(); // AOS 초기화
  }, []);

  const text: any = textContent[language];
  return (
    <>
      <div className="flex flex-col">
        <div className="h-16">
          <Header />
        </div>      
        <div
          className="flex flex-row w-screen mt-[1rem]"
          data-aos="fade-up"
        >
          <div className="flex-0"></div>
          {/* 왼쪽 여백 (1/5) */}
          <div className="mx-5">
            {/* 중앙 컨텐츠 영역 (3/5) */}
            <div className="text-sm sm:breadcrumbs pad:breadcrumbs">
              <ul className="ss:hidden">
                <li>
                  <a href="/">{text.home}</a>
                </li>
                <li>
                  <a>{text.about}</a>
                </li>
                <li>{text.companyIntro}</li>
              </ul>
              <div className="text-4xl mt-[4rem] mb-[2rem] text-[#EE511F] font-bold ss:text-center">
                {text.aboutUs}
              </div>
            </div>
            <div className="flex text-left items-start justify-start">
              <div className="w-full max-w-[35rem] my-[2rem]">
                <div className="sm:text-left sm:text-4xl pad:text-left pad:text-2xl ss:text-xl ss:text-center w-auto leading-snug font-semibold">
                  <div className="mb-4">
                    <span className="font-bold">
                      {text.webtoonTrend}{" "}
                      <span
                        className={`font-medium ${
                          language === "EN" ? "hidden" : ""
                        }`}
                      >
                        {" "}
                        와
                      </span>
                    </span>
                    <span className="font-bold">{text.culture}</span>
                    <span className="font-thin">{text.leading}</span>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold">
                      {text.connecting}
                      <span
                        className={`font-medium ${
                          language === "EN" ? "hidden" : ""
                        }`}
                      >
                        {" "}
                        하는
                      </span>
                    </span>
                  </div>
                  <span className="font-bold">{text.globalWebtoon}</span>
                </div>
                <div className="w-full ss:flex justify-center my-8 hidden">
                  <Image
                    src={Main}
                    alt="ad"
                    className="h-[20rem] object-contain"
                  />
                </div>
                <span className="hidden text-3xl mt-4 ss:felx">ㅡ</span>
                <div className="mt-8">
                  <span className="font-bold">{text.webtoonKoiContent}</span>
                  {text.description}
                </div>
              </div>
              <div className="sm:ml-[5rem] sm:mt-[-4rem] min-w-auto hidden sm:flex pad:flex">
                <Image
                  src={MainAbout}
                  alt="ad"
                  className="rounded-full sm:w-[40rem] pad:w-[40rem]"
                />
              </div>
            </div>
          </div>
          <div className="flex-1"></div> {/* 오른쪽 여백 (1/5) */}
        </div>
      </div>

      {/* --------------------------------------------------------------- */}

      {/* <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">HISTORY</h1>
      <div className="relative">
        {events.map((event, index) => (
          <div key={index} className="mb-8 flex items-center">
            <div className="w-1/2 pr-8 text-right">
              {event.items.map((item, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-lg font-semibold">{item.date}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="w-1/2 pl-8 relative flex justify-center">
              <div className="bg-orange-500 text-white p-4 rounded-full w-24 h-24 flex items-center justify-center">
                <h2 className="text-2xl font-bold">{event.year}</h2>
              </div>
            </div>
            {index < events.length - 1 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </div> */}

      {/* ------------모바일--------------------------------------------------- */}

      <div className="flex relative w-full h-auto flex-col items-center justify-center bg-black py-8">
        <Image
          src={Mid}
          alt="Company Background"
          fill
          className="object-cover absolute inset-0 w-full h-full opacity-50"
        />
        <div className="relative z-10 w-full max-w-md mx-auto px-4 text-white">
          <div className="relative z-10 w-full max-w-lg mx-auto px-6 text-white">
            {/* COMPANY PROFILE 섹션 */}
            <div className="text-center mb-12">
              <div className="text-orange-600 text-2xl font-bold mb-6">
                {text.companyProfile}
              </div>
              <div className="text-gray-300 space-y-4">
                <div>
                  <span className="block text-gray-400 text-sm">
                    {text.founded}
                  </span>
                  <span className="text-lg">{text.foundedDate}</span>
                </div>
                <div>
                  <span className="block text-gray-400 text-sm">
                    {text.ceo}
                  </span>
                  <span className="text-lg">{text.ceoName}</span>
                </div>
                <div>
                  <span className="block text-gray-400 text-sm">
                    {text.headquarters}
                  </span>
                  <span className="text-lg">{text.headquartersAddress}</span>
                </div>
              </div>
            </div>

            {/* BUSINESS AREA 섹션 */}
            <div className="text-center">
              <div className="text-orange-600 text-2xl font-bold mb-6">
                {text.businessArea}
              </div>
              <div className="space-y-8">
                <div className="flex justify-center space-x-8">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center rounded-full h-16 w-16 border border-orange-500">
                      <Image
                        src={t1}
                        alt="Content Creator"
                        width={50}
                        height={40}
                      />
                    </div>
                    <div className={`flex text-sm mt-2 relative ${
                          language === "EN" ? "items-start" : "items-center"
                        }`}>
                      <span
                        className={`bg-orange-500 w-3 h-3 rounded-full  ${
                          language === "EN" ? "w-3.4 mt-1 absolute ml-1" : "mr-1"
                        }`}
                        style={{ marginBottom: "-0.25rem" }}
                      ></span>
                      <span className="font-bold">{text.webtoonCreation}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center rounded-full h-16 w-16 border border-orange-500">
                      <Image src={t2} alt="Worldwide" width={60} height={40} />
                    </div>
                    <div className={`flex text-sm mt-2 relative ${
                          language === "EN" ? "items-start " : "items-center"
                        }`}>
                      <span
                        className={`bg-orange-500 w-3 h-3 rounded-full  ${
                          language === "EN" ? "w-3 mt-1 absolute ml-4" : "mr-1"
                        }`}
                        style={{ marginBottom: "-0.25rem" }}
                      ></span>
                      <span className="font-bold ">
                        {text.globalDistribution}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center rounded-full h-16 w-16 border border-orange-500">
                      <Image src={t3} alt="AI Webtoon" width={50} height={32} />
                    </div>
                    <div className={`flex text-sm mt-2 relative ${
                          language === "EN" ? "items-start " : "items-center"
                        }`}>
                      <span
                        className={`bg-orange-500 w-3 h-3 rounded-full  ${
                          language === "EN" ? "w-3.4 mt-1 absolute ml-6" : "mr-1"
                        }`}
                        style={{ marginBottom: "-0.25rem" }}
                      ></span>
                      <span className="font-bold text-center">
                        {text.aiWebtoon}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 모바일  */}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      <div className="flex flex-row min-h-screen w-screen my-[1rem] relative ">
        <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
        <div className="flex-3 w-4/6">
          {/* 중앙 컨텐츠 영역 (3/5) */}
          <div
            className="justify-center items-center text-center"
            data-aos="fade-up"
          >
            <div className="text-4xl my-[4rem] text-[#EE511F] font-bold">
              {text.history}
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------------- */}
          <ul className="timeline timeline-compact timeline-snap-icon max-sm:timeline-compact timeline-vertical flex">
            {/* 2024 */}
            <li className="h-[25rem]">
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EA3323"
                  className="h-5 w-5"
                >
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <span className="flex timeline-end sm:text-end mb-[23rem] items-center">
                <div className="text-2xl font-bold text-black ml-2">
                  {text.historyData[0].year}
                </div>
              </span>
              <span
                className={`timeline-end sm:text-start mr-8 text-left text-sm ${
                  language == "EN" ? "mb-[7rem]" : "mb-[10rem]"
                }`}
              >
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[0].events[0].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[0].events[0].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[0].events[1].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[0].events[1].event}
                  </div>
                </div>
              </span>
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
            </li>

            {/* 2023 */}
            <li className="h-[45rem]">
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EA3323"
                  className="h-5 w-5"
                >
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <span className="flex timeline-end sm:text-end mb-[43rem] items-center">
                <div className="text-2xl font-bold text-black ml-2">
                  {text.historyData[1].year}
                </div>
              </span>
              <span
                className={`timeline-end sm:text-start mr-8 text-left text-sm ${
                  language == "EN" ? "mb-[10rem]" : "mb-[17rem]"
                }`}
              >
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[1].events[0].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[1].events[0].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[1].events[1].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[1].events[1].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[1].events[2].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[1].events[2].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[1].events[3].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[1].events[3].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[1].events[4].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[1].events[4].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[1].events[5].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[1].events[5].event}
                  </div>
                </div>
              </span>
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
            </li>

            {/* 2022 */}
            <li className="h-[30rem]">
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EA3323"
                  className="h-5 w-5"
                >
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <span className="flex timeline-end sm:text-end mb-[28rem] items-center">
                <div className="text-2xl font-bold text-black ml-2">
                  {text.historyData[2].year}
                </div>
              </span>
              <span
                className={`timeline-end sm:text-start mr-8 text-left text-sm ${
                  language == "EN" ? "mb-[4rem]" : "mb-[9.7rem]"
                }`}
              >
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[2].events[0].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[2].events[0].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[2].events[1].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[2].events[1].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">                    
                  </div>
                  <div className="flex-1 text-orange-600 ml-[2.5rem]">
                    {text.historyData[2].events[2].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[2].events[3].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[2].events[3].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[2].events[4].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[2].events[4].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[2].events[5].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[2].events[5].event}
                  </div>
                </div>
              </span>
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
            </li>

            {/* 2021 */}
            <li className="h-[20rem]">
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EA3323"
                  className="h-5 w-5"
                >
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <span className="flex timeline-end sm:text-end mb-[18rem] items-center">
                <div className="text-2xl font-bold text-black ml-2">
                  {text.historyData[3].year}
                </div>
              </span>
              <span
                className={`timeline-end sm:text-start mr-8 text-left text-sm ${
                  language == "EN" ? "mb-[6rem]" : "mb-[7rem]"
                }`}
              >
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[3].events[0].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[3].events[0].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[3].events[1].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[3].events[1].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[3].events[2].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[3].events[2].event}
                  </div>
                </div>
              </span>
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
            </li>

            {/* 2020 */}
            <li className="h-[15rem]">
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EA3323"
                  className="h-5 w-5"
                >
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <span className="flex timeline-end sm:text-end mb-[13rem] items-center">
                <div className="text-2xl font-bold text-black ml-2">
                  {text.historyData[4].year}
                </div>
              </span>
              <span
                className={`timeline-end sm:text-start mr-8 text-left text-sm ${
                  language == "EN" ? "mb-[4rem]" : "mb-[5rem]"
                }`}
              >
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[4].events[0].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[4].events[0].event}
                  </div>
                </div>
              </span>
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
            </li>

            {/* 2019 */}
            <li className="h-[15rem]">
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EA3323"
                  className="h-5 w-5"
                >
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <span className="flex timeline-end sm:text-end mb-[13rem] items-center">
                <div className="text-2xl font-bold text-black ml-2">
                  {text.historyData[5].year}
                </div>
              </span>
              <span
                className={`timeline-end sm:text-start mr-8 text-left text-sm ${
                  language == "EN" ? "mb-[4.2rem]" : "mb-[5rem]"
                }`}
              >
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[5].events[0].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[5].events[0].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[5].events[1].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[5].events[1].event}
                  </div>
                </div>
              </span>
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
            </li>

            {/* 2018 */}
            <li className="h-[8rem]">
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EA3323"
                  className="h-5 w-5"
                >
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <span className="flex timeline-end sm:text-end mb-[6.2rem] items-center">
                <div className="text-2xl font-bold text-black ml-2">
                  {text.historyData[6].year}
                </div>
              </span>
              <span className="timeline-end sm:text-start mr-8 text-left text-sm mb-[-0.8rem]">
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[6].events[0].month}
                  </div>
                  <div className="flex-1 items-center">
                    {text.historyData[6].events[0].event}
                  </div>
                </div>
              </span>

              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
            </li>

            {/* 2016 */}
            <li className="h-[15rem]">
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EA3323"
                  className="h-5 w-5"
                >
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <span className="flex timeline-end sm:text-end mb-[13.1rem] items-center">
                <div className="text-2xl font-bold text-black ml-2">
                  {text.historyData[7].year}
                </div>
              </span>
              <span
                className={`timeline-end sm:text-start mr-8 text-left text-sm ${
                  language == "EN" ? "mb-[2.7rem]" : "mb-[5rem]"
                }`}
              >
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[7].events[0].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[7].events[0].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[7].events[1].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[7].events[1].event}
                  </div>
                </div>
              </span>
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
            </li>

            {/* 2015 */}
            <li className="h-[13rem]">
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EA3323"
                  className="h-5 w-5"
                >
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <span className="flex timeline-end sm:text-end mb-[11.1rem]">
                <div className="text-2xl font-bold text-black ml-2">
                  {text.historyData[8].year}
                </div>
              </span>
              <span
                className={`timeline-end sm:text-start mr-8 text-left text-sm ${
                  language == "EN" ? "mb-[1rem]" : "mb-[2.7rem]"
                }`}
              >
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[8].events[0].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[8].events[0].event}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    {text.historyData[8].events[1].month}
                  </div>
                  <div className="flex-1">
                    {text.historyData[8].events[1].event}
                  </div>
                </div>
              </span>
              <hr
                className="bg-[#EE511F]"
                style={{
                  width: "1px",
                  height: "100%",
                  margin: "0",
                  padding: "0",
                }}
              />
            </li>
          </ul>
          <div className="my-[10rem]"></div>
        </div>
        <div className="flex-1"></div> {/* 오른쪽 여백 (1/5) */}
      </div>
      <div className="flex flex-col">
        <Footer />
      </div>
    </>
  );
};

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}