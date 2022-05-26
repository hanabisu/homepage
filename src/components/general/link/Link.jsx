import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './link.css';

function Link({ link, icon, linkText }) {
  return (
    <a className="link-data" href={link} target="_blank" rel="noreferrer">
      <FontAwesomeIcon className="icon" icon={icon} />
      <span className="data">{linkText}</span>
    </a>
  );
}

Link.propTypes = {
  link: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.object.isRequired,
  linkText: PropTypes.string.isRequired,
};
export default Link;
