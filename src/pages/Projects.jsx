import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GlitchText from '../components/GlitchText';
import ProjectCard from '../components/ProjectCard';

import '../styles/projects.css';

export default function Projects() {
  const location = useLocation();

  // Handle smooth scrolling for hash links natively
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const elem = document.getElementById(id);
      if (elem) {
        // Delay slightly to ensure component has rendered and settled
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, location.hash]);

  const projectList = [
    {
      id: 'schedule-lab',
      title: 'Schedule-Lab',
      description: `Schedule-Lab started as a way to digitise the act of completing site dockets. With the usual suspects being prohibitivly expensive for smaller operators, i set out to build something that was smart enough to be useful, easy enough to use, and actually helped.  The system gathers customer enquiries, moves through quoting, job creation, docket completion and provides a neat package for invoicing. `,
      features: [
        'Manage your machines/assets - Track hours, maintenance and compliance.',
        'See who you have on the ground - Keep tabs on qualifications, certifications and get alerts when things are going to expire.',
        'Assign assets and personnel to jobs - so you know who is where, and when.',
        'Drag and Drop jobs onto the schedule for simple management of jobs',
        'Operators complete field dockets on a mobile first form - no more lost paper dockets',
        'Verify your completed dockets and export them for invoicing - no more double handling!'
      ],
      status: 'ALPHA',
      link: null,
      image: '/Schedule-Lab.png' // Optional: Add your image to /public and link here.  use 'null' for no image.
    },
    {
      id: 'court-admin',
      title: 'CourtAdmin',
      description: 'Born from the depths of endless spreadsheets and the need for a better, centralised place to manage a community basketball club, CourtAdmin was built to be a one-stop-shop for busy parents and volunteers.  \n\n Handling all the tedious elements of running a community basketball club - Expressions of Interest, Sponsors, Venue Bookings, Team Management and Feedback amongst other things - CourtAdmin is designed to make the lives of volunteers easier, and give parents and players a better experience.',
      features: [
        'Manage individual seasons for your club - with all the relevant information and data stored in one place',
        'Players (and parents) can manage their own profiles, and keep all their information up to date',
        'Handle all your sponsors in one place - with different levels of sponsorship, and the ability to manage their details',
        'Email campaign management - send out emails to your members, with different lists and templates',
        'A public Expression of Interest portal for new and returning players to register their interest in playing for the upcoming season',
        'Venue booking management - keep track of your venues, and manage your bookings for the season',
      ],
      status: 'ALPHA',
      link: 'https://courtadmin.seezed.net',
      image: '/CourtAdmin.png' // Optional: Add your image to /public and link here.  use 'null' for no image.
    },
    {
      id: 'brrw',
      title: 'BRRW.net',
      description: 'brrw (is pronounced exactly like *burrow*) — as in what a rabbit does. You dig in. You go somewhere small and specific and interesting. You explore.\n\n That\'s what the internet used to feel like.\n\n In the 90s and early 2000s, finding something good online felt like discovery. You\'d follow a link from one personal site to another, stumble into someone\'s corner of the web, and find writing that was weird and specific and entirely theirs.\n\n There was no feed, no algorithm, no follower count telling you what mattered. \n\nYou just dug around until you found something that resonated — and then you bookmarked it, and told your friends, and went back.',
      features: [
        'Give small creators a way to boost natural engagement',
        'Give readers a way to find content that matters to them',
        'Zero tracking or profiling',
        'Add content to your website that is relevnt, and matters to you and your community',
        'Static-first performance architecture'
      ],
      status: 'Early Concept Development',
      link: 'https://brrw.net',
      image: null // Optional: Add your image to /public and link here.  use 'null' for no image.
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <GlitchText text="// DETAILED PROJECTS" as="h1" className="glitch-large" />
        <div className="projects-subtitle">
          A deep dive into the things I'm building. Some are tools for work, some are tools for the soul. All of them are "Works in Progress" - and that's the point.
        </div>
      </div>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            title={project.title}
            description={project.description}
            features={project.features}
            status={project.status}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
