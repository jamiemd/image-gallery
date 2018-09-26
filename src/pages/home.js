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
    console.log("this.props", this.props);
    return (
      <div style={homeContainer}>
        <h1>Image Gallery</h1>
        <CreateAlbum history={this.props.history} />
        <div style={albumsContainer}>
          {this.props.albumsArray.map((album, i) => (
            <Link style={albumContainer} key={i} to={`/findAlbum/${album._id}`}>
              <h4 style={h4Styles}>{album.name}</h4>
              <img
                style={imageContainer}
                src={album.images[0].imagePreviewUrl}
              />
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
  margin: "5px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 350px)",
  justifyContent: "center"
};

const albumContainer = {
  backgroundColor: "#F0F0F0",
  margin: "20px",
  width: "300px",
  height: "300px",
  borderRadius: "12px",
  padding: "5px",
  textDecoration: "none"
};

const imageContainer = {
  maxWidth: "300px",
  maxHeight: "300px"
};

const h4Styles = {
  textAlign: "center",
  color: "black"
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
