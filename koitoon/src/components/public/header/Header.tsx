"use client";

import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "@/context/Language";
import MainLogoBlack from "@/../public/images/logo_웹툰코이컨텐츠(B).png";
import Image from "next/image";
import Link from "next/link";

interface Menu {
  label: string;
  url: string;
  subMenus?: { label: string; url: string }[];
}

interface DataMenu {
  KO: { [key: string]: Menu };
  EN: { [key: string]: Menu };
}

const data: DataMenu = {
  KO: {
    ABOUT: {
      label: "ABOUT",
      url: "/about/company",
      subMenus: [
        { label: "회사소개", url: "/about/company" },
        { label: "파트너사", url: "/about/partners" },
      ],
    },
    WEBTOON: { label: "WEBTOON", url: "/webtoon" },
    NEWS: {
      label: "NEWS",
      url: "/news/announcements",
      subMenus: [
        { label: "공지사항", url: "/news/announcements" },
        { label: "직원채용", url: "/news/recruitment" },
      ],
    },
    CONTACT: { label: "CONTACT", url: "/contact" },
  },
  EN: {
    ABOUT: {
      label: "ABOUT",
      url: "/about/company",
      subMenus: [
        { label: "Company Info", url: "/about/company" },
        { label: "Partners", url: "/about/partners" },
      ],
    },
    WEBTOON: { label: "WEBTOON", url: "/webtoon" },
    NEWS: {
      label: "NEWS",
      url: "/news/announcements",
      subMenus: [
        { label: "Notices", url: "/news/announcements" },
        { label: "Recruitment", url: "/news/recruitment" },
      ],
    },
    CONTACT: { label: "CONTACT", url: "/contact" },
  },
};

export default function App() {
  
  const { language, setLanguage } = useContext<any>(LanguageContext);
  const [hoveredMenu, setHoveredMenu] = useState<string>();
  const [focusHover, setFocusHover] = useState(false);
  // const [colorChange, setColorChange] = useState(language);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [menuHovered, setMenuHovered] = useState(false);

  const handleButtonClick = (menuType: string) => {
    // setColorChange(menuType);
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
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [menuHovered]);

  const handleFocus = () => {
    setFocusHover(true);
  };

  const hoveredMenuIn = (menuKey: string) => {
    setHoveredMenu(menuKey);
  };

  const hoverMenuLeave = () => {
    setHoveredMenu("");
    setFocusHover(false);
  };

  const handleMenuClick = (menuKey: string) => {
    setSelectedMenu(menuKey);
  };

  return (
    <>
      <div className="hidden ss:navbar bg-base-100 fixed z-50">
        <div className="navbar-start ml-8">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost btn-circle drawer-button"
              >
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
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <ul className="menu bg-base-200 w-56 rounded-box">
                  {Object.keys(data[language as "KO" | "EN"]).map(
                    (menuKey, index) => (
                      <li key={index} className="hover:text-[#EE511F]">
                        {data[language as "KO" | "EN"][menuKey].subMenus ? (
                          <details key={index}>
                            <summary key={index}>{menuKey}</summary>
                            {data[language as "KO" | "EN"][
                              menuKey
                            ].subMenus!.map((menuItem, index) => (
                              <ul key={index}>
                                <li key={index}>
                                  <Link key={index} href={menuItem.url}>
                                    {menuItem.label}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </details>
                        ) : (
                          <Link
                            key={index}
                            href={data[language as "KO" | "EN"][menuKey].url}
                          >
                            {menuKey}
                          </Link>
                        )}
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
                  language === "KO" ? "font-bold underline text-black" : "opacity-25"
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
                  language === "EN" ? "font-bold underline text-black" : "opacity-25"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

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
              className="relative ml-8 font-bold"
            >
              <Link
                href={data[language as "KO" | "EN"][menuKey].url}
                className={`block py-2 px-3 rounded transition duration-300 ${
                  hoveredMenu === menuKey || selectedMenu === menuKey
                    ? "text-[#EE511F] hover-underline2-animation"
                    : "hover:text-[#EE511F]"
                }`}
                onClick={() => handleMenuClick(menuKey)}
              >
                {menuKey}
              </Link>

              {activeMenu === menuKey &&
                data[language as "KO" | "EN"][menuKey].subMenus && (
                  <div
                    onMouseOver={() => setMenuHovered(true)}
                    onMouseLeave={handleMenuLeave}
                    className="absolute left-0 py-2 w-48 rounded-lg shadow-xl font-['Spoqa Han Sans Neo'] z-[100] bg-white"
                  >
                    {data[language as "KO" | "EN"][menuKey].subMenus!.map(
                      (menuItem, index) => (
                        <div key={index}>
                          <Link
                            href={menuItem.url}
                            key={index}
                            className={`block px-4 py-2 text-gray-800 font-['SundayLemon'] 
                          hover:text-[#EE511F] hover-underlineSub-animation`}
                            onMouseOver={() => hoveredMenuIn(menuKey)}
                            onMouseLeave={hoverMenuLeave}
                            onFocus={handleFocus}
                            onClick={() => handleMenuClick(menuItem.url)}
                          >
                            {menuItem.label}
                          </Link>
                        </div>
                      )
                    )}
                  </div>
                )}
            </li>
          ))}
        </ul>       
        <div className="navbar-end mr-[5rem]">
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={() => handleButtonClick("KO")}
              className={`text-gray-600 text-center text-lg w-auto font-semibold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 ${
                language === "KO" ? "font-bold underline text-black" : "opacity-25"
              }`}
            >
              KO
            </button>
            <p className="text-gray-600 text-center text-lg font-bold w-auto px-2 ">
              |
            </p>
            <button
              onClick={() => handleButtonClick("EN")}
              className={`text-gray-600 text-center text-lg w-auto font-semibold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 ${
                language === "EN" ? "font-bold underline text-black" : "opacity-25"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
      <hr className="bg-gray-600 mt-[4.2rem] ss:mt-[0.3rem]" />
    </>
  );
}
