import React, { PropTypes } from 'react';
import App from 'components/App';
import Popup from 'components/Popup';
import { connect } from 'react-redux';

import { MULTI_OPEN, CLOSE } from 'redux/modules/popups';

import 'AppContainer.css';

class AppContainer extends React.Component {
  static propTypes = {
    popups: PropTypes.array,
    openPopups: PropTypes.func,
    closePopup: PropTypes.func,
  };
  state = {};

  render() {
    const { popups } = this.props;
    return (
      <div>
        <App openPopups={this.props.openPopups} closePopup={this.props.closePopup} />
        {popups.length > 0 &&
          <div className="Overlay" />
        }
        {popups.length > 0 &&
          <Popup
            onClose={() => this.props.closePopup(0)}
            data={popups[0]}
          />
        }
      </div>
    );
  }

}

export default connect(state => ({
  popups: state.popups,
}), { openPopups, closePopup })(AppContainer);

function openPopups(popups) {
  return {
    type: MULTI_OPEN,
    payload: popups,
  };
}

function closePopup(i) {
  return {
    type: CLOSE,
    payload: i,
  };
}
