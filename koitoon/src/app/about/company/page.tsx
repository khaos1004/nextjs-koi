"use client";

import React, { useEffect, useContext } from "react";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import Main from "@/../public/images/about/메인.jpg";
import Mid from "@/../public/images/about/Mask group.png";
import historybg from "@/../public/images/history_bg.jpg";
import laod from "@/../public/images/laod.jpg";
import bg from "../../../../public/images/history_bg.jpg";
import sub from "../../../../public/images/eBig_logo.png";

const HomePage: React.FC = () => {

  return (
    <RootLayout>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>회사소개</li>
        </ul>
        <div className="text-4xl my-[4rem] text-[#EE511F] font-bold">
          ABOUT US
        </div>
      </div>
      <div className="flex">
        <div className="w-[40rem]">
          <div className="text-left text-4xl w-[36rem]">
            <span className="font-bold">웹툰 트렌드</span>
            <span className="font-thin">와 </span>
            <span className="font-bold">문화</span>
            <span className="font-thin">를 선도하고 </span>
            <span className="font-bold">작가와 독자</span>
            <span className="font-thin">를</span>{" "}
            <span className="font-bold">연결</span>
            <span className="font-thin">하는 </span>
            <span className="font-bold">글로벌 웹툰 제작사</span>
          </div>
          <div className="mt-12 w-[15rem]">
            <span className="font-bold">웹툰코이컨텐츠</span>는 다양한 장르와
            스토리로 독자들에게 맞춤형 콘텐츠를 제공하며, 작가들에게는 더 많은
            창작 활동을 지원합니다.
          </div>
        </div>

        <div className="ml-4">
        <Image
          src={Main}
          alt="ad"
          className="w-[20rem] h-[20rem] rounded-full mb-[10rem] shadow-custom-up shadow-orange-500"
        />
        </div>
      </div>

      <div className="">
        <Image src={Mid} alt="dsa" className=" w-full" />
      </div>

      <div className="ju justify-center items-center text-center">
        <div className="text-4xl my-[4rem] text-[#EE511F] font-bold">
          HISTORY
        </div>
      </div>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="">1984</time>
            <div className="">Firster</div>
            The 
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">1998</time>
            <div className="text-lg font-black">iMac</div>
            iMac 
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2001</time>
            <div className="text-lg font-black">iPod</div>
            The 
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2007</time>
            <div className="text-lg font-black">iPhone</div>
            iPhone 
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2015</time>
            <div className="text-lg font-black">Apple Watch</div>
            The App
          </div>
        </li>
      </ul>
    </RootLayout>
  );
};

export default HomePage;
