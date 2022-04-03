import axios from "axios";

export const getAllProducts = (query: string) => async (dispatch: any) => {
  try {
    const data = await axios
      .get(`http://localhost:9000/api/items?q=${query}`)
      .then((res) => res.data);

    dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = (id: string) => async (dispatch: any) => {
  try {
    const data = await axios
      .get(`http://localhost:9000/api/items/${id}`)
      .then((res) => res.data);

    dispatch({
      type: "GET_PRODUCT_BY_ID",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const isTableOpen = (id: boolean) => {
  return {
    type: "GET_PRODUCT_BY_ID",
    payload: id,
  };
};