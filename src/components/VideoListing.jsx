import React, { Component } from 'react';
import { startCase } from 'lodash';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { format } from 'date-fns';
import ModalVideo from 'react-modal-video';

import 'react-modal-video/scss/modal-video.scss';

const fadeInAnimation = keyframes`${fadeIn}`;

export default class VideoListing extends Component {
  state = { isOpen: false };

  onOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  onClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { video } = this.props;
    const { isOpen } = this.state;

    return (
      <VideoListingWrapper className="bb b--black-10">
        <Listing className="db pv4 ph3 ph0-l no-underline black dim" onClick={this.onOpen}>
          <div className="flex flex-column flex-row-ns">
            <div className="mb4 mb0-ns w-100 w-40-ns" style={{ borderRadius: '2px' }}>
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} style={{ width: '100%' }} />
            </div>
            <div className="w-100 w-60-ns pl3-ns">
              <h1 className="f3 fw1 baskerville mt0 lh-title">{startCase(video.snippet.title.toLowerCase())}</h1>
              <p className="f6 f5-l lh-copy">{video.snippet.description}</p>
              <p className="f6 lh-copy mv0">{format(video.snippet.publishedAt, 'MMMM D YYYY')}</p>
            </div>
          </div>
        </Listing>

        <ModalVideo isOpen={isOpen} videoId={video.id.videoId} onClose={this.onClose} />
      </VideoListingWrapper>
    );
  }
}

const VideoListingWrapper = styled.article`
  animation: 0.5s ${fadeInAnimation};
`;

const Listing = styled.div`
  cursor: pointer;
`;

VideoListing.propTypes = {
  video: PropTypes.object.isRequired,
};
