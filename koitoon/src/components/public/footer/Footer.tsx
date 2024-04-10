import Down from "../../../../public/images/svg/icon_download_24dp";
import Location from "../../../../public/images/svg/icons8-채점자-24.png";
import Location2 from "../../../../public/images/svg/icon_place_36dp";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="hidden ss:block rounded-lg shadow bg-zinc-900">
        <div className="w-full max-w-screen-xl mx-auto pl-4 pt-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href=""
              className="flex items-center sm:mb-0 space-x-3 my-4 rtl:space-x-reverse"
            >
              <div className="self-center text-white font-semibold whitespace-nowrap dark:text-white text-lg">
                웹툰 코이 컨텐츠
              </div>
              {/* <button className="btn glass">회사소개서</button> */}
              <button className="btn btn-sm rounded-3xl text-white bg-slate-800 hover:text-black">
                회사소개서
                <span>
                  <Down />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="w-full max-w-screen-xl mx-auto pl-4 md:py-8">
          <div className="self-center mb-4 text-white text-2xl font-semibold whitespace-nowrap flex dark:text-white">
            <Location2 />
            서울 마포구 잔다리로 30-11, 3F
          </div>
          <div className="flex">
            <div className="block dark:text-gray-800 text-gray-500">Tel.</div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              02-2602-5250
            </div>
          </div>
          <div className="flex">
            <div className="block dark:text-gray-800 text-gray-500">Email.</div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              koicontent@koicontent.com
            </div>
          </div>
          <div className="flex">
            <div className="block dark:text-gray-800 text-gray-500">대표자</div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              이준형
            </div>
          </div>
          <div className="flex">
            <div className="block dark:text-gray-800 text-gray-500">
              사업자 등록번호
            </div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              853-09-00557
            </div>
          </div>
          <div className="ml-12 block text-sm text-white sm:text-right dark:text-gray-800 my-2 opacity-25">
            Copyright © WEBTOON KOI CONTENT.All Rights Reserved
          </div>
        </div>
      </footer>
{/* ------------------------------------------------------------------------- */}
      <footer className="rounded-lg shadow ss:hidden bg-zinc-900">
        <div className="w-full max-w-screen-xl mx-auto pl-4 pt-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href=""
              className="flex items-center sm:mb-0 my-4 space-x-3 rtl:space-x-reverse"
            >
              <div className="self-center text-white font-semibold whitespace-nowrap dark:text-white text-[1rem] font-['Spoqa Han Sans Neo']">
                웹툰 코이 컨텐츠
              </div>
              {/* <button className="btn glass">회사소개서</button> */}
              <button className="btn btn-sm rounded-3xl text-white bg-slate-800 hover:text-black bol border-[rgba(0,0,0,0.5)]">
            
                회사소개서
                <span>
                  <Down />
                </span>
              </button>            
            </a>
          </div>
        </div>
        <div className="w-full max-w-screen-xl mx-auto pl-4 md:py-8">
          <div className="self-center mb-4 text-white whitespace-nowrap flex text-[1.75rem] font-normal">
            <Location2 />
            서울 마포구 잔다리로 30-11, 3F
          </div>
          <div className="flex">
            <div className="block dark:text-gray-800 text-gray-500 text-[0.875rem]">Tel.</div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              02-2602-5250
            </div>
          </div>
          <div className="flex">
            <div className="block dark:text-gray-800 text-gray-500 text-[0.875rem]">Email.</div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              koicontent@koicontent.com
            </div>
          </div>
          <div className="flex">
            <div className="block dark:text-gray-800 text-gray-500 text-[0.875rem]">대표자</div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              이준형
            </div>
          </div>
          <div className="flex">
            <div className="block dark:text-gray-800 text-gray-500 text-[0.875rem]">
              사업자 등록번호
            </div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              853-09-00557
            </div>
          </div>
          <div className="block text-sm text-white sm:text-right dark:text-gray-800 my-2 opacity-25">
            Copyright © WEBTOON KOI CONTENT.All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
