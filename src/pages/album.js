// @flow
import React, { Component } from "react";
import { styled } from "fusion-plugin-styletron-react";

class Album extends Component {
  constructor() {
    super();
    this.state = {
      albumArray: [
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
      ]
    };
  }

  handleSave = () => {
    console.log("save button clicked");
  };

  render() {
    // console.log("this.state.albumArray", this.state.albumArray);
    return (
      <div style={albumContainer}>
        {this.state.albumArray.map((image, i) => (
          <div
            key={i}
            style={{
              height: image.height,
              width: image.width,
              ...bg
            }}
          >
            {image.height}
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
  backgroundColor: "gray",
  margin: "20px"
};

export default Album;
