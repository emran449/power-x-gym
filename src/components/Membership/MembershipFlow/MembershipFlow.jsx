import React, { useState } from 'react';
import PersonalDetailsForm from '../PersonalDetailsForm/PersonalDetailsForm';
import BankPaymentForm from '../BankPaymentForm/BankPaymentForm';
import MembershipConfirmation from '../MembershipConfirmation/MembershipConfirmation';

const MembershipFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: {},
    payment: {}
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handlePersonalSubmit = (data) => {
    setFormData(prev => ({ ...prev, personal: data }));
    nextStep();
  };

  const handlePaymentSubmit = (data) => {
    setFormData(prev => ({ ...prev, payment: data }));
    nextStep();
  };

  return (
    <div>
      {step === 1 && <PersonalDetailsForm onSubmit={handlePersonalSubmit} />}
      {step === 2 && <BankPaymentForm onSubmit={handlePaymentSubmit} />}
      {step === 3 && <MembershipConfirmation data={formData} />}
    </div>
  );
};

export default MembershipFlow;