type ProjectCardProps = {
  nomor: string;
  judul: string;
  deskripsi: string;
};

export default function ProjectCard({
  nomor,
  judul,
  deskripsi,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-top">
        <span>{nomor}</span>

        <span className="project-arrow">↗</span>
      </div>

      <div>
        <h3>{judul}</h3>

        <p>{deskripsi}</p>
      </div>
    </div>
  );
}