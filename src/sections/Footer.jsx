import React from "react";

function Footer() {
  return (
    <section className="c-space pt-5 pb-3 border-t border-black-300 flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:items-center">
      <div className="text-white-500 flex gap-2 text-sm sm:text-base">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-2 justify-center">
        <a
          href="https://github.com/Zeiad-Haggag"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-4 h-4 sm:w-1/2 sm:h-1/2"
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
              className="w-4 h-4 sm:w-1/2 sm:h-1/2"
            />
          </div>
        </a>
        <a href="https://x.com/ZeiadHaggag" target="_blank" rel="noreferrer">
          <div className="social-icon">
            <img
              src="/assets/x3.svg"
              alt="x"
              className="w-4 h-4 sm:w-1/2 sm:h-1/2"
            />
          </div>
        </a>
      </div>

      <p className="text-white-500 text-xs sm:text-base text-center">
        &copy; 2024 Zeiad Haggag All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
