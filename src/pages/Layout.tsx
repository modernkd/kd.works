import { Outlet } from 'react-router-dom';
import '../globals.css';

/**
 * Root layout component that provides global styles and renders child routes.
 * Acts as the main layout wrapper for all pages in the application.
 */
export default function Layout() {
  return <Outlet />;
}
