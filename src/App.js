
/**
 * App - Top-level router + layout
 * Internal documentation:
 * - Displays Navbar on all pages
 * - Uses React Router (v6) for client-side routes
 * - After a Contact form submit, user is redirected to Home; Home reads `localStorage.contactSubmission`
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}
