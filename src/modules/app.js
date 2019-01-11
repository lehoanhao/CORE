import {
  CHANGE_LANGUAGE
} from '../constants/ActionTypes'

const initialState = {
  lang: localStorage.language || {name: 'en', value: null}
}
//REGUCERS
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      if (typeof (Storage) !== "undefined") {
        localStorage.setItem("language", action.data);
      } else {
        // Sorry! No Web Storage support..
      }
      return {
        ...state,
        lang: action.data
      }
    default:
      return state
  }
}

//ACTION
export const changeLanguage = (newLanguage) => {
  return dispatch => {
    dispatch({
      type: CHANGE_LANGUAGE,
      data: newLanguage
    })
  }
}
