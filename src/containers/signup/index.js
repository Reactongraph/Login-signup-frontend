import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as CommonHelper from '../../utils';
import ErrorMessage from '../../components/errorMessage/errorMessage';
import './signup.css';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      showConfirmError: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.signupData && props.signupData.changingStatus === 'success') {
      props.history.push('/login');
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === 'email') {
      let validEmail = CommonHelper.isValidEmail(e.target.value);
      if (validEmail === false) {
        this.setState({ showEmailError: 'Email is wrong' });
      } else {
        this.setState({ showEmailError: '' });
      }
    }
    if (e.target.name === 'password') {
      let validPassword = CommonHelper.isValidPassword(e.target.value);
      if (validPassword === false) {
        this.setState({
          showPasswordError: 'Wrong password',
          confirmPassword: false
        });
      } else {
        this.setState({ showPasswordError: '', confirmPassword: true });
      }
    }
    if (e.target.name === 'confirmPassword') {
      let samePassword = CommonHelper.isSamePassword(
        this.state.password,
        e.target.value
      );
      if (samePassword.status === false) {
        this.setState({ showConfirmError: samePassword.message });
      } else {
        this.setState({ showConfirmError: '' });
      }
    }
  };

  handleSubmit = event => {
    const { dispatch } = this.props;
    event.preventDefault();
    let validateSignup = CommonHelper.isValidSignup(this.state);
    if (validateSignup.status === false) {
      this.setState({ errorMessage: validateSignup.message });
    } else {
      dispatch({ type: 'SIGNUP', payload: { ...this.state } });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="innerContainer">
            <Form>
              <div className="fieldError">
                {this.state.errorMessage !== '' && (
                  <ErrorMessage message={this.state.errorMessage} />
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
                      value={this.state.firstName}
                      onChange={e => this.handleChange(e)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} xs={12}>
                  <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      value={this.state.lastName}
                      name="lastName"
                      onChange={e => this.handleChange(e)}
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
                      value={this.state.email}
                      name="email"
                      onChange={e => this.handleChange(e)}
                    />
                    <div>
                      {this.state.email && this.state.showEmailError !== '' && (
                        <ErrorMessage message={this.state.showEmailError} />
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
                      value={this.state.password}
                      name="password"
                      onChange={e => this.handleChange(e)}
                    />
                    <div>
                      {this.state.password && this.state.showConfirmError && (
                        <ErrorMessage message={this.state.showConfirmError} />
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
                      value={this.state.confirmPass}
                      name="confirmPassword"
                      onChange={e => this.handleChange(e)}
                    />
                    <div>
                      {this.state.confirmPass &&
                        this.state.showPasswordError && (
                          <ErrorMessage
                            message={this.state.showPasswordError}
                          />
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
                      value={this.state.contact}
                      name="contact"
                      onChange={e => this.handleChange(e)}
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
                      value={this.state.companyName}
                      onChange={e => this.handleChange(e)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="signUpButtonWrap">
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
                <div></div>
              </div>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  null
)(Signup);
