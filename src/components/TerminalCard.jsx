import { Link } from 'react-router-dom';
import '../styles/cards.css';

export default function TerminalCard({ children, className = '', href = null }) {
  const combinedClassName = `terminal-card ${className}`;
  const isInternal = href && href.startsWith('/');

  if (href) {
    if (isInternal) {
      return (
        <Link 
          to={href}
          className={combinedClassName}
          style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
        >
          {children}
        </Link>
      );
    }

    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={combinedClassName}
        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
}

