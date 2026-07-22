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
          <p className="eyebrow">PROYEK PILIHAN</p>

          <h2>
            Setiap ide
            <br />
            <span>memiliki cerita.</span>
          </h2>
        </div>

        <div className="project-grid">
          <ProjectCard
            nomor="01"
            judul="Dravest"
            deskripsi="Sebuah proyek digital dengan konsep modern yang menggabungkan kreativitas dan teknologi."
          />

          <ProjectCard
            nomor="02"
            judul="Historia"
            deskripsi="Proyek yang mengangkat cerita dan sejarah dalam bentuk pengalaman digital yang menarik."
          />

          <ProjectCard
            nomor="03"
            judul="Cerita"
            deskripsi="Ruang untuk menuangkan ide, pengalaman, dan kreativitas ke dalam sebuah karya."
          />
        </div>

        <Link href="/porto" className="text-link">
          Lihat semua proyek →
        </Link>
      </section>
    </main>
  );
}