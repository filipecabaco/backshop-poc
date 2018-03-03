import { MenuAction } from '../actions/menu';
import { StoreState } from '../stores/store';
import { CHANGE_SECTION } from '../actions/menu';

export function menuReducer(state: StoreState, action: MenuAction): StoreState {
  switch (action.type) {
    case CHANGE_SECTION:
      return { ...state, section: action.section };
    default:
      return { ...state }
  }
}