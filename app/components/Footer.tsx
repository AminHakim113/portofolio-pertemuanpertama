import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>kamin</h3>
        <p>Portofolio personal dan kumpulan karya.</p>
      </div>

      <div className="footer-links">
        <Link href="/">Beranda</Link>
        <Link href="/profil">Profil</Link>
        <Link href="/porto">Porto</Link>
        <Link href="/kontak">Kontak</Link>
      </div>

      <p className="copyright">© 2026 Kamin. Seluruh hak dilindungi.</p>
    </footer>
  );
}