import {
  GET_ALBUMS,
  GET_ALBUM,
  ADD_IMAGE,
  CREATE_ALBUM,
  POPUP_TOGGLE
} from "../actions/albums";

export default (state, action) => {
  // console.log("action", action);
  console.log("state", state);
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        ...action.payload
      };
    case GET_ALBUM:
      return {
        ...action.payload
      };
    case CREATE_ALBUM:
      return {
        ...action.payload
      };
    case ADD_IMAGE:
      return {
        ...state,
        ...action.payload
      };
    case POPUP_TOGGLE:
      if (state.togglePopup == true) {
        return {
          ...state,
          togglePopup: false
        };
      } else {
        return {
          ...state,
          togglePopup: true
        };
      }

    default:
      return state;
  }
};
