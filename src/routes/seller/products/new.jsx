// src/routes/seller/products/new.jsx
import React, { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

function SellerProductNewPage() {
  const [form, setForm] = useState({
    name: '',
    category: '',
    brand: '',
    description: '',
    salePrice: '',
    discountPrice: '',
    saleStatus: '',
    colorOption: '',
    sizeOption: '',
    stockQuantity: '',
    shippingFee: '',
    shippingMethod: '',
  });

  const handleChange = (field) => (event) => {
    setForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSaveDraft = (event) => {
    event.preventDefault();
    // TODO: 임시저장 API 연동
    console.log('임시 저장', form);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: 상품 등록 API 연동
    console.log('상품 등록', form);
  };

  return (
    <main
      className='mx-auto mt-20 max-w-5xl px-4 py-10 text-[#333333]'
      aria-label='판매자 상품 등록 페이지'
    >
      {/* 화이트 보드 카드 */}
      <section
        className='rounded-3xl border border-gray-200 bg-white shadow-sm'
        aria-label='상품 등록 폼 화이트보드'
      >
        <form
          className='divide-y divide-gray-200'
          aria-label='상품 등록 폼'
          onSubmit={handleSubmit}
        >
          {/* 1. 상품 기본정보 */}
          <div
            className='px-6 py-6'
            aria-label='상품 기본정보 섹션'
          >
            <h2
              className='font-kakao-big mb-4 text-sm font-semibold'
              aria-label='상품 기본정보 제목'
            >
              상품 기본정보
            </h2>

            <div className='grid gap-6 md:grid-cols-2'>
              {/* 상품명 */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='name'
                  className='font-kakao-big text-xs'
                  aria-label='상품명 입력 레이블'
                >
                  상품명 *
                </label>
                <input
                  id='name'
                  type='text'
                  value={form.name}
                  onChange={handleChange('name')}
                  className='h-9 w-full rounded border border-gray-300 px-3 text-xs'
                  placeholder='상품명을 입력하세요'
                  aria-label='상품명 입력'
                  required
                />
              </div>

              {/* 카테고리 */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='category'
                  className='font-kakao-big text-xs'
                  aria-label='카테고리 선택 레이블'
                >
                  카테고리 *
                </label>
                <select
                  id='category'
                  value={form.category}
                  onChange={handleChange('category')}
                  className='h-9 w-full rounded border border-gray-300 bg-white px-3 text-xs'
                  aria-label='카테고리 선택'
                  required
                >
                  <option value=''>카테고리 선택</option>
                  <option value='보조공학기기'>보조공학기기</option>
                  <option value='생활용품'>생활용품</option>
                  <option value='기타'>기타</option>
                </select>
              </div>

              {/* 브랜드 */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='brand'
                  className='font-kakao-big text-xs'
                  aria-label='브랜드명 입력 레이블'
                >
                  브랜드
                </label>
                <input
                  id='brand'
                  type='text'
                  value={form.brand}
                  onChange={handleChange('brand')}
                  className='h-9 w-full rounded border border-gray-300 px-3 text-xs'
                  placeholder='브랜드명을 입력하세요'
                  aria-label='브랜드명 입력'
                />
              </div>

              {/* 상품 이미지 업로드 자리(아이콘X, 나중에 기능 연동) */}
              <div className='flex flex-col gap-2'>
                <span
                  className='font-kakao-big text-xs'
                  aria-label='상품 이미지 업로드 레이블'
                >
                  상품 이미지 *
                </span>
                <div
                  className='flex h-24 w-full cursor-pointer items-center justify-center rounded border border-dashed border-gray-300 bg-[#fafafa] text-[11px] text-gray-500'
                  aria-label='상품 이미지 업로드 영역'
                >
                  [이미지 업로드]
                </div>
              </div>
            </div>

            {/* 상세설명 - 전체 폭 */}
            <div className='mt-6'>
              <label
                htmlFor='description'
                className='font-kakao-big mb-2 block text-xs'
                aria-label='상세 설명 입력 레이블'
              >
                상세설명
              </label>
              <textarea
                id='description'
                value={form.description}
                onChange={handleChange('description')}
                className='min-h-[140px] w-full rounded border border-gray-300 p-3 text-xs'
                placeholder='상품 상세설명을 입력하세요'
                aria-label='상품 상세 설명 입력'
              />
            </div>
          </div>

          {/* 2. 판매정보 */}
          <div
            className='px-6 py-6'
            aria-label='판매정보 섹션'
          >
            <h2
              className='font-kakao-big mb-4 text-sm font-semibold'
              aria-label='판매정보 제목'
            >
              판매정보
            </h2>

            <div className='grid gap-6 md:grid-cols-3'>
              {/* 판매가 */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='salePrice'
                  className='font-kakao-big text-xs'
                  aria-label='판매가 입력 레이블'
                >
                  판매가 *
                </label>
                <div className='flex items-center gap-2'>
                  <input
                    id='salePrice'
                    type='number'
                    min='0'
                    value={form.salePrice}
                    onChange={handleChange('salePrice')}
                    className='h-9 w-full rounded border border-gray-300 px-3 text-xs'
                    aria-label='판매가 입력'
                    required
                  />
                  <span className='text-[11px] text-gray-500'>원</span>
                </div>
              </div>

              {/* 할인가 */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='discountPrice'
                  className='font-kakao-big text-xs'
                  aria-label='할인가 입력 레이블'
                >
                  할인가
                </label>
                <div className='flex items-center gap-2'>
                  <input
                    id='discountPrice'
                    type='number'
                    min='0'
                    value={form.discountPrice}
                    onChange={handleChange('discountPrice')}
                    className='h-9 w-full rounded border border-gray-300 px-3 text-xs'
                    aria-label='할인가 입력'
                  />
                  <span className='text-[11px] text-gray-500'>원</span>
                </div>
              </div>

              {/* 판매상태 */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='saleStatus'
                  className='font-kakao-big text-xs'
                  aria-label='판매 상태 선택 레이블'
                >
                  판매상태 *
                </label>
                <select
                  id='saleStatus'
                  value={form.saleStatus}
                  onChange={handleChange('saleStatus')}
                  className='h-9 w-full rounded border border-gray-300 bg-white px-3 text-xs'
                  aria-label='판매 상태 선택'
                  required
                >
                  <option value=''>상태 선택</option>
                  <option value='on'>판매중</option>
                  <option value='off'>판매중지</option>
                  <option value='prepare'>판매예정</option>
                </select>
              </div>
            </div>
          </div>

          {/* 3. 옵션 */}
          <div
            className='px-6 py-6'
            aria-label='옵션 섹션'
          >
            <h2
              className='font-kakao-big mb-4 text-sm font-semibold'
              aria-label='옵션 정보 제목'
            >
              옵션
            </h2>

            <div className='grid gap-6 md:grid-cols-2'>
              {/* 색상 옵션 */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='colorOption'
                  className='font-kakao-big text-xs'
                  aria-label='색상 옵션 입력 레이블'
                >
                  색상
                </label>
                <input
                  id='colorOption'
                  type='text'
                  value={form.colorOption}
                  onChange={handleChange('colorOption')}
                  className='h-9 w-full rounded border border-gray-300 px-3 text-xs'
                  placeholder='예: 블랙, 화이트'
                  aria-label='색상 옵션 입력'
                />
                <span className='text-[11px] text-gray-500'>
                  쉼표(,)로 구분하여 여러 색상을 입력할 수 있습니다.
                </span>
              </div>

              {/* 사이즈 옵션 */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='sizeOption'
                  className='font-kakao-big text-xs'
                  aria-label='사이즈 옵션 입력 레이블'
                >
                  사이즈
                </label>
                <input
                  id='sizeOption'
                  type='text'
                  value={form.sizeOption}
                  onChange={handleChange('sizeOption')}
                  className='h-9 w-full rounded border border-gray-300 px-3 text-xs'
                  placeholder='예: S, M, L'
                  aria-label='사이즈 옵션 입력'
                />
                <span className='text-[11px] text-gray-500'>
                  쉼표(,)로 구분하여 여러 사이즈를 입력할 수 있습니다.
                </span>
              </div>
            </div>
          </div>

          {/* 4. 재고 & 배송 */}
          <div
            className='px-6 py-6'
            aria-label='재고 및 배송 섹션'
          >
            <h2
              className='font-kakao-big mb-4 text-sm font-semibold'
              aria-label='재고 및 배송 제목'
            >
              재고 &amp; 배송
            </h2>

            <div className='grid gap-6 md:grid-cols-3'>
              {/* 재고수량 */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='stockQuantity'
                  className='font-kakao-big text-xs'
                  aria-label='재고 수량 입력 레이블'
                >
                  재고수량 *
                </label>
                <div className='flex items-center gap-2'>
                  <input
                    id='stockQuantity'
                    type='number'
                    min='0'
                    value={form.stockQuantity}
                    onChange={handleChange('stockQuantity')}
                    className='h-9 w-full rounded border border-gray-300 px-3 text-xs'
                    aria-label='재고 수량 입력'
                    required
                  />
                  <span className='text-[11px] text-gray-500'>개</span>
                </div>
              </div>

              {/* 배송비 */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='shippingFee'
                  className='font-kakao-big text-xs'
                  aria-label='배송비 입력 레이블'
                >
                  배송비
                </label>
                <div className='flex items-center gap-2'>
                  <input
                    id='shippingFee'
                    type='number'
                    min='0'
                    value={form.shippingFee}
                    onChange={handleChange('shippingFee')}
                    className='h-9 w-full rounded border border-gray-300 px-3 text-xs'
                    aria-label='배송비 입력'
                  />
                  <span className='text-[11px] text-gray-500'>원</span>
                </div>
              </div>

              {/* 배송방법 */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='shippingMethod'
                  className='font-kakao-big text-xs'
                  aria-label='배송 방법 선택 레이블'
                >
                  배송방법
                </label>
                <select
                  id='shippingMethod'
                  value={form.shippingMethod}
                  onChange={handleChange('shippingMethod')}
                  className='h-9 w-full rounded border border-gray-300 bg-white px-3 text-xs'
                  aria-label='배송 방법 선택'
                >
                  <option value=''>배송방법 선택</option>
                  <option value='택배'>택배</option>
                  <option value='퀵서비스'>퀵서비스</option>
                  <option value='직접배송'>직접배송</option>
                </select>
              </div>
            </div>
          </div>

          {/* 하단 버튼 바 - 장바구니 페이지처럼 전체 폭 바텀 바 느낌 */}
          <div
            className='flex items-center justify-end gap-3 rounded-b-3xl bg-[#fafafa] px-6 py-4'
            aria-label='상품 등록 하단 버튼 영역'
          >
            <Button
              type='button'
              variant='outline'
              className='font-kakao-big h-9 px-4'
              onClick={handleSaveDraft}
              aria-label='상품 정보 임시 저장'
            >
              임시저장
            </Button>
            <Button
              type='submit'
              className='font-kakao-big h-9 px-6'
              aria-label='상품 등록하기'
            >
              상품등록
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}

// TanStack Router – /seller/products/new 경로
export const Route = createFileRoute('/seller/products/new')({
  component: SellerProductNewPage,
});
