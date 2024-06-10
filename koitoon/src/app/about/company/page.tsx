"use client";

import React, { useEffect, useContext } from "react";
import Image from "next/image";
import Main from "@/../public/images/about/메인.jpg";
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

const events = [
  {
    year: "2024",
    items: [
      {
        date: "03월",
        description: "비비안 JP 렌즈라이센스 자체 AI 적용 계약 (예정)",
      },
      {
        date: "02월",
        description:
          "에르브레이와 MOU 업무 협약식 오르미디어 US 계약체결 및 유럽 진출 (9개품)",
      },
    ],
  },
  {
    year: "2023",
    items: [
      { date: "12월", description: "(주)헬렌토리앤젤본부 설립" },
      { date: "10월", description: "비비안 JP 계약체결 및 일본 진출 (20개품)" },
      { date: "07월", description: "2차 작품 집필 완료 (에르브레이)" },
      { date: "05월", description: "국가임상가공가 우수기업 인증" },
      {
        date: "04월",
        description:
          "노르프루믹스 작품 연재 계약 완료 및 런칭 예정 (애니노 노르프루믹스/피너티) (작품명)",
      },
      {
        date: "02월",
        description: "오르미디어 US 계약체결 및 유럽 진출 (7개품)",
      },
    ],
  },
  // 더 많은 이벤트 추가
];

interface HistoryEvent {
  month: string;
  event: string;
}

interface HistoryYear {
  year: string;
  events: HistoryEvent[];
}

interface TextContent {
  home: string;
  about: string;
  companyIntro: string;
  aboutUs: string;
  webtoonTrend: string;
  culture: string;
  leading: string;
  connecting: string;
  globalWebtoon: string;
  webtoonKoiContent: string;
  description: string;
  companyProfile: string;
  founded: string;
  foundedDate: string;
  ceo: string;
  ceoName: string;
  headquarters: string;
  headquartersAddress: string;
  businessArea: string;
  webtoonCreation: string;
  globalDistribution: string;
  aiWebtoon: string;
  history: string;
  month07: string;
  month05: string;
  month04: string;
  secondaryAgreement: string;
  techCertification: string;
  nobleComicsLaunch: string;
  historyData: HistoryYear[];
}

