import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './profile.css';

const Profile = (props) => {
  return (
    <div className="profile">
      <p>Welcome </p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
