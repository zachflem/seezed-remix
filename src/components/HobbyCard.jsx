import TerminalCard from './TerminalCard';

export default function HobbyCard({ icon, title, description }) {
  return (
    <TerminalCard className="hobby-card">
      <div className="hobby-card-header">
        <span className="hobby-icon" role="img" aria-label={title}>{icon}</span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </TerminalCard>
  );
}
