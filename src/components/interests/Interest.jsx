import React from 'react';
import './Interest.css';
import PropTypes from 'prop-types';

function Interest({ label, value }) {
  return (
    <div className="interest-card">
      <h5>{label}</h5>
      <h2>{value}</h2>
    </div>
  );
}

Interest.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Interest;
