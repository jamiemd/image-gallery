import axios from "axios";

export const GET_ALBUMS = "GET_ALBUMS";
export const GET_ALBUM = "GET_ALBUM";
export const CREATE_ALBUM = "CREATE_ALBUM";
export const ADD_IMAGE = "ADD_IMAGE";
export const SHOW_DELETE_POPUP = "SHOW_DELETE_POPUP";
export const SHOW_IMAGE_POPUP = "SHOW_IMAGE_POPUP";
export const DELETE_ALBUM = "DELETE_ALBUM";
export const DELETE_IMAGE = "DELETE_IMAGE";

const ROOT_URL = "http://localhost:3000/api";

// get all albums
export const getAlbums = () => {
  return dispatch => {
    axios
      .get(`${ROOT_URL}/getAlbums`)
      .then(res => {
        console.log("res.data", res.data);
        dispatch({
          type: GET_ALBUMS,
          payload: res.data
        });
      })
      .catch(error => {
        console.log("error", error.response);
      });
  };
};

// find album
export const findAlbum = albumId => {
  return dispatch => {
    axios
      .get(`${ROOT_URL}/findAlbum/${albumId}`)
      .then(res => {
        dispatch({
          type: GET_ALBUM,
          payload: res.data
        });
      })
      .catch(error => {
        console.log("error", error.response);
      });
  };
};

// create album
export const createAlbum = (albumName, history) => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/create-album`, { albumName })
      .then(res => {
        console.log("res in create album", res);
        dispatch({
          type: CREATE_ALBUM,
          payload: res.data
        });
        history.push("/findAlbum/" + res.data.albumId);
      })
      .catch(error => {
        console.log("error.response in create album", error.response);
      });
  };
};

// add images
export const addImage = (image, albumId) => {
  return dispatch => {
    axios
      .put(`${ROOT_URL}/add-image/${albumId}`, { image })
      .then(res => {
        console.log("res.data in add image", res.data);
        dispatch({
          type: ADD_IMAGE,
          payload: res.data
        });
      })
      .catch(error => {
        console.log("error.response", error.response);
      });
  };
};

// popup
export const showDeletePopup = imageToDelete => {
  return {
    type: SHOW_DELETE_POPUP,
    payload: imageToDelete
  };
};

export const showImagePopup = imageToShow => {
  return {
    type: SHOW_IMAGE_POPUP,
    payload: imageToShow
  };
};

export const deleteAlbum = albumId => {
  return dispatch => {
    axios
      .delete(`${ROOT_URL}/delete-album/${albumId}`)
      .then(res => {
        disptach({
          type: DELETE_ALBUM,
          payload: res.data
        });
      })
      .catch(error => {
        console.log("error.response", error.response);
      });
  };
};

export const deleteImage = imageToDelete => {
  return dispatch => {
    axios
      .delete(`${ROOT_URL}/delete-image`, { imageToDelete })
      .then(res => {
        disptach({
          type: DELETE_IMAGE,
          payload: res.data
        });
      })
      .catch(error => {
        console.log("error.response", error.response);
      });
  };
};
