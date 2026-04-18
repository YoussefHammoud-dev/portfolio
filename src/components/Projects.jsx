import "../styles/projects.css";

const projects = [
  { title: "AI Chat App", desc: "Built a React.js chat app with API integration, responsive layouts, and clear state handling." },
  { title: "E-Commerce Website", desc: "Developed a full-stack e-commerce app with product flows, backend APIs, and a structured React frontend." },
  { title: "Event Management System", desc: "Built an event platform with React Native and Spring Boot for scheduling, user actions, and data management." }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
