"use client";

import { useState, FormEvent, useEffect, useContext } from "react";
import axios from "axios";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import Link from "next/link";
import CarPC from "../../../../public/images/news/채용공고_배경_데스크탑.jpg";
import CarMobile from "../../../../public/images/news/채용공고_배경_모바일.jpg";
import Hourglass from "../../../../public/images/news//Vector.png";
import Hand from "../../../../public/images/news//Vector (1).png";
import Paper from "../../../../public/images/news//Vector (2).png";
import Focus from "../../../../public/images/news//Vector (3).png";
import {
  LanguageProvider,
  default as LanguageContext,
} from "@/context/Language"; // 올바르게 import
import AOS from "aos";
import "aos/dist/aos.css";
import useFont from "@/app/hooks/UseFont";

interface EmailFormData {
  to: string;
  subject: string;
  body: string;
  // 기타 필요한 필드
}

const textContent = {
  KO: {
    home: "홈",
    news: "NEWS",
    recruitment: "직원채용",
    welcomeMessage:
      "웹툰코이컨텐츠와 함께 즐겁게 일할 웹툰 작가님을 기다리고 있습니다.",
    webtoonPart: "웹툰 파트",
    recruitmentTitle: "상시 모집",
    qualification: "자격요건",
    benefits: "복지 및 혜택",
    applicationMethod: "지원 방법",
    recruitmentContent: "콘텐츠 작가: 오리지널 / 각색콘티 (그림콘티)",
    backgroundArtist: "배경, 선화, 채색 작가",
    requirements: [
      "장르, 소재 무관",
      "신입/기성 작가 무관",
      "성인 이상 지원 가능",
    ],
    benefitsContent: [
      "자율으로 연차/반차 사용",
      "야근 절대 X, 칼퇴 보장",
      "회사 창립기념일 휴무, 여름휴가 지원",
      "외부 컨퍼런스 참석 가능",
      "명절 선물 및 보너스 지급",
      "다양한 종류의 간식 및 음료 상시 제공",
      "전직원 듀얼모니터 및 맥무릎 장비 지원",
      "도서 구매 비용 지원",
    ],
    applicationInstructions: [
      "E-mail 지원: koicontent@koicontent.com",
      "지원 서류: 자유 양식 (이력서, 작품 포트폴리오, 기획안 등)",
      "※ 확인 후 최대한 빠르게 연락 드리겠습니다",
    ],
  },
  EN: {
    home: "Home",
    news: "NEWS",
    recruitment: "Recruitment",
    welcomeMessage:
      "We are looking for webtoon artists to work happily with Webtoon Koi Content.",
    webtoonPart: "Webtoon Part",
    recruitmentTitle: "Ongoing Recruitment",
    qualification: "Qualifications",
    benefits: "Welfare and Benefits",
    applicationMethod: "How to Apply",
    recruitmentContent: "Content Writer: Original / Adaptation (Storyboard)",
    backgroundArtist: "Background, Line Art, Coloring Artist",
    requirements: [
      "No restrictions on genre or material",
      "No restrictions on experience (new/experienced)",
      "Must be an adult",
    ],
    benefitsContent: [
      "Flexible use of annual/half-day leave",
      "No overtime, guaranteed to leave work on time",
      "Day off on company foundation day, support for summer vacation",
      "Can attend external conferences",
      "Holiday gifts and bonuses",
      "Various snacks and drinks provided at all times",
      "Support for dual monitors and MacBook equipment for all employees",
      "Support for book purchases",
    ],
    applicationInstructions: [
      "E-mail Application: kocontent@kocontent.com",
      "Application Documents: Free format (resume, work portfolio, project proposal, etc.)",
      "※ I'll check and get back to you as soon as possible",
    ],
  },
};

