import React, { useState } from 'react';

const BankPaymentForm = ({onSubmit}) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === 'creditCard') {
      console.log('Processing credit card:', cardDetails);
    } else {
      console.log('Redirecting to PayPal...');
    }
    // Proceed to next step
    onSubmit(cardDetails); // Send data to parent component

  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 2 of 3: Bank Payment</h2>

      <div>
        <label className='form-label'>
          <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            checked={paymentMethod === 'creditCard'}
            onChange={() => setPaymentMethod('creditCard')}
          />
          Credit Card
        </label>
        <label className='form-label'>
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
          />
          PayPal
        </label>
      </div>

      {paymentMethod === 'creditCard' && (
        <div>
          <label className='form-label'>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            placeholder="0000 0000 0000 0000"
            value={cardDetails.cardNumber}
            onChange={handleCardChange}
          />

          <label className='form-label'>Name on Card</label>
          <input
            type="text"
            name="nameOnCard"
            value={cardDetails.nameOnCard}
            onChange={handleCardChange}
          />

          <label className='form-label'>Expiry Date</label>
          <div>
            <input
              type="text"
              name="expiryMonth"
              placeholder="MM"
              value={cardDetails.expiryMonth}
              onChange={handleCardChange}
              style={{ width: '50px', marginRight: '10px' }}
            />
            <input
              type="text"
              name="expiryYear"
              placeholder="YY"
              value={cardDetails.expiryYear}
              onChange={handleCardChange}
              style={{ width: '50px' }}
            />
          </div>

          <label className='form-label'>CVV Code</label>
          <input
            type="text"
            name="cvv"
            value={cardDetails.cvv}
            onChange={handleCardChange}
          />
        </div>
      )}

      {paymentMethod === 'paypal' && (
        <p>You will be redirected to PayPal to complete your purchase securely.</p>
      )}

      <button type="submit">Next</button>
    </form>
  );
};

export default BankPaymentForm;