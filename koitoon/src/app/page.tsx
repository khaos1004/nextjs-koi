"use client";

import Header from "@/components/public/header/Header";
import Side from "@/components/public/side/Side";
import Footer from "@/components/public/footer/Footer";
import { useEffect, useState, useContext } from "react";
import {
  LanguageProvider,
  default as LanguageContext,
} from "@/context/Language"; // 올바르게 import
import MainTop from "@/../../public/images/main/메인_배경.jpg";
import MainCenter from "@/../../public/images/main/메인_채용.jpg";
import Arrow from "@/../../public/images/main/free-icon-direction-arrow-4939761.png";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowR from "../../public/svg/arrowR";
import ArrowLong from "../../public/svg/arrowLong";
import 로열블루로즈 from "@/../../public/images/webtoon/image0.png";
import 퍼펙트 from "@/../../public/images/webtoon/image1.jpeg";
import 위클리28년 from "@/../../public/images/webtoon/image2.jpeg";
import 별빛이내린다 from "@/../../public/images/webtoon/image3.jpeg";
import 투투데이 from "@/../../public/images/webtoon/image4.jpeg";
import 투맨 from "@/../../public/images/webtoon/image06.jpeg";
import 격투몬스터 from "@/../../public/images/webtoon/image5.jpeg";
import 용마전 from "@/../../public/images/webtoon/image6.png";
import 대남 from "@/../../public/images/webtoon/image7.jpeg";
import 불가사리 from "@/../../public/images/webtoon/image8.jpeg";
import 소원을말해봐 from "@/../../public/images/webtoon/image9.jpeg";
import 자드락비 from "@/../../public/images/webtoon/image10.png";
import 얼굴값 from "@/../../public/images/webtoon/image11.jpeg";
import 성상담소 from "@/../../public/images/webtoon/image12.jpeg";
import 못된여자 from "@/../../public/images/webtoon/image13.jpeg";
import 쌍녀 from "@/../../public/images/webtoon/image14.png";
import 암캐처제 from "@/../../public/images/webtoon/image15.png";
import 쪼여줄께 from "@/../../public/images/webtoon/image16.png";
import 혼밥하는여자 from "@/../../public/images/webtoon/image17.jpeg";
import 그런남자 from "@/../../public/images/webtoon/image18.jpeg";
import 덫 from "@/../../public/images/webtoon/image19.png";
import 여직원들 from "@/../../public/images/webtoon/image20.jpeg";
import 붉은벽 from "@/../../public/images/webtoon/image21.png";
import 성적취향 from "@/../../public/images/webtoon/image22.jpeg";
import 부도덕한배구부 from "@/../../public/images/webtoon/image23.png";
import 부도덕한수영부 from "@/../../public/images/webtoon/image24.jpeg";
import 벌거벗은방송국 from "@/../../public/images/webtoon/image25.jpeg";
import 노예클럽 from "@/../../public/images/webtoon/image26.jpeg";
import 소녀표류기 from "@/../../public/images/webtoon/image27.jpeg";
import 그놈은갱신중 from "@/../../public/images/webtoon/image28.png";
import 호구들 from "@/../../public/images/webtoon/image29.jpeg";
import 아내의섹파 from "@/../../public/images/webtoon/image30.png";
import 아빠는출근중 from "@/../../public/images/webtoon/image31.jpeg";
import 내로남불 from "@/../../public/images/webtoon/image32.jpeg";
import 친구아빠 from "@/../../public/images/webtoon/image33.jpeg";
import 섹시백 from "@/../../public/images/webtoon/image34.jpeg";
import 질좋은여자 from "@/../../public/images/webtoon/image35.jpeg";
import 잠재적연애구간 from "@/../../public/images/webtoon/image36.jpeg";
import 그런여자 from "@/../../public/images/webtoon/image37.jpeg";
import 첫사랑의딸 from "@/../../public/images/webtoon/image38.jpeg";
import 캐슬 from "@/../../public/images/webtoon/image39.jpeg";
import 파라다이스 from "@/../../public/images/webtoon/image40.jpeg";
import 아이돌키우기 from "@/../../public/images/webtoon/image41.jpeg";
import 친구아내 from "@/../../public/images/webtoon/image42.jpeg";
import 분양녀 from "@/../../public/images/webtoon/image43.jpeg";
import 처제 from "@/../../public/images/webtoon/image44.png";
import 엄마실격 from "@/../../public/images/webtoon/image45.jpeg";
import 해녀 from "@/../../public/images/webtoon/image46.jpeg";
import 불륜주의보 from "@/../../public/images/webtoon/image47.jpeg";
import 도우미 from "@/../../public/images/webtoon/image48.jpeg";
import 은밀한거래 from "@/../../public/images/webtoon/image49.jpeg";
import 숙모 from "@/../../public/images/webtoon/image50.jpeg";
import 노출교사 from "@/../../public/images/webtoon/image51.jpeg";
import 버린남자 from "@/../../public/images/webtoon/image52.jpeg";
import 슈가대디 from "@/../../public/images/webtoon/image53.jpeg";
import 딱풀이안빠져요 from "@/../../public/images/webtoon/image54.jpeg";
import 어린여자 from "@/../../public/images/webtoon/image55.png";
import 이쁘니 from "@/../../public/images/webtoon/image56.jpeg";
import 원룸텔 from "@/../../public/images/webtoon/image57.jpeg";
import 며느리 from "@/../../public/images/webtoon/image58.jpeg";
import 이혼녀 from "@/../../public/images/webtoon/image59.png";
import 조카딸 from "@/../../public/images/webtoon/image60.jpeg";
import 부녀회장 from "@/../../public/images/webtoon/image61.png";
import 이모 from "@/../../public/images/webtoon/image62.png";
import 두자매 from "@/../../public/images/webtoon/image63.png";
import 엄마는여대생 from "@/../../public/images/webtoon/image64.png";
import 새엄마는내여친 from "@/../../public/images/webtoon/image65.png";
import 돌싱녀 from "@/../../public/images/webtoon/image67.jpeg";
import 데릴아빠 from "@/../../public/images/webtoon/image68.jpeg";
import 찐한친구 from "@/../../public/images/webtoon/image69.jpeg";
import 빌라 from "@/../../public/images/webtoon/image70.jpeg";
import 이웃의맛 from "@/../../public/images/webtoon/image71.png";
import sex오피스 from "@/../../public/images/webtoon/image72.jpeg";
import 아랫집아줌마 from "@/../../public/images/webtoon/image74.png";
import 택배요 from "@/../../public/images/webtoon/image75.png";
import 몸캠퍼스 from "@/../../public/images/webtoon/image76.png";
import 택시 from "@/../../public/images/webtoon/image77.jpeg";
import 내딸을부탁해 from "@/../../public/images/webtoon/image78.png";
import 은행원 from "@/../../public/images/webtoon/image79.jpeg";
import 어쩌다이지경 from "@/../../public/images/webtoon/image80.jpeg";

