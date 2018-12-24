import React from 'react';
import * as EmailValidator from 'email-validator';
import axios from 'axios';

export default class NewsletterSubscribeForm extends React.Component {
  state = {
    email: '',
    subscribeSuccess: false,
    subscribeError: false,
  };

  handleChange = event => {
    const email = event.target.value;
    this.setState({
      email,
    });
  };

  handleSubmit = async event => {
    const { email } = this.state;
    event.preventDefault();
    if (email !== '' && EmailValidator.validate(email)) {
      try {
        this.callLamba(email);
      } catch (err) {
        console.log(err); //eslint-disable-line
      }
    } else {
      alert('Please enter a valid email address');
    }
  };

  callLamba = email => {
    axios
      .get(`https://dwhruot675.execute-api.us-east-1.amazonaws.com/dev/malchimpSubscribe?email=${email}`)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            email: '',
            subscribeSuccess: true,
            subscribeError: false,
          });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({
          email: '',
          subscribeSuccess: false,
          subscribeError: true,
        });
      });
  };

  render() {
    const { email, subscribeSuccess, subscribeError } = this.state;

    return (
      <div className="mb4 mb0-ns fl w-100 w-50-l">
        <p className="f4 fw6 mb2 f6 mt0">Suscribete a mi newsletter.</p>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={email}
            placeholder="Email Address"
            className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"
            type="email"
          />
          <input
            type="submit"
            className="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray"
            style={{ cursor: 'pointer' }}
          />
        </form>
        {subscribeSuccess && (
          <p className="f7 black-70 dib pr3 mb3" style={{ color: 'green' }}>
            Email succesfully added, Thanks!
          </p>
        )}
        {subscribeError && (
          <p className="f7 black-70 dib pr3 mb3" style={{ color: 'red' }}>
            Yikes! there was a problem adding your email, please try again.
          </p>
        )}
      </div>
    );
  }
}
