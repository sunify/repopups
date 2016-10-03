import React, { PropTypes } from 'react';
import './Checkbox.css';

export default class Checkbox extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  };

  handleChange = (e) => {
    const { onChange } = this.props;
    if (typeof onChange === 'function') {
      onChange(e.target.checked);
    }
  }

  render() {
    const { checked, children } = this.props;

    return (
      <label className="Checkbox">
        <input type="checkbox" checked={checked} onChange={this.handleChange} />
        <i className={`Checkbox-icon ${checked ? 'Checkbox-icon--checked' : ''}`} />
        <span className="Checkbox-label">{children}</span>
      </label>
    );
  }
}
