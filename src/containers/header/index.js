import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleRoute = route => {
    const { history } = this.props;
    history.push(route);
  };

  _handleLogout = () => {
    const { dispatch, history } = this.props;
    localStorage.clear();
    history.push('/');
    dispatch({ type: 'RESET', payload: { type: 'LOGIN_RESET' } });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark" className="navWidth">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          {localStorage.getItem('token') !== 'undefined' &&
          localStorage.getItem('token') ? (
            <div className="logoutWrap">
              <h5>Hi {localStorage.getItem('email')}</h5>
              <Button
                variant="outline-info button"
                onClick={() => this._handleLogout()}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Fragment>
              <Button
                variant="outline-info button"
                onClick={route => this._handleRoute('login')}
              >
                Login
              </Button>
              <Button
                variant="outline-info button"
                onClick={route => this._handleRoute('signup')}
              >
                Signup
              </Button>
            </Fragment>
          )}
        </Navbar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginData: state.loginData
  };
};

export default connect(mapStateToProps)(Header);
