import { GET_ALBUMS } from "../actions/albums";

const initialState = {
  albumsArray: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
