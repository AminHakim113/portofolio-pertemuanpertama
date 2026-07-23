"use client";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Dravest",
    description:
      "Sebuah proyek digital yang berfokus pada pengalaman pengguna dan solusi teknologi modern.",
    category: "Teknologi",
  },
  {
    id: 2,
    title: "Historia",
    description:
      "Platform kreatif yang mengangkat cerita, sejarah, dan informasi melalui tampilan digital yang menarik.",
    category: "Kreatif",
  },
  {
    id: 3,
    title: "Cerita",
    description:
      "Ruang digital untuk menyampaikan ide, pengalaman, dan cerita dengan cara yang sederhana dan bermakna.",
    category: "Konten",
  },
];

export default function PortoPage() {
  const [likes, setLikes] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
  });

  const [userLiked, setUserLiked] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
  });

  function tanganiKlikLike(id: number) {
    if (userLiked[id] === false) {
      setLikes((likesSebelumnya) => ({
        ...likesSebelumnya,
        [id]: likesSebelumnya[id] + 1,
      }));

      setUserLiked((statusSebelumnya) => ({
        ...statusSebelumnya,
        [id]: true,
      }));
    } else {
      setLikes((likesSebelumnya) => ({
        ...likesSebelumnya,
        [id]: likesSebelumnya[id] - 1,
      }));

      setUserLiked((statusSebelumnya) => ({
        ...statusSebelumnya,
        [id]: false,
      }));
    }
  }

  const jumlahLikeTertinggi = Math.max(...Object.values(likes));

  return (
    <main className="porto-page">
      <section className="porto-hero">
        <p className="eyebrow">PORTOFOLIO</p>

        <h1>
          Karya yang
          <br />
          <span>menceritakan proses.</span>
        </h1>

        <p className="porto-intro">
          Beberapa proyek yang saya kembangkan sebagai bagian dari perjalanan
          saya dalam teknologi, desain, dan kreativitas digital.
        </p>
      </section>

      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project) => {
            const isMostPopular =
              likes[project.id] === jumlahLikeTertinggi &&
              jumlahLikeTertinggi >= 1;

            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                category={project.category}
                likes={likes[project.id]}
                userLiked={userLiked[project.id]}
                isMostPopular={isMostPopular}
                onLike={() => tanganiKlikLike(project.id)}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}