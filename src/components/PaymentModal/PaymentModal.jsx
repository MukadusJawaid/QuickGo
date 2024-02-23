import React from 'react';
import { Modal} from 'react-bootstrap';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import classes from './PaymentModal.module.css';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const PaymentModal = ({ product, onClose }) => {
  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className={classes.paymentText}>Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body className={classes.body}>
        <Elements stripe={stripePromise}>
          <PaymentForm product={product} onClose={onClose} />
        </Elements>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentModal;
