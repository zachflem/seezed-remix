import '../styles/cards.css';

export default function TerminalCard({ children, className = '' }) {
  return (
    <div className={`terminal-card ${className}`}>
      {children}
    </div>
  );
}
