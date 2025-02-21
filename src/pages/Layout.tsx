import React from 'react';
import MyAppNav from '../components/MyAppNav';
import { Outlet } from 'react-router-dom';
import '../styles/Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ }: LayoutProps) => {
  return (
    <div className="container">
        <MyAppNav />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;