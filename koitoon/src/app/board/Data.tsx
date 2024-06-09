// Data.ts
export interface Card {
    id: number;
    title: string;
    content: string;
    imageUrl: any; // 이미지 URL 필드 추가
    date: string; // 날짜 필드 추가
  }
  
  export const cardsData: Card[] = [
    { id: 1, title: '제목 1', content: 
    ' 작자 중심의 웹툰 생태계 구성을 위', imageUrl: '/images/main/thumbnail2.png', date: '2024-05-21' },
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
  