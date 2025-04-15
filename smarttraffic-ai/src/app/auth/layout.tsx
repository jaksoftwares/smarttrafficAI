'use client';

import { ReactNode } from 'react';
import "@/styles/globals.css";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <html lang="en">
        <body className="min-h-screen flex items-center justify-center">
          {/* Only the children are centered */}
          {children}
        </body>
      </html>
    </>
  );
};

export default AuthLayout;
