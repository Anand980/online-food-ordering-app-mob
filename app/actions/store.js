import * as actionTypes from '../constant/store'

export const update = (data) => {
  return {
    type: actionTypes.STORE_UPDATE,
    data
  }
}

export const add = (item) => {
  return {
    type: actionTypes.STORE_ADD,
    data: item
  }
}

export const remove = (item) => {
  return {
    type: actionTypes.STORE_REMOVE,
    data: item
  }
}