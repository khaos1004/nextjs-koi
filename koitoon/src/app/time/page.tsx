import React from "react";

const Timeline = () => {
  return (
    <>
      <ul className="timeline timeline-snap-icon max-sm:timeline-compact timeline-vertical">
        <li>
          
          <div className="timeline-middle">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#EA3323"
              className="inline-block align-middle"
            >
              <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
            </svg> */}
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
          <span className="flex timeline-start mb-[17.5rem] items-center">
            <div className="text-5xl font-bold text-black mr-2 ">2023</div>
            <div className="relative items-center">
              <div className="border-t border-dotted border-[#EE511F] w-[3rem]"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#EE511F] rounded-full w-1 h-1"></div>
            </div>
          </span>
          <span className="timeline-end sm:text-start mb-[8.5rem] mr-8 text-left">
            <div className="flex">
              <div className="text-lg font-black ml-4 mr-4 flex-none">12월</div>
              <div className="flex-1">
                "text.historyData[1].events[0].event"
              </div>
            </div>
          </span>
          <hr
            className="bg-[#EE511F]"
            style={{ width: "1px", height: "100%", margin: "0", padding: "0" }}
          />
        </li>
        <li className="h-[20rem]" style={{ margin: "0", padding: "0" }}>
        <hr  className="bg-[#EE511F]"
            style={{ width: "1px", height: "100%", margin: "0", padding: "0" }}/>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#EA3323"
              className="h-5 w-5"
            >
              <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
            </svg>
          </div>
          <span className="flex timeline-start mb-[17.5rem] items-center">
            <div className="text-5xl font-bold text-black mr-2 ">2023</div>
            <div className="relative items-center">
              <div className="border-t border-dotted border-[#EE511F] w-[3rem]"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#EE511F] rounded-full w-1 h-1"></div>
            </div>
          </span>
          <span className="timeline-end sm:text-start mb-[8.5rem] mr-8 text-left">
            <div className="flex">
              <div className="text-lg font-black ml-4 mr-4 flex-none">12월</div>
              <div className="flex-1">
                "text.historyData[1].events[0].event"
              </div>
            </div>
          </span>
          <hr
            className="bg-[#EE511F]"
            style={{ width: "1px", height: "100%", margin: "0", padding: "0" }}
          />
        </li>
        {/* 반복되는 li 요소들 */}
      </ul>

      {/* 기존~~~ */}
      {/* 기존~~~ */}
      {/* 기존~~~ */}
      {/* 기존~~~ */}
      {/* 기존~~~ */}
      {/* 기존~~~ */}
      {/* 기존~~~ */}
      {/* 기존~~~ */}
      {/* 기존~~~ */}
      {/* 기존~~~ */}

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#EA3323"
              className="h-5 w-5"
            >
              <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">1984</time>
            <div className="text-lg font-black">First Macintosh computer</div>
            The Apple Macintosh—later rebranded as the Macintosh 128K—is the
            original Apple Macintosh personal computer. It played a pivotal role
            in establishing desktop publishing as a general office function. The
            motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were
            housed in a beige case with integrated carrying handle; it came with
            a keyboard and single-button mouse.
          </div>
          <hr  className="bg-[#EE511F]"
            style={{ width: "1px", height: "100%", margin: "0", padding: "0" }}/>
        </li>
        <li>
          <hr  className="bg-[#EE511F]"
            style={{ width: "1px", height: "100%", margin: "0", padding: "0" }}/>
          <div className="timeline-middle">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#EA3323"
              className="h-5 w-5"
            >
              <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">1998</time>
            <div className="text-lg font-black">iMac</div>
            iMac is a family of all-in-one Mac desktop computers designed and
            built by Apple Inc. It has been the primary part of Apple's consumer
            desktop offerings since its debut in August 1998, and has evolved
            through seven distinct forms
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
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2001</time>
            <div className="text-lg font-black">iPod</div>
            The iPod is a discontinued series of portable media players and
            multi-purpose mobile devices designed and marketed by Apple Inc. The
            first version was released on October 23, 2001, about 8+1⁄2 months
            after the Macintosh version of iTunes was released. Apple sold an
            estimated 450 million iPod products as of 2022. Apple discontinued
            the iPod product line on May 10, 2022. At over 20 years, the iPod
            brand is the oldest to be discontinued by Apple
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
            iPhone is a line of smartphones produced by Apple Inc. that use
            Apple's own iOS mobile operating system. The first-generation iPhone
            was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since
            then, Apple has annually released new iPhone models and iOS updates.
            As of November 1, 2018, more than 2.2 billion iPhones had been sold.
            As of 2022, the iPhone accounts for 15.6% of global smartphone
            market share
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
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2015</time>
            <div className="text-lg font-black">Apple Watch</div>
            The Apple Watch is a line of smartwatches produced by Apple Inc. It
            incorporates fitness tracking, health-oriented capabilities, and
            wireless telecommunication, and integrates with iOS and other Apple
            products and services
          </div>
        </li>
      </ul>
    </>
  );
};

export default Timeline;
