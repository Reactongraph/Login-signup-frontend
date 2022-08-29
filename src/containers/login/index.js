import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as CommonHelper from '../../utils';
import './login.css';

const Login = (props) => {
  const { dispatch } = props;
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: '',
    password: '',
    isValidUser: false.valueOf,
    errorMessage: '',
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value, isValidUser: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validateLogin = CommonHelper.isValidLogin(state);
    if (validateLogin.status === false) {
      setState({ ...state, errorMessage: validateLogin.message });
    } else {
      dispatch({ type: 'LOGIN', payload: { ...state } });
      navigate('/');
    }
  };

  const { isValidUser } = state;

  return (
    <React.Fragment>
      <div className="container">
        <div className="logInnerContainer">
          <Form>
            <Row>
              <Col md={6} xs={12}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => handleChange(e, 'email')}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => handleChange(e, 'password')}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div>
              {isValidUser && (
                <p className="logErrorMsg">Invalid Credentials</p>
              )}
            </div>
            <div className="buttonWrap">
              <Button variant="secondary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
              <div></div>
            </div>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, null)(Login);
