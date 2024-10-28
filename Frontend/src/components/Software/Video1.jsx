import React from 'react';
import PropTypes from 'prop-types';

const Video1 = ({ fileUrl, width = '640', height = '480' }) => {
  // Log the fileUrl to ensure it is received correctly
  console.log("Video1 received fileUrl:", fileUrl);

  const iframeContainerStyle = {
    position: 'relative',
    width: '100%',         // Make the container responsive
    paddingBottom: '56.25%', // This gives a 16:9 aspect ratio (9 / 16 = 0.5625)
    height: 0,             // Height is set to 0 to rely on padding for aspect ratio
    overflow: 'hidden',
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',          // Make iframe take full width of the container
    height: '100%',         // Make iframe take full height of the container
    border: 0,              // No border for cleaner appearance
  };

  return (
    <div style={iframeContainerStyle}>
      <iframe
        src={fileUrl}
        style={iframeStyle}
        allow="autoplay; encrypted-media; fullscreen"  // Allow fullscreen
        allowFullScreen  // This enables the fullscreen option
        title="Google Drive Video"
      ></iframe>
    </div>
  );
};

Video1.propTypes = {
  fileUrl: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Video1;
