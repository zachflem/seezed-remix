import '../styles/projects.css';

export default function ProjectCard({ id, title, description, features, status, link, image }) {
  const statusClass = `status-badge ${status.toLowerCase()}`;

  return (
    <section id={id} className="project-card terminal-card">
      <div className="project-header">
        <div className="project-title-group">
          <h3 className="project-title">{title}</h3>
          <span className={statusClass}>{status}</span>
        </div>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
          >
            [ VISIT SITE ]
          </a>
        )}
      </div>

      <div className="project-body">
        {image && (
          <img 
            src={image} 
            alt={`${title} Preview`} 
            className="project-card-image"
          />
        )}
        
        <div className="project-description">
          {description.split('\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {features && !!features.length && (
          <div className="project-features">
            <h4>// KEY FEATURES</h4>
            <ul>
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
