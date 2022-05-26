import React from 'react';

import { faArrowUpRightFromSquare, faLink } from '@fortawesome/free-solid-svg-icons';
import GSMLandingPage from '../../imgs/gsm/landing.png';
import GSMLogin from '../../imgs/gsm/login.png';
import GSMManageTournament from '../../imgs/gsm/manageTournaments.png';
import GSMRegistration from '../../imgs/gsm/registration.png';

import DailyCheckupThumbnail from '../../imgs/dc/dailyCheckupThumbnail.png';
import DailyCheckupLanding from '../../imgs/dc/landing.png';
import DailyCheckupRegistration from '../../imgs/dc/registration.png';
import DailyCheckupByYear from '../../imgs/dc/byYear.png';

import BoardGameThumbnail from '../../imgs/bg/thumbnail.png';

import GardenGnomeThumbnail from '../../imgs/gg/gardenGnomeLanding.png';

import SnapSavingsThumbnail from '../../imgs/ss/snapSavingsThumbnail.png';
import SnapSavingsFirst from '../../imgs/ss/first.png';
import SnapSavingsSecond from '../../imgs/ss/second.png';
import SnapSavingsThird from '../../imgs/ss/third.png';

import Project from './Project';

import './Projects.css';

function Projects() {
  const projectList = [{
    projectName: 'GameSetMatch',
    role: 'Project Manager, Full Stack Developer',
    img: GSMLandingPage,
    techStack: 'React, TypeScript, Springboot, Java, MySQL, Amazon AWS (RDS, ElasticBeanstalk, Amplify)',
    imgAlt: '',
    when: 'January - April 2022',
    team: '6 members',
    intro: 'A tournament scheduling web application',
    description: ['A semester long school project that started with gathering requirements and defining the techinical design. I was the Project Manager and Software Engineer.', "As a project manager, I ensured that we completed key components of our project by the deadlines and ensured that we were not building any functionality that wasn't critical to the MVP. I also helped assign tasks to teammates if they were unsure what to work on next based on their strengths and interests.", "As a developer I built the 'Manage Tournaments' and 'Registration' modules which meant creating the user experience, relevant API calls, and database queries needed for the end-to-end flow. I also reviewiwed 90% of the PRs, refactored code when necessary, managed versions and deployments."],
    slideshow: [{ img: GSMLogin, description: 'Login page' },
      { img: GSMLandingPage, description: 'Landing page' },
      { img: GSMManageTournament, description: 'Where you can manage the tournaments you have created' },
      { img: GSMRegistration, description: 'Registration page for a tournament' }],
  },
  {
    projectName: 'Bored? Games!',
    role: 'Developer',
    img: BoardGameThumbnail,
    imgAlt: '',
    when: 'March 2022 - 3 weeks',
    techStack: 'D3.js, JavaScript, HTML, CSS',
    team: '3 members',
    intro: 'Fun way to explore new games using information visualisation',
    description: ['For this school project I was a developer and worked on creating the Force Directed Graph found on the left side of the webpage. This involved formatting the data to match the expected input for the library being used. I then had to tune the graph so that the nodes were nicely visible and applied styling using CSS to match the theme of our project. The biggest challenge was creating the hexagons for the theme and ensuring that the nodes in the graph stayed within the border. Outside of development, I participated in code reviews and design discussions.'],
    slideshow: [{ img: BoardGameThumbnail, description: 'Landing page' }],
    links: [{
      icon: faArrowUpRightFromSquare,
      linkText: 'Demo',
      link: 'https://www.students.cs.ubc.ca/~cs-436v/22Jan/fame/projects/project_g22/index.html',
    }],
  },
  {
    projectName: 'Daily CheckUp',
    role: 'Full Stack Developer',
    img: DailyCheckupThumbnail,
    imgAlt: '',
    when: 'December 2021 - March 2022',
    techStack: 'React, MongoDB (Realm and Atlas)',
    team: '3 members',
    intro: 'A simple text-based web application to help keep track of positive events that have occured.',
    description: ['This was a side-project. As the most experienced developer on the team, I showed the team how to use JIRA and Miro to plan out what we wanted our project to become and look like. I explored different stack options before finally deciding to use the Mongo Realm SDK to directly connect the React frontend to the Mongo Backend. I taught the team how you to read through the React Material UI API and how to implement the premade components in the application. I developed the registration process, and saving and retreiving posts end-to-end flow. I also implemented the drop down which shows the posts in different views.'],
    slideshow: [
      { img: DailyCheckupThumbnail, description: 'Login page' },
      { img: DailyCheckupRegistration, description: 'New User Registration' },
      { img: DailyCheckupLanding, description: 'Landing page which displays the posts you have saved.' },
      { img: DailyCheckupByYear, description: "Posts grouped by 'year' when selected" }],

  },
  {
    projectName: 'Garden Gnome',
    role: 'Full Stack Developer',
    img: GardenGnomeThumbnail,
    imgAlt: '',
    techStack: 'React, JavaScript',
    when: 'September 2020 - weekend',
    team: 'Individual',
    intro: 'Application to help organize your garden',
    description: ["The goal of this application was to help plan and organize your garden based on your interests. I learned about React and how to use the Trefle API, which provides plant information. I manged to plan a few of the pages within the app and connect to the API, but further work needs to be done to allow for session management and storing user's information."],
    videoID: 'gO7dsl6UcGQ',
    links: [{
      icon: faLink,
      linkText: 'Bon Hackétit hackathon submission',
      link: 'https://devpost.com/software/garden-gnome',
    }],
  },
  {
    projectName: 'Snap Savings!',
    role: 'Full Stack Developer',
    img: SnapSavingsThumbnail,
    imgAlt: '',
    techStack: 'Kivvy, Python',
    when: 'March 2020 - weekend',
    team: '4 members',
    intro: 'Helping young women learn about the importance of money management',
    description: ["This project was created at my first hackathon. I learned the basics of the Kivvy framework in order to create a simple 'Choose your own adventure' game. I participated in design discussions to make sure the scope of the project was not too large for the time and experience that we had. I worked on figuring out how to get the user input from the front end so that the backend can proceed to the next step in the game, based on the path that was selected."],
    slideshow: [
      { img: SnapSavingsThumbnail, description: 'Landing page' },
      { img: SnapSavingsFirst, description: 'First step where user decides what their goal is' },
      { img: SnapSavingsThird, description: 'Option for the user to choose what they want to do with their money' },
      { img: SnapSavingsSecond, description: 'Option to choose how they want to save with their money' }],
    links: [{
      icon: faLink,
      linkText: 'cmd-f 2020 hackathon submission',
      link: 'https://devpost.com/software/snap-savings',
    }],
  }];
  return (
    <div className="projects">
      <span className="anchor" id="projects" />
      <h1>projects</h1>
      <div className="projectGrid">
        <div className="row">
          {projectList.map((p) => (
            <div className="column" key={p.projectName.replaceAll(' ', '-')}>
              <Project project={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
