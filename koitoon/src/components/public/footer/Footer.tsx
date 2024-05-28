import Down from "../../../../public/images/svg/icon_download_24dp";
import { Location } from "../../../../public/svg/Location";
import { Logox } from "../../../../public/svg/Logx";
import Image from "next/image";

const Footer = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/pdf/Test.pdf"; // PDF 파일 경로
    link.download = "Test.pdf"; // 다운로드 시 파일 이름
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <footer className="hidden ss:block rounded-lg shadow bg-zinc-900">
        <div className="w-full max-w-screen-xl mx-auto pl-4 pt-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href=""
              className="flex items-center sm:mb-0 space-x-3 my-4 rtl:space-x-reverse"
            >
              <div className="self-center text-white font-semibold whitespace-nowrap dark:text-white text-sm">
                웹툰 코이 컨텐츠
              </div>
              {/* <button className="btn glass">회사소개서</button> */}
              <button
                onClick={downloadPDF}
                className="btn btn-sm rounded-3xl text-white bg-slate-800 hover:text-black"
              >
                회사소개서
                <span>
                  <Down />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="w-full max-w-screen-xl mx-auto pl-4 md:py-8">
          <div className="self-center mb-4 text-white text-base font-semibold whitespace-nowrap flex items-center dark:text-white">
            <Location />
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
          <div className="ml-[4px] block text-xs text-white sm:text-right dark:text-gray-800 my-2 opacity-25">
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
              <button
                onClick={downloadPDF}
                className="btn btn-sm rounded-3xl text-white bg-slate-800 hover:text-black bol border-[rgba(0,0,0,0.5)]"
              >
                회사소개서
                <span>
                  <Down />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="w-full max-w-screen-xl mx-auto pl-4 md:py-8">
          <div className="flex">
            <div className="self-center mb-4 text-white text-2xl font-semibold whitespace-nowrap flex items-center dark:text-white flex-grow">
              <Location />
              서울 마포구 잔다리로 30-11, 3F
            </div>
            <div className="flex ml-auto justify-between">
              <span className="mx-2"> <Logox /></span>
              <span className="mx-2"> <Logox /></span>
              <span className="mx-2 mr-8"> <Logox /></span>
                  
            </div>
          </div>

          <div className="flex my-[0.2rem]">
            <div className="block dark:text-gray-800 text-gray-500 text-[0.875rem]">
              Tel.
            </div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              02-2602-5250
            </div>
          </div>
          <div className="flex my-[0.2rem]">
            <div className="block dark:text-gray-800 text-gray-500 text-[0.875rem]">
              Email.
            </div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              koicontent@koicontent.com
            </div>
          </div>
          <div className="flex my-[0.2rem]">
            <div className="block dark:text-gray-800 text-gray-500 text-[0.875rem]">
              대표자
            </div>
            <div className="block text-sm text-white dark:text-gray-800 ml-2">
              이준형
            </div>
          </div>
          <div className="flex my-[0.2rem]">
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
