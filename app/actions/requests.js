import {CHANGE_SELECTED_POSTIT} from '../constants/action-types'
import {NavigationActions} from "react-navigation";


export const changePostit = (data) => {
  return (dispatch) => {
      dispatch({
        type: CHANGE_SELECTED_POSTIT,
        payload: data
      });
      dispatch(NavigationActions.navigate({ routeName: 'Change' }))
  };
};
