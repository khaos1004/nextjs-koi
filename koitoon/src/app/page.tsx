"use client";
import Header from "@/components/public/header/Header";
import Footer from "@/components/public/footer/Footer";
import { useEffect, useState, useContext } from "react";
import {
  LanguageProvider,
  default as LanguageContext,
} from "@/context/Language";
import MainTop from "@/../../public/images/main/메인_배경.jpg";
import Main4 from "@/../../public/images/main/main_4.jpg";
import Main3 from "@/../../public/images/main/main_3.jpg";
import MainCenter from "@/../../public/images/main/메인_채용.jpg";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowR from "@/../public/svg/arrowR";
import ArrowLong from "@/../public/svg/arrowLong";
import useFont from "@/app/hooks/UseFont";
import { allCardsData } from "@/app/webtoon/Data";

const mobileText = {
  KO: {
    leading: "웹툰 트렌드와 문화를 선도하는",
    globalStudio: "글로벌 웹툰 제작사",
    goToWorks: "회사 소개",
    more: "MORE",
    recruit: "RECRUIT",
    recruitment: "직원채용",
    recruitmentDescription:
      "글로벌 웹툰을 만들어 나갈 실력있고 열정적인 인재들을 찾고 있습니다.",
  },
  EN: {
    leading:
      "Leading webtoon trends and culture, connecting authors and readers",
    globalStudio: "Global Webtoon Studio",
    goToWorks: "Company introduction",
    more: "MORE",
    recruit: "RECRUIT",
    recruitment: "Recruitment",
    recruitmentDescription:
      "We are looking for talented and passionate individuals to create global webtoons.",
  },
};

const textContent = {
  KO: {
    leading: "웹툰 트렌드와 문화를 선도하고 작가와 독자를 연결하는",
    globalStudio: "글로벌 웹툰 제작사",
    goToWorks: "회사 소개",
    more: "MORE",
    recruit: "RECRUIT",
    recruitment: "직원채용",
    recruitmentDescription:
      "글로벌 웹툰을 만들어 나갈 실력있고 열정적인 인재들을 찾고 있습니다.",
  },
  EN: {
    leading:
      "Leading webtoon trends and culture, connecting authors and readers",
    globalStudio: "Global Webtoon Studio",
    goToWorks: "Company introduction",
    more: "MORE",
    recruit: "RECRUIT",
    recruitment: "Recruitment",
    recruitmentDescription:
      "We are looking for talented and passionate individuals to create global webtoons.",
  },
};

interface CardData {
  id: number;
  image: any;
  url: any;
  title: string;
  content: string;
  hashtags: string;
  author: string;
  startDate: string;
  type: "연재작" | "완결작";
}

