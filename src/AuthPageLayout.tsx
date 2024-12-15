import { Outlet } from 'react-router-dom';

export default function AuthPageLayout() {
  return (
    <div className="min-h-screen bg-black">
      <Outlet />
    </div>
  );
}