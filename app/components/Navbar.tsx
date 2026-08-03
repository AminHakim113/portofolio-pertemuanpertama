import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link href="/" className="logo">
        kamin
      </Link>

      <nav className="nav-links">
        <Link href="/">Beranda</Link>
        <Link href="/profil">Profil</Link>
        <Link href="/porto">Portofolio</Link>
        <Link href="/api-post">Artikel</Link>
        <Link href="/kontak">Kontak</Link>
      </nav>
    </header>
  );
}