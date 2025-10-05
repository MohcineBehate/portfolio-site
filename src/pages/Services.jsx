
/**
 * Services page
 * - Short list of services (with simple visual cards)
 */
const services = [
  { title: 'Frontend Development', desc: 'Responsive web apps using React and Tailwind CSS.' },
  { title: 'Backend Integration', desc: 'Building RESTful APIs with Node.js and Express.' },
  { title: 'Data Analytics', desc: 'Python, Pandas, and AI-powered insights.' }
];

export default function Services(){
  return (
    <div className="container section">
      <h2>Services</h2>
      <div className="grid">
        {services.map((s, i)=> (
          <article className="card" key={i}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
