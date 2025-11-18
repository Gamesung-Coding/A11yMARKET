"use client";

import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
//import MyPageNav from '@/components/MyPageNav'

/* ===========================================================
   DefaultAddress Component
   =========================================================== */
function DefaultAddress() {
  const defaultAddress = {
    addressName: '우리집',
    receiverName: '홍길동',
    postalCode: '12345',
    address: '서울시 강남구 테헤란로 123',
    detailAddress: '101동 1001호',
    phone: '010-1234-5678',
  }

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* 배송지 정보 좌측 */}
      <div style={{ textAlign: 'left' }}>
        <p><strong>배송지명:</strong> {defaultAddress.addressName}</p>
        <p><strong>수령인:</strong> {defaultAddress.receiverName}</p>
        <p>
          <strong>주소:</strong> ({defaultAddress.postalCode}){' '}
          {defaultAddress.address} {defaultAddress.detailAddress}
        </p>
        <p><strong>연락처:</strong> {defaultAddress.phone}</p>
      </div>

      {/* 수정 버튼 */}
      <div>
        <Button>수정</Button>
      </div>
    </div>
  )
}

/* ===========================================================
   NewAddressForm Component (Controlled Input 버전)
   =========================================================== */
function NewAddressForm() {
  // 폼 상태
  const [form, setForm] = useState({
    addressName: '',
    isDefault: false,
    receiverName: '',
    phone: '',
    postalCode: '',
    address: '',
    detailAddress: '',
  })

  // 입력 핸들러
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = () => {
    console.log('신규 등록된 주소:', form)
  }

  const handleReset = () => {
    setForm({
      addressName: '',
      isDefault: false,
      receiverName: '',
      phone: '',
      postalCode: '',
      address: '',
      detailAddress: '',
    })
  }

  return (
    <div>
      {/* 배송지명 */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>배송지명</label>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="text"
            name="addressName"
            value={form.addressName}
            onChange={handleChange}
            placeholder="예: 우리집, 회사 등"
            style={{
              border: '1px solid #ccc',
              padding: '8px',
              width: '250px',
              borderRadius: '4px',
            }}
          />

          {/* 기본배송지 체크 */}
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              name="isDefault"
              checked={form.isDefault}
              onChange={handleChange}
            />
            기본배송지로 설정
          </label>
        </div>
      </div>

      {/* 수령인 */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>수령인</label>
        <input
          type="text"
          name="receiverName"
          value={form.receiverName}
          onChange={handleChange}
          placeholder="수령인 이름"
          style={{
            border: '1px solid #ccc',
            padding: '8px',
            width: '300px',
            borderRadius: '4px',
          }}
        />
      </div>

      {/* 연락처 */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>연락처</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="01012345678"
          style={{
            border: '1px solid #ccc',
            padding: '8px',
            width: '300px',
            borderRadius: '4px',
          }}
        />
      </div>

      {/* 우편번호 */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>우편번호</label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            placeholder="우편번호"
            style={{
              border: '1px solid #ccc',
              padding: '8px',
              width: '150px',
              borderRadius: '4px',
            }}
          />
          <Button>우편번호 찾기</Button>
        </div>
      </div>

      {/* 주소 */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          주소 / 상세주소
        </label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="주소"
            style={{
              border: '1px solid #ccc',
              padding: '8px',
              borderRadius: '4px',
              flex: 2,
            }}
          />

          <input
            type="text"
            name="detailAddress"
            value={form.detailAddress}
            onChange={handleChange}
            placeholder="상세주소"
            style={{
              border: '1px solid #ccc',
              padding: '8px',
              borderRadius: '4px',
              flex: 1,
            }}
          />
        </div>
      </div>

      {/* 등록 버튼 */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Button onClick={handleSubmit}>저장하기</Button>

        <Button
          onClick={handleReset}
          style={{
            backgroundColor: '#fff',
            color: '#000',
            border: '1px solid #000',
          }}
        >
          초기화
        </Button>
      </div>
    </div>
  )
}


/* ===========================================================
   AddressList Component
   =========================================================== */
function AddressList() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      addressName: '우리집',
      receiverName: '홍길동',
      postalCode: '12345',
      address: '서울시 강남구 테헤란로 123',
      detailAddress: '101동 1001호',
      phone: '010-1234-5678',
      isDefault: true,
    },
    {
      id: 2,
      addressName: '회사',
      receiverName: '홍길동',
      postalCode: '67890',
      address: '서울시 서초구 서초대로 456',
      detailAddress: '5층',
      phone: '010-9876-5432',
      isDefault: false,
    },
  ])

  /* 삭제 */
  const handleDelete = (id) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id))
  }

  /* 수정 */
  const handleEdit = (addr) => {
    console.log('수정 클릭:', addr)
  }

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
      <div
        style={{
          display: 'flex',
          fontWeight: 'bold',
          padding: '10px 0',
          borderBottom: '1px solid #ccc',
        }}
      >
        <div style={{ flex: 2 }}>배송지명</div>
        <div style={{ flex: 1 }}>수령인</div>
        <div style={{ flex: 3 }}>주소</div>
        <div style={{ flex: 2 }}>연락처</div>
        <div style={{ flex: 'auto' }}>관리</div>
      </div>

      {addresses.map((addr) => (
        <div
          key={addr.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 0',
            borderBottom: '1px solid #eee',
          }}
        >
          <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
            {addr.isDefault && <span style={{ color: 'blue' }}>[기본배송지]</span>}
            <span>{addr.addressName}</span>
          </div>

          <div style={{ flex: 1 }}>{addr.receiverName}</div>
          <div style={{ flex: 3 }}>
            ({addr.postalCode}) {addr.address} {addr.detailAddress}
          </div>
          <div style={{ flex: 2 }}>{addr.phone}</div>

          <div style={{ display: 'flex', gap: '5px' }}>
            <Button onClick={() => handleEdit(addr)}>수정</Button>
            <Button onClick={() => handleDelete(addr.id)}>삭제</Button>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ===========================================================
   RouteComponent (main)
   =========================================================== */
function RouteComponent() {
  const [activeTab, setActiveTab] = useState(0)


  const tabs = [
    { label: '기본배송지', component: <DefaultAddress /> },
    { label: '신규배송지', component: <NewAddressForm /> },
    { label: '배송지목록', component: <AddressList /> },
  ]

  return (
   <div style={{ display: 'flex', gap: '20px' }}> 
    {/*<MyPageNav />*/}
    <div style={{ width: '800px', margin: '20px auto' }}>
        
      <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>배송지 관리</h1>

      {/* 탭 */}
      <div style={{ display: 'flex' }}>
        {tabs.map((tab, index) => {
          const isActive = activeTab === index
          return (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                padding: '8px 16px',
                cursor: 'pointer',
                borderTopLeftRadius: '5px',
                borderTopRightRadius: '5px',
                backgroundColor: isActive ? '#fff' : '#eaeaea',
                marginRight: '4px',
                fontWeight: isActive ? 'bold' : 'normal',
                border: '2px solid #ccc',
                borderBottom: isActive ? 'none' : '2px solid #ccc',
              }}
            >
              {tab.label}
            </div>
          )
        })}
      </div>

      {/* 컨텐츠 영역 */}
      <div
        style={{
          border: '2px solid #ccc',
          padding: '20px',
          backgroundColor: '#fff',
          marginTop: '-2px',
          borderRadius: '0 5px 5px 5px',
        }}
      >
        {tabs[activeTab].component}
      </div>
    </div>
    </div>
  )
}

/* 라우트 export */
export const Route = createFileRoute('/mypage/address/')({
  component: RouteComponent,
})
