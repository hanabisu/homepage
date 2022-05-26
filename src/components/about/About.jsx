/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from '../general/link/Link';

import './about.css';

function About() {
  const links = [{
    icon: faLinkedin,
    linkText: 'LinkedIn',
    link: 'www.linkedin.com/in/nicole-gaboury',
  }, {
    icon: faGithub,
    linkText: 'GitHub',
    link: 'https://github.com/hanabisu',
  }];
  return (
    <div className="about-section">
      <span className="anchor" id="about" />
      <h1>about me</h1>
      <div className="about-content">
        <p>Since high school, I&apos;ve had a passion for software engineering. I really enjoyed the challenges that come with developing an application and the feeling you get when you fix a bug or complete a project.</p>
        <p>After completing my first undergraduate degree in French (I&apos;m also really interested in language teaching and learning), I received the opportunity to work as a Quality Assurance Engineer. Learning how to automate testing for a banking application and learning about the software development life cycle rekindled my passion for development. After spending 3 years in this role, I decided I wanted to return to school to learn the principles and foundations of Computer Science so that I could pursue a career in Software Engineering.</p>
        <p>Now, I&apos;m a proud UBC Computer Science graduate, looking for a software engineering position.</p>
        <h3>Connect with me!</h3>
        {links.map((l) => <Link icon={l.icon} linkText={l.linkText} link={l.link} />)}
      </div>
    </div>
  );
}

export default About;
