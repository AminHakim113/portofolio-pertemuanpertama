type SkillCardProps = {
  judul: string;
};

export default function SkillCard({ judul }: SkillCardProps) {
  return (
    <div className="skill-card">
      <h3>{judul}</h3>

      <span>→</span>
    </div>
  );
}