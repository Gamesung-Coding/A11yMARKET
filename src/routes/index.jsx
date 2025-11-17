import { CategoryView } from '@/components/CategoryView';
import { MainCarousel } from '@/components/MainCarousel';
import { RealtimeRanking } from '@/components/RealtimeRanking';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

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

  const categoriesDummyData = [
    { id: 1, name: '카테고리 1' },
    { id: 2, name: '카테고리 2' },
    { id: 3, name: '카테고리 3' },
    { id: 4, name: '카테고리 4' },
    { id: 5, name: '카테고리 5' },
  ];

  const productsDummyData = [
    { id: 1, title: '상품 1', price: 10000, categoryId: 1 },
    { id: 2, title: '상품 2', price: 20000, categoryId: 1 },
    { id: 3, title: '상품 3', price: 30000, categoryId: 2 },
    { id: 4, title: '상품 4', price: 40000, categoryId: 2 },
    { id: 5, title: '상품 5', price: 50000, categoryId: 3 },
    { id: 6, title: '상품 6', price: 60000, categoryId: 1 },
    { id: 7, title: '상품 7', price: 70000, categoryId: 4 },
    { id: 8, title: '상품 8', price: 80000, categoryId: 4 },
    { id: 9, title: '상품 9', price: 90000, categoryId: 1 },
    { id: 10, title: '상품 10', price: 100000, categoryId: 5 },
    { id: 11, title: '상품 11', price: 110000, categoryId: 1 },
    { id: 12, title: '상품 12', price: 120000, categoryId: 2 },
    { id: 13, title: '상품 13', price: 130000, categoryId: 4 },
    { id: 14, title: '상품 14', price: 140000, categoryId: 4 },
    { id: 15, title: '상품 15', price: 150000, categoryId: 5 },
    { id: 16, title: '상품 16', price: 160000, categoryId: 1 },
    { id: 17, title: '상품 17', price: 170000, categoryId: 2 },
    { id: 18, title: '상품 18', price: 180000, categoryId: 3 },
    { id: 19, title: '상품 19', price: 190000, categoryId: 4 },
    { id: 20, title: '상품 20', price: 200000, categoryId: 5 },
  ];

  const [productList, setProductList] = useState(productsDummyData.slice(0, 12));

  const handleSelectCategory = (categoryId) => {
    const filteredProducts = productsDummyData.filter(
      (product) => product.categoryId === categoryId,
    );
    setProductList(filteredProducts);
  };

  return (
    <main
      className='font-kakao-big flex min-h-screen w-full flex-col items-center pt-20'
      aria-label='홈페이지 메인 콘텐츠'
    >
      <section
        className='flex h-fit w-full items-center justify-center bg-amber-50 px-4 pb-8 lg:py-8 dark:bg-stone-700'
        aria-label='주요 혜택 및 이벤트 배너 영역'
      >
        <MainCarousel data={bannerData} />
      </section>
      <section
        className='flex h-fit w-full flex-col items-center justify-center'
        aria-label='실시간 인기 상품 영역'
      >
        <RealtimeRanking data={realtimeRankingData} />
      </section>
      <section
        className='flex h-fit w-full flex-col items-center justify-center'
        aria-label='카테고리 보기 영역'
      >
        <CategoryView
          categories={categoriesDummyData}
          products={productList}
          onSelectCategory={handleSelectCategory}
        />
      </section>
    </main>
  );
}
