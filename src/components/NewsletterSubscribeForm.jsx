import React from 'react';

export default class NewsletterSubscribeForm extends React.Component {
  render(){
    
    return(
      <div className="mb4 mb0-ns fl w-100 w-50-l">
        <p className="f4 fw6 mb2 f6 mt0">Suscribete a mi newsletter.</p>
        <input
          placeholder="Email Address"
          className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"
        />
        <input
          type="submit"
          className="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray"
        />
      </div>
    )
  }
}