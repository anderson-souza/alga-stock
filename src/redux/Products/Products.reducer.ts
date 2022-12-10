import Products, { Product } from "../../shared/Table/Table.mockdata";
import { Action } from "..";

const productReducer = (state = Products, action: Action): Product[] => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return [...action.payload];
    default:
      return state;
  }
};

export default productReducer;
