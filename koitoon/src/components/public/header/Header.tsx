'use client'

import React, { useState } from "react";


export default function App() {
  // 현재 메뉴 상태를 추적하는 useState 훅

  const [colorChange, setcolorChange] = useState("KO");

  const handleButtonClick = (menuType: string) => {
    // 상태 업데이트        
    setcolorChange(menuType);
  };
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            className="bg-yellow-400 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-yellow-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg"
            data-te-sidenav-toggle-ref
            data-te-target="#sidenav-5"
            aria-controls="#sidenav-5"
            aria-haspopup="true">
            <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd" />
              </svg>
            </span>
          </button>
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mB5jFPMzg0CvPGs_tSgQLKSh-DDmtX_R4w&usqp=CAU" className="h-8" alt="companyLogo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ToonKoi</span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex w-[30%] pl-5">
              <button onClick={() => handleButtonClick("KO")} className={`text-gray-600 text-center text-lg font-semibold w-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 ${colorChange == "KO" ? "font-bold" : "opacity-25"}`}>KO</button>
              <p className="text-gray-600 text-center text-lg font-bold w-auto px-2">|</p>
              <button onClick={() => handleButtonClick("EN")} className={`text-gray-600 text-center text-lg w-auto font-semibold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 ${colorChange == "EN" ? "font-bold" : "opacity-25"}`}>EN</button>
            </div>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white hover:text-blue-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contents</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">PR</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">정산관리</a>
              </li>
            </ul>
          </div>
        </div>

      </nav>
      <hr className="animate-pulse mt-2" />
    </>
  );
}
