import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { createFileRoute } from '@tanstack/react-router';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { useRef } from 'react';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const autoPlay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const fade = useRef(Fade());

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
        <div className='flex w-full flex-col items-center justify-between lg:w-[80%] lg:flex-row-reverse'>
          <Carousel
            plugins={[autoPlay.current, fade.current]}
            opts={{
              align: 'center',
              loop: true,
            }}
            className='w-full max-w-lg'
            onMouseEnter={autoPlay.current.stop}
            onMouseLeave={autoPlay.current.reset}
          >
            <CarouselContent>
              {demoData.map((item, _) => (
                <CarouselItem key={item.id}>
                  <div className='p-1'>
                    <Card className='bg-neutral-400'>
                      <CardContent className='flex aspect-3/2 items-center justify-center p-6'>
                        <span className='text-4xl font-semibold'>{item.title}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='left-4 bg-neutral-300 text-neutral-600' />
            <CarouselNext className='right-4 bg-neutral-300 text-neutral-600' />
          </Carousel>
          <div className='mt-6 flex flex-col gap-8 text-center lg:mt-0 lg:text-left'>
            <h2 className='mb-2 text-4xl font-extrabold'>당신에게 꼭 맞는 상품을 쉽게 찾는 쇼핑</h2>
            <p className='text-xl font-bold text-neutral-600'>빠르고 간편하게</p>
            <div className='flex flex-col gap-8 sm:flex-row sm:justify-center lg:justify-start'>
              <Button
                variant='outline'
                size='lg'
                className='px-12 py-6 text-lg font-bold shadow-[2px_4px_1px_1px_rgba(0,0,0,0.1)]'
                aria-label='카테고리 보러가기 버튼'
              >
                카테고리 보러가기
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='px-12 py-6 text-lg font-bold shadow-[2px_4px_1px_1px_rgba(0,0,0,0.1)]'
                aria-label='오늘의 할인 상품 버튼'
              >
                오늘의 할인 상품
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
