'use client';

import { useEffect } from 'react';

export default function Resume() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <iframe
        src="/resume.pdf"
        className="w-full h-[90%] border-none"
        title="Resume"
      />
    </div>
  );