'use client'

import { devNull } from "os";
import React, { useState, useEffect } from "react";


export default function App() {

  const [colorChange, setcolorChange] = useState("KO");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuHovered, setMenuHovered] = useState(false);

  const handleButtonClick = (menuType : string) => {
    setcolorChange(menuType);
  };

  const handleMenuHover = (menuName : string) => {
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
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mB5jFPMzg0CvPGs_tSgQLKSh-DDmtX_R4w&usqp=CAU" className="h-8" alt="companyLogo" /> */}
            <span className="self-center font-semibold whitespace-nowrap text-sky-800 dark:text-white font-['SundayLemon'] text-[2rem]">T o o n  K o i</span>
          </a>
         
          <div className="items-center flex justify-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="hover-underline-animation block py-2 px-3 text-white hover:text-blue-700 rounded md:bg-transparent 
                md:text-black md:p-0 md:dark:text-blue-500 font-['SundayLemon']" aria-current="page">Home</a>                
              </li>              

              <li onMouseOver={() => handleMenuHover("About")} 
                onMouseLeave={handleMenuLeave} className="relative">
                <a href="#" className="hover-underline-animation block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-['SundayLemon']">About</a>
                   {activeMenu === "About" && (
                  <div  onMouseOver={() => setMenuHovered(true)} 
                  onMouseLeave={handleMenuLeave} className="absolute absolutes left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl ">
                    <a href="#" className="block px-4 py-2 text-gray-800 font-['SundayLemon'] hover:text-blue-500 hover:bg-gray-200">Submenu 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 font-['SundayLemon'] hover:text-blue-500 hover:bg-gray-200">Submenu 2</a>
                  </div>
                )}
              </li>

              <li onMouseOver={() => handleMenuHover("Contents")} 
                onMouseLeave={handleMenuLeave} className="relative">
                <a href="#" className="hover-underline-animation block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-['SundayLemon']">Contents</a>
                   {activeMenu === "Contents" && (
                  <div  onMouseOver={() => setMenuHovered(true)} 
                  onMouseLeave={handleMenuLeave} className="absolute absolutes left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                    <a href="#" className="block px-4 py-2 text-gray-800 font-['SundayLemon'] hover:text-blue-500 hover:bg-gray-200">Submenu 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 font-['SundayLemon'] hover:text-blue-500 hover:bg-gray-200">Submenu 2</a>
                  </div>
                )}
              </li>
              <li  onMouseOver={() => handleMenuHover("PR")} 
                onMouseLeave={handleMenuLeave} className="relative">
                <a href="#" className="hover-underline-animation block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-['SundayLemon']">PR</a>
                   {activeMenu === "PR" && (
                  <div  onMouseOver={() => setMenuHovered(true)} 
                  onMouseLeave={handleMenuLeave} className="absolute absolutes left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                    <a href="#" className="block px-4 py-2 text-gray-800 font-['SundayLemon'] hover:text-blue-500 hover:bg-gray-200">Submenu 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 font-['SundayLemon'] hover:text-blue-500 hover:bg-gray-200">Submenu 2</a>
                  </div>
                )}
              </li>
              <li  onMouseOver={() => handleMenuHover("Contact")} 
                onMouseLeave={handleMenuLeave} className="relative">
                <a href="#" className="hover-underline-animation block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-['SundayLemon']">Contact</a>
                   {activeMenu === "Contact" && (
                  <div  onMouseOver={() => setMenuHovered(true)} 
                  onMouseLeave={handleMenuLeave} className="absolute absolutes left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                    <a href="#" className="block px-4 py-2 text-gray-800  font-['SundayLemon'] hover:text-blue-500 hover:bg-gray-200">Submenu 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 font-['SundayLemon'] hover:text-blue-500 hover:bg-gray-200">Submenu 2</a>
                  </div>
                )}
              </li>
              <li  onMouseOver={() => handleMenuHover("Management")} 
                onMouseLeave={handleMenuLeave} className="relative">
                <a href="#" className="hover-underline-animation block py-2 px-3 bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-['SundayLemon']">Management</a>
                   {activeMenu === "Management" && (
                  <div  onMouseOver={() => setMenuHovered(true)} 
                  onMouseLeave={handleMenuLeave} className="absolute absolutes left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-['SundayLemon'] hover:text-blue-500">Submenu 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-['SundayLemon'] hover:text-blue-500">Submenu 2</a>
                  </div>
                )}
              </li>
              <li>
              <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <div className="flex w-[30%] pl-5">
                  <button onClick={() => handleButtonClick("KO")} className={`text-gray-600 text-center text-lg font-semibold w-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 ${colorChange == "KO" ? "font-bold underline decoration-gray-600" : "opacity-25"}`}>KO</button>
                  <p className="text-gray-600 text-center text-lg font-bold w-auto px-2">|</p>
                  <button onClick={() => handleButtonClick("EN")} className={`text-gray-600 text-center text-lg w-auto font-semibold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 ${colorChange == "EN" ? "font-bold underline decoration-gray-600" : "opacity-25"}`}>EN</button>
                </div>
                </div>
              </li>  
                        <li className="pt-1">
              <label className="flex cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input type="checkbox" value="dark" className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>      
</li>    
            </ul>
          </div>
        </div>

      </nav>
      <hr className="animate-pulse mt-2 shadow" />
    </>
  );
}



