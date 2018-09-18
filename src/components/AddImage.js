import React, { Component } from "react";

const AddImage = () => {
  return (
    <div>
      <form>
        <input type="text" name="albumName" />
        <button onClick={this.handleSave}>Save</button>
      </form>
    </div>
  );
};

export default AddImage;