import useFont from "@/app/hooks/UseFont";

interface CardData {
  id: number;
  image: any;
  url: any;
  title: string;
  content: string;
  hashtags: string;
  author: string;
}

const allCardsData: CardData[] = [
  {
    id: 1,
    image: 로열블루로즈,
    url: "https://novel.bookpal.co.kr/view_toon/7013175",
    title: "로열블루로즈",
    content:
      "R가문이라 불리는 세실 가문, 그들의 정원에는 세상에 유일무이한 로열 블루 로즈가 자라고 있다.",
    hashtags: "#중세물 #능력남 #냉정녀",
    author: "나라/이류현",
  },
  {
    id: 2,
    image: 퍼펙트,
    url: "https://bollae.net/board/?board=ani_01&tab=web&type=view&ani_id=131",
    title: "퍼펙트",
    content:
      "미국 메이저리그에서 0점대 방어율과 10할 타율을 꿈꾸는 강한과 박한의 메이저리그 정복기!",
    hashtags: "#드라마",
    author: "코이/판다스틱",
  },
  {
    id: 3,
    image: 위클리28년,
    url: "https://bollae.net/board/?board=ani_01&tab=web&type=view&ani_id=129",
    title: "위클리28년",
    content:
      "그녀의 폭군 정치 속에선 28년까지밖에 살지 못한다. 그러나 그녀의 사랑을 받는다면?",
    hashtags: "#로맨스",
    author: "김백호/김백호",
  },
  {
    id: 4,
    image: 별빛이내린다,
    url: "https://novel.bookpal.co.kr/view_toon/7013045",
    title: "별빛이 내린다",
    content:
      "보잘것없는 자신의 능력에 의기소침한 신, '얼' 달콤한 초콜릿의 맛을 잊지 못해 지구로 내려온 그는 우연한 사고로 기억이 조각조각 흩어져 버렸는데…지구 곳곳에 '얼'과 똑같은 모습을 한 사람들이 생겼다??",
    hashtags: "#드라마",
    author: "홍사과/홍사과",
  },
  {
    id: 5,
    image: 투투데이,
    url: "https://novel.bookpal.co.kr/view_toon/7013036",
    title: "투투데이",
    content:
      "사랑하기도 어렵고 22일을 만나기도 왜이리 어렵냐? 사랑에 서툰 인생 새내기들의 발칙한 이야기! 원스토어 공모전 우수상 작품!",
    hashtags: "#드라마",
    author: "주녕/쥐르",
  },
  {
    id: 6,
    image: 투맨,
    url: "https://www.toomics.com/webtoon/episode/toon/4589",
    title: "투맨",
    content:
      "억울한 누명을 쓰고 살해된 강력계 형사 강태식. 복수를 위해 왕따의 몸으로 빙의되다! 형사와 왕따, 두 남자의 고군분투 리얼액션!",
    hashtags: "#왕따 #경찰 #학원/액션",
    author: "공종철 / 유기영",
  },
  {
    id: 7,
    image: 격투몬스터,
    url: "http://novel.bookpal.co.kr/view/7013072",
    title: "격투몬스터",
    content:
      "격투괴물들의 전쟁터 RAC에서 최고를 꿈꾸는 최태권과 격투히어로들의 흥미진진한 비하인드 스토리",
    hashtags: "#스포츠",
    author: "주녕/샴푸",
  },
  {
    id: 8,
    image: 용마전,
    url: "https://novel.bookpal.co.kr/view_toon/7013173",
    title: "용마전",
    content:
      "마왕이 있었다. 그는 원했다. 인간이 멸망하기를.. 소년이 있었다. 소년은 원했다. 마왕을 죽이는 것을…",
    hashtags: "#중세물 #액션물 #판타지",
    author: "SUHO/홍승우",
  },
  {
    id: 9,
    image: 대남,
    url: "https://novel.bookpal.co.kr/view_toon/7013031",
    title: "대남",
    content:
      "일본 AV계는 나, 강남이가 정복하겠다. 그러나 그가 간 곳은 망하기 일보직전의 AV영화사였다.",
    hashtags: "#사내연애 #하렘",
    author: "크르릉/골든보이",
  },
  {
    id: 10,
    image: 불가사리,
    url: "https://novel.bookpal.co.kr/view_toon/7013022",
    title: "불가사리",
    content:
      "그의 튼실한 물건도 그의 인생도 극한 상황에서 좀처럼 죽지 않는다. 아니 죽을 수 없다!",
    hashtags: "#드라마",
    author: "두근두근/제이든",
  },
  {
    id: 11,
    image: 소원을말해봐,
    url: "https://novel.bookpal.co.kr/view_toon/7013024",
    title: "소원을말해봐",
    content:
      "아내를 만족시키고 싶은가요? 그녀와 잘되고 싶나요? 당신의 꿈을 현실로 만들어드립니다.",
    hashtags: "#에로틱 #드라마",
    author: "나라/흑형",
  },
  {
    id: 12,
    image: 자드락비,
    url: "https://novel.bookpal.co.kr/view_toon/7013027",
    title: "자드락비",
    content:
      "연쇄살인범인 그녀와 그녀의 주위를 맴도는 두 남자그리고 이 셋을 둘러싼 이들의 욕망!",
    hashtags: "#에로틱 #피폐물 #나쁜여자",
    author: "엔신/이류현",
  },
  {
    id: 13,
    image: 얼굴값,
    url: "https://novel.bookpal.co.kr/view_toon/7013028",
    title: "얼굴값",
    content:
      "찌질이인 나는 정후 형을 만난 후 변하게 되었다 형과의 만남은 인연이었을까, 악연이었을까?",
    hashtags: "#드라마 #더티토크 #우월녀",
    author: "퍼늬좀비/이지",
  },
  {
    id: 14,
    image: 성상담소,
    url: "https://novel.bookpal.co.kr/view_toon/7013029",
    title: "성상담소",
    content:
      "은둔형 오타쿠 오행은 그녀를 훔쳐보기만 할 뿐 용기내어 고백하지 못하는데…. 어느날 그녀는 누군가 자신의 팬티로 장난 친다는 것을알게 된다.. 그 둘은 어떻게 될까?",
    hashtags: "#에로틱 #더티토크 #원나잇",
    author: "액스타시/액스타시",
  },
  {
    id: 15,
    image: 못된여자,
    url: "https://novel.bookpal.co.kr/view_toon/7013043",
    title: "못된여자",
    content:
      "아름다운 외모와 능력까지 겸비한 퍼펙트한 백보리 어느날 나타난 찌질한 오타쿠가 그녀의 약점을 잡고 흔든다 그는 동요하는 백보리를 매일 밤 불러내는데..",
    hashtags: "#에로틱 #드라마 #복수",
    author: "화나쪙/빵빠레",
  },
  {
    id: 16,
    image: 쌍녀,
    url: "https://novel.bookpal.co.kr/view_toon/7013023",
    title: "쌍녀",
    content:
      "남자인가, 여자인가? 본능과 정체성의 갈등!! 두가지 성을 가진 현아의 좌충우돌 캠퍼스 스토리",
    hashtags: "#에로틱 #드라마 #복수",
    author: "C8/퍼늬좀비",
  },
  {
    id: 17,
    image: 암캐처제,
    url: "https://novel.bookpal.co.kr/view_toon/7013044",
    title: "암캐처제",
    content:
      "자신을 만족시킬 대물을 찾아 유학길에 오른 지연외국에서도 찾지 못한 대물을 찾아지만 그 상대가 나의 형부? 자기의 물건을 감당하지 못하는 부인으로 인해 힘든 형부와 색녀 처제의 비밀 스토리",
    hashtags: "#드라마",
    author: "비아그라/흑염소",
  },
  {
    id: 18,
    image: 쪼여줄께,
    url: "https://novel.bookpal.co.kr/view_toon/7013025",
    title: "쪼여줄께",
    content:
      "빚 때문에 조폭에게 위협받는 남친.그를 위해 성인 레슬링에 참가한 주인공의 운명은?!",
    hashtags: "#드라마 #하렘",
    author: "밍사/밍사",
  },
  {
    id: 19,
    image: 혼밥하는여자,
    url: "https://novel.bookpal.co.kr/view_toon/7013026",
    title: "혼밥하는 여자",
    content: "혼자 밥 먹는 외로운 남녀들의 모든 고민!! 오늘 밤엔 뭘 먹지?!",
    hashtags: "#에로틱 #드라마 #하렘",
    author: "비아그라/흑염소",
  },
  {
    id: 20,
    image: 그런남자,
    url: "https://novel.bookpal.co.kr/view_toon/7013042",
    title: "그런남자",
    content:
      "재벌상속녀와 평범한 취준생의 한판대결!하지만 결코 만만치 않은 취준생 노현수, 그에겐 뭔가 특별한 것이 있다",
    hashtags: "#현대물 #에로틱 #오피스",
    author: "코이/공성술",
  },
  {
    id: 21,
    image: 덫,
    url: "https://novel.bookpal.co.kr/view_toon/7013035",
    title: "덫",
    content:
      "누나가 죽었다. 고아원 원장에서부터 누나의 손님들까지.. 누나를 유린한 놈들에게 복수하기 위해 절대 뿌리치지 못할 덫을 놓고, 걸려들기만을 기다린다...!",
    hashtags: "#드라마 #오피스 #복수",
    author: "야왕/소고귀",
  },
  {
    id: 22,
    image: 여직원들,
    url: "https://novel.bookpal.co.kr/view_toon/7013030",
    title: "여직원들",
    content:
      "작은 출판사에서 대박쳐서 벼락부자가 됐다! 차 바꾸고 집도 바꾸고!! 뭐든지 새 것으로 바꿔야지! 어디..그럼 여자도 한번...바꿔볼까?",
    hashtags: "#에로틱 #오피스 #하렘",
    author: "비아그라/판다스틱",
  },
  {
    id: 23,
    image: 붉은벽,
    url: "https://cafe.naver.com/bscomic/683643",
    title: "붉은벽",
    content:
      "마형건은 어느 날 무심코 작업실 벽에 그린 누드화가 살아 움직이는 현상을 접하게 된다. 자신이 그린 그림이 살아 움직이다니! 믿기 힘든 이 현상에 대해 고민하고 있을 때, 마침 작업실에 한 명의 손님이 찾아온다.",
    hashtags: "#드라마 #공포 #스릴러",
    author: "Back/Back",
  },
  {
    id: 24,
    image: 성적취향,
    url: "https://novel.bookpal.co.kr/view_toon/7013050",
    title: "성적취향",
    content: `"일반적인 건 흥미없어, 특별한게 흥분되잖아?" 일탈을 꿈꾸며 SNS에 자신을 노출시키는 여자들과 그녀들을 사냥하는 남자의 이야기`,
    hashtags: "#현대물 #에로틱 #계약관계",
    author: "주녕/샴푸",
  },
  {
    id: 25,
    image: 부도덕한배구부,
    url: "https://novel.bookpal.co.kr/view_toon/7013034",
    title: "부도덕한 배구부",
    content:
      "성격 괴팍한 누나와 본인 키에 대한 콤플렉스 때문에 여자가 무서운 대학생 양준호! 그런 그에게 일생일대의 생각지도 못한 사건이 벌어지는데..! 내가 여자 배구부 매니저라고?! 장신녀들 사이에 낀 단신남의 눈물겨운 여자 공포증 극복기가 시작됩니다.",
    hashtags: "#드라마 #하렘",
    author: "썸/19테디",
  },
  {
    id: 26,
    image: 부도덕한수영부,
    url: "https://novel.bookpal.co.kr/view_toon/7013033",
    title: "부도덕한 수영부",
    content:
      "수영팀 안에서 벌어지는 로맨스! 그녀들은 왜 코치에게 정신 없이 빠져드는가!",
    hashtags: "#드라마 #하렘",
    author: "코이",
  },
  {
    id: 27,
    image: 벌거벗은방송국,
    url: "https://novel.bookpal.co.kr/view_toon/7013032",
    title: "벌거벗은 방송국",
    content:
      "아찔하고 짜릿한 방송국의 비밀연애… ! 메인 아나운서 자리를 차지하기 위한 그녀의 독한 마음이 몸을 움직이는데…",
    hashtags: "#에로틱 #드라마 #오피스",
    author: "코이",
  },
  {
    id: 28,
    image: 노예클럽,
    url: "https://novel.bookpal.co.kr/view_toon/7013064",
    title: "노예클럽",
    content:
      "때로는 돈 때문에,때로는 사랑때문에 노예가 된 그들 노예에 대한 새로운 재해석!",
    hashtags: "#드라마",
    author: "빵빠레 / 손공주",
  },
  {
    id: 29,
    image: 소녀표류기,
    url: "https://novel.bookpal.co.kr/view_toon/7013071",
    title: "15소녀표류기",
    content:
      "지중해 외딴섬에 표류된 non-img5소녀들의 기상천외한 섹시스토리 지친 당신의 영혼에 안식을 주는 비주얼 서스펜스 만화",
    hashtags: "#현대물 #에로틱 #하렘",
    author: "Viagra / Back",
  },
  {
    id: 30,
    image: 그놈은갱신중,
    url: "https://novel.bookpal.co.kr/view_toon/7013177",
    title: "그놈은 갱신 중",
    content:
      "성 문제로 고민하는 진상들의 인생 그놈이 모두 해결해준다! 그 놈의 갱신은 오늘도 계속된다.",
    hashtags: "#에로틱 #드라마 #능력남",
    author: "야왕 / 귀두깍기인형",
  },
  {
    id: 31,
    image: 호구들,
    url: "",
    title: "호구들",
    content:
      "멸시받고 무시당한 남자의 위험한 계획! 날 바보 취급한 너희들에게 심판자가 되어주겠어.",
    hashtags: "#드라마 #고수위",
    author: "비아그라 / 흑염소",
  },
  {
    id: 32,
    image: 아내의섹파,
    url: "https://novel.bookpal.co.kr/view_toon/7013183",
    title: "아내의 섹파",
    content:
      "아내에게 섹파가 생겼다. 그녀는 20살 짜리 피자 배달부를 꼬셨다. 그것도 알몸으로...이대로 이혼할 수 없다.",
    hashtags: "#고수위 #불륜 #비밀관계",
    author: "비아그라 / 쎅시봉",
  },
  {
    id: 33,
    image: 아빠는출근중,
    url: "https://www.toomics.com/webtoon/episode/toon/4936",
    title: "아빠는 출근 중",
    content:
      "또래 철 없는 남자에게 질려버린 여자들이여! 성숙한 중년의 맛을 알려주겠다!",
    hashtags: "#화류계 #오피스 #불륜",
    author: "코이 / 나라냐",
  },
  {
    id: 34,
    image: 내로남불,
    url: "https://www.toomics.com/webtoon/episode/toon/4971",
    title: "내로남불",
    content:
      "회사 내, 따돌림을 당하고 있는 나의 사랑 그녀. 안쓰러워 그녀를 나름대로 잘 챙겨주지만...연적이 나타났다?! 고달픈 그의 짝사랑 연대기는 과연 이뤄질 것인가?!",
    hashtags: "#오피스 #불륜",
    author: "썸 / 조노비",
  },
  {
    id: 35,
    image: 친구아빠,
    url: "https://www.toomics.com/webtoon/episode/toon/2509",
    title: "친구아빠",
    content:
      '친구의 아빠를 사랑하게 됐다. 내 첫경험을 바치고 싶을 만큼.어느 밤, 용기를 내 친구 아빠의 방으로 들어갔다."아저씨는 내가 여자로 보이지 않나요?" 나는 그를 사랑하시 위해 돌이킬 수 없는 선택을 했다.',
    hashtags: "#여대생 #유부남 #비밀관계",
    author: "코이 / 해피그라",
  },
  {
    id: 36,
    image: 섹시백,
    url: "https://www.toomics.com/webtoon/episode/toon/4671",
    title: "섹시백",
    content:
      "짝사랑한테 차이고 옆집 여자에게 납치당한 남자, 다른 남자가 아내를 범하는 상상을 해야 발기가 되는 남자, 18년 우정에서 쓰리썸 파트너가 된 소꿉친구들까지!! 발기력 넘치는 100가지 이야기!!",
    hashtags: "#썸앤썰 #쓰리썸 #불륜",
    author: "썸 / 조노비",
  },
  {
    id: 37,
    image: 질좋은여자,
    url: "https://www.toomics.com/webtoon/episode/toon/4884",
    title: "질 좋은 여자",
    content:
      "오염 가득한 세상 속 산소탱크 같은 여신..! 그녀는 오늘도 남자들의 외로움을 몸으로 달래준다! 이 예쁘고 천사 같은 여자를 진정으로 사랑해줄 남자... 어디 없나요?",
    hashtags: "#존예 #섹시녀 #하렘",
    author: "VIAGRA/BECK HO-AN",
  },
  {
    id: 38,
    image: 잠재적연애구간,
    url: "https://www.toomics.com/webtoon/episode/toon/5025",
    title: "잠재적연애구간",
    content:
      "이곳에 모인 커플들은 서로에게 만족하지 못해 결국, 자신의 진정한 반쪽을 찾기 위해 왔다! 모든 걸 내려놓고 격렬하고 치열하게 자신의 짝을 쟁취하라!",
    hashtags: "#커플 #권태기",
    author: "코이/귀두박근",
  },
  {
    id: 39,
    image: 그런여자,
    url: "https://www.toomics.com/webtoon/episode/toon/5074",
    title: "그런여자",
    content:
      "거산 그룹의 후계자 오혜리 이사의 연인이자 부하로서 신망을 쌓던 노현수, 돌아온 오태성 부회장과 거래를 꾀고 중국 출장길에 오른 뒤 혜리와의 관계는 더 깊어진다. 한편 태성은 쉽게 회유된 현수에 대한 의심을 지우지 못하고 파멸시킬 계획을 세우는데…",
    hashtags: "#재벌 #음모 #오피스",
    author: "KOI/샴푸",
  },
  {
    id: 40,
    image: 첫사랑의딸,
    url: "https://www.toomics.com/webtoon/episode/toon/4758",
    title: "첫사랑의 딸",
    content:
      "내 자신보다 사랑했지만 지키지 못한 첫사랑 그녀, 잊고 있던 그녀를 대신해 그녀의 딸이 내게 왔다...? 첫사랑의 딸. 그녀와의 위험천만 로맨스!",
    hashtags: "#비밀관계 #첫사랑 #모녀",
    author: "주녕/샴푸",
  },
  {
    id: 41,
    image: 캐슬,
    url: "https://www.toomics.com/webtoon/episode/toon/5106",
    title: "캐슬",
    content:
      "사업설명회에 참석하기 위해 호텔에 모인 사람들, 그러나 그들을 반기는건 목적을 알 수 없는 감금과 음모, 그리고 수수께끼의 목소리.. 수단과 방법을 가리지말고 죽음의 방탈출게임에서 살아남아야한다...!",
    hashtags: "#게임 #음모 #생존",
    author: "코이/가면",
  },
  {
    id: 42,
    image: 파라다이스,
    url: "https://www.toomics.com/webtoon/episode/toon/4994",
    title: "파라다이스",
    content:
      "무료 이벤트 숙박권에 당첨으로 시작된 여행. 호텔에 모인 사람들이 전부 같은 대학교에 같은 학생들이라니, 과연 이걸 우연이라고 할 수 있는걸까? 아니면 누군가 파 놓은 함정일 것까..!",
    hashtags: "#하렘 #NTR #밀실",
    author: "코이/해피그라",
  },
  {
    id: 43,
    image: 아이돌키우기,
    url: "https://www.toomics.com/webtoon/episode/toon/5174",
    title: "아이돌키우기",
    content:
      "여자로 오해받은 예쁜 남자 로드 매니저 방수경, 근신 중인 슈퍼스타 이아솜과 동거를 시작하다! 눈앞의 섹시 아이돌이 그림의 떡?",
    hashtags: "#연예계 #동거 #존예",
    author: "VIAGRA/BECK",
  },
  {
    id: 44,
    image: 친구아내,
    url: "https://www.toomics.com/webtoon/episode/toon/5131",
    title: "친구아내",
    content:
      "빚쟁이들에게 쫓기는 친구를 위해 친구의 아내와 동거를 시작하는 한휘! 시간이 지날수록 점점 친구의 아내와의 야릇한 상상을 하게 된다...?! 친구의 아내라는 사실이 본능을 억제하지만 더 이상 참을 수 없어...!!!",
    hashtags: "#불륜 #동거 #비밀관계",
    author: "코이/나라냐",
  },
  {
    id: 45,
    image: 분양녀,
    url: "https://www.toomics.com/webtoon/episode/toon/5216",
    title: "분양녀",
    content:
      '우연하게...? 순결을 잃게 된 탐스러운 그녀, 신고를 다짐한 그녀가 선택한 방법은 "분양녀 시스템"? 뭐... 까짓것 몸으로 도장 찍고 계약합시다.!!!',
    hashtags: "#오피스 #계약관계 #조건만남",
    author: "코이/도능",
  },
  {
    id: 46,
    image: 처제,
    url: "https://www.toomics.com/webtoon/episode/toon/5247",
    title: "처제",
    content:
      "부인의 쌍둥이 동생, 처제와 함께 동거를 하고 있는 주인공. 그러던 어느 날 부인이 교통사고로 입원하게 되고, 처제와 둘만의 기묘한 동거를 시작하게 되는데…",
    hashtags: "#비밀관계 #NTR #자매",
    author: "벌떡/폭주기관차",
  },
  {
    id: 47,
    image: 엄마실격,
    url: "https://www.toomics.com/webtoon/episode/toon/5175",
    title: "엄마실격",
    content:
      "42세 라고는 믿기 힘든 외모의 아름다운 그녀, 유진. 그녀를 중심으로 개성 강하고 매력적인 4명이 만들어넨 사각관계 이야기.",
    hashtags: "#친구엄마 #유부녀",
    author: "비아그라/INJAK",
  },
  {
    id: 48,
    image: 해녀,
    url: "https://www.toomics.com/webtoon/episode/toon/5198",
    title: "해녀",
    content:
      "뜻 밖의 구조로 인생을 바꿔버린 사건의 시작. 글래머한 몸매에 감춰진<해녀>의 비밀은... 좁디 좁은 구멍?! 표적이 되어버린 해녀, 누가 그녀를 갖게 될 것인가..!",
    hashtags: "#거유 #역하렘",
    author: "벌떡/타비치",
  },
  {
    id: 49,
    image: 불륜주의보,
    url: "https://www.toomics.com/webtoon/episode/toon/5232",
    title: "불륜주의보",
    content:
      "사람들이 가득찬 엘리베이터... 어라? 뭔가 다른게 몸에 닿은 것 같은데? 눈 앞에 있는 당신은 누구세요?!",
    hashtags: "#비밀관계 #불륜 #유부녀",
    author: "뭉크/썸",
  },
  {
    id: 50,
    image: 도우미,
    url: "https://www.toomics.com/webtoon/episode/toon/5343",
    title: "도우미",
    content:
      "높은 월급을 대가로 뇌사상태의 아들을 간호해줄 도우미를 구하는 아버지. 단, 도우미를 하기 위한 조건은 야한 메이드 복장?! 음란한 몸매와 조신한 성격을 동시에 가진 도우미를 찾아다니는데…",
    hashtags: "#섹시녀 #가정부 #노출",
    author: "코이/BACK",
  },
  {
    id: 51,
    image: 은밀한거래,
    url: "https://www.toomics.com/webtoon/episode/toon/5338",
    title: "은밀한거래",
    content:
      "버는건 모르겠고 돈을 쓰는데만 바쁜 SNS 인플루언서, 그런 그녀에게 어느 날 의문의 남자가 위험한 거래를 제안하게 된다. 고민하던 그녀는 제안을 받아들이게 되는데…",
    hashtags: "#SNS #관종 #스폰",
    author: "에로로/씨니",
  },
  {
    id: 52,
    image: 숙모,
    url: "https://www.toomics.com/webtoon/episode/toon/4966",
    title: "숙모",
    content:
      "훌쩍 커버려 청년 티가 나는 이 녀석이 진짜 내 조카가 아니라고? 어리숙한 조카 명운과 섹시한 숙모 은혜의 발칙한 동거생활!!!",
    hashtags: "#고수위 #연상녀 #하렘",
    author: "비아그라/쎅시봉",
  },
  {
    id: 53,
    image: 노출교사,
    url: "https://www.toomics.com/webtoon/episode/toon/5344",
    title: "노출교사",
    content:
      '고등학교 선생님으로는 어울리지 않는 화려한 얼굴과 몸매의 소유자 "혜린". 항상 당당한 그녀에게도 비밀이 하나 있는데... 그것은 바로 "노출 중독" 이라는 것!! 그녀의 비밀스럽고 아슬아슬한 일탈이 시작된다.',
    hashtags: "#선생님 #노출 #거유",
    author: "에로로/G유",
  },
  {
    id: 54,
    image: 버린남자,
    url: "https://www.toomics.com/webtoon/episode/toon/5358",
    title: "버린남자",
    content:
      '하찮고 별 볼일 없단 이유로 나를 버렸던 그 여자... 과거의 나를 지워버리고 다시 돌아왔다. "이젠 내가 널 마음껏 갖고 놀아줄게"',
    hashtags: "#유부녀 #전남친 #전여친",
    author: "코이/조오타",
  },
  {
    id: 55,
    image: 슈가대디,
    url: "https://www.toomics.com/webtoon/episode/toon/5391",
    title: "슈가대디",
    content:
      '나의 사랑을 필요로 하는 남자 그리고 그 사랑의 대가는?! "아저씨... 저의 아빠가 되어주세요♥"',
    hashtags: "#계약관계 #스폰 #SNS",
    author: "썸/이규",
  },
  {
    id: 56,
    image: 딱풀이안빠져요,
    url: "",
    title: "딱풀이 안 빠져요",
    content:
      "야릇한 사진으로 인터넷을 뜨겁게 달군 화제의 그녀가 바로 내 옆집에 산다면?!",
    hashtags: "#에로틱 #일본유통불가",
    author: "썸 / 19테디",
  },
  {
    id: 57,
    image: 어린여자,
    url: "",
    title: "어린여자",
    content:
      "난 예쁘거나 섹시한 여자보다 어린 여자가 좋다 세상에 떼 묻지 않은...조그마한 선물에도 감동 할줄 아는 그런 순수한 여자 그리고 무엇보다 맛이 좋다!",
    hashtags: "#에로틱 #일본유통불가",
    author: "비아그라 / 판다스틱",
  },
  {
    id: 58,
    image: 이쁘니,
    url: "",
    title: "이쁘니",
    content:
      "차갑게 거절한 남자가 알고보니 내 운명의 반쪽? 접근하는 남자들의 무리한 부탁도 거절하지 못하는 순진한 그녀의 운명의 남자는 나타날 것인가!",
    hashtags: "#에로틱 #일본유통불가",
    author: "썸 / 탐",
  },
  {
    id: 59,
    image: 원룸텔,
    url: "https://www.toomics.com/webtoon/episode/toon/5645",
    title: "원룸텔",
    content:
      "취업 준비생 '자성'은 원룸텔에 살면서 근근히 하루를 보내고 있다. 애인에게 마저 무시를 당하며 남자로써의 자존심이 바닥을 칠 때... 월세까지 밀린 자성, 원룸텔 주인 아주머니에게 은밀한 제안을 받게 되는데…",
    hashtags: "#이웃 #비밀 #비밀관계",
    author: "코이 / 나라냐",
  },
  {
    id: 60,
    image: 며느리,
    url: "https://www.toomics.com/webtoon/episode/toon/5250",
    title: "며느리",
    content:
      "내 아들의 예비 신부였고, 나의 며느리가 될 뻔한... 사랑스러운 그녀와의 동거가 시작되었다.",
    hashtags: "#고수위 #며느리 #동거",
    author: "마카/K. 메르",
  },
  {
    id: 61,
    image: 이혼녀,
    url: "https://www.toomics.com/webtoon/episode/toon/5683",
    title: "이혼녀",
    content:
      "선배의 변호사 사무실에서 사무장으로 일하는 성현. 선배의 처제인 아영이와의 비밀스런 관계, 그리고 재회한 첫사랑 상미. 상큼한 두명의 히로인 사이에서 성현은 과연 진정한 사랑을 찾을 수 있을지...?",
    hashtags: "#연애 #짝사랑 #삼각관계",
    author: "엔쵸비/청유자",
  },
  {
    id: 62,
    image: 조카딸,
    url: "https://www.toomics.com/webtoon/episode/toon/5214",
    title: "조카딸",
    content:
      "20년 전 헤어진 나의 첫사랑... 은혜 누나의 죽음 그리고 장례식장에서 만난 그녀와 똑 닮은 그녀의 두 딸?! 난 다시 참을 수 없는 욕망에 갇혀버렸다",
    hashtags: "#비밀관계 #첫사랑 #동거",
    author: "썸/탐",
  },
  {
    id: 63,
    image: 부녀회장,
    url: "https://www.toomics.com/webtoon/episode/toon/5738",
    title: "부녀회장",
    content:
      "아파트 재건축을 위한 조합장을 선출하는 부녀회에서 조합장으로 당선된 한상진. 조합설립 동의서를 얻기 위해 미승인주민들의 집을 방문하는 상진은 미승인주민들의 집을 방문하면서 그들과의 비밀스러운 관계가 시작된다.",
    hashtags: "#이웃 #유부녀 #육체쾌락",
    author: "코이/나라냐",
  },
  {
    id: 64,
    image: 이모,
    url: "https://www.toomics.com/webtoon/episode/toon/5809",
    title: "이모",
    content:
      "심한 홍수로 인해 아버지의 직장동료 가족은 집이 침수당해 오갈 데가 없어 주인공 경석의 집에 몇 일간 머물게 된다. 그날 밤 이모라 부르며 따르던 연수가 몰래 성관계하는 장면을 보게 되고 그런 연수의 모습을 보고 흥분하고 마는데...!",
    hashtags: "#유부녀 #본능 #고수위",
    author: "비아그라/쎅시봉",
  },
  {
    id: 65,
    image: 두자매,
    url: "https://www.toomics.com/webtoon/episode/toon/5613",
    title: "두자매",
    content:
      "고향 동생의 한통의 전화를 받고 졸지에 두 아이를 부양하는 처지가 된 형진. 어느덧 소녀티를 벗고 여성에 가까워진 두 자매의 모습에 형진에게 예기치 못 한 문제가 벌어지게 된다. 과연 이들의 화목한 관계 지속 될 수 있을까?",
    hashtags: "#자매 #동거 #비밀관계",
    author: "신비아/코어믹스",
  },
  {
    id: 66,
    image: 엄마는여대생,
    url: "https://www.toomics.com/webtoon/episode/toon/5140",
    title: "엄마는 여대생",
    content:
      "남학생들 사이에 둘러쌓인 신입생. 성숙한 몸을 가진 저 학생은 바로 우리 엄마? 마흔 살 신입생 엄마의 캠퍼스 라이프!!",
    hashtags: "#여대생 #유부녀 #연상녀",
    author: "MCHALO/서페이드",
  },
  {
    id: 67,
    image: 새엄마는내여친,
    url: "https://novel.bookpal.co.kr/view_toon/7013046",
    title: "새엄마는 내 여친",
    content:
      "나와는 고작 7살 차이의 젊은 아버지의 연인, 넘지 말아야 될 선까지 넘어버린 우리 사이... 아버지에게 미안한 마음도 잠시뿐 우리는 서로를 탐닉하면서 하루하루 사랑을 키워갔다. 우리의 사랑! 이대로 이뤄질 수 있을까?...",
    hashtags: "#새엄마 #연상녀 #거유",
    author: "비아그라/G유",
  },
  {
    id: 68,
    image: 돌싱녀,
    url: "https://www.toomics.com/webtoon/episode/toon/6677",
    title: "돌싱녀",
    content:
      "남성 편력이 심한 백보연은 이혼을 하고 서울 외곽으로 이사를 한다. 이사 첫날부터 음식 배달원에게 성적인 장난을 칠 정도로 자유 분방한 그녀의 사생활에 옆집에 사는 또 다른 돌싱 한송희사 음탕한 놀이에 함께 하길 제안하는데… 어디로 튈지 모르는 그녀를 붙들어줄 한 남자를 만날 수 있을까?",
    hashtags: "#유부녀 #유혹 #본능",
    author: "코이",
  },
  {
    id: 69,
    image: 데릴아빠,
    url: "https://www.toomics.com/webtoon/episode/toon/6675",
    title: "데릴아빠",
    content: `"XX코인은 대박이라더니…!! 아루 아침에 전 재산을 잃어버린 충격에 회사에서 깽판을 치고 쫒겨나 희망도 없이 죽으려고 내려온 바닷가였는데, 이게 무슨 일이지? 입이 떨 벌어질 정도의 미녀. 그런데.. 음..?
내가 왜 혼인신고서에 도장을 찍고 있는거지? 
게다가 뭐? 아줌마를 꼭 빼닮은 저 쭉쭉 빵빵한 20대 글래머 아가씨들은 다 누구? 뭐?? 전부 딸들이라고?"`,
    hashtags: "#유부녀 #모녀 #동거",
    author: "썸/이호돈",
  },
  {
    id: 70,
    image: 찐한친구,
    url: "https://www.toomics.com/webtoon/episode/toon/6485",
    title: "찐한 친구",
    content:
      "학과부터 성격까지 너무나 다른 개성 넘치는 남, 여 6명이 모였다. 심심해서 올린 술번개 글을 통해서 모여든 애들 중 평소에 꿈꾸던 이상형 100% 가까운 서연을 보고 한 눈에 반해 짝사랑을 이어온게 몇 년이더라… 여느 때와 같이 술자리에서 시작된 수위 강한 왕게임, 뒤에서 몰래 챙겨주면 조용히 받던 양전한 서연이가 오늘은 조금 이상하다?",
    hashtags: "#친구 #여대생 #존예",
    author: "쭈녕/판다스틱",
  },
  {
    id: 71,
    image: 빌라,
    url: "https://www.toomics.com/webtoon/episode/toon/6483",
    title: "69빌라",
    content:
      "이병 한지훈! 관사 관리병으로 차출 받았습니다! 담당하게된 69빌라에 장교들이 자리를 비운 집을 관리할 수 있는 남자라고는 나 하나 뿐, 여기 저기에서 불러대는 통에 정신이 없는데… 사모님과 딸들이랑 자꾸 끈적하게 엮인다? 문제 없이 제대할 수 있을까…?",
    hashtags: "#군대 #유부녀 #사모님",
    author: "IYZ/타비치",
  },
  {
    id: 72,
    image: 이웃의맛,
    url: "https://www.toomics.com/webtoon/episode/toon/5810",
    title: "이웃의 맛",
    content: `"남 부럽지 않은 환경에 늘 떵떵거리며 살 줄 알았는데…조직의 불법 온라인 카지노 자금을 세탁하는 과정에서 빼돌리던 내역이 발각됐다! 조직에서도, 경찰에게도 쫒기며 도망자 신세가 된 이들 부부는 미국에서 사느라 집을 비운 절친의 집으로 피신한다 급하게 챙겨나온건 손에 쥔 몇 푼 뿐, 살려면 동네 주민들과 접촉이 있을 수밖에 없다.
서로 친 인척관계, 다양한 이해관계가 얽혀있는 오감동 주민들과 부대끼며 벌어지는 유혹과 사건 사고들. 그 안에서도 새로운 사랑은 싹 트게 되는데...각자의 마음이 오감동 마을 주민 누군가에게로 향하며 부부의 골 또한 깊어진다, 이들의 위험한 로맨스는 어떤 결론에 이를까?"`,
    hashtags: "#이웃 #유부남 #유부녀",
    author: "에로로/오투린",
  },
  {
    id: 73,
    image: sex오피스,
    url: "https://www.toomics.com/webtoon/episode/toon/6676",
    title: "sex오피스",
    content: `"친구가 남자를 모르는 유진에게 소소한 재미라도 보라며 선물해준 작은 딜도, 시험 삼아서 넣어본 딜도가 끼어서 빠지지 않는다?! 이러지도 저러지도 못하는 틈에 당황스러워 잊고 있던 업체 미팅일정이 떠올라 급한대로 약속 장소에 나가보는데…."`,
    hashtags: "#오피스 #불륜 #성욕",
    author: "비아그라/씨알리스",
  },
  {
    id: 74,
    image: 아랫집아줌마,
    url: "https://toptoon.com/comic/ep_list/downstairs_lady",
    title: "아랫집 아줌마",
    content:
      "반복적이고 무료한 일상을 보내는 윤지. 남자한테 사랑받으면서 관계하고 싶은 욕구는 매일 끓어오른다. 그런 윤지의 일상에 변화가 생기기 시작하는데… “나랑 하고 싶어.? 하고 싶으면 해도 돼…",
    hashtags: "#미시 #유부녀 #비밀관계",
    author: "비아그라 / 나라냐",
  },
  {
    id: 75,
    image: 택배요,
    url: "https://toptoon.com/comic/ep_list/Parcel_Service",
    title: "택배요",
    content:
      "탄탄한 중견기업 사장의 아들 기두. 방탕한 생활을 누리며, 남부러울 것 없던 삶에 큰 변화가 찾아왔다! 회사는 부도로 넘어가고..아버지는 감옥에..엄마는 행방 불명.. 한순간에 택배기사가 되고마는데!",
    hashtags: "#택배 #만남 #일상",
    author: "마카 / 청유자",
  },
  {
    id: 76,
    image: 몸캠퍼스,
    url: "https://www.anytoon.co.kr/webtoon/episode/8020",
    title: "몸 Cam퍼스",
    content: `"캠퍼스 라이프를 꿈꾸며, 새내기가 되었다!
MT와 OT, 동아리활동!! 그리고 피어나는 사랑..! 그.런.데. 바이러스 때문에 비대면 수업이라고오오?
절망적인 첫 화상 수업시간, cam 화면에 동기생 '현아'의 자위행위가 펼쳐지게 되는데…"`,
    hashtags: "#고수위 #연하남 #캠퍼스",
    author: "서페이드",
  },
  {
    id: 77,
    image: 택시,
    url: "https://www.toomics.com/webtoon/episode/toon/7302",
    title: "택시",
    content: `"평범한 택시 운전사인 주인공.
생판 처음 보는 여성이 처음을 가져감을 시작으로
그가 마음에 두고 있던 여성도 그에게 조금씩 몸과 마음을 열어주는데..."`,
    hashtags: "#성적취향 #유혹 #찌질남",
    author: "코이 / 부타",
  },
  {
    id: 78,
    image: 내딸을부탁해,
    url: "https://www.toomics.com/webtoon/episode/toon/7231",
    title: "내 딸을 부탁해",
    content: `"친구가 딸애를 부탁하고 떠났다
하지만 난, 그 애가 여자로 보인다"`,
    hashtags: "#친구아빠 #관음 #금발",
    author: "비아그라 / 코작가",
  },
  {
    id: 79,
    image: 은행원,
    url: "https://www.toomics.com/webtoon/episode/toon/7462",
    title: "은행원",
    content: `"주인공 은행원 박하주.
돈많고 물많은(?) 사모님들께 은행 상품을 팔기 위해 내던진 몸.
이게 된다고? 사모님의 아찔한 요구가 끊이질 않는다..!"`,
    hashtags: "#유부녀 #불륜 #육체쾌락",
    author: "MCHALO/여우",
  },
  {
    id: 80,
    image: 어쩌다이지경,
    url: "https://www.toomics.com/webtoon/episode/toon/7461",
    title: "어쩌다 이지경",
    content: `"거리두기가 해제되고 첫 등교를 한 남태현.
학교의 여신 박세련을 만나 한 눈에 반하고 만다.
상사병을 앓는 태현을 보다못한 친구 이지경, 인싸였던 지경은 태현에게 강도 높은 연애훈련을 실시하는데!"`,
    hashtags: "#캠퍼스 #여대생 #존예",
    author: "오투린/싸또",
  },
];