const HomePage: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesPerSlide, setImagesPerSlide] = useState(4);
  const [filteredCards, setFilteredCards] = useState<CardData[]>([]);

  const totalImages = allCardsData.length;

  useFont(); // 커스텀 훅 사용

  useEffect(() => {
    const sortedCards = allCardsData
      .filter((card) => isValidDate(card.startDate))
      .sort(
        (a, b) =>
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
      );
    setFilteredCards(sortedCards);
  }, []);

  const isValidDate = (dateString: string) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  };

  useEffect(() => {
    AOS.init(); // AOS 초기화

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setImagesPerSlide(mobile ? 2 : window.innerWidth < 1024 ? 3 : 4);
    };

    handleResize(); // 초기 로드 시 실행
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex + imagesPerSlide >= totalImages) {
      setCurrentIndex(totalImages - imagesPerSlide);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + imagesPerSlide);
    }
  };

  const handlePrev = () => {
    if (currentIndex - imagesPerSlide < 0) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - imagesPerSlide);
    }
  };

  const text = textContent[language];
  const text2 = mobileText[language];

  return (
    <div className="flex flex-col">
      <div className="h-16">
        <Header />
      </div>

      <div
        className="ss:flex hidden main_image relative w-full h-[35rem]"
        data-aos="fade-up"
      >
        <div className="relative w-full ss:h-[440px]">
          <Image
            src={Main4}
            alt="Main background"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-50 sm:object-cover object-contain custom-black"
          />
        </div>

        <div className="flex main_image_text w-full absolute inset-0 flex-col justify-center items-center text-center">
          <div className="mb-[7rem]">
            <div className="flex flex-col">
              <span className="text-[16px] text-[#ffffff]">
                {text2.leading}
              </span>
              <span className="font-bold text-[16px] text-[#ffffff]">
                {" "}
                {text2.globalStudio}
              </span>
            </div>
            <div className="font-bold text-[40px] text-[#ffffff]">
              WEBTOON
              <br />
              <span className="font-bold text-[40px] text-[#EE511F]">
                KOI CONTENT
              </span>
            </div>
            <div className="flex justify-center">
              <Link href="/about/company">
                <button className="btn pl-[24px] pr-[16px] py-[8px] border-[#ffffff] text-[#ffffff]  border-[1px] rounded-3xl hover:bg-[#EE511F] bg-inherit">
                  {text2.goToWorks} &nbsp; <ArrowR />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="sm:flex main_image relative w-full h-[35rem]"
        data-aos="fade-up"
      >
        <div className="relative w-full sm:h-[660px]">
          <Image
            src={Main4}
            alt="Main background"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-50 sm:object-cover object-contain custom-black"
          />
        </div>
        <div className="flex main_image_text w-full absolute inset-0 flex-col justify-center items-center text-center">
          <div className="">
            <span className="font-thin text-left">{text.leading}</span>
            <span className="font-bold"> {text.globalStudio}</span>
          </div>
          <div className="text-5xl font-bold hidden sm:block">
            WEBTOON&nbsp;
            <span className=" text-[#EE511F]">KOI CONTENT</span>
          </div>

          <div className="text-3xl font-bold hidden pad:block">
            WEBTOON&nbsp;
            <span className=" text-[#EE511F]">KOI CONTENT</span>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/about/company">
              <button className="btn text-white rounded-3xl sm:w-[10rem] hover:bg-[#EE511F] bg-inherit">
                {text.goToWorks} &nbsp; <ArrowR />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="flex flex-row min-h-screen w-screen mt-[7rem] mb-[10rem]"
        data-aos="fade-up"
      >
        <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
        <div className="flex-3 w-4/6">
          {" "}
          {/* 중앙 컨텐츠 영역 (3/5) */}
          <div className="flex text-center items-center justify-between">
            <div className="text-4xl my-[4rem] font-bold ss:text-xl">
              WEBTOON
            </div>
            <div className="font-medium flex justify-center items-center cursor-pointer">
              <Link href="/webtoon" className="flex">
                {text.more} &nbsp; <ArrowLong />
              </Link>
            </div>
          </div>
          <div className="grid ss:grid-cols-2 sm:grid-cols-4 pad:grid-cols-3 gap-8 mb-[2rem] ">
            {filteredCards
              .slice(currentIndex, currentIndex + imagesPerSlide)
              .map((card) => (
                <div
                  key={card.id}
                  className="flex flex-col items-center ss:mb-2 sm:mb-5 pad:mb-5"
                >
                  <div
                    className="relative group overflow-hidden rounded-lg w-full"
                    style={{ paddingBottom: "130%" }}
                  >
                    <Image
                      src={card.image}
                      alt="작품 이미지"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                      <div className="text-white font-semibold text-sm mb-2">
                        {card.hashtags}
                      </div>
                      <div className="text-white font-bold text-sm">
                        {card.author}
                      </div>
                      <div className="text-lg text-white">ㅡ</div>
                      <div className="text-white text-xs mb-4">
                        {card.content.length > 25
                          ? card.content.substring(0, 20) + "..."
                          : card.content}
                      </div>
                      <Link href={card.url} target="_blank">
                        <button className="bg-transparent text-white px-4 py-2 rounded-full border border-white transition-all duration-300 hover:bg-white hover:text-black">
                          View +
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="text-lg font-medium mt-4 font-korean">
                    {card.title}
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center mt-8 items-center">
            <button
              onClick={handlePrev}
              className={`bg-white rounded-full hover:bg-gray-100 mr-4 stroke-1 stroke-[#BDBDBD] ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === 0}
            >
              {/* 이전 버튼 */}
              <svg
                className="h-8 w-8 m-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className={`bg-white rounded-full hover:bg-gray-100 ml-4 stroke-1 stroke-[#BDBDBD] ${
                currentIndex + imagesPerSlide >= totalImages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentIndex + imagesPerSlide >= totalImages}
            >
              {/* 다음 버튼 */}
              <svg
                className="h-8 w-8 m-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="flex text-center items-center justify-between mt-[7rem] mb-8">
            <div className="text-4xl ss:text-2xl font-bold">{text.recruit}</div>
            <div className="font-medium flex justify-center items-center cursor-pointer">
              <Link href="/news/recruitment" className="flex">
                {text.more} &nbsp; <ArrowLong />
              </Link>
            </div>
          </div>
          <Image
            src={MainCenter}
            alt="Main center"
            style={{ objectFit: "cover" }}
            className="brightness-50 w-full h-[20rem] mb-8"
          />
          <div>
            <div className="text-3xl mb-4 font-medium ">{text.recruitment}</div>
            <div className="font-medium">{text.recruitmentDescription}</div>
          </div>
        </div>
        <div className="flex-1"></div> {/* 오른쪽 여백 (1/5) */}
      </div>
      <Footer />
    </div>
  );
};

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}
