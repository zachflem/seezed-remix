import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import GlitchText from '../components/GlitchText';
import HobbyCard from '../components/HobbyCard';
import WorkTimeline from '../components/WorkTimeline';
import TerminalCard from '../components/TerminalCard';

import '../styles/hero.css';
import '../styles/cards.css';

export default function Home() {
  const location = useLocation();

  // Handle smooth scrolling for hash links natively
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, location.hash]);

  const workHistory = [
    {
      date: '2025 - Present',
      title: 'Lando Hire — Crane Operator',
      description: 'Returned to general path in 2025 after ~10yr break.'
    },
    {
      date: '~2008 - 2015',
      title: 'Various — Dogman → Rigger → C0 Open Class Operator',
      description: 'General crane and rigging experience culminating in 100t+ operations before taking a break for tech.'
    },
    {
      date: 'Recent',
      title: 'Fieldin — Australian Service Manager',
      description: 'Managing automated telematics hardware installs and service support.'
    },
    {
      date: 'Prior',
      title: 'AssetAware IOT (AARadio Services) — IoT Specialist',
      description: 'Custom data acquisition, IoT deployment, signal analysis, and workflow automation.'
    },
    {
      date: 'Early Career',
      title: 'Telecommunications — Full Network Lifecycle',
      description: 'Various roles covering DC power, transmission, switching, microwave links, cellular networking, and tower builds.'
    }
  ];

  return (
    <div className="home-container">
      {/* 1. Hero Section */}
      <section id="home" className="hero">
        <GlitchText text="ZACH FLEMING" />
        <div className="hero-subtitle">
          Crane Operator. IoT Specialist. Tinkerer.<span className="cursor-blink">_</span>
        </div>
        <div className="hero-ctas">
          <a href="#about"><button>[ ABOUT ME ]</button></a>
          <Link to="/tools"><button>[ MY TOOLS ]</button></Link>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="section">
        <h2 className="section-title">// ABOUT</h2>
        <div style={{ maxWidth: '800px', marginBottom: '2rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            I am someone who builds things, gets stuff done, and solves practical problems—both in the field and in code. 
            My career spans high-risk heavy lifting as an open-class crane operator to highly technical 
            deployments as an IoT specialist in telecommunications and data automation.
          </p>
          <div style={{ padding: '1rem', borderLeft: '2px dashed var(--color-amber)', marginLeft: '1rem', marginBottom: '2rem' }}>
            <strong>[CONTACT]</strong><br/>
            Email: <a href="mailto:zach@seezed.net">zach@seezed.net</a><br/>
            Phone: <a href="tel:0424838113">0424 838 113</a><br/>
            LinkedIn: <a href="https://www.linkedin.com/in/zachfleming/" target="_blank" rel="noopener noreferrer">in/zachfleming/</a>
          </div>
          
          <h3 style={{ color: 'var(--color-amber)' }}>[CURRENT PROJECTS]</h3>
          <TerminalCard style={{ marginTop: '1rem' }}>
            <strong><a href="http://www.goexplore.net.au" target="_blank" rel="noopener noreferrer">GoExploreAU</a></strong>: Adventure Travel Blog logging our family trips off the beaten track.
          </TerminalCard>
          <TerminalCard>
            <strong><a href="http://www.sunraysiaskydivers.com.au" target="_blank" rel="noopener noreferrer">SunraysiaSkydivers</a></strong>: Helping grow the skydiving community in Sunraysia.
          </TerminalCard>
        </div>
      </section>

      {/* 3. Hobbies Section */}
      <section id="hobbies" className="section">
        <h2 className="section-title">// HOBBIES & INTERESTS</h2>
        <div className="hobby-grid">
          <HobbyCard 
            icon="📷" 
            title="Photography & Videography" 
            description="Shooting on a Canon DSLR, phone, and DJI Mini 2. I document our adventure travel content at GoExploreAU." 
          />
          <HobbyCard 
            icon="🚵" 
            title="4WD & Mountain Biking" 
            description="Taking family adventures off the beaten track across beaches and the Murray River, plus tackling new trails on the bike." 
          />
          <HobbyCard 
            icon="🪂" 
            title="Skydiving" 
            description="Completed AFF and several tandem jumps, currently looking to get back into jumping solo again. Also involved behind the scenes with SunraysiaSkydivers." 
          />
        </div>
      </section>

      {/* 4. Work History Section */}
      <section id="work" className="section" style={{ minHeight: 'auto', paddingBottom: '8rem' }}>
        <h2 className="section-title">// WORK HISTORY</h2>
        <WorkTimeline entries={workHistory} />
      </section>
    </div>
  );
}
