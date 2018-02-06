export const ZOOM_CHANGE = 'ZOOM_CHANGE'
export const zoomChange = ({ value }) => {
  localStorage.setItem('canvasZoom',
    JSON.stringify(value)
  )

  return {
    type: ZOOM_CHANGE,
    payload: { value }
  }
}
