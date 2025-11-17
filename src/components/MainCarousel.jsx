import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { useRef } from 'react';

export const MainCarousel = ({ data }) => {
  const autoPlay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const fade = useRef(Fade());

  return (
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
          {data.map((item, _) => (
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
  );
};
