import * as actionTypes from '../constant/userInfo'

export const login = (data) => {
  return {
    type: actionTypes.USERINFO_LOGIN,
    data
  }
}

export const update = (data) => {
  return {
    type: actionTypes.USERINFO_UPDATE,
    data
  }
}

