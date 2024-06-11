import React from "react";

const Timeline: React.FC = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {/* 제일위 */}
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
        <span className="flex timeline-end md:text-end mb-[8rem] items-center">
          <div className="relative">
            <div className="border-t border-dotted border-orange-500 w-[3rem]"></div>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full w-1 h-1"></div>
          </div>
          <div className="text-3xl text-orange-600 ml-2">1984</div>
        </span>
        <span className="timeline-start md:text-end mb-[6rem] mr-8 text-right">
          <div className="flex">
            <div className="flex-1">dsadsadsadsadsadsadsadsadsa</div>
            <div className="text-lg font-black ml-4 flex-none">12월</div>
          </div>
          <div className="flex">
            <div className="flex-1">kerdsadsadsaddsadsaoro</div>
            <div className="text-lg font-black ml-4 flex-none">12월</div>
          </div>
        </span>
        <hr className="bg-orange-500" />
      </li>
      {/* 제일위 */}
      {/* 제일위 */}
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
        <span className="flex timeline-start md:text-end mb-[8rem] items-center">
          
          <div className="text-3xl text-orange-600 ml-2">1984</div>
          <div className="relative">
            <div className="border-t border-dotted border-orange-500 w-[3rem]"></div>
            <div className="absolute left-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full w-1 h-1"></div>
          </div>
        </span>
        <span className="timeline-end md:text-end mb-[6rem] mr-8 text-left">
          <div className="flex">
            <div className="flex-1">dsadsadsadsadsadsadsadsadsa</div>
            <div className="text-lg font-black ml-4 flex-none">12월</div>
          </div>
          <div className="flex">
            <div className="flex-1">kerdsadsadsaddsadsaoro</div>
            <div className="text-lg font-black ml-4 flex-none">12월</div>
          </div>
        </span>
        <hr className="bg-orange-500" />
      </li>
      {/* 제일위 */}
      
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
          <time className="font-mono italic">1998</time>
          <div className="text-lg font-black">iMac</div>
          iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
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
          <time className="font-mono italic">2001</time>
          <div className="text-lg font-black">iPod</div>
          The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
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
          <time className="font-mono italic">2007</time>
          <div className="text-lg font-black">iPhone</div>
          iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share
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
          <time className="font-mono italic">2015</time>
          <div className="text-lg font-black">Apple Watch</div>
          The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services
        </div>
      </li>
    </ul>
  )
};

export default Timeline;
