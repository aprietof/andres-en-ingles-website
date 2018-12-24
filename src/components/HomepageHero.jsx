import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import HeroCard from './HeroCard';
import media from '../../style-templates/media';

const backgroundImageSrc =
  'https://res.cloudinary.com/absolutandres/image/upload/fl_progressive/v1545515665/IMG_5471.jpg';

export default function HomepageHero({ homepage }) {
  const today = format(new Date(), 'DD MMMM, YYYY');
  return (
    <Hero background={backgroundImageSrc}>
      <Overlay className="vh-100 dt w-100 tc bg-dark-gray white cover">
        <Header className="sans-serif">
          <div className="">
            <time className="f6 mb2 dib ttu tracked">
              <small>{today}</small>
            </time>
            <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
              <span className="bg-black-90 lh-copy white pa1 tracked-tight">AndrÉs</span>
              <br />
              <span className="bg-black-90 lh-copy white pa1 tracked-tight">En InglÉs</span>
            </h3>
            <HeroCard />
          </div>
        </Header>
      </Overlay>
      <Frame />
    </Hero>
  );
}

HomepageHero.propTypes = {
  homepage: PropTypes.object.isRequired,
};

const Hero = styled.div`
  background: ${({ background }) => `url(${background}) center`};
  background-size: cover;
  position: relative;
  height: 100vh;
  margin-bottom: 3em;

  ${media.tablet`
    margin-bottom: 0;
  `};

  ${media.phone`
    margin-bottom: 2em;
  `};
`;

const Header = styled.header`
  height: 100vh;
  text-align: left;
  padding: 4.5em 6em;

  ${media.phone`
    padding: 17em 5em 0;
  `};
`;

const Overlay = styled.div`
  position: absolute;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
`;

const Frame = styled.div`
  position: absolute;
  height: calc(100% - 4em);
  top: 0;
  left: 0;
  width: calc(100% - 4em);
  margin: 2em;
  border: 1px solid white;
`;
