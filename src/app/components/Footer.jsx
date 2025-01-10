"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <img
          src="/images/aot.png"
          alt="Logo"
          className="logo"
        />
        <p className="text-slate-600">All rights reserved.</p>
      </div>

      <style jsx>{`
        .logo {
          width: 100px; /* Adjust the width */
          height: auto; /* Maintain aspect ratio */
          border-radius: 45px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
