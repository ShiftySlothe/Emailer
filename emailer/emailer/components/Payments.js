import { Button } from '@chakra-ui/button';
import StripeCheckout from 'react-stripe-checkout';

const Payments = () => {
  return (
    <StripeCheckout
      name="Emailer"
      description="$5 for 5 email credits"
      amount={500}
      // token={(token) => {
      //   dispatch(handlePaymentToken(token));
      // }}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <Button>Add Credit</Button>
    </StripeCheckout>
  );
};

export default Payments;
