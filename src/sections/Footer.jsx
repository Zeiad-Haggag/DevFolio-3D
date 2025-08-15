import React from "react";

function Footer() {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex items-center justify-between flex-wrap g-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a
          href="https://github.com/Zeiad-Haggag"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a
          href="https://linkedin.com/in/zeiad-haggag"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/linkedin2.svg"
              alt="linkedin"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="https://x.com/ZeiadHaggag" target="_blank" rel="noreferrer">
          <div className="social-icon">
            <img src="/assets/x3.svg" alt="x" className="w-1/2 h-1/2" />
          </div>
        </a>
      </div>
      <p className="text-white-500">
        &copy; 2024 Zeiad Haggag All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
