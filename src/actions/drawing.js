export const SET_ERASER = 'SET_ERASER'
export const setEraser = () => {
  return {
    type: SET_ERASER
  }
}

export const SET_PEN = 'SET_PEN'
export const setPen = () => {
  return {
    type: SET_PEN
  }
}

export const CHANGE_COLOR = 'CHANGE_COLOR'
export const changeColor = value => {
  return {
    type: CHANGE_COLOR,
    payload: value
  }
}


/*export const REQUEST_CHANGE_COLOR = 'REQUEST_CHANGE_COLOR'

//thunk action creator
export function requestChangeColor({ name, value }){
  return dispatch => {
    dispatch(
      changeColor({ name, value })
    )

    dispatch(
      pushActionToChunk({
        type: 'CHANGE_COLOR',
        payload: { name, value }
      })
    )
  }
}*/
