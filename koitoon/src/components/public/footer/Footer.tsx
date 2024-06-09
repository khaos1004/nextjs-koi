import React, { useContext } from "react";
import Down from "../../../../public/images/svg/icon_download_24dp";
import { Location } from "../../../../public/svg/Location";
import { Logox } from "../../../../public/svg/Logx";
import Image from "next/image";
import {
  LanguageProvider,
  default as LanguageContext,
} from "@/context/Language"; 


const textContent = {
  KO: {
    companyName: "웹툰 코이 컨텐츠",
    companyProfile: "회사소개서",
    address: "서울 마포구 잔다리로 30-11, 3F",
    tel: "Tel.",
    phoneNumber: "02-2602-5250",
    email: "Email.",
    emailAddress: "koicontent@koicontent.com",
    ceo: "대표자",
    ceoName: "이준형",
    registrationNumber: "사업자 등록번호",
    regNumber: "853-09-00557",
    copyright: "Copyright © WEBTOON KOI CONTENT.All Rights Reserved"
  },
  EN: {
    companyName: "Webtoon Koi Content",
    companyProfile: "Company Profile",
    address: "30-11 Jandari-ro, Mapo-gu, Seoul, 3F",
    tel: "Tel.",
    phoneNumber: "02-2602-5250",
    email: "Email.",
    emailAddress: "koicontent@koicontent.com",
    ceo: "CEO",
    ceoName: "Junhyung Lee",
    registrationNumber: "Business Registration Number",
    regNumber: "853-09-00557",
    copyright: "Copyright © WEBTOON KOI CONTENT.All Rights Reserved"
  }
};
 
const Footer = () => {
  const { language } = useContext(LanguageContext);
  const text = textContent[language];

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/pdf/webToonKoi.pdf"; // PDF 파일 경로
    link.download = text.companyProfile + ".pdf"; // 다운로드 시 파일 이름
    document.body.appendChild(link);
    link.click(); 
    document.body.removeChild(link); 
  };

  return (
    <>
      <footer className="hidden ss:block rounded-lg shadow bg-zinc-900">
        <div className="w-full max-w-screen-xl mx-auto pl-4 pt-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href=""
              className="flex items-center sm:mb-0 space-x-3 my-4 rtl:space-x-reverse"
            >
              <div className="self-center text-white font-semibold whitespace-nowrap dark:text-white text-sm">
                {text.companyName}
              </div>
              <button
                onClick={downloadPDF}
                className="btn btn-sm rounded-3xl text-white bg-slate-800 hover:bg-[#EE511F] hover:text-white"
              >
                {text.companyProfile}
                <span>
                  <Down />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="w-full max-w-screen-xl mx-auto pl-4 md:py-8">
          <div className="self-center mb-4 text-white text-base font-semibold whitespace-nowrap flex items-center dark:text-white">
            <Location />
            {text.address}
          </div>

          <div className="flex">
            <div className="block dark:text-gray-800 text-gray-500">{text.tel}</div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              {text.phoneNumber}
            </div>
          </div>
          <div className="flex">
            <div className="block dark:text-gray-800 text-gray-500">{text.email}</div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              {text.emailAddress}
            </div>
          </div>
          <div className="flex">
            <div className="block dark:text-gray-800 text-gray-500">{text.ceo}</div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              {text.ceoName}
            </div>
          </div>
          <div className="flex">
            <div className="block dark:text-gray-800 text-gray-500">{text.registrationNumber}</div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              {text.regNumber}
            </div>
          </div>
          <div className="ml-[4px] block text-xs text-white sm:text-right dark:text-gray-800 my-2 opacity-25">
            {text.copyright}
          </div>
        </div>
      </footer>
      {/* ------------------------------------------------------------------------- */}
      <footer className="rounded-lg shadow ss:hidden bg-zinc-900">
        <div className="w-full max-w-screen-xl mx-auto pl-4 pt-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href=""
              className="flex items-center sm:mb-0 my-4 space-x-3 rtl:space-x-reverse"
            >
              <div className="self-center text-white font-semibold whitespace-nowrap dark:text-white text-[1rem] font-['Spoqa Han Sans Neo']">
                {text.companyName}
              </div>
              <button
                onClick={downloadPDF}
                className="btn btn-sm rounded-3xl text-white bg-slate-800 hover:text-white bol border-[rgba(0,0,0,0.5)] hover:bg-[#EE511F]"
              >
                {text.companyProfile}
                <span>
                  <Down />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="w-full max-w-screen-xl mx-auto pl-4 md:py-8">
          <div className="flex">
            <div className="self-center mb-4 text-white text-2xl font-semibold whitespace-nowrap flex items-center dark:text-white flex-grow">
              <Location />
              {text.address}
            </div>
            <div className="flex ml-auto justify-between">
              <span className="mx-2"> <Logox /></span>
              <span className="mx-2"> <Logox /></span>
              <span className="mx-2 mr-8"> <Logox /></span>
            </div>
          </div>

          <div className="flex my-[0.2rem]">
            <div className="block dark:text-gray-800 text-gray-500 text-[0.875rem]">
              {text.tel}
            </div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              {text.phoneNumber}
            </div>
          </div>
          <div className="flex my-[0.2rem]">
            <div className="block dark:text-gray-800 text-gray-500 text-[0.875rem]">
              {text.email}
            </div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              {text.emailAddress}
            </div>
          </div>
          <div className="flex my-[0.2rem]">
            <div className="block dark:text-gray-800 text-gray-500 text-[0.875rem]">
              {text.ceo}
            </div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              {text.ceoName}
            </div>
          </div>
          <div className="flex my-[0.2rem]">
            <div className="block dark:text-gray-800 text-gray-500 text-[0.875rem]">
              {text.registrationNumber}
            </div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              {text.regNumber}
            </div>
          </div>
          <div className="block text-sm text-white sm:text-right dark:text-gray-800 my-2 opacity-25">
            {text.copyright}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
