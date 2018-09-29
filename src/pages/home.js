// @flow
import React, { Component } from "react";
import { Router, Route, Redirect, Link } from "fusion-plugin-react-router";
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
      <div style={homePageContainer}>
        <h1 style={titleContainer}>Image Gallery</h1>
        <CreateAlbum history={this.props.history} />
        <div style={albumsContainer}>
          {this.props.albumsArray.map((album, i) => (
            <Link style={albumContainer} key={i} to={`/findAlbum/${album._id}`}>
              <div style={imageContainer}>
                {album.images.length && album.images[0].imagePreviewUrl ? (
                  <img
                    style={imagePreview}
                    src={album.images[0].imagePreviewUrl}
                  />
                ) : (
                  <div style={imagePreview}>Add Image</div>
                )}
              </div>
              <div style={albumTitle}>{album.name}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const homePageContainer = {
  fontFamily: "HelveticaNeue-Light, Arial",
  margin: "auto",
  width: "95%"
};

const titleContainer = {
  textAlign: "center",
  margin: "50px"
};

const albumsContainer = {
  margin: "5px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 350px)",
  justifyContent: "center"
};

const albumContainer = {
  border: "1px solid",
  margin: "20px",
  width: "300px",
  height: "350px",
  textDecoration: "none",
  alignContent: "space-between",
  alignSelf: "center"
};

const imageContainer = {
  width: "300px",
  height: "300px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#EDF1F3"
};

const imagePreview = {
  maxWidth: "300px",
  maxHeight: "300px",
  alignSelf: "center"
};

const albumTitle = {
  textAlign: "center",
  color: "black",
  fontSize: "20px",
  paddingTop: "15px"
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
