export default function SkillCard({ name, category, icon: Icon }) {
  return (
    <article className="skill-card">
      {Icon && <Icon className="skill-icon" />}

      <h3>{name}</h3>
    </article>
  );
}