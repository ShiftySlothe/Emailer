//Custom Stripe Modal TBC

import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Center,
  Box,
  Flex,
} from "@chakra-ui/react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import * as actions from "../redux/actions";
import { useDispatch } from "react-redux";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
export const StripeCheckoutModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Center mt={3}>Checkout with Stripe</Center>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentToken, setPaymentToken] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (!stripe || !elements) {
      setIsLoading(false);
      return;
    }

    const { error: backendError, clientSecret } = await fetch(
      "/pay/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodType: "card",
          currency: "usd",
        }),
      }
    ).then((r) => r.json());

    if (backendError) {
      //TODO ADD ERROR HANDLING
      setIsLoading(false);
      return;
    }

    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
    if (stripeError) {
      setIsLoading(false);
      return;
    }
    setPaymentToken(paymentIntent);
    setIsLoading(false);
  };

  useEffect(() => {
    if (paymentToken) {
      dispatch(actions.handlePaymentToken(paymentToken));
      setPaymentToken(null);
    }
  }, [paymentToken, dispatch]);

  return (
    <Box p={3}>
      <CardElement />
      <Flex justifyContent="end">
        <Button
          mt={3}
          type="submit"
          disabled={!stripe || !elements}
          onClick={handleSubmit}
          isLoading={isLoading}
        >
          Pay
        </Button>
      </Flex>
    </Box>
  );
};
