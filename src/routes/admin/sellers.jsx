import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/sellers')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/admin/sellers"!</div>;
}
