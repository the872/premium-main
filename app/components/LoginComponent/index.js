/**
 *
 * LoginComponent
 *
 */

import React from 'react';
import '@google/model-viewer';
import firebase from '../../firebase';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      chat: false,
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
            height: 270,
            overflow: 'hidden',
          }}
        >
          <iframe
            title="hello"
            style={{
              pointerEvents: 'none',
              borderRadius: 5,
            }}
            width="360"
            height="270"
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
            height: 270,
            overflow: 'hidden',
          }}
        >
          <iframe
            title="hello"
            style={{
              pointerEvents: 'none',
              borderRadius: 5,
            }}
            width="360"
            height="270"
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
            type="number"
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

  render() {
    const { chat, user, confirmResult } = this.state;
    return (
      <div style={{ flex: 1 }}>
        {!user && !confirmResult && this.renderPhoneNumberInput()}

        {!user && confirmResult && this.renderVerificationCodeInput()}

        {user && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'linen',
              width: '100%',
              height: '100vh',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100vw',
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
                display: this.state.chat ? '' : 'none',
                height: 440,
                overflow: 'hidden',
                backgroundColor: '#fff',
                top: 0,
              }}
            >
              <iframe
                style={{ borderRadius: 5 }}
                title="chat"
                width="360"
                height="440"
                src="https://tlk.io/premium-ads"
              />
            </div>
            <div
              style={{
                display: this.state.chat ? 'none' : '',
                height: 370,
                width: 360,
              }}
            >
              <model-viewer
                src="m/Astronaut.glb"
                alt="A 3D model of an astronaut"
                background-color="#70BCD1"
                shadow-intensity="1"
                camera-controls
                preload
                reveal="auto"
                auto-rotate
                ar
                magic-leap
                style={{
                  height: 370,
                  width: 360,
                  top: 0,
                }}
              />
              <div
                style={{
                  position: 'relative',
                  bottom: '25vh',
                  color: '#828BD3',
                  fontSize: 70,
                  fontWeight: 900,
                  transform: 'rotate(-45deg)',
                  textShadow: '5px 5px #000',
                  userSelect: 'none',
                  width: 370,
                }}
              >
                SOLD OUT
              </div>
            </div>
            <div
              style={{
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100vw',
                  flexWrap: 'wrap',
                  userSelect: 'none',
                }}
              >
                <div
                  style={{
                    display: this.state.chat ? 'none' : 'flex',
                    justifyContent: 'center',
                    width: '100vw',
                    fontSize: 30,
                    fontWeight: 900,
                  }}
                >
                  SPACE SUIT
                </div>
                <div
                  style={{
                    display: this.state.chat ? 'none' : 'flex',
                    justifyContent: 'center',
                    width: '100vw',
                    fontSize: 20,
                    fontWeight: 900,
                  }}
                >
                  $5,000 USD
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 200,
                    paddingTop: 20,
                  }}
                >
                  <button
                    type="submit"
                    style={{
                      cursor: 'pointer',
                      backgroundColor: '#C9DEDB',
                      color: '#00000090',
                      padding: 10,
                      borderRadius: 5,
                      fontWeight: 700,
                      paddingRight: 12,
                    }}
                    onClick={() => this.setState({ chat: !chat })}
                  >
                    {this.state.chat ? '🛒 SHOP' : '💬 CHAT'}
                  </button>
                  <button
                    type="submit"
                    style={{
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
              </div>
            </div>
          </div>
        )}
        {this.renderMessage()}
      </div>
    );
  }
}

LoginComponent.propTypes = {};

export default LoginComponent;
