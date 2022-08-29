import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import Logo from '../../assets/images/logo.jpeg';
import './header.css';

const Header = (props) => {
  const { dispatch } = props;
  const navigate = useNavigate();

  const _handleRoute = (route) => {
    navigate(route);
  };

  const _handleLogout = () => {
    localStorage.clear();
    navigate('/');
    dispatch({ type: 'RESET', payload: { type: 'LOGIN_RESET' } });
  };

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" className="navWidth">
        <Image src={Logo} className="logo_img" />
        <Nav className="mr-auto"></Nav>
        {localStorage.getItem('token') !== 'undefined' &&
        localStorage.getItem('token') ? (
          <div className="logoutWrap">
            <h5>Hi {localStorage.getItem('email')}</h5>
            <Button
              variant="outline-info button"
              onClick={() => _handleLogout()}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Fragment>
            <Button
              variant="outline-info button"
              onClick={() => _handleRoute('login')}
            >
              Login
            </Button>
            <Button
              variant="outline-info button"
              onClick={() => _handleRoute('signup')}
            >
              Signup
            </Button>
          </Fragment>
        )}
      </Navbar>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    loginData: state.loginData,
  };
};

export default connect(mapStateToProps)(Header);
