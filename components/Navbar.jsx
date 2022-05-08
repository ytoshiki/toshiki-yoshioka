import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const toogleClassName = (href) => router.pathname === href;

  return (
    <nav className="navbar">
      <div className="l-container">
        <ul>
          <li>
            <Link href="/" scroll={false}>
              <a className={toogleClassName("/") ? "is-current" : "is-normal"}>
                work
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={
                  toogleClassName("/about") ? "is-current" : "is-normal"
                }
              >
                about
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
