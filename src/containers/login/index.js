import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import * as CommonHelper from '../../utils';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isValidUser: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      return true;
    }
    if (
      nextProps.loginData &&
      nextProps.loginData.changingStatus === 'success'
    ) {
      nextProps.history.push('/');
      return true;
    }
    if (
      nextProps.loginData &&
      nextProps.loginData.changingStatus === 'failed'
    ) {
      this.setState({ isValidUser: true }, () => {
        return true;
      });
    }
    return false;
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, isValidUser: false });
  };

  handleSubmit = event => {
    const { dispatch } = this.props;
    event.preventDefault();
    let validateLogin = CommonHelper.isValidLogin(this.state);
    if (validateLogin.status === false) {
      this.setState({ errorMessage: validateLogin.message });
    } else {
      dispatch({ type: 'LOGIN', payload: { ...this.state } });
      // this.props.history.push('/');
    }
  };

  render() {
    const { isValidUser } = this.state;
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
                      onChange={e => this.handleChange(e, 'email')}
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
                      onChange={e => this.handleChange(e, 'password')}
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
)(Login);
