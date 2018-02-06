import {
  SET_ERASER,
  SET_PEN,
  CHANGE_COLOR,
} from '../actions/drawing'

const initialState = () => ({
  // 'pen' or 'eraser'
  mode: 'pen',
  pen: {
    color: '#333',
    width: 6
  }
})

export default (state = initialState(), action) => {
  const { type, payload } = action
  switch(type){
    case CHANGE_COLOR:
      return {
        ...state,
        mode: 'pen',
        pen: {
          ...state.pen,
          color: payload
        }
      }

    case SET_ERASER:
      return {
        ...state,
        mode: 'eraser'
      }

    case SET_PEN:
      return {
        ...state,
        mode: 'pen'
      }

    default:
      return state
  }
}
