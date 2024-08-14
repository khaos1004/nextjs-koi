interface HistoryEvent {
    month: string;
    event: string;
  }
  
  interface HistoryYear {
    year: string;
    events: HistoryEvent[];
  }
  
  interface TextContent {
    home: string;
    about: string;
    companyIntro: string;
    aboutUs: string;
    webtoonTrend: string;
    culture: string;
    leading: string;
    connecting: string;
    globalWebtoon: string;
    webtoonKoiContent: string;
    description: string;
    companyProfile: string;
    founded: string;
    foundedDate: string;
    ceo: string;
    ceoName: string;
    headquarters: string;
    headquartersAddress: string;
    businessArea: string;
    webtoonCreation: string;
    globalDistribution: string;
    aiWebtoon: string;
    history: string;
    month07: string;
    month05: string;
    month04: string;
    secondaryAgreement: string;
    techCertification: string;
    nobleComicsLaunch: string;
    historyData: HistoryYear[];
  }
  
  export const textContent: Record<string, TextContent> = {
    KO: {
      home: "홈",
      about: "ABOUT",
      companyIntro: "회사소개",
      aboutUs: "ABOUT US",
      webtoonTrend: "웹툰 트렌드 ",
      culture: " 문화",
      leading: "를 선도하고 ",
      connecting: "작가와 독자를 연결",
      globalWebtoon: "글로벌 웹툰 제작사",
      webtoonKoiContent: "웹툰코이컨텐츠",
      description:
        "는 다양한 장르와 스토리로 독자들에게 맞춤형 콘텐츠를 제공하며, 작가들에게는 더 많은 창작 활동을 지원합니다.",
      companyProfile: "COMPANY PROFILE",
      founded: "설립연도",
      foundedDate: "2015년 10월 02일",
      ceo: "대표이사",
      ceoName: "이준형 대표",
      headquarters: "본사위치",
      headquartersAddress: "서울시 마포구 잔다리로 30-11",
      businessArea: "BUSINESS AREA",
      webtoonCreation: "웹툰 콘텐츠 제작",
      globalDistribution: "해외 유통",
      aiWebtoon: "AI웹툰 제작 기술 개발",
      history: "HISTORY",
      month07: "07월",
      month05: "05월",
      month04: "04월",
      secondaryAgreement: "2차 저작물 업무 협약(에브리웨어/챗툰)",
      techCertification: "국가공인기술평가 우수기업 인증",
      nobleComicsLaunch: "노블 코믹스 작품연재 계약 완료 및 런칭 예정",
      historyData: [
        {
          year: "2024",
          events: [
            { month: "03월", event: "비비온 JP 웹툰코이컨텐츠 자체 AI작품 계약(예정)" },
            { month: "02월", event: "에브리웨이 MOU업무 협약식 오름미디어 US계약체결 및 유럽 진출(9작품)" },         
          ],
        },
        {
          year: "2023",
          events: [
            { month: "12월", event: "㈜웹툰코이컨텐츠 법인 설립" },
            { month: "10월", event: "비비온 JP 계약체결 및 일본 진출 (20작품)" },
            { month: "07월", event: "2차 저작물 업무 협약 (에브리웨이)" },
            { month: "05월", event: "국가공인기술평가 우수기업 인증" },
            {
              month: "04월",
              event:
                "노블코믹스 작품 연재 계약 완료 및 런칭 예정 (애니툰 노블코믹스/피너툰/해와달)",
            },
            {
              month: "02월",
              event: "오름미디어 US 계약체결 및 유럽 진출 (7작품)",
            },
          ],
        },
        {
          year: "2022",
          events: [
            { month: "12월", event: "매출액 23억 돌파" },
            { month: "11월", event: "블루픽 노블코믹스 작품 연재 계약 완료" },
            { month: "", event: "㈜툰코이 법인 설립" },
            { month: "07월", event: "연재 작품 90개 달성" },
            { month: "02월", event: "비비온 JP 계약체결 및 일본 진출 (11작품)" },
            { month: "01월", event: "레진 US 글로벌 계약 체결 (15작품)" },
          ],
        },
        {
          year: "2021",
          events: [
            { month: "11월", event: "연재 작품 70개 달성" },
            { month: "07월", event: "코핀 US 글로벌 진출 (25작품)" },
            { month: "06월", event: "플랫폼 아튜브 MOU 체결" },
          ],
        },
        {
          year: "2020",
          events: [
            { month: "03월", event: "국내 10개 업체 서비스 자체 IP 컨텐츠 런칭" },
          ],
        },
        {
          year: "2019",
          events: [
            { month: "10월", event: "연재 작품 50개 달성" },
            { month: "02월", event: "애니툰 작품 계약 완료 및 런칭" },
          ],
        },
        {
          year: "2018",
          events: [{ month: "05월", event: "매출액 10억 이상 돌파" }],
        },
        {
          year: "2016",
          events: [
            { month: "12월", event: "정산금 7억 5천 달성" },
            { month: "05월", event: "탑툰 작품 연재 계약 완료 및 런칭" },
          ],
        },
        {
          year: "2015",
          events: [
            { month: "11월", event: "투믹스 12작품 연재 계약 완료 및 런칭" },
            { month: "10월", event: "웹툰코이컨텐츠 설립" },
          ],
        },
      ],
    },
    EN: {
      home: "Home",
      about: "About",
      companyIntro: "Company Introduction",
      aboutUs: "About Us",
      webtoonTrend: "Webtoon Trends and",
      culture: "Culture",
      leading: " Leader",
      connecting: "connecting authors and readers,",
      globalWebtoon: "Global Webtoon Creator",
      webtoonKoiContent: "Webtoon Koi Content",
      description:
        "provides tailored content to readers with various genres and stories, and supports more creative activities for authors.",
      companyProfile: "Company Profile",
      founded: "Founded",
      foundedDate: "October 2, 2015",
      ceo: "CEO",
      ceoName: "Junhyung Lee",
      headquarters: "Headquarters",
      headquartersAddress: "30-11 Jandari-ro, Mapo-gu, Seoul",
      businessArea: "Business Area",
      webtoonCreation: "Webtoon Content Creation",
      globalDistribution: "Global Distribution",
      aiWebtoon: "AI Webtoon Creation Technology Development",
      history: "History",
      month07: "July",
      month05: "May",
      month04: "April",
      secondaryAgreement: "Secondary Copyright Agreement (Everywhere/Chattoon)",
      techCertification:
        "Certified Excellent Company in National Technology Evaluation",
      nobleComicsLaunch:
        "Completed Noble Comics Serialization Contract and Planned Launch",
      historyData: [
        {
          year: "2024",
          events: [
            {
              month: "Feb",
              event: "Vivion JP Webtoon Koy Content's own AI work contract (scheduled)",
            },
            {
              month: "Mar",
              event:
                "Everyway MOU business agreement ceremony Oreum Media US contract signing and entering Europe (9 works)",
            },         
          ],
        },
        {
          year: "2023",
          events: [
            {
              month: "Dec",
              event: "Establishment of Webtoon Koi Content Co., Ltd.",
            },
            {
              month: "Oct",
              event: "Contract with Vivion JP and entry into Japan (20 works)",
            },
            { month: "Jul", event: "Secondary Copyright Agreement (Everyway)" },
            {
              month: "May",
              event:
                "Certified Excellent Company in National Technology Evaluation",
            },
            {
              month: "Apr",
              event:
                "Completed serialization contract and planned launch of Noble Comics works (AniToon Noble Comics/PinerToon/Sun and Moon)",
            },
            {
              month: "Feb",
              event:
                "Contract with Orum Media US and entry into Europe (7 works)",
            },
          ],
        },
        {
          year: "2022",
          events: [
            { month: "Dec", event: "Surpassed sales of 2.3 billion won" },
            {
              month: "Nov",
              event:
                "Completed serialization contract for Blue Pick Noble Comics",
            },
            { month: "", event: "Establishment of Toon Koi Co., Ltd." },
            { month: "Jul", event: "Achieved 90 serialized works" },
            {
              month: "Feb",
              event: "Contract with Vivion JP and entry into Japan (11 works)",
            },
            {
              month: "Jan",
              event: "Contract with Lezhin US Global (15 works)",
            },
          ],
        },
        {
          year: "2021",
          events: [
            { month: "Nov", event: "Achieved 70 serialized works" },
            { month: "Jul", event: "Entry into US Global market (25 works)" },
            { month: "Jun", event: "MOU with Atube Platform" },
          ],
        },
        {
          year: "2020",
          events: [
            {
              month: "Mar",
              event:
                "Launch of own IP content services with 10 domestic companies",
            },
          ],
        },
        {
          year: "2019",
          events: [
            { month: "Oct", event: "Achieved 50 serialized works" },
            { month: "Feb", event: "Contract and launch of AniToon works" },
          ],
        },
        {
          year: "2018",
          events: [{ month: "May", event: "Surpassed sales of 1 billion won" }],
        },
        {
          year: "2016",
          events: [
            {
              month: "Dec",
              event: "Achieved 750 million won in settlement amount",
            },
            { month: "May", event: "Contract and launch of TopToon works" },
          ],
        },
        {
          year: "2015",
          events: [
            {
              month: "Nov",
              event: "Contract and launch of 12 works with Toomics",
            },
            { month: "Oct", event: "Establishment of Webtoon Koi Content" },
          ],
        },
      ],
    },
  };