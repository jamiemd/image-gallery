// @flow
import React, { Component } from "react";
import { styled } from "fusion-plugin-styletron-react";
import { Router, Route, Link } from "fusion-plugin-react-router";
import { connect } from "react-redux";

import Album from "./album.js";
import { getAlbums, createAlbumName } from "../actions/albums";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    const albumName = this.state.value;
    this.props.createAlbumName({ albumName });
    const { history } = this.props;
    history.push("/create-album");
    event.preventDefault();
  };

  render() {
    return (
      <HomeContainer>
        <h1>Image Gallery</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Create New Album</label>
          <input type="text" onChange={this.handleChange} />
          <button type="submit">Continue</button>
        </form>
        <div>
          {this.props.albumsArray ? (
            <AlbumsContainer>
              {this.props.albumsArray.map((album, i) => (
                <AlbumContainer key={i}>
                  <h4>{album.name}</h4>
                  {album.images.map((image, i) => (
                    <Link key={i} to={`/findAlbum/${album._id}`}>
                      <img style={imageContainer} src={image.imagePreviewUrl} />
                    </Link>
                  ))}
                </AlbumContainer>
              ))}
            </AlbumsContainer>
          ) : null}
        </div>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled("div", {
  fontFamily: "HelveticaNeue-Light, Arial",
  margin: "auto",
  width: "80%"
});

const AlbumsContainer = styled("div", {
  margin: "30px",
  display: "flex"
});

const AlbumContainer = styled("div", {
  margin: "20px",
  backgroundColor: "white"
});

const imageContainer = {
  maxWidth: "300px",
  maxHeight: "300px"
};

const mapStateToProps = state => {
  return {
    albumsArray: state.albums
  };
};

export default connect(
  mapStateToProps,
  { getAlbums, createAlbumName }
)(Home);
