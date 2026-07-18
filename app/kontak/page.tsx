import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function KontakPage() {
  return (
    <main>
      <Navbar />

      <section className="contact-page">
        <div className="contact-heading">
          <p className="eyebrow">KONTAK</p>

          <h1>
            Mari buat sesuatu
            <br />
            <span>yang menarik.</span>
          </h1>

          <p>
            Punya ide, proyek, atau sekadar ingin berbicara? Saya selalu
            terbuka untuk mendengar cerita baru.
          </p>
        </div>

        <div className="contact-list">
          <a href="mailto:kaminpengensupra@gmail.com" className="contact-item">
            <div>
              <span>Email</span>
              <h3>kaminpengensupra@gmail.com</h3>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          <a href="#" className="contact-item">
            <div>
              <span>Instagram</span>
              <h3>@kamin</h3>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          <a href="#" className="contact-item">
            <div>
              <span>LinkedIn</span>
              <h3>Kamin</h3>
            </div>

            <span className="contact-arrow">↗</span>
          </a>
        </div>
      </section>

      <section className="contact-bottom">
        <p>Atau kembali menjelajahi karya saya.</p>

        <Link href="/porto" className="text-link">
          Lihat portofolio <span>→</span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}