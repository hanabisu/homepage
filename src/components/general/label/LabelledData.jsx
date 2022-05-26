import React from 'react';
import PropTypes from 'prop-types';

import './labelledData.css';

function LabelledData({ label, data }) {
  return (
    <div className="labelled-data">
      <div className="label">
        {label}
        :
        {' '}
      </div>
      <div className="data">{data}</div>
    </div>
  );
}

LabelledData.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default LabelledData;
