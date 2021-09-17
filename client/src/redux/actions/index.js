import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";
import reformatFormData from "../../utils/reformatFormData";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handlePaymentToken = (paymentIntent) => async (dispatch) => {
  const res = await axios.post("/pay/stripe-checkout", paymentIntent);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  // Reformatted to match backend Mongo Schema
  const res = await axios.post("/api/surveys", reformatFormData(values));

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
