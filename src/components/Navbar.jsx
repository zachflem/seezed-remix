import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
          seezed.net
        </NavLink>
      </div>

      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? '[X]' : '[=]'}
      </button>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive && location.pathname === '/' ? 'active' : ''}>
          Home
        </NavLink>
        {/* About and Hobbies jump links can just use standard a tags if they are hashes, 
            or we can just link to /#about if we want to build a smooth scrolling hook.
            For simplicity: */}
        <a href="/#about" onClick={() => setIsOpen(false)}>About</a>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
          Projects
        </NavLink>
        <NavLink to="/tools" className={({ isActive }) => isActive ? 'active' : ''}>
          Tools
        </NavLink>
      </div>
    </nav>
  );
}
