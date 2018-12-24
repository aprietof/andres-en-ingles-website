import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

export default function InstagramTile({ href, src, title }) {
  return (
    <div className="fl w-50 w-25-m w-20-l pa2">
      <a href={href} className="db link dim tc" target="_blank" rel="noopener noreferrer">
        <TileImage background={src} className="w-100 db outline black-10" />
        <dl className="mt2 f6 lh-copy">
          <dt className="clip">Title</dt>
          <dd className="ml0 black truncate w-100">{title}</dd>
        </dl>
      </a>
    </div>
  );
}

InstagramTile.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const TileImage = styled.div`
  background: ${({ background }) => `url(${background})`};
  background-size: cover;
  height: 0;
  padding-bottom: 100%;
`;
