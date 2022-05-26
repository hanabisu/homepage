import React from 'react';
import PropTypes from 'prop-types';
import ProjectModal from './ProjectModal';

import './Project.css';

function Project({ project }) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="project-card" onClick={openModal} onKeyPress={openModal}>
      <h3>{project.projectName}</h3>
      <h5>{project.techStack}</h5>
      <div className="img-container">
        <img src={project.img} alt={project.imgAlt} />
      </div>
      <p>{project.intro}</p>
      <ProjectModal project={project} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

Project.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.object.isRequired,
};
export default Project;
