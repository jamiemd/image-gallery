import {
  GET_ALBUMS,
  GET_ALBUM,
  ADD_IMAGES,
  CREATE_ALBUM
} from "../actions/albums";

export default (state, action) => {
  // console.log("action", action);
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        ...action.payload
      };
    case GET_ALBUM:
      return {
        ...state,
        ...action.payload
      };
    case CREATE_ALBUM:
      return {
        ...action.payload
      };
    case ADD_IMAGES:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
