import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import media from '../../style-templates/media';

export default function HeroCard({ show }) {
  return (
    <Header className="sans-serif">
      {show && (
        <div className="">
          <time className="f6 mb2 dib ttu tracked">
            <small>{format(new Date(), 'DD MMMM, YYYY')}</small>
          </time>
          <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
            <span className="bg-black-90 lh-copy white pa1 tracked-tight">AndrÉs</span>
            <br />
            <span className="bg-black-90 lh-copy white pa1 tracked-tight">En InglÉs</span>
          </h3>
          <h1 className="f3 f1-l fw2 mb3 mt4 mt0-ns">Holaaa!!!!!!</h1>
          <h2 className="f5 f3-l fw1 mb4 mb5-l lh-title">
            Soy Andrés! también me conocen como absolutandres. <br />
            Bienvenido a mi website!!!
          </h2>
        </div>
      )}
    </Header>
  );
}

HeroCard.propTypes = {
  show: PropTypes.bool.isRequired,
};

const Header = styled.header`
  height: 100vh;
  text-align: left;
  padding: 4.5em 6em;

  ${media.phone`
    padding: 17em 5em 0;
  `};
`;

const HeroCardWrapper = styled.div`
  margin-top: 0.75em;
`;
