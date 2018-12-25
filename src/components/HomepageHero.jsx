import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import HeroCard from './HeroCard';
import media from '../../style-templates/media';

const backgroundImageSrc =
  'https://res.cloudinary.com/absolutandres/image/upload/fl_progressive/v1545515665/IMG_5471.jpg';

export default class HomepageHero extends React.Component {
  state = {
    show: false,
  };

  componentDidMount() {
    this.setState({
      show: true,
    });
  }

  render() {
    const { show } = this.state;
    return (
      <Hero background={backgroundImageSrc}>
        <Overlay className="vh-100 dt w-100 tc bg-dark-gray white cover">
          <HeroCard show={show} />
        </Overlay>
        <Frame />
      </Hero>
    );
  }
}

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

const Overlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: flex-end;

  ${media.phone`
    align-items: flex-end;
  `};
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
