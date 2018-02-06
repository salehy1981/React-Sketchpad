import { compose, defaultTo } from 'ramda'
import {
  ZOOM_CHANGE
} from '../actions/game'
import { limitZoomToEdges } from '../scripts'

const getCanvasZoom = compose(
  limitZoomToEdges,
  parseFloat,
  defaultTo(1),
  localStorage.getItem.bind(localStorage, 'canvasZoom')
)

const initialState = () => ({
  canvasZoom: getCanvasZoom()
})

//redux selectors
export const getZoomCutted = state => {
  const { canvasZoom } = state
  return canvasZoom
}

export default (state = initialState(), action) => {
  const { type, payload } = action
  switch(type){
    case ZOOM_CHANGE:
      return {
        ...state,
        canvasZoom: payload.value
      }

    default:
      return state
  }
}
