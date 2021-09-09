import { FETCH_USER } from "../actions/types";

function authReducer(state = null, action) {
  switch (action.type) {
    // Return false when logged out, userID when logged in and
    // null when waiting on network req
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

export default authReducer;
