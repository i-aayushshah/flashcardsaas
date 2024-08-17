import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavItem = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center px-6 py-2 mt-4 duration-200 border-l-4 ${
        isActive
          ? 'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100'
          : 'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100'
      }`}
    >
      {children}
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-800">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl font-bold text-white">FlashSaaS</h1>
      </div>
      <div className="overflow-y-auto overflow-x-hidden flex-grow">
        <nav className="flex flex-col py-4">
          <NavItem href="/dashboard">Dashboard</NavItem>
          <NavItem href="/dashboard/create">Create Flashcard</NavItem>
          <NavItem href="/dashboard/study">Study Session</NavItem>
          <NavItem href="/dashboard/profile">Profile</NavItem>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
