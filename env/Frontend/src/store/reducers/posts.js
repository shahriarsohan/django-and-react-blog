import _ from "lodash";
import * as actionTypes from "../actions/actiontypes";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return { ...state, ..._.mapKeys(action.payload, "slug") };
    default:
      return state;
  }
};
