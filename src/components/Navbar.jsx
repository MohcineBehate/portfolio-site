
/**
 * Navbar component
 * - Shows custom logo + brand
 * - Navigation links to 5 required pages
 */
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(){
  const { pathname } = useLocation();
  const isActive = (to) => pathname === to ? {opacity:1, fontWeight:700} : {opacity:.9};
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.svg" alt="MB Logo" />
        <span className="brand">Mohcine Behate</span>
      </div>
      <ul className="nav-links">
        <li><Link style={isActive('/')} to="/">Home</Link></li>
        <li><Link style={isActive('/about')} to="/about">About</Link></li>
        <li><Link style={isActive('/projects')} to="/projects">Projects</Link></li>
        <li><Link style={isActive('/services')} to="/services">Services</Link></li>
        <li><Link style={isActive('/contact')} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
