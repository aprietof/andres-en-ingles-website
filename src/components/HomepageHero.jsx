import PropTypes from 'prop-types';
import React from 'react';
import ProgressiveImage from 'react-progressive-bg-image';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import HeroCard from './HeroCard';
import media from '../../style-templates/media';

const fadeInAnimation = keyframes`${fadeIn}`;
const backgroundImageSrc =
  'https://res.cloudinary.com/absolutandres/image/upload/fl_progressive/v1545515665/IMG_5471.jpg';

export default function HomepageHero({ homepage }) {
  return (
    <Hero background={backgroundImageSrc}>
      <Overlay className="vh-100 dt w-100 tc bg-dark-gray white cover">
        <HeroCard />
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

const HeroTitle = styled.div`
  width: 400px;
  height: 400px;
  background: #000;
`;

const StyledProgressiveImage = styled(ProgressiveImage)`
  position: relative;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  margin-bottom: 3em;

  ${media.tablet`
    margin-bottom: 0;
  `};

  ${media.phone`
    margin-bottom: 2em;
  `};
`;

const Overlay = styled.div`
  position: absolute;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5));
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
`;

const Title = styled.div`
  animation: 5s ${fadeInAnimation};
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
