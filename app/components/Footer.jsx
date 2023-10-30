import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row items-center md:justify-center md:space-x-4">
        <span>Imadev</span>
        <p className="hidden md:block">|</p>
        <p className="text-slate-600">All rights reserved.©</p>
      </div>
    </footer>
  );
};

export default Footer;
