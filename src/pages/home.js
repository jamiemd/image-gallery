// @flow
import React, { Component } from "react";
import { styled } from "fusion-plugin-styletron-react";
import { Router, Route, Link } from "fusion-plugin-react-router";
import { connect } from "react-redux";
import Album from "./album.js";
import CreateAlbum from "../Components/create-album.js";
import { getAlbums, createAlbum } from "../actions/albums";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    return (
      <div style={homeContainer}>
        <h1>Image Gallery</h1>
        <CreateAlbum history={this.props.history} />
        <div style={albumsContainer}>
          {this.props.albumsArray.map((album, i) => (
            <Link style={albumContainer} key={i} to={`/findAlbum/${album._id}`}>
              <h4>{album.name}</h4>
              {album.images.map((image, i) => (
                <div key={i}>
                  <img style={imageContainer} src={image.imagePreviewUrl} />
                </div>
              ))}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const homeContainer = {
  fontFamily: "HelveticaNeue-Light, Arial",
  margin: "auto",
  width: "95%"
};

const albumsContainer = {
  margin: "30px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 350px)",
  gridGap: "5px"
};

const albumContainer = {
  backgroundColor: "gray",
  margin: "20px",
  width: "300px",
  height: "300px"
};

const imageContainer = {
  maxWidth: "300px",
  maxHeight: "300px"
};

const mapStateToProps = state => {
  return {
    albumsArray: state.albums || [],
    columns: state.columns || []
  };
};

export default connect(
  mapStateToProps,
  { getAlbums, createAlbum }
)(Home);
