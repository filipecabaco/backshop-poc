import { SectionAction } from '../actions/sections'
import { StoreState } from '../stores/store'
import { CHANGE_SECTION } from '../actions/sections'

export function menuReducer(state: StoreState, action: SectionAction): StoreState {
  switch (action.type) {
    case CHANGE_SECTION:
      return { ...state, section: action.section };
    default:
      return { ...state }
  }
}