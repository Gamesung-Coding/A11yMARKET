import React from 'react';
import { createFileRoute, Outlet, Link, useRouterState } from '@tanstack/react-router';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
  //beforeLoad: () => {} // 사용자 하위페이지 접근 검증
});

function RouteComponent() {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  // 내비게이션 메뉴
  const menuItems = [
    { label: '대시보드', path: '/admin' },
    { label: '회원 관리', path: '/admin/users' },
    { label: '판매자 관리', path: '/admin/sellers' },
    { label: '상품 승인 관리', path: '/admin/products' },
    { label: '주문 관리', path: '/admin/orders' },
    { label: '접근성 인증 관리', path: '/admin/accessibility' },
  ];

  // 내비게이션 경로 표시 상단바
  const navPathLabel = () => {
    const item = menuItems.find((m) => m.path === currentPath);
    const base = 'A11y Market > 관리자페이지';
    if (!item) return base;
    return `${base} > ${item.label}`;
  };

  return (
    <div className='flex min-h-screen w-full bg-gray-50'>
      <aside className='flex w-48 flex-col border-r bg-white'>
        <h2 className='border-b p-6 text-lg font-bold'>관리자 메뉴</h2>
        <nav aria-label='관리자 페이지 내비게이션'>
          {/* Navigation Buttons */}
          <div className='mt-4 flex flex-col items-center'>
            <NavigationMenu
              orientation='vertical'
              className='w-full'
            >
              <NavigationMenuList className='flex w-full flex-col space-y-2 px-0'>
                {menuItems.map((item) => {
                  const active = currentPath === item.path;
                  return (
                    <NavigationMenuItem
                      key={item.path}
                      className='w-full'
                    >
                      <Link
                        to={item.path}
                        className={`block w-full rounded py-4 text-center text-base font-medium transition ${active ? 'bg-gray-300 font-semibold' : 'hover:bg-gray-200'}`}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>
      </aside>

      {/* Page Content */}
      <main className='font-kakao-big flex flex-1 flex-col pt-20'>
        {/* Top NavPathLabel bar */}
        <div className='font-kakao-big mb-4 w-full border-b border-gray-300 bg-gray-100 px-6 py-3 font-medium text-gray-800'>
          {navPathLabel()}
        </div>

        {/* Page content */}
        <div className='font-kakao-big flex-1 p-8'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
