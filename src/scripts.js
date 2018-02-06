import { compose, always, tap } from 'ramda'

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
  console.log('min', min)
  return value => {
    console.log('value', value)
    console.log('test', value < min)
    return value < min ? min : value
  }
}

const roundPercent = number =>
  Math.round(number * 10) / 10

export const limitZoomToEdges =
  compose(
    tap(e => console.log(3, e)),
    limitToMax(
      calcMaxZoom
    ),
    tap(e => console.log(2, e)),
    () => 0.7,
    //limitToMin(
    //  always(0.7)
    //),
    tap(e => console.log(1, e)),
    roundPercent
  )
