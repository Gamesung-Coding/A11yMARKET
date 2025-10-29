import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <h2>Welcome to A11yMARKET</h2>
      <p>Your one-stop shop for accessible products!</p>
    </div>
  );
}
