'use client'

import { useContext } from "react";
import LanguageContext from "@/context/Language";

export const LangComponent = (lang:any) => {
    const intro: any = {
        KO: "툰코이(ToonKoi)'은 한국에서 개발된 웹툰 플랫폼입니다. 이 플랫폼은 다양한 장르의 웹툰을 제공하며 한국의 웹툰 시장에서 주목받고 있는 서비스 중 하나입니다. 툰코이은 사용자 친화적인 인터페이스와 독특한 콘텐츠로 인기를 얻고 있으며 한국뿐만 아니라 해외에서도 사용자들에게 접근하고 있습니다. 이 플랫폼은 신진 작가들에게 작품을 게시할 기회를 제공함으로써 다양한 스토리와 예술 스타일을 선보이고 있습니다. 웹툰은 디지털 만화의 한 형태로 스크롤하여 읽을 수 있는 형식이 특징이며, 코이툰은 이러한 현대적인 만화 소비 방식을 잘 반영하고 있습니다.",
        EN: "ToonKoi is a webtoon platform developed in Korea. The platform provides various genres of webtoons, and it is one of the services that is receiving attention in the Korean webtoon market. Koitoon is gaining popularity for its user-friendly interface and unique content, and it is reaching users not only in Korea but also abroad. The platform presents a variety of stories and art styles by providing opportunities for up-and-coming writers to post their works. Webtoons are a form of digital cartoons, featuring a format that can be read by scrolling, and Koitoon well reflects this modern way of spending cartoons."
    };
    const { language } = useContext(LanguageContext);
    const introText = intro[language]; // 언어에 따라 intro 객체에서 텍스트 가져오기
    return(
    <p className="text-sky-400/100">
           {introText}
    </p> 
    )
}

export const LocationComponent = (lang:any) => {
    const location: any = {
        KO: "오시는 길",
        EN: "Way to Come"
      };
    const { language } = useContext(LanguageContext);
    const introText = location[language]; // 언어에 따라 intro 객체에서 텍스트 가져오기
    return(
    <p className="text-sky-400/100">
           {introText}
    </p> 
    )
}