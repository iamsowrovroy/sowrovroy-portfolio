
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <NavLink to="/" end className="navbar-logo" onClick={closeMenu}>
        Sowrov Roy<span>.</span>
      </NavLink>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/expertise" onClick={closeMenu}>Expertise</NavLink>
        <NavLink to="/experience" onClick={closeMenu}>Experience</NavLink>
        <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/research" onClick={closeMenu}>Research</NavLink>
        <NavLink to="/writing" onClick={closeMenu}>Writing</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </div>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Navbar;
