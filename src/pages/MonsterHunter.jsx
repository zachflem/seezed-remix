import { useEffect } from 'react';
import '../styles/tools.css';

export default function MonsterHunter() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://monster-hunter.zachflem.workers.dev/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="tools-page">
          <div className="tool-widget-container">
            <div
              data-monster-hunter
              data-flavor="zero-ultra"
              data-postcode="3500"
              >
            </div>
          </div>

    </div>
  );
}
