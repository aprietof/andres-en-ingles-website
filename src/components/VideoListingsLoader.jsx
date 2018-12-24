import React from 'react';
import styled from 'styled-components';
import media from '../../style-templates/media';

const VideoListingsLoader = () => (
  <React.Fragment>
    <VideoListingLoader />
    <VideoListingLoader />
    <VideoListingLoader />
    <VideoListingLoader />
  </React.Fragment>
);

export default VideoListingsLoader;

const VideoListingLoader = () => (
  <article className="bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
      <div className="flex flex-column flex-row-ns">
        <PlaceholderImage className="pr3-ns mb4 mb0-ns w-100 w-40-ns" />
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 baskerville mt0 lh-title">Loading...</h1>
          <p className="f6 f5-l lh-copy">Loading...</p>
          <p className="f6 lh-copy mv0">Loading...</p>
        </div>
      </div>
    </a>
  </article>
);

const PlaceholderImage = styled.div`
  background: #ccc;
  padding-bottom: 22.51%;

  ${media.phone`
    padding-bottom: 56.28%;
  `};
`;
