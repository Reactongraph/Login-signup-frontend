import React from 'react';
import { connect } from 'react-redux';
import Heading from '../../components/common/heading/Heading';

const App = () => {
  return (
    <React.Fragment>
      <Heading
        title="Hello from application component"
        className="appHeading"
      />
    </React.Fragment>
  );
};

export default connect()(App);
