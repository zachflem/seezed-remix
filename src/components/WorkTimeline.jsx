export default function WorkTimeline({ entries }) {
  return (
    <div className="timeline">
      {entries.map((entry, index) => (
        <div key={index} className="timeline-item">
          <span className="timeline-date">{entry.date}</span>
          <h3 className="timeline-title">{entry.title}</h3>
          <p>{entry.description}</p>
        </div>
      ))}
    </div>
  );
}
