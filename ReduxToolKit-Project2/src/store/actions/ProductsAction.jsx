import axios from "axios";
import { getProducts } from "../reducers/ProductSlice";

export const asyncGetProducts = () => async (dispatch, getState) => {
  try {
    let response = await axios.get("https://fakestoreapi.com/products");
    dispatch(getProducts(response.data));
  } catch (error) {
    console.error(error);
  }
};
