import { ADD_TO_CART, DEL_FROM_CART } from "../../constant/constant";

export const gheItemAction = (gheItem, soGhe) => {
  return {
    type: ADD_TO_CART,
    payload: gheItem,
    id: soGhe,
  };
};

export const deleteAction = (soGhe) => {
  return {
    type: DEL_FROM_CART,
    payload: soGhe,
    id: soGhe,
  };
};
