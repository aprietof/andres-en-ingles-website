import React from 'react';
import styled from 'styled-components';
import media from '../../style-templates/media';

export default function HeroCard() {
  return (
    <HeroCardWrapper>
      <div className="card">
        <h1 className="entry-title">
          <a href="https://www.youtube.com/channel/UCZUiKfemh1zGgAAL8qeWPMg" target="_blank" rel="noopener noreferrer">
            Soy creador de videos sobre Idiomas, Viajes, Lifestyle y Vlogs en <br />
            New York.
          </a>
        </h1>
      </div>
    </HeroCardWrapper>
  );
}

const HeroCardWrapper = styled.div`
  .card {
    width: 350px;
    padding: 30px;
    margin: 5em;
    transition: 0.3s ease;

    ${media.phone`
      margin: 8em auto 0;
    `};
  }

  .entry-title {
    background: rgba(0, 0, 0, 0.5);
    background-size: 200%;
    display: inline;
    transition: 0.5s ease-in-out;
    font-family: arial, sans-serif;
    text-transform: uppercase;
    background-position: -100% 0;

    a {
      color: white;
      line-height: 1.3;
      text-decoration: none;
    }
  }

  small {
    margin-top: 20px;
    display: block;
    font-family: raleway, arial, sans-serif;
    color: white;
    text-transform: uppercase;

    a {
      font-weight: 700;
      color: white;
      text-decoration: none;
    }
  }

  span {
    display: block;
    margin-top: 10px;
    font-family: raleway, arial, sans-serif;
    font-weight: 700;
    color: #16a085;

    a {
      color: white;
    }
  }
`;
