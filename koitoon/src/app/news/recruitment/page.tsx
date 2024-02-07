"use client";
// pages/index.tsx
import { useState, FormEvent } from "react";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import lico from "@/../public/images/lico (1).jpg"
import Link from "next/link";

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
        <div className="flex mt-16">          
          <div className="flex flex-col ">
            <div className="text-8xl font-bold">CAREER</div>
            <div className="text-5xl mt-4">CULTURE & PLAYER</div>
            <p className="mt-4 text-lg">툰코이는 언제나 통통튀는 새로운 시도와 도전을 향해 박수를 보내며, 스피드란 일처리 방식이 일품입니다.</p>
            </div>
          <Image className="h-[35rem] w-[45rem]" src={lico} alt="ad"/>        
        </div>
        <div className="text-5xl mt-8"> WORK LIFE</div>
        <div className="text-lg mt-4">플레이어들의 유연한 사고와 스튜디오 리코가 꿈꾸는 즐겁고 수평적인 성장문화를 위하여
        쾌적하고 개성적인 오피스 환경은 물론, 모두가 함께 즐길 수 있는 다양한 문화들을 만들어 나가고 있습니다.  
        </div>
        <ul className="menu w-full rounded-box">
          <li className="my-2 ">
            <details>
              <summary className="text-3xl font-bold">BETTER WORK <p className="text-sm items-center justify-around">업무기기  개인업무비용  교육비지원</p></summary>
              <ul>
                <li><a>BETTER WORK</a></li>                
              </ul>
            </details>
          </li>
          <li className="my-2">
            <details>
              <summary className="text-3xl font-bold">BETTER HEALTH <p className="text-sm items-center">건강검진 단체 상해보험 가입 24시간 의료상담 심리상담 지원</p></summary>
              <ul>
                <li><a>BETTER WORK</a></li>                
              </ul>
            </details>
          </li>
          <li className="my-2">
            <details>
              <summary className="text-3xl font-bold">BETTER HOLIDAY <p className="text-sm items-center justify-around">휴양시설 리프레시 플러스휴가 오픈개러데이</p></summary>
              <ul>
                <li><a>BETTER WORK</a></li>                
              </ul>
            </details>
          </li>
          <li className="my-2">
            <details>
              <summary className="text-3xl font-bold">BETTER LIFE <p className="text-sm items-center">대출이자 직장 어린이집 카페테리아 경조사비</p></summary>
              <ul>
                <li><a>BETTER WORK</a></li>                
              </ul>
            </details>
          </li>
        </ul>
        <div className="text-5xl mt-28 mb-2">채용 분야</div>
        <hr />
        <ul className="menu w-full rounded-box">
          <li className="my-2 ">
            <details>
              <summary className="text-3xl font-bold">[프리랜서] 작가모집 
              </summary>
              <ul>
                <li>
                  <div className="flex flex-col">
                    <h1>스튜디오 리코 인재 Pool 안내</h1>
                    <div className="text-center">본 공고에 지원하실 경우 '툰코이 작가 인재 Pool'에 등록되며,
                    구인 니즈 발생 시 가장 우선적으로 검토할 목적의 지원서를 받는 창구입니다.                    
                    </div>
                    
                    <h1>담당 업무</h1>
                      <div>
                      네이버웹툰 연재 만화의 번역 (한국어 → 일본어)
                      </div>
                      <div>
                      한국 웹툰을 일본어로 번역 (대사/효과음 등) 
                      </div>                                    

                    <h1>자격 요건 </h1>
                      <div>
                      한국어와 일본어 구사가 가능하고, 언어에 대해 끊임없이 배우고자 하는 열정이 있으신 분
                      </div>
                      <div>
                      만화/애니메이션 등의 컨텐츠에 대한 관심과 애정이 있는 분
                      </div>                    
                  </div>                  
                </li> 
                <div className="items-center justify-center center content-center mx-4 mt-8">
                <Link href="/news/recruitment/join"><button className="btn">지원하기</button></Link>   
                </div>   
                <hr className="mt-4" />
                                     
              </ul>
            </details>
          </li>        
        </ul>
      </>
    </RootLayout>
  );
};

export default EmailForm;
