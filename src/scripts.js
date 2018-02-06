import { compose, always } from 'ramda'

const initialCanvasSize = {
  width: 550,
  height: 550
}

const calcMaxZoom = () =>
  Math.min(
    /* maxVerticalZoom */
    window.innerHeight / initialCanvasSize.height,
    /* maxHorizontalZoom */
    (window.innerWidth - 250 /* panel */) / initialCanvasSize.width
  )

const limitToMax = maxFn => {
  const max = maxFn()
  return value =>
    value > max ? max : value
}

const limitToMin = minFn => {
  const min = minFn()
  return value =>
    value < min ? min : value
}

const roundPercent = number =>
  Math.round(number * 10) / 10

export const limitZoomToEdges =
  compose(
    limitToMax(
      calcMaxZoom
    ),
    limitToMin(
      always(0.7)
    ),
    roundPercent
  )
