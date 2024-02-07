"use client";

import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "@/context/Language";
import MainLogoWhite from "@/../public/images/logo_웹툰코이컨텐츠(W).png";
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
        { label: "연혁", url: "/about/history" },
        { label: "파트너사", url: "/about/partners" },
        { label: "오시는길", url: "/about/location" },
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
        { label: "연재 및 작품 문의", url: "/contact/series" },
      ],
    },
    EN: {
      ABOUT: [
        { label: "Company Info", url: "/about/company" },
        { label: "History", url: "/about/history" },
        { label: "Partners", url: "/about/partners" },
        { label: "Location", url: "/about/location" },
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
          label: "Series and Enquiries About Works",
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
    <div className="navbar bg-base-100 items-center justify-center t">
      <a href="/" className="flex w-12 h-12">
        {/* { (dark) ? <Image src={MainLogoBlack} alt="aa" className="h-auto w-auto" />
        : <Image src={MainLogoWhite} alt="aa" className="h-auto w-auto" /> } */}
        <Image src={MainLogoBlack} alt="aa" className="h-auto w-auto" />
      </a>
      <ul className="px-1 hidden lg:flex">
        {Object.keys(data[language as "KO" | "EN"]).map((menuKey, index) => (
          <li
            key={index}
            onMouseOver={() => handleMenuHover(menuKey)}
            onMouseLeave={handleMenuLeave}
            className="relative ml-8"
          >
            <a
              className="hover-underline-animation block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0
               dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 
              font-['MADE TOMMY'] font-['MADE TOMMY Outline']"
            >
              {menuKey}
            </a>
            {activeMenu === menuKey && (
              <div
                onMouseOver={() => setMenuHovered(true)}
                onMouseLeave={handleMenuLeave}
                className="absolute left-0 mt-2 py-2 w-48 dark:bg-gray-700 rounded-lg shadow-xl font-['Spoqa Han Sans Neo'] z-[100] bg-white"
              >
                {data[language as "KO" | "EN"][menuKey].map((menuItem) => (                
                    <Link
                      href={menuItem.url}
                      key={menuItem.label}
                      className="block px-4 py-2 text-gray-800 font-['SundayLemon'] hover:text-blue-500 dark:text-white hover:bg-gray-200"
                    >
                      {menuItem.label}
                    </Link>
                ))}
                {/* <Link href={""}>{renderSubMenu(menuKey)}</Link> */}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="ml-12">
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex w-[30%] pl-5">
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
          </div>
        </div>
        <label className="flex cursor-pointer gap-2">
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
        </label>
      </div>
    </div>
  );
}
