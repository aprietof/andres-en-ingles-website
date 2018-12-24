const axios = require('axios');

export default async function subscribeToNewsletter({ email }) {
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
}
