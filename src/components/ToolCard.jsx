import TerminalCard from './TerminalCard';

export default function ToolCard({ name, description, badge, link, badgesStatus = 'success' }) {
  // badgeStatus determines color mapping (e.g. pending = amber, web = cyan)
  const isPending = badge === 'PENDING';
  
  return (
    <TerminalCard className="tool-card">
      <div className="tool-card-header">
        <h3 style={{ margin: 0, textShadow: 'none', color: 'var(--color-green)' }}>{name}</h3>
        <span className={`tool-badge ${isPending ? 'pending' : 'web'}`}>
          [{badge}]
        </span>
      </div>
      
      <p className="tool-description">
        {description}
      </p>
      
      <div className="tool-action">
        {isPending ? (
          <button disabled> [ LAUNCH (UNAVAILABLE) ] </button>
        ) : (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button> [ LAUNCH ] </button>
          </a>
        )}
      </div>
    </TerminalCard>
  );
}
