import React from 'react';
import { connect } from 'react-redux';
import Heading from '../../components/common/heading/Heading';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Heading
          title="Hello from application component"
          className="appHeading"
        />
      </React.Fragment>
    );
  }
}

export default connect()(App);
