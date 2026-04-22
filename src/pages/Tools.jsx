import { useEffect } from 'react';
import GlitchText from '../components/GlitchText';
import TerminalCard from '../components/TerminalCard';

import '../styles/tools.css';

export default function Tools() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://monster-hunter.zachflem.workers.dev/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="tools-page">
      <div className="tools-header">
        <GlitchText text="// TOOLS" as="h1" className="glitch-large" />
        <div className="tools-subtitle">
          Practical tools built to solve real... errr... problems. (If that's what you call them!)
        </div>
      </div>

      <div className="tools-grid">

        <TerminalCard className="tool-card">
          <div className="tool-card-header">
            <h3 className="tool-card-title">Monster Hunter</h3>
            <span className="tool-badge web">[LIVE]</span>
          </div>
          <div className="tool-description">
            <p>
              Ever wanted to know where to get the best priced caffeine fix?
              Monster Hunter scrapes Monster Energy prices across Australian
              supermarkets and service stations, surfacing the best per-can deal
              near you — updated daily.
            </p>
            <p className="tool-embed-label">Embed on your site:</p>
            <pre className="tool-embed-snippet"><code>{`<!-- visitors enter their own preferences -->
<div data-monster-hunter></div>

<!-- or pre-select defaults (visitors can still change them) -->
<div
  data-monster-hunter
  data-flavor="original"
  data-postcode="3000"
></div>

<script src="https://monster-hunter.zachflem.workers.dev/embed.js"></script>`}</code></pre>
          </div>
          <div className="tool-action">
            <a href="https://monster-hunter.zachflem.workers.dev/embed.js" target="_blank" rel="noopener noreferrer">
              <button>[ VIEW SCRIPT ]</button>
            </a>
          </div>
          
          <div className="tool-widget-container">
            <div data-monster-hunter></div>
          </div>

        </TerminalCard>
        

      </div>
    </div>
  );
}
