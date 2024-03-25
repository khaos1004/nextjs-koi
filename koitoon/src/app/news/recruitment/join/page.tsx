"use client";
// pages/index.tsx
import { useState, FormEvent } from "react";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import RootLayout from "@/components/layout/root/RootLayout";
import Image from "next/image";
import lico from "@/../public/images/lico (1).jpg";
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
        <div className="flex mt-8 mb-24">
          <div className="text-6xl font-bold">TOONKOI</div>
          <div className="text-3xl mt-4 ml-4">지원서</div>
        </div>
        <div className="flex">
          <div className="text-2xl mt-4">기본 인적사항</div>
          <div className="mt-4 mx-2 text-red-800">필수</div>
        </div>

        <div className="flex mt-4">
          <label className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="이름"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="생년월일 예) 1990.01.01"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="이메일"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <div className="flex mt-4">
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              성별
            </option>
            <option>남자</option>
            <option>여자</option>
          </select>
          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="국적"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="전화번호"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <select className="select select-bordered w-full max-w-xs ml-2">
            <option disabled selected>
              지원경로
            </option>
            <option>네이버 배너광고</option>
            <option>임직원 추천</option>
            <option>교수 추천</option>
          </select>
        </div>

        <div className="flex mt-8">
          <div className="text-2xl mt-4">학력사항</div>
          <div className="mt-4 mx-2 text-red-800">필수</div>
        </div>

        <div className="flex mt-4">
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              구분
            </option>
            <option>고등학교</option>
            <option>전문대학</option>
            <option>대학교</option>
            <option>대학원(석사)</option>
            <option>대학원(박사)</option>
          </select>
          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="학교명"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="입학년월"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="졸업년월"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="text-gray-400 mt-2">
          학력은 고등학교에서부터 현 최종학력 순으로 순차적으로 기재하시기
          바랍니다.
          <br />
          해당 항목을 모두 기입한 후, 완료버튼을 누르면 다음 항목이
          활성화됩니다.
          <br />
          입학년월/졸업년월은 YYYY.MM 순서로 입력해 주세요. (예: 2012.02)
          <br />
          복수전공 및 이중전공을 이수하신 분들은 부전공란에 입력해주세요.
          <br />
        </div>

        <div className="flex mt-8">
          <div className="text-2xl mt-4">경력사항</div>
          <div className="mt-4 mx-2 text-red-800">필수</div>
        </div>

        <div className="flex mt-4">
          <label className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="회사명"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="부서명"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="일사일"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="퇴사일"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="직위"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="직무"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="text-gray-400 mt-2">
          해당 항목을 모두 기입한 후, 완료버튼을 누르면 다음 항목이 활성화됩니다<br />
          입사일/퇴사일은 "YYYY.MM.DD" 순서로 입력해 주세요 (예 : 2012.02.22)<br />
          고교졸업 이후 정규직 Full-time 경력만 기재합니다 (추후 증빙서류 제출<br />
          필수) 인턴십, 아르바이트 및 증명이 불가능한 프리랜서 경력 등은<br />
          기재하지 않습니다 최종 회사에 재직중이면, 퇴사일은 비워 두셔도 됩니다
        </div>

        <div className="flex mt-8">
          <div className="text-2xl mt-4">자격/어학 사항</div>
        </div>

        <div className="flex mt-4">
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              구분
            </option>
            <option>자격</option>
            <option>어학</option>
          </select>
          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="자격/면허종류"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="등급"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="취득/응시일"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ml-2">
            <input
              type="text"
              placeholder="발급기관"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <div className="flex mt-8">
          <div className="text-2xl mt-4">직무질문</div>
          <div className="mt-4 mx-2 text-red-800">필수</div>
        </div>

        <div className="flex flex-col mt-4">
          <div className="text-red-600">
            [필수] TOONKOI에 지원한 동기는 무엇인가요? 참여했던 프로젝트를
            중심으로 본인의 경험과 경쟁력에 대해 구체적으로 알려주세요.
          </div>
          <textarea
            placeholder="Bio"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-2"
          ></textarea>
        </div>

        <div className="flex flex-col mt-4">
          <div className="text-red-600">
            [필수] 1주 단위 기준으로, 본인이 작업 가능한 회차수를 기재해 주세요.
            (보다 구체적으로 작성해 주시면 좋습니다.)
          </div>
          <textarea
            placeholder="Bio"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-2"
          ></textarea>
        </div>

        <div className="flex mt-8">
          <div className="text-2xl mt-4">첨부자료</div>
        </div>
        <input type="file" />
        <label className="form-control w-full max-w-xs mt-4">
          <input
            type="text"
            placeholder="http://"
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <div className="flex">
          <div className="flex-col mr-[15rem]">
            <div className="flex mt-8">
              <div className="text-2xl mt-4">병역사항</div>
              <div className="mt-4 mx-2 text-red-800">필수</div>
            </div>
            <div className="flex flex-col mt-4">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  구분
                </option>
                <option>만기제대</option>
                <option>복무중</option>
              </select>
            </div>
          </div>

          <div className="flex-col mr-[15rem]">
            <div className="flex mt-8">
              <div className="text-2xl mt-4">보훈대상 여부</div>
              <div className="mt-4 mx-2 text-red-800">필수</div>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer mt-4">
                <span className="label-text">대상</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-red-500"
                  checked
                />
                <span className="label-text">비대상</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  checked
                />
              </label>
            </div>
          </div>

          <div className="flex-col">
            <div className="flex mt-8">
              <div className="text-2xl mt-4">장애사항</div>
              <div className="mt-4 mx-2 text-red-800">필수</div>
            </div>
            <select className="select select-bordered w-full max-w-xs mt-4">
              <option disabled selected>
                해당없음
              </option>
              <option>해당없음</option>
              <option>일반</option>
              <option>신재</option>
              <option>보훈</option>
            </select>
          </div>
        </div>
        <hr className="my-4" />
        <div className="items-center justify-center my-8">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ml-[32rem] mr-4">
            취소
          </button>
          <button className="btn bg-black btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white focus:bg-gray-600">
            지원서 제출
          </button>
        </div>
      </>
    </RootLayout>
  );
};

export default EmailForm;
