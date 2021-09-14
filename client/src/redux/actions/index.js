import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handlePaymentToken = (paymentIntent) => async (dispatch) => {
  console.log("Handle payment token called" + paymentIntent.id);
  const res = await axios.post("/pay/stripe-checkout", paymentIntent);
  dispatch({ type: FETCH_USER, payload: res.data });
};