const textContent: Record<string, TextContent> = {
  KO: {
    home: "홈",
    about: "ABOUT",
    companyIntro: "회사소개",
    aboutUs: "ABOUT US",
    webtoonTrend: "웹툰 트렌드와",
    culture: "문화",
    leading: "를 선도하고 ",
    connecting: "작가와 독자를 연결하는 ",
    globalWebtoon: "글로벌 웹툰 제작사",
    webtoonKoiContent: "웹툰코이컨텐츠",
    description:
      "는 다양한 장르와 스토리로 독자들에게 맞춤형 콘텐츠를 제공하며, 작가들에게는 더 많은 창작 활동을 지원합니다.",
    companyProfile: "COMPANY PROFILE",
    founded: "설립연도",
    foundedDate: "2015년 10월 02일",
    ceo: "대표이사",
    ceoName: "이준형 대표",
    headquarters: "본사위치",
    headquartersAddress: "서울시 마포구 잔다리로 30-11",
    businessArea: "BUSINESS AREA",
    webtoonCreation: "웹툰 콘텐츠 제작",
    globalDistribution: "해외 유통",
    aiWebtoon: "AI웹툰 제작 기술 개발",
    history: "HISTORY",
    month07: "07월",
    month05: "05월",
    month04: "04월",
    secondaryAgreement: "2차 저작물 업무 협약(에브리웨어/챗툰)",
    techCertification: "국가공인기술평가 우수기업 인증",
    nobleComicsLaunch: "노블 코믹스 작품연재 계약 완료 및 런칭 예정",
    historyData: [
      {
        year: "2024",
        events: [
          { month: "07월", event: "2차 저작물 업무 협약(에브리웨어/챗툰)" },
          { month: "05월", event: "국가공인기술평가 우수기업 인증" },
          {
            month: "04월",
            event: "노블 코믹스 작품연재 계약 완료 및 런칭 예정",
          },
        ],
      },
      {
        year: "2023",
        events: [
          { month: "12월", event: "㈜웹툰코이컨텐츠 법인 설립" },
          { month: "10월", event: "비비온 JP 계약체결 및 일본 진출 (20작품)" },
          { month: "07월", event: "2차 저작물 업무 협약 (에브리웨이)" },
          { month: "05월", event: "국가공인기술평가 우수기업 인증" },
          {
            month: "04월",
            event:
              "노블코믹스 작품 연재 계약 완료 및 런칭 예정 (애니툰 노블코믹스/피너툰/해와달)",
          },
          {
            month: "02월",
            event: "오름미디어 US 계약체결 및 유럽 진출 (7작품)",
          },
        ],
      },
      {
        year: "2022",
        events: [
          { month: "12월", event: "매출액 23억 돌파" },
          { month: "11월", event: "블루픽 노블코믹스 작품 연재 계약 완료" },
          { month: "", event: "㈜툰코이 법인 설립" },
          { month: "07월", event: "연재 작품 90개 달성" },
          { month: "02월", event: "비비온 JP 계약체결 및 일본 진출 (11작품)" },
          { month: "01월", event: "레진 US 글로벌 계약 체결 (15작품)" },
        ],
      },
      {
        year: "2021",
        events: [
          { month: "11월", event: "연재 작품 70개 달성" },
          { month: "07월", event: "코핀 US 글로벌 진출 (25작품)" },
          { month: "06월", event: "플랫폼 아튜브 MOU 체결" },
        ],
      },
      {
        year: "2020",
        events: [
          { month: "03월", event: "국내 10개 업체 서비스 자체 IP 컨텐츠 런칭" },
        ],
      },
      {
        year: "2019",
        events: [
          { month: "10월", event: "연재 작품 50개 달성" },
          { month: "02월", event: "애니툰 작품 계약 완료 및 런칭" },
        ],
      },
      {
        year: "2018",
        events: [{ month: "05월", event: "매출액 10억 이상 돌파" }],
      },
      {
        year: "2016",
        events: [
          { month: "12월", event: "정산금 7억 5천 달성" },
          { month: "05월", event: "탑툰 작품 연재 계약 완료 및 런칭" },
        ],
      },
      {
        year: "2015",
        events: [
          { month: "11월", event: "투믹스 12작품 연재 계약 완료 및 런칭" },
          { month: "10월", event: "웹툰코이컨텐츠 설립" },
        ],
      },
    ],
  },
  EN: {
    home: "Home",
    about: "About",
    companyIntro: "Company Introduction",
    aboutUs: "About Us",
    webtoonTrend: "Webtoon Trends and",
    culture: "Culture",
    leading: " Leader",
    connecting: "connecting authors and readers,",
    globalWebtoon: "Global Webtoon Creator",
    webtoonKoiContent: "Webtoon Koi Content",
    description:
      "provides tailored content to readers with various genres and stories, and supports more creative activities for authors.",
    companyProfile: "Company Profile",
    founded: "Founded",
    foundedDate: "October 2, 2015",
    ceo: "CEO",
    ceoName: "Junhyung Lee",
    headquarters: "Headquarters",
    headquartersAddress: "30-11 Jandari-ro, Mapo-gu, Seoul",
    businessArea: "Business Area",
    webtoonCreation: "Webtoon Content Creation",
    globalDistribution: "Global Distribution",
    aiWebtoon: "AI Webtoon Creation Technology Development",
    history: "History",
    month07: "July",
    month05: "May",
    month04: "April",
    secondaryAgreement: "Secondary Copyright Agreement (Everywhere/Chattoon)",
    techCertification:
      "Certified Excellent Company in National Technology Evaluation",
    nobleComicsLaunch:
      "Completed Noble Comics Serialization Contract and Planned Launch",
    historyData: [
      {
        year: "2024",
        events: [
          {
            month: "July",
            event: "Secondary Copyright Agreement (Everywhere/Chattoon)",
          },
          {
            month: "May",
            event:
              "Certified Excellent Company in National Technology Evaluation",
          },
          {
            month: "April",
            event:
              "Completed Noble Comics Serialization Contract and Planned Launch",
          },
        ],
      },
      {
        year: "2023",
        events: [
          {
            month: "December",
            event: "Establishment of Webtoon Koi Content Co., Ltd.",
          },
          {
            month: "October",
            event: "Contract with Vivion JP and entry into Japan (20 works)",
          },
          { month: "July", event: "Secondary Copyright Agreement (Everyway)" },
          {
            month: "May",
            event:
              "Certified Excellent Company in National Technology Evaluation",
          },
          {
            month: "April",
            event:
              "Completed serialization contract and planned launch of Noble Comics works (AniToon Noble Comics/PinerToon/Sun and Moon)",
          },
          {
            month: "February",
            event:
              "Contract with Orum Media US and entry into Europe (7 works)",
          },
        ],
      },
      {
        year: "2022",
        events: [
          { month: "December", event: "Surpassed sales of 2.3 billion won" },
          {
            month: "November",
            event:
              "Completed serialization contract for Blue Pick Noble Comics",
          },
          { month: "", event: "Establishment of Toon Koi Co., Ltd." },
          { month: "July", event: "Achieved 90 serialized works" },
          {
            month: "February",
            event: "Contract with Vivion JP and entry into Japan (11 works)",
          },
          {
            month: "January",
            event: "Contract with Lezhin US Global (15 works)",
          },
        ],
      },
      {
        year: "2021",
        events: [
          { month: "November", event: "Achieved 70 serialized works" },
          { month: "July", event: "Entry into US Global market (25 works)" },
          { month: "June", event: "MOU with Atube Platform" },
        ],
      },
      {
        year: "2020",
        events: [
          {
            month: "March",
            event:
              "Launch of own IP content services with 10 domestic companies",
          },
        ],
      },
      {
        year: "2019",
        events: [
          { month: "October", event: "Achieved 50 serialized works" },
          { month: "February", event: "Contract and launch of AniToon works" },
        ],
      },
      {
        year: "2018",
        events: [{ month: "May", event: "Surpassed sales of 1 billion won" }],
      },
      {
        year: "2016",
        events: [
          {
            month: "December",
            event: "Achieved 750 million won in settlement amount",
          },
          { month: "May", event: "Contract and launch of TopToon works" },
        ],
      },
      {
        year: "2015",
        events: [
          {
            month: "November",
            event: "Contract and launch of 12 works with Toomics",
          },
          { month: "October", event: "Establishment of Webtoon Koi Content" },
        ],
      },
    ],
  },
};

