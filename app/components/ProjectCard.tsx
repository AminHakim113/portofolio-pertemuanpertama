import Link from "next/link";

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  category: string;
  href: string;
};

export default function ProjectCard({
  number,
  title,
  description,
  category,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href} className="project-card">
      <div className="project-number">{number}</div>

      <div className="project-content">
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="project-arrow">↗</div>
    </Link>
  );
}