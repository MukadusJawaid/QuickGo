// PaymentForm.jsx
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import Button from '../Button/Button';
import classes from './PaymentModal.module.css';

const PaymentForm = ({ product }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: event.target.name.value,
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      console.log('Payment successful');
      setPaymentSuccess(true);
    }
  };
  var Router = require('react-router');
  if (paymentSuccess) {
   Router.browserHistory.push('/form')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name" className="mb-4">
        <Form.Label>Cardholder's Name</Form.Label>
        <Form.Control type="text" placeholder="Enter cardholder's name" required />
      </Form.Group>
      <Form.Group controlId="cardElement" className="mb-4">
        <Form.Label>Card Details</Form.Label>
        <CardElement />
      </Form.Group>
      <Button className={classes.button} variant='secondary' type="submit" disabled={!stripe}>
        Confirm Payment (${product.price})
      </Button>
    </Form>
  );
};

export default PaymentForm;
