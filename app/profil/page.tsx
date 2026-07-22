import Link from "next/link";
import ProfileCard from "../components/ProfileCard";
import SkillCard from "../components/SkillCard";

export default function ProfilPage() {
  return (
    <main className="page-container">
      <section className="page-header">
        <p className="eyebrow">PROFIL</p>

        <h1>
          Tentang
          <br />
          <span>saya.</span>
        </h1>

        <p>
          Mengenal lebih jauh tentang minat, kemampuan, dan perjalanan saya
          dalam dunia digital.
        </p>
      </section>

      <section className="profile-layout">
        <ProfileCard judul="Kamin" />

        <div className="profile-text">
          <p>
            Saya adalah seseorang yang memiliki ketertarikan terhadap
            teknologi, desain, dan pengembangan digital.
          </p>

          <p>
            Saya percaya bahwa sebuah karya yang baik tidak hanya harus terlihat
            menarik, tetapi juga memiliki tujuan dan memberikan pengalaman yang
            baik bagi penggunanya.
          </p>

          <p>
            Melalui berbagai proyek, saya terus belajar dan mengembangkan
            kemampuan untuk menciptakan solusi digital yang kreatif dan
            bermanfaat.
          </p>
        </div>
      </section>

      <section className="skills-section">
        <p className="eyebrow">KEMAMPUAN</p>

        <div className="skills-grid">
          <SkillCard judul="Pengembangan Web" />
          <SkillCard judul="Desain Kreatif" />
          <SkillCard judul="Pemecahan Masalah" />
        </div>
      </section>

      <Link href="/kontak" className="text-link">
        Hubungi saya →
      </Link>
    </main>
  );
}