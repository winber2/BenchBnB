import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from "../actions/session_actions";
import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState = _nullUser;
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
