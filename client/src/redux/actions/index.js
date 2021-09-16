import axios from "axios";
import validateEmails from "../../utils/validateEmails";
import { FETCH_USER } from "./types";

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

function reformatFormData(values) {
  let reformatted = { ...values };
  reformatted.recipients = [];
  let recipients = [];
  if (values.recipients.includes(",")) {
    recipients = values.recipients.split(",");
  } else {
    recipients.push(values.recipients);
  }

  recipients.forEach((recipient) => {
    reformatted.recipients.push({
      recipient: {
        email: recipient,
      },
    });
  });

  return reformatted;
}
