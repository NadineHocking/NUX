
export default function SkillCard({
  name,
  description,
  icon: Icon,
}) {
  return (
    <article className="skill-card">
      {Icon && <Icon className="skill-icon" />}

      <h3>{name}</h3>

      <p className="skill-description">
        {description}
      </p>
    </article>
  );
}