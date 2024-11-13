// src/Components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; // Import the Header component
import Footer from './Footer';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Section */}
      <main className="flex-grow overflow-auto bg-[rgb(85,17,0)]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
