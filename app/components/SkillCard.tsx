type SkillCardProps = {
  number: string;
  title: string;
  description: string;
};

export default function SkillCard({
  number,
  title,
  description,
}: SkillCardProps) {
  return (
    <div className="skill-card">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}