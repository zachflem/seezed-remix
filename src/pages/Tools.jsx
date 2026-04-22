import GlitchText from '../components/GlitchText';
import ToolCard from '../components/ToolCard';

import '../styles/tools.css';

export default function Tools() {
  const toolsList = [
    {
      name: 'Coming Soon',
      description: 'Tools are currently being compiled and loaded into the system...',
      badge: 'PENDING',
      link: '#'
    }
  ];

  return (
    <div className="tools-page">
      <div className="tools-header">
        <GlitchText text="// TOOLS" as="h1" className="glitch-large" />
        <div className="tools-subtitle">
          Practical tools built to solve real problems.
        </div>
      </div>

      <div className="tools-grid">
        {toolsList.map((tool, index) => (
          <ToolCard 
            key={index}
            name={tool.name}
            description={tool.description}
            badge={tool.badge}
            link={tool.link}
          />
        ))}
      </div>
    </div>
  );
}
