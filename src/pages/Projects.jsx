
/**
 * Projects page
 * - At least 3 highlighted projects (image + role + outcome)
 * - Uses a small local array for demo content
 */
const projects = [
  {
    title: 'Data Dashboard',
    image: '/images/dashboard.png',
    role: 'Frontend Developer',
    outcome: 'Built an interactive dashboard using React and Chart.js for data visualization.'
  },
  {
    title: 'AI Chatbot',
    image: '/images/chatbot.svg',
    role: 'NLP & UX',
    outcome: 'Conversational assistant with retrieval and task workflows for students.'
  },
  {
    title: 'React Portfolio',
    image: '/images/portfolio.svg',
    role: 'Frontend Dev',
    outcome: 'Accessible, responsive personal site with CI/CD deployment.'
  }
];

export default function Projects(){
  return (
    <div className="container section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p, i)=> (
          <article className="card" key={i}>
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p><strong>My role:</strong> {p.role}</p>
            <p><strong>Outcome:</strong> {p.outcome}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