const textContent = {
  KO: {
    leading: "웹툰 트렌드와 문화를 선도하고 작가와 독자를 연결하는",
    globalStudio: "글로벌 웹툰 제작사",
    goToWorks: "작품 바로가기",
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
    goToWorks: "Go to Works",
    more: "MORE",
    recruit: "RECRUIT",
    recruitment: "Recruitment",
    recruitmentDescription:
      "We are looking for talented and passionate individuals to create global webtoons.",
  },
};

function HomePage() {
  const { language } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = allCardsData.length;

  useFont(); // 커스텀 훅 사용

  useEffect(() => {
    AOS.init(); // AOS 초기화
  }, []);

  const handleNext = () => {
    const isMobile = window.innerWidth < 768;
    const imagesPerSlide = isMobile ? 2 : 4;
    if (currentIndex + imagesPerSlide >= totalImages) {
      setCurrentIndex(totalImages - imagesPerSlide);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + imagesPerSlide);
    }
  };

  const handlePrev = () => {
    const isMobile = window.innerWidth < 768;
    const imagesPerSlide = isMobile ? 2 : 4;
    if (currentIndex - imagesPerSlide < 0) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - imagesPerSlide);
    }
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const imagesPerSlide = isMobile ? 2 : 4;

  const text = textContent[language];

  return (
    <div className="flex flex-col">
      <div className="h-16">
        <Header />
      </div>
      <Side />
      <div className="main_image relative w-full h-[35rem]" data-aos="fade-up">
      <div className="relative w-full h-full">
        <Image
          src={MainTop}
          alt="Main background"
          fill
          objectFit="cover"
          className="brightness-50 sm:object-cover object-contain"
        />
      </div>

      <div className="main_image_text absolute inset-0 flex flex-col justify-center items-center text-center">
        <div>
          <span>{text.leading}</span>
          <span className="font-semibold">{text.globalStudio}</span>
        </div>
        <div className="text-5xl font-bold hidden sm:flex">
          WEBTOON&nbsp; <br className="" />{" "}
          <span className="te text-[#EE511F]">KOI CONTENT</span>
        </div>

        <div className="sm:hidden text-3xl font-bold">
          WEBTOON
          <br className="" />{" "}
          <span className="te text-[#EE511F]">KOI CONTENT</span>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/about/company">
            <button className="btn text-white rounded-3xl w-[13rem] hover:bg-[#EE511F] bg-inherit">
              {text.goToWorks} &nbsp; &nbsp; <ArrowR />
            </button>
          </Link>
        </div>
      </div>
    </div>

      <div
        className="flex flex-row min-h-screen w-screen my-[1rem] mb-[10rem]"
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
          <div className="grid ss:grid-cols-2 sm:grid-cols-4 gap-8 mb-[2rem] ">
            {allCardsData
              .slice(currentIndex, currentIndex + imagesPerSlide)
              .map((card) => (
                <div key={card.id} className="flex flex-col items-center mb-8">
                  <div className="relative group overflow-hidden rounded-lg w-full h-[20rem]">
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
                          ? card.content.substring(0, 25) + "..."
                          : card.content}
                      </div>
                      <Link href={card.url} target="_blank">
                        <button className="bg-transparent text-white px-4 py-2 rounded-full border border-white transition-all duration-300 hover:bg-white hover:text-black">
                          View +
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="text-lg font-medium mt-4">{card.title}</div>
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
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}
