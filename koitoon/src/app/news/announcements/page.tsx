"use client";

import React, { useEffect, useContext } from "react";
import bg from "../../../../public/images/history_bg.jpg";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import LanguageContext from "@/context/Language";
import { LocationComponent } from "@/components/contents/LangComponent";
import Empty from "@/../../public/images/main/thumbnail2.png";

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
            <a>NEWS</a>
          </li>
          <li>회사소식</li>
        </ul>
        <div className="text-4xl my-[4rem] font-medium">회사소식</div>
      </div>
      <div className="flex">
        <select className="select select-bordered w-[10rem] max-w-xs mr-2">
          <option disabled selected>
            회사
          </option>
          <option>내용</option>
          <option>제목 + 내용</option>
        </select>
        <label className="input input-bordered flex items-center gap-2 w-[20rem]">
          <input
            type="text"
            className="grow"
            placeholder="검색어를 입력해주세요"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <hr className="my-[2rem]" />

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image src={Empty} alt="aa" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">제목을 입력해주세요</h2>
          <p>본문을 입력해주세요</p>
        </div>
      </div>
      <hr className="my-[2rem]" />
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image src={Empty} alt="aa" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">제목을 입력해주세요</h2>
          <p>본문을 입력해주세요</p>
        </div>
      </div>
      <hr className="my-[2rem]" />
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image src={Empty} alt="aa" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">제목을 입력해주세요</h2>
          <p>본문을 입력해주세요</p>
        </div>
      </div>
      <hr className="my-[2rem] hidden" />

      <div className="flex my-[5rem] justify-center items-center self-center">
        <button className="join-item btn mx-4 hover:bg-orange-500">«</button>
        <button className="join-item btn mr-4 hover:bg-orange-500 text-xs">&lt;</button>
        <button className="join-item btn hover:bg-orange-500 mr-4">1</button>
        <button className="join-item btn hover:bg-orange-500 mr-4">2</button>
        <button className="join-item btn hover:bg-orange-500 mr-4">3</button>
        <button className="join-item btn hover:bg-orange-500">4</button>
        <button className="join-item btn ml-4 hover:bg-orange-500 text-xs">&gt;</button>
        <button className="join-item btn mx-4 hover:bg-orange-500">»</button>
      </div>
    </RootLayout>
  );
};

export default HomePage;
