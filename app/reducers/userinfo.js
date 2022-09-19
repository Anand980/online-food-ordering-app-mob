import * as actionTypes from '../constant/userInfo'

const initialState = {
  cityName : 'Sydney',
  username: ''
}

export default function userinfo (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERINFO_LOGIN:
      return action.data
    case actionTypes.USERINFO_UPDATE:
      return action.data
    default:
      return state
  }
}
