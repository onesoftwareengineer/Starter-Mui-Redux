import { keyMirror } from "@/helpers/objectHelpers";

// const apiUrl = import.meta.env.VITE_REST_API_HOST;
const loremIpsumApiUrl = import.meta.env.VITE_LOREM_IPSUM_API_URL;

export const appActions = keyMirror(
  "SET_LOREM_IPSUM_TEXT",
  "SET_IS_LOADER_VISIBLE"
);

export const setIsLoaderVisible = (isVisible) => ({
  type: "SET_IS_LOADER_VISIBLE",
  payload: isVisible,
});

export const getLoremIpsumText = () => {
  return async (dispatch) => {
    dispatch(setIsLoaderVisible(true));

    try {
      dispatch(setIsLoaderVisible(true));

      const response = await fetch(loremIpsumApiUrl);
      const data = await response.text();

      if (response?.ok) {
        dispatch({
          type: appActions.SET_LOREM_IPSUM_TEXT,
          payload: data,
        });
      }
    } catch (err) {
      console.log("err");
    } finally {
      dispatch(setIsLoaderVisible(false));
    }
  };
};
