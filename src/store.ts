import { legacy_createStore as createStore } from "redux";

export interface StoreState {
  isSidebarVisible: boolean;
}

// Actions
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export type TOGGLE_SIDEBAR = typeof TOGGLE_SIDEBAR;
export interface ToggleSidebar {
  type: TOGGLE_SIDEBAR;
}
export const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });

// Store
export const initialState: StoreState = { isSidebarVisible: false };

// Reducer
export const reducer = (state: StoreState = initialState, action: ToggleSidebar): StoreState => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, isSidebarVisible: !state.isSidebarVisible };
    default:
      return state;
  }
};

const devTools =
  typeof window !== "undefined" && (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : undefined;

export const store = createStore(reducer as any, initialState as any, devTools);
