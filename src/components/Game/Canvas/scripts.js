export const getOffset = (event, zoom = false) => {
  const rect = event.target.getBoundingClientRect()
  const x = event.targetTouches[0].pageX - rect.left
  const y = event.targetTouches[0].pageY - rect.top

  return zoom === false ? {
    x,
    y
  } : {
    x: x / zoom,
    y: y / zoom
  }
}
