import { ADD_TO_CART, DEL_FROM_CART } from "../../constant/constant";
import { DanhSachGheNgoi } from "../../dataGhe";

const initialState = {
  dataGhe: DanhSachGheNgoi,
  cart: [{ soGhe: "A1", gia: 75000, daDat: false }],
  tinhTrang: "available",
};

export const MovieReducer = (state = initialState, { type, payload, id }) => {
  switch (type) {
    case ADD_TO_CART: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.soGhe === id;
      });

      if (index !== -1) {
        cloneCart.splice(index, 1);
      } else {
        !payload.daDat && cloneCart.push(payload);
      }

      state.cart = cloneCart;
      return { ...state };
    }

    case DEL_FROM_CART: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.soGhe === payload.soGhe;
      });
      cloneCart.splice(index, 1);

      state.cart = cloneCart;
      return { ...state };
    }

    default:
      return state;
  }
};
