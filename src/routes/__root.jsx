import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import TestComponent from '@/components/TestComponent';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <TopBar />
      <h1>A11yMARKET</h1>
      <TestComponent />
      <Outlet />
      <Footer />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  );
}
