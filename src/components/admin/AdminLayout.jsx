import React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function AdminLayout({ children }) {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  // 내비게이션 메뉴
  const menuItems = [
    { label: "대시보드", path: "/admin" },
    { label: "회원 관리", path: "/admin/users" },
    { label: "판매자 관리", path: "/admin/sellers" },
    { label: "상품 승인 관리", path: "/admin/products" },
    { label: "주문 관리", path: "/admin/orders" },
    { label: "접근성 인증 관리", path: "/admin/accessibility" },
  ];

  // 내비게이션 경로 표시 상단바
  const navPathLabel = () => {
    const item = menuItems.find((m) => m.path === currentPath);
    const base = "A11y Market > 관리자페이지";
    if (!item) return base;
    return `${base} > ${item.label}`;
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      <aside className="w-48 border-r bg-white flex flex-col">
        <h2 className="text-lg font-bold p-6 border-b">관리자 메뉴</h2>
        <nav aria-label="관리자 페이지 내비게이션">

          {/* Navigation Buttons */}
          <div className="flex flex-col items-center mt-4">
            <NavigationMenu orientation="vertical" className="w-full">
              <NavigationMenuList className="flex flex-col w-full px-0 space-y-2">
                {menuItems.map((item) => {
                  const active = currentPath === item.path;
                  return (
                    <NavigationMenuItem key={item.path} className="w-full">
                      <Link
                        to={item.path}
                        className={`block w-full py-4 text-center text-base font-medium rounded transition
                          ${active ? "bg-gray-300 font-semibold" : "hover:bg-gray-200"}`}
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
      <main className="flex-1 flex flex-col pt-20">
        {/* Top breadcrumb bar */}
        <div className="w-full bg-gray-100 border-b border-gray-300 px-6 py-3 text-gray-800 font-medium mb-4">
          {navPathLabel()}
        </div>

        {/* Page content */}
        <div className="flex-1 p-8">
          {children || (
            <div className="text-gray-800 text-lg">
              {/* Content */}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
