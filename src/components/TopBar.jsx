import React, { useEffect, useState } from 'react';

export default function TopBar() {
  const [menuItems, setMenuItems] = useState(['로그인', '회원가입', '장바구니', '마이페이지']);

  useEffect(() => {});

  return (
    <div className='min-w-full p-4 bg-white shadow-md flex justify-between items-center dark:bg-gray-800'>
      <div
        flex
        className='flex items-center w-[66%] w-min-xl w-max-4xl justify-between'
      >
        <div className='flex justify-center items-center ml-4'>
          <h1 className='text-4xl font-kakao-big font-extrabold'>A11yMARKET</h1>
        </div>
        <div
          id='search-bar'
          className='flex justify-center items-center mr-4'
        >
          <rect className='w-2xl px-4 py-2 flex flex-row justify-center items-center border border-gray-300 rounded-md focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus-within:border-blue-400 dark:focus-within:ring-blue-400'>
            <input
              type='text'
              placeholder='Search...'
              className='flex-1 h-full text-xl bg-transparent outline-none'
            />
            <span className='icon-[bx--search]'></span>
          </rect>
        </div>
      </div>
      <div
        id='menu'
        className='flex-1 flex justify-end items-center'
      >
        <ul className='flex space-x-6 mr-8'>
          {menuItems.map((item) => (
            <li
              key={item}
              className='text-center text-gray-700 hover:text-blue-500 cursor-pointer dark:text-gray-300 dark:hover:text-blue-400 font-kakao-big font-bold text-xl'
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
