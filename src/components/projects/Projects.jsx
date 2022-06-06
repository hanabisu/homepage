import React from 'react';

import { faArrowUpRightFromSquare, faLink, faTrophy } from '@fortawesome/free-solid-svg-icons';
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
    id: 'gamesetmatch',
    projectName: 'GameSetMatch',
    projectType: 'School project',
    projectTypeDetails: 'Course: Software Engineering Project, University of British Columbia',
    role: 'Project Manager, Full Stack Developer',
    img: GSMLandingPage,
    techStack: 'React, TypeScript, Springboot, Java, MySQL, Amazon AWS (RDS, ElasticBeanstalk, Amplify)',
    imgAlt: '',
    when: 'January - April 2022',
    team: '6 team members',
    intro: 'A tournament scheduling web application',
    description: ['I was the Project Manager and Software Engineer on this project that started with creating documentation (Terms of Reference, Project Plan, Requirements, Technical Design), before development began.',
      'As project manager, I ensured that key project components  were completed on time, and that non-essential functionality was quickly identified and sidelined. I delegated tasks to teammates based on their strengths and interests.',
      "As developer, I built the 'Manage Tournaments' and 'Registration' modules by creating the user experience, relevant API calls, and database queries necessary for the end-to-end flow. I also reviewed 90% of the PRs and refactored code when necessray. I researched how to deploy our appication using AWS, resulting in being responsible for managing versions and deployments."],
    slideshow: [{ img: GSMLogin, description: 'Login page' },
      { img: GSMLandingPage, description: 'Landing page' },
      { img: GSMManageTournament, description: 'Where you can manage the tournaments you have created' },
      { img: GSMRegistration, description: 'Registration page for a tournament' }],
  },
  {
    id: 'bored-games',
    projectName: 'Bored? Games!',
    projectType: 'School project',
    projectTypeDetails: 'Course: Topics in Computer Science - Information Visualization, University of British Columbia',
    role: 'Developer',
    img: BoardGameThumbnail,
    imgAlt: '',
    when: 'March 2022 - 3 weeks',
    techStack: 'D3.js, JavaScript, HTML, CSS',
    team: '3 team members',
    intro: 'Fun way to explore new games using information visualisation',
    description: ['As a developer, I created the Force Directed Graph seen on the right side of the webpage. I formatted the data to match the expected input for the library being used, tuned the graph so that the nodes were clearly visible, and applied styling using CSS to match the project theme. The biggest challenge was creating the hexagons for the theme and ensuring the nodes in the graph remained within the border. I also participated in code reviews and design discussions.'],
    slideshow: [{ img: BoardGameThumbnail, description: 'Landing page' }],
    links: [{
      icon: faArrowUpRightFromSquare,
      linkText: 'Demo',
      link: 'https://www.students.cs.ubc.ca/~cs-436v/22Jan/fame/projects/project_g22/index.html',
    },
    {
      icon: faTrophy,
      linkText: "Featured in course's Hall of Fame",
      link: 'https://www.students.cs.ubc.ca/~cs-436v/22Jan/fame/',
    }],
  },
  {
    id: 'daily-checkup',
    projectName: 'Daily CheckUp',
    role: 'Full Stack Developer',
    projectType: 'Personal Project',
    img: DailyCheckupThumbnail,
    imgAlt: '',
    when: 'December 2021 - March 2022',
    techStack: 'React, MongoDB (Realm and Atlas)',
    team: '3 team members',
    intro: 'A simple text-based web application to help keep track of positive events that have occured.',
    description: ['As the most experienced developer on the team, I showed the team how to use JIRA and Miro for task management and creating mock-ups. We initially wanted to use a MERN stack, but as I was exploring this stack option, I discovered that we could create a serverless application by using Mongo Realm\'s SDK to directly connect the React frontend to the Mongo database. I went with this option because of the time constraints and so that the rest of the team could pick it up quicker. I taught the team to read through the React Material UI API and to implement the premade components in our application. I developed the registration process and saving/retrieving posts end-to-end flow. I also implemented the drop down which organizes posts via different categorization.'],
    slideshow: [
      { img: DailyCheckupThumbnail, description: 'Login page' },
      { img: DailyCheckupRegistration, description: 'New User Registration' },
      { img: DailyCheckupLanding, description: 'Landing page which displays the posts you have saved.' },
      { img: DailyCheckupByYear, description: "Posts grouped by 'year' when selected" }],

  },
  {
    id: 'garden-gnome',
    projectName: 'Garden Gnome',
    projectType: 'Hackathon project',
    role: 'Full Stack Developer',
    img: GardenGnomeThumbnail,
    imgAlt: '',
    techStack: 'React, JavaScript',
    when: 'September 2020 - weekend',
    team: 'Individual',
    intro: 'Application to help organize your garden',
    description: ['This application was developed to help plan, organize, and personalize the user’s garden. I learned how to use React and the Trefle API (provides plant information). I managed to plan several pages within the app and connect to the API, but further work is necessary for session management and storing user information.'],
    videoID: 'gO7dsl6UcGQ',
    links: [{
      icon: faLink,
      linkText: 'Bon Hackétit hackathon submission',
      link: 'https://devpost.com/software/garden-gnome',
    }],
  },
  {
    id: 'snap-savings',
    projectName: 'Snap Savings!',
    projectType: 'Hackathon project',
    role: 'Full Stack Developer',
    img: SnapSavingsThumbnail,
    imgAlt: '',
    techStack: 'Kivvy, Python',
    when: 'March 2020 - weekend',
    team: '4 team members',
    intro: 'Helping young women learn about the importance of money management',
    description: ["I learned the basics of the Kivvy framework to create a simple 'choose your own adventure' game. I was involved in design discussions to ensure feasibility of the project scope based on allotted time and collective experience. I figured out how to receive user input from the UI for game progression."],
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
    <div className="projects" id="projects">
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
