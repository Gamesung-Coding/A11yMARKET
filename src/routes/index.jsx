import { MainCarousel } from '@/components/MainCarousel';
import { RealtimeRanking } from '@/components/RealtimeRanking';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const bannerData = [
    { id: 1, title: '혜택 배너 1', description: '첫 번째 혜택 배너 설명' },
    { id: 2, title: '혜택 배너 2', description: '두 번째 혜택 배너 설명' },
    { id: 3, title: '혜택 배너 3', description: '세 번째 혜택 배너 설명' },
    { id: 4, title: '혜택 배너 4', description: '네 번째 혜택 배너 설명' },
    { id: 5, title: '혜택 배너 5', description: '다섯 번째 혜택 배너 설명' },
  ];

  const realtimeRankingData = [
    { id: 1, title: '인기 상품 1', price: 10000 },
    { id: 2, title: '인기 상품 2', price: 20000 },
    { id: 3, title: '인기 상품 3', price: 30000 },
    { id: 4, title: '인기 상품 4', price: 40000 },
    { id: 5, title: '인기 상품 5', price: 50000 },
    { id: 6, title: '인기 상품 6', price: 60000 },
    { id: 7, title: '인기 상품 7', price: 70000 },
    { id: 8, title: '인기 상품 8', price: 80000 },
    { id: 9, title: '인기 상품 9', price: 90000 },
    { id: 10, title: '인기 상품 10', price: 100000 },
  ];

  return (
    <main
      aria-label='홈페이지 메인 콘텐츠'
      className='font-kakao-big flex min-h-screen w-full flex-col items-center pt-20'
    >
      <section
        className='flex h-fit w-full items-center justify-center bg-amber-50 px-4 pb-8 lg:py-8'
        aria-label='주요 혜택 및 이벤트 배너 영역'
      >
        <MainCarousel data={bannerData} />
      </section>
      <section
        className='flex w-full flex-col items-center justify-center'
        aria-label='실시간 인기 상품 영역'
      >
        <RealtimeRanking data={realtimeRankingData} />
      </section>
    </main>
  );
}
