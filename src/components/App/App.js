import React, { PropTypes } from 'react';
import Checkbox from 'components/Checkbox';
import Select from 'components/Select';
import Button from 'components/Button';

import './App.css';

export default class App extends React.Component {
  static propTypes = {
    openPopups: PropTypes.func,
  };

  state = {
    openAllPopups: false,
    selectedPopup: '0',
  };

  render() {
    const { openAllPopups, selectedPopup } = this.state;

    return (
      <div className="App">
        <div className="App-tabs">
          <a className="App-tab">Users</a>
          <a className="App-tab">Statistics</a>
        </div>
        <div className="App-body">
          <h1 className="App-title">
            Some statistics
          </h1>

          <div className="App-form">
            <Checkbox
              checked={openAllPopups}
              onChange={openAllPopups => this.setState({ openAllPopups })}
            >
              Open all popups
            </Checkbox>
            <div className="App-form-row">
              <Select
                style={{ width: 400 }}
                value={selectedPopup}
                options={makePopupOptions(popups)}
                onChange={selectedPopup => this.setState({ selectedPopup })}
              />
              <Button>
                Open
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const popups = [
  {
    title: 'Pop up 1',
  },
  {
    title: 'Pop up 2',
  },
];

function makePopupOptions(popups) {
  return popups.reduce((memo, p, i) => ({
    ...memo,
    [i]: p.title,
  }), {});
}
