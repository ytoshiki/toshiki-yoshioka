import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="l-footer">
      <div className="l-container">
        <div className="l-footer__content">
          <div className="l-footer__block">
            <p className="l-footer__label">Contact —</p>
            <p className="l-footer__text">hnkc.ysoktsk@gmail.com</p>
          </div>
          <div className="l-footer__block">
            <p className="l-footer__label">Social —</p>
            <ul className="l-footer__links">
              <li>
                <a
                  href="https://github.com/ytoshiki?tab=repositories"
                  target="_blank"
                >
                  Github
                </a>
                ,
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/toshikiyoshioka"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
