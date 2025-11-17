import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  );
}
