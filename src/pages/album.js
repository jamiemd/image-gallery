// @flow
import React, { Component } from "react";
import { styled } from "fusion-plugin-styletron-react";
import { findAlbum } from "../actions/albums";
import { connect } from "react-redux";
import { Router, Route, Link } from "fusion-plugin-react-router";

class Album extends Component {
  componentDidMount() {
    const albumId = this.props.match.params.id;
    console.log("albumId", albumId);
    this.props.findAlbum(albumId);
  }

  handleSave = () => {
    console.log("save button clicked");
  };

  render() {
    console.log("this.props.album.images", this.props.album.images);
    return (
      <div style={albumContainer}>
        <Link to="/">Home</Link>
        <div>{this.props.album.name}</div>
        {this.props.album.images.map((image, i) => (
          <div key={i} style={bg}>
            <img style={imageContainer} src={image.imagePreviewUrl} />
          </div>
        ))}
      </div>
    );
  }
}

const albumContainer = {
  width: "80%",
  display: "flex",
  justifyContent: "center"
};

const bg = {
  backgroundColor: "white",
  margin: "20px"
};

const imageContainer = {
  maxWidth: "300px",
  maxHeight: "300px"
};

const mapStateToProps = state => {
  console.log("state", state);
  return {
    album: state.album || { images: [] }
  };
};

export default connect(
  mapStateToProps,
  { findAlbum }
)(Album);
