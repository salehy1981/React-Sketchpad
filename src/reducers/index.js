import { combineReducers } from 'redux'

import drawing from './drawing'
import game from './game'

const rootReducer = combineReducers({
  drawing,
  game
})

export default rootReducer
