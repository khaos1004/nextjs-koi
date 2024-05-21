"use client";

import { useState, FormEvent } from "react";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import lico from "@/../public/images/lico (1).jpg";
import Link from "next/link";
import Car from "../../../../public/images/news/career 1.png";

interface EmailFormData {
  to: string;
  subject: string;
  body: string;
  // 기타 필요한 필드
}

const EmailForm: React.FC = () => {
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

  return (
    <RootLayout>
      <>
        <div className="text-sm sm:breadcrumbs" data-aos="fade-up">
          <ul className="ss:hidden">
            <li>
              <a href="/">홈</a>
            </li>
            <li>
              <a href="/">NEWS</a>
            </li>
            <li>
              <a>직원채용</a>
            </li>
          </ul>
          <div className="text-4xl mt-[4rem] mb-[1rem] font-medium ss:text-center">
            직원 채용
          </div>
          <div>
            웹툰코이컨텐츠와 함께 즐겁게 일할 웹툰 작가님을 기다리고 있습니다.
          </div>
        </div>

        <div className="container mx-auto" data-aos="fade-up">
          <div className="my-[2rem]">
            <Image src={Car} alt={""} className="w-full" />
          </div>

          <div
            className="p-8 border border-violet-200 rounded-lg bg-violet-50"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold mb-12 flex items-center">
              <span className="inline-block bg-orange-600 h-4 w-4 mr-2"></span>
              웹툰 파트
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="font-bold w-2 text-xl mr-2">|</span> 상시
                  모집
                </h3>
                <ul className="list-disc ml-5">
                  <li>콘텐츠 작가: 오리지널 / 각색콘티 (그림콘티)</li>
                  <li>배경, 선화, 채색 작가</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="font-bold text-xl w-2 mr-2">|</span> 자격요건
                </h3>
                <ul className="list-disc ml-5">
                  <li>장르, 소재 무관</li>
                  <li>신입/기성 작가 무관</li>
                  <li>성인 이상 지원 가능</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="font-bold text-xl w-2 mr-2">|</span> 복지 및
                  혜택
                </h3>
                <ul className="list-disc ml-5">
                  <li>자율으로 연차/반차 사용</li>
                  <li>야근 절대 X, 칼퇴 보장</li>
                  <li>회사 창립기념일 휴무, 여름휴가 지원</li>
                  <li>외부 컨퍼런스 참석 가능</li>
                  <li>명절 선물 및 보너스 지급</li>
                  <li>다양한 종류의 간식 및 음료 상시 제공</li>
                  <li>전직원 듀얼모니터 및 맥무릎 장비 지원</li>
                  <li>도서 구매 비용 지원</li>
                  <li>고양이 있음</li>
                  <li>고양이 귀여움</li>
                  <li>고양이 털밥짐</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="font-extrabold text-xl tracking-widest w-4 mr-2">
                  |
                </span>
                지원 방법
              </h3>
              <li className="break-all">E-mail 지원: kocontent@kocontent.com</li>
              <p>지원 서류: 자유 양식 (이력서, 작품 포트폴리오, 기획안 등)</p>
              <p className="text-red-600 mt-4">
                ※ 메일 전 화대답 빠르게 연락 드리겠습니다.
              </p>
            </div>
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default EmailForm;
