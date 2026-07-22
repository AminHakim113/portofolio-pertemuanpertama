import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link href="/" className="footer-logo">
          kamin
        </Link>

        <p>Portofolio personal.</p>
      </div>

      <div className="footer-links">
        <Link href="/profil">Profil</Link>
        <Link href="/porto">Portofolio</Link>
        <Link href="/kontak">Kontak</Link>
      </div>

      <p>© 2026 Kamin. Semua hak dilindungi.</p>
    </footer>
  );
}