import React from 'react';
import styled from 'styled-components';

export default function HeroCard() {
  return (
    <HeroCardWrapper>
      <h1 className="f3 f1-l fw2 mb3 mt4 mt0-ns">Holaaa!!!!!!</h1>
      <h2 className="f5 f3-l fw1 mb4 mb5-l lh-title">
        Soy Andrés! también me conocen como absolutandres. <br />
        Bienvenido a mi website!!!
      </h2>
    </HeroCardWrapper>
  );
}

const HeroCardWrapper = styled.div`
  margin-top: 0.75em;
`;
