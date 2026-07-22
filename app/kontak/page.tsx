import Link from "next/link";

export default function KontakPage() {
  return (
    <main className="page-container contact-page">
      <section className="page-header">
        <p className="eyebrow">KONTAK</p>

        <h1>
          Mari
          <br />
          <span>terhubung.</span>
        </h1>

        <p>
          Jika ingin berdiskusi, bekerja sama, atau sekadar menyapa, jangan
          ragu untuk menghubungi saya.
        </p>
      </section>

      <section className="contact-list">
        <a
          href="mailto:emailkamu@example.com"
          className="contact-item"
        >
          <span>Email</span>
          <span>→</span>
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span>GitHub</span>
          <span>→</span>
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span>LinkedIn</span>
          <span>→</span>
        </a>
      </section>

      <Link href="/" className="text-link">
        ← Kembali ke beranda
      </Link>
    </main>
  );
}