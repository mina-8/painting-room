'use client'
import React, { useState, ReactNode } from 'react';

interface CollapseProps {
  title: string;
  children: ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div
        className="p-4 flex justify-between items-center cursor-pointer bg-gray-100 hover:bg-gray-200 hover:text-custom-sky-blue"
        onClick={toggleCollapse}
      >
        <span className='dark:text-black'>{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform dark:text-black ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-full' : 'max-h-0'
        }`}
      >
        <div className="p-4 bg-custom-dark-blue text-white dark:text-white dark:bg-custom-dark-blue">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;