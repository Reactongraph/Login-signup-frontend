import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as CommonHelper from '../../utils';
import ErrorMessage from '../../components/errorMessage/errorMessage';
import './signup.css';

const initialSatate = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  contact: '',
  companyName: '',
  errorMessage: '',
  showEmailError: '',
  showPasswordError: '',
  confirmPassword: false,
  showConfirmError: '',
};

const Signup = (props) => {
  const { dispatch } = props;
  const [state, setState] = useState(initialSatate);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      let validEmail = CommonHelper.isValidEmail(e.target.value);
      if (validEmail === false) {
        setState({
          ...state,
          showEmailError: 'Email is wrong',
          email: e.target.value,
        });
      } else {
        setState({ ...state, showEmailError: '', email: e.target.value });
      }
    } else if (e.target.name === 'password') {
      let validPassword = CommonHelper.isValidPassword(e.target.value);
      if (validPassword === false) {
        setState({
          ...state,
          showPasswordError: 'Wrong password',
          confirmPassword: false,
          password: e.target.value,
        });
      } else {
        setState({
          ...state,
          showPasswordError: '',
          confirmPassword: true,
          password: e.target.value,
        });
      }
    } else if (e.target.name === 'confirmPassword') {
      let samePassword = CommonHelper.isSamePassword(
        state.password,
        e.target.value
      );
      if (samePassword.status === false) {
        setState({ ...state, showConfirmError: samePassword.message });
      } else {
        setState({ ...state, showConfirmError: '' });
      }
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let validateSignup = CommonHelper.isValidSignup(state);
    if (validateSignup.status === false) {
      setState({ ...state, errorMessage: validateSignup.message });
    } else {
      dispatch({ type: 'SIGNUP', payload: { ...state } });
      navigate('/');
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="innerContainer">
          <Form>
            <div className="fieldError">
              {state.errorMessage !== '' && (
                <ErrorMessage message={state.errorMessage} />
              )}
            </div>
            <Row>
              <Col md={6} xs={12}>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={state.firstName}
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
              </Col>
              <Col md={6} xs={12}>
                <Form.Group controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={state.lastName}
                    name="lastName"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6} xs={12}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={state.email}
                    name="email"
                    onChange={(e) => handleChange(e)}
                  />
                  <div>
                    {state.email && state.showEmailError !== '' && (
                      <ErrorMessage message={state.showEmailError} />
                    )}
                  </div>
                </Form.Group>
              </Col>
              <Col md={6} xs={12}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={state.password}
                    name="password"
                    onChange={(e) => handleChange(e)}
                  />
                  <div>
                    {state.password && state.showConfirmError && (
                      <ErrorMessage message={state.showConfirmError} />
                    )}
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={state.confirmPass}
                    name="confirmPassword"
                    onChange={(e) => handleChange(e)}
                  />
                  <div>
                    {state.confirmPass && state.showPasswordError && (
                      <ErrorMessage message={state.showPasswordError} />
                    )}
                  </div>
                </Form.Group>
              </Col>
              <Col md={6} xs={12}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Contact number"
                    value={state.contact}
                    name="contact"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <Form.Group controlId="formBasicCompanyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company Name"
                    name="companyName"
                    value={state.companyName}
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="signUpButtonWrap">
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

export default connect(mapStateToProps, null)(Signup);
