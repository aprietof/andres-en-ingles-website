import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function IframeResponsive({ title, src }) {
  return (
    <Wrapper>
      <iframe allowFullScreen frameBorder="0" height="100%" src={src} title={title} width="100%" />
    </Wrapper>
  );
}

IframeResponsive.defaultProps = {
  title: '',
};

IframeResponsive.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;

  iframe {
    left: 0;
    position: absolute;
    top: 0;
  }
`;
