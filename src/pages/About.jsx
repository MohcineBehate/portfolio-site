
/**
 * About page
 * - Includes legal name, image, short bio
 * - Link to downloadable PDF resume
 */
export default function About(){
  return (
    <div className="container section about">
      <img src="/images/mohcine.jpg" alt="Mohcine Behate" />
      <div>
        <h2>About Me</h2>
        <p><strong>Name:</strong> Mohcine Behate</p>
        <p>
        I’m a passionate student at Centennial College specializing in Artificial Intelligence
        and Software Engineering Technology. I enjoy creating smart applications that
        make people’s lives easier and more connected.
        </p>
        <p>
          <a href="/resume.pdf" download>Download my Resume (PDF)</a>
        </p>
      </div>
    </div>
  );
}
