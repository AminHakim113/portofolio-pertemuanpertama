import ProjectCard from "../components/ProjectCard";

export default function PortoPage() {
  return (
    <main className="page-container">
      <section className="page-header">
        <p className="eyebrow">PORTOFOLIO</p>

        <h1>
          Karya
          <br />
          <span>yang saya buat.</span>
        </h1>

        <p>
          Beberapa proyek yang menjadi bagian dari perjalanan saya dalam
          belajar dan berkarya.
        </p>
      </section>

      <section className="portfolio-grid">
        <ProjectCard
          nomor="01"
          judul="Dravest"
          deskripsi="Proyek digital dengan konsep modern yang menggabungkan kreativitas dan teknologi."
        />

        <ProjectCard
          nomor="02"
          judul="Historia"
          deskripsi="Sebuah proyek yang berfokus pada cerita, sejarah, dan penyampaian informasi secara menarik."
        />

        <ProjectCard
          nomor="03"
          judul="Cerita"
          deskripsi="Ruang untuk menuangkan ide, pengalaman, dan kreativitas ke dalam sebuah karya."
        />
      </section>
    </main>
  );
}