// src/routes/product/productId.jsx
import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

// 임시 상품 데이터 (백엔드 연동 전까지 UI 확인용)
const mockProduct = {
  id: 1,
  name: "상품명",
  price: 0,
  sellerName: "판매자명",
  sellerGrade: "우수",
  shippingInfo: ["배송정보", "무료배송"],
  summary: "상품정보 요약",
  options: [
    { id: "opt1", label: "옵션1", values: ["옵션 1-1", "옵션 1-2"] },
    { id: "opt2", label: "옵션2", values: ["옵션 2-1", "옵션 2-2"] },
  ],
};

// 상품문의(Q&A) 영역은 현재 사용 X
// 필요해지면 아래 mockQnaList와 activeTab === "qna" 블록을 다시 활성화하면 됨.
// const mockQnaList = [
//   {
//     id: 1,
//     status: "답변대기",
//     title: "문의 내용 ...",
//     userMaskedId: "user01***45",
//     date: "2025.11.10",
//   },
//   {
//     id: 2,
//     status: "답변완료",
//     title: "문의 내용 ...",
//     userMaskedId: "user01***45",
//     date: "2025.10.12",
//   },
//   {
//     id: 3,
//     status: "답변완료",
//     title: "문의 내용1 / 답변내용2",
//     userMaskedId: "user01***45",
//     date: "2025.9.18",
//     highlighted: true,
//   },
//   {
//     id: 4,
//     status: "답변완료",
//     title: "문의 내용 ...",
//     userMaskedId: "user01***45",
//     date: "2025.8.12",
//   },
//   {
//     id: 5,
//     status: "답변완료",
//     title: "문의 내용 ...",
//     userMaskedId: "user01***45",
//     date: "2025.7.12",
//   },
// ];

