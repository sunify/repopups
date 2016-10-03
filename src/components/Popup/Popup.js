import React, { PropTypes } from 'react';
import Button from 'components/Button';
import './Popup.css';

export default class Popup extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string,
      // content: PropTypes.any,
    }),
    onClose: PropTypes.func,
  };

  handleCloseClick() {
    const { onClose } = this.props;
    if (typeof onClose === 'function') {
      onClose();
    }
  }

  render() {
    return (
      <div className="Popup">
        <div className="Popup-body">
          <button className="Popup-close" onClick={() => this.handleCloseClick()} />
          <h2 className="Popup-title">{this.props.data.title}</h2>
          <div className="Popup-content">
            <p>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="Popup-submit">
            <Button onClick={() => this.handleCloseClick()}>
              Finish
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
