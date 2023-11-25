'use client';

import React, {useEffect} from "react";
import {
   Sidenav,
   initTE,
} from "tw-elements";

interface DataInterface {
   snap: {
       [key: string]: string[];
   };
}

const data: DataInterface = {
   snap: {
       "코믹": ["코믹", "호러"],   // "Comic"
       "학원": ["학원", "로맨스"],   // "School"
       "공포": ["공포", "판타지"],   // "Horror"
       "판타지": ["판타지", "코믹"], // "Fantasy"
       "로맨스": ["로맨스", "학원"]  // "Romance"
   }
};

export default function App() {
   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

   useEffect(() => {
      if (typeof window !== "undefined") {
          initTE({ Sidenav });
      }
  }, []);

   return (
      <>
         <nav
            id="sidenav-5"
            className="fixed pt-[7rem] left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
            data-te-sidenav-init
            data-te-sidenav-hidden="true" // 사이드바 접힌상태로 시작
            data-te-sidenav-accordion="true">
            <ul className="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>              
            {Object.entries(data.snap).map(([key, values]) => (
               <li key={key}className="relative py-2">
                  <a
                     className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                     data-te-sidenav-link-ref>
                     <span
                        className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                           className="h-4 w-4">
                           <path
                              fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                              clipRule="evenodd" />
                        </svg>
                     </span>
                     <span className="font-['SundayLemon']">{values}</span>
                     <span
                        className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
                        data-te-sidenav-rotate-icon-ref>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                           className="h-5 w-5">
                           <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd" />
                        </svg>
                     </span>
                  </a>
                  <ul
                     className="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
                     data-te-sidenav-collapse-ref>
                         {values.map(subValue => (
                     <li className="relative" key={key}>
                        <a
                           className="font-['SundayLemon'] flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                           data-te-sidenav-link-ref
                        >{subValue}</a>
                     </li>
                     ))}                    
                  </ul>
               </li>  
               ))}            
            </ul>
         </nav>

         {/* <button
            className="bg-black ml-10 mt-10 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
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
         </button>             */}
      </>
   );
}