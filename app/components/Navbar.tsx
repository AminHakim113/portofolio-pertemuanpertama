"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menu = [
    { name: "Beranda", href: "/" },
    { name: "Profil", href: "/profil" },
    { name: "Porto", href: "/porto" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        kamin
      </Link>

      <div className="nav-links">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "active" : ""}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <Link href="/kontak" className="nav-contact">
        Mari berbicara <span>↗</span>
      </Link>
    </nav>
  );
}