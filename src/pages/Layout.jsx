// components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url('./gradientbg.png')`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
