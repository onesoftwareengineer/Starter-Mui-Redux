import u from "updeep";

import { appActions } from "@/store/actions/index";

const initialState = {
  isLoaderVisible: false,
  loremIpsumText: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appActions.SET_IS_LOADER_VISIBLE:
      return u({ isLoaderVisible: action.payload }, state);

    case appActions.SET_LOREM_IPSUM_TEXT:
      return u({ loremIpsumText: action.payload }, state);

    default:
      return state;
  }
};
