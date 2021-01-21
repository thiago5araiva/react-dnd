import { CONSTANTS } from "../actions";

export const addCard = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title,
  };
};
