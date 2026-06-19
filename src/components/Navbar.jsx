import { useState } from "react";
import "../styles/navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__brand-mark">YH</span>
          <span className="navbar__brand-text">YH.dev</span>
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <ul
          id="primary-navigation"
          className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
