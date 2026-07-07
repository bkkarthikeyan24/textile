"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar({ active = "home" }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loginState = window.localStorage.getItem("isLoggedIn");
    const savedName = window.localStorage.getItem("userName");
    setIsLoggedIn(loginState === "true");
    setUserName(savedName || "");
  }, []);

  return (
    <nav className="navbar">
      <Link href="/" className="brand">
        Online Textile Shopping
      </Link>

      <div className="nav-links">
        <Link href="/" className={`nav-link ${active === "home" ? "active" : ""}`}>
          Home
        </Link>
        <Link href="/collection" className={`nav-link ${active === "collection" ? "active" : ""}`}>
          Collection
        </Link>
        <Link href="/cart" className={`nav-link ${active === "cart" ? "active" : ""}`}>
          Cart
        </Link>
        <Link href="/orders" className={`nav-link ${active === "orders" ? "active" : ""}`}>
          Orders
        </Link>
        <Link href={isLoggedIn ? "/account" : "/login"} className="nav-button">
          {isLoggedIn ? `Account${userName ? ` - ${userName}` : ""}` : "Login"}
        </Link>
      </div>
    </nav>
  );
}
