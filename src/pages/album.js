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
        <Link to="/">Home</Link>
        <div>{this.props.album.name}</div>
        <AddImage albumId={this.props.match.params.id} />
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
  return {
    album: state.album || { images: [] }
  };
};

export default connect(
  mapStateToProps,
  { findAlbum }
)(Album);