const HomePage: React.FC = () => {
  const { language } = useContext(LanguageContext);
  useFont(); // 커스텀 훅 사용

  useEffect(() => {
    AOS.init(); // AOS 초기화
  }, []);

  const text = textContent[language];
  return (
    <>
      <div className="flex flex-col">
        <div className="h-16">
          <Header />
        </div>
        <Side />
        <div
          className="flex flex-row min-h-[50rem] w-screen mt-[1rem]"
          data-aos="fade-up"
        >
          <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
          <div className="flex-3 w-4/8">
            {/* 중앙 컨텐츠 영역 (3/5) */}
            <div className="text-sm sm:breadcrumbs">
              <ul className="ss:hidden">
                <li>
                  <a href="/">{text.home}</a>
                </li>
                <li>
                  <a>{text.about}</a>
                </li>
                <li>{text.companyIntro}</li>
              </ul>
              <div className="text-4xl my-[4rem] text-[#EE511F] font-bold ss:text-left">
                {text.aboutUs}
              </div>
            </div>
            <div className="flex text-left items-start justify-start">
        <div className="w-full max-w-[35rem] my-[2rem]">
          <div className="text-left sm:text-4xl ss:text-xl w-auto leading-snug">
            <span className="font-bold">{text.webtoonTrend}</span>
            <span className="font-bold">{text.culture}</span>
            <span className="font-thin">{text.leading}</span><br />
            <span className="font-thin">{text.connecting}</span><br />
            <span className="font-bold">{text.globalWebtoon}</span>
          </div>
          <div className="w-full ss:flex justify-center my-8 hidden">
            <Image
              src={Main}
              alt="ad"
              className="h-[15rem] object-contain"
            />
          </div>
          <div className="mt-12 text-left">
            <span className="font-bold">{text.webtoonKoiContent}</span>
            {text.description}
          </div>
        </div>
        <div className="ml-[5rem] mt-[-4rem] min-w-auto sm:flex">
          <Image
            src={MainAbout}
            alt="ad"
            className="rounded-full"
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
      {/* --------------------------------------------------------------- */}
      <div className="sm:flex ss:hidden relative w-full py-12 flex items-center justify-center bg-black ">
        <Image
          src={Mid}
          alt="Company Background"
          fill
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div className="relative z-10 w-full max-w-screen-lg px-8 text-white flex flex-col md:flex-row justify-between items-start">
          {/* COMPANY PROFILE 섹션 */}
          <div className="md:w-1/2 mt-12 md:mt-0">
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
          <div className="md:w-1/2 mt-24 md:mt-48">
            <div className="text-orange-600 text-2xl font-bold mb-6 text-center md:text-left">
              {text.businessArea}
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center rounded-full h-24 w-24 border border-orange-500 mb-2">
                  <Image
                    src={t1}
                    alt="Content Creator"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex items-center text-sm">
                  <span
                    className={`bg-orange-500 w-3 h-3 rounded-full mr-2 mb-4 ${
                      language === "EN" ? "w-7" : ""
                    }`}
                  ></span>
                  <span className="font-bold">{text.webtoonCreation}</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center rounded-full h-24 w-24 border border-orange-500 mb-2">
                  <Image src={t2} alt="Worldwide" width={40} height={40} />
                </div>
                <div className="flex items-center text-sm">
                  <span
                    className={`bg-orange-500 w-3 h-3 rounded-full mr-2 ${
                      language === "EN" ? "w-[1.30rem]" : ""
                    }`}
                  ></span>
                  <span className="font-bold">{text.globalDistribution}</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center rounded-full h-24 w-24 border border-orange-500 mb-2">
                  <Image src={t3} alt="AI Webtoon" width={40} height={40} />
                </div>
                <div className="flex items-center text-sm text-center">
                  <span
                    className={`bg-orange-500 w-3 h-3 rounded-full mr-2 mb-4 ${
                      language === "EN" ? "w-7" : ""
                    }`}
                  ></span>
                  <span className="font-bold">{text.aiWebtoon}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------- */}

      <div className="hidden ss:flex relative w-full h-auto flex-col items-center justify-center bg-black py-8">
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
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="flex items-center text-sm mt-2">
                      <span className="bg-orange-500 w-3 h-3 rounded-full mr-2"></span>
                      <span className="font-bold">{text.webtoonCreation}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center rounded-full h-16 w-16 border border-orange-500">
                      <Image src={t2} alt="Worldwide" width={32} height={32} />
                    </div>
                    <div className="flex items-center text-sm mt-2">
                      <span className="bg-orange-500 w-3 h-3 rounded-full mr-2"></span>
                      <span className="font-bold">
                        {text.globalDistribution}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center rounded-full h-16 w-16 border border-orange-500">
                      <Image src={t3} alt="AI Webtoon" width={32} height={32} />
                    </div>
                    <div className="flex items-center text-sm mt-2">
                      <span className="bg-orange-500 w-3 h-3 rounded-full mr-2"></span>
                      <span className="font-bold text-center">
                        {text.aiWebtoon}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------- */}

      {/* -------------------------------------------------------------- */}
      <div className="flex flex-row min-h-screen w-screen my-[1rem] relative ">
        <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
        <div className="flex-3 w-4/6">
          {" "}
          {/* 중앙 컨텐츠 영역 (3/5) */}
          <div
            className="ju justify-center items-center text-center"
            data-aos="fade-up"
          >
            <div className="text-4xl my-[4rem] text-[#EE511F] font-bold">
              {text.history}
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------------- */}
          <ul
            className="timeline timeline-snap-icon timeline-vertical hidden ss:flex timeline-start"
            data-aos="fade-up"
          >
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-end mb-10 w-full">
                <time className="text-xl text-orange-600">2024</time>
                <div className="justify-start items-start text-left text-sm w-min-[5rem]">
                  <span className="text-sm font-semibold mr-2">07월</span>
                  {text.historyData[0].events[0].event}
                  <br />
                  <span className="text-sm font-semibold mr-2">05월</span>
                  {text.historyData[0].events[1].event}
                  <br />
                  <span className="text-sm font-semibold mr-2">04월</span>
                  {text.historyData[0].events[2].event}
                  <br />
                </div>
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-end mb-10 text-sm w-min-[10rem]">
                <time className="text-xl text-orange-600">2023</time>
                <br />
                <span className="text-sm font-semibold mr-2">12월</span>
                <span className="text-orange-600">
                  {text.historyData[1].events[0].event}
                </span>
                <br />
                <span className="text-sm font-semibold mr-2">10월</span>
                {text.historyData[1].events[1].event}
                <br />
                <span className="text-sm font-semibold mr-2">07월</span>
                {text.historyData[1].events[2].event}
                <br />
                <span className="text-sm font-semibold mr-2">05월</span>
                {text.historyData[1].events[3].event}
                <br />
                <span className="text-sm font-semibold mr-2">04월</span>
                {text.historyData[1].events[4].event}
                <br />
                <span className="text-sm font-semibold mr-2">02월</span>
                {text.historyData[1].events[5].event}
                <br />
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-end md:text-end mb-10 text-sm w-min-[5rem]">
                <time className="text-xl text-orange-600">2022</time>
                <br />
                <div className="justify-start items-start text-left">
                  <span className="text-sm font-semibold mr-2">12월</span>
                  {text.historyData[2].events[0].event}
                  <br />
                  <span className="text-sm font-semibold mr-2">11월</span>
                  {text.historyData[2].events[1].event}
                  <br />
                  <span className="text-sm font-semibold mr-[3.75rem]"></span>
                  <span className="text-orange-600 ">
                    {text.historyData[2].events[2].event}
                  </span>
                  <br />
                  <span className="text-sm font-semibold mr-2">07월</span>
                  {text.historyData[2].events[3].event}
                  <br />
                  <span className="text-sm font-semibold mr-2">02월</span>
                  {text.historyData[2].events[4].event}
                  <br />
                  <span className="text-sm font-semibold mr-2">01월</span>
                  {text.historyData[2].events[5].event}
                  <br />
                </div>
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-end mb-10 text-sm w-min-[5rem]">
                <time className="text-xl text-orange-600">2021</time>
                <br />
                <span className="text-sm font-semibold mr-2">11월</span>
                {text.historyData[3].events[0].event}
                <br />
                <span className="text-sm font-semibold mr-2">07월</span>
                {text.historyData[3].events[1].event}
                <br />
                <span className="text-sm font-semibold mr-2">06월</span>
                {text.historyData[3].events[2].event}
                <br />
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-end mb-10 text-sm w-min-[5rem]">
                <time className="text-xl text-orange-600">2020</time>
                <br />
                <div className="justify-start items-start text-left">
                  <span className="text-sm font-semibold mr-2">03월</span>
                  {text.historyData[4].events[0].event}
                  <br />
                </div>
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-end md:text-end mb-10 text-sm w-min-[5rem]">
                <time className="text-xl text-orange-600">2019</time>
                <br />
                <span className="text-sm font-semibold mr-2">10월</span>
                {text.historyData[5].events[0].event}
                <br />
                <span className="text-sm font-semibold mr-2">02월</span>
                {text.historyData[5].events[1].event}
                <br />
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-end md:text-end mb-10 text-sm w-min-[5rem]">
                <time className="text-xl text-orange-600">2018</time>
                <br />
                <div className="justify-start items-start text-left">
                  <span className="text-sm font-semibold mr-2">05월</span>
                  {text.historyData[6].events[0].event}
                  <br />
                </div>
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-end mb-10 text-sm w-min-[5rem]">
                <time className="text-xl text-orange-600">2016</time>
                <br />
                <span className="text-sm font-semibold mr-2">12월</span>
                {text.historyData[7].events[0].event}
                <br />
                <span className="text-sm font-semibold mr-2">05월</span>
                {text.historyData[7].events[1].event}
                <br />
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-end md:text-end mb-10 text-sm w-min-[5rem]">
                <time className="text-xl text-orange-600">2015</time>
                <br />
                <div className="justify-start items-start text-left">
                  <span className="text-sm font-semibold mr-2">11월</span>
                  {text.historyData[8].events[0].event}
                  <br />
                  <span className="text-sm font-semibold mr-2">10월</span>
                  <span className=" text-orange-600">
                    {text.historyData[8].events[1].event}
                  </span>
                  <br />
                </div>
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr />
            </li>
          </ul>
          {/* ---------------------------------------------------------------------------------------------- */}
          <ul
            className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical hidden sm:flex"
            data-aos="fade-up"
          >
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="text-3xl text-orange-600">2024</time>
                <div className="justify-start items-start text-left">
                  <span className="text-xl font-semibold mr-4 text-left">
                    07월
                  </span>
                  {text.historyData[0].events[0].event}
                  <br />
                  <span className="text-xl font-semibold mr-4">05월</span>
                  {text.historyData[0].events[1].event}
                  <br />
                  <span className="text-xl font-semibold mr-4 ">04월</span>
                  {text.historyData[0].events[2].event}
                  <br />
                </div>
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-end mb-10 w-auto">
                <time className="text-3xl text-orange-600">2023</time>
                <br />
                <span className="text-xl font-semibold mr-4">12월</span>
                <span className="text-orange-600">
                  {text.historyData[1].events[0].event}
                </span>
                <br />
                <span className="text-xl font-semibold mr-4">10월</span>
                {text.historyData[1].events[1].event}
                <br />
                <span className="text-xl font-semibold mr-4">07월</span>
                {text.historyData[1].events[2].event}
                <br />
                <span className="text-xl font-semibold mr-4 ">05월</span>
                {text.historyData[1].events[3].event}
                <br />
                <span className="text-xl font-semibold mr-4 text-left">
                  04월
                </span>
                {text.historyData[1].events[4].event}
                <br />
                <span className="text-xl font-semibold mr-4">02월</span>
                {text.historyData[1].events[5].event}
                <br />
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="text-3xl text-orange-600">2022</time>
                <br />
                <div className="justify-start items-start text-left">
                  <span className="text-xl font-semibold mr-4">12월</span>
                  {text.historyData[2].events[0].event}
                  <br />
                  <span className="text-xl font-semibold mr-4">11월</span>
                  {text.historyData[2].events[1].event}
                  <br />
                  <span className="text-xl font-semibold mr-[3.75rem]"></span>
                  <span className="text-orange-600 ">
                    {text.historyData[2].events[2].event}
                  </span>
                  <br />
                  <span className="text-xl font-semibold mr-4">07월</span>
                  {text.historyData[2].events[3].event}
                  <br />
                  <span className="text-xl font-semibold mr-4">02월</span>
                  {text.historyData[2].events[4].event}
                  <br />
                  <span className="text-xl font-semibold mr-4">01월</span>
                  {text.historyData[2].events[5].event}
                  <br />
                </div>
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="text-3xl text-orange-600">2021</time>
                <br />
                <span className="text-xl font-semibold mr-4">11월</span>
                {text.historyData[3].events[0].event}
                <br />
                <span className="text-xl font-semibold mr-4">07월</span>
                {text.historyData[3].events[1].event}
                <br />
                <span className="text-xl font-semibold mr-4">06월</span>
                {text.historyData[3].events[2].event}
                <br />
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="text-3xl text-orange-600">2020</time>
                <br />
                <div className="justify-start items-start text-left">
                  <span className="text-xl font-semibold mr-4">03월</span>
                  {text.historyData[4].events[0].event}
                  <br />
                </div>
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="text-3xl text-orange-600">2019</time>
                <br />
                <span className="text-xl font-semibold mr-4">10월</span>
                {text.historyData[5].events[0].event}
                <br />
                <span className="text-xl font-semibold mr-4">02월</span>
                {text.historyData[5].events[1].event}
                <br />
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="text-3xl text-orange-600">2018</time>
                <br />
                <div className="justify-start items-start text-left">
                  <span className="text-xl font-semibold mr-4">05월</span>
                  {text.historyData[6].events[0].event}
                  <br />
                </div>
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="text-3xl text-orange-600">2016</time>
                <br />
                <span className="text-xl font-semibold mr-4">12월</span>
                {text.historyData[7].events[0].event}
                <br />
                <span className="text-xl font-semibold mr-4">05월</span>
                {text.historyData[7].events[1].event}
                <br />
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr className="bg-orange-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="text-3xl text-orange-600">2015</time>
                <br />
                <div className="justify-start items-start text-left">
                  <span className="text-xl font-semibold mr-4">11월</span>
                  {text.historyData[8].events[0].event}
                  <br />
                  <span className="text-xl font-semibold mr-4">10월</span>
                  <span className=" text-orange-600">
                    {text.historyData[8].events[1].event}
                  </span>
                  <br />
                </div>
              </div>
              <hr className="bg-orange-500" />
            </li>
            <li>
              <hr />
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
