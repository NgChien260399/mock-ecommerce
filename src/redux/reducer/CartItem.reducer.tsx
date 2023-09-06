import { actionTypes } from "../type/action.type";
const initState: any = [
  {
    id: "6TP23W005-SL213",
    product_name: "Áo polo nữ interlock dáng ngắn",
    price: 299000,
    imageUrl:
      "https://canifa.com/img/1000/1500/resize/6/t/6tp23w005-sl213-2-thumb.webp",
    color: "Navy",
    size: "L",
    qty: 1,
  },
];
interface actionProps {
  payload?: any;
  type: string | any;
}
const cartItemReduceer = (state = initState, action: actionProps) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART: {
      console.log(action.payload);
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default cartItemReduceer;
