import React from 'react';
import './Interest.css';

function Interest(label, value) {
  return (
    <div className="interest-card">
      <h5>{label}</h5>
      <h2>{value}</h2>
    </div>
  );
}

export default Interest;
