import * as actionTypes from '../constant/store'

const initialState = []

export default function store (state = initialState, action) {
  switch (action.type) {
    case actionTypes.STORE_UPDATE:
      return action.data
    case actionTypes.STORE_ADD:
      state.unshift(action.data)
      return state
    case actionTypes.STORE_REMOVE:
      return state.filter(item=>{
        if (item.id !== action.data.id){
          return item
        }
      })
    default:
      return state
  }
}
