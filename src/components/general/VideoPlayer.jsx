import React from 'react';
import PropTypes from 'prop-types';

function VideoPlayer({ id }) {
  return (
    <div className="video-frame">
      <iframe width="100%" height="345" title="Embedded youtube" allowFullScreen src={`https://www.youtube.com/embed/${id}`} />
    </div>
  );
}

VideoPlayer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default VideoPlayer;
