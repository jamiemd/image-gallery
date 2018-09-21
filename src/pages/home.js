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
        <Link to={"/album"}>
          {this.props.albumsArray ? (
            <AlbumsContainer>
              {this.props.albumsArray.map((album, i) => (
                <AlbumContainer key={i}>{album[0].height}</AlbumContainer>
              ))}
            </AlbumsContainer>
          ) : null}
        </Link>
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
  width: "300px",
  height: "300px",
  backgroundColor: "gray"
});

const mapStateToProps = state => {
  console.log("state", state);
  return {};
};

export default connect(
  mapStateToProps,
  { getAlbums, createAlbumName }
)(Home);
