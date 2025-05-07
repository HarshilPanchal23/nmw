export const revalidate = 0;

import React from "react";

export default function Header() {
  return (
    <header className="h-16 bg-indigo-500 flex items-center justify-end px-6 text-white">
      {/* <div className="font-semibold text-xl">Dashboard</div> */}
      <span className="flex items-center gap-6">
        <span>English</span>
        <span className="relative">
          <span className="material-icons">notifications</span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">66</span>
        </span>
        <span className="material-icons">account_circle</span>
      </span>    
    </header>
  );
} 