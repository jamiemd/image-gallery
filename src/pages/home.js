// @flow
import React, { Component } from "react";
import { styled } from "fusion-plugin-styletron-react";
import { Router, Route, Link } from "fusion-plugin-react-router";
import { connect } from "react-redux";

import Album from "./album.js";
import AddImage from "../components/AddImage.js";
import { getAlbums } from "../actions/albums";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      albumsArray: [
        [
          {
            height: 100,
            width: 300
          },
          {
            height: 200,
            width: 300
          },
          {
            height: 250,
            width: 200
          }
        ],
        [
          {
            height: 420,
            width: 300
          },
          {
            height: 200,
            width: 300
          },
          {
            height: 500,
            width: 300
          }
        ],
        [
          {
            height: 360,
            width: 300
          },
          {
            height: 200,
            width: 300
          }
        ],
        [
          {
            height: 360,
            width: 300
          },
          {
            height: 200,
            width: 300
          }
        ]
      ]
    };
  }

  handleAddImage = () => {
    console.log("add image clicked");
  };

  render() {
    // console.log("this.state.albumsArray", this.state.albumsArray);
    return (
      <HomeContainer>
        <h1>Image Gallery</h1>
        <button onClick={this.handleAddImage}>+</button>
        <Link to={"/album"}>
          <AlbumsContainer>
            {this.state.albumsArray.map((album, i) => (
              <AlbumContainer key={i}>{album[0].height}</AlbumContainer>
            ))}
          </AlbumsContainer>
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
  return {};
};

export default connect(
  mapStateToProps,
  { getAlbums }
)(Home);
