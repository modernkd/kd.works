import { Outlet } from 'react-router-dom';
import '../globals.css';

export default function Layout() {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
}
