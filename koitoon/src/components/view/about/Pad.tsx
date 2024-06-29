"use client";

import React, { useEffect, useContext } from "react";
import Image from "next/image";
import Main from "../../../../public/images//about/메인.jpg";
import Mid from "@/../public/images/about/Mask group.png";
import t1 from "@/../public/images/about/icon_about/content-creator.png";
import t2 from "@/../public/images/about/icon_about/worldwide.png";
import t3 from "@/../public/images/about/icon_about/planing.png";
import MainAbout from "@/../public/images/about/mainabout.jpg";
import Header from "@/components/public/header/Header";
import Side from "@/components/public/side/Side";
import Footer from "@/components/public/footer/Footer";
import {
  LanguageProvider,
  default as LanguageContext,
} from "@/context/Language";
import AOS from "aos";
import "aos/dist/aos.css";
import useFont from "@/app/hooks/UseFont";
import {textContent} from "./Data"



const HomePage: React.FC = () => {
  const { language } = useContext(LanguageContext);
  useFont(); // 커스텀 훅 사용

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
        <Side />
        <div
          className="flex flex-row sm:min-h-[50rem] pad:min-h-[40rem] w-screen mt-[1rem]"
          data-aos="fade-up"
        >
          <div className="sm:flex-1 ss:flex-1 pad:flex-1"></div>{" "}
          {/* 왼쪽 여백 (1/5) */}
          <div className="sm:flex-3 sm:w-4/8 pad:mx-11 ss:mx-11">
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
      {/* ----------------pc----------------------------------------------- */}      

      <div className="flex relative w-full py-12 items-center justify-center bg-black">
        <Image
          src={Mid}
          alt="Company Background"
          fill
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div className="relative z-10 w-full max-w-screen-lg px-8 text-white flex flex-col items-center">
          {/* COMPANY PROFILE 섹션 */}
          <div className="w-full text-center mb-12">
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
                <span className="block text-gray-400 text-sm">{text.ceo}</span>
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
          <div className="w-full text-center">
            <div className="text-orange-600 text-2xl font-bold mb-6">
              {text.businessArea}
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center rounded-full h-24 w-24 border border-orange-500 mb-2">
                  <Image
                    src={t1}
                    alt="Content Creator"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="flex items-center text-sm text-center">
                  <span className="bg-orange-500 w-3 h-3 rounded-full mr-1"></span>
                  <span className="font-bold">{text.webtoonCreation}</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center rounded-full h-24 w-24 border border-orange-500 mb-2">
                  <Image src={t2} alt="Worldwide" width={70} height={70} />
                </div>
                <div className="flex items-center text-sm text-center">
                  <span className="bg-orange-500 w-3 h-3 rounded-full mr-1"></span>
                  <span className="font-bold">{text.globalDistribution}</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center rounded-full h-24 w-24 border border-orange-500 mb-2">
                  <Image src={t3} alt="AI Webtoon" width={70} height={70} />
                </div>
                <div className="flex items-center text-sm text-center">
                  <span className="bg-orange-500 w-3 h-3 rounded-full mr-1"></span>
                  <span className="font-bold">{text.aiWebtoon}</span>
                </div>
              </div>
            </div>
          </div>
          {/* 비즈니스 섹션 */}
        </div>
      </div>

     

      {/* -------------------------------------------------------------- */}
      <div className="flex flex-row min-h-screen w-screen my-[1rem] relative ">
        <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
        <div className="flex-3 w-4/6">
          {" "}
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
          {/* pad연혁 */}
          <ul className="flex timeline timeline-snap-icon max-sm:timeline-compact timeline-vertical">
            <li className="h-[12rem]">
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
              <span className="flex timeline-start mb-[10rem] items-center">
                <div className="text-5xl font-bold text-black mr-2 ">2024</div>
                <div className="relative items-center">
                  <div className="border-t border-dotted border-[#EE511F] w-[3rem]"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#EE511F] rounded-full w-1 h-1"></div>
                </div>
              </span>              
              <span className={`timeline-end sm:text-start mr-8 text-left ${language === "EN" ? "mb-[2.5rem]" : "mb-[1rem]"}`}>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    2월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[0].events[0].event}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    3월
                  </div>
                  <div className="flex items-baseline">
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
              <span className="flex timeline-start mb-[28rem] items-center">
                <div className="text-5xl font-bold text-black mr-2 ">2023</div>
                <div className="relative items-center">
                  <div className="border-t border-dotted border-[#EE511F] w-[3rem]"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#EE511F] rounded-full w-1 h-1"></div>
                </div>
              </span>
              <span className={`timeline-end sm:text-start  mr-8 text-left  ${language === "EN" ? "mb-[3.5rem]" : "mb-[4.2rem]"}`}>              
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    12월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[1].events[0].event}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    10월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[1].events[1].event}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    07월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[1].events[2].event}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    05월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[1].events[3].event}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    04월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[1].events[4].event}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    02월
                  </div>
                  <div className="flex items-baseline">
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
              <span className="flex timeline-start mb-[18rem] items-center">
                <div className="text-5xl font-bold text-black mr-2 ">2022</div>
                <div className="relative items-center">
                  <div className="border-t border-dotted border-[#EE511F] w-[3rem]"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#EE511F] rounded-full w-1 h-1"></div>
                </div>
              </span>
              <span className={`timeline-end sm:text-start  mr-8 text-left ${language === "EN" ? "mb-[3rem]" : "mb-[3rem]"}`}>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    12월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[2].events[0].event}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    11월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[2].events[1].event}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    07월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[2].events[2].event}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    02월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[2].events[3].event}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    01월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[2].events[4].event}
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

            <li className="h-[14rem]">
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
              <span className="flex timeline-start mb-[12.2rem] items-center">
                <div className="text-5xl font-bold text-black mr-2 ">2021</div>
                <div className="relative items-center">
                  <div className="border-t border-dotted border-[#EE511F] w-[3rem]"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#EE511F] rounded-full w-1 h-1"></div>
                </div>
              </span>
              <span className={`timeline-end sm:text-start  mr-8 text-left ${language === "EN" ? "mb-[8.5rem]" : "mb-[4.5rem]"}`}>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    11월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[3].events[0].event}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    07월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[3].events[1].event}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    06월
                  </div>
                  <div className="flex items-baseline">
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
              <span className="flex timeline-start mb-[6.2rem] items-center">
                <div className="text-5xl font-bold text-black mr-2 ">2020</div>
                <div className="relative items-center">
                  <div className="border-t border-dotted border-[#EE511F] w-[3rem]"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#EE511F] rounded-full w-1 h-1"></div>
                </div>
              </span>
              <span className={`timeline-end mr-8 text-left ${language === "EN" ? "mb-[13rem]" : "mb-[3.2rem]"}`}>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    03월
                  </div>
                  <div className="flex items-baseline">
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

            <li className="h-[10rem]">
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
              <span className="flex timeline-start mb-[8.2rem] items-center">
                <div className="text-5xl font-bold text-black mr-2 ">2019</div>
                <div className="relative items-center">
                  <div className="border-t border-dotted border-[#EE511F] w-[3rem]"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#EE511F] rounded-full w-1 h-1"></div>
                </div>
              </span>
              <span className={`timeline-end sm:text-start mr-8 text-left ${language === "EN" ? "mb-[11.5rem]" : "mb-[3.7rem]"}`}>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    10월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[5].events[0].event}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    02월
                  </div>
                  <div className="flex items-baseline">
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
              <span className="flex timeline-start mb-[6.2rem] items-center">
                <div className="text-5xl font-bold text-black mr-2 ">2018</div>
                <div className="relative items-center">
                  <div className="border-t border-dotted border-[#EE511F] w-[3rem]"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#EE511F] rounded-full w-1 h-1"></div>
                </div>
              </span>
              <span className="timeline-end sm:text-start mb-[4.7rem] mr-8 text-left">
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    05월
                  </div>
                  <div className="flex items-baseline">
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

            <li className="h-[10rem]">
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
              <span className="flex timeline-start mb-[8.1rem] items-center">
                <div className="text-5xl font-bold text-black mr-2 ">2016</div>
                <div className="relative items-center">
                  <div className="border-t border-dotted border-[#EE511F] w-[3rem]"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#EE511F] rounded-full w-1 h-1"></div>
                </div>
              </span>
              <span className={`timeline-end sm:text-start mb-[13rem] mr-8 text-left ${language === "EN" ? "mb-[8.5rem]" : "mb-[3.8rem]"}`}>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    12월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[7].events[0].event}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    05월
                  </div>
                  <div className="flex items-baseline">
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

            <li className="h-[10rem]">
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
              <span className="flex timeline-start mb-[8.2rem] items-center">
                <div className="text-5xl font-bold text-black mr-2 ">2015</div>
                <div className="relative items-center">
                  <div className="border-t border-dotted border-[#EE511F] w-[3rem]"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#EE511F] rounded-full w-1 h-1"></div>
                </div>
              </span>
              <span className={`timeline-end sm:text-start mr-8 text-left ${language === "EN" ? "mb-[8.5rem]" : "mb-[2.2rem]"}`}>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    11월
                  </div>
                  <div className="flex items-baseline">
                    {text.historyData[8].events[0].event}
                  </div>
                </div>
                <div className="flex">
                  <div className="text-lg font-black ml-4 mr-4 flex-none">
                    10월
                  </div>
                  <div className="flex items-baseline">
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
