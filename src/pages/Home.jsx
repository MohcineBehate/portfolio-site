
/**
 * Home page
 * - Welcome message + mission statement
 * - CTA to About page
 * - Shows a small alert if a contact form was submitted (reads from localStorage)
 */
import { useEffect, useState } from 'react';

export default function Home(){
  const [alert, setAlert] = useState(null);

  useEffect(()=>{
    // read and clear contact submission data
    const data = localStorage.getItem('contactSubmission');
    if(data){
      const parsed = JSON.parse(data);
      setAlert(parsed);
      // Clear after showing once
      localStorage.removeItem('contactSubmission');
    }
  }, []);

  return (
    <div className="container hero">
      {alert && (
        <div className="alert">
          Thank you, <strong>{alert.fname} {alert.lname}</strong>! Your message was received.
        </div>
      )}
      <span className="badge">React • Python • AI Enthusiast</span>
      <h1>Welcome to my personal portfolio!</h1>
      <p>
      I’m a developer who loves blending creativity and logic to build innovative
      AI-driven and web-based solutions.
      </p>
      <Link className="cta" to="/about">Learn more about me</Link>
    </div>
  );
}
