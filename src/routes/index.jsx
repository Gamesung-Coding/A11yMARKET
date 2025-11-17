import { MainCarousel } from '@/components/MainCarousel';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const demoData = [
    { id: 1, title: '혜택 배너 1', description: '첫 번째 혜택 배너 설명' },
    { id: 2, title: '혜택 배너 2', description: '두 번째 혜택 배너 설명' },
    { id: 3, title: '혜택 배너 3', description: '세 번째 혜택 배너 설명' },
    { id: 4, title: '혜택 배너 4', description: '네 번째 혜택 배너 설명' },
    { id: 5, title: '혜택 배너 5', description: '다섯 번째 혜택 배너 설명' },
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
        <MainCarousel data={demoData} />
      </section>
    </main>
  );
}
