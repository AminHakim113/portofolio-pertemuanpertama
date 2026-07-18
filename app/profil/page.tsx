import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillCard from "../components/SkillCard";

export default function ProfilPage() {
  return (
    <main>
      <Navbar />

      <section className="page-header">
        <p className="eyebrow">PROFIL</p>

        <h1>
          Mengenal lebih dekat
          <br />
          <span>Kamin.</span>
        </h1>

        <p>
          Seorang individu yang senang mengeksplorasi teknologi, kreativitas,
          dan berbagai cara untuk mengubah ide menjadi sesuatu yang nyata.
        </p>
      </section>

      <section className="profile-detail">
        <div className="profile-large-image">
          <Image
            src="/profile/kamin.jpg"
            alt="Foto profil Kamin"
            fill
            className="profile-image"
          />
        </div>

        <div className="profile-text">
          <p className="eyebrow">TENTANG SAYA</p>

          <h2>
            Bukan hanya tentang
            <br />
            <span>apa yang dibuat.</span>
          </h2>

          <p>
            Saya percaya bahwa sebuah karya yang baik bukan hanya terlihat
            menarik, tetapi juga memiliki tujuan. Karena itu, saya selalu
            berusaha memahami ide, kebutuhan, dan cerita di balik setiap
            proyek.
          </p>

          <p>
            Dengan rasa ingin tahu dan semangat untuk terus belajar, saya
            senang mengeksplorasi dunia digital serta menciptakan sesuatu yang
            sederhana namun memiliki makna.
          </p>

          <Link href="/kontak" className="text-link">
            Mari terhubung <span>→</span>
          </Link>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-heading">
          <p className="eyebrow">YANG SAYA LAKUKAN</p>

          <h2>
            Ide menjadi
            <br />
            <span>sebuah pengalaman.</span>
          </h2>
        </div>

        <div className="skills-grid">
          <SkillCard
            number="01"
            title="Pengembangan"
            description="Membangun pengalaman digital dengan pendekatan yang terstruktur dan fungsional."
          />

          <SkillCard
            number="02"
            title="Kreativitas"
            description="Mengeksplorasi ide dan konsep untuk menghasilkan karya yang berbeda."
          />

          <SkillCard
            number="03"
            title="Pemecahan Masalah"
            description="Mencari solusi yang sederhana, efektif, dan sesuai dengan kebutuhan."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}