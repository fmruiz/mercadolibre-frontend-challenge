import axios from "axios";
import API from "../../service";

export const getAllProducts = (query: string) => async (dispatch: React.Dispatch<any>) => {
  try {
    const data = await API.get(`api/items?q=${query}`).then((res) => res.data);

    dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = (id: string) => async (dispatch: React.Dispatch<any>) => {
  try {
    const data = await API.get(`api/items/${id}`).then((res) => res.data);

    dispatch({
      type: "GET_PRODUCT_BY_ID",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
