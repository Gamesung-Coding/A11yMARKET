// import { logout } from '@/store/slices/authSlice';
import { Icon } from '@iconify/react';
import { Link, Navigate } from '@tanstack/react-router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { SheetTrigger } from './ui/sheet';
import { Button } from '@/components/ui/button';

export default function TopBar() {
  const dispatch = useDispatch();

  // const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleLogout = () => {
    // Dispatch logout action
    // dispatch(logout());

    setIsLoggedIn(false);
    setUser({});
    Navigate({ to: '/' });
  };

  const handleTestLogin = () => {
    setIsLoggedIn(true);
    setUser({ username: 'TestUser' });
  };

  const menuItemStyle =
    'flex items-center justify-center text-center gap-1 text-neutral-700 hover:text-blue-500 cursor-pointer dark:text-neutral-300 dark:hover:text-blue-400 font-kakao-big font-bold text-md 2xl:text-lg';

  useEffect(() => {});

  const menuItems = (itemStyle) => {
    if (isLoggedIn) {
      return (
        <>
          <li>
            <span
              className={`${itemStyle} pt-1 2xl:pt-[0.125em]`}
              aria-label={`${user.username || '사용자'}님 환영합니다.`}
            >
              {user.username || '사용자'}님
            </span>
          </li>
          <li>
            <span
              onClick={handleLogout}
              className={itemStyle}
              aria-label='로그아웃'
            >
              <Icon
                icon='mdi:logout'
                className='w-8 h-8'
              />
              로그아웃
            </span>
          </li>
          <li>
            <Link
              to='/profile'
              className={itemStyle}
              aria-label='마이페이지로 이동'
            >
              <Icon
                icon='mdi:account-circle'
                className='w-8 h-8'
              />
              마이페이지
            </Link>
          </li>
          <li>
            <Link
              to='/cart'
              className={itemStyle}
              aria-label='장바구니로 이동'
            >
              <Icon
                icon='mdi:cart'
                className='w-8 h-8'
              />
              장바구니
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            {/* <Link
                  to='/login'
                  className={itemStyle}
                >
                  로그인
                </Link> */}
            <span
              onClick={handleTestLogin}
              className={itemStyle}
              aria-label='로그인'
            >
              {/* <span className='icon-[line-md--login] w-8 h-8 mt-1'></span> */}
              <Icon
                icon='mdi:login'
                className='w-8 h-8'
              />
              로그인
            </span>
          </li>
          <li>
            <Link
              to='/register'
              className={itemStyle}
              aria-label='회원가입'
            >
              <Icon
                icon='mdi:account-plus'
                className='w-8 h-8'
              />
              회원가입
            </Link>
          </li>
          <li>
            <Link
              to='/cart'
              className={itemStyle}
              aria-label='장바구니로 이동'
            >
              <Icon
                icon='mdi:cart'
                className='w-8 h-8'
              />
              장바구니
            </Link>
          </li>
        </>
      );
    }
  };

  return (
    <nav className='min-w-full p-4 bg-white shadow-md flex justify-start xl:justify-between items-center dark:bg-neutral-800'>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            className='xl:hidden'
            aria-label='메뉴 열기'
          >
            <Icon
              icon='mdi:menu'
              width={12}
              height={12}
            />
          </Button>
        </SheetTrigger>
        <SheetContent
          side='left'
          className='w-64'
        >
          <SheetHeader>
            <SheetTitle>메뉴</SheetTitle>
          </SheetHeader>
          <ul className='flex flex-col space-y-4 mt-4'>{menuItems(menuItemStyle)}</ul>
        </SheetContent>
      </Sheet>
      <h1 className='text-4xl ml-4 font-kakao-big font-extrabold'>
        <Link
          to='/'
          className='text-neutral-800 dark:text-neutral-200 hover:text-neutral-500'
          aria-label='에일리마켓 홈으로 이동'
        >
          A11yMARKET
        </Link>
      </h1>

      <div className='2xl:w-xl w-md px-4 py-2 hidden xl:flex flex-row justify-center items-center border border-neutral-300 rounded-md focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:bg-neutral-700 dark:border-neutral-600 dark:focus-within:border-blue-400 dark:focus-within:ring-blue-400'>
        <input
          type='text'
          placeholder='Search...'
          className='flex-1 h-full text-xl bg-transparent outline-none'
        />
        <Link
          to='/search'
          className='ml-2 text-neutral-600 hover:text-blue-500 dark:text-neutral-300 dark:hover:text-blue-400'
          aria-label='검색하기'
        >
          <Icon
            icon='mdi:magnify'
            width={20}
            height={20}
          />
        </Link>
      </div>

      <div
        id='menu'
        className='hidden xl:flex justify-end items-center'
      >
        <ul className='flex space-x-6 mr-8'>{menuItems(menuItemStyle)}</ul>
      </div>
    </nav>
  );
}
