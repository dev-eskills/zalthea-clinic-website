import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-32 md:pt-40">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
