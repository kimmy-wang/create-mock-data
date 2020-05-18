import * as actionTypes from "./action-types";

export const changeDarkMode = darkMode => {
  return {type: actionTypes.DARK_MODE_CHANGED, darkMode: darkMode}
}
