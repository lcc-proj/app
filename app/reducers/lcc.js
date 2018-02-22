// @flow

import {
  CHANGE_SELECTED_POSTIT,
} from '../constants/action-types';

const initialState = {
  selected_postit: null
};


export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case CHANGE_SELECTED_POSTIT: {
      return { ...state,
        selected_postit: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};