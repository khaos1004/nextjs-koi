"use client";

import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "@/context/Language";
import MainLogoBlack from "@/../public/images/logo_웹툰코이컨텐츠(B).png";
import Image from "next/image";
import Link from "next/link";

export default function App() {
  interface DataInterface {
    KO: {
      [key: string]: string[];
    };
    EN: {
      [key: string]: string[];
    };
  }

  const [hoveredMenu, setHoveredMenu] = useState("");
  const [focushover, setFocushove] = useState(false);

  // onMouseOver 이벤트 핸들러
  const handleFocus = () => {
    setFocushove(true);
    console.log(focushover);
  };

  // onMouseOver 이벤트 핸들러
  const hoveredMenuIn = (menuKey: any) => {
    const typeString = String(menuKey);
    setHoveredMenu(typeString); // 현재 hover된 메뉴의 key 저장
    console.log("상태 호버" + typeof hoveredMenu);
    console.log("코드 호버" + typeof menuKey);
    console.log(hoveredMenu);
    console.log(menuKey);
  };

  // onMouseLeave 이벤트 핸들러
  const hoverMenuLeave = () => {
    setFocushove(false); // hover 상태 초기화
    // setHoveredMenu(null);
  };

  interface Menu {
    label: string;
    url: string;
  }

  interface DataMenu {
    KO: { [key: string]: Menu[] };
    EN: { [key: string]: Menu[] };
  }

  const data: DataMenu = {
    KO: {
      ABOUT: [
        { label: "회사소개", url: "/about/company" },
        // { label: "연혁", url: "/about/history" },
        { label: "파트너사", url: "/about/partners" },
        // { label: "오시는길", url: "/about/location" },
      ],
      WEBTOON: [
        // 예시: 웹툰 관련 데이터가 없을 경우 빈 배열
      ],
      NEWS: [
        { label: "공지사항", url: "/news/announcements" },
        { label: "직원채용", url: "/news/recruitment" },
      ],
      CONTACT: [
        { label: "비즈니스 문의", url: "/contact/business" },
        { label: "작품 문의", url: "/contact/series" },
      ],
    },
    EN: {
      ABOUT: [
        { label: "Company Info", url: "/about/company" },
        // { label: "History", url: "/about/history" },
        { label: "Partners", url: "/about/partners" },
        // { label: "Location", url: "/about/location" },
      ],
      WEBTOON: [
        // 예시: 웹툰 관련 데이터가 없을 경우 빈 배열
      ],
      NEWS: [
        { label: "Notices", url: "/news/announcements" },
        { label: "Recruitment", url: "/news/recruitment" },
      ],
      CONTACT: [
        { label: "Business Inquiries", url: "/contact/business" },
        {
          label: "Inquiry about works",
          url: "/contact/series",
        },
      ],
    },
  };

  const context = useContext(LanguageContext);
  const { language, setLanguage } = context;
  const [colorChange, setcolorChange] = useState("KO");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuHovered, setMenuHovered] = useState(false);

  console.log(language);

  const handleButtonClick = (menuType: string) => {
    setcolorChange(menuType);
    setLanguage(menuType);
  };

  const handleMenuHover = (menuName: string) => {
    setMenuHovered(true);
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    setMenuHovered(false);
  };

  useEffect(() => {
    if (!menuHovered) {
      const timer = setTimeout(() => {
        setActiveMenu(null);
      }, 300); // 300ms 지연 시간 후에 드롭다운 메뉴를 닫습니다.

      return () => clearTimeout(timer);
    }
  }, [menuHovered]);

  return (
    <>
      {/* -------------------------------------------------------------------------------------------------- */}
      <div className="hidden ss:navbar bg-base-100 fixed">
        <div className="navbar-start">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost btn-circle drawer-button"
              >
                {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle"> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
                {/* </div> */}
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <ul className="menu bg-base-200 w-56 rounded-box">
                  {Object.keys(data[language as "KO" | "EN"]).map(
                    (menuKey, index) => (
                      <li key={index} className="hover:text-[#EE511F] ">
                        <details key={index} open>
                          <summary key={index} className="">{menuKey}</summary>

                          {data[language as "KO" | "EN"][menuKey].length > 0
                            ? data[language as "KO" | "EN"][menuKey].map(
                                (menuItem, index) => (
                                  <ul key={index}>
                                    <li key={index}>
                                      <Link key={index} href={menuItem.url}>
                                        {menuItem.label}
                                      </Link>
                                    </li>
                                  </ul>
                                )
                              )
                            : null}
                        </details>
                      </li>
                    )
                  )}
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <a href="/" className="w-12 md:ml-[5rem]">
            <Image
              src={MainLogoBlack}
              alt="메인로고"
              className="h-auto w-auto"
            />
          </a>
        </div>
        <div className="navbar-end pr-4">
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex w-[30%]">
              <button
                onClick={() => handleButtonClick("KO")}
                className={`text-gray-600 text-center text-sm font-semibold w-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 ${
                  colorChange == "KO"
                    ? "font-bold underline decoration-gray-600"
                    : "opacity-25"
                }`}
              >
                KO
              </button>
              <p className="text-gray-600 text-center text-sm font-bold w-auto px-2">
                |
              </p>
              <button
                onClick={() => handleButtonClick("EN")}
                className={`text-gray-600 text-center text-sm w-auto font-semibold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 ${
                  colorChange == "EN"
                    ? "font-bold underline decoration-gray-600"
                    : "opacity-25"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------- */}

      <div className="ss:hidden navbar bg-base-100 items-center justify-center fixed z-40">
        <div className="navbar-start">
          <a href="/" className="w-12 md:ml-[5rem]">
            <Image
              src={MainLogoBlack}
              alt="메인로고"
              className="h-auto w-auto"
            />
          </a>
        </div>

        <ul className="navbar-center">
          {Object.keys(data[language as "KO" | "EN"]).map((menuKey, index) => (
            <li
              key={index}
              onMouseOver={() => handleMenuHover(menuKey)}
              onMouseLeave={handleMenuLeave}
              className="relative ml-8"
            >
              <a
                className={`block py-2 px-3 text-gray-900 rounded hover:text-[#EE511F] font-['MADE TOMMY Outline'] ${
                  focushover === true
                    ? "hover:hover-underline-animation"
                    : ""
                }${
                  hoveredMenu === menuKey
                    ? "hover:text-[#EE511F]"
                    : ""
                }`}
              >
                {menuKey}
              </a>

              {activeMenu === menuKey && (
                <div
                  onMouseOver={() => setMenuHovered(true)}
                  onMouseLeave={handleMenuLeave}
                  className="absolute left-0 py-2 w-48 rounded-lg shadow-xl font-['Spoqa Han Sans Neo'] z-[100] bg-white"
                >
                  {data[language as "KO" | "EN"][menuKey].map((menuItem, index) => (
                    <div key={index}>
                      <Link
                        href={menuItem.url}
                        key={index}
                        className={`block px-4 py-2 text-gray-800 font-['SundayLemon'] 
                      hover:text-[#EE511F] hover-underlineSub-animation`}
                        onMouseOver={() => hoveredMenuIn(menuKey)}
                        onMouseLeave={hoverMenuLeave}
                        onFocus={handleFocus}
                      >
                        {menuItem.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="navbar-end mr-[5rem]">
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* <div className="flex "> */}
            <button
              onClick={() => handleButtonClick("KO")}
              className={`text-gray-600 text-center text-lg font-semibold w-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 ${
                colorChange == "KO"
                  ? "font-bold underline decoration-gray-600"
                  : "opacity-25"
              }`}
            >
              KO
            </button>
            <p className="text-gray-600 text-center text-lg font-bold w-auto px-2">
              |
            </p>
            <button
              onClick={() => handleButtonClick("EN")}
              className={`text-gray-600 text-center text-lg w-auto font-semibold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 ${
                colorChange == "EN"
                  ? "font-bold underline decoration-gray-600"
                  : "opacity-25"
              }`}
            >
              EN
            </button>
            {/* </div> */}
          </div>
          {/* <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label> */}
        </div>         
      </div>
      <hr className="bg-gray-600 mt-[4.2rem] ss:mt-[0.3rem]" />
    </>
  );
}
