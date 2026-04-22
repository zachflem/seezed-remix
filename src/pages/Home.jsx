import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import GlitchText from '../components/GlitchText';
import HobbyCard from '../components/HobbyCard';
import WorkTimeline from '../components/WorkTimeline';
import TerminalCard from '../components/TerminalCard';

import '../styles/hero.css';
import '../styles/cards.css';

export default function Home() {
  const location = useLocation();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

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

  // Handle scroll indicator visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show only if not near the bottom
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setShowScrollIndicator(!isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workHistory = [
    {
      date: 'Present',
      title: 'Lando Hire — Crane Operator',
      description: 'Returned to the operator seat in 2025 after ~10yr break. Currently living the FiFo life behind the controls of a 130t All Terrain on a large infrastructre project in regional NSW.'
    },
    {
      date: 'Recent',
      title: 'AssetAware IOT & AARadio Services — IoT & Telecommunications Specialist',
      description: 'This was an interesting time of my life.  I got to play on some of the largest telco networks in Australia, while working with some very cool people.  I also got to add my 2c into the developemnt of a telematics tracking platform, and shape some of the ideas behind it.  '
    },
    {
      date: 'Previous',
      title: 'Fieldin — Australian Service Manager',
      description: 'This was an interesting one, and something that really helped open my eyes to how technology really plays a part in modern farming.  Seconds count. Meters matter.  And the right information at the right time can make or break a season.'
    },
    {
      date: 'In The Past',
      title: 'Various — Dogman → Rigger → C0 Open Class Operator',
      description: 'I spent some time between telco roles, in the crane yard.  General Hire. Started as a rigger, and found my way into the operators seat.  Learned a lot about lifting, and a lot got to see some cool industries that most people never do.'
    },
    {
      date: 'Way back when',
      title: 'Telecommunications — Full Network Lifecycle',
      description: 'I got to work with old school guys. Learn old school ways, and do some cool stuff.  Mobile phone towers, microwave links, DC power, switching, and all the rest.  It was a good time.'
    },
    {
      date: 'In The Beginning',
      title: 'All Kinds of things!',
      description: 'From car stereo installer in the days of Fast and the Furious, to pizza delivery guy and general labourer. I even did a stint as your local PC repair kid/man.'
    }
  ];

  return (
    <div className="home-container">
      {/* 1. Hero Section */}
      <section id="home" className="hero">
        <GlitchText text="Works in progress. All of them." className="glitch-large" />
        <div className="hero-subtitle" style={{ maxWidth: '800px', lineHeight: '1.6' }}>
          This site is what happens when a chaos engineer has too many hobbies and just enough time to half-finish them. The crane operating pays the bills. The nerd shit keeps the lights on in my head. Everything else is a feature, not a bug.<span className="cursor-blink">_</span>
        </div>
        <div className="hero-ctas">
          <a href="#about"><button>[ ABOUT ME ]</button></a>
          <a href="#projects"><button>[ PROJECTS ]</button></a>
          <Link to="/tools"><button>[ MY TOOLS ]</button></Link>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="section-panel">
        <h2 className="section-title">// ABOUT</h2>
        <div className="about-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', maxWidth: '1000px', marginBottom: '2rem', alignItems: 'flex-start' }}>
          <div className="about-image" style={{ flex: '1 1 300px', maxWidth: '350px' }}>
            <img
              src="/profile.jpeg"
              alt="Slightly Enlightened Agent of Organised Chaos"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '4px',
                border: '1px solid var(--color-bg-light)',
                boxShadow: '4px 4px 0px rgba(255, 176, 0, 0.3)'
              }}
            />
          </div>

          <div className="about-text" style={{ flex: '2 1 400px' }}>
            <p style={{ marginBottom: '1.0rem' }}>
              For years, if you asked my wife what I do for a living, she'd say "I don't know, something with mobile phone towers." That's not a great sign.
            </p>
            <p style={{ marginBottom: '1.0rem' }}>
              The honest answer is: <em>it depends who's asking.</em>
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              For the people on site, I'm a crane operator — open class, high-risk lifts, the kind of job where you don't get to have a bad day.
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              For the people online, I'm the guy accumulating hobbies (at a rate that slightly concerns his family)— mostly involving computers, automation, and making things do things they weren't necessarily supposed to do.
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              For my family, I'm mostly just Dad. Which is the one I take most seriously.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              This site is my attempt to put all of that somewhere that isn't a group chat.
            </p>
            <div style={{ marginBottom: '1.5rem' }}>
              <GlitchText text="Welcome to the chaos." as="p" className="glitch-inline" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Projects Section */}
      <section id="projects" className="section-panel">
        <h2 className="section-title">// PROJECT SPOTLIGHT</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px' }}>
          <TerminalCard href="/projects">
            <strong>Schedule-Lab</strong>: Asset and Personnel scheduling for the smaller operator.  Get jobs done, dockets signed, and invoices out.
          </TerminalCard>
          <TerminalCard href="http://www.brrw.net">
            <strong>BRRW.net</strong>: It's not about going viral. It's about finding your village — and letting your village find you. Small sites. Real voices. The web the way it was supposed to feel.
          </TerminalCard>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Link to="/projects"><button>[ VIEW ALL PROJECTS ]</button></Link>
        </div>
      </section>

      {/* 4. Hobbies Section */}
      <section id="hobbies" className="section-panel">
        <h2 className="section-title">// HOBBIES & INTERESTS</h2>
        <div className="hobby-grid">
          <HobbyCard
            icon="💻"
            title="Coding & AI"
            description="I've always been an ideas guy and while I've toyed with code projects over the years, i've never had the patience to see things through to the end.  With some of the new AI tools though, I'm able to iterate quickly, and get to the goal before I get too bored with it."
          />
          <HobbyCard
            icon="🏹"
            title="Archery"
            description="I've been shooting field archery on-and-off since I was about 10.  I don't enjoy when it gets super competitive, i'm a simpler kind of shooter.  Fingers. Barebow.  It's about a walk in the scrub and something different to focus on for a few hours.  I need to shoot more!."
          />
          <HobbyCard
            icon="🚵"
            title="4WD & Mountain Biking"
            description="We've never let a bit of mud, or a weird looking trail stop us fromt getting to the cool spots.  4 wheels or 2, we're there. We've done tents, soft and hard floor camper trailers and now we're hitting the road in a caravan.  Needless to say, we don't mind stretching our legs and seeing a bit."
          />
          <HobbyCard
            icon="🪂"
            title="Skydiving"
            description="it's been a long time, but I knocked out some tandems, completed AFF and several jumps. While I feel this was a fundamental part of my growing up, sadly I haven't been able to get back into it as much as I'd like."
          />
          <HobbyCard
            icon="📷"
            title="Photography & Videography"
            description="I tried my hand at a bit of a travel blog.  Shooting on my phone, a Canon DSLR and a DJI Mini 2 drone.  I'm no National Geographic photographer, and realised I enjoy actually being there, not worrying too much about getting 'the shot'. I did get some cool photos and drone footage though!"
          />
        </div>
      </section>

      {/* 5. Work History Section */}
      <section id="work" className="section-panel">
        <h2 className="section-title">// WHAT PAYS THE BILLS</h2>
          <h3 className="section-title">| The Internet of Things</h3>
          <div className="about-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', maxWidth: '1000px', marginBottom: '2rem', alignItems: 'flex-start' }}>
            <div className="about-image" style={{ flex: '1 1 300px', maxWidth: '350px' }}>
              <img
                src="/iot.jpeg"
                alt="iot ball of connected stuff"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '4px',
                  border: '1px solid var(--color-bg-light)',
                  boxShadow: '4px 4px 0px rgba(255, 176, 0, 0.3)'
                }}
              />
            </div>

            <div className="about-text" style={{ flex: '2 1 400px' }}>
              <p style={{ marginBottom: '1.0rem' }}>
                IoT is an interesting space to explore.  it's allowed me to delve into hardware, software and see all the ways they can work together to solve problems.  It's also given me a chance to work with some really cool people, and see some really cool things in action.  From smart farming solutions, to asset tracking and telematics, it's been a wild ride.
              </p>
              <p style={{ marginBottom: '1.rem' }}>
                At <a href="https://www.assetaware.com.au/" target="_blank" rel="noopener noreferrer">AssetAware IOT</a>, as part of <a href="https://www.aaradio.com.au/" target="_blank" rel="noopener noreferrer">AARadio Services</a>, where our aim was to provide custom solutions around data acquisition, analysis and automation.
              </p>
              <p style={{ marginBottom: '1.rem' }}>
                At <a href="https://www.fieldin.com/" target="_blank" rel="noopener noreferrer">Fieldin</a>, I was the Australian Service Manager.  In charge of a team of service technicians providing installation and maintenance across telematics hardware in customer fleets.
              </p>
            </div>
          </div>

          <h3 classname="section-title">| Telecommunications</h3>
          <div className="about-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', maxWidth: '1000px', marginBottom: '2rem', alignItems: 'flex-start' }}>
            <div className="about-image" style={{ flex: '1 1 300px', maxWidth: '350px' }}>
              <img
                src="/upTower.jpeg"
                alt="bearded man up a tower in the wind"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '4px',
                  border: '1px solid var(--color-bg-light)',
                  boxShadow: '4px 4px 0px rgba(255, 176, 0, 0.3)'
                }}
              />
            </div>

            <div className="about-text" style={{ flex: '2 1 400px' }}>
              <p style={{ marginBottom: '1.0rem' }}>
                I got into telecommunications in the early 2000s, and spent a good chunk of my career working on mobile phone towers, microwave links, and all the other fun stuff that goes into keeping us connected.  I got to work with some of the old guard, who taught me a lot about how we communicate, and I got to see some of those old technologies get swallowed up by a new era.  I've climbed towers in the dark, run around the country supporting mobile sites with backup power, and that's on;y just scratching the surface.
              </p>
            </div>
          </div>
          
          <h3 classname="section-title">| Cranes & Rigging</h3>
          <div className="about-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', maxWidth: '1000px', marginBottom: '2rem', alignItems: 'flex-start' }}>
            <div className="about-image" style={{ flex: '1 1 300px', maxWidth: '350px' }}>
              <img
                src="/cranes.jpeg"
                alt="big crane lift heavy thing"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '4px',
                  border: '1px solid var(--color-bg-light)',
                  boxShadow: '4px 4px 0px rgba(255, 176, 0, 0.3)'
                }}
              />
            </div>

            <div className="about-text" style={{ flex: '2 1 400px' }}>
              <p style={{ marginBottom: '1.0rem' }}>
                Between major telco projects I took some time to get into the general crane hire industry.  Starting as a Dogman and Rigger, I progressed to a point where I was operating cranes in the Open Class (C0) of machines (Over 100t)  My time in the crane yard only made me a better rigger, which directly translated when I eventually moved back into the Telecommunications world.
              </p>
              <p style={{ marginBottom: '1.rem' }}>
                In 2025, after nearly a decade away from a crane, I returned to the operators seat to join Lando Hire 
              </p>
            </div>
          </div>

        <h2 className="section-title">// WORK HISTORY TIMELINE</h2>
        <WorkTimeline entries={workHistory} />
      </section>

      {/* Scroll Indicator */}
      <div className={`scroll-indicator ${!showScrollIndicator ? 'hidden' : ''}`}>
        <GlitchText text="SCROLL DOWN" as="span" className="glitch-small" />
        <div className="scroll-arrows">
          <span>∨</span>
          <span>∨</span>
        </div>
      </div>
    </div>
  );
}
