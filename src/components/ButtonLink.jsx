import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonLink({ href, text }) {
  return (
    <div className="flex items-center justify-center pa4">
      <a
        href={href}
        className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{text}</span>
      </a>
    </div>
  );
}

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
