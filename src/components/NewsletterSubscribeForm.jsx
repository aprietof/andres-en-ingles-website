import React from 'react';
import * as EmailValidator from 'email-validator';
import axios from 'axios';

export default class NewsletterSubscribeForm extends React.Component {
  state = {
    email: '',
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
        await this.subscribeToNewsletter({ email });
        if (email) {
          this.setState({
            email: '',
          });
        }
      } catch (err) {
        console.log(err); //eslint-disable-line
      }
    } else {
      alert('Please enter a valid email address');
    }
  };

  subscribeToNewsletter = async ({ email }) => {
    const data = {
      email_address: email,
      status: 'subscribed',
    };
    const listId = process.env.MAILCHIMP_LIST_ID;
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const uri = `https://us18.api.mailchimp.com/3.0/lists/${listId}/members/`;
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Basic ${Buffer.from(`apikey:${apiKey}`).toString('base64')}`,
    };

    await axios
      .post(uri, {
        headers,
        data,
      })

      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { email } = this.state;

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
          />
        </form>
      </div>
    );
  }
}
