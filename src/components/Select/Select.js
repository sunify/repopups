import React, { PropTypes } from 'react';
import './Select.css';

export default function Select({ options, value, onChange, ...props }) {
  return (
    <div className="Select" {...props}>
      <button className="Select-button">
        <span className="Select-value">{options[value]}</span>
      </button>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {Object.keys(options).map(key =>
          <option value={key} key={key}>{options[key]}</option>
        )}
      </select>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
