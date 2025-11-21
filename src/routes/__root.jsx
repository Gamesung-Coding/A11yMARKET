import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import A11yButton from '@/components/A11y/A11yButton';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <TopBar />
      <Outlet />
      <A11yButton />
      <Footer />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  );
}
