import React, { ReactNode } from 'react';
import Nav from '../Navbar';
//import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Nav/>
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;

