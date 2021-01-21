import { CONSTANTS } from "../actions";

export const updateCardPosition = (result) => {
  return {
    type: CONSTANTS.UPDATE_CARD_POSITION,
    payload: result,
  };
};
