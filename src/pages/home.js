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
              <div style={imageBox}>
                <img
                  style={imageContainer}
                  src={album.images[0].imagePreviewUrl}
                />
              </div>
              <div style={albumTitle}>{album.name}</div>
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
  border: "1px solid",
  margin: "20px",
  width: "300px",
  height: "350px",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  alignContent: "space-between"
};

const imageContainer = {
  maxWidth: "300px",
  maxHeight: "300px",
  alignSelf: "center"
};

const imageBox = {
  width: "300px",
  height: "300px",
  backgroundColor: "#F5F5F5",
  display: "flex",
  justifyContent: "center"
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
