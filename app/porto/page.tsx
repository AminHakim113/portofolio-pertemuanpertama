import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function PortoPage() {
  return (
    <main>
      <Navbar />

      <section className="page-header">
        <p className="eyebrow">PORTOFOLIO</p>

        <h1>
          Beberapa hal yang
          <br />
          <span>pernah saya buat.</span>
        </h1>

        <p>
          Kumpulan proyek, ide, dan eksplorasi yang saya kerjakan dengan
          pendekatan kreatif dan penuh rasa ingin tahu.
        </p>
      </section>

      <section className="portfolio-list">
        <ProjectCard
          number="01"
          title="Dravest"
          category="Digital Experience"
          description="Sebuah proyek yang berfokus pada pengalaman digital yang modern, terstruktur, dan mudah digunakan."
          href="/porto"
        />

        <ProjectCard
          number="02"
          title="Historia"
          category="Creative Project"
          description="Eksplorasi ide dan cerita yang dikembangkan menjadi sebuah pengalaman visual yang menarik."
          href="/porto"
        />

        <ProjectCard
          number="03"
          title="Cerita"
          category="Personal Project"
          description="Sebuah ruang untuk mengembangkan gagasan, cerita, dan konsep dalam bentuk digital."
          href="/porto"
        />
      </section>

      <section className="portfolio-quote">
        <p>
          “Setiap proyek memiliki cerita.
          <br />
          Tugas saya adalah membantu cerita itu menemukan bentuknya.”
        </p>
      </section>

      <Footer />
    </main>
  );
}