const EmailForm: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const text = textContent[language];
  useFont(); // 커스텀 훅 사용

  const [formData, setFormData] = useState<EmailFormData>({
    to: "khaos1004@naver.com",
    subject: "테스트",
    body: "테스트",
  });

  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://www.worksapis.com/v1.0/users/khaos1004@naver.com/mail",
        {
          userId: "me",
          ...formData,
          contentType: "html",
          userName: "보내는 사람 이름",
          attachments: [], // 첨부 파일 정보
        }
      );
      // 성공 처리
    } catch (error) {
      console.error("Failed to send email:", error);
      // 에러 처리
    }
  };

  useEffect(() => {
    AOS.init(); // AOS 초기화
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('body *');
    elements.forEach((element) => {
      // 텍스트 컨텐츠에서 HTML 주석과 공백 문자를 제거
      const textContent = (element.textContent?.replace(/<!--.*?-->/g, '').trim()) || '';
      if (/^[\x00-\x7F]*$/.test(textContent)) {
        element.classList.add('font-english');
      } else {
        element.classList.add('font-korean');
      }
    });
  }, []);

  return (
    <RootLayout>
      <>
        <div
          className="text-sm sm:breadcrumbs pad:breadcrumbs"
          data-aos="fade-up"
        >
          <ul className="hidden sm:flex pad:flex">
            <li>
              <Link href="/">{text.home}</Link>
            </li>
            <li>
              <Link href="/">{text.news}</Link>
            </li>
            <li>
              <a>{text.recruitment}</a>
            </li>
          </ul>
          <div
            className="font-bold text-[40px] mt-[4rem] mb-[1rem] ss:text-center"
            style={{ lineHeight: "1.6" }}
          >
            {text.recruitment}
          </div>

          <div className="text-[20px] ss:text-center" style={{ lineHeight: "1.6" }}>{text.welcomeMessage}</div>
        </div>

        <div className="container mx-auto mb-[7rem]" data-aos="fade-up  ">
          <div className="my-[2rem] ss:hidden flex" data-aos="fade-up">
            <Image src={CarPC} alt={""} className="w-full" />
          </div>

          <div className="my-[2rem] hidden ss:flex">
            <Image src={CarMobile} alt={""} />
          </div>

          {/* 모바일 */}
          <div className="p-8 border border-violet-200 rounded-lg bg-violet-50 sm:hidden pad:hidden">
            <h2 className="text-2xl font-bold mb-12 flex items-center ss:text-center">
              <span className="inline-block bg-orange-600 h-4 w-4 mr-2 ss:text-center"></span>
              <span className="ss:text-center"> {text.webtoonPart}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="font-bold w-2 text-xl mr-2">|</span>{" "}
                  {text.recruitmentTitle}
                  <Image
                    src={Hourglass}
                    className={`ml-4 w-6 ${language === "EN" ? "mr-20" : ""}`}
                    alt={""}
                  />
                </h3>
                <ul className="list-disc ml-8">
                  <li>{text.recruitmentContent}</li>
                  <li>{text.backgroundArtist}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="font-bold text-xl w-2 mr-2">|</span>{" "}
                  {text.qualification}
                  <Image src={Paper} className="ml-4 w-7" alt={""} />
                </h3>
                <ul className="list-disc ml-8">
                  {text.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2 flex items-center w-full">
                  <span className="font-extrabold text-xl tracking-widest w-4 mr-2">
                    |
                  </span>
                  {text.applicationMethod}
                  <Image
                    src={Focus}
                    className={`ml-4 w-8 ${language === "EN" ? "mr-12" : ""}`}
                    alt={""}
                  />
                </h3>
                <ul className="list-disc ml-8">
                  {text.applicationInstructions.map((instruction, index) =>
                    index != 2 ? <li key={index}>{instruction}</li> : ""
                  )}
                </ul>
                <span className="text-[#EE511F] text-xs">
                  {text.applicationInstructions[2]}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center w-full">
                  <span className="font-bold text-xl w-2 mr-2">|</span>{" "}
                  {text.benefits}
                  <Image
                    src={Hand}
                    className={`ml-4 w-8 ${language === "EN" ? "mr-16" : ""}`}
                    alt={""}
                  />
                </h3>
                <ul className="list-disc ml-8">
                  {text.benefitsContent.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* pad */}
          <div className="p-8 border border-violet-200 rounded-lg bg-violet-50 sm:hidden ss:hidden">
            <h2 className="text-2xl font-bold mb-12 flex items-center ss:text-center">
              <span className="inline-block bg-orange-600 h-4 w-4 mr-2 ss:text-center"></span>
              <span className=""> {text.webtoonPart}</span>
            </h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="font-bold w-2 text-xl mr-2">|</span>{" "}
                  {text.recruitmentTitle}
                  <Image
                    src={Hourglass}
                    className={`ml-4 w-6 ${language === "EN" ? "mr-20" : ""}`}
                    alt={""}
                  />
                </h3>
                <ul className="list-disc ml-8">
                  <li>{text.recruitmentContent}</li>
                  <li>{text.backgroundArtist}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="font-bold text-xl w-2 mr-2">|</span>{" "}
                  {text.qualification}
                  <Image src={Paper} className="ml-4 w-7" alt={""} />
                </h3>
                <ul className="list-disc ml-8">
                  {text.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2 flex items-center w-full">
                  <span className="font-extrabold text-xl tracking-widest w-4 mr-2">
                    |
                  </span>
                  {text.applicationMethod}
                  <Image
                    src={Focus}
                    className={`ml-4 w-8 ${language === "EN" ? "mr-12" : ""}`}
                    alt={""}
                  />
                </h3>
                <ul className="list-disc ml-8">
                  {text.applicationInstructions.map((instruction, index) =>
                    index != 2 ? <li key={index}>{instruction}</li> : ""
                  )}
                </ul>
                <span className="text-[#EE511F] text-xs mr-[10rem] ml-[0.75rem]">
                  {text.applicationInstructions[2]}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center w-full">
                  <span className="font-bold text-xl w-2 mr-2">|</span>{" "}
                  {text.benefits}
                  <Image
                    src={Hand}
                    className={`ml-4 w-8 ${language === "EN" ? "mr-16" : ""}`}
                    alt={""}
                  />
                </h3>
                <ul className="list-disc ml-8">
                  {text.benefitsContent.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* PC화면  */}
          <div
            className="p-8 border border-violet-200 rounded-lg bg-violet-50 ss:hidden pad:hidden"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold mb-12 flex items-center ss:text-center">
              <span className="inline-block bg-orange-600 h-4 w-4 mr-2 ss:text-center"></span>
              <span className="ss:text-center"> {text.webtoonPart}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="font-bold w-2 text-xl mr-2">|</span>{" "}
                  {text.recruitmentTitle}
                  <Image src={Hourglass} className="ml-4 w-6" alt={""} />
                </h3>
                <ul className="list-disc ml-8">
                  <li>{text.recruitmentContent}</li>
                  <li>{text.backgroundArtist}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="font-bold text-xl w-2 mr-2">|</span>{" "}
                  {text.qualification}
                  <Image src={Paper} className="ml-4 w-7" alt={""} />
                </h3>
                <ul className="list-disc ml-8">
                  {text.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="font-bold text-xl w-2 mr-2">|</span>{" "}
                  {text.benefits}
                  <Image src={Hand} className="ml-4 w-8" alt={""} />
                </h3>
                <ul className="list-disc ml-8">
                  {text.benefitsContent.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="font-extrabold text-xl tracking-widest w-4 mr-2">
                  |
                </span>
                {text.applicationMethod}
                <Image src={Focus} className="ml-4 w-8" alt={""} />
              </h3>
              <ul className="list-disc ml-8">
                {text.applicationInstructions.map((instruction, index) =>
                  index != 2 ? <li key={index}>{instruction}</li> : ""
                )}
              </ul>
              <span className="text-[#EE511F] text-xs mr-[10rem] ml-[0.75rem]">
                {text.applicationInstructions[2]}
              </span>
            </div>
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default function Home() {
  return (
    <LanguageProvider>
      <EmailForm />
    </LanguageProvider>
  );
}
