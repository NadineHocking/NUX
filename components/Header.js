"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiBriefcase,
  FiCode,
  FiBookOpen,
  FiCoffee,
} from "react-icons/fi";

import ThemeToggle from "./ThemeToggle";

const navItems = [
  {
    label: "Work",
    href: "/work",
    icon: FiBriefcase,
  },
//   {
//     label: "Playground",
//     href: "/playground",
//     icon: FiCode,
//   },
  {
    label: "About",
    href: "/about",
    icon: FiBookOpen,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: FiCoffee,
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setMenuOpen(false);
  }

  function isActive(href) {
    if (href === "/work") {
      return pathname === "/work" || pathname.startsWith("/work/");
    }

    return pathname === href;
  }

  return (
    <header className="site-header">

      <div className="container header-inner">

        <Link href="/" className="logo" onClick={closeMenu}>
          n<span>.</span>ux
        </Link>

        {/* Desktop navigation */}

        <nav
          className="desktop-nav"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "active" : ""}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="nav-icon" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Header actions */}

        <div className="header-actions">

          <ThemeToggle />

          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>

      {/* Mobile navigation */}

      <nav
        className={`mobile-nav ${menuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "active" : ""}
              onClick={closeMenu}
              aria-current={active ? "page" : undefined}
            >
              <Icon className="nav-icon" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

    </header>
  );
}