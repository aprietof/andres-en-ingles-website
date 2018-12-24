import React, { Component } from 'react';
import axios from 'axios';
import InstagramTile from './InstagramTile';

const pixeleeApiURL = `https://instafeed-api.pixlee.com/getJSON?api_key=${
  process.env.GATSBY_INSTAGRAM_API_KEY
}&page=1&filter_id=7259&unique_id=0&per_page=30&sortType=`;

export default class HomePageInstagram extends Component {
  state = {
    data: { data: [] },
    // loading: true,
  };

  componentDidMount() {
    this._isMounted = true;
    this.getData();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getData = () => {
    axios.get(pixeleeApiURL).then(({ data }) => {
      if (this._isMounted) this.setState({ data }); // loading: false
    });
  };

  render() {
    const { data } = this.state;
    const photos = data.data.slice(0, 15);

    return (
      <article className="pa3">
        <h2 className="f3 fw4 pa3 mv0" style={{ textAlign: 'center' }}>
          Instagram
        </h2>
        <div className="cf pa2">
          {photos.map(photo => (
            <InstagramTile key={photo.id} href={photo.platform_link} src={photo.big_url} title={photo.title} />
          ))}
        </div>
      </article>
    );
  }
}
