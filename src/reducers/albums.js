import { GET_ALBUMS, CREATE_ALBUM_NAME, CREATE_ALBUM } from "../actions/albums";

const initialState = {
  albumsArray: [],
  imagePreview: ""
};

export default (state = initialState, action) => {
  console.log("state", state);
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        ...action.payload
      };
    case CREATE_ALBUM_NAME:
      return {
        ...state,
        ...action.payload
      };
    case CREATE_ALBUM:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
