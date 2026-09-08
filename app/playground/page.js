export default function Playground() {
  const experiments = [
    {
      number: "01",
      title: "Component Library",
      description: "Reusable React UI components.",
    },
    {
      number: "02",
      title: "Motion",
      description: "Interaction and animation experiments.",
    },
    {
      number: "03",
      title: "Forms",
      description: "Accessible form and validation patterns.",
    },
    {
      number: "04",
      title: "Dashboards",
      description: "Data-heavy interface experiments.",
    },
  ];

  return (
    <section className="section page-header">

      <div className="container">

        <p className="eyebrow">
          Experiments
        </p>

        <h1>Playground</h1>

        <p className="page-intro">
          Small experiments exploring interface design,
          frontend development and interaction.
        </p>

        <div className="playground-grid">

          {experiments.map((experiment) => (
            <div
              className="experiment"
              key={experiment.number}
            >

              <span>{experiment.number}</span>

              <h3>{experiment.title}</h3>

              <p>{experiment.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}