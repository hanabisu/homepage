import React from 'react';

function VideoPlayer(id) {
  return (
    <div className="video-responsive">
      <iframe width="100%" height="345" title="Embedded youtube" allowFullScreen src={`https://www.youtube.com/embed/${id}`} />
    </div>
  );
}

export default VideoPlayer;
