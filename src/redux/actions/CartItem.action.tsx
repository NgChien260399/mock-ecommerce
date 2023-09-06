import { actionTypes } from "../type/action.type";
export function addItemToCart(payload: any) {
  return { type: actionTypes.ADD_ITEM_TO_CART, payload };
}
