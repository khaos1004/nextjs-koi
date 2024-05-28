// Data.ts
export interface Card {
    id: number;
    title: string;
    content: string;
    imageUrl: string; // 이미지 URL 필드 추가
    date: string; // 날짜 필드 추가
  }
  
  export const cardsData: Card[] = [
    { id: 1, title: '제목 1', content: 
    '로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도 이용된다. 이런 용도로 사용할 때 로렘 입숨을 그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도 사용된다.로렘 입숨은 전통 라틴어와 닮은 점 때문에 종종 호기심을 유발하기도 하지만 그 이상의 의미를 담지는 않는다. 문서에서 텍스트가 보이면 사람들은 전체적인 프레젠테이션보다는 텍스트에 담긴 뜻에 집중하는 경향이 있어서 출판사들은 서체나 디자인을 보일 때는 프레젠테이션 자체에 초점을 맞추기 위해 로렘 입숨을 사용한다.로렘 입숨은 영어에서 사용하는 문자들의 전형적인 분포에 근접하다고도 하는데, 이 점 때문에 프레젠테이션으로 초점을 이동하는 데에도 도움을 준다.', imageUrl: '/images/main/thumbnail2.png', date: '2024-05-21' },
    { id: 2, title: '제목 2', content: '본문 2', imageUrl: '/images/main/thumbnail2.png', date: '2024-05-22' },
    { id: 3, title: '제목 3', content: '본문 3', imageUrl: '/images/main/thumbnail2.png', date: '2024-05-23' },
    { id: 4, title: '제목 4', content: '본문 4', imageUrl: '/images/main/thumbnail2.png', date: '2024-05-24' },
    { id: 5, title: '제목 5', content: '본문 5', imageUrl: '/images/main/thumbnail2.png', date: '2024-05-25' },
    { id: 6, title: '제목 6', content: '본문 6', imageUrl: '/images/main/thumbnail2.png', date: '2024-05-26' },
    { id: 7, title: '제목 7', content: '본문 7', imageUrl: '/images/main/thumbnail2.png', date: '2024-05-27' },
    { id: 8, title: '제목 8', content: '본문 8', imageUrl: '/images/main/thumbnail2.png', date: '2024-05-28' },
    { id: 9, title: '제목 9', content: '본문 9', imageUrl: '/images/main/thumbnail2.png', date: '2024-05-29' },
    { id: 10, title: '제목 10', content: '본문 10', imageUrl: '/images/main/thumbnail2.png', date: '2024-05-30' },
  ];
  