import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import TestComponent from '@/components/TestComponent';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <div>
      <h1>A11yMARKET</h1>
      <TestComponent />
      <Outlet />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </div>
  );
}
