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
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '',
      confirmResult: null,
    };
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '',
          confirmResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  signIn = () => {
    const { phoneNumber } = this.state;
    this.setState({ message: 'Sending code ...' });

    firebase
      .auth()
      .signInWithPhoneNumber(
        `+1 ${phoneNumber}`,
        new firebase.auth.RecaptchaVerifier('recaptcha-container'),
      )
      .then(confirmResult =>
        this.setState({ confirmResult, message: 'Code has been sent!' }),
      )
      .catch(error =>
        this.setState({
          message: `${error.message}`,
        }),
      );
  };

  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult
        .confirm(codeInput)
        .then(user => {
          this.setState({ message: 'Code Confirmed!' });
        })
        .catch(error =>
          this.setState({ message: `Code Confirm Error: ${error.message}` }),
        );
    }
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  onInputChange = e => {
    const x = e.target.value
      .replace(/\D/g, '')
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`;
    this.setState({ phoneNumber: e.target.value });
  };

  renderPhoneNumberInput() {
    const { phoneNumber } = this.state;

    return (
      <div
        style={{
          padding: 10,
          display: 'flex',
          width: '100vw',
          justifyContent: 'center',
          flexWrap: 'wrap',
          backgroundColor: 'linen',
        }}
      >
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100vw',
            padding: 20,
          }}
        >
          <img
            alt="logo"
            draggable="false"
            style={{
              userSelect: 'none',
              objectFit: 'cover',
              width: 360,
              height: 60,
            }}
            src="https://premiumads.org/assets/media/premiumLogo.png"
          />
        </span>
        <div
          style={{
            height: '600px',
            overflow: 'hidden',
          }}
        >
          <iframe
            title="hello"
            style={{
              pointerEvents: 'none',
            }}
            width="360"
            height="600"
            scrolling="false"
            allow="camera"
            src="https://shaderbooth.com/?33ac0"
          />
        </div>
        <div
          style={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <input
            style={{
              backgroundColor: '#8BC8CD75',
              padding: 10,
              borderRadius: 5,
              color: '#00000090',
            }}
            type="text"
            id="phone"
            placeholder="555-555-5555"
            onChange={e => this.onInputChange(e)}
            value={phoneNumber}
          />
          <button
            type="submit"
            style={{
              marginLeft: 20,
              cursor: 'pointer',
              backgroundColor: '#828BD3',
              color: '#00000090',
              padding: 10,
              borderRadius: 5,
              fontWeight: 700,
            }}
            onClick={this.signIn}
          >
            SIGN IN
          </button>
        </div>
        <div id="recaptcha-container" />
      </div>
    );
  }

  renderMessage() {
    const { message } = this.state;

    if (!message.length) return null;

    return (
      <p
        style={{
          display: 'flex',
          justifyContent: 'center',
          bottom: 0,
          width: '100vw',
          padding: 10,
          backgroundColor: '#828BD3',
          color: 'linen',
          fontWeight: 900,
        }}
      >
        {message}
      </p>
    );
  }

  renderVerificationCodeInput() {
    const { codeInput } = this.state;

    return (
      <div
        style={{
          padding: 10,
          display: 'flex',
          width: '100vw',
          justifyContent: 'center',
          flexWrap: 'wrap',
          backgroundColor: 'linen',
        }}
      >
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100vw',
            padding: 20,
          }}
        >
          <img
            alt="logo"
            draggable="false"
            style={{
              userSelect: 'none',
              objectFit: 'cover',
              width: 360,
              height: 60,
            }}
            src="https://premiumads.org/assets/media/premiumLogo.png"
          />
        </span>
        <div
          style={{
            height: '600px',
            overflow: 'hidden',
          }}
        >
          <iframe
            title="hello"
            style={{
              pointerEvents: 'none',
            }}
            width="360"
            height="600"
            scrolling="false"
            allow="camera"
            src="https://shaderbooth.com/?86cd1"
          />
        </div>
        <div
          style={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <input
            style={{
              backgroundColor: '#8BC8CD75',
              padding: 10,
              borderRadius: 5,
              color: '#00000090',
            }}
            onChange={e => this.setState({ codeInput: e.target.value })}
            placeholder="6-Digit Code"
            value={codeInput}
          />
          <button
            type="submit"
            style={{
              marginLeft: 20,
              cursor: 'pointer',
              backgroundColor: '#828BD3',
              color: '#00000090',
              padding: 10,
              borderRadius: 5,
              fontWeight: 700,
            }}
            onClick={this.confirmCode}
          >
            CONFIRM
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { user, confirmResult } = this.state;
    return (
      <div style={{ flex: 1 }}>
        {!user && !confirmResult && this.renderPhoneNumberInput()}

        {this.renderMessage()}

        {!user && confirmResult && this.renderVerificationCodeInput()}

        {user && (
          <div
            style={{
              padding: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#77dd77',
              flex: 1,
            }}
          >
            <p style={{ fontSize: 25 }}>Signed In!</p>
            <p>{JSON.stringify(user)}</p>
            <button
              type="submit"
              style={{
                marginLeft: 20,
                cursor: 'pointer',
                backgroundColor: '#828BD3',
                color: '#00000090',
                padding: 10,
                borderRadius: 5,
                fontWeight: 700,
              }}
              onClick={this.signOut}
            >
              LOGOUT
            </button>
          </div>
        )}
      </div>
    );
  }
}

LoginComponent.propTypes = {};

export default LoginComponent;
