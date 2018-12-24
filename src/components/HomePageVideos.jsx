import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import VideoListingsLoader from './VideoListingsLoader';
import VideoListing from './VideoListing';
import ButtonLink from './ButtonLink';
import mountYoutubeSubscribeScript from '../../utils/mountYoutubeSubscribeScript';
import media from '../../style-templates/media';

const youtubeAppKey = process.env.GATSBY_YOUTUBE_APP_KEY;
const andresChannelId = process.env.GATSBY_YOUTUBE_CHANNEL_ID;
const searchPart = 'snippet,id';
const order = 'date';
const maxResults = 20;

const andresYoutubeApiURL = `https://www.googleapis.com/youtube/v3/search?key=${youtubeAppKey}&channelId=${andresChannelId}&part=${searchPart}&order=${order}&maxResults=${maxResults}`;

export default class HomePageVideos extends Component {
  state = {
    data: { items: [] },
    loading: true,
  };

  componentDidMount() {
    this._isMounted = true;
    this.getData();
    mountYoutubeSubscribeScript();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getData = () => {
    axios.get(andresYoutubeApiURL).then(({ data }) => {
      if (this._isMounted) this.setState({ data, loading: false });
    });
  };

  render() {
    const { data, loading } = this.state;
    const videos = data.items.slice(0, 4);

    return (
      <React.Fragment>
        <section className="mw7 center avenir pa4-m">
          <h2 className="baskerville fw1 ph3 ph0-l">Mis Videos Mas Recientes</h2>
          <SubscribeButtonWrapper>
            <div
              className="g-ytsubscribe"
              data-channelid="UCZUiKfemh1zGgAAL8qeWPMg"
              data-layout="default"
              data-count="default"
            />
            <p className="f6 lh-copy mv0">⬆ Suscribete ⬆</p>
          </SubscribeButtonWrapper>
          {loading ? (
            <VideoListingsLoader />
          ) : (
            videos.map(video => <VideoListing video={video} key={video.id.videoId} />)
          )}
          <ButtonLink text="Mas Videos" href="https://www.youtube.com/channel/UCZUiKfemh1zGgAAL8qeWPMg" />
        </section>
      </React.Fragment>
    );
  }
}

const SubscribeButtonWrapper = styled.div`
  ${media.tablet`
    padding: 0 1em;
  `};
`;
