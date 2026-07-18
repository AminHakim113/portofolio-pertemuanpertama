import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">PORTOFOLIO PERSONAL</p>

          <h1>
            Halo,
            <br />
            saya <span>Kamin.</span>
          </h1>

          <p className="description">
            Seorang developer dan pemikir kreatif yang membangun pengalaman
            digital yang bermakna, berguna, dan berkesan.
          </p>

          <div className="hero-buttons">
            <Link href="/porto" className="button-primary">
              Lihat karya saya <span>↗</span>
            </Link>

            <Link href="/kontak" className="button-secondary">
              Mari berbicara <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-inner">
            <img src="/profile/kamin.jpg" alt="Kamin" />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-heading">
          <p className="eyebrow">TENTANG SAYA</p>

          <h2>
            Mengenal lebih dekat
            <br />
            <span>orang di balik karya.</span>
          </h2>
        </div>

        <ProfileCard />

        <div className="about-description">
          <p>
            Saya percaya bahwa setiap karya yang baik dimulai dari sebuah ide
            yang jelas. Saya senang mengubah ide menjadi pengalaman digital
            yang sederhana, menarik, dan memiliki tujuan.
          </p>

          <Link href="/profil" className="text-link">
            Lihat profil lengkap <span>→</span>
          </Link>
        </div>
      </section>

      <section className="projects-preview">
        <div className="section-top">
          <div>
            <p className="eyebrow">KARYA PILIHAN</p>

            <h2>
              Setiap ide dimulai
              <br />
              <span>dari sebuah cerita.</span>
            </h2>
          </div>

          <Link href="/porto" className="text-link">
            Lihat semua karya <span>→</span>
          </Link>
        </div>

        <div className="project-grid">
          <ProjectCard
            number="01"
            title="Dravest"
            category="Digital Experience"
            description="Sebuah proyek yang menggabungkan ide, desain, dan pengalaman digital."
            href="/porto"
          />

          <ProjectCard
            number="02"
            title="Historia"
            category="Creative Project"
            description="Eksplorasi kreatif yang dibangun melalui cerita dan konsep yang kuat."
            href="/porto"
          />

          <ProjectCard
            number="03"
            title="Cerita"
            category="Personal Project"
            description="Ruang untuk menuangkan ide dan cerita ke dalam bentuk digital."
            href="/porto"
          />
        </div>
      </section>

      <section className="home-contact">
        <p className="eyebrow">PUNYA IDE?</p>

        <h2>
          Mari buat sesuatu
          <br />
          <span>yang berarti bersama.</span>
        </h2>

        <Link href="/kontak" className="button-primary">
          Hubungi saya <span>↗</span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}