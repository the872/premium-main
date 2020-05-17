/**
 *
 * LoginComponent
 *
 */

import React from 'react';
import firebase from '../../firebase';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class LoginComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onClick = this.onClick.bind(this);
    this.state = {
      number: '',
    };
  }

  componentDidMount() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        // other options
      },
    );
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container',
    );
    window.recaptchaVerifier.render();
  }

  onClick() {
    const phoneNumber = this.state.number;
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(confirmResult => {
        console.log(confirmResult.user);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div
        style={{ padding: '1em', display: 'flex', justifyContent: 'center' }}
      >
        <input
          onChange={e => this.setState({ number: e.target.value })}
          style={{ backgroundColor: 'red', width: '100vw', color: 'white' }}
          id="recaptcha-container"
        />
        <button type="button" onClick={this.onClick}>
          login
        </button>
        <div id="recaptcha" />
      </div>
    );
  }
}

LoginComponent.propTypes = {};

export default LoginComponent;
