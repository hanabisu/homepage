/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import Slideshow from './Slideshow';
import './ProjectModal.css';
import LabelledData from '../general/label/LabelledData';
import VideoPlayer from '../general/VideoPlayer';
import Link from '../general/link/Link';

function ProjectModal(props) {
  const { setModalOpen, modalOpen, project } = props;
  const closeModal = (event) => {
    event.preventDefault();
    setModalOpen(!modalOpen);
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  React.useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalOpen]);
  return (
    <div className={`modal ${modalOpen ? 'display-block fadein' : 'fadeout display-none'}`}>
      <div className="modal-content" onClick={(e) => stopPropagation(e)}>
        <div className="modal-header">
          <h2>{project.projectName}</h2>
          <span className="close" onClick={(e) => closeModal(e)}>&times;</span>
        </div>
        <LabelledData label="when" data={project.when} />
        <LabelledData label="role" data={project.role} />
        <LabelledData label="used" data={project.techStack} />
        <LabelledData label="team" data={project.team} />
        {project.links && project.links.map((l) => <Link key={l.linkText.replaceAll(' ', '-')} icon={l.icon} linkText={l.linkText} link={l.link} />)}
        {project.slideshow && <Slideshow images={project.slideshow} />}
        {project.videoID && <VideoPlayer id={project.videoID} />}
        {project.description.map((d, i) => <p key={`desc-part-${i}`}>{d}</p>)}
      </div>
    </div>
  );
}

export default ProjectModal;
