import React, { Component } from "react";
import { connect } from "react-redux";
import { addImage } from "../actions/albums";

class AddImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: ""
    };
  }

  handleUpload = event => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file.name,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  handleSubmit = event => {
    event.preventDefault();
    const image = {
      file: this.state.file,
      imagePreviewUrl: this.state.imagePreviewUrl
    };
    this.props.addImage(image, this.props.albumId);
  };

  render() {
    return (
      <div style={addImagePageContainer}>
        <div style={formStyle}>
          <div style={formLabelContainer}>
            <label>Add Image</label>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              style={inputStyle}
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={e => this.handleUpload(e)}
            />
            <button style={buttonSave}>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

const addImagePageContainer = {
  alignContent: "center",
  margin: "50px"
};

const formStyle = {
  width: "300px",
  margin: "auto",
  padding: "20px"
};

const formLabelContainer = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "10px"
};

const inputStyle = {
  border: "none"
};

const buttonSave = {
  paddingTop: "1px",
  border: "none",
  border: ".5px solid gray",
  padding: "8px 8px",
  fontSize: "15px"
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { addImage }
)(AddImage);
