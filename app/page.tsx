import Link from "next/link";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">PORTOFOLIO PERSONAL</p>

          <h1>
            Halo,
            <br />
            Saya Kamin.
          </h1>

          <p className="description">
            Seorang pengembang dan pemikir kreatif yang membangun pengalaman
            digital yang bermakna, berguna, dan berkesan.
          </p>

          <div className="hero-buttons">
            <Link href="/porto" className="button primary">
              Lihat Karya
            </Link>

            <Link href="/kontak" className="button secondary">
              Mari Terhubung
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img src="/profile/kamin.jpg" alt="Foto profil Kamin" />
        </div>
      </section>

      <section className="about-section">
        <div className="about-title">
          <p className="eyebrow">TENTANG SAYA</p>

          <h2>
            Kenali lebih dekat
            <br />
            <span>orang di balik karya.</span>
          </h2>
        </div>

        <div className="about-description">
          <p>
            Saya memiliki ketertarikan terhadap teknologi, desain, dan
            pengembangan digital. Saya senang menciptakan sesuatu yang
            bermanfaat, menarik, dan mudah digunakan.
          </p>

          <Link href="/profil" className="text-link">
            Lihat profil lengkap →
          </Link>
        </div>
      </section>

      <section className="projects-preview">
        <div className="section-heading">
          

          <h2>
            Setiap ide
            <br />
            <span>memiliki cerita.</span>
          </h2>
        </div>
      </section>
    </main>
  );
}