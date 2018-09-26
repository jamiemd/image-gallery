// @flow
import React, { Component } from "react";
import { styled } from "fusion-plugin-styletron-react";
import { findAlbum } from "../actions/albums";
import { connect } from "react-redux";
import { Router, Route, Link } from "fusion-plugin-react-router";
import AddImage from "../Components/add-image";

class Album extends Component {
  componentDidMount() {
    const albumId = this.props.match.params.id;
    this.props.findAlbum(albumId);
  }

  render() {
    return (
      <div style={albumContainer}>
        <Link style={homeLink} to="/">
          Home
        </Link>
        <div style={albumName}>{this.props.album.name}</div>
        <AddImage albumId={this.props.match.params.id} />
        <div style={imagesBox}>
          <div style={imagesContainer}>
            {this.props.album.images.map((image, i) => (
              <img style={imageContainer} src={image.imagePreviewUrl} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const albumContainer = {
  fontFamily: "HelveticaNeue-Light, Arial",
  width: "80%",
  margin: "auto",
  paddingTop: "20px"
};

const imagesBox = {
  justifyContent: "center",
  margin: "40px"
};

const imagesContainer = {
  margin: "5px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 300px)",
  justifyContent: "space-around"
};

const imageContainer = {
  maxWidth: "300px",
  maxHeight: "300px",
  backgroundColor: "#F0F0F0"
};

const homeLink = {
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "600"
};

const albumName = {
  fontSize: "25px",
  textAlign: "center",
  fontWeight: "500"
};

const mapStateToProps = state => {
  return {
    album: state.album || { images: [] }
  };
};

export default connect(
  mapStateToProps,
  { findAlbum }
)(Album);