function ProductDetailPage() {
  // const { productId } = Route.useParams(); // 실제 연동 시 사용

  // ✅ 기본 탭은 상세정보로
  const [activeTab, setActiveTab] = useState("details");
  const [selectedOptions, setSelectedOptions] = useState({});

  // Q&A 페이지네이션 관련 state (현재 미사용)
  // const [currentPage, setCurrentPage] = useState(5);
  // const pageNumbers = [3, 4, 5, 6, 7];

  const handleChangeOption = (optionId, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }));
  };

  const handleBuyNow = () => {
    // TODO: 바로구매 로직
    console.log("Buy Now", mockProduct.id, selectedOptions);
  };

  const handleAddToCart = () => {
    // TODO: 장바구니 담기 로직
    console.log("Add to Cart", mockProduct.id, selectedOptions);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 mt-20 text-[#333333]">
      {/* 상단 상세 영역 */}
      <section className="flex flex-col gap-8 md:flex-row">
        {/* 이미지 영역 */}
        <div className="md:w-1/2">
          <div className="bg-gray-200 aspect-square flex items-center justify-center text-3xl text-gray-500">
            image
          </div>
        </div>

        {/* 정보 영역 */}
        <div className="md:w-1/2 space-y-4">
          {/* 판매자 정보 */}
          <div className="flex items-center gap-2 text-xs">
            <Icon
              icon="mdi:check-circle"
              className="text-green-500 w-4 h-4"
            />
            <span>
              {mockProduct.sellerName} ({mockProduct.sellerGrade}) &gt;
            </span>
          </div>

          {/* 상품명 / 가격 */}
          <div className="space-y-1">
            <h1 className="text-xl font-semibold">{mockProduct.name}</h1>
            <p className="text-lg font-bold">
              {mockProduct.price.toLocaleString("ko-KR")}원
            </p>
          </div>

          {/* 배송 정보 */}
          <div className="text-xs leading-5">
            {mockProduct.shippingInfo.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>

          {/* 상품정보 요약 박스 */}
          <div>
            <div className="text-xs mb-1">상품정보 요약</div>
            <div className="h-24 bg-gray-100 border border-gray-300 text-xs p-3">
              {mockProduct.summary}
            </div>
          </div>

          {/* 옵션 선택 */}
          <div className="space-y-2">
            {mockProduct.options.map((opt) => (
              <div key={opt.id}>
                <select
                  className="w-full h-8 border border-gray-300 px-2 text-xs bg-[#f5f5f5]"
                  value={selectedOptions[opt.id] || ""}
                  onChange={(e) =>
                    handleChangeOption(opt.id, e.target.value)
                  }
                >
                  <option value="">{opt.label}</option>
                  {opt.values.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* 버튼 영역 */}
          <div className="flex gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1 h-10 rounded-none"
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
            <Button
              type="button"
              className="flex-1 h-10 rounded-none"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </section>

      {/* 탭 메뉴 */}
      <section className="mt-10 border border-gray-300">
        <div className="grid grid-cols-2 text-sm">
          <Button
            type="button"
            variant={activeTab === "details" ? "default" : "ghost"}
            className="rounded-none border-r border-gray-300 h-12 w-full"
            onClick={() => setActiveTab("details")}
          >
            상세정보
          </Button>

          {/* 상품문의 탭 (현재 미사용) */}
          {/*
          <Button
            type="button"
            variant={activeTab === "qna" ? "default" : "ghost"}
            className="rounded-none border-r border-gray-300 h-12 w-full"
            onClick={() => setActiveTab("qna")}
          >
            상품문의
          </Button>
          */}

          <Button
            type="button"
            variant={activeTab === "shipping" ? "default" : "ghost"}
            className="rounded-none h-12 w-full"
            onClick={() => setActiveTab("shipping")}
          >
            배송/교환/반품 안내
          </Button>
        </div>
      </section>

      {/* 탭 컨텐츠 영역 */}
      <section className="mt-6">
        {activeTab === "details" && (
          <div className="border border-gray-200 h-64 flex items-center justify-center text-sm text-gray-500">
            상세정보 컨텐츠 영역 (상세 이미지, 설명 등)
          </div>
        )}

        {activeTab === "shipping" && (
          <div className="border border-gray-200 h-64 flex items-center justify-center text-sm text-gray-500">
            배송/교환/반품 안내 내용 영역
          </div>
        )}

        {/* 상품문의(Q&A) 탭 컨텐츠 (현재 전체 주석 처리)
        {activeTab === "qna" && (
          <>
            <div className="flex justify-end gap-2 mb-4">
              <Button
                type="button"
                className="h-9 rounded-none px-4 flex items-center gap-1"
              >
                <Icon icon="mdi:message-plus-outline" className="w-4 h-4" />
                상품 Q&A 작성하기
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-9 rounded-none px-4 flex items-center gap-1"
              >
                <Icon icon="mdi:account-outline" className="w-4 h-4" />
                내 Q&A 조회하기
              </Button>
            </div>

            <div className="border-t border-b border-gray-200 text-xs">
              {mockQnaList.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center px-4 py-4 border-t border-gray-200 first:border-t-0 ${
                    item.highlighted ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <div className="w-28 flex-shrink-0">
                    <span
                      className={`inline-block px-3 py-1 border rounded-full ${
                        item.status === "답변대기"
                          ? "border-gray-400"
                          : "border-black"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="flex-1 text-gray-800">
                    <span>{item.title}</span>
                  </div>

                  <div className="w-32 text-right text-gray-500">
                    <div>{item.userMaskedId}</div>
                    <div>{item.date}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs">
              <Button
                type="button"
                variant="ghost"
                className="h-8 rounded-none px-3"
                onClick={() =>
                  setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
                }
              >
                &lt; 이전
              </Button>

              {pageNumbers.map((num) => (
                <Button
                  key={num}
                  type="button"
                  variant={currentPage === num ? "default" : "outline"}
                  className="h-8 w-8 rounded-none px-0"
                  onClick={() => setCurrentPage(num)}
                >
                  {num}
                </Button>
              ))}

              <Button
                type="button"
                variant="ghost"
                className="h-8 rounded-none px-3"
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                다음 &gt;
              </Button>
            </div>
          </>
        )}
        */}
      </section>
    </div>
  );
}

// TanStack Router – /productId 경로 (현재 파일명: product/productId.jsx)
export const Route = createFileRoute("/productId")({
  component: ProductDetailPage,
